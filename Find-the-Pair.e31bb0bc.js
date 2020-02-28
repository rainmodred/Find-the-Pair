parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"ICG2":[function(require,module,exports) {
"use strict";function r(r,e){if(!(r instanceof e))throw new TypeError("Cannot call a class as a function")}function e(r,e){for(var t=0;t<e.length;t++){var n=e[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(r,n.key,n)}}function t(r,t,n){return t&&e(r.prototype,t),n&&e(r,n),r}Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var n=function(){function e(){r(this,e),this.cardsArray=["moon","moon","goat","rat","summer","winter","rabbit","sigma","new-moon","new-moon","goat","rat","summer","winter","rabbit","sigma"]}return t(e,[{key:"randomCards",value:function(){this.cardsArray.sort(function(r,e){return.5-Math.random()})}},{key:"getName",value:function(r){return this.cardsArray[r]}}]),e}();exports.default=n;
},{}],"fFAv":[function(require,module,exports) {
"use strict";function e(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function t(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function n(e,n,i){return n&&t(e.prototype,n),i&&t(e,i),e}Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var i=function(){function t(n){e(this,t),this.newGame(n),this.cardsClicked=0,this.opened=0,this.moves=0,this.lives=n,this.openToWin=8}return n(t,[{key:"newGame",value:function(e){this.opened=0,this.moves=0,this.lives=e,this.openToWin=8}},{key:"addClickedCardName",value:function(e){this.clickedCardsArray.push(e)}},{key:"compareCards",value:function(e,t){return e.dataset.name===t.dataset.name}},{key:"updateLives",value:function(){this.lives--}},{key:"updateMoves",value:function(){this.moves++}},{key:"updateOpened",value:function(){this.opened++}}]),t}(),a=i;exports.default=a;
},{}],"Focm":[function(require,module,exports) {
"use strict";var e=n(require("./src/js/Cards")),t=n(require("./src/js/Game"));function n(e){return e&&e.__esModule?e:{default:e}}function a(e){return s(e)||o(e)||r()}function r(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function o(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}function s(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}function i(){w.cardsArray.forEach(function(e){var t=document.createElement("div");t.classList.add("card"),t.classList.add("flipped"),t.dataset.name=e;var n=document.createElement("div");n.classList.add("front");var a=document.createElement("div");a.classList.add("back"),u(t),y.appendChild(t),t.appendChild(n),t.appendChild(a)})}function d(e,t){setTimeout(function(){e.forEach(function(e){e.classList.remove(e.dataset.name),e.classList.add("flipped")})},t)}function c(e){var t=document.querySelector(".".concat(e)),n=document.createElement("span");n.classList.add("play-again"),n.innerHTML="Play again",h.style.display="block",t.classList.add("status"),t.appendChild(n),n.addEventListener("click",function(){h.style.display="none",t.classList.remove("status"),m(v),n.remove()})}function l(){L.textContent=g.moves,C.textContent=g.lives}function u(e){e.addEventListener("click",function(){if(!(-1===a(e.classList).indexOf("flipped")||E.length>1)){var t=e.dataset.name;e.classList.remove("flipped"),e.classList.add(t),E.push(e),2===E.length&&f()}})}function f(){g.updateMoves(),g.compareCards.apply(g,a(E))?(g.updateOpened(),E=[],g.opened===g.openToWin&&c("won")):(g.updateLives(),0===g.lives&&c("lost"),d(E,1e3),E=[],l())}function p(){for(;y.hasChildNodes();)y.removeChild(y.lastChild)}function m(e){p(),g.newGame(e),w.randomCards(),i(),L.textContent=0,C.textContent=0}var v=20,y=document.querySelector(".game"),h=document.querySelector(".game-over"),L=document.querySelector(".moves"),C=document.querySelector(".lives"),g=new t.default(v),w=new e.default;window.onload=function(){return l()};var E=[];m(v);
},{"./src/js/Cards":"ICG2","./src/js/Game":"fFAv"}]},{},["Focm"], null)
//# sourceMappingURL=/Find-the-Pair/Find-the-Pair.e31bb0bc.js.map