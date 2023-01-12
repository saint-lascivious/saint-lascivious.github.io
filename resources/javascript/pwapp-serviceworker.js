/**
 * sainternet.xyz - resources/javascript/pwapp-serviceworker.js
 * Copyright 2022 saint-lascivious (Hayden Pearce). All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License
 */

const cacheName = 'sainternet-v1';
const cacheFiles = [
  '/',
  '/265.html',
  '/404.html',
  '/connecttosainternet.html',
  '/filtereddns.html',
  '/frequentlyaskedquestions.html',
  '/index.html',
  '/newsandupdates.html',
  '/pokedexoverdns.html',
  '/portsandprotocols.html',
  '/projects.html',
  '/reportaproblem.html',
  '/technologies.html',
  '/testsainternet.html',
  '/downloads/',
  '/downloads/apple/',
  '/downloads/apple/sainternet-https-only.mobileconfig',
  '/downloads/apple/sainternet-tls-only.mobileconfig',
  '/downloads/apple/sainternet-https-and-tls.mobileconfig',
  '/resources/',
  '/resources/icons/',
  '/resources/icons/pwa-maskable-128x128.png',
  '/resources/icons/favicon-265-48x48.png',
  '/resources/icons/favicon-404.ico',
  '/resources/icons/android-chrome-265-256x256.png',
  '/resources/icons/favicon-265.ico',
  '/resources/icons/favicon-404-16x16.png',
  '/resources/icons/favicon-265-32x32.png',
  '/resources/icons/pwa-maskable-72x72.png',
  '/resources/icons/favicon-265-16x16.png',
  '/resources/icons/pwa-maskable-192x192.png',
  '/resources/icons/pwa-maskable-96x96.png',
  '/resources/icons/android-chrome-265-192x192.png',
  '/resources/icons/favicon-48x48.png',
  '/resources/icons/favicon-404-32x32.png',
  '/resources/icons/favicon-404-48x48.png',
  '/resources/icons/android-chrome-404-192x192.png',
  '/resources/icons/favicon-32x32.png',
  '/resources/icons/pwa-maskable-48x48.png',
  '/resources/icons/favicon-16x16.png',
  '/resources/icons/pwa-maskable-512x512.png',
  '/resources/icons/android-chrome-192x192.png',
  '/resources/icons/android-chrome-404-256x256.png',
  '/resources/icons/android-chrome-256x256.png',
  '/resources/icons/pwa-maskable-384x384.png',
  '/resources/javascript/',
  '/resources/javascript/load-fonts.min.js',
  '/resources/javascript/pwapp.min.js',
  '/resources/javascript/random_phrase.min.js',
  '/resources/javascript/pwapp-serviceworker.min.js',
  '/resources/javascript/material.min.js',
  '/resources/javascript/sainternet.min.js',
  '/resources/stylesheets/',
  '/resources/stylesheets/material.light_blue-red.min.css',
  '/resources/stylesheets/material.indigo-red.min.css',
  '/resources/stylesheets/material.green-red.min.css',
  '/resources/stylesheets/material.teal-red.min.css',
  '/resources/stylesheets/table.min.css',
  '/resources/stylesheets/img.min.css',
  '/resources/stylesheets/material.cyan-red.min.css',
  '/resources/stylesheets/material.purple-red.min.css',
  '/resources/stylesheets/material.amber-red.min.css',
  '/resources/stylesheets/material.blue-red.min.css',
  '/resources/stylesheets/material.deep_purple-red.min.css',
  '/resources/stylesheets/datetime.min.css',
  '/resources/stylesheets/material.yellow-red.min.css',
  '/resources/stylesheets/material.orange-red.min.css',
  '/resources/stylesheets/material.deep_orange-red.min.css',
  '/resources/stylesheets/material.red-blue.min.css',
  '/resources/stylesheets/material.light_green-red.min.css',
  '/resources/stylesheets/ribbons.min.css',
  '/resources/stylesheets/button_home.min.css',
  '/resources/stylesheets/material.pink-red.min.css',
  '/resources/stylesheets/sainternet.min.css',
  '/resources/stylesheets/pre.min.css',
  '/resources/fontawesome/',
  '/resources/fontawesome/css/',
  '/resources/fontawesome/css/solid.min.css',
  '/resources/fontawesome/css/fontawesome.min.css',
  '/resources/fontawesome/css/brands.css',
  '/resources/fontawesome/webfonts/',
  '/resources/fontawesome/webfonts/fa-brands-400.ttf',
  '/resources/fontawesome/webfonts/fa-brands-400.woff2',
  '/resources/fontawesome/webfonts/fa-solid-900.woff2',
  '/resources/fontawesome/webfonts/fa-solid-900.ttf',
  '/resources/manifests/',
  '/resources/manifests/sainternet.webmanifest',
  '/resources/images/',
  '/resources/images/wurmple.webp',
  '/resources/images/terminal.jpg',
  '/resources/images/luxio-shiny.png',
  '/resources/images/luxio-shiny.jpg',
  '/resources/images/terminal.webp',
  '/resources/images/wurmple.jpg',
  '/resources/images/luxio.webp',
  '/resources/images/luxio.png',
  '/resources/images/wurmple.png',
  '/resources/images/wurmple-shiny.png',
  '/resources/images/wurmple-shiny.webp',
  '/resources/images/luxio.jpg',
  '/resources/images/terminal.png',
  '/resources/images/luxio-shiny.webp',
  '/resources/images/wurmple-shiny.jpg',
];

self.addEventListener('install', (e) => {
  console.log('[Service Worker] Install');
  e.waitUntil((async () => {
    const cache = await caches.open(cacheName);
    console.log('[Service Worker] Cache');
    await cache.addAll(cacheFiles);
  })());
});

self.addEventListener('fetch', (e) => {
  e.respondWith((async () => {
    const r = await caches.match(e.request);
    console.log(`[Service Worker] Fetching ${e.request.url}`);
    if (r) return r;
    const response = await fetch(e.request);
    const cache = await caches.open(cacheName);
    console.log(`[Service Worker] Caching ${e.request.url}`);
    cache.put(e.request, response.clone());
    return response;
  })());
});
