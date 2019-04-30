importScripts('./third_party/workbox-v4.3.0/workbox-sw.js');

workbox.setConfig({
  modulePathPrefix: './third_party/workbox-v4.3.0/'
});

// Check that workbox imported and is available
if (workbox) {
  console.log(`Yay! Workbox is loaded 🎉`);
} else {
  console.log(`Boo! Workbox didn't load 😬`);
}

workbox.core.setCacheNameDetails({
  prefix: 'homework4-cache',
  suffix: 'v1',
  precache: 'install-time',
  runtime: 'run-time'
});

// Will print 'my-app-run-time-v1'
console.log(workbox.core.cacheNames.runtime);

workbox.loadModule('workbox-strategies');

workbox.precaching.precacheAndRoute([{
    "url": "ajax.js",
    "revision": "b95681dbe300129bced8fccef3803bb0"
  },
  {
    "url": "background.js",
    "revision": "657784ad5712481de10675e8a3494f7a"
  },
  {
    "url": "flickr.html",
    "revision": "3a5ec0ff75f408b84472bbb1b437e50f"
  },
  {
    "url": "img/down_arrow_select.jpg",
    "revision": "bb1e0825d5223704d2c295f4e1d86b91"
  },
  {
    "url": "img/lightblue.jpg",
    "revision": "d011ea4507f56b093d305b3e5b8a6583"
  },
  {
    "url": "img/lightgold.jpg",
    "revision": "9c00c7b42644b50e51d6618f8c29cb97"
  },
  {
    "url": "index.html",
    "revision": "670d105188ea8c49898da669752f7f68"
  },
  {
    "url": "jquery.magnific-popup.js",
    "revision": "c8f9c10f7b896edaaa478913d146bd7e"
  },
  {
    "url": "lightbox.js",
    "revision": "ec01bec1ed16bf4c15d39a2697765864"
  },
  {
    "url": "magnific-popup.css",
    "revision": "b58cd2adcb50f958ee018641983181f1"
  },
  {
    "url": "main.css",
    "revision": "573a363b8cbd527242f705cb525c93eb"
  },
  {
    "url": "reset.css",
    "revision": "fa32a65d686227f83d675dfe0e3f6f3a"
  },
  {
    "url": "sw.js",
    "revision": "0dc0353dad0b9b0a397974cd61a3b083"
  },
  {
    "url": "workbox-config.js",
    "revision": "91f987d5a2437cf057d453ec6d0df2b6"
  }
])

// Will print 'my-app-install-time-v1'
console.log(workbox.core.cacheNames.precache);

// Stale while revaildate js files that aren't precached
workbox.routing.registerRoute(
  /\.js$/,
  new workbox.strategies.StaleWhileRevalidate({
    cacheName: 'static-js-resources',
  })
);

// Use cache for images if available, network if not
workbox.routing.registerRoute(
  // Cache image files.
  /\.(?:png|jpg|jpeg|svg|gif)$/,
  // Use the cache if it's available.
  new workbox.strategies.CacheFirst({
    // Use a custom cache name.
    cacheName: 'image-cache',
    plugins: [
      new workbox.expiration.Plugin({
        // Cache only 20 images.
        maxEntries: 20,
        // Cache for a maximum of a week.
        maxAgeSeconds: 7 * 24 * 60 * 60,
      })
    ],
  })
);

workbox.routing.registerRoute(
  /^https:\/\/fonts\.googleapis\.com\/css\?family\=PT\+Sans\|Ubuntu/,
  new workbox.strategies.StaleWhileRevalidate({
    cacheName: 'google-fonts-PTsans-Ubuntu',
  })
);

// Use cache but update in background if old
workbox.routing.registerRoute(
  // Cache CSS files.
  /\.css$/,
  // Use cache but update in the background.
  new workbox.strategies.StaleWhileRevalidate({
    // Use a custom cache name.
    cacheName: 'css-cache',
  })
);

// Cache the Google Fonts stylesheets with a stale-while-revalidate strategy.
workbox.routing.registerRoute(
  /^https:\/\/fonts\.googleapis\.com/,
  new workbox.strategies.StaleWhileRevalidate({
    cacheName: 'google-fonts-stylesheets',
  })
);

// Cache the underlying font files with a cache-first strategy for 1 year.
workbox.routing.registerRoute(
  /^https:\/\/fonts\.gstatic\.com/,
  new workbox.strategies.CacheFirst({
    cacheName: 'google-fonts-webfonts',
    plugins: [
      new workbox.cacheableResponse.Plugin({
        statuses: [0, 200],
      }),
      new workbox.expiration.Plugin({
        maxAgeSeconds: 60 * 60 * 24 * 365,
        maxEntries: 30,
      }),
    ],
  })
);


//const cache = await caches.open(workbox.core.cacheNames.precache);

//var CACHE_NAME = 'homework4-cache-v1';
//var urlsToCache = [
//  '/',
//  '/main.css',
//  '/background.js',
//  '/img/lightblue.jpg',
//  '/img/lightgold.jpg',
//  'https://code.jquery.com/jquery-3.4.0.slim.min.js',
//  'https://fonts.googleapis.com/css?family=PT+Sans|Ubuntu',
//];
//
//self.addEventListener('install', function (event) {
//  // Perform install steps
//  event.waitUntil(
//    caches.open(CACHE_NAME).then(function (cache) {
//      console.log('Opened cache');
//      return cache.addAll(urlsToCache);
//    }),
//  );
//});

self.addEventListener('fetch', function (event) {
  const cacheFirst = new workbox.strategies.CacheFirst();
  event.respondWith(cacheFirst.makeRequest({
    request: event.request
  }));
});