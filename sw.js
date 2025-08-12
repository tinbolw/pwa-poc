// https://learn.microsoft.com/en-us/microsoft-edge/progressive-web-apps/how-to/#step-4---continue-building-the-user-interface-of-your-app

const CACHE_NAME = `untitledApp`;

// Use the install event to pre-cache all initial resources.
self.addEventListener('install', event => {
  event.waitUntil((async () => {
    const cache = await caches.open(CACHE_NAME);
    // TODO make dynamically add files in folders
    // / seems to be required for recaching redirects to home page
    cache.addAll([
      '/',
      'index.html',
      'html/apitesting.html',
      'html/browse.html',
      'html/history.html',
      'html/library.html',
      'html/settings.html',
      'html/updates.html',
      'style.css',
      'css/desktop.css',
      'css/mobile.css',
      'js/internet.js',
      'js/randomimage.js'
    ]); // add needed files to run here
  })());
});

// not sure if i want to have this part, rather just disable if no internet
// self.addEventListener('fetch', event => {
//   event.respondWith((async () => {
//     const cache = await caches.open(CACHE_NAME);

//     // Get the resource from the cache.
//     const cachedResponse = await cache.match(event.request);
//     if (cachedResponse) {
//       return cachedResponse;
//     } else {
//         try {
//           // If the resource was not in the cache, try the network.
//           const fetchResponse = await fetch(event.request);

//           // Save the resource in the cache and return it.
//           cache.put(event.request, fetchResponse.clone());
//           return fetchResponse;
//         } catch (e) {
//           // The network failed.
//         }
//     }
//   })());
// });