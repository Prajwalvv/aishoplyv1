'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "f5918724e5786b4c1e56bc4de9267a65",
"assets/AssetManifest.bin.json": "fca4f33c4b58a1d4e62795c440ab7dd0",
"assets/AssetManifest.json": "624cad8f722c39a86e69a306af18e0ef",
"assets/assets/audios/favicon.png": "5dcef449791fa27946b3d35ad8803796",
"assets/assets/fonts/favicon.png": "5dcef449791fa27946b3d35ad8803796",
"assets/assets/fonts/Poppins-Medium.ttf": "bf59c687bc6d3a70204d3944082c5cc0",
"assets/assets/fonts/Poppins-Regular.ttf": "093ee89be9ede30383f39a899c485a82",
"assets/assets/images/080.png": "187adba7ab3805122112b1336ce4329f",
"assets/assets/images/56b53354-0ed4-4586-8925-68757362c572.gif": "80bdb524c3075193d7669f89fb7e6b47",
"assets/assets/images/amazon-4.png": "ae8851d0b11066401f424c1c34a7494f",
"assets/assets/images/amd-logo-1-2.png": "3fc6b2c7456cc8684a090fe1651494b5",
"assets/assets/images/b1.png": "dfc4bcb8872a47cf8db33d5223acbf71",
"assets/assets/images/b3.png": "570166a76d60b743cac595e7c5718270",
"assets/assets/images/cisco-2-1-2.png": "3fd922d6be91212fa5af875618c68d90",
"assets/assets/images/dd.png": "38e0725c3821c7238c010d73a528555d",
"assets/assets/images/dddd.png": "21a83c40791d363a3464d54f1609fde3",
"assets/assets/images/dddddd.png": "536fbc66aaec4962bb56944a2710264d",
"assets/assets/images/Designerr_(15).png": "8555acc5c690a9a29dbede56aab08c87",
"assets/assets/images/Designer_(14).png": "c0611ac05bd258345b24fa6662e35d47",
"assets/assets/images/Designer_(9).png": "18dc340545a253a3c4b9a658e6889762",
"assets/assets/images/dfd.png": "401cdee668a8ad4c448c5d9320116c02",
"assets/assets/images/dropcam.png": "2edb8ca5e1804c32ab78ed6fd4689fa2",
"assets/assets/images/favicon.png": "32cdf039d5628c04d6d1d53b66c63668",
"assets/assets/images/g10.png": "98f40690c100d5221272229d237c4db5",
"assets/assets/images/gg.png": "7eda7598989ef577e572aa55527f0eea",
"assets/assets/images/Group_138.png": "c69b7bfc42fff379ea67b9f0d12e876e",
"assets/assets/images/logitech-2-1-3-1.png": "72f3e7c667498ccc713b27dcb7b665cb",
"assets/assets/images/page-head.png": "b3c6167310c39a2a7df1c1bde9e88e63",
"assets/assets/images/PlaceholdermainImage.png": "faa9e1974031791ecff16cb9ad56e665",
"assets/assets/images/poster.png": "fcc2018c809015590a9aeacd6dc733ff",
"assets/assets/images/Spotify-2-2.png": "2ae6f4756141b13016772fb65ed10a4b",
"assets/assets/images/vector.png": "872396417f9f8d0af97194018d33564f",
"assets/assets/lottie_animations/Advantage.json": "342f176fc589cbf3f5c9b0f4e5c8f6f0",
"assets/assets/lottie_animations/Affiliate.json": "51d1365c74eef72c4743365e6f0d0b27",
"assets/assets/lottie_animations/camera.json": "d5bcf88b5753083a88e5948a4439f133",
"assets/assets/lottie_animations/Chatbot.json": "4f167fa0773b4050d2e3a6f7898260a4",
"assets/assets/lottie_animations/favicon.png": "5dcef449791fa27946b3d35ad8803796",
"assets/assets/lottie_animations/Research.json": "866cd1a8aba5ce81a3e90d4f609c884a",
"assets/assets/pdfs/favicon.png": "5dcef449791fa27946b3d35ad8803796",
"assets/assets/rive_animations/favicon.png": "5dcef449791fa27946b3d35ad8803796",
"assets/assets/videos/favicon.png": "5dcef449791fa27946b3d35ad8803796",
"assets/FontManifest.json": "5a32d4310a6f5d9a6b651e75ba0d7372",
"assets/fonts/MaterialIcons-Regular.otf": "42b35f4a161418e616b94a2f562f64f8",
"assets/NOTICES": "63194225ffe6420848c4eb7759d70658",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "c971240ea04da34222fc9fb6cd7b3ccc",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "60170625fd25bb7175a67ccd0aa23e7e",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "b3e86186dc3c3ae56d92e26f576afe1c",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "738255d00768497e86aa4ca510cce1e1",
"canvaskit/canvaskit.js.symbols": "74a84c23f5ada42fe063514c587968c6",
"canvaskit/canvaskit.wasm": "9251bb81ae8464c4df3b072f84aa969b",
"canvaskit/chromium/canvaskit.js": "901bb9e28fac643b7da75ecfd3339f3f",
"canvaskit/chromium/canvaskit.js.symbols": "ee7e331f7f5bbf5ec937737542112372",
"canvaskit/chromium/canvaskit.wasm": "399e2344480862e2dfa26f12fa5891d7",
"canvaskit/skwasm.js": "5d4f9263ec93efeb022bb14a3881d240",
"canvaskit/skwasm.js.symbols": "c3c05bd50bdf59da8626bbe446ce65a3",
"canvaskit/skwasm.wasm": "4051bfc27ba29bf420d17aa0c3a98bce",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "32cdf039d5628c04d6d1d53b66c63668",
"flutter.js": "383e55f7f3cce5be08fcf1f3881f585c",
"flutter_bootstrap.js": "33c412f9decac89badb18a132273c0fa",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"index.html": "2f2e8737cddb978d43e9dcf556e7a5b5",
"/": "2f2e8737cddb978d43e9dcf556e7a5b5",
"main.dart.js": "38b6aeaefd09af3a62d9c0c7e2d818ba",
"manifest.json": "5289960a69e0348fd5009b3090920c1d",
"poster.png": "fcc2018c809015590a9aeacd6dc733ff",
"version.json": "c0f0f234a658d219c561700c31773241"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
