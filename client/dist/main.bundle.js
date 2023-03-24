/*! For license information please see main.bundle.js.LICENSE.txt */
(()=>{var e={895:()=>{"use strict";try{self["workbox:cacheable-response:6.5.3"]&&_()}catch(e){}},913:()=>{"use strict";try{self["workbox:core:6.5.3"]&&_()}catch(e){}},550:()=>{"use strict";try{self["workbox:expiration:6.5.3"]&&_()}catch(e){}},977:()=>{"use strict";try{self["workbox:precaching:6.5.3"]&&_()}catch(e){}},144:()=>{"use strict";try{self["workbox:recipes:6.5.3"]&&_()}catch(e){}},80:()=>{"use strict";try{self["workbox:routing:6.5.3"]&&_()}catch(e){}},873:()=>{"use strict";try{self["workbox:strategies:6.5.3"]&&_()}catch(e){}},61:(e,t,n)=>{var r=n(698).default;function o(){"use strict";e.exports=o=function(){return t},e.exports.__esModule=!0,e.exports.default=e.exports;var t={},n=Object.prototype,i=n.hasOwnProperty,a=Object.defineProperty||function(e,t,n){e[t]=n.value},s="function"==typeof Symbol?Symbol:{},c=s.iterator||"@@iterator",u=s.asyncIterator||"@@asyncIterator",l=s.toStringTag||"@@toStringTag";function h(e,t,n){return Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{h({},"")}catch(e){h=function(e,t,n){return e[t]=n}}function f(e,t,n,r){var o=t&&t.prototype instanceof v?t:v,i=Object.create(o.prototype),s=new P(r||[]);return a(i,"_invoke",{value:S(e,n,s)}),i}function p(e,t,n){try{return{type:"normal",arg:e.call(t,n)}}catch(e){return{type:"throw",arg:e}}}t.wrap=f;var d={};function v(){}function y(){}function g(){}var m={};h(m,c,(function(){return this}));var w=Object.getPrototypeOf,b=w&&w(w(I([])));b&&b!==n&&i.call(b,c)&&(m=b);var _=g.prototype=v.prototype=Object.create(m);function x(e){["next","throw","return"].forEach((function(t){h(e,t,(function(e){return this._invoke(t,e)}))}))}function E(e,t){function n(o,a,s,c){var u=p(e[o],e,a);if("throw"!==u.type){var l=u.arg,h=l.value;return h&&"object"==r(h)&&i.call(h,"__await")?t.resolve(h.__await).then((function(e){n("next",e,s,c)}),(function(e){n("throw",e,s,c)})):t.resolve(h).then((function(e){l.value=e,s(l)}),(function(e){return n("throw",e,s,c)}))}c(u.arg)}var o;a(this,"_invoke",{value:function(e,r){function i(){return new t((function(t,o){n(e,r,t,o)}))}return o=o?o.then(i,i):i()}})}function S(e,t,n){var r="suspendedStart";return function(o,i){if("executing"===r)throw new Error("Generator is already running");if("completed"===r){if("throw"===o)throw i;return{value:void 0,done:!0}}for(n.method=o,n.arg=i;;){var a=n.delegate;if(a){var s=k(a,n);if(s){if(s===d)continue;return s}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if("suspendedStart"===r)throw r="completed",n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r="executing";var c=p(e,t,n);if("normal"===c.type){if(r=n.done?"completed":"suspendedYield",c.arg===d)continue;return{value:c.arg,done:n.done}}"throw"===c.type&&(r="completed",n.method="throw",n.arg=c.arg)}}}function k(e,t){var n=t.method,r=e.iterator[n];if(void 0===r)return t.delegate=null,"throw"===n&&e.iterator.return&&(t.method="return",t.arg=void 0,k(e,t),"throw"===t.method)||"return"!==n&&(t.method="throw",t.arg=new TypeError("The iterator does not provide a '"+n+"' method")),d;var o=p(r,e.iterator,t.arg);if("throw"===o.type)return t.method="throw",t.arg=o.arg,t.delegate=null,d;var i=o.arg;return i?i.done?(t[e.resultName]=i.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,d):i:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,d)}function L(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function j(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function P(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(L,this),this.reset(!0)}function I(e){if(e){var t=e[c];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var n=-1,r=function t(){for(;++n<e.length;)if(i.call(e,n))return t.value=e[n],t.done=!1,t;return t.value=void 0,t.done=!0,t};return r.next=r}}return{next:D}}function D(){return{value:void 0,done:!0}}return y.prototype=g,a(_,"constructor",{value:g,configurable:!0}),a(g,"constructor",{value:y,configurable:!0}),y.displayName=h(g,l,"GeneratorFunction"),t.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===y||"GeneratorFunction"===(t.displayName||t.name))},t.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,g):(e.__proto__=g,h(e,l,"GeneratorFunction")),e.prototype=Object.create(_),e},t.awrap=function(e){return{__await:e}},x(E.prototype),h(E.prototype,u,(function(){return this})),t.AsyncIterator=E,t.async=function(e,n,r,o,i){void 0===i&&(i=Promise);var a=new E(f(e,n,r,o),i);return t.isGeneratorFunction(n)?a:a.next().then((function(e){return e.done?e.value:a.next()}))},x(_),h(_,l,"Generator"),h(_,c,(function(){return this})),h(_,"toString",(function(){return"[object Generator]"})),t.keys=function(e){var t=Object(e),n=[];for(var r in t)n.push(r);return n.reverse(),function e(){for(;n.length;){var r=n.pop();if(r in t)return e.value=r,e.done=!1,e}return e.done=!0,e}},t.values=I,P.prototype={constructor:P,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(j),!e)for(var t in this)"t"===t.charAt(0)&&i.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function n(n,r){return a.type="throw",a.arg=e,t.next=n,r&&(t.method="next",t.arg=void 0),!!r}for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r],a=o.completion;if("root"===o.tryLoc)return n("end");if(o.tryLoc<=this.prev){var s=i.call(o,"catchLoc"),c=i.call(o,"finallyLoc");if(s&&c){if(this.prev<o.catchLoc)return n(o.catchLoc,!0);if(this.prev<o.finallyLoc)return n(o.finallyLoc)}else if(s){if(this.prev<o.catchLoc)return n(o.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return n(o.finallyLoc)}}}},abrupt:function(e,t){for(var n=this.tryEntries.length-1;n>=0;--n){var r=this.tryEntries[n];if(r.tryLoc<=this.prev&&i.call(r,"finallyLoc")&&this.prev<r.finallyLoc){var o=r;break}}o&&("break"===e||"continue"===e)&&o.tryLoc<=t&&t<=o.finallyLoc&&(o=null);var a=o?o.completion:{};return a.type=e,a.arg=t,o?(this.method="next",this.next=o.finallyLoc,d):this.complete(a)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),d},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.finallyLoc===e)return this.complete(n.completion,n.afterLoc),j(n),d}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.tryLoc===e){var r=n.completion;if("throw"===r.type){var o=r.arg;j(n)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,n){return this.delegate={iterator:I(e),resultName:t,nextLoc:n},"next"===this.method&&(this.arg=void 0),d}},t}e.exports=o,e.exports.__esModule=!0,e.exports.default=e.exports},698:e=>{function t(n){return e.exports=t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e.exports.__esModule=!0,e.exports.default=e.exports,t(n)}e.exports=t,e.exports.__esModule=!0,e.exports.default=e.exports},687:(e,t,n)=>{var r=n(61)();e.exports=r;try{regeneratorRuntime=r}catch(e){"object"==typeof globalThis?globalThis.regeneratorRuntime=r:Function("r","regeneratorRuntime = r")(r)}}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var i=t[r]={exports:{}};return e[r](i,i.exports,n),i.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{"use strict";try{self["workbox:window:6.5.3"]&&_()}catch(e){}function e(e,t){return new Promise((function(n){var r=new MessageChannel;r.port1.onmessage=function(e){n(e.data)},e.postMessage(t,[r.port2])}))}function t(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function r(e,n){var r;if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(r=function(e,n){if(e){if("string"==typeof e)return t(e,n);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?t(e,n):void 0}}(e))||n&&e&&"number"==typeof e.length){r&&(e=r);var o=0;return function(){return o>=e.length?{done:!0}:{done:!1,value:e[o++]}}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}return(r=e[Symbol.iterator]()).next.bind(r)}try{self["workbox:core:6.5.3"]&&_()}catch(e){}var o=function(){var e=this;this.promise=new Promise((function(t,n){e.resolve=t,e.reject=n}))};function i(e,t){var n=location.href;return new URL(e,n).href===new URL(t,n).href}var a=function(e,t){this.type=e,Object.assign(this,t)};function s(e,t,n){return n?t?t(e):e:(e&&e.then||(e=Promise.resolve(e)),t?e.then(t):e)}function c(){}var u={type:"SKIP_WAITING"};function l(e,t){if(!t)return e&&e.then?e.then(c):Promise.resolve()}var h=function(t){var n,r;function c(e,n){var r,c;return void 0===n&&(n={}),(r=t.call(this)||this).nn={},r.tn=0,r.rn=new o,r.en=new o,r.on=new o,r.un=0,r.an=new Set,r.cn=function(){var e=r.fn,t=e.installing;r.tn>0||!i(t.scriptURL,r.sn.toString())||performance.now()>r.un+6e4?(r.vn=t,e.removeEventListener("updatefound",r.cn)):(r.hn=t,r.an.add(t),r.rn.resolve(t)),++r.tn,t.addEventListener("statechange",r.ln)},r.ln=function(e){var t=r.fn,n=e.target,o=n.state,i=n===r.vn,s={sw:n,isExternal:i,originalEvent:e};!i&&r.mn&&(s.isUpdate=!0),r.dispatchEvent(new a(o,s)),"installed"===o?r.wn=self.setTimeout((function(){"installed"===o&&t.waiting===n&&r.dispatchEvent(new a("waiting",s))}),200):"activating"===o&&(clearTimeout(r.wn),i||r.en.resolve(n))},r.dn=function(e){var t=r.hn,n=t!==navigator.serviceWorker.controller;r.dispatchEvent(new a("controlling",{isExternal:n,originalEvent:e,sw:t,isUpdate:r.mn})),n||r.on.resolve(t)},r.gn=(c=function(e){var t=e.data,n=e.ports,o=e.source;return s(r.getSW(),(function(){r.an.has(o)&&r.dispatchEvent(new a("message",{data:t,originalEvent:e,ports:n,sw:o}))}))},function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];try{return Promise.resolve(c.apply(this,e))}catch(e){return Promise.reject(e)}}),r.sn=e,r.nn=n,navigator.serviceWorker.addEventListener("message",r.gn),r}r=t,(n=c).prototype=Object.create(r.prototype),n.prototype.constructor=n,n.__proto__=r;var h,f=c.prototype;return f.register=function(e){var t=(void 0===e?{}:e).immediate,n=void 0!==t&&t;try{var r=this;return function(e,t){var n=e();return n&&n.then?n.then(t):t()}((function(){if(!n&&"complete"!==document.readyState)return l(new Promise((function(e){return window.addEventListener("load",e)})))}),(function(){return r.mn=Boolean(navigator.serviceWorker.controller),r.yn=r.pn(),s(r.bn(),(function(e){r.fn=e,r.yn&&(r.hn=r.yn,r.en.resolve(r.yn),r.on.resolve(r.yn),r.yn.addEventListener("statechange",r.ln,{once:!0}));var t=r.fn.waiting;return t&&i(t.scriptURL,r.sn.toString())&&(r.hn=t,Promise.resolve().then((function(){r.dispatchEvent(new a("waiting",{sw:t,wasWaitingBeforeRegister:!0}))})).then((function(){}))),r.hn&&(r.rn.resolve(r.hn),r.an.add(r.hn)),r.fn.addEventListener("updatefound",r.cn),navigator.serviceWorker.addEventListener("controllerchange",r.dn),r.fn}))}))}catch(e){return Promise.reject(e)}},f.update=function(){try{return this.fn?l(this.fn.update()):void 0}catch(e){return Promise.reject(e)}},f.getSW=function(){return void 0!==this.hn?Promise.resolve(this.hn):this.rn.promise},f.messageSW=function(t){try{return s(this.getSW(),(function(n){return e(n,t)}))}catch(e){return Promise.reject(e)}},f.messageSkipWaiting=function(){this.fn&&this.fn.waiting&&e(this.fn.waiting,u)},f.pn=function(){var e=navigator.serviceWorker.controller;return e&&i(e.scriptURL,this.sn.toString())?e:void 0},f.bn=function(){try{var e=this;return function(e,t){try{var n=e()}catch(e){return t(e)}return n&&n.then?n.then(void 0,t):n}((function(){return s(navigator.serviceWorker.register(e.sn,e.nn),(function(t){return e.un=performance.now(),t}))}),(function(e){throw e}))}catch(e){return Promise.reject(e)}},(h=[{key:"active",get:function(){return this.en.promise}},{key:"controlling",get:function(){return this.on.promise}}])&&function(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}(c.prototype,h),c}(function(){function e(){this.Pn=new Map}var t=e.prototype;return t.addEventListener=function(e,t){this.Sn(e).add(t)},t.removeEventListener=function(e,t){this.Sn(e).delete(t)},t.dispatchEvent=function(e){e.target=this;for(var t,n=r(this.Sn(e.type));!(t=n()).done;)(0,t.value)(e)},t.Sn=function(e){return this.Pn.has(e)||this.Pn.set(e,new Set),this.Pn.get(e)},e}());function f(e){return f="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},f(e)}function p(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,(o=r.key,i=void 0,i=function(e,t){if("object"!==f(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!==f(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(o),"symbol"===f(i)?i:String(i)),r)}var o,i}function d(e,t,n){return t&&p(e.prototype,t),n&&p(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function v(e,t,n,r,o,i,a){try{var s=e[i](a),c=s.value}catch(e){return void n(e)}s.done?t(c):Promise.resolve(c).then(r,o)}function y(e){return function(){var t=this,n=arguments;return new Promise((function(r,o){var i=e.apply(t,n);function a(e){v(i,r,o,a,s,"next",e)}function s(e){v(i,r,o,a,s,"throw",e)}a(void 0)}))}}var g=n(687),m=n.n(g);const w=(e,t)=>t.some((t=>e instanceof t));let b,x;const E=new WeakMap,S=new WeakMap,k=new WeakMap,L=new WeakMap,j=new WeakMap;let P={get(e,t,n){if(e instanceof IDBTransaction){if("done"===t)return S.get(e);if("objectStoreNames"===t)return e.objectStoreNames||k.get(e);if("store"===t)return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return D(e[t])},set:(e,t,n)=>(e[t]=n,!0),has:(e,t)=>e instanceof IDBTransaction&&("done"===t||"store"===t)||t in e};function I(e){return"function"==typeof e?(t=e)!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?(x||(x=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])).includes(t)?function(...e){return t.apply(C(this),e),D(E.get(this))}:function(...e){return D(t.apply(C(this),e))}:function(e,...n){const r=t.call(C(this),e,...n);return k.set(r,e.sort?e.sort():[e]),D(r)}:(e instanceof IDBTransaction&&function(e){if(S.has(e))return;const t=new Promise(((t,n)=>{const r=()=>{e.removeEventListener("complete",o),e.removeEventListener("error",i),e.removeEventListener("abort",i)},o=()=>{t(),r()},i=()=>{n(e.error||new DOMException("AbortError","AbortError")),r()};e.addEventListener("complete",o),e.addEventListener("error",i),e.addEventListener("abort",i)}));S.set(e,t)}(e),w(e,b||(b=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction]))?new Proxy(e,P):e);var t}function D(e){if(e instanceof IDBRequest)return function(e){const t=new Promise(((t,n)=>{const r=()=>{e.removeEventListener("success",o),e.removeEventListener("error",i)},o=()=>{t(D(e.result)),r()},i=()=>{n(e.error),r()};e.addEventListener("success",o),e.addEventListener("error",i)}));return t.then((t=>{t instanceof IDBCursor&&E.set(t,e)})).catch((()=>{})),j.set(t,e),t}(e);if(L.has(e))return L.get(e);const t=I(e);return t!==e&&(L.set(e,t),j.set(t,e)),t}const C=e=>j.get(e);function O(e,t,{blocked:n,upgrade:r,blocking:o,terminated:i}={}){const a=indexedDB.open(e,t),s=D(a);return r&&a.addEventListener("upgradeneeded",(e=>{r(D(a.result),e.oldVersion,e.newVersion,D(a.transaction))})),n&&a.addEventListener("blocked",(()=>n())),s.then((e=>{i&&e.addEventListener("close",(()=>i())),o&&e.addEventListener("versionchange",(()=>o()))})).catch((()=>{})),s}const B=["get","getKey","getAll","getAllKeys","count"],R=["put","add","delete","clear"],N=new Map;function W(e,t){if(!(e instanceof IDBDatabase)||t in e||"string"!=typeof t)return;if(N.get(t))return N.get(t);const n=t.replace(/FromIndex$/,""),r=t!==n,o=R.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!o&&!B.includes(n))return;const i=async function(e,...t){const i=this.transaction(e,o?"readwrite":"readonly");let a=i.store;return r&&(a=a.index(t.shift())),(await Promise.all([a[n](...t),o&&i.done]))[0]};return N.set(t,i),i}var M;M=P,P={...M,get:(e,t,n)=>W(e,t)||M.get(e,t,n),has:(e,t)=>!!W(e,t)||M.has(e,t)},n(913);class T extends Error{constructor(e,t){super(((e,...t)=>{let n=e;return t.length>0&&(n+=` :: ${JSON.stringify(t)}`),n})(e,t)),this.name=e,this.details=t}}n(80);n(873);const q={googleAnalytics:"googleAnalytics",precache:"precache-v2",prefix:"workbox",runtime:"runtime",suffix:"undefined"!=typeof registration?registration.scope:""},A=e=>[q.prefix,e,q.suffix].filter((e=>e&&e.length>0)).join("-");function U(e,t){const n=new URL(e);for(const e of t)n.searchParams.delete(e);return n.href}class F{constructor(){this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}}const K=new Set;function G(e){return"string"==typeof e?new Request(e):e}class ${constructor(e,t){this._cacheKeys={},Object.assign(this,t),this.event=t.event,this._strategy=e,this._handlerDeferred=new F,this._extendLifetimePromises=[],this._plugins=[...e.plugins],this._pluginStateMap=new Map;for(const e of this._plugins)this._pluginStateMap.set(e,{});this.event.waitUntil(this._handlerDeferred.promise)}async fetch(e){const{event:t}=this;let n=G(e);if("navigate"===n.mode&&t instanceof FetchEvent&&t.preloadResponse){const e=await t.preloadResponse;if(e)return e}const r=this.hasCallback("fetchDidFail")?n.clone():null;try{for(const e of this.iterateCallbacks("requestWillFetch"))n=await e({request:n.clone(),event:t})}catch(e){if(e instanceof Error)throw new T("plugin-error-request-will-fetch",{thrownErrorMessage:e.message})}const o=n.clone();try{let e;e=await fetch(n,"navigate"===n.mode?void 0:this._strategy.fetchOptions);for(const n of this.iterateCallbacks("fetchDidSucceed"))e=await n({event:t,request:o,response:e});return e}catch(e){throw r&&await this.runCallbacks("fetchDidFail",{error:e,event:t,originalRequest:r.clone(),request:o.clone()}),e}}async fetchAndCachePut(e){const t=await this.fetch(e),n=t.clone();return this.waitUntil(this.cachePut(e,n)),t}async cacheMatch(e){const t=G(e);let n;const{cacheName:r,matchOptions:o}=this._strategy,i=await this.getCacheKey(t,"read"),a=Object.assign(Object.assign({},o),{cacheName:r});n=await caches.match(i,a);for(const e of this.iterateCallbacks("cachedResponseWillBeUsed"))n=await e({cacheName:r,matchOptions:o,cachedResponse:n,request:i,event:this.event})||void 0;return n}async cachePut(e,t){const n=G(e);await(0,new Promise((e=>setTimeout(e,0))));const r=await this.getCacheKey(n,"write");if(!t)throw new T("cache-put-with-no-response",{url:(o=r.url,new URL(String(o),location.href).href.replace(new RegExp(`^${location.origin}`),""))});var o;const i=await this._ensureResponseSafeToCache(t);if(!i)return!1;const{cacheName:a,matchOptions:s}=this._strategy,c=await self.caches.open(a),u=this.hasCallback("cacheDidUpdate"),l=u?await async function(e,t,n,r){const o=U(t.url,n);if(t.url===o)return e.match(t,r);const i=Object.assign(Object.assign({},r),{ignoreSearch:!0}),a=await e.keys(t,i);for(const t of a)if(o===U(t.url,n))return e.match(t,r)}(c,r.clone(),["__WB_REVISION__"],s):null;try{await c.put(r,u?i.clone():i)}catch(e){if(e instanceof Error)throw"QuotaExceededError"===e.name&&await async function(){for(const e of K)await e()}(),e}for(const e of this.iterateCallbacks("cacheDidUpdate"))await e({cacheName:a,oldResponse:l,newResponse:i.clone(),request:r,event:this.event});return!0}async getCacheKey(e,t){const n=`${e.url} | ${t}`;if(!this._cacheKeys[n]){let r=e;for(const e of this.iterateCallbacks("cacheKeyWillBeUsed"))r=G(await e({mode:t,request:r,event:this.event,params:this.params}));this._cacheKeys[n]=r}return this._cacheKeys[n]}hasCallback(e){for(const t of this._strategy.plugins)if(e in t)return!0;return!1}async runCallbacks(e,t){for(const n of this.iterateCallbacks(e))await n(t)}*iterateCallbacks(e){for(const t of this._strategy.plugins)if("function"==typeof t[e]){const n=this._pluginStateMap.get(t),r=r=>{const o=Object.assign(Object.assign({},r),{state:n});return t[e](o)};yield r}}waitUntil(e){return this._extendLifetimePromises.push(e),e}async doneWaiting(){let e;for(;e=this._extendLifetimePromises.shift();)await e}destroy(){this._handlerDeferred.resolve(null)}async _ensureResponseSafeToCache(e){let t=e,n=!1;for(const e of this.iterateCallbacks("cacheWillUpdate"))if(t=await e({request:this.request,response:t,event:this.event})||void 0,n=!0,!t)break;return n||t&&200!==t.status&&(t=void 0),t}}class V{constructor(e={}){this.cacheName=e.cacheName||A(q.runtime),this.plugins=e.plugins||[],this.fetchOptions=e.fetchOptions,this.matchOptions=e.matchOptions}handle(e){const[t]=this.handleAll(e);return t}handleAll(e){e instanceof FetchEvent&&(e={event:e,request:e.request});const t=e.event,n="string"==typeof e.request?new Request(e.request):e.request,r="params"in e?e.params:void 0,o=new $(this,{event:t,request:n,params:r}),i=this._getResponse(o,n,t);return[i,this._awaitComplete(i,o,n,t)]}async _getResponse(e,t,n){let r;await e.runCallbacks("handlerWillStart",{event:n,request:t});try{if(r=await this._handle(t,e),!r||"error"===r.type)throw new T("no-response",{url:t.url})}catch(o){if(o instanceof Error)for(const i of e.iterateCallbacks("handlerDidError"))if(r=await i({error:o,event:n,request:t}),r)break;if(!r)throw o}for(const o of e.iterateCallbacks("handlerWillRespond"))r=await o({event:n,request:t,response:r});return r}async _awaitComplete(e,t,n,r){let o,i;try{o=await e}catch(i){}try{await t.runCallbacks("handlerDidRespond",{event:r,request:n,response:o}),await t.doneWaiting()}catch(e){e instanceof Error&&(i=e)}if(await t.runCallbacks("handlerDidComplete",{event:r,request:n,response:o,error:i}),t.destroy(),i)throw i}}n(895);const H=(e,t)=>t.some((t=>e instanceof t));let Y,z;const J=new WeakMap,Q=new WeakMap,X=new WeakMap,Z=new WeakMap,ee=new WeakMap;let te={get(e,t,n){if(e instanceof IDBTransaction){if("done"===t)return Q.get(e);if("objectStoreNames"===t)return e.objectStoreNames||X.get(e);if("store"===t)return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return re(e[t])},set:(e,t,n)=>(e[t]=n,!0),has:(e,t)=>e instanceof IDBTransaction&&("done"===t||"store"===t)||t in e};function ne(e){return"function"==typeof e?(t=e)!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?(z||(z=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])).includes(t)?function(...e){return t.apply(oe(this),e),re(J.get(this))}:function(...e){return re(t.apply(oe(this),e))}:function(e,...n){const r=t.call(oe(this),e,...n);return X.set(r,e.sort?e.sort():[e]),re(r)}:(e instanceof IDBTransaction&&function(e){if(Q.has(e))return;const t=new Promise(((t,n)=>{const r=()=>{e.removeEventListener("complete",o),e.removeEventListener("error",i),e.removeEventListener("abort",i)},o=()=>{t(),r()},i=()=>{n(e.error||new DOMException("AbortError","AbortError")),r()};e.addEventListener("complete",o),e.addEventListener("error",i),e.addEventListener("abort",i)}));Q.set(e,t)}(e),H(e,Y||(Y=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction]))?new Proxy(e,te):e);var t}function re(e){if(e instanceof IDBRequest)return function(e){const t=new Promise(((t,n)=>{const r=()=>{e.removeEventListener("success",o),e.removeEventListener("error",i)},o=()=>{t(re(e.result)),r()},i=()=>{n(e.error),r()};e.addEventListener("success",o),e.addEventListener("error",i)}));return t.then((t=>{t instanceof IDBCursor&&J.set(t,e)})).catch((()=>{})),ee.set(t,e),t}(e);if(Z.has(e))return Z.get(e);const t=ne(e);return t!==e&&(Z.set(e,t),ee.set(t,e)),t}const oe=e=>ee.get(e),ie=["get","getKey","getAll","getAllKeys","count"],ae=["put","add","delete","clear"],se=new Map;function ce(e,t){if(!(e instanceof IDBDatabase)||t in e||"string"!=typeof t)return;if(se.get(t))return se.get(t);const n=t.replace(/FromIndex$/,""),r=t!==n,o=ae.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!o&&!ie.includes(n))return;const i=async function(e,...t){const i=this.transaction(e,o?"readwrite":"readonly");let a=i.store;return r&&(a=a.index(t.shift())),(await Promise.all([a[n](...t),o&&i.done]))[0]};return se.set(t,i),i}let ue;te=(e=>({...e,get:(t,n,r)=>ce(t,n)||e.get(t,n,r),has:(t,n)=>!!ce(t,n)||e.has(t,n)}))(te),n(550),n(144),n(977);class le extends V{constructor(e={}){e.cacheName=e.cacheName||A(q.precache),super(e),this._fallbackToNetwork=!1!==e.fallbackToNetwork,this.plugins.push(le.copyRedirectedCacheableResponsesPlugin)}async _handle(e,t){return await t.cacheMatch(e)||(t.event&&"install"===t.event.type?await this._handleInstall(e,t):await this._handleFetch(e,t))}async _handleFetch(e,t){let n;const r=t.params||{};if(!this._fallbackToNetwork)throw new T("missing-precache-entry",{cacheName:this.cacheName,url:e.url});{const o=r.integrity,i=e.integrity,a=!i||i===o;n=await t.fetch(new Request(e,{integrity:"no-cors"!==e.mode?i||o:void 0})),o&&a&&"no-cors"!==e.mode&&(this._useDefaultCacheabilityPluginIfNeeded(),await t.cachePut(e,n.clone()))}return n}async _handleInstall(e,t){this._useDefaultCacheabilityPluginIfNeeded();const n=await t.fetch(e);if(!await t.cachePut(e,n.clone()))throw new T("bad-precaching-response",{url:e.url,status:n.status});return n}_useDefaultCacheabilityPluginIfNeeded(){let e=null,t=0;for(const[n,r]of this.plugins.entries())r!==le.copyRedirectedCacheableResponsesPlugin&&(r===le.defaultPrecacheCacheabilityPlugin&&(e=n),r.cacheWillUpdate&&t++);0===t?this.plugins.push(le.defaultPrecacheCacheabilityPlugin):t>1&&null!==e&&this.plugins.splice(e,1)}}le.defaultPrecacheCacheabilityPlugin={cacheWillUpdate:async({response:e})=>!e||e.status>=400?null:e},le.copyRedirectedCacheableResponsesPlugin={cacheWillUpdate:async({response:e})=>e.redirected?await async function(e,t){let n=null;if(e.url&&(n=new URL(e.url).origin),n!==self.location.origin)throw new T("cross-origin-copy-response",{origin:n});const r=e.clone(),o={headers:new Headers(r.headers),status:r.status,statusText:r.statusText},i=t?t(o):o,a=function(){if(void 0===ue){const e=new Response("");if("body"in e)try{new Response(e.body),ue=!0}catch(e){ue=!1}ue=!1}return ue}()?r.body:await r.blob();return new Response(a,i)}(e):e};var he=function(){var e=y(m().mark((function e(){return m().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",O("jate",1,{upgrade:function(e){e.objectStoreNames.contains("jate")?console.log("jate database already exists"):(e.createObjectStore("jate",{keyPath:"id",autoIncrement:!0}),console.log("jate database created"))}}));case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),fe=function(){var e=y(m().mark((function e(t){var n,r;return m().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O("jate",1);case 2:return n=e.sent,(r=n.transaction("jate","readwrite")).store.add({content:t}),e.next=7,r.done;case 7:console.log("added content to jate database");case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),pe=function(){var e=y(m().mark((function e(){var t,n,r;return m().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O("jate",1);case 2:return t=e.sent,n=t.transaction("jate","readonly"),e.next=6,n.store.getAll();case 6:return r=e.sent,console.log("retrieved content from jate database"),e.abrupt("return",r);case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();he();var de,ve=d((function e(){var t=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e);var n=localStorage.getItem("content");if("undefined"==typeof CodeMirror)throw new Error("CodeMirror is not loaded");this.editor=CodeMirror(document.querySelector("#main"),{value:"",mode:"javascript",theme:"monokai",lineNumbers:!0,lineWrapping:!0,autofocus:!0,indentUnit:2,tabSize:2}),pe().then((function(e){console.info("Loaded data from IndexedDB, injecting into editor"),t.editor.setValue(e||n||"\n/*\n       _____  ____________\n      / /   |/_  __/ ____/\n __  / / /| | / / / __/   \n/ /_/ / ___ |/ / / /___   \n ____/_/  |_/_/ /_____/   \njust another text editor\n*/                          \n")})),this.editor.on("change",(function(){localStorage.setItem("content",t.editor.getValue())})),this.editor.on("blur",(function(){console.log("The editor has lost focus"),fe(localStorage.getItem("content"))}))})),ye=document.querySelector("#main");ye.innerHTML="",void 0===new ve&&((de=document.createElement("div")).classList.add("spinner"),de.innerHTML='\n  <div class="loading-container">\n  <div class="loading-spinner" />\n  </div>\n  ',ye.appendChild(de)),"serviceWorker"in navigator?new h("/src-sw.js").register():console.error("Service workers are not supported in this browser.")})()})();