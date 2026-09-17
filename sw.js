// GoalHub service worker — makes the app installable and lets the shell
// (not live data) load offline. Live scores/fixtures are never cached
// here: those already have their own real-data fallback cache in
// script.js (localStorage-based, with an honest "showing cached results"
// banner) — this worker only ever touches same-origin static files, so it
// can't go stale in a way that misrepresents a live match.
const CACHE_VERSION = "v2";
const SHELL_CACHE = `goalhub-shell-${CACHE_VERSION}`;

const SHELL_FILES = [
  "/",
  "/index.html",
  "/script.js",
  "/styles.css",
  "/manual-data.js",
  "/manifest.json",
  "/icon-192.png",
  "/icon-512.png"
];

self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(SHELL_CACHE)
      .then(cache => cache.addAll(SHELL_FILES))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener("activate", event => {
  event.waitUntil(
    caches.keys()
      .then(keys => Promise.all(
        keys.filter(key => key !== SHELL_CACHE).map(key => caches.delete(key))
      ))
      .then(() => self.clients.claim())
  );
});

self.addEventListener("fetch", event => {
  const url = new URL(event.request.url);

  // Only ever intercept same-origin GET requests for the static shell —
  // every live-data call (the Worker, TheSportsDB, API-Football) is
  // cross-origin and passes straight through untouched.
  if (event.request.method !== "GET" || url.origin !== self.location.origin) {
    return;
  }

  // HTML: network-first, so a deployed change shows up immediately for
  // anyone online, falling back to the last cached shell when offline.
  if (event.request.mode === "navigate" || url.pathname.endsWith(".html") || url.pathname === "/") {
    event.respondWith(
      fetch(event.request)
        .then(response => {
          const copy = response.clone();
          caches.open(SHELL_CACHE).then(cache => cache.put(event.request, copy));
          return response;
        })
        .catch(() => caches.match(event.request).then(cached => cached || caches.match("/index.html")))
    );
    return;
  }

  // Other same-origin static files (script.js, styles.css, icons):
  // network-first, same as HTML. This site changes daily right now, and a
  // cache-first strategy here previously meant a phone that cached script.js
  // once would keep serving that exact copy indefinitely alongside a fresh
  // HTML file — a real version mismatch (new HTML referencing something an
  // old cached script.js doesn't know about) that can throw and blank the
  // whole page. Falls back to cache only when the network genuinely fails.
  event.respondWith(
    fetch(event.request)
      .then(response => {
        const copy = response.clone();
        caches.open(SHELL_CACHE).then(cache => cache.put(event.request, copy));
        return response;
      })
      .catch(() => caches.match(event.request))
  );
});
