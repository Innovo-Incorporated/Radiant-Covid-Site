if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let s=Promise.resolve();return a[e]||(s=new Promise((async s=>{if("document"in self){const a=document.createElement("script");a.src=e,document.head.appendChild(a),a.onload=s}else importScripts(e),s()}))),s.then((()=>{if(!a[e])throw new Error(`Module ${e} didn’t register its module`);return a[e]}))},s=(s,a)=>{Promise.all(s.map(e)).then((e=>a(1===e.length?e[0]:e)))},a={require:Promise.resolve(s)};self.define=(s,n,i)=>{a[s]||(a[s]=Promise.resolve().then((()=>{let a={};const r={uri:location.origin+s.slice(1)};return Promise.all(n.map((s=>{switch(s){case"exports":return a;case"module":return r;default:return e(s)}}))).then((e=>{const s=i(...e);return a.default||(a.default=s),a}))})))}}define("./sw.js",["./workbox-ea903bce"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/chunks/0a301732.701a07a50622532a5d63.js",revision:"p3AejFuqZxS8hAAB6Duoq"},{url:"/_next/static/chunks/29107295.a3e05d970a0cfe6c8530.js",revision:"p3AejFuqZxS8hAAB6Duoq"},{url:"/_next/static/chunks/3856ccabe8d3801334e9f7fe2d93f4f2565bf284.6e3070072aba7f8b2e32.js",revision:"p3AejFuqZxS8hAAB6Duoq"},{url:"/_next/static/chunks/4322cd96.e05cffa1c6ec82d96dbd.js",revision:"p3AejFuqZxS8hAAB6Duoq"},{url:"/_next/static/chunks/71247caf95475e3ea7f9a0f8a30beb258b23d005.6c78ef209575a745e70e.js",revision:"p3AejFuqZxS8hAAB6Duoq"},{url:"/_next/static/chunks/75fc9c18.f5b2422e60fa4526d5e5.js",revision:"p3AejFuqZxS8hAAB6Duoq"},{url:"/_next/static/chunks/dff27125.577c66775841620f3809.js",revision:"p3AejFuqZxS8hAAB6Duoq"},{url:"/_next/static/chunks/ea88be26.bbe86e135632ac934188.js",revision:"p3AejFuqZxS8hAAB6Duoq"},{url:"/_next/static/chunks/f10e284a.3f83badb3a73b5f95c09.js",revision:"p3AejFuqZxS8hAAB6Duoq"},{url:"/_next/static/chunks/f2da6d26dc5f2eacf3a690a6a43594d448bdc664.bccc47681cf713fc960f.js",revision:"p3AejFuqZxS8hAAB6Duoq"},{url:"/_next/static/chunks/framework.f8bd46fc02868c500bda.js",revision:"p3AejFuqZxS8hAAB6Duoq"},{url:"/_next/static/chunks/main-8e112eb0ef1a8339b40b.js",revision:"p3AejFuqZxS8hAAB6Duoq"},{url:"/_next/static/chunks/pages/_app-d6430165803aa8313786.js",revision:"p3AejFuqZxS8hAAB6Duoq"},{url:"/_next/static/chunks/pages/_error-5e3ff7a4076b0a36799e.js",revision:"p3AejFuqZxS8hAAB6Duoq"},{url:"/_next/static/chunks/pages/about-38be272a0a286259498f.js",revision:"p3AejFuqZxS8hAAB6Duoq"},{url:"/_next/static/chunks/pages/creators-ddd0db58b2f7a292eab3.js",revision:"p3AejFuqZxS8hAAB6Duoq"},{url:"/_next/static/chunks/polyfills-e893e522365b6e0e5fa4.js",revision:"p3AejFuqZxS8hAAB6Duoq"},{url:"/_next/static/chunks/webpack-50bee04d1dc61f8adf5b.js",revision:"p3AejFuqZxS8hAAB6Duoq"},{url:"/_next/static/css/b4af92d8a6ec40b3d927.css",revision:"p3AejFuqZxS8hAAB6Duoq"},{url:"/_next/static/p3AejFuqZxS8hAAB6Duoq/_buildManifest.js",revision:"p3AejFuqZxS8hAAB6Duoq"},{url:"/_next/static/p3AejFuqZxS8hAAB6Duoq/_ssgManifest.js",revision:"p3AejFuqZxS8hAAB6Duoq"},{url:"/favicon.ico",revision:"21b739d43fcb9bbb83d8541fe4fe88fa"},{url:"/images/ICU.webp",revision:"c8fc25816c6360f6e5a1d1644654e2b6"},{url:"/images/ambulance.jpg",revision:"cdd14f2447e07e9c7583ba135824404c"},{url:"/images/fabiflu.jpeg",revision:"073b774d2d60f19a6dbb5265dc72b82f"},{url:"/images/mac.jpg",revision:"1c65911a9aa1e95a0b72019aa9b12a2b"},{url:"/images/mubashir.jpeg",revision:"1ea32793f84cd745478661f1936198b5"},{url:"/images/oximeter.jpg",revision:"99b1e589edfb60f5417b02682bc66987"},{url:"/images/oxygen.jpg",revision:"5b419dbbcf8c1106e8796611add73b30"},{url:"/images/plasma.jpg",revision:"c051c79b119815cfd6bfafe188904a96"},{url:"/images/remedesivir.jpg",revision:"2da0af9376f79f1e8f7dd079bdb6fc0f"},{url:"/images/ventilator.jpg",revision:"89c156334f86c02761b53013e634c374"},{url:"/mainifest.json",revision:"365b558fe5c277ae7564011a01f7d52a"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:a,state:n})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis|gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:mp3|mp4)$/i,new e.StaleWhileRevalidate({cacheName:"static-media-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET")}));
