// sw.js
const CACHE_NAME = "html-playground-v4";
const CORE_ASSETS = [
  "./",
  "./index.html",
  "./runner.html",
  "./sw.js",
  "./ace.js",
  "./theme-monokai.js",
  "./mode-html.js",
  "./worker-html.js",
  "./ext-language_tools.js",
  "./ext-searchbox.js",
  "./ext-beautify.js",
  "./ext-statusbar.js",
  "./snippets/html.js"
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(async (cache) => {
      for (const url of CORE_ASSETS) {
        try {
          await cache.add(url);
        } catch {}
      }
    }).then(() => self.skipWaiting())
  );
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then(async (keys) => {
      await Promise.all(keys.map((key) => {
        if (key !== CACHE_NAME) return caches.delete(key);
      }));
      await self.clients.claim();
    })
  );
});

self.addEventListener("fetch", (event) => {
  if (event.request.method !== "GET") return;

  event.respondWith(
    caches.match(event.request).then((cached) => {
      if (cached) return cached;

      return fetch(event.request).then((response) => {
        const copy = response.clone();
        caches.open(CACHE_NAME).then((cache) => {
          try { cache.put(event.request, copy); } catch {}
        });
        return response;
      }).catch(() => cached);
    })
  );
});