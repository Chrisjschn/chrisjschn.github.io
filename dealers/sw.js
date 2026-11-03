/* Dealers service worker — cache-first so the app works offline (bump VERSION on deploys). */

var VERSION = 'dealers-v18';
var ASSETS = [
  './',
  './index.html',
  './styles.css',
  './app.js',
  './data/questions.js',
  './manifest.webmanifest',
  './icons/icon-192.png',
  './anim/manifest.json',
  './anim/checkered.webp',
  './anim/podium.webp',
  './icons/mascot.png'
];

self.addEventListener('install', function (e) {
  e.waitUntil(
    caches.open(VERSION).then(function (c) { return c.addAll(ASSETS); }).then(function () { return self.skipWaiting(); })
  );
});

/* All the quiz apps are served from one GitHub Pages origin, and
   caches.keys() is scoped to the ORIGIN, not to this service worker. Retiring
   every cache that is not ours would wipe the sibling apps' offline storage
   each time this one is opened, so only our own older versions are dropped. */
var CACHE_PREFIX = VERSION.replace(/-v\d+$/, '-');

self.addEventListener('activate', function (e) {
  e.waitUntil(
    caches.keys().then(function (keys) {
      return Promise.all(keys.filter(function (k) {
        return k !== VERSION && k.indexOf(CACHE_PREFIX) === 0;
      }).map(function (k) { return caches.delete(k); }));
    }).then(function () { return self.clients.claim(); })
  );
});

self.addEventListener('fetch', function (e) {
  if (e.request.method !== 'GET') return;
  e.respondWith(
    caches.match(e.request, { ignoreSearch: true }).then(function (hit) {
      return hit || fetch(e.request).then(function (res) {
        var copy = res.clone();
        caches.open(VERSION).then(function (c) { c.put(e.request, copy); });
        return res;
      });
    })
  );
});
