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

workbox.precaching.precacheAndRoute([])


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


self.addEventListener('fetch', function (event) {
  const cacheFirst = new workbox.strategies.CacheFirst();
  event.respondWith(cacheFirst.makeRequest({
    request: event.request
  }));
});