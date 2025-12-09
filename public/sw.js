// public/sw.js
// Service Worker básico para permitir instalación de la PWA

self.addEventListener('install', (event) => {
  self.skipWaiting(); // activa el SW inmediatamente
});

self.addEventListener('activate', (event) => {
  event.waitUntil(self.clients.claim()); // toma control de todas las páginas
});
