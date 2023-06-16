/*! For license information please see bundle.js.LICENSE.txt */
(()=>{var t={138:function(t,e,n){t.exports=function(){"use strict";function t(t){return"function"==typeof t}var e=Array.isArray?Array.isArray:function(t){return"[object Array]"===Object.prototype.toString.call(t)},r=0,o=void 0,i=void 0,s=function(t,e){f[r]=t,f[r+1]=e,2===(r+=2)&&(i?i(m):y())};var c="undefined"!=typeof window?window:void 0,a=c||{},l=a.MutationObserver||a.WebKitMutationObserver,u="undefined"==typeof self&&"undefined"!=typeof process&&"[object process]"==={}.toString.call(process),d="undefined"!=typeof Uint8ClampedArray&&"undefined"!=typeof importScripts&&"undefined"!=typeof MessageChannel;function h(){var t=setTimeout;return function(){return t(m,1)}}var f=new Array(1e3);function m(){for(var t=0;t<r;t+=2)(0,f[t])(f[t+1]),f[t]=void 0,f[t+1]=void 0;r=0}var v,p,_,g,y=void 0;function w(t,e){var n=this,r=new this.constructor(L);void 0===r[S]&&D(r);var o=n._state;if(o){var i=arguments[o-1];s((function(){return I(o,r,i,n._result)}))}else k(n,r,t,e);return r}function b(t){if(t&&"object"==typeof t&&t.constructor===this)return t;var e=new this(L);return T(e,t),e}y=u?function(){return process.nextTick(m)}:l?(p=0,_=new l(m),g=document.createTextNode(""),_.observe(g,{characterData:!0}),function(){g.data=p=++p%2}):d?((v=new MessageChannel).port1.onmessage=m,function(){return v.port2.postMessage(0)}):void 0===c?function(){try{var t=Function("return this")().require("vertx");return void 0!==(o=t.runOnLoop||t.runOnContext)?function(){o(m)}:h()}catch(t){return h()}}():h();var S=Math.random().toString(36).substring(2);function L(){}var E=void 0,x=1,A=2;function q(e,n,r){n.constructor===e.constructor&&r===w&&n.constructor.resolve===b?function(t,e){e._state===x?M(t,e._result):e._state===A?j(t,e._result):k(e,void 0,(function(e){return T(t,e)}),(function(e){return j(t,e)}))}(e,n):void 0===r?M(e,n):t(r)?function(t,e,n){s((function(t){var r=!1,o=function(t,e,n,r){try{t.call(e,n,r)}catch(t){return t}}(n,e,(function(n){r||(r=!0,e!==n?T(t,n):M(t,n))}),(function(e){r||(r=!0,j(t,e))}),t._label);!r&&o&&(r=!0,j(t,o))}),t)}(e,n,r):M(e,n)}function T(t,e){if(t===e)j(t,new TypeError("You cannot resolve a promise with itself"));else if(o=typeof(r=e),null===r||"object"!==o&&"function"!==o)M(t,e);else{var n=void 0;try{n=e.then}catch(e){return void j(t,e)}q(t,e,n)}var r,o}function C(t){t._onerror&&t._onerror(t._result),$(t)}function M(t,e){t._state===E&&(t._result=e,t._state=x,0!==t._subscribers.length&&s($,t))}function j(t,e){t._state===E&&(t._state=A,t._result=e,s(C,t))}function k(t,e,n,r){var o=t._subscribers,i=o.length;t._onerror=null,o[i]=e,o[i+x]=n,o[i+A]=r,0===i&&t._state&&s($,t)}function $(t){var e=t._subscribers,n=t._state;if(0!==e.length){for(var r=void 0,o=void 0,i=t._result,s=0;s<e.length;s+=3)r=e[s],o=e[s+n],r?I(n,r,o,i):o(i);t._subscribers.length=0}}function I(e,n,r,o){var i=t(r),s=void 0,c=void 0,a=!0;if(i){try{s=r(o)}catch(t){a=!1,c=t}if(n===s)return void j(n,new TypeError("A promises callback cannot return that same promise."))}else s=o;n._state!==E||(i&&a?T(n,s):!1===a?j(n,c):e===x?M(n,s):e===A&&j(n,s))}var O=0;function D(t){t[S]=O++,t._state=void 0,t._result=void 0,t._subscribers=[]}var H=function(){function t(t,n){this._instanceConstructor=t,this.promise=new t(L),this.promise[S]||D(this.promise),e(n)?(this.length=n.length,this._remaining=n.length,this._result=new Array(this.length),0===this.length?M(this.promise,this._result):(this.length=this.length||0,this._enumerate(n),0===this._remaining&&M(this.promise,this._result))):j(this.promise,new Error("Array Methods must be provided an Array"))}return t.prototype._enumerate=function(t){for(var e=0;this._state===E&&e<t.length;e++)this._eachEntry(t[e],e)},t.prototype._eachEntry=function(t,e){var n=this._instanceConstructor,r=n.resolve;if(r===b){var o=void 0,i=void 0,s=!1;try{o=t.then}catch(t){s=!0,i=t}if(o===w&&t._state!==E)this._settledAt(t._state,e,t._result);else if("function"!=typeof o)this._remaining--,this._result[e]=t;else if(n===P){var c=new n(L);s?j(c,i):q(c,t,o),this._willSettleAt(c,e)}else this._willSettleAt(new n((function(e){return e(t)})),e)}else this._willSettleAt(r(t),e)},t.prototype._settledAt=function(t,e,n){var r=this.promise;r._state===E&&(this._remaining--,t===A?j(r,n):this._result[e]=n),0===this._remaining&&M(r,this._result)},t.prototype._willSettleAt=function(t,e){var n=this;k(t,void 0,(function(t){return n._settledAt(x,e,t)}),(function(t){return n._settledAt(A,e,t)}))},t}();var P=function(){function e(t){this[S]=O++,this._result=this._state=void 0,this._subscribers=[],L!==t&&("function"!=typeof t&&function(){throw new TypeError("You must pass a resolver function as the first argument to the promise constructor")}(),this instanceof e?function(t,e){try{e((function(e){T(t,e)}),(function(e){j(t,e)}))}catch(e){j(t,e)}}(this,t):function(){throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.")}())}return e.prototype.catch=function(t){return this.then(null,t)},e.prototype.finally=function(e){var n=this,r=n.constructor;return t(e)?n.then((function(t){return r.resolve(e()).then((function(){return t}))}),(function(t){return r.resolve(e()).then((function(){throw t}))})):n.then(e,e)},e}();return P.prototype.then=w,P.all=function(t){return new H(this,t).promise},P.race=function(t){var n=this;return e(t)?new n((function(e,r){for(var o=t.length,i=0;i<o;i++)n.resolve(t[i]).then(e,r)})):new n((function(t,e){return e(new TypeError("You must pass an array to race."))}))},P.resolve=b,P.reject=function(t){var e=new this(L);return j(e,t),e},P._setScheduler=function(t){i=t},P._setAsap=function(t){s=t},P._asap=s,P.polyfill=function(){var t=void 0;if(void 0!==n.g)t=n.g;else if("undefined"!=typeof self)t=self;else try{t=Function("return this")()}catch(t){throw new Error("polyfill failed because global object is unavailable in this environment")}var e=t.Promise;if(e){var r=null;try{r=Object.prototype.toString.call(e.resolve())}catch(t){}if("[object Promise]"===r&&!e.cast)return}t.Promise=P},P.Promise=P,P}()},248:()=>{window.NodeList&&!NodeList.prototype.forEach&&(NodeList.prototype.forEach=function(t,e){e=e||window;for(var n=0;n<this.length;n++)t.call(e,this[n],n,this)})}},e={};function n(r){var o=e[r];if(void 0!==o)return o.exports;var i=e[r]={exports:{}};return t[r].call(i.exports,i,i.exports,n),i.exports}n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),(()=>{"use strict";n(248);function t(t,e){const n=document.querySelector(t);n.classList.add("show"),n.classList.remove("hide"),document.body.style.overflow="hidden",e&&clearInterval(e)}function e(t){const e=document.querySelector(t);e.classList.add("hide"),e.classList.remove("show"),document.body.style.overflow=""}const r=function(n,r){const o=document.querySelectorAll(n);function i(n){const o=document.querySelector(".modal__dialog");o.classList.add("hide"),t(".modal",r);const i=document.createElement("div");i.classList.add("modal__dialog"),i.innerHTML=`\n\t\t\t<div class="modal__content">\n\t\t\t\t<div data-close class="modal__close">&times;</div>\n\t\t\t\t<div class="modal__title">${n}</div>\n\t\t\t</div>\n\t\t`,document.querySelector(".modal").append(i),setTimeout((()=>{i.remove(),o.classList.add("show"),o.classList.remove("hide"),e(".modal")}),4e3)}o.forEach((t=>function(t){t.addEventListener("submit",(e=>{e.preventDefault();const n=document.createElement("img");n.src="icons/spinner.svg",n.style.cssText="\n\t\t\t\tdisplay: block;\n\t\t\t\tmargin: 0 auto;\n\t\t\t",t.insertAdjacentElement("afterend",n);const r=new FormData(t);(async(t,e)=>{const n=await fetch("http://localhost:3000/requests",{method:"POST",headers:{"Content-type":"application/json"},body:e});return await n.json()})(0,JSON.stringify(Object.fromEntries(r.entries()))).then((t=>{console.log(t),i("Спасибо! Скоро мы с вами свяжемся"),n.remove()})).catch((()=>{i("Что-то пошло не так...")})).finally((()=>t.reset()))}))}(t)))};n(138).polyfill(),window.addEventListener("DOMContentLoaded",(()=>{const n=setTimeout((()=>t(".modal",n)),3e5);(function(t,e,n,r){const o=document.querySelector(n),i=document.querySelectorAll(t),s=document.querySelectorAll(e),c=()=>{s.forEach((t=>{t.classList.add("hide"),t.classList.remove("show","fade")})),i.forEach((t=>{t.classList.remove(r)}))},a=function(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;s[t].classList.add("show","fade"),s[t].classList.remove("hide"),i[t].classList.add(r)};c(),a(),o.addEventListener("click",(e=>{const n=e.target;n&&n.classList.contains(t.slice(1))&&i.forEach(((t,e)=>{n==t&&(c(),a(e))}))}))})(".tabheader__item",".tabcontent",".tabheader__items","tabheader__item_active"),function(n,r,o){const i=document.querySelector(r);document.querySelectorAll(n).forEach((e=>{e.addEventListener("click",(()=>t(r,o)))})),i.addEventListener("click",(t=>{t.target!=i&&""!=t.target.getAttribute("data-close")||e(r)})),document.addEventListener("keydown",(t=>{"Escape"==t.code&&i.classList.contains("show")&&e(r)})),window.addEventListener("scroll",(function e(){window.pageYOffset+document.documentElement.clientHeight>=document.documentElement.scrollHeight-1&&(t(r,o),window.removeEventListener("scroll",e))}))}("[data-modal]",".modal",n);const o="2023-06-30";!function(t,e){function n(t){return t>=0&&t<10?`0${t}`:t}!function(t,e){const r=document.querySelector(t),o=r.querySelector("#days"),i=r.querySelector("#hours"),s=r.querySelector("#minutes"),c=r.querySelector("#seconds"),a=setInterval(l,1e3);function l(){const t=function(t){let e,n,r,o;const i=Date.parse(t)-Date.parse(new Date);return i<=0?(e=0,n=0,r=0,o=0):(e=Math.floor(i/864e5),n=Math.floor(i/36e5%24),r=Math.floor(i/1e3/60%60),o=Math.floor(i/1e3%60)),{total:i,days:e,hours:n,minutes:r,seconds:o}}(e);o.innerHTML=n(t.days),i.innerHTML=n(t.hours),s.innerHTML=n(t.minutes),c.innerHTML=n(t.seconds),t.total<=0&&clearInterval(a)}l()}(t,e)}(".timer",o),document.querySelector(".promotion__descr .ending").textContent=`Акция закончится ${o.replaceAll("-",".")} в 00:00`,function(){class t{constructor(t,e,n,r,o,i){this.src=t,this.alt=e,this.title=n,this.text=r,this.price=o;for(var s=arguments.length,c=new Array(s>6?s-6:0),a=6;a<s;a++)c[a-6]=arguments[a];this.classes=c,this.parent=document.querySelector(i),this.transfer=80,this.changeToRUB()}changeToRUB(){this.price*=this.transfer}render(){const t=document.createElement("div");0===this.classes.length?(this.classes="menu__item",t.classList.add(this.classes)):this.classes.forEach((e=>t.classList.add(e))),t.innerHTML=`\n\t\t\t<img src=${this.src} alt=${this.alt}>\n\t\t\t<h3 class="menu__item-subtitle">${this.title}</h3>\n\t\t\t<div class="menu__item-descr">${this.text}</div>\n\t\t\t<div class="menu__item-divider"></div>\n\t\t\t<div class="menu__item-price">\n\t\t\t\t<div class="menu__item-cost">Цена:</div>\n\t\t\t\t<div class="menu__item-total"><span>${this.price}</span> руб/день</div>\n\t\t\t</div>\n\t\t\t`,this.parent.append(t)}}(async function(t){const e=await fetch(t);if(!e.ok)throw new Error(`Could not get from ${t}, status: ${e.status}`);return await e.json()})("http://localhost:3000/menu").then((e=>{(e=>{e.forEach((e=>{let{img:n,altimg:r,title:o,descr:i,price:s}=e;new t(n,r,o,i,s,".menu .container").render()}))})(e)}))}(),function(){const t=document.querySelector(".calculating__result span");let e,n,r,o,i;function s(t,e){document.querySelectorAll(t).forEach((t=>{t.classList.remove(e),t.getAttribute("id")===localStorage.getItem("sex")&&t.classList.add(e),t.getAttribute("data-ratio")===localStorage.getItem("ratio")&&t.classList.add(e)}))}function c(){if(e&&n&&r&&o&&i)if("female"===e){const e=Math.round((447.6+9.2*r+3.1*n-4.3*o)*i);t.textContent=e<0?"____":e}else{const e=Math.round((88.36+13.4*r+4.8*n-5.7*o)*i);t.textContent=e<0?"____":e}else t.textContent="____"}function a(t,n){const r=document.querySelectorAll(t);r.forEach((t=>{t.addEventListener("click",(t=>{r.forEach((t=>t.classList.remove(n))),t.target.getAttribute("data-ratio")?(i=+t.target.getAttribute("data-ratio"),localStorage.setItem("ratio",i)):(e=t.target.getAttribute("id"),localStorage.setItem("sex",e)),t.target.classList.add(n),c()}))}))}function l(t){const e=document.querySelector(t);e.addEventListener("input",(()=>{switch(e.value.match(/\D/g)?e.style.border="1px solid red":e.style.border="none",e.getAttribute("id")){case"height":n=+e.value;break;case"weight":r=+e.value;break;case"age":o=+e.value}c()}))}localStorage.getItem("sex")?e=localStorage.getItem("sex"):(e="female",localStorage.setItem("sex",e)),localStorage.getItem("ratio")?i=localStorage.getItem("ratio"):(i=1.375,localStorage.setItem("ratio",i)),s("#gender div","calculating__choose-item_active"),s(".calculating__choose_big div","calculating__choose-item_active"),c(),a("#gender div","calculating__choose-item_active"),a(".calculating__choose_big div","calculating__choose-item_active"),l("#height"),l("#weight"),l("#age")}(),r("form",n),function(t){let{container:e,slide:n,nextArrow:r,prevArrow:o,totalCounter:i,currentCounter:s,wrapper:c,field:a}=t;const l=document.querySelector(e),u=l.querySelector(o),d=l.querySelector(r),h=l.querySelectorAll(n),f=l.querySelector(s),m=l.querySelector(c),v=l.querySelector(a),p=window.getComputedStyle(m).width,_=+p.replace(/\D/g,"");let g=0,y=0;function w(t){return t>=0&&t<10?`0${t}`:t}l.querySelector(i).textContent=w(h.length),v.style.width=100*h.length+"%",v.style.display="flex",v.style.transition="0.5s all",m.style.overflow="hidden",h.forEach((t=>t.style.width=p)),l.style.position="relative";const b=document.createElement("ol");b.classList.add("carousel-indicators"),b.style.cssText="\n\t\t\tposition: absolute;\n\t\t\tright: 0;\n\t\t\tbottom: 0;\n\t\t\tleft: 0;\n\t\t\tz-index: 15;\n\t\t\tdisplay: flex;\n\t\t\tjustify-content: center;\n\t\t\tmargin-right: 15%;\n\t\t\tmargin-left: 15%;\n\t\t\tlist-style: none;\n\t\t",l.append(b);for(let t=0;t<h.length;t++){const t=document.createElement("li");t.classList.add("dot"),t.style.cssText="\n\t\t\tbox-sizing: content-box;\n\t\t\tflex: 0 1 auto;\n\t\t\twidth: 30px;\n\t\t\theight: 6px;\n\t\t\tmargin-right: 3px;\n\t\t\tmargin-left: 3px;\n\t\t\tcursor: pointer;\n\t\t\tbackground-color: #fff;\n\t\t\tbackground-clip: padding-box;\n\t\t\tborder-top: 10px solid transparent;\n\t\t\tborder-bottom: 10px solid transparent;\n\t\t\topacity: .5;\n\t\t\ttransition: opacity .6s ease;\n\t\t",b.append(t)}const S=b.querySelectorAll(".dot"),L=()=>{S.forEach((t=>t.style.opacity=".5")),g>h.length-1&&(g=0),g<0&&(g=h.length-1),S[g].style.opacity="1",f.textContent=w(g+1)};L(),d.addEventListener("click",(()=>{y==_*(h.length-1)?y=0:y+=_,g++,L(),v.style.transform=`translateX(-${y}px)`})),u.addEventListener("click",(()=>{0==y?y=_*(h.length-1):y-=_,g--,L(),v.style.transform=`translateX(-${y}px)`})),b.addEventListener("click",(t=>{S.forEach(((e,n)=>{t.target==e&&function(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;g=t,y=_*t,L(),v.style.transform=`translateX(-${y}px)`}(n)}))}))}({container:".offer__slider",slide:".offer__slide",nextArrow:".offer__slider-next",prevArrow:".offer__slider-prev",totalCounter:"#total",currentCounter:"#current",wrapper:".offer__slider-wrapper",field:".offer__slider-inner"})}))})()})();
//# sourceMappingURL=bundle.js.map