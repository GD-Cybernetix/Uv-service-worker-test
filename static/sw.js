importScripts("/static/uv.bundle.js");
importScripts("/static/uv.config.js");
importScripts("/static/uv.sw.js");

const sw = new UVServiceWorker();
let userKey = new URL(location).searchParams.get('userkey');

self.addEventListener("fetch", (event) => event.respondWith(sw.fetch(event)));
