'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "024806f2fa97902441809b55769a3504",
".git/config": "cb1b6e78e6f4938ee489e91b6ef88f74",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "0f065f5238b8cc3aa418628f9ca5632e",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "cb9bc49cd54a9746d02a31dbffeec5e6",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "a43c643d811173703c7987c32441985e",
".git/logs/refs/heads/main": "dcbddae99af82363a5352a24c4e56281",
".git/logs/refs/remotes/origin/main": "604409a80b2bec0e917b6f3fda87efd2",
".git/logs/refs/remotes/upstream/main": "6741a5619b9abe5dc91984ee76bf3e0e",
".git/objects/00/872401d541499f41b800154c6bfa5c529f8e29": "16076fc3308dbaba6d9a780b8148708a",
".git/objects/00/d2c272e6d94ac1de96622a8267bdd1022d5461": "3391f73e993df7d8ea3e1aab6001c5d4",
".git/objects/06/3820d7d6620907fb334a6664848cf8aff8405c": "6543c80049300c0a503e033c27fbf396",
".git/objects/0a/51da1b769ca0b5c9e4b715506ade86977f78b4": "e248c111364f80021b2960610a0d9220",
".git/objects/0a/b66a0aa2e4a8591d92bc77142c69650175d81a": "3c75d5a8dae7567c13ef185ec390de9d",
".git/objects/0a/c14bd164a0756aed664e28de0e68477b916744": "4a0c574d099cb62f51ef7d0bffb3637f",
".git/objects/0b/4c66c3a21c9de5f487a49f58180f07620cb918": "79ee7eac07a445e849c4ac2fd66fab48",
".git/objects/0d/0df08f7c3e147a8ae36017cf81a96e35b73717": "106e868f28a72727fb6fb0fa71123633",
".git/objects/0e/cabe1f70a1b23b2089541343cbe1c92e84a087": "ffd0074f13970ee4c2a00852f09552bf",
".git/objects/0e/d41579ccb9c34546aeb1afbea555c2e385ac6a": "53766a5c2b3681ee7653332fffcb7cf0",
".git/objects/0f/473a4f3b50295a3b8c3644d07b5c62e76aeb53": "9225ef0ec8c38ed11324026012265f04",
".git/objects/1c/7c1f5999d7b008fe962cbe5a5db7e8803d13df": "c2938ba9c02f3036a98c9fe979bf0566",
".git/objects/20/5bb5db271c6d8de8399864c7bb9b917f638893": "c993b22f115d7f3ae6d5b7b212806539",
".git/objects/24/b1f14dd348b07c9b8373758bde9ac14d16fd92": "dbf45d6c044044561758a334420e9569",
".git/objects/24/df596844532127d8eb89d6551ace99b51fb29a": "6eca53941b26cfeafa6c5c37b64d21fe",
".git/objects/26/74aef829bbcbbc7fd42ca73c91c5eaf5fa7856": "2bd1bceac5a76d8acb2c656f47af96ff",
".git/objects/29/e67fed40ef0e8f10896e7ef4bc6d00417558c7": "2af9d4a84b39b99aa82d354fdc3a3537",
".git/objects/2c/fe73f634fe8290496dbfec80ed5715c23ef641": "12b993d821a27cfade8c658e4b6cceab",
".git/objects/2d/cf3542c874e33cd8ab86ceb6f0ec444228aa78": "66baad0ae5d874f09b6eee790095bc65",
".git/objects/2f/e59d8c11b49849ffcff034ea6f61eee1ff0e95": "bf7ba75ed5cd64a239aac9529289c977",
".git/objects/3a/77a20127a258d33e54a1841722d9adb6fbdaaf": "f189ee6bb0e03e3c2148da45366a38fc",
".git/objects/3e/1b20689f802f2e1e04209d52c93ef3e4973675": "90e88deee83bf8f552b48c8e5a0019d7",
".git/objects/43/fceece8f193031a3419f5134c2d7753793e08d": "d4a0a8c75d77c16c90feeae145b5272e",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/4a/68c16bd50230b359786bfbdd16628fcc5860d9": "6cdb127138dbff2269937cc5d90dc4c3",
".git/objects/4e/89617a3696bd10c155ec378f4a65a9f89e9e3a": "d8056e20bae90d092b619c895129e982",
".git/objects/52/480a63b1f184ea74afb06662aa98fa98864864": "6f8b2cf71be2b4830601f9db57eded45",
".git/objects/5c/5fadbeb0b606db94a9efff8c7cf48889373bb8": "13a4e1a8e1a32ec4ac4d416e0df3a3f6",
".git/objects/61/41e5466d2473cb25be21ab814c9eba9df64781": "e2e500ba500368e3cdd4ffaecfd26aab",
".git/objects/63/5efc322bba903f65c335d64bc24fd8baf40e10": "1e9bc668d7ab0d89e830bdc5927af00c",
".git/objects/65/a6d0f3ec0aeceacb5db2af0b1b62b0ff270473": "0eecea101ad91ac6d15df9ca318e9b79",
".git/objects/6d/b86a2c37714b88cb8ab6df911688c7fca87505": "786929eba676a694b0141d5125acb679",
".git/objects/70/91d9358c56b60341d7d8af24b3dfd26288120f": "a65afe51797deb3bf62c3cea95580e02",
".git/objects/76/8651b2e249c2517c7b37bdbeea0a5d8bfbb707": "495b1c4fefa633f6afe4dc5840ebe18f",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/82/b349301039f348952b9cba7133da5f8b368ae3": "c4a163166f94ba4d0439667b9046811d",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/93/5136f228666764bc6ec69d355c092694b76316": "6d1eec3088e0f8814c623efa760bea11",
".git/objects/9a/1acedeec3039fd32e47191e4004f09c1f0c787": "05745eeeea64fc6fb7228291f2e402ee",
".git/objects/9c/132fd52f9c3b48d32022d6b1e461e5f279cfbb": "f3718079e0cc292b677b50a046938d4e",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a3/6ba4e3325a532cd181f887a4c40a2d8b5dd218": "5a057b91b9f2a002d4a802d9c02c4723",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/ab/915743e29570ab74ab151b1b164866e937d982": "d7a5eebd6f1f84e93bdedc1ca224b0aa",
".git/objects/b2/d57c4334498d176ecf37a875b213530f1a6c24": "3ffe472967923a6d1a63a7ae2b17b38a",
".git/objects/b3/a6b14d88a16b89eecd29530b3b4e47a8c0d05d": "d1fc664b9e7931451778f78b9ff6ea8b",
".git/objects/b5/29d3579ab6ca42b9012a114ec1428dbb427a79": "cd0fa0e3d26d206019b3af3cbbee8b1b",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/be/8aacdbbf40aa56612d7fc65f3e32163d77b514": "f7e8e7ea93bce549d5b33baf3bef5859",
".git/objects/c3/a3d3d3283e2313751080267db96ab2f65e7d0a": "473c5069b097732ecb8993aa4ae46815",
".git/objects/ca/66936889ba2138e0602e15140edb2a0645f78c": "fdf21708220b20b0a306838b7b488558",
".git/objects/cf/7f0464d8815b8cfe6e5826cf0fd81951ffe4f5": "cc6648f1f58a0bc4d53b08d290c6982a",
".git/objects/d4/de2bfd5291a6ac56c77851ba075de0c1aa1e79": "37b89704235b9828f00a5e831f113747",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e8/ebd22175eb1a13c526b7021ee734cd102ceead": "f2dbd863d298db4a106f8816213a720b",
".git/objects/e9/e575d0b36ebd696294496017834c26b62e1505": "8eca52e53d59927cc7c00a13888ea67b",
".git/objects/ed/0bf14c0e846a490c4aba4c48ca26bcb3908ec2": "4c9de972f0d395a3183f81c3f70243b7",
".git/objects/ed/112b1870fcf69a4445819734f77cab3c1d3028": "8f78c9d71bd1449b44e7395e7869c749",
".git/objects/f0/9724ee15803c60280996e9c8be4daffa18c4ea": "7a7615ceeaf21ca3c7fe3026105a54af",
".git/objects/f4/85885486060132bb194408cbe745ba52e61a8c": "715f2b8bdff0c17c1cb0c8e33c31243b",
".git/objects/f5/03910de242c773dc6677fc2d144b08e0a923e8": "4dfe6ee194ab559a5a8a6373b6f18eda",
".git/ORIG_HEAD": "f43c052f6ff57886670674b6c2340f28",
".git/refs/heads/main": "f43c052f6ff57886670674b6c2340f28",
".git/refs/remotes/origin/main": "f43c052f6ff57886670674b6c2340f28",
".git/refs/remotes/upstream/main": "68719d59a3bfb6c8f71548a5682c7b7a",
"assets/AssetManifest.json": "a25bd55018d65f4688bdb2636ac0e410",
"assets/assets/icons/behance.svg": "35ad2d47e647d0b168e7707b2984c6b5",
"assets/assets/icons/check.svg": "4220c82511cc1dfb40b8bba7d25c5f55",
"assets/assets/icons/download.svg": "628700a3031424d215a441fab2da1731",
"assets/assets/icons/dribble.svg": "d392567c5678d42472d2c7b766268101",
"assets/assets/icons/github.svg": "9226aa209923e38c0a6ddcb236e2bc68",
"assets/assets/icons/linkedin.svg": "5b2195ddf9e879047dd8a163c4194920",
"assets/assets/icons/twitter.svg": "a4a0163fef48a4247a305528c07bc4fa",
"assets/assets/images/bg.jpeg": "c6449162dc3940daa640a43101cfd66c",
"assets/assets/images/dip.jpg": "b5de740a200ec2acc787441a84f894e4",
"assets/assets/images/IMG_7344.jpg": "bb74c3d7c6f5599d40c05a866b31ffd6",
"assets/assets/images/pp.jpg": "f4561c1ab7d70630f9661b7911a26f98",
"assets/assets/images/rakib.jpg": "1621e52cc24e41267f74e3d744040176",
"assets/assets/images/spy.png": "98a631cfcc3f132080ae939ffb5c3495",
"assets/assets/images/sus.png": "61bc4228544a2b903b9609bff4848179",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "7e7a6cccddf6d7b20012a548461d5d81",
"assets/NOTICES": "ac6abd8878476595af5b9f906f9ee7e3",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"canvaskit/canvaskit.js": "c2b4e5f3d7a3d82aed024e7249a78487",
"canvaskit/canvaskit.wasm": "4b83d89d9fecbea8ca46f2f760c5a9ba",
"canvaskit/profiling/canvaskit.js": "ae2949af4efc61d28a4a80fffa1db900",
"canvaskit/profiling/canvaskit.wasm": "95e736ab31147d1b2c7b25f11d4c32cd",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"index.html": "27a7af0e1a551e67f06f42780301ae30",
"/": "27a7af0e1a551e67f06f42780301ae30",
"main.dart.js": "88de18ccd7c1f1e207e0a2dfa54fc0fe",
"manifest.json": "5e85784ec60916ec52fa3807d7fdeb3f",
"version.json": "1ac57eb0214a8f5216f1da7dd479b33f"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
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
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
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
