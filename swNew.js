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

workbox.precaching.precacheAndRoute([
  {
    "url": "background.js",
    "revision": "657784ad5712481de10675e8a3494f7a"
  },
  {
    "url": "fonts/IBM_Plex_Mono/IBMPlexMono-Medium.ttf",
    "revision": "96d40e95175b9177246cc95a459cd0ff"
  },
  {
    "url": "fonts/PT_Sans/PT_Sans-Web-Regular.ttf",
    "revision": "70fda92429e8a5f2fbaa5f10da118c74"
  },
  {
    "url": "fonts/Ubuntu/Ubuntu-Bold.ttf",
    "revision": "2e01ce154e5e401e34b4af6f96c92b2f"
  },
  {
    "url": "fonts/Ubuntu/Ubuntu-Regular.ttf",
    "revision": "238c32cd050af8099eeaa8f50dd04ec9"
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
    "revision": "8f7138b880d703764cb1f7cdab1e7382"
  },
  {
    "url": "main.css",
    "revision": "b511cac62166953fd9254d832fedb2d0"
  },
  {
    "url": "sw.js",
    "revision": "fcc5e8069302dd155aded59844632657"
  },
  {
    "url": "swNew2.js",
    "revision": "e0c68b8ebab5a8d191ed99ee7d2df6ed"
  },
  {
    "url": "third_party/workbox-v4.3.0/workbox-background-sync.dev.js",
    "revision": "5163dbff976e9c367e2d8082c42d8e82"
  },
  {
    "url": "third_party/workbox-v4.3.0/workbox-background-sync.prod.js",
    "revision": "fe462ec9070077c7d67a6703b7e9dcbe"
  },
  {
    "url": "third_party/workbox-v4.3.0/workbox-broadcast-update.dev.js",
    "revision": "049e8b58ccea1d3a9e2f7e7230911405"
  },
  {
    "url": "third_party/workbox-v4.3.0/workbox-broadcast-update.prod.js",
    "revision": "3feb51158fd519abadaa0e9595758c99"
  },
  {
    "url": "third_party/workbox-v4.3.0/workbox-cacheable-response.dev.js",
    "revision": "b4ef1cd9cf8c60e6368624cb722f980d"
  },
  {
    "url": "third_party/workbox-v4.3.0/workbox-cacheable-response.prod.js",
    "revision": "ba959ad8274469fa7a3a85b7979e04b1"
  },
  {
    "url": "third_party/workbox-v4.3.0/workbox-core.dev.js",
    "revision": "eaa5402bd36a9359fa8f09e7844154e8"
  },
  {
    "url": "third_party/workbox-v4.3.0/workbox-core.prod.js",
    "revision": "c679f5659e7d501c68849ae863df5285"
  },
  {
    "url": "third_party/workbox-v4.3.0/workbox-expiration.dev.js",
    "revision": "247d14b3c3cc31bb1966936c7957c359"
  },
  {
    "url": "third_party/workbox-v4.3.0/workbox-expiration.prod.js",
    "revision": "7cf1bcea38b4c95c726382236a9d6610"
  },
  {
    "url": "third_party/workbox-v4.3.0/workbox-navigation-preload.dev.js",
    "revision": "5329bcf9e603625a8ceb66bd41858790"
  },
  {
    "url": "third_party/workbox-v4.3.0/workbox-navigation-preload.prod.js",
    "revision": "c56639398e95e46608d78f3f06e1f21f"
  },
  {
    "url": "third_party/workbox-v4.3.0/workbox-offline-ga.dev.js",
    "revision": "bf7bf3a2eaad466eda56af64ae8e4ad9"
  },
  {
    "url": "third_party/workbox-v4.3.0/workbox-offline-ga.prod.js",
    "revision": "309939f2cb5fbda535fa1c84e5170c30"
  },
  {
    "url": "third_party/workbox-v4.3.0/workbox-precaching.dev.js",
    "revision": "759d924075389dbb7551e3f3af7e2370"
  },
  {
    "url": "third_party/workbox-v4.3.0/workbox-precaching.prod.js",
    "revision": "57863e8ee89d7e64f03d4f7bdc19eae1"
  },
  {
    "url": "third_party/workbox-v4.3.0/workbox-range-requests.dev.js",
    "revision": "1d8912c19664030b0cc6af4cba2657ec"
  },
  {
    "url": "third_party/workbox-v4.3.0/workbox-range-requests.prod.js",
    "revision": "3a60d9f8563f1d41feda873252a87ad1"
  },
  {
    "url": "third_party/workbox-v4.3.0/workbox-routing.dev.js",
    "revision": "59e4e6b9bf058013aa3788f1951fc96f"
  },
  {
    "url": "third_party/workbox-v4.3.0/workbox-routing.prod.js",
    "revision": "4475941b51e97d5742812aa3211bfdc9"
  },
  {
    "url": "third_party/workbox-v4.3.0/workbox-strategies.dev.js",
    "revision": "9b1169319e9e9298712f36b624026ed6"
  },
  {
    "url": "third_party/workbox-v4.3.0/workbox-strategies.prod.js",
    "revision": "3f29d2ef1bd51de3658df04c76497fef"
  },
  {
    "url": "third_party/workbox-v4.3.0/workbox-streams.dev.js",
    "revision": "e308a228623b2afcc4720014d81e2798"
  },
  {
    "url": "third_party/workbox-v4.3.0/workbox-streams.prod.js",
    "revision": "09898d510579eb2255c657e99bcafecb"
  },
  {
    "url": "third_party/workbox-v4.3.0/workbox-sw.js",
    "revision": "139a8675b9982727d3bbb225c963aea5"
  },
  {
    "url": "third_party/workbox-v4.3.0/workbox-window.dev.umd.js",
    "revision": "7a0b24e68d58a0f7f37f6e1ab8c4e6ab"
  },
  {
    "url": "third_party/workbox-v4.3.0/workbox-window.prod.umd.js",
    "revision": "da9a15dcd87a024f108b5c63bc9658b4"
  },
  {
    "url": "workbox-config.js",
    "revision": "d48bf0211efc0288cd838271c81a88c6"
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

self.addEventListener('fetch', function (event) {
  const cacheFirst = new workbox.strategies.CacheFirst();
  event.respondWith(cacheFirst.makeRequest({
    request: event.request
  }));
});