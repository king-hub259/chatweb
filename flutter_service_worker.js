'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "dee74c20e7ac6408569e8702c60660d5",
"version.json": "f30e01ed3c0c3de92b8b62e965def3ee",
"index.html": "1c02053c30db31336308e2b86cae2769",
"/": "1c02053c30db31336308e2b86cae2769",
"firebase-messaging-sw.js": "871cfb2c215e015bb3a33c8d677e0409",
"main.dart.js": "2beb1fef9e2a18d3e0cc2effcaeffea4",
"flutter.js": "83d881c1dbb6d6bcd6b42e274605b69c",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"logo.png": "f026724dea705282255b10bff4abf405",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "74d0d7edd03c1680e533f7ba67e8392f",
"assets/AssetManifest.json": "8fb54b44de8824630cb3edeffb748dbd",
"assets/NOTICES": "967513c2aa4b06fa2874daa138e102fb",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/AssetManifest.bin.json": "c69aeb0bdd490df5c816f9df1d3de9c8",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "b5798a91e963ce5b33a66650476dcc97",
"assets/packages/flutter_dropzone_web/assets/flutter_dropzone.js": "dddc5c70148f56609c3fb6b29929388e",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "c07c58ac6565488c12321564ce026103",
"assets/fonts/MaterialIcons-Regular.otf": "26ceaa945867d58982ded7c67f36685f",
"assets/assets/svg/gallery1.svg": "2e410f380ef3dd4cf33a935f129e18e5",
"assets/assets/svg/usageControl1.svg": "13b832df1eb232de9b4c5b7455ad8252",
"assets/assets/svg/translate.svg": "15cf0a602bb986e2340b87e0d393cc8b",
"assets/assets/svg/user.svg": "16d57aed7c2254e2853c2123790a0a37",
"assets/assets/svg/rectangle.svg": "f07ab3428646253c4d9e644ecb2adf74",
"assets/assets/svg/logout.svg": "566aed35570776fcfedb39c3b0b114b7",
"assets/assets/svg/export.svg": "56c2f60f1772e5967af6289f895984c2",
"assets/assets/svg/appControl1.svg": "197d7054066602de745b9bcf3c2b7939",
"assets/assets/svg/videoCall.svg": "4e8b1572f505ed17ce08128f0b417c83",
"assets/assets/svg/languages.svg": "b783eb6fe4b176eeed085b8a02d452cf",
"assets/assets/svg/dislike.svg": "379d5c52ea79fb59aed23bad262e59c0",
"assets/assets/svg/gallery.svg": "44ea276b101767046c2c4cb8b04cbb88",
"assets/assets/svg/appControl.svg": "09a2f060e3609d526b4b56fa3af31dde",
"assets/assets/svg/bell.svg": "df42a66b1264bfff6cee88f92726b12a",
"assets/assets/svg/logout1.svg": "bf7508ffe1a2273af0f29d04f4a3ef3e",
"assets/assets/svg/dashboard.svg": "9a16839a4b727302caa3be621f794bdd",
"assets/assets/svg/audioCalls.svg": "392d8af402902354e9c69dc7177dbf24",
"assets/assets/svg/translate1.svg": "9a342f599f830326e2e7399c007d8604",
"assets/assets/svg/orders.svg": "9e6fc3d16c4e1c3523a3bf761366a3ec",
"assets/assets/svg/copy.svg": "36e0fe5f13f53c0c147c9998c37d3c2b",
"assets/assets/svg/dislike1.svg": "92cb5bf7d8112568b51a69eb33561222",
"assets/assets/svg/totalCalls.svg": "4b12ad9582aa4ab60b30def9ebc9437e",
"assets/assets/svg/status1.svg": "a02b4ca966d9c1ffa0b3dd187ffccd2f",
"assets/assets/svg/groups.svg": "e06f50ce42bde7313a8e4e6704f84d9e",
"assets/assets/svg/line.svg": "8cb26f62ed6a5e26b29138df2bab81f1",
"assets/assets/svg/addUser.svg": "b0b448764ffc01c0919d296c79dd2d72",
"assets/assets/svg/india.svg": "8f4d9b974f6de9d54da9c5e634f918b8",
"assets/assets/svg/sun.svg": "72e168bf8c1dd74b4fc3929694980b6e",
"assets/assets/svg/edit.svg": "9c7f79f7953057afdfb5f5e6bb995e72",
"assets/assets/svg/page.svg": "1ac924fd1ba2f1279e8dacd84e40bafd",
"assets/assets/svg/language.svg": "b14df79ab8552d8c7b12eedd72ade4d1",
"assets/assets/svg/delete.svg": "c3247296418eef9494035e73dde9ea41",
"assets/assets/svg/videoCalls.svg": "fdffded57c5ea185a074c39203471c08",
"assets/assets/svg/call.svg": "2229fac8a53207ec5d1311d659675bd7",
"assets/assets/svg/eye.svg": "cd38ab9fbec9437a149ce637f6d40b32",
"assets/assets/svg/status.svg": "6129085e92343b8a039dc033fa053fd5",
"assets/assets/svg/totalUser.svg": "976faa5d768b919783f4b8477504d7c3",
"assets/assets/svg/usageControl.svg": "1008c47dc9a2d250513911c50268667f",
"assets/assets/svg/dashboard1.svg": "813f107db38d48c7430c7336e420ec8f",
"assets/assets/svg/moon.svg": "00856132da3a85e3cc71172b2c07b1c0",
"assets/assets/svg/light.svg": "837661688a461de4bbe42b1d3dc7f29e",
"assets/assets/svg/dashicon.svg": "f55168dce7a34eb4f9675c2b5c2ea5d0",
"assets/assets/images/dashboard.png": "61c3c34ccbf94c208e48b03af7ae9ce8",
"assets/assets/images/bangla.png": "a70a26f1621c4d2355c07355b50b08b9",
"assets/assets/images/gallery.png": "8876e1ee8067e1499cab087629842f8e",
"assets/assets/images/us.png": "2af882808d726140a04ca9c1797be299",
"assets/assets/images/chatify.png": "6660b4faea1a177f00d9f3c97b1792b1",
"assets/assets/images/turkey.png": "ff42c1834502afcdbef7b2695659298c",
"assets/assets/images/logout.png": "dbc6109d699ed13999f56457fd4b3f22",
"assets/assets/images/chatifyLogo1.png": "76d238d4a1cb7261f8dcd3ff811b29bf",
"assets/assets/images/chatifyLogo2.png": "031f09c524c582b65eda0fdeb1d13be2",
"assets/assets/images/moon.png": "5ddec3b15e80af0201ee4da526ca9015",
"assets/assets/images/loginBg5.png": "232fa72058953c108e7933902b300408",
"assets/assets/images/appSetting.png": "e8148c19403e2e0b6fc6bdea31b1a0b0",
"assets/assets/images/dottedDivider.png": "ed329b017d01eb58092888bc0a4c874a",
"assets/assets/images/loginBg4.png": "dcbc47173d4b30d1bd03093c845f52c2",
"assets/assets/images/logo1.png": "b123e505587555fcc90cce41a42469b3",
"assets/assets/images/pakistan.png": "450c3fd69eeb2401cfe5cabcab5bfe19",
"assets/assets/images/usageControl.png": "cb0f463cf9b5c22b1cfdba86e84b37a7",
"assets/assets/images/logo.png": "f026724dea705282255b10bff4abf405",
"assets/assets/images/loginBg3.png": "fd9d8cf6025e2b87911451f8ae878ddf",
"assets/assets/images/loginBg2.png": "9f8dbfb89eac7a0090697a82d6bfdcd1",
"assets/assets/images/loginBg1.png": "d8a9cdd8eec504d406aacc0999bf59e0",
"assets/assets/images/loginBg.png": "5f2daf08aee49d4fcd2e7bb6ec211463",
"assets/assets/images/india.png": "3d50ee4fb3ba7786f551b428ff0c4421",
"assets/assets/images/line.png": "77f1a03260d43a9f3e3149bd1d07acf3",
"assets/assets/images/addUser.png": "5405d77c51fb46a0cbf26cb96fe4da4d",
"canvaskit/skwasm.js": "ea559890a088fe28b4ddf70e17e60052",
"canvaskit/skwasm.js.symbols": "9fe690d47b904d72c7d020bd303adf16",
"canvaskit/canvaskit.js.symbols": "27361387bc24144b46a745f1afe92b50",
"canvaskit/skwasm.wasm": "1c93738510f202d9ff44d36a4760126b",
"canvaskit/chromium/canvaskit.js.symbols": "f7c5e5502d577306fb6d530b1864ff86",
"canvaskit/chromium/canvaskit.js": "8191e843020c832c9cf8852a4b909d4c",
"canvaskit/chromium/canvaskit.wasm": "c054c2c892172308ca5a0bd1d7a7754b",
"canvaskit/canvaskit.js": "728b2d477d9b8c14593d4f9b82b484f3",
"canvaskit/canvaskit.wasm": "a37f2b0af4995714de856e21e882325c"};
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
