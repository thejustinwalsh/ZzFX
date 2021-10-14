const cache = "zzfx-1.1.8";
const path = "./ZzFX";
const assets = [
  `${path}/`,
  `/index.html`,
  `/favicon.png`,
  `/ZzFXMicro.js`,
  `/wav.js`,
];

self.addEventListener("install", installEvent => {
  installEvent.waitUntil(
    caches.open(cache).then(cache => {
      cache.addAll(assets)
    })
  )
});

self.addEventListener("fetch", fetchEvent => {
  fetchEvent.respondWith(
    caches.match(fetchEvent.request).then(res => {
      return res || fetch(fetchEvent.request)
    })
  )
});