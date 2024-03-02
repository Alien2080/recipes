const staticDevCoffee = "aliens-recipes-v1";
const assets = [
  "/",
  "/index.html",
  "/data/styles.css",
  "/data/recipes.js",
  "/images/beef_bolognese.png",
  "/images/chicken_curry.png",
  "/images/chicken_schnitzel"
];

self.addEventListener("install", installEvent => {
  installEvent.waitUntil(
    caches.open(staticDevCoffee).then(cache => {
      cache.addAll(assets);
    })
  );
});

self.addEventListener("fetch", fetchEvent => {
  fetchEvent.respondWith(
    caches.match(fetchEvent.request).then(res => {
      return res || fetch(fetchEvent.request);
    })
  );
});