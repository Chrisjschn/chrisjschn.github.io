/* EA Blitz — quiz engine, gamification (XP/levels/combos/streaks), and views.
   Question bank comes from data/questions.js (FAR_SECTIONS / FAR_QUESTIONS globals). */

(function () {
  'use strict';

  var STORE_KEY = 'eablitz.v1';

  /* Anonymous usage statistics. Only an app that ships a sender
     (window.BLITZ_TELEMETRY: FAR's telemetry.js) sends anything, and only
     while the Settings switch "Anonymous usage stats" (store.usage) is on.
     Payloads are a few plain values; never a name, an answer or typed text. */
  function track(type, payload) {
    var t = window.BLITZ_TELEMETRY;
    if (!t || !t.send || !store || store.usage === false) return;
    try { t.send(type, payload || {}); } catch (e) { /* stats never break play */ }
  }
  function scoreBand(pct) {
    return pct >= 100 ? '100' : pct >= 90 ? '90-99' : pct >= 70 ? '70-89' : pct >= 50 ? '50-69' : 'under-50';
  }

  var XP_LEVELS = [
    { xp: 0, title: 'Undrafted Rookie' },
    { xp: 500, title: 'Practice Squad' },
    { xp: 1500, title: 'Special Teams' },
    { xp: 3500, title: 'Starter' },
    { xp: 7000, title: 'Team Captain' },
    { xp: 12000, title: 'MVP', clip: 'levelup' },
    { xp: 20000, title: 'Hall of Famer' }
  ];
  var MAX_FREEZES = 2;
  var BLITZ_SECONDS = 60;

  /* ---------------- storage ---------------- */

  function blankStore() {
    return {
      v: 2,
      q: {}, days: {}, frozenDays: {},
      totals: { answered: 0, correct: 0 },
      lastLength: 10,
      allSection: false,
      xp: 0, bestCombo: 0, longestStreak: 0, freezes: 0,
      dailyDone: {},
      blitz: { best: 0, last: 0, lastDate: '' },
      reminder: { enabled: false, time: '19:30' },
      trophies: {}, quizzes: 0, redeemed: 0,
      sound: true,
      celebrations: true,
      usage: true,
      icloud: { enabled: false }
    };
  }

  function loadStore() {
    try {
      var raw = localStorage.getItem(STORE_KEY);
      if (!raw) return blankStore();
      var s = JSON.parse(raw);
      if (!s || !s.v) return blankStore();
      // v1 → v2: keep progress, add gamification fields
      var base = blankStore();
      Object.keys(base).forEach(function (k) { if (s[k] === undefined) s[k] = base[k]; });
      s.v = 2;
      return s;
    } catch (e) {
      return blankStore();
    }
  }

  function saveStore() {
    try { localStorage.setItem(STORE_KEY, JSON.stringify(store)); } catch (e) { /* private mode */ }
    scheduleCloudPush();
  }

  var store = loadStore();

  function dateKey(d) {
    return d.getFullYear() + '-' + String(d.getMonth() + 1).padStart(2, '0') + '-' + String(d.getDate()).padStart(2, '0');
  }
  function todayKey() { return dateKey(new Date()); }

  function isActiveDay(key) { return !!(store.days[key] || store.frozenDays[key]); }

  var freezeSpent = 0; // days bridged by freezes, awaiting their home-screen banner

  /* Spend streak freezes to bridge missed days since the last active day.
     Only spends when the whole gap can be covered — freezes aren't wasted on
     an already-broken streak. */
  function reconcileFreezes() {
    if (store.freezes <= 0) return;
    var gap = [];
    var d = new Date();
    d.setDate(d.getDate() - 1);
    for (var i = 0; i < 60; i++) {
      var key = dateKey(d);
      if (isActiveDay(key)) {
        if (gap.length > 0 && gap.length <= store.freezes) {
          gap.forEach(function (g) { store.frozenDays[g] = true; });
          store.freezes -= gap.length;
          freezeSpent = gap.length; // surfaced as a banner on the next home render
          saveStore();
        }
        return;
      }
      gap.push(key);
      d.setDate(d.getDate() - 1);
    }
  }

  function dayStreak() {
    var streak = 0;
    var d = new Date();
    if (!isActiveDay(todayKey())) d.setDate(d.getDate() - 1);
    for (;;) {
      var key = dateKey(d);
      if (isActiveDay(key)) { streak++; d.setDate(d.getDate() - 1); } else break;
    }
    return streak;
  }

  function qstat(id) {
    return store.q[id] || { a: 0, c: 0, streak: 0, last: 0, wrongLast: false };
  }

  function recordAnswer(id, correct) {
    var s = store.q[id] || { a: 0, c: 0, streak: 0, last: 0, wrongLast: false };
    s.a++;
    if (correct) { s.c++; s.streak++; s.wrongLast = false; delete s.flag; }
    else { s.streak = 0; s.wrongLast = true; }
    s.last = Date.now();
    store.q[id] = s;
    store.totals.answered++;
    if (correct) store.totals.correct++;
    store.days[todayKey()] = (store.days[todayKey()] || 0) + 1;
    store.longestStreak = Math.max(store.longestStreak, dayStreak());
    saveStore();
  }

  function isMastered(id) {
    var s = qstat(id);
    // "Tackle again" means the player doesn't trust it yet: not mastered
    // until the next right answer clears the mark
    return s.a >= 2 && s.streak >= 2 && !s.flag;
  }

  /* Weakness score: 0 (solid) → ~1.4 (badly missed). Unseen questions score 0. */
  function weakness(id) {
    var s = qstat(id);
    if (s.a === 0) return 0;
    var missRate = 1 - s.c / s.a;
    return missRate + (s.wrongLast ? 0.4 : 0) + (s.flag ? 0.5 : 0);
  }

  /* ---------------- XP & levels ---------------- */

  /* A level may name its own celebration clip tier; others use the score tiers. */
  function levelClip(idx) {
    var lv = XP_LEVELS[idx];
    return (lv && lv.clip) || null;
  }

  function levelIndex(xp) {
    var idx = 0;
    for (var i = 0; i < XP_LEVELS.length; i++) if (xp >= XP_LEVELS[i].xp) idx = i;
    return idx;
  }

  function addXp(amount) {
    var before = levelIndex(store.xp);
    store.xp += amount;
    var after = levelIndex(store.xp);
    saveStore();
    if (after > before) queueLevelUp(after);
  }

  var pendingLevelUp = null; // level index awaiting its ceremony
  function queueLevelUp(levelIdx) { pendingLevelUp = levelIdx; }
  function maybeShowLevelUp() {
    if (pendingLevelUp === null) return;
    var lv = XP_LEVELS[pendingLevelUp];
    track('level.reached', { level: lv.title });
    var next = XP_LEVELS[pendingLevelUp + 1];
    document.getElementById('levelup-num').textContent = pendingLevelUp + 1;
    document.getElementById('levelup-title').textContent = lv.title;
    document.getElementById('levelup-next').textContent = next
      ? 'Next: ' + next.title + ' at ' + next.xp.toLocaleString() + ' XP'
      : 'You reached the top of the ladder!';
    var overlay = document.getElementById('levelup');
    overlay.classList.remove('hidden');
    // restart the entrance animations on repeat ceremonies
    overlay.querySelectorAll('.levelup-badge, .levelup-title, .levelup-next, .levelup-card').forEach(function (el) {
      el.style.animation = 'none';
      void el.offsetWidth;
      el.style.animation = '';
    });
    confetti();
    setTimeout(confetti, 500);
    buzz([30, 40, 30, 40, 60]);
    sfx('levelup');
    pendingLevelUp = null;
  }

  /* ---------------- streak ceremony ---------------- */

  var pendingStreak = null; // day count awaiting its ceremony (first finish of the day)

  var STREAK_NOTES = {
    3: 'Three straight days — habit forming!',
    7: 'One week strong!',
    14: 'Two weeks deep!',
    30: 'Thirty days. Unstoppable.',
    50: 'Fifty days!',
    100: 'One hundred days. Legend.'
  };

  function maybeShowStreakMoment() {
    if (pendingStreak === null) { maybeShowTrophyMoment(); return; }
    var days = pendingStreak;
    pendingStreak = null;
    var overlay = document.getElementById('streakmoment');
    var milestone = !!STREAK_NOTES[days];
    document.getElementById('streak-count').textContent = '';
    document.getElementById('streak-note').textContent =
      STREAK_NOTES[days] || (days === 1 ? 'A streak starts with one. See you tomorrow!' : 'Keep it alive tomorrow!');
    overlay.classList.toggle('milestone', milestone);
    overlay.classList.remove('hidden', 'leaving');
    overlay.querySelectorAll('.streak-card, .streak-flame, .streak-count, .streak-word, .streak-note').forEach(function (el) {
      el.style.animation = 'none';
      void el.offsetWidth;
      el.style.animation = '';
    });
    countUp(document.getElementById('streak-count'), days, '', days > 30 ? 900 : 600);
    if (milestone) { confetti(); setTimeout(confetti, 400); buzz([20, 30, 40]); sfx('levelup'); }
    else { buzz(15); sfx('combo2'); }
    var closed = false;
    function close() {
      if (closed) return;
      closed = true;
      overlay.classList.add('leaving');
      setTimeout(function () {
        overlay.classList.add('hidden');
        overlay.classList.remove('leaving');
        maybeShowTrophyMoment(); // trophies take the stage after the streak
      }, 350);
    }
    overlay.onclick = close;
    setTimeout(close, milestone ? 4200 : 2800);
  }

  /* ---------------- juice: confetti, toasts, haptics, count-ups ---------------- */

  /* One-line drop-in banner (streak freezes, future notices). Self-removes. */
  function bannerToast(text) {
    var b = document.createElement('div');
    b.className = 'banner-toast';
    b.textContent = text;
    document.body.appendChild(b);
    setTimeout(function () { b.classList.add('leaving'); }, 3200);
    setTimeout(function () { if (b.parentNode) b.parentNode.removeChild(b); }, 3650);
  }

  var CONFETTI_COLORS = ['#4f46e5', '#22c55e', '#f59e0b', '#f472b6', '#38bdf8'];

  function confetti() {
    for (var i = 0; i < 70; i++) {
      (function () {
        var p = document.createElement('div');
        p.className = 'confetti-piece';
        p.style.background = CONFETTI_COLORS[Math.floor(Math.random() * CONFETTI_COLORS.length)];
        p.style.left = (Math.random() * 100) + 'vw';
        var fall = 900 + Math.random() * 900;
        var drift = (Math.random() - 0.5) * 160;
        var rot = 360 + Math.random() * 540;
        p.animate([
          { transform: 'translate(0,0) rotate(0deg)', opacity: 1 },
          { transform: 'translate(' + drift + 'px, 105vh) rotate(' + rot + 'deg)', opacity: 0.9 }
        ], { duration: fall, easing: 'cubic-bezier(.2,.6,.4,1)' });
        document.body.appendChild(p);
        setTimeout(function () { p.remove(); }, fall);
      })();
    }
  }

  /* ---------------- native bridge (Capacitor) ---------------- */

  function isNative() {
    var C = window.Capacitor;
    return !!(C && C.isNativePlatform && C.isNativePlatform());
  }

  function notifPlugin() {
    var C = window.Capacitor;
    return (C && C.Plugins && C.Plugins.LocalNotifications) || null;
  }

  var REMINDER_ID = 7001;

  function reminderTime() {
    var t = (store.reminder && store.reminder.time) || '19:30';
    var parts = t.split(':');
    return { hour: Number(parts[0]) || 19, minute: Number(parts[1]) || 30 };
  }

  /* Re-schedule daily so the message always carries the live streak count. */
  function rescheduleReminder() {
    var LN = notifPlugin();
    if (!LN || !store.reminder || !store.reminder.enabled) return;
    var streak = dayStreak();
    var title = streak >= 2 ? 'Your ' + streak + '-day streak is on the line 🔥' : 'Time for a quick EA round 🧾';
    var body = streak >= 2 ? 'A few quick questions keeps it alive.' : 'A few questions, thirty seconds each. Future-EA you says thanks.';
    var when = reminderTime();
    Promise.resolve(LN.cancel({ notifications: [{ id: REMINDER_ID }] })).catch(function () {}).then(function () {
      return LN.schedule({
        notifications: [{
          id: REMINDER_ID,
          title: title,
          body: body,
          schedule: { on: { hour: when.hour, minute: when.minute }, repeats: true, allowWhileIdle: true }
        }]
      });
    }).catch(function () { /* scheduling unavailable */ });
  }

  function setReminderEnabled(enabled) {
    store.reminder = { enabled: enabled, time: (store.reminder && store.reminder.time) || '19:30' };
    saveStore();
    var LN = notifPlugin();
    if (!LN) return;
    if (!enabled) {
      Promise.resolve(LN.cancel({ notifications: [{ id: REMINDER_ID }] })).catch(function () {});
      return;
    }
    Promise.resolve(LN.requestPermissions()).then(function (res) {
      if (res && res.display === 'granted') {
        rescheduleReminder();
      } else {
        store.reminder.enabled = false;
        saveStore();
        renderReminderCard();
        alert('Notifications are turned off for EA Exam 2 Blitz. Enable them in iOS Settings to get streak reminders.');
      }
    }).catch(function () {});
  }

  /* ---------------- backup & restore ----------------
     Field-wise merge, never a blind overwrite: keep the better of each
     stat so restoring an older backup (or a second device) can't delete
     progress. Same shape the iCloud sync will use later. */

  var BACKUP_TAG = 'eablitz-backup';

  function mergeStores(base, incoming) {
    var out = JSON.parse(JSON.stringify(base));
    if (!incoming || typeof incoming !== 'object') return out;

    // per-question stats: keep the record with more attempts; tie → more recent
    var iq = incoming.q || {};
    Object.keys(iq).forEach(function (id) {
      var a = out.q[id], b = iq[id];
      if (!b || typeof b.a !== 'number') return;
      if (!a || b.a > a.a || (b.a === a.a && (b.last || 0) > (a.last || 0))) out.q[id] = b;
    });

    // activity days: union, keeping the higher answer count
    ['days', 'frozenDays', 'dailyDone'].forEach(function (key) {
      var src = incoming[key] || {};
      Object.keys(src).forEach(function (d) {
        if (out[key][d] === undefined || src[d] > out[key][d]) out[key][d] = src[d];
      });
    });

    var it = incoming.totals || {};
    out.totals = {
      answered: Math.max(out.totals.answered || 0, it.answered || 0),
      correct: Math.max(out.totals.correct || 0, it.correct || 0)
    };
    out.xp = Math.max(out.xp || 0, incoming.xp || 0);
    out.bestCombo = Math.max(out.bestCombo || 0, incoming.bestCombo || 0);
    out.longestStreak = Math.max(out.longestStreak || 0, incoming.longestStreak || 0);
    out.freezes = Math.max(out.freezes || 0, incoming.freezes || 0);
    // counters that trophies and pep talks read: keep the higher
    ['quizzes', 'redeemed', 'roughRounds'].forEach(function (k) {
      out[k] = Math.max(out[k] || 0, incoming[k] || 0);
    });
    // trophies: every one won on either side, dated by the earlier win
    out.trophies = out.trophies || {};
    var itr = incoming.trophies || {};
    Object.keys(itr).forEach(function (id) {
      if (typeof itr[id] !== 'number') return;
      if (!out.trophies[id] || itr[id] < out.trophies[id]) out.trophies[id] = itr[id];
    });
    var ib = incoming.blitz || {};
    out.blitz = {
      best: Math.max((out.blitz && out.blitz.best) || 0, ib.best || 0),
      last: (out.blitz && out.blitz.last) || ib.last || 0,
      lastDate: (out.blitz && out.blitz.lastDate) || ib.lastDate || ''
    };
    return out;
  }

  function backupPayload() {
    return JSON.stringify({ tag: BACKUP_TAG, v: 1, saved: new Date().toISOString(), store: store });
  }

  function backupFilename() {
    return 'ea-blitz-backup-' + todayKey() + '.json';
  }

  function doExport() {
    track('backup.saved', { how: 'file' });
    var text = backupPayload();
    var blob = new Blob([text], { type: 'application/json' });
    var file = null;
    try { file = new File([blob], backupFilename(), { type: 'application/json' }); } catch (e) { /* older browsers */ }

    // Prefer the native share sheet (iOS: "Save to Files", AirDrop, Mail…)
    if (file && navigator.canShare && navigator.canShare({ files: [file] })) {
      navigator.share({ files: [file], title: 'EA Exam 2 Blitz progress backup' }).catch(function () {});
      return;
    }
    var url = URL.createObjectURL(blob);
    var a = document.createElement('a');
    a.href = url;
    a.download = backupFilename();
    document.body.appendChild(a);
    a.click();
    a.remove();
    setTimeout(function () { URL.revokeObjectURL(url); }, 1000);
    flashBackupNote('Backup saved. Keep the file somewhere safe.');
  }

  function doCopyCode() {
    track('backup.saved', { how: 'code' });
    var code = btoa(unescape(encodeURIComponent(backupPayload())));
    function fallback() {
      var ta = document.getElementById('restore-text');
      ta.value = code;
      ta.select();
      flashBackupNote('Code placed in the box below — copy it from there.');
    }
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(code)
        .then(function () { flashBackupNote('Backup code copied. Paste it somewhere safe.'); })
        .catch(fallback);
    } else {
      fallback();
    }
  }

  function parseBackup(text) {
    var raw = (text || '').trim();
    if (!raw) return null;
    var obj = null;
    try {
      obj = JSON.parse(raw);
    } catch (e) {
      try { obj = JSON.parse(decodeURIComponent(escape(atob(raw.replace(/\s+/g, ''))))); } catch (e2) { return null; }
    }
    if (!obj || obj.tag !== BACKUP_TAG || !obj.store || typeof obj.store !== 'object') return null;
    if (!obj.store.q || typeof obj.store.q !== 'object') return null;
    return obj;
  }

  function applyRestore(text) {
    var parsed = parseBackup(text);
    if (!parsed) {
      flashBackupNote('That backup could not be read. Paste the whole code or pick the backup file.', true);
      return;
    }
    var before = store.totals.answered;
    store = mergeStores(store, parsed.store);
    track('backup.restored', {});
    saveStore();
    var gained = store.totals.answered - before;
    document.getElementById('restore-text').value = '';
    flashBackupNote('Restored — merged with what was already here (' + (gained > 0 ? '+' + gained + ' answers' : 'nothing new to add') + ').');
    renderStats();
  }

  function flashBackupNote(msg, isError) {
    var el = document.getElementById('backup-note');
    el.textContent = msg;
    el.classList.remove('hidden');
    el.classList.toggle('bad-note', !!isError);
    clearTimeout(el._hide);
    el._hide = setTimeout(function () { el.classList.add('hidden'); }, 6000);
  }

  /* ---------------- iCloud sync (native only, opt-in) ----------------
     Backed by the CloudKV plugin registered in the iOS shell
     (NSUbiquitousKeyValueStore). The payload is a regular backup, and every
     sync direction goes through mergeStores — the cloud can never erase
     local progress, only add to it. */

  function cloudPlugin() {
    var C = window.Capacitor;
    return (C && C.Plugins && C.Plugins.CloudKV) || null;
  }

  function cloudEnabled() {
    return !!(store.icloud && store.icloud.enabled && cloudPlugin());
  }

  var cloudPushTimer = null;

  /* Batches the many saveStore calls a quiz makes into one cloud write. */
  function scheduleCloudPush() {
    if (!cloudEnabled()) return;
    clearTimeout(cloudPushTimer);
    cloudPushTimer = setTimeout(pushToCloud, 1500);
  }

  function pushToCloud() {
    var KV = cloudPlugin();
    if (!KV || !cloudEnabled()) return;
    Promise.resolve(KV.set({ value: backupPayload() })).then(function (res) {
      setCloudStatus(res && res.account === false
        ? 'Sign in to iCloud in iOS Settings to back up.'
        : 'Backed up to iCloud a moment ago.');
    }).catch(function () {
      setCloudStatus('iCloud unreachable — will retry after your next quiz.');
    });
  }

  function pullFromCloud(interactive) {
    var KV = cloudPlugin();
    if (!KV || !cloudEnabled()) return;
    Promise.resolve(KV.get()).then(function (res) {
      if (res && res.account === false) {
        setCloudStatus('Sign in to iCloud in iOS Settings to back up.');
        return;
      }
      var parsed = res && res.value ? parseBackup(res.value) : null;
      if (parsed) {
        var before = JSON.stringify(store);
        var merged = mergeStores(store, parsed.store);
        if (JSON.stringify(merged) !== before) {
          store = merged;
          saveStore();
          renderStats();
          renderHome();
        }
      }
      pushToCloud();
      if (interactive) setCloudStatus(parsed ? 'Synced with iCloud.' : 'iCloud sync is on — progress now backs up automatically.');
    }).catch(function () {
      if (interactive) setCloudStatus('Could not reach iCloud — it will retry automatically.');
    });
  }

  function setCloudStatus(msg) {
    var el = document.getElementById('icloud-status');
    if (el && msg) el.textContent = msg;
  }

  function renderCloudCard() {
    var card = document.getElementById('icloud-card');
    if (!cloudPlugin()) { card.classList.add('hidden'); return; }
    card.classList.remove('hidden');
    var on = !!(store.icloud && store.icloud.enabled);
    document.getElementById('icloud-toggle').checked = on;
    if (!on) setCloudStatus('Off — progress stays on this device only.');
  }

  function setCloudEnabled(on) {
    store.icloud = { enabled: on };
    saveStore();
    renderCloudCard();
    if (on) {
      setCloudStatus('Connecting to iCloud…');
      pullFromCloud(true);
    }
  }

  function initCloud() {
    var KV = cloudPlugin();
    if (!KV) return;
    if (KV.addListener) {
      try {
        KV.addListener('cloudChanged', function () { pullFromCloud(false); });
      } catch (e) { /* listener unavailable */ }
    }
    if (cloudEnabled()) pullFromCloud(false);
  }

  function renderSoundCard() {
    document.getElementById('sound-toggle').checked = store.sound !== false;
    document.getElementById('anim-toggle').checked = store.celebrations !== false;
    document.getElementById('usage-card').classList.toggle('hidden', !window.BLITZ_TELEMETRY);
    document.getElementById('usage-toggle').checked = store.usage !== false;
  }

  function renderReminderCard() {
    var card = document.getElementById('reminder-card');
    if (!notifPlugin()) { card.classList.add('hidden'); return; }
    card.classList.remove('hidden');
    document.getElementById('reminder-toggle').checked = !!(store.reminder && store.reminder.enabled);
    document.getElementById('reminder-time').value = (store.reminder && store.reminder.time) || '19:30';
  }

  /* ---------------- sound effects (synthesized — no audio assets) ----------------
     Short WebAudio tones triggered only by user actions, so mobile autoplay
     rules are always satisfied. Swappable for licensed audio files later. */

  var soundCtx = null;

  function audioCtx() {
    if (store.sound === false) return null;
    try {
      var AC = window.AudioContext || window.webkitAudioContext;
      if (!AC) return null;
      if (!soundCtx) soundCtx = new AC();
      if (soundCtx.state === 'suspended') soundCtx.resume();
      return soundCtx;
    } catch (e) { return null; }
  }

  function tone(ctx, freq, when, dur, type, vol, slideTo) {
    var o = ctx.createOscillator();
    var g = ctx.createGain();
    o.type = type;
    o.frequency.setValueAtTime(freq, when);
    if (slideTo) o.frequency.exponentialRampToValueAtTime(slideTo, when + dur);
    g.gain.setValueAtTime(0.0001, when);
    g.gain.linearRampToValueAtTime(vol, when + 0.012);
    g.gain.exponentialRampToValueAtTime(0.0001, when + dur);
    o.connect(g);
    g.connect(ctx.destination);
    o.start(when);
    o.stop(when + dur + 0.03);
  }

  /* One tackle, two weights: a highpass crack, a bandpass pad crunch, and a
     pitch-dropping body thump. `k` scales gain and length together, so the
     lighter version is not just quieter but shorter — it has to clear before
     the next question lands. */
  function tackleHit(ctx, when, k) {
    var samples = function (sec) { return Math.max(1, Math.floor(ctx.sampleRate * sec * k)); };

    var cbuf = ctx.createBuffer(1, samples(0.08), ctx.sampleRate);
    var cd = cbuf.getChannelData(0);
    for (var j = 0; j < cd.length; j++) cd[j] = (Math.random() * 2 - 1) * Math.pow(1 - j / cd.length, 2);
    var c = ctx.createBufferSource(); c.buffer = cbuf;
    var hf = ctx.createBiquadFilter(); hf.type = 'highpass'; hf.frequency.value = 1800;
    var cg = ctx.createGain(); cg.gain.setValueAtTime(0.45 * k, when);
    c.connect(hf); hf.connect(cg); cg.connect(ctx.destination);
    c.start(when);

    var mbuf = ctx.createBuffer(1, samples(0.12), ctx.sampleRate);
    var md = mbuf.getChannelData(0);
    for (var n = 0; n < md.length; n++) md[n] = (Math.random() * 2 - 1) * Math.pow(1 - n / md.length, 1.5);
    var m = ctx.createBufferSource(); m.buffer = mbuf;
    var bf = ctx.createBiquadFilter(); bf.type = 'bandpass'; bf.frequency.value = 420; bf.Q.value = 1.2;
    var mg = ctx.createGain(); mg.gain.setValueAtTime(0.4 * k, when);
    m.connect(bf); bf.connect(mg); mg.connect(ctx.destination);
    m.start(when);

    var o2 = ctx.createOscillator(), g2 = ctx.createGain();
    o2.type = 'sine';
    o2.frequency.setValueAtTime(150, when);
    o2.frequency.exponentialRampToValueAtTime(38, when + 0.18 * k);
    g2.gain.setValueAtTime(0.55 * k, when);
    g2.gain.exponentialRampToValueAtTime(0.0001, when + 0.35 * k);
    o2.connect(g2); g2.connect(ctx.destination);
    o2.start(when); o2.stop(when + 0.4 * k);
  }

  /* Launch hit: the app opens on a full-strength tackle the moment the mascot
     slams in. No riser, no buildup. Skipped when sound is off or the platform
     hasn't unlocked audio (never fires late). */
  function introSting() {
    try {
      var ctx = audioCtx();
      if (!ctx) return;
      ctx.resume && ctx.resume();
      setTimeout(function () {
        if (ctx.state !== 'running') return; // audio locked (web pre-gesture)
        tackleHit(ctx, ctx.currentTime + 0.03, 1);
      }, 40);
    } catch (e) { /* audio unavailable — the intro is fine silent */ }
  }

  function sfx(name) {
    var ctx = audioCtx();
    if (!ctx) return;
    try {
      var t = ctx.currentTime + 0.01;
      if (name === 'correct') {          // quick pleasant two-note blip
        tone(ctx, 659, t, 0.09, 'sine', 0.16);
        tone(ctx, 880, t + 0.07, 0.15, 'sine', 0.16);
      } else if (name === 'wrong') {     // soft low thud, not punishing
        tone(ctx, 185, t, 0.2, 'triangle', 0.18, 115);
      } else if (name === 'combo2') {    // rising blip at ×2
        tone(ctx, 523, t, 0.07, 'square', 0.07);
        tone(ctx, 659, t + 0.06, 0.07, 'square', 0.07);
        tone(ctx, 784, t + 0.12, 0.11, 'square', 0.07);
      } else if (name === 'tackle') {    // top multiplier — a hit you delivered
        tackleHit(ctx, t, 0.55);
      } else if (name === 'perfect') {   // sparkle arpeggio
        [1047, 1319, 1568, 2093].forEach(function (f, i) {
          tone(ctx, f, t + i * 0.06, 0.2, 'sine', 0.11);
        });
      } else if (name === 'levelup') {   // little fanfare
        tone(ctx, 523, t, 0.5, 'triangle', 0.13);
        tone(ctx, 659, t + 0.12, 0.5, 'triangle', 0.13);
        tone(ctx, 784, t + 0.24, 0.55, 'triangle', 0.13);
        tone(ctx, 1047, t + 0.36, 0.7, 'triangle', 0.15);
        tone(ctx, 2093, t + 0.52, 0.4, 'sine', 0.05);
      } else if (name === 'tick') {      // blitz final-seconds urgency
        tone(ctx, 1050, t, 0.045, 'square', 0.06);
      } else if (name === 'start') {     // gentle rising chime when a quiz kicks off
        tone(ctx, 392, t, 0.09, 'sine', 0.13);
        tone(ctx, 523, t + 0.07, 0.09, 'sine', 0.13);
        tone(ctx, 659, t + 0.14, 0.16, 'sine', 0.13);
      }
    } catch (e) { /* audio unavailable */ }
  }

  function buzz(pattern) {
    try {
      // Native haptics when wrapped in Capacitor (iOS has no navigator.vibrate)
      var C = window.Capacitor;
      if (C && C.isNativePlatform && C.isNativePlatform() && C.Plugins && C.Plugins.Haptics) {
        var strong = Array.isArray(pattern) || pattern >= 30;
        C.Plugins.Haptics.impact({ style: strong ? 'MEDIUM' : 'LIGHT' });
        return;
      }
      if (navigator.vibrate) navigator.vibrate(pattern);
    } catch (e) { /* unsupported */ }
  }

  function xpToast(text) {
    var t = document.getElementById('xp-toast');
    t.textContent = text;
    t.classList.remove('hidden');
    t.style.animation = 'none';
    void t.offsetWidth; // restart animation
    t.style.animation = '';
    clearTimeout(t._hide);
    t._hide = setTimeout(function () { t.classList.add('hidden'); }, 1000);
  }

  function countUp(el, target, suffix, ms) {
    var start = performance.now();
    function frame(now) {
      var k = Math.min(1, (now - start) / (ms || 700));
      var eased = 1 - Math.pow(1 - k, 3);
      el.textContent = Math.round(target * eased) + (suffix || '');
      if (k < 1) requestAnimationFrame(frame);
    }
    requestAnimationFrame(frame);
  }

  /* ---------------- question helpers ---------------- */

  function sectionById(id) {
    for (var i = 0; i < FAR_SECTIONS.length; i++) if (FAR_SECTIONS[i].id === id) return FAR_SECTIONS[i];
    return { id: id, name: id, short: id, emoji: '📄' };
  }

  function questionsForSection(id) {
    return FAR_QUESTIONS.filter(function (q) { return q.section === id; });
  }

  function shuffle(arr, rnd) {
    var random = rnd || Math.random;
    var a = arr.slice();
    for (var i = a.length - 1; i > 0; i--) {
      var j = Math.floor(random() * (i + 1));
      var t = a[i]; a[i] = a[j]; a[j] = t;
    }
    return a;
  }

  /* Prefer least-recently-seen questions, with jitter so quizzes vary. */
  function pickFresh(pool, n) {
    var ranked = pool.map(function (q) {
      var s = qstat(q.id);
      return { q: q, key: (s.last || 0) + Math.random() * 8.64e7 }; // ±1 day of jitter
    }).sort(function (x, y) { return x.key - y.key; });
    return shuffle(ranked.slice(0, n).map(function (r) { return r.q; }));
  }

  function buildQuickQuiz(n) { return pickFresh(FAR_QUESTIONS, n); }
  function buildSectionQuiz(sectionId, n) { return pickFresh(questionsForSection(sectionId), n); }

  function sectionAccuracy(id) {
    var qs = questionsForSection(id);
    var a = 0, c = 0, seen = 0;
    qs.forEach(function (q) {
      var s = qstat(q.id);
      a += s.a; c += s.c;
      if (s.a > 0) seen++;
    });
    return { attempts: a, correct: c, seen: seen, total: qs.length, pct: a > 0 ? Math.round(100 * c / a) : null };
  }

  /* Weak-spot quiz: worst-scored seen questions first, then unseen questions
     from the weakest sections, then anything fresh. */
  function buildWeakQuiz(n) {
    var scored = FAR_QUESTIONS
      .map(function (q) { return { q: q, w: weakness(q.id) }; })
      .filter(function (x) { return x.w > 0.15; })
      .sort(function (x, y) { return y.w - x.w || Math.random() - 0.5; })
      .map(function (x) { return x.q; });

    var quizList = scored.slice(0, n);

    if (quizList.length < n) {
      var weakSections = FAR_SECTIONS
        .map(function (s) { var acc = sectionAccuracy(s.id); return { id: s.id, pct: acc.pct === null ? 101 : acc.pct }; })
        .sort(function (a, b) { return a.pct - b.pct; })
        .map(function (s) { return s.id; });
      var chosen = {};
      quizList.forEach(function (q) { chosen[q.id] = true; });
      weakSections.forEach(function (sid) {
        questionsForSection(sid).forEach(function (q) {
          if (quizList.length < n && !chosen[q.id] && qstat(q.id).a === 0) { quizList.push(q); chosen[q.id] = true; }
        });
      });
      if (quizList.length < n) {
        pickFresh(FAR_QUESTIONS.filter(function (q) { return !chosen[q.id]; }), n - quizList.length)
          .forEach(function (q) { quizList.push(q); });
      }
    }
    return shuffle(quizList);
  }

  /* Daily Challenge: deterministic 5 questions from the date, so every player
     gets the same set — works fully offline. */
  function mulberry32(a) {
    return function () {
      a |= 0; a = a + 0x6D2B79F5 | 0;
      var t = Math.imul(a ^ a >>> 15, 1 | a);
      t = t + Math.imul(t ^ t >>> 7, 61 | t) ^ t;
      return ((t ^ t >>> 14) >>> 0) / 4294967296;
    };
  }

  function buildDailyQuiz() {
    var seed = Number(todayKey().replace(/-/g, ''));
    var rnd = mulberry32(seed);
    var sections = shuffle(FAR_SECTIONS.map(function (s) { return s.id; }), rnd).slice(0, 5);
    return sections.map(function (sid) {
      var qs = questionsForSection(sid);
      return qs[Math.floor(rnd() * qs.length)];
    });
  }

  function dailyDoneToday() { return store.dailyDone[todayKey()] !== undefined; }

  /* ---------------- view routing ---------------- */

  var views = ['home', 'sections', 'quiz', 'results', 'stats', 'settings', 'review'];
  var currentView = 'home';

  var titles = {
    home: 'EA Exam 2 Blitz',
    sections: 'Sections',
    quiz: 'Quiz',
    results: 'Results',
    stats: 'My Progress',
    settings: 'Settings',
    review: 'Review'
  };

  function show(view) {
    if (currentView === 'results' && view === 'home') setTimeout(maybeAskForReview, 600);
    views.forEach(function (v) {
      document.getElementById('view-' + v).classList.toggle('hidden', v !== view);
    });
    currentView = view;
    document.getElementById('topbar-title').textContent = titles[view];
    document.getElementById('btn-back').classList.toggle('hidden', view === 'home');
    document.getElementById('btn-settings').classList.toggle('hidden', view !== 'home');
    var streak = dayStreak();
    var chip = document.getElementById('streak-chip');
    chip.classList.toggle('hidden', streak === 0 && store.freezes === 0);
    // evening nudge: streak alive but today untouched -- the flame flickers
    chip.classList.toggle('at-risk', streak > 0 && !isActiveDay(todayKey()) && new Date().getHours() >= 17);
    document.getElementById('streak-days').textContent = streak;
    document.getElementById('freeze-part').classList.toggle('hidden', store.freezes === 0);
    document.getElementById('freeze-count').textContent = store.freezes;
    if (view === 'home') renderHome();
    if (view === 'sections') renderSections();
    if (view === 'stats') renderStats();
    if (view === 'settings') renderSettings();
    window.scrollTo(0, 0);
  }

  function stopTimer() {
    if (quiz.timerId) { clearInterval(quiz.timerId); quiz.timerId = null; }
  }

  function goBack() {
    if (currentView === 'quiz' && quiz.answeredCount > 0 && quiz.index < quiz.questions.length) {
      if (!confirm('Leave this quiz? Answered questions still count toward your stats.')) return;
      track('quiz.left', { mode: quiz.mode, answered: String(quiz.answeredCount) });
    }
    stopTimer();
    show(currentView === 'review' ? 'sections' : 'home');
  }

  /* Rating prompt: the platform's own review sheet (Apple, or Google Play),
     at a natural pause. Leaving results for home after a strong round, once
     the player has finished 3+ quizzes on 2+ days, and at most every 60 days
     from our side; the platforms cap it further. No plugin on the web. */
  var REVIEW_GAP_DAYS = 60;
  var lastRoundStrong = false;

  function reviewPlugin() {
    var C = window.Capacitor;
    return (C && C.Plugins && C.Plugins.InAppReview) || null;
  }

  function maybeAskForReview() {
    var R = reviewPlugin();
    var strong = lastRoundStrong;
    lastRoundStrong = false;
    if (!R || !strong || currentView !== 'home') return;
    if ((store.quizzes || 0) < 3 || Object.keys(store.days || {}).length < 2) return;
    if (Date.now() - (store.reviewAskedAt || 0) < REVIEW_GAP_DAYS * 864e5) return;
    store.reviewAskedAt = Date.now();
    saveStore();
    track('review.prompted', {});
    try { Promise.resolve(R.requestReview()).catch(function () {}); } catch (e) { /* unavailable */ }
  }

  /* "Studying another part?" card linking the EA apps to each other. Only the
     EA apps carry the markup. Hidden on Android until they are on Google Play. */
  (function () {
    var card = document.getElementById('sister-apps');
    if (!card) return;
    var C = window.Capacitor;
    var android = !!(C && C.getPlatform && C.getPlatform() === 'android');
    card.classList.toggle('hidden', android);
  })();

  /* Android back button. Capacitor's App plugin reports it; the web and iOS
     never do, so this is inert there. Without a listener Android closes the
     app from any screen. Dismiss an open overlay the way a tap would, else
     step back a view like the header arrow, and only leave from home. */
  (function () {
    var C = window.Capacitor;
    var AppPlugin = C && C.Plugins && C.Plugins.App;
    if (!AppPlugin || !AppPlugin.addListener) return;
    AppPlugin.addListener('backButton', function () {
      if (!document.getElementById('levelup').classList.contains('hidden')) {
        document.getElementById('levelup-close').click();
        return;
      }
      var taps = ['celebrate', 'trophymoment', 'streakmoment'];
      for (var i = 0; i < taps.length; i++) {
        var overlay = document.getElementById(taps[i]);
        if (overlay && !overlay.classList.contains('hidden')) { overlay.click(); return; }
      }
      if (currentView !== 'home') { goBack(); return; }
      AppPlugin.exitApp();
    });
  })();

  /* Swipe-back: drag right from the left edge to go home, iOS style.
     The active view follows the finger; past the threshold it commits. */
  (function () {
    var EDGE = 60, THRESHOLD = 90;
    var startX = 0, startY = 0, dragging = false, activeEl = null;

    document.addEventListener('touchstart', function (e) {
      if (currentView === 'home' || e.touches.length !== 1) return;
      var t = e.touches[0];
      if (t.clientX > EDGE) return;
      startX = t.clientX;
      startY = t.clientY;
      dragging = true;
      activeEl = document.getElementById('view-' + currentView);
    }, { passive: true });

    document.addEventListener('touchmove', function (e) {
      if (!dragging || !activeEl) return;
      var t = e.touches[0];
      var dx = t.clientX - startX, dy = t.clientY - startY;
      if (Math.abs(dy) > 70 && Math.abs(dy) > Math.abs(dx)) {
        activeEl.style.transform = '';
        activeEl.style.opacity = '';
        dragging = false;
        return;
      }
      if (dx > 0) {
        activeEl.style.transform = 'translateX(' + dx + 'px)';
        activeEl.style.opacity = String(Math.max(0.4, 1 - dx / 600));
      }
    }, { passive: true });

    document.addEventListener('touchend', function (e) {
      if (!dragging || !activeEl) return;
      var dx = e.changedTouches[0].clientX - startX;
      var el = activeEl;
      dragging = false;
      activeEl = null;
      el.style.transition = 'transform .18s ease, opacity .18s ease';
      if (dx > THRESHOLD) goBack();
      el.style.transform = '';
      el.style.opacity = '';
      setTimeout(function () { el.style.transition = ''; }, 200);
    }, { passive: true });
  })();

  /* ---------------- home ---------------- */

  function renderHome() {
    reconcileFreezes();
    if (freezeSpent > 0) {
      var spent = freezeSpent;
      freezeSpent = 0;
      bannerToast('❄️ ' + (spent === 1 ? 'Streak freeze used' : spent + ' streak freezes used') +
        ' — your ' + dayStreak() + '-day streak survived!');
    }
    var t = store.totals;
    document.getElementById('home-answered').textContent = t.answered;
    document.getElementById('home-accuracy').textContent = t.answered ? Math.round(100 * t.correct / t.answered) + '%' : '–';
    var mastered = FAR_QUESTIONS.filter(function (q) { return isMastered(q.id); }).length;
    document.getElementById('home-mastered').textContent = mastered;

    // level card
    var li = levelIndex(store.xp);
    var cur = XP_LEVELS[li];
    var next = XP_LEVELS[li + 1];
    document.getElementById('level-title').textContent = cur.title;
    document.getElementById('level-num').textContent = 'Lv ' + (li + 1);
    document.getElementById('xp-text').textContent = store.xp.toLocaleString() + ' XP';
    if (next) {
      var span = next.xp - cur.xp;
      document.getElementById('xp-fill').style.width = Math.round(100 * (store.xp - cur.xp) / span) + '%';
      document.getElementById('xp-next').textContent = (next.xp - store.xp).toLocaleString() + ' XP to ' + next.title;
    } else {
      document.getElementById('xp-fill').style.width = '100%';
      document.getElementById('xp-next').textContent = 'Top of the ladder!';
    }

    // daily
    var dailyBtn = document.getElementById('btn-daily');
    var dailySub = document.getElementById('daily-sub');
    if (dailyDoneToday()) {
      dailyBtn.classList.add('done');
      dailySub.textContent = '✓ Done today: ' + store.dailyDone[todayKey()] + '/5 — back tomorrow!';
    } else {
      dailyBtn.classList.remove('done');
      dailySub.textContent = '5 questions · finish for +30 XP & a ❄️ streak freeze';
    }

    // blitz
    var b = store.blitz;
    document.getElementById('blitz-sub').textContent = b.best > 0
      ? 'Best: ' + b.best + (b.last && b.last < b.best ? ' · last: ' + b.last + ' — beat it!' : ' — beat it!')
      : '60 seconds. How many can you get?';

    var missed = FAR_QUESTIONS.filter(function (q) { return weakness(q.id) > 0.15; }).length;
    document.getElementById('weak-sub').textContent = missed > 0
      ? missed + ' shaky question' + (missed === 1 ? '' : 's') + ' waiting for you'
      : 'Rebuilds from questions you miss';

    document.querySelectorAll('.length-opt').forEach(function (b2) {
      b2.classList.toggle('selected', Number(b2.dataset.len) === store.lastLength);
    });
  }

  function quizLength() { return store.lastLength || 10; }

  /* ---------------- sections ---------------- */

  function renderSections() {
    document.getElementById('allq-toggle').checked = !!store.allSection;
    var ul = document.getElementById('section-list');
    ul.innerHTML = '';
    FAR_SECTIONS.forEach(function (s) {
      var acc = sectionAccuracy(s.id);
      var li = document.createElement('li');
      li.className = 'section-li';
      var btn = document.createElement('button');
      btn.className = 'section-row';
      btn.innerHTML =
        '<span class="section-emoji">' + s.emoji + '</span>' +
        '<span class="section-info">' +
          '<p class="section-name">' + s.name + '</p>' +
          '<span class="meter"><span class="meter-fill" style="width:' + (acc.pct === null ? 0 : acc.pct) + '%"></span></span>' +
          '<p class="section-sub">' + acc.seen + ' of ' + acc.total + ' questions seen</p>' +
        '</span>' +
        '<span class="section-pct">' + (acc.pct === null ? '—' : acc.pct + '%') + '</span>';
      btn.addEventListener('click', function () {
        lastStart = { label: '🔁 Run It Back', again: function () { startQuiz(buildSectionQuiz(s.id, store.allSection ? questionsForSection(s.id).length : quizLength()), s.short, 'normal'); } };
        lastStart.again();
      });
      var rev = document.createElement('button');
      rev.className = 'review-btn';
      rev.textContent = '\ud83d\udcd6';
      rev.setAttribute('aria-label', 'Read all ' + s.name + ' questions');
      rev.addEventListener('click', function () { openReview(s.id); });
      li.appendChild(btn);
      li.appendChild(rev);
      ul.appendChild(li);
    });
  }

  /* ---------------- review (read-through, unscored) ---------------- */

  function esc(t) {
    return String(t).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  }

  /* Bank text may mark emphasis as **word**; render it bold, everything else escaped. */
  function fmt(t) {
    return esc(t).replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>');
  }

  function openReview(secId) {
    var sec = sectionById(secId);
    var qs = FAR_QUESTIONS.filter(function (q) { return q.section === secId; });
    document.getElementById('review-intro').textContent =
      sec.emoji + ' ' + sec.name + ' \u2014 all ' + qs.length + ' questions with answers. Reading here is not scored.';
    var ul = document.getElementById('review-list');
    ul.innerHTML = '';
    qs.forEach(function (q, i) {
      var st = qstat(q.id);
      var mark = st.a === 0 ? ''
        : st.wrongLast ? '<span class="review-mark bad">\u2717 missed last time</span>'
        : isMastered(q.id) ? '<span class="review-mark good">\u2713 mastered</span>' : '';
      var li = document.createElement('li');
      li.className = 'review-card';
      li.innerHTML =
        '<p class="review-topic">' + (i + 1) + ' / ' + qs.length + ' \u00b7 ' + esc(q.topic) + mark + '</p>' +
        '<p class="review-stem">' + esc(q.q) + '</p>' +
        '<p class="review-answer">\u2705 ' + fmt(q.choices[q.answer]) + '</p>' +
        '<p class="review-explain">' + fmt(q.explain) + '</p>';
      ul.appendChild(li);
    });
    show('review');
    document.getElementById('topbar-title').textContent = sec.short;
  }

  /* ---------------- quiz ---------------- */

  var quiz = { questions: [], index: 0, correct: 0, answeredCount: 0, missed: [], label: '', mode: 'normal', combo: 0, xpEarned: 0, timerId: null, timeLeft: 0 };
  var lastStart = null; // recipe for "Run It Back": re-runs the most recent quiz kind
  var quizStartedAt = 0; // for the finished signal's seconds
  var roundNo = 0; // bumped by every quiz start; a delayed action from an older round stands down

  function startQuiz(questions, label, mode) {
    if (!questions.length) { alert('No questions available yet.'); return; }
    stopTimer();
    roundNo++;
    quizStartedAt = Date.now();
    quiz = { questions: questions, index: 0, correct: 0, answeredCount: 0, missed: [], label: label || 'Mixed', mode: mode || 'normal', combo: 0, xpEarned: 0, timerId: null, timeLeft: 0 };
    track('quiz.started', { mode: quiz.mode, length: String(quiz.questions.length) });
    show('quiz');
    if (quiz.mode === 'blitz') startBlitzTimer();
    renderQuestion();
  }

  function startBlitz() {
    var pool = pickFresh(FAR_QUESTIONS, 40);
    startQuiz(pool, 'Blitz', 'blitz');
  }

  function startBlitzTimer() {
    quiz.timeLeft = window.FARBLITZ_BLITZ_SECONDS || BLITZ_SECONDS;
    var el = document.getElementById('quiz-timer');
    el.classList.remove('hidden');
    el.classList.add('calm');
    el.textContent = quiz.timeLeft + 's';
    quiz.timerId = setInterval(function () {
      quiz.timeLeft--;
      el.textContent = Math.max(0, quiz.timeLeft) + 's';
      el.classList.toggle('calm', quiz.timeLeft > 10);
      if (quiz.timeLeft <= 5 && quiz.timeLeft > 0) sfx('tick');
      if (quiz.timeLeft <= 0) {
        stopTimer();
        if (!quiz.flashing) showResults();
        else quiz.endAfterFlash = true;
      }
    }, 1000);
  }

  function comboMultiplier() {
    if (quiz.combo >= 5) return 3;
    if (quiz.combo >= 3) return 2;
    return 1;
  }

  function updateComboPill(broke) {
    var pill = document.getElementById('combo-pill');
    var m = comboMultiplier();
    if (m > 1) {
      pill.textContent = '×' + m;
      pill.classList.remove('hidden', 'sacked');
      pill.classList.toggle('hot2', m === 2);
      pill.classList.toggle('hot3', m === 3);
      pill.style.animation = 'none';
      void pill.offsetWidth;
      pill.style.animation = '';
    } else if (broke && !pill.classList.contains('hidden')) {
      // the multiplier was alive and just died -- the pill takes the sack
      pill.classList.remove('hot2', 'hot3');
      pill.classList.add('sacked');
      setTimeout(function () { pill.classList.add('hidden'); pill.classList.remove('sacked'); }, 550);
    } else {
      pill.classList.add('hidden');
    }
  }

  function renderQuestion() {
    var q = quiz.questions[quiz.index];
    window.scrollTo(0, 0); // not where the last explanation was scrolled to
    var n = quiz.questions.length;
    document.getElementById('quiz-progress-text').textContent =
      quiz.mode === 'blitz' ? quiz.correct + ' ✓' : (quiz.index + 1) + ' / ' + n;
    var drivePct = quiz.mode === 'blitz' ? 100 : Math.round(100 * quiz.index / n);
    document.getElementById('quiz-progress-fill').style.width = drivePct + '%';
    var ball = document.getElementById('drive-ball');
    ball.style.left = drivePct + '%';
    ball.classList.toggle('hidden', quiz.mode === 'blitz');
    document.getElementById('quiz-section-tag').textContent =
      (quiz.label === 'Mixed' || quiz.label === 'Tackle Your Problems' || quiz.label === 'Blitz' || quiz.label === 'Daily')
        ? quiz.label + ' · ' + sectionById(q.section).short : quiz.label;
    document.getElementById('quiz-timer').classList.toggle('hidden', quiz.mode !== 'blitz');
    document.getElementById('q-topic').textContent = q.topic || '';
    document.getElementById('q-stem').textContent = q.q;
    updateComboPill();

    var order = shuffle([0, 1, 2, 3]);
    var wrap = document.getElementById('choices');
    wrap.innerHTML = '';
    order.forEach(function (ci) {
      var btn = document.createElement('button');
      btn.className = 'choice';
      btn.dataset.ci = ci;
      var mark = document.createElement('span');
      mark.className = 'mark';
      mark.setAttribute('aria-hidden', 'true');
      var text = document.createElement('span');
      text.innerHTML = fmt(q.choices[ci]);
      btn.appendChild(mark);
      btn.appendChild(text);
      btn.addEventListener('click', function () { answer(ci, btn); });
      wrap.appendChild(btn);
    });

    document.getElementById('feedback').classList.add('hidden');
    document.getElementById('btn-next').classList.add('hidden');
  }

  function answer(ci, chosenBtn) {
    var q = quiz.questions[quiz.index];
    var correct = ci === q.answer;
    var wasWeak = qstat(q.id).wrongLast; // capture before recording, for redemption bonus
    quiz.answeredCount++;
    if (correct) { quiz.correct++; quiz.combo++; store.bestCombo = Math.max(store.bestCombo, quiz.combo); }
    else { quiz.combo = 0; quiz.missed.push({ q: q, chose: ci }); track('question.missed', { id: q.id, section: q.section, mode: quiz.mode }); }
    recordAnswer(q.id, correct);

    if (correct) {
      var base = q.difficulty === 'medium' ? 14 : 10;
      if (wasWeak) { base *= 2; store.redeemed++; } // redemption: you just beat a question that beat you
      var gained = base * comboMultiplier();
      quiz.xpEarned += gained;
      addXp(gained);
      xpToast('+' + gained + ' XP' + (comboMultiplier() > 1 ? '  ×' + comboMultiplier() : ''));
      buzz(12);
      // ×3 tops out at 5; past that a long Blitz chain earns another hit every 5
      sfx(quiz.combo === 3 ? 'combo2'
        : (quiz.combo >= 5 && quiz.combo % 5 === 0) ? 'tackle'
        : 'correct');
    } else {
      buzz([0, 35]);
      sfx('wrong');
      var field = document.querySelector('.progressbar.field');
      if (field) { // the drive takes a sack: field flashes, ball wobbles
        field.classList.remove('sacked');
        void field.offsetWidth;
        field.classList.add('sacked');
        setTimeout(function () { field.classList.remove('sacked'); }, 650);
      }
    }
    updateComboPill(!correct);
    if (quiz.mode !== 'blitz') { // advance the ball on every snap, into the end zone on the last
      var adv = Math.round(100 * quiz.answeredCount / quiz.questions.length);
      document.getElementById('quiz-progress-fill').style.width = adv + '%';
      document.getElementById('drive-ball').style.left = adv + '%';
    }

    document.querySelectorAll('#choices .choice').forEach(function (b) {
      b.disabled = true;
      var bci = Number(b.dataset.ci);
      if (bci === q.answer) {
        b.classList.add('correct');
        b.querySelector('.mark').textContent = '✓';
      } else if (b === chosenBtn) {
        b.classList.add('wrong');
        b.querySelector('.mark').textContent = '✗';
      } else {
        b.classList.add('dim');
      }
    });

    if (quiz.mode === 'blitz') {
      // fast pace: brief flash, then auto-advance — misses get reviewed at the end
      quiz.flashing = true;
      var flashRound = roundNo;
      setTimeout(function () {
        if (flashRound !== roundNo || currentView !== 'quiz') return; // the player left this round
        quiz.flashing = false;
        if (quiz.endAfterFlash || quiz.timeLeft <= 0) { showResults(); return; }
        quiz.index++;
        if (quiz.index >= quiz.questions.length) {
          quiz.questions = quiz.questions.concat(shuffle(FAR_QUESTIONS)); // never run dry
        }
        renderQuestion();
      }, 450);
      return;
    }

    var verdict = document.getElementById('feedback-verdict');
    verdict.textContent = correct ? '✓ Correct!' : '✗ Not quite';
    verdict.className = 'feedback-verdict ' + (correct ? 'good' : 'bad');
    document.getElementById('feedback-explain').innerHTML = fmt(q.explain);
    var flagBtn = document.getElementById('btn-flag');
    flagBtn.dataset.qid = q.id;
    flagBtn.classList.toggle('hidden', !correct); // a miss re-queues itself; the chip is for lucky guesses
    flagBtn.classList.remove('flagged');
    flagBtn.textContent = '\ud83c\udfaf Tackle again';
    document.getElementById('feedback').classList.remove('hidden');

    var next = document.getElementById('btn-next');
    next.textContent = quiz.index + 1 < quiz.questions.length ? 'Next' : 'See Results';
    next.classList.remove('hidden');
    // Next floats at the bottom edge: lift the page so the explanation shows above it,
    // never past the answer just marked, which stays on screen (short screens: the
    // iPhone Duo closed, the SE). Where everything fits, nothing moves.
    var marked = 0, markedTop = Infinity;
    document.querySelectorAll('#choices .choice.correct, #choices .choice.wrong').forEach(function (b) {
      var r = b.getBoundingClientRect();
      marked = Math.max(marked, r.bottom); markedTop = Math.min(markedTop, r.top);
    });
    var nextTop = next.getBoundingClientRect().top;
    var cover = marked + 8 - nextTop;                          // the least: the marked answer clear of Next
    var fb = document.getElementById('feedback');
    var want = fb ? fb.getBoundingClientRect().bottom + 8 - nextTop : cover; // the explanation clear of Next
    var most = markedTop - 8;                                   // the most: the marked answer still at the top
    var lift = Math.max(cover, Math.min(want, most));
    if (lift > 0) window.scrollBy(0, lift);
  }

  function nextQuestion() {
    quiz.index++;
    if (quiz.index < quiz.questions.length) renderQuestion();
    else showResults();
  }

  /* ---------------- celebration player ----------------
     Plays short clips over the results screen when they exist in anim/.
     Drop the files in — the player finds them by name; missing files skip
     silently, which is the shipped state until the art lands.
       anim/sack-celebrate.mp4 — QB sack + short celebration (score 70-89%)
       anim/sack-dance.mp4     — sack + full dance (90%+, level-up, blitz record)
     Clips play muted (the app's sfx carry sound) and are skippable by tap. */

  /* A manifest slot is a file or a list to pick from at random, never the
     same clip twice running. A list entry may be {"src", "from", "until"}
     with level titles: "from" holds a clip back until the player reaches
     that level and is strict (FAR's hero dyes his hair blue at Team
     Captain, so blue-hair clips never play before it); "until" retires a
     clip at that level, but only once something else in the slot can play.
     "levels", keyed by level title, gives a promotion its own clip. */
  var lastClip = null;

  function levelAt(title) {
    for (var i = 0; i < XP_LEVELS.length; i++) if (XP_LEVELS[i].title === title) return i;
    return Infinity; // an unknown title never unlocks: fail closed
  }

  function pickClip(slot) {
    if (!slot) return null;
    var lv = levelIndex(store.xp);
    var src = function (e) { return typeof e === 'string' ? e : e.src; };
    var open = (Array.isArray(slot) ? slot : [slot]).filter(function (e) {
      return e && src(e) && (typeof e === 'string' || e.from == null || lv >= levelAt(e.from));
    });
    var current = open.filter(function (e) {
      return typeof e === 'string' || e.until == null || lv < levelAt(e.until);
    });
    // nothing current: fall back to the most recently retired, not every old clip
    var latest = open.reduce(function (hi, e) { return Math.max(hi, levelAt(e.until)); }, -1);
    var pool = current.length ? current : open.filter(function (e) { return levelAt(e.until) === latest; });
    var fresh = pool.filter(function (e) { return src(e) !== lastClip; });
    if (fresh.length) pool = fresh;
    return pool.length ? src(pool[Math.floor(Math.random() * pool.length)]) : null;
  }

  function pickSlots(m) {
    var out = {};
    for (var k in m) if (k !== 'levels') out[k] = pickClip(m[k]);
    return out;
  }

  /* A promotion's own clip, if the manifest has one; the banner then names the level. */
  function ownLevelClip(m, info) {
    var lv = info && info.level != null ? XP_LEVELS[info.level] : null;
    var file = lv && m && m.levels ? pickClip(m.levels[lv.title]) : null;
    if (file) info.label = lv.title.toUpperCase() + '!';
    return file;
  }

  var animManifest = null; // anim/manifest.json: tier → filename or null

  function loadAnimManifest(cb) {
    if (animManifest) { cb(animManifest); return; }
    fetch('anim/manifest.json')
      .then(function (r) { return r.ok ? r.json() : {}; })
      .then(function (m) { animManifest = m || {}; cb(animManifest); })
      .catch(function () { animManifest = {}; cb(animManifest); });
  }

  /* Levels with their own clip announce themselves by name; others read LEVEL UP. */
  function levelBanner(idx) {
    return levelClip(idx) ? XP_LEVELS[idx].title.toUpperCase() + '!' : 'LEVEL UP!';
  }

  /* Perfect-round banner, sized to the stop. The team is named for a
     defensive play, so the ladder stays on defense: a clean five-question
     round is a three-and-out, a ten earns the goal-line stand, and only a
     long flawless run gets the defense's own touchdown -- the pick six. */
  function flawlessBanner(n) {
    return n >= 15 ? 'PICK SIX!' : n >= 10 ? 'GOAL-LINE STAND!' : 'THREE AND OUT!';
  }

  function playCelebration(tier, info, done) {
    // A celebration belongs to its results screen. Once the player has left
    // it the clip is dropped, and the ceremonies that follow (promotion,
    // streak, trophies) show on home, or wait for the next results screen
    // if a quiz is already running, rather than cover a question.
    var round = roundNo;
    function gone() { return round !== roundNo || currentView !== 'results'; }
    function handOff() { if (done && currentView !== 'quiz') done(); }
    var reduced = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduced || window.BLITZ_NO_ANIM || store.celebrations === false) { handOff(); return; }
    loadAnimManifest(function (m) {
      var own = ownLevelClip(m, info);
      m = pickSlots(m || {});
      var file = own || m[tier];
      if (!file && tier === 'levelup') file = m && m.perfect; // graceful step-down
      if (!file && (tier === 'levelup' || tier === 'perfect')) file = m && m.dance;
      if (!file) { handOff(); return; }
      lastClip = file;
      // brief beat so the results tally lands first and the clip reads as
      // a reaction to the score — only when a clip will actually play
      var isStill = /\.(png|webp|jpe?g)$/i.test(file);
      setTimeout(function () {
        if (gone()) { handOff(); return; }
        if (isStill) startStill(file); else startClip(file);
      }, 650);
    });

    /* A still in a clip slot: same overlay and banner, a slow drift instead
       of playback. Cheap to produce, and the moment still lands. */
    function startStill(file) {
      var overlay = document.getElementById('celebrate');
      var video = document.getElementById('celebrate-video');
      var img = document.getElementById('celebrate-still');
      var finished = false;
      function finish() {
        if (finished) return;
        finished = true;
        overlay.classList.add('hidden');
        img.classList.add('hidden');
        video.classList.remove('hidden');
        img.removeAttribute('src');
        handOff();
      }
      overlay.onclick = finish;
      img.onerror = finish;
      img.onload = function () {
        if (finished) return;
        if (gone()) { finish(); return; } // the player moved on while it loaded
        var labelEl = document.getElementById('celebrate-label');
        var scoreEl = document.getElementById('celebrate-score');
        labelEl.textContent = (info && info.label) || '';
        scoreEl.textContent = '';
        video.classList.add('hidden');
        img.classList.remove('hidden');
        overlay.classList.remove('hidden');
        [labelEl, scoreEl, img].forEach(function (el) {
          el.style.animation = 'none';
          void el.offsetWidth;
          el.style.animation = '';
        });
        if (info && typeof info.value === 'number') {
          countUp(scoreEl, info.value, info.suffix || '', 900);
        }
        setTimeout(finish, 3400);
      };
      img.src = 'anim/' + file;
      setTimeout(function () { if (!img.complete) finish(); }, 2500); // stalled asset
      setTimeout(finish, 8000); // hard cap
    }

    function startClip(file) {
      var overlay = document.getElementById('celebrate');
      var video = document.getElementById('celebrate-video');
      var finished = false;
      function finish() {
        if (finished) return;
        finished = true;
        overlay.classList.add('hidden');
        video.pause();
        video.removeAttribute('src');
        video.load();
        handOff();
      }
      // play with sound when the sound setting is on; if the platform
      // refuses unmuted autoplay, retry muted rather than losing the moment
      video.muted = store.sound === false;
      video.onended = finish;
      video.onerror = finish;
      overlay.onclick = finish;
      video.oncanplay = function () {
        if (finished) return;
        if (gone()) { finish(); return; } // the player moved on while it loaded
        // a clip that hangs still ends: its own length plus a beat
        var len = isFinite(video.duration) && video.duration > 0 ? video.duration : 10;
        setTimeout(finish, (len + 1.5) * 1000);
        // the banner ties the clip to the result: reason + counting score
        var labelEl = document.getElementById('celebrate-label');
        var scoreEl = document.getElementById('celebrate-score');
        labelEl.textContent = (info && info.label) || '';
        scoreEl.textContent = '';
        overlay.classList.remove('hidden');
        [labelEl, scoreEl].forEach(function (el) {
          el.style.animation = 'none';
          void el.offsetWidth;
          el.style.animation = '';
        });
        if (info && typeof info.value === 'number') {
          countUp(scoreEl, info.value, info.suffix || '', 900);
        }
        var p = video.play();
        if (p && p.catch) {
          p.catch(function () {
            if (finished) return;
            video.muted = true;
            var q = video.play();
            if (q && q.catch) q.catch(finish);
          });
        }
      };
      video.src = 'anim/' + file;
      // nothing playable within 2.5s (stalled asset) → move on
      setTimeout(function () { if (video.readyState < 2) finish(); }, 2500);
      setTimeout(finish, 20000); // outer cap; oncanplay arms the real one from the clip's length
    }
  }

  /* Results-screen level meter: replays the XP the quiz just earned, filling
     from where the bar stood before the quiz. Crossing a threshold fills to
     full, snaps to the new level's floor, and keeps going. */
  function animateResultsXp() {
    var fill = document.getElementById('rxp-fill');
    if (!fill) return;
    var from = store.xp - quiz.xpEarned;
    var to = store.xp;
    function levelPos(xp) {
      var li = levelIndex(xp);
      var cur = XP_LEVELS[li], next = XP_LEVELS[li + 1];
      return { li: li, pct: next ? Math.min(100, Math.round(100 * (xp - cur.xp) / (next.xp - cur.xp))) : 100 };
    }
    function paintLabels(li) {
      var cur = XP_LEVELS[li], next = XP_LEVELS[li + 1];
      document.getElementById('rxp-title').textContent = cur.title;
      document.getElementById('rxp-num').textContent = 'Lv ' + (li + 1);
      document.getElementById('rxp-next').textContent = next
        ? (next.xp - to).toLocaleString() + ' XP to ' + next.title
        : 'Top of the ladder!';
    }
    var a = levelPos(from), b = levelPos(to);
    document.getElementById('rxp-text').textContent = to.toLocaleString() + ' XP';
    paintLabels(a.li);
    fill.style.transition = 'none';
    fill.style.width = a.pct + '%';
    void fill.offsetWidth;
    fill.style.transition = '';
    if (b.li > a.li) {
      setTimeout(function () { fill.style.width = '100%'; }, 450);
      setTimeout(function () {
        fill.style.transition = 'none';
        fill.style.width = '0%';
        void fill.offsetWidth;
        fill.style.transition = '';
        paintLabels(b.li);
        fill.style.width = b.pct + '%';
      }, 1400);
    } else {
      setTimeout(function () { fill.style.width = b.pct + '%'; }, 450);
    }
  }

  /* ---------------- results ---------------- */

  function showResults() {
    stopTimer();
    var pctEl = document.getElementById('results-pct');
    var lineEl = document.getElementById('results-line');
    var detailEl = document.getElementById('results-detail');
    var celebrate = false;
    if (isActiveDay(todayKey()) && store.streakSeen !== todayKey()) {
      store.streakSeen = todayKey(); // one ceremony per day, on the first finished quiz
      saveStore();
      pendingStreak = dayStreak();
    }

    if (quiz.mode === 'blitz') {
      var score = quiz.correct;
      var isRecord = score > store.blitz.best;
      if (isRecord && store.blitz.best > 0) celebrate = true;
      store.blitz.last = score;
      store.blitz.lastDate = todayKey();
      if (isRecord) store.blitz.best = score;
      saveStore();
      countUp(pctEl, score, '', 800);
      lineEl.textContent = isRecord ? 'New record! 🏆' : (score >= store.blitz.best * 0.8 ? 'So close to your best!' : 'Blitz complete!');
      detailEl.textContent = score + ' correct in ' + (window.FARBLITZ_BLITZ_SECONDS || BLITZ_SECONDS) + ' seconds · best: ' + store.blitz.best;
    } else {
      var n = quiz.answeredCount || quiz.questions.length;
      var pct = Math.round(100 * quiz.correct / n);
      countUp(pctEl, pct, '%', 800);
      lineEl.textContent =
        pct >= 90 ? 'Outstanding! 🏆' :
        pct >= 75 ? 'Solid work! 💪' :
        pct >= 50 ? 'Getting there — keep drilling.' :
        'Rough one — the review below is gold.';
      detailEl.textContent = quiz.correct + ' of ' + n + ' correct · ' + quiz.label;

      if (quiz.missed.length === 0 && n >= 5) {
        quiz.xpEarned += 25;
        addXp(25); // perfect round bonus
        celebrate = true;
      }

      if (quiz.mode === 'daily' && !dailyDoneToday()) {
        store.dailyDone[todayKey()] = quiz.correct;
        quiz.xpEarned += 30;
        addXp(30);
        var gotFreeze = store.freezes < MAX_FREEZES;
        if (gotFreeze) store.freezes++;
        saveStore();
        detailEl.textContent = quiz.correct + '/5 on today\'s blitz · +30 XP' + (gotFreeze ? ' · +1 ❄️ streak freeze' : '');
      }
    }

    var xpEl = document.getElementById('results-xp');
    if (quiz.xpEarned > 0) {
      xpEl.classList.remove('hidden');
      countUp(xpEl, quiz.xpEarned, ' XP earned', 900);
    } else {
      xpEl.classList.add('hidden');
    }
    animateResultsXp();

    var missedWrap = document.getElementById('results-missed-wrap');
    var ul = document.getElementById('results-missed');
    ul.innerHTML = '';
    if (quiz.missed.length === 0) {
      missedWrap.classList.add('hidden');
    } else {
      missedWrap.classList.remove('hidden');
      quiz.missed.forEach(function (m) {
        var li = document.createElement('li');
        li.className = 'missed-item';
        var qEl = document.createElement('p'); qEl.className = 'missed-q'; qEl.textContent = m.q.q;
        var xEl = document.createElement('p'); xEl.className = 'missed-x'; xEl.innerHTML = '✗ You chose: ' + fmt(m.q.choices[m.chose]);
        var aEl = document.createElement('p'); aEl.className = 'missed-a'; aEl.innerHTML = '✓ ' + fmt(m.q.choices[m.q.answer]);
        var eEl = document.createElement('p'); eEl.className = 'missed-e'; eEl.innerHTML = fmt(m.q.explain);
        li.appendChild(qEl); li.appendChild(xEl); li.appendChild(aEl); li.appendChild(eEl);
        ul.appendChild(li);
      });
    }
    document.getElementById('btn-retry-missed').classList.toggle('hidden', quiz.missed.length === 0);
    document.getElementById('btn-again').textContent = lastStart ? lastStart.label : 'New Quiz';
    show('results');
    store.quizzes++;
    saveStore();
    earnTrophies(quiz);
    track('quiz.finished', {
      mode: quiz.mode,
      answered: String(quiz.answeredCount || quiz.questions.length),
      correct: String(quiz.correct),
      band: quiz.mode === 'blitz' ? 'blitz' : scoreBand(Math.round(100 * quiz.correct / (quiz.answeredCount || quiz.questions.length))),
      record: quiz.mode === 'blitz' && isRecord ? 'yes' : 'no',
      floatValue: Math.round((Date.now() - quizStartedAt) / 1000)
    });
    if (celebrate) { confetti(); buzz([20, 30, 20]); sfx('perfect'); }

    // sack + celebration clip, then the level-up ceremony if one is queued.
    // Tiers: celebrate (70-89%) → dance (90%+/blitz record) → perfect
    // (flawless round or level-up — the rarest moments get the best clip).
    var tier = null, info = null;
    if (quiz.mode === 'blitz') {
      if (pendingLevelUp !== null) tier = levelClip(pendingLevelUp) || 'perfect';
      else if (celebrate) tier = 'dance';
      if (tier) {
        info = {
          value: quiz.correct,
          suffix: '',
          label: pendingLevelUp !== null ? levelBanner(pendingLevelUp) : 'NEW RECORD!'
        };
      }
    } else {
      var n2 = quiz.answeredCount || quiz.questions.length;
      var scored = Math.round(100 * quiz.correct / n2);
      var flawless = quiz.missed.length === 0 && n2 >= 5;
      if (pendingLevelUp !== null) tier = levelClip(pendingLevelUp) || 'perfect';
      else if (flawless) tier = 'perfect';
      else if (scored >= 90) tier = 'dance';
      else if (scored >= 70) tier = 'celebrate';
      if (tier) {
        info = {
          value: scored,
          suffix: '%',
          label: pendingLevelUp !== null ? levelBanner(pendingLevelUp) :
                 flawless ? flawlessBanner(n2) :
                 tier === 'dance' ? 'HUGE SCORE!' : 'SOLID WIN!'
        };
      }
    }
    // a strong round earns the rating prompt on the way back home
    lastRoundStrong = quiz.mode === 'blitz' ? celebrate
      : Math.round(100 * quiz.correct / (quiz.answeredCount || quiz.questions.length)) >= 80;
    function afterCelebration() {
      if (pendingLevelUp !== null) maybeShowLevelUp(); // streak moment follows its close button
      else maybeShowStreakMoment();
    }
    // a rough round (under 70%, 5+ questions) is part of the game: every
    // fourth one, counted across sessions, gets a pep talk from "motivate"
    if (!tier && quiz.mode !== 'blitz' && (quiz.answeredCount || quiz.questions.length) >= 5) {
      store.roughRounds = (store.roughRounds || 0) + 1;
      saveStore();
      if (store.roughRounds % 4 === 0) { tier = 'motivate'; info = { label: 'KEEP GRINDING!' }; }
    }
    if (info && pendingLevelUp !== null) info.level = pendingLevelUp; // a promotion may have its own clip
    if (tier) playCelebration(tier, info, afterCelebration);
    else afterCelebration();
  }

  /* ---------------- stats ---------------- */

  function renderCalendar() {
    var now = new Date();
    var year = now.getFullYear(), month = now.getMonth();
    var monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    document.getElementById('cal-title').textContent = monthNames[month] + ' ' + year;

    var cal = document.getElementById('calendar');
    cal.innerHTML = '';
    ['S', 'M', 'T', 'W', 'T', 'F', 'S'].forEach(function (d) {
      var h = document.createElement('div');
      h.className = 'cal-dow';
      h.textContent = d;
      cal.appendChild(h);
    });
    var first = new Date(year, month, 1).getDay();
    var daysInMonth = new Date(year, month + 1, 0).getDate();
    for (var b = 0; b < first; b++) {
      var blank = document.createElement('div');
      blank.className = 'cal-day blank';
      cal.appendChild(blank);
    }
    for (var day = 1; day <= daysInMonth; day++) {
      var key = year + '-' + String(month + 1).padStart(2, '0') + '-' + String(day).padStart(2, '0');
      var cell = document.createElement('div');
      cell.className = 'cal-day';
      cell.textContent = day;
      if (isActiveDay(key)) cell.classList.add('on');
      if (store.dailyDone[key] !== undefined) cell.classList.add('daily');
      if (key === todayKey()) {
        cell.classList.add('today');
        if (isActiveDay(key)) cell.classList.add('stamp'); // today's mark pops in
      }
      cal.appendChild(cell);
    }
  }

  function renderLadder() {
    var ul = document.getElementById('ladder');
    ul.innerHTML = '';
    var cur = levelIndex(store.xp);
    XP_LEVELS.forEach(function (lv, i) {
      var li = document.createElement('li');
      li.className = 'ladder-row ' + (i < cur ? 'done' : i === cur ? 'current' : 'locked');
      var next = XP_LEVELS[i + 1];
      var sub;
      if (i < cur) sub = 'Achieved ✓';
      else if (i === cur) sub = next ? store.xp.toLocaleString() + ' / ' + next.xp.toLocaleString() + ' XP' : 'Top level reached';
      else sub = 'Unlocks at ' + lv.xp.toLocaleString() + ' XP';
      var pct = '';
      if (i === cur && next) {
        pct = '<span class="ladder-pct">' + Math.round(100 * (store.xp - lv.xp) / (next.xp - lv.xp)) + '%</span>';
      }
      li.innerHTML =
        '<span class="ladder-num">' + (i < cur ? '✓' : 'Lv ' + (i + 1)) + '</span>' +
        '<span class="ladder-info"><span class="ladder-title">' + lv.title + '</span>' +
        '<span class="ladder-sub">' + sub + '</span></span>' + pct;
      ul.appendChild(li);
    });
  }

  function renderSettings() {
    renderSoundCard();
    renderReminderCard();
    renderCloudCard();
  }


  /* ---------------- Trophy Room ----------------
     Twelve career trophies, all derivable from local state. earnTrophies()
     runs at quiz finish (toasts) and at boot (silent, so an iCloud restore
     backfills the shelf without a toast storm). */

  var TROPHIES = [
    { id: 'first-snap', emoji: '\ud83c\udfc8', name: 'First Snap', hint: 'Finish your first quiz',
      test: function () { return store.quizzes >= 1; } },
    { id: 'perfect-drive', emoji: '\ud83c\udfaf', name: 'Perfect Drive', hint: 'Score 100% on a quiz of 5+',
      test: function (q) { return !!(q && q.mode !== 'blitz' && (q.answeredCount || q.questions.length) >= 5 && q.missed.length === 0); } },
    { id: 'playoff-push', emoji: '\ud83d\udd25', name: 'Playoff Push', hint: 'Reach a 7-day streak',
      test: function () { return store.longestStreak >= 7; } },
    { id: 'iceman', emoji: '\ud83e\uddca', name: 'Iceman', hint: 'Survive a missed day with a streak freeze',
      test: function () { return Object.keys(store.frozenDays).length > 0; } },
    { id: 'century-club', emoji: '\ud83d\udcaf', name: 'Century Club', hint: 'Answer 100 career questions',
      test: function () { return store.totals.answered >= 100; } },
    { id: 'club-500', emoji: '\ud83c\udfdf\ufe0f', name: 'The 500 Club', hint: 'Answer 500 career questions',
      test: function () { return store.totals.answered >= 500; } },
    { id: 'two-minute-drill', emoji: '\u26a1', name: 'Two-Minute Drill', hint: '15+ correct in one Blitz 60',
      test: function () { return store.blitz.best >= 15; } },
    { id: 'shutout', emoji: '\ud83d\udee1\ufe0f', name: 'Shutout', hint: 'A miss-free Blitz 60, 10+ correct',
      test: function (q) { return !!(q && q.mode === 'blitz' && q.correct >= 10 && q.missed.length === 0); } },
    { id: 'comeback-kid', emoji: '\ud83d\udd04', name: 'Comeback Kid', hint: 'Redeem 10 questions that beat you',
      test: function () { return store.redeemed >= 10; } },
    { id: 'film-study', emoji: '\ud83c\udfac', name: 'Film Study', hint: 'Attempt every section at least once',
      test: function () {
        return FAR_SECTIONS.every(function (s) { return sectionAccuracy(s.id).seen > 0; });
      } },
    { id: 'pancake', emoji: '\ud83e\udd5e', name: 'Pancake Block', hint: 'Run a 10-answer combo',
      test: function () { return store.bestCombo >= 10; } },
    { id: 'gold-jacket', emoji: '\ud83e\udd47', name: 'Gold Jacket', hint: 'Reach Hall of Famer',
      test: function () { return store.xp >= XP_LEVELS[XP_LEVELS.length - 1].xp; } }
  ];

  function earnTrophies(quizCtx, quiet) {
    var fresh = [];
    TROPHIES.forEach(function (t) {
      if (store.trophies[t.id]) return;
      var got = false;
      try { got = !!t.test(quizCtx); } catch (e) { /* never let a trophy check break play */ }
      if (got) { store.trophies[t.id] = Date.now(); fresh.push(t); if (!quiet) track('trophy.earned', { trophy: t.id }); }
    });
    if (fresh.length) {
      saveStore();
      if (!quiet) pendingTrophies = pendingTrophies.concat(fresh);
    }
    return fresh;
  }

  var pendingTrophies = [];

  /* Full-screen unlock ceremony, one trophy at a time. It runs at the end of
     the post-quiz overlay chain (after the streak moment), so the big moments
     never stack on each other. */
  function maybeShowTrophyMoment() {
    if (!pendingTrophies.length) return;
    var t = pendingTrophies.shift();
    var overlay = document.getElementById('trophymoment');
    document.getElementById('tm-emoji').textContent = t.emoji;
    document.getElementById('tm-name').textContent = t.name;
    document.getElementById('tm-hint').textContent = t.hint;
    overlay.classList.remove('hidden', 'leaving');
    overlay.querySelectorAll('.tm-card, .tm-emoji, .tm-name').forEach(function (el) {
      el.style.animation = 'none';
      void el.offsetWidth;
      el.style.animation = '';
    });
    confetti();
    setTimeout(confetti, 350);
    buzz([20, 30, 40]);
    sfx('levelup');
    var closed = false;
    function close() {
      if (closed) return;
      closed = true;
      overlay.classList.add('leaving');
      setTimeout(function () {
        overlay.classList.add('hidden');
        overlay.classList.remove('leaving');
        maybeShowTrophyMoment(); // next unlock in the queue, if any
      }, 350);
    }
    overlay.onclick = close;
    setTimeout(close, 4200);
  }

  function renderTrophies() {
    var grid = document.getElementById('trophy-grid');
    if (!grid) return;
    grid.innerHTML = '';
    var earned = 0;
    TROPHIES.forEach(function (t) {
      var when = store.trophies[t.id];
      if (when) earned++;
      var li = document.createElement('li');
      li.className = 'trophy' + (when ? ' earned' : '');
      var date = when ? new Date(when) : null;
      li.innerHTML = '<span class="trophy-emoji">' + t.emoji + '</span>' +
        '<span class="trophy-name">' + t.name + '</span>' +
        '<span class="trophy-hint">' + (when
          ? (date.getMonth() + 1) + '/' + date.getDate() + '/' + date.getFullYear()
          : t.hint) + '</span>';
      grid.appendChild(li);
    });
    document.getElementById('trophy-count').textContent = earned + ' / ' + TROPHIES.length;
  }

  function renderStats() {
    var t = store.totals;
    document.getElementById('stats-accuracy').textContent = t.answered ? Math.round(100 * t.correct / t.answered) + '%' : '–';
    document.getElementById('stats-answered').textContent = t.answered;
    document.getElementById('stats-streak').textContent = dayStreak();
    document.getElementById('stats-xp').textContent = store.xp;
    document.getElementById('stats-blitz').textContent = store.blitz.best > 0 ? store.blitz.best : '–';
    document.getElementById('stats-longest').textContent = store.longestStreak;
    renderTrophies();

    renderLadder();
    renderCalendar();

    var ul = document.getElementById('stats-sections');
    ul.innerHTML = '';
    FAR_SECTIONS.forEach(function (s) {
      var acc = sectionAccuracy(s.id);
      var li = document.createElement('li');
      li.className = 'mastery-row';
      li.innerHTML =
        '<div class="mastery-top"><span class="mastery-name">' + s.emoji + ' ' + s.name + '</span>' +
        '<span class="mastery-pct">' + (acc.pct === null ? 'not started' : acc.pct + '%') + '</span></div>' +
        '<div class="meter"><div class="meter-fill" style="width:' + (acc.pct === null ? 0 : acc.pct) + '%"></div></div>' +
        '<div class="mastery-sub">' + acc.seen + ' of ' + acc.total + ' seen · ' + acc.attempts + ' answers</div>';
      ul.appendChild(li);
    });

    // Weakest topics: ≥2 attempts and <70% accuracy, worst first.
    var topics = {};
    FAR_QUESTIONS.forEach(function (q) {
      var s = qstat(q.id);
      if (s.a === 0) return;
      var key = q.topic + '|' + q.section;
      if (!topics[key]) topics[key] = { topic: q.topic, section: q.section, a: 0, c: 0 };
      topics[key].a += s.a;
      topics[key].c += s.c;
    });
    var weakTopics = Object.keys(topics).map(function (k) { return topics[k]; })
      .filter(function (tp) { return tp.a >= 2 && tp.c / tp.a < 0.7; })
      .sort(function (x, y) { return (x.c / x.a) - (y.c / y.a); })
      .slice(0, 6);

    var wrap = document.getElementById('weak-topics-wrap');
    var wul = document.getElementById('weak-topics');
    wul.innerHTML = '';
    wrap.classList.toggle('hidden', weakTopics.length === 0);
    weakTopics.forEach(function (tp) {
      var li = document.createElement('li');
      li.className = 'weak-topic';
      var name = document.createElement('span');
      name.className = 't-name';
      name.textContent = tp.topic + ' · ' + sectionById(tp.section).short;
      var stat = document.createElement('span');
      stat.className = 't-stat';
      stat.textContent = Math.round(100 * tp.c / tp.a) + '% of ' + tp.a;
      li.appendChild(name); li.appendChild(stat);
      wul.appendChild(li);
    });
  }

  /* ---------------- wiring ---------------- */

  document.getElementById('btn-back').addEventListener('click', goBack);
  document.getElementById('btn-settings').addEventListener('click', function () { show('settings'); });
  document.getElementById('btn-daily').addEventListener('click', function () {
    sfx('start');
    // dailies don't repeat — after one, Run It Back offers a quick mix instead
    lastStart = { label: '⚡ Quick Blitz', again: function () { startQuiz(buildQuickQuiz(quizLength()), 'Mixed', 'normal'); } };
    startQuiz(buildDailyQuiz(), 'Daily', 'daily');
  });
  document.getElementById('btn-quick').addEventListener('click', function () {
    sfx('start');
    lastStart = { label: '🔁 Run It Back', again: function () { startQuiz(buildQuickQuiz(quizLength()), 'Mixed', 'normal'); } };
    lastStart.again();
  });
  document.getElementById('btn-blitz').addEventListener('click', function () {
    sfx('start');
    lastStart = { label: '🔁 Run It Back', again: startBlitz };
    startBlitz();
  });
  document.getElementById('btn-weak').addEventListener('click', function () {
    sfx('start');
    lastStart = { label: '🔁 Run It Back', again: function () { startQuiz(buildWeakQuiz(quizLength()), 'Tackle Your Problems', 'normal'); } };
    lastStart.again();
  });
  document.getElementById('btn-flag').addEventListener('click', function () {
    var s = store.q[this.dataset.qid];
    if (!s) return;
    var on = !s.flag;
    if (on) s.flag = true; else delete s.flag;
    saveStore();
    this.classList.toggle('flagged', on);
    this.textContent = on ? '\ud83c\udfaf On the list \u2713' : '\ud83c\udfaf Tackle again';
    buzz(12);
  });
  document.getElementById('btn-sections').addEventListener('click', function () { show('sections'); });
  document.getElementById('btn-stats').addEventListener('click', function () { show('stats'); });
  document.getElementById('btn-stats-weak').addEventListener('click', function () {
    lastStart = { label: '🔁 Run It Back', again: function () { startQuiz(buildWeakQuiz(quizLength()), 'Tackle Your Problems', 'normal'); } };
    lastStart.again();
  });
  document.getElementById('btn-next').addEventListener('click', nextQuestion);
  document.getElementById('btn-again').addEventListener('click', function () {
    if (lastStart) { sfx('start'); lastStart.again(); }
    else show('home');
  });
  document.getElementById('btn-results-home').addEventListener('click', function () { show('home'); });
  document.getElementById('btn-retry-missed').addEventListener('click', function () {
    startQuiz(shuffle(quiz.missed.map(function (m) { return m.q; })), 'Retry', 'normal');
  });
  document.getElementById('levelup-close').addEventListener('click', function () {
    document.getElementById('levelup').classList.add('hidden');
    maybeShowStreakMoment();
  });
  document.getElementById('btn-reset').addEventListener('click', function () {
    if (confirm('Erase all progress and stats? This cannot be undone.')) {
      store = blankStore();
      saveStore();
      show('home');
    }
  });
  document.querySelectorAll('.length-opt').forEach(function (b) {
    b.addEventListener('click', function () {
      store.lastLength = Number(b.dataset.len);
      saveStore();
      renderHome();
    });
  });
  document.getElementById('btn-export').addEventListener('click', doExport);
  document.getElementById('btn-copy-code').addEventListener('click', doCopyCode);
  document.getElementById('btn-restore').addEventListener('click', function () {
    applyRestore(document.getElementById('restore-text').value);
  });
  document.getElementById('restore-file').addEventListener('change', function (e) {
    var f = e.target.files && e.target.files[0];
    if (!f) return;
    var reader = new FileReader();
    reader.onload = function () { applyRestore(String(reader.result)); };
    reader.onerror = function () { flashBackupNote('Could not read that file.', true); };
    reader.readAsText(f);
    e.target.value = '';
  });
  document.getElementById('allq-toggle').addEventListener('change', function (e) {
    store.allSection = e.target.checked;
    saveStore();
  });
  document.getElementById('sound-toggle').addEventListener('change', function (e) {
    store.sound = e.target.checked;
    saveStore();
    track('setting.changed', { setting: 'sound', value: store.sound ? 'on' : 'off' });
    if (store.sound) sfx('correct'); // audible confirmation
  });
  document.getElementById('anim-toggle').addEventListener('change', function (e) {
    store.celebrations = e.target.checked;
    saveStore();
    track('setting.changed', { setting: 'celebrations', value: store.celebrations ? 'on' : 'off' });
  });
  document.getElementById('usage-toggle').addEventListener('change', function (e) {
    if (!e.target.checked) track('setting.changed', { setting: 'usage', value: 'off' }); // the last signal
    store.usage = e.target.checked;
    saveStore();
    if (store.usage) track('setting.changed', { setting: 'usage', value: 'on' });
  });
  document.getElementById('reminder-toggle').addEventListener('change', function (e) {
    setReminderEnabled(e.target.checked);
    track('setting.changed', { setting: 'reminder', value: e.target.checked ? 'on' : 'off' });
  });
  document.getElementById('reminder-time').addEventListener('change', function (e) {
    if (!e.target.value) return;
    store.reminder = { enabled: !!(store.reminder && store.reminder.enabled), time: e.target.value };
    saveStore();
    if (store.reminder.enabled) rescheduleReminder();
  });
  document.getElementById('icloud-toggle').addEventListener('change', function (e) {
    setCloudEnabled(e.target.checked);
    track('setting.changed', { setting: 'icloud', value: e.target.checked ? 'on' : 'off' });
  });

  reconcileFreezes();
  show('home');
  track('TelemetryDeck.Session.started', {}); // the app was opened
  (function () { // back after half an hour in the background: a new visit
    var hiddenAt = 0;
    document.addEventListener('visibilitychange', function () {
      if (document.hidden) hiddenAt = Date.now();
      else if (hiddenAt && Date.now() - hiddenAt > 30 * 60 * 1000) track('TelemetryDeck.Session.started', {});
    });
  })();
  if (isNative()) rescheduleReminder(); // refresh streak wording in tomorrow's reminder
  initCloud();

  /* Mascot intro: greets on launch, holds a beat, charges the camera and
     leaves — so the home screen itself stays clean. Tap skips it. */
  (function () {
    var intro = document.getElementById('intro');
    if (!intro) return;
    var reduced = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduced || window.BLITZ_NO_ANIM || window.BLITZ_NO_INTRO) { intro.remove(); return; }
    var img = intro.querySelector('.intro-mascot');
    function gone() { if (intro.parentNode) intro.remove(); }
    img.onerror = gone; // art missing → never block the app
    intro.onclick = gone;
    intro.classList.remove('hidden');
    introSting(); // the app opens on the tackle hit
    setTimeout(function () {
      intro.classList.add('leaving');
      setTimeout(gone, 750);
    }, 950);
  })();

  earnTrophies(null, true); // silent boot backfill (an iCloud restore may arrive with trophies unearned)

  /* PWA: offline support when served over http(s) */
  if ('serviceWorker' in navigator && location.protocol !== 'file:') {
    navigator.serviceWorker.register('sw.js').catch(function () { /* fine without it */ });
  }
})();
