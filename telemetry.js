/* FAR Blitz — anonymous usage statistics (owner's decision, 31 Oct 2026).

   The engine calls track(type, payload) at a few moments: quiz started,
   finished or left; question missed; level or trophy reached; a setting
   changed; backup used; rating sheet shown; app opened. This file is FAR's
   sender: it posts those to TelemetryDeck (nom.telemetrydeck.com, a
   privacy-focused analytics service in Germany) in its v2 format. The
   other apps don't ship this file, so their track() calls send nothing.

   What leaves the device, per signal: the TelemetryDeck app id, the
   signal type, a short payload of plain values (see the track() calls in
   app.js), the platform and device class, a session id (random, renewed
   each launch), and a client id: a random code made on first launch and
   SHA-256 hashed with a salt before it is sent; TelemetryDeck hashes it
   again with a salt that rotates daily. Never a name, email, device id,
   location, answer history or typed text.

   The Settings switch "Anonymous usage stats" (store.usage) gates every
   call inside the engine. window.BLITZ_NO_TELEMETRY keeps this file
   inert (tests). Signals that can't be sent (offline) wait in
   localStorage, at most MAX_QUEUE, and go out on the next launch or when
   the connection returns. On localhost every signal is marked
   isTestMode, which keeps it out of the real dashboards. */
(function () {
  'use strict';

  var APP_ID = '4C586802-9E3C-4192-B07F-0619A0680F94';
  var ENDPOINT = 'https://nom.telemetrydeck.com/v2/';
  var SALT = 'farblitz-2026';
  var ID_KEY = 'farblitz.usage-id';
  var QUEUE_KEY = 'farblitz.usage-queue';
  var SESSION_TYPE = 'TelemetryDeck.Session.started';
  var MAX_QUEUE = 200;

  if (window.BLITZ_NO_TELEMETRY) return;
  var subtle = window.crypto && window.crypto.subtle;
  if (!subtle || typeof fetch !== 'function' || !window.TextEncoder) return; // no secure context: nothing is sent

  function hex(bytes) {
    var s = '';
    for (var i = 0; i < bytes.length; i++) s += (bytes[i] + 256).toString(16).slice(1);
    return s;
  }
  function randomId() {
    var bytes = new Uint8Array(16);
    window.crypto.getRandomValues(bytes);
    return hex(bytes);
  }
  function read(key) { try { return localStorage.getItem(key); } catch (e) { return null; } }
  function write(key, v) { try { localStorage.setItem(key, v); } catch (e) { /* private mode */ } }

  var installId = read(ID_KEY);
  if (!installId) { installId = randomId(); write(ID_KEY, installId); }
  var sessionId = randomId();
  var hashed = null; // the client id as sent: sha256(installId + SALT), hex
  var testMode = /^(localhost|127\.0\.0\.1|\[::1\])$/.test(location.hostname) || !!window.BLITZ_TELEMETRY_TEST;

  var C = window.Capacitor;
  var platform = (C && C.getPlatform && C.getPlatform()) || 'web';
  var shortSide = Math.min(screen.width || 0, screen.height || 0);
  var defaults = { platform: platform, device: shortSide >= 700 ? 'tablet' : 'phone' };
  try { // the native shell's version, when its App plugin can say
    var AppPlugin = C && C.Plugins && C.Plugins.App;
    if (AppPlugin && AppPlugin.getInfo) {
      Promise.resolve(AppPlugin.getInfo()).then(function (i) { if (i && i.version) defaults.version = String(i.version); }).catch(function () {});
    }
  } catch (e) { /* no shell */ }

  function clientUser() {
    if (hashed) return Promise.resolve(hashed);
    return subtle.digest('SHA-256', new TextEncoder().encode(installId + SALT)).then(function (buf) {
      hashed = hex(new Uint8Array(buf));
      return hashed;
    });
  }

  function clean(payload) { // plain strings only; floatValue is TelemetryDeck's one numeric field
    var out = {};
    Object.keys(payload || {}).forEach(function (k) {
      var v = payload[k];
      if (v === undefined || v === null) return;
      out[k] = k === 'floatValue' ? Number(v) : String(v);
    });
    Object.keys(defaults).forEach(function (k) { if (!(k in out)) out[k] = defaults[k]; });
    return out;
  }

  function build(type, payload, cu) {
    var body = {
      appID: APP_ID, clientUser: cu, sessionID: sessionId, type: type,
      telemetryClientVersion: 'farblitz-telemetry 1', payload: clean(payload)
    };
    if (testMode) body.isTestMode = true;
    return body;
  }

  function post(signals) {
    return fetch(ENDPOINT, {
      method: 'POST', mode: 'cors', keepalive: true,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(signals)
    }).then(function (r) { if (!r.ok) throw new Error('status ' + r.status); });
  }

  function queued() { try { return JSON.parse(read(QUEUE_KEY) || '[]') || []; } catch (e) { return []; } }
  function enqueue(signal) {
    var q = queued();
    if (!signal.receivedAt) signal.receivedAt = new Date().toISOString(); // when it happened, for the late delivery
    q.push(signal);
    if (q.length > MAX_QUEUE) q = q.slice(q.length - MAX_QUEUE);
    write(QUEUE_KEY, JSON.stringify(q));
  }
  var flushing = false;
  function flush() {
    var q = queued();
    if (!q.length || flushing) return;
    flushing = true;
    post(q).then(function () { write(QUEUE_KEY, '[]'); }).catch(function () {}).then(function () { flushing = false; });
  }

  function send(type, payload) {
    if (type === SESSION_TYPE) sessionId = randomId(); // a new visit, a new session id
    clientUser().then(function (cu) {
      var signal = build(type, payload, cu);
      if (navigator.onLine === false) { enqueue(signal); return; } // it waits for the connection
      return post([signal]).catch(function () { enqueue(signal); });
    }).catch(function () { /* no hashing: nothing sent */ });
  }

  window.BLITZ_TELEMETRY = { send: send, flush: flush, service: 'TelemetryDeck' };
  window.addEventListener('online', flush);
  setTimeout(flush, 3000); // anything left over from an offline session
})();
