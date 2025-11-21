const cacheName = "munkaido-cache-v1";
const filesToCache = [
    "./",
    "./index.html",
    "./manifest.json"
];

// Telepítéskor cache-elünk
self.addEventListener("install", (event) => {
    event.waitUntil(
        caches.open(cacheName).then((cache) => {
            return cache.addAll(filesToCache);
        })
    );
});

// Kérés esetén cache-ből vagy netről töltünk
self.addEventListener("fetch", (event) => {
    event.respondWith(
        caches.match(event.request).then((response) => {
            return response || fetch(event.request);
        })
    );
});
