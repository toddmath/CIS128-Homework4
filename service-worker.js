var cacheName = 'homework4-V1';
var appShellFiles = [
  'index.html',
  'main.css',
  'background.js',
  '/img/lightblue.jpg',
  '/img/lightgold.jpg',
  '/img/down_arrow_select.jpg',
  '/fonts/IBM_Plex_Mono/IBMPlexMono-Medium.ttf',
  '/fonts/PT_Sans/PT_Sans-Web-Regular.ttf',
  '/fonts/Ubuntu/Ubuntu-Bold.ttf',
  '/fonts/Ubuntu/Ubuntu-Regular.ttf'
];

self.addEventListener('install', function(e) {
  console.log('[Service Worker] Install');
  e.waitUntil(
    caches.open(cacheName).then(function(cache) {
        console.log('[Service Worker] Caching all: app shell and content');
      return cache.addAll(appShellFiles);
    })
  );
});

self.addEventListener('fetch', function(e) {
  e.respondWith(
    caches.match(e.request).then(function(r) {
          console.log('[Service Worker] Fetching resource: '+e.request.url);
      return r || fetch(e.request).then(function(response) {
                return caches.open(cacheName).then(function(cache) {
          console.log('[Service Worker] Caching new resource: '+e.request.url);
          cache.put(e.request, response.clone());
          return response;
        });
      });
    })
  );
});

// Clear anything we don't need from the cache
self.addEventListener('activate', function(e) {
  e.waitUntil(
    caches.keys().then(function(keyList) {
          return Promise.all(keyList.map(function(key) {
        if(cacheName.indexOf(key) === -1) {
          return caches.delete(key);
        }
      }));
    })
  );
});