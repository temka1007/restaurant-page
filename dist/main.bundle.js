/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ contact)
/* harmony export */ });
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");


function contact() {
    
}

/***/ }),

/***/ "./src/gallery.js":
/*!************************!*\
  !*** ./src/gallery.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ gallery)
/* harmony export */ });
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");


function gallery() {
  // .menu-content
  const content = document.querySelector(".gallery-content");

  // .gallery-content > div 
  const imageContainer = document.createElement('div');

  imageContainer.classList.add("image-container")

  content.appendChild(imageContainer)

  // .gallery-content > .image-container > div*12
  const one = document.createElement('div');
  const two = document.createElement('div');
  const three = document.createElement('div');
  const four = document.createElement('div');
  const five = document.createElement('div');
  const six = document.createElement('div');
  const seven = document.createElement('div');
  const eigth = document.createElement('div');
  const nine = document.createElement('div');
  const ten = document.createElement('div');
  const eleven = document.createElement('div');
  const twelve = document.createElement('div');

  imageContainer.append(one, two, three, four,five,six,seven,eigth,nine,ten,eleven,twelve)
}


/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ menu)
/* harmony export */ });
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");


function menu() {
  // .menu-content
  const content = document.querySelector(".menu-content");

  // .menu-content > div*2
  const beers = document.createElement("div");
  const foods = document.createElement("div");

  beers.classList.add("beer-container");
  foods.classList.add("food-container");

  content.append(beers, foods);

  // .beer-container > div
  const beerList = document.createElement("div");
  const beerImage = document.createElement("div");

  beerList.classList.add("beer-list");
  beerImage.classList.add("beer-image");

  beers.append(beerList, beerImage);

  // .food-container > div
  const foodImage = document.createElement("div");
  const foodList = document.createElement("div");

  foodImage.classList.add("food-image");
  foodList.classList.add("food-list");

  foods.append(foodImage, foodList);

  // .beer-list > div*10

  const guinness = document.createElement("div");
  const deadRabbit = document.createElement("div");
  const sixpoint = document.createElement("div");
  const harp = document.createElement("div");
  const brooklyn = document.createElement("div");
  const krombacher = document.createElement("div");
  const allagash = document.createElement("div");
  const austin = document.createElement("div");
  const hazy = document.createElement("div");
  const bud = document.createElement("div");

  guinness.textContent = "GUINNESS";
  guinness.innerHTML += "<span>$9.00</span>";
  deadRabbit.textContent = "DEAD RABBIT RED ALE";
  deadRabbit.innerHTML += "<span>$9.00</span>";
  sixpoint.textContent = "SIXPOINT SWEET ACTION";
  sixpoint.innerHTML += "<span>$9.00</span>";
  harp.textContent = "HARP";
  harp.innerHTML += "<span>$11.00</span>";
  brooklyn.textContent = "BROOKLYN LACER";
  brooklyn.innerHTML += "<span>$9.00</span>";
  krombacher.textContent = "KROMBACHER PILSNER";
  krombacher.innerHTML += "<span>$9.00</span>";
  allagash.textContent = "ALLAGASH WITBIER";
  allagash.innerHTML += "<span>$9.00</span>";
  austin.textContent = "AUSTIN EAST ORIGINAL DRY CIDER";
  austin.innerHTML += "<span>$8.00</span>";
  hazy.textContent = "ALMOST FAMOUS HAZY IPA";
  hazy.innerHTML += "<span>$9.00</span>";
  bud.textContent = "BUD LIGHT BOTTLE";
  bud.innerHTML += "<span>$7.00</span>";

  beerList.append(
    guinness,
    deadRabbit,
    sixpoint,
    harp,
    brooklyn,
    krombacher,
    allagash,
    austin,
    hazy,
    bud
  );

  // .food-list > div*10
  const classicBurger = document.createElement("div");
  const vegetarianBurger = document.createElement("div");
  const crispyFish = document.createElement("div");
  const cornedBeef = document.createElement("div");
  const hamAndCheese = document.createElement("div");
  const potPie = document.createElement("div");
  const bangers = document.createElement("div");
  const grilledSalmon = document.createElement("div");
  const lambStew = document.createElement("div");
  const steamedMussles = document.createElement("div");

  classicBurger.textContent = "CLASSIC BURGER";
  classicBurger.innerHTML += "<span>$25.00</span>";
  vegetarianBurger.textContent = "VEGETARIAN BURGER";
  vegetarianBurger.innerHTML += "<span>$25.00</span>";
  crispyFish.textContent = "CRISPY FISH & CHIPS";
  crispyFish.innerHTML += "<span>$28.00</span>";
  cornedBeef.textContent = "CORNED BEEF SANDWICH";
  cornedBeef.innerHTML += "<span>$23.00</span>";
  hamAndCheese.textContent = "HAM & CHEESE TOASTIE";
  hamAndCheese.innerHTML += "<span>$22.00</span>";
  potPie.textContent = "CHICKEN POT PIE";
  potPie.innerHTML += "<span>$25.00</span>";
  bangers.textContent = "BANGERS & MASH";
  bangers.innerHTML += "<span>$25.00</span>";
  grilledSalmon.textContent = "GRILLED ATLANTIC SALMON";
  grilledSalmon.innerHTML += "<span>$28.00</span>";
  lambStew.textContent = "IRISH LAMB STEW";
  lambStew.innerHTML += "<span>$28.00</span>";
  steamedMussles.textContent = "STEAMED FRESH MUSSLES";
  steamedMussles.innerHTML += "<span>$24.00</span>";

  foodList.append(
    classicBurger,
    vegetarianBurger,
    crispyFish,
    cornedBeef,
    hamAndCheese,
    potPie,
    bangers,
    grilledSalmon,
    lambStew,
    steamedMussles
  );
}


/***/ }),

/***/ "./src/images/texas-logo.png":
/*!***********************************!*\
  !*** ./src/images/texas-logo.png ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "asset/caf070ba86b1af28b355.png";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _images_texas_logo_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./images/texas-logo.png */ "./src/images/texas-logo.png");
/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu */ "./src/menu.js");
/* harmony import */ var _gallery__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./gallery */ "./src/gallery.js");
/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./contact */ "./src/contact.js");

// eslint-disable-next-line no-unused-vars





// body > #content
const divContent = document.querySelector("#content");

// body > #content > div*2
const topBarDiv = document.createElement("div");
const content = document.createElement("div");

topBarDiv.classList.add("top-bar");
content.classList.add("main-content");

divContent.append(topBarDiv, content);

// .top-bar > div
const topBar = document.createElement("div");

topBarDiv.appendChild(topBar);

// .top-bar > div > div*2
const logoDiv = document.createElement("div");
const optionsContainer = document.createElement("div");

logoDiv.classList.add("logo");
optionsContainer.classList.add("options-container");

logoDiv.textContent = "Corona Extra";

topBar.append(logoDiv, optionsContainer);

// .optionsContainer > button*3
const deliveryBtn = document.createElement("button");
const menuBtn = document.createElement("button");
const galleryBtn = document.createElement("button");
const contactBtn = document.createElement("button");
const fbIcon = document.createElement("button");
const instaIcon = document.createElement("button");

menuBtn.classList.add("menu");
galleryBtn.classList.add("gallery");
contactBtn.classList.add("contact");
deliveryBtn.classList.add("delivery");
fbIcon.classList.add("fb");
instaIcon.classList.add("insta");

menuBtn.textContent = "Menu";
galleryBtn.textContent = "Gallery";
contactBtn.textContent = "Contact";
deliveryBtn.textContent = "Delivery";

optionsContainer.append(
  menuBtn,
  galleryBtn,
  contactBtn,
  deliveryBtn,
  fbIcon,
  instaIcon
);

const Logo = () => {
  // main-content > div
  const greetingWord = document.createElement("div");
  const greetBigFont = document.createElement("div");

  greetBigFont.classList.add("greeting");

  greetingWord.textContent = "The Best";
  greetBigFont.textContent = "BAR IN THE TEXAS!";

  content.appendChild(greetingWord);
  greetingWord.appendChild(greetBigFont);
};

Logo();

deliveryBtn.addEventListener("click", () => {
  // eslint-disable-next-line no-restricted-globals
  location.href = "https://www.youtube.com/watch?v=dQw4w9WgXcQ";
});

function clearContent() {
  while (content.firstChild) {
    content.removeChild(content.firstChild);
  }
}

logoDiv.addEventListener("click", () => {
  clearContent();
  content.removeAttribute("class");
  content.classList.add("main-content");
  Logo();
});

menuBtn.addEventListener("click", () => {
  clearContent();
  content.removeAttribute("class");
  content.classList.add("menu-content");
  (0,_menu__WEBPACK_IMPORTED_MODULE_2__["default"])();
});

galleryBtn.addEventListener("click", () => {
  clearContent();
  content.removeAttribute("class");
  content.classList.add("gallery-content");
  (0,_gallery__WEBPACK_IMPORTED_MODULE_3__["default"])();
})

contactBtn.addEventListener("click", () => {
  clearContent();
  content.removeAttribute("class");
  content.classList.add("contact-content");
  (0,_contact__WEBPACK_IMPORTED_MODULE_4__["default"])();
})
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7Ozs7OztBQ0FxQjs7QUFFTjtBQUNmO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQ0pxQjs7QUFFTjtBQUNmO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FDNUJxQjs7QUFFTjtBQUNmO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7OztVQzdIQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQSxDQUFDOzs7OztXQ1BEOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7Ozs7Ozs7Ozs7OztBQ2ZxQjtBQUNyQjtBQUNnRDtBQUNsQjtBQUNNO0FBQ0Q7O0FBRW5DO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFLGlEQUFRO0FBQ1YsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsb0RBQVc7QUFDYixDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRSxvREFBVztBQUNiLENBQUMsQyIsInNvdXJjZXMiOlsid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9zdHlsZS5jc3M/ZTMyMCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvY29udGFjdC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvZ2FsbGVyeS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvbWVudS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsImltcG9ydCBcIi4vc3R5bGUuY3NzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNvbnRhY3QoKSB7XG4gICAgXG59IiwiaW1wb3J0IFwiLi9zdHlsZS5jc3NcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2FsbGVyeSgpIHtcbiAgLy8gLm1lbnUtY29udGVudFxuICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5nYWxsZXJ5LWNvbnRlbnRcIik7XG5cbiAgLy8gLmdhbGxlcnktY29udGVudCA+IGRpdiBcbiAgY29uc3QgaW1hZ2VDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuICBpbWFnZUNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwiaW1hZ2UtY29udGFpbmVyXCIpXG5cbiAgY29udGVudC5hcHBlbmRDaGlsZChpbWFnZUNvbnRhaW5lcilcblxuICAvLyAuZ2FsbGVyeS1jb250ZW50ID4gLmltYWdlLWNvbnRhaW5lciA+IGRpdioxMlxuICBjb25zdCBvbmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgY29uc3QgdHdvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGNvbnN0IHRocmVlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGNvbnN0IGZvdXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgY29uc3QgZml2ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBjb25zdCBzaXggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgY29uc3Qgc2V2ZW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgY29uc3QgZWlndGggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgY29uc3QgbmluZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBjb25zdCB0ZW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgY29uc3QgZWxldmVuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGNvbnN0IHR3ZWx2ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG4gIGltYWdlQ29udGFpbmVyLmFwcGVuZChvbmUsIHR3bywgdGhyZWUsIGZvdXIsZml2ZSxzaXgsc2V2ZW4sZWlndGgsbmluZSx0ZW4sZWxldmVuLHR3ZWx2ZSlcbn1cbiIsImltcG9ydCBcIi4vc3R5bGUuY3NzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIG1lbnUoKSB7XG4gIC8vIC5tZW51LWNvbnRlbnRcbiAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubWVudS1jb250ZW50XCIpO1xuXG4gIC8vIC5tZW51LWNvbnRlbnQgPiBkaXYqMlxuICBjb25zdCBiZWVycyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IGZvb2RzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblxuICBiZWVycy5jbGFzc0xpc3QuYWRkKFwiYmVlci1jb250YWluZXJcIik7XG4gIGZvb2RzLmNsYXNzTGlzdC5hZGQoXCJmb29kLWNvbnRhaW5lclwiKTtcblxuICBjb250ZW50LmFwcGVuZChiZWVycywgZm9vZHMpO1xuXG4gIC8vIC5iZWVyLWNvbnRhaW5lciA+IGRpdlxuICBjb25zdCBiZWVyTGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IGJlZXJJbWFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cbiAgYmVlckxpc3QuY2xhc3NMaXN0LmFkZChcImJlZXItbGlzdFwiKTtcbiAgYmVlckltYWdlLmNsYXNzTGlzdC5hZGQoXCJiZWVyLWltYWdlXCIpO1xuXG4gIGJlZXJzLmFwcGVuZChiZWVyTGlzdCwgYmVlckltYWdlKTtcblxuICAvLyAuZm9vZC1jb250YWluZXIgPiBkaXZcbiAgY29uc3QgZm9vZEltYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgZm9vZExpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXG4gIGZvb2RJbWFnZS5jbGFzc0xpc3QuYWRkKFwiZm9vZC1pbWFnZVwiKTtcbiAgZm9vZExpc3QuY2xhc3NMaXN0LmFkZChcImZvb2QtbGlzdFwiKTtcblxuICBmb29kcy5hcHBlbmQoZm9vZEltYWdlLCBmb29kTGlzdCk7XG5cbiAgLy8gLmJlZXItbGlzdCA+IGRpdioxMFxuXG4gIGNvbnN0IGd1aW5uZXNzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgZGVhZFJhYmJpdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IHNpeHBvaW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgaGFycCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IGJyb29rbHluID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3Qga3JvbWJhY2hlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IGFsbGFnYXNoID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgYXVzdGluID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgaGF6eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IGJ1ZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cbiAgZ3Vpbm5lc3MudGV4dENvbnRlbnQgPSBcIkdVSU5ORVNTXCI7XG4gIGd1aW5uZXNzLmlubmVySFRNTCArPSBcIjxzcGFuPiQ5LjAwPC9zcGFuPlwiO1xuICBkZWFkUmFiYml0LnRleHRDb250ZW50ID0gXCJERUFEIFJBQkJJVCBSRUQgQUxFXCI7XG4gIGRlYWRSYWJiaXQuaW5uZXJIVE1MICs9IFwiPHNwYW4+JDkuMDA8L3NwYW4+XCI7XG4gIHNpeHBvaW50LnRleHRDb250ZW50ID0gXCJTSVhQT0lOVCBTV0VFVCBBQ1RJT05cIjtcbiAgc2l4cG9pbnQuaW5uZXJIVE1MICs9IFwiPHNwYW4+JDkuMDA8L3NwYW4+XCI7XG4gIGhhcnAudGV4dENvbnRlbnQgPSBcIkhBUlBcIjtcbiAgaGFycC5pbm5lckhUTUwgKz0gXCI8c3Bhbj4kMTEuMDA8L3NwYW4+XCI7XG4gIGJyb29rbHluLnRleHRDb250ZW50ID0gXCJCUk9PS0xZTiBMQUNFUlwiO1xuICBicm9va2x5bi5pbm5lckhUTUwgKz0gXCI8c3Bhbj4kOS4wMDwvc3Bhbj5cIjtcbiAga3JvbWJhY2hlci50ZXh0Q29udGVudCA9IFwiS1JPTUJBQ0hFUiBQSUxTTkVSXCI7XG4gIGtyb21iYWNoZXIuaW5uZXJIVE1MICs9IFwiPHNwYW4+JDkuMDA8L3NwYW4+XCI7XG4gIGFsbGFnYXNoLnRleHRDb250ZW50ID0gXCJBTExBR0FTSCBXSVRCSUVSXCI7XG4gIGFsbGFnYXNoLmlubmVySFRNTCArPSBcIjxzcGFuPiQ5LjAwPC9zcGFuPlwiO1xuICBhdXN0aW4udGV4dENvbnRlbnQgPSBcIkFVU1RJTiBFQVNUIE9SSUdJTkFMIERSWSBDSURFUlwiO1xuICBhdXN0aW4uaW5uZXJIVE1MICs9IFwiPHNwYW4+JDguMDA8L3NwYW4+XCI7XG4gIGhhenkudGV4dENvbnRlbnQgPSBcIkFMTU9TVCBGQU1PVVMgSEFaWSBJUEFcIjtcbiAgaGF6eS5pbm5lckhUTUwgKz0gXCI8c3Bhbj4kOS4wMDwvc3Bhbj5cIjtcbiAgYnVkLnRleHRDb250ZW50ID0gXCJCVUQgTElHSFQgQk9UVExFXCI7XG4gIGJ1ZC5pbm5lckhUTUwgKz0gXCI8c3Bhbj4kNy4wMDwvc3Bhbj5cIjtcblxuICBiZWVyTGlzdC5hcHBlbmQoXG4gICAgZ3Vpbm5lc3MsXG4gICAgZGVhZFJhYmJpdCxcbiAgICBzaXhwb2ludCxcbiAgICBoYXJwLFxuICAgIGJyb29rbHluLFxuICAgIGtyb21iYWNoZXIsXG4gICAgYWxsYWdhc2gsXG4gICAgYXVzdGluLFxuICAgIGhhenksXG4gICAgYnVkXG4gICk7XG5cbiAgLy8gLmZvb2QtbGlzdCA+IGRpdioxMFxuICBjb25zdCBjbGFzc2ljQnVyZ2VyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgdmVnZXRhcmlhbkJ1cmdlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IGNyaXNweUZpc2ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCBjb3JuZWRCZWVmID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgaGFtQW5kQ2hlZXNlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgcG90UGllID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgYmFuZ2VycyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IGdyaWxsZWRTYWxtb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCBsYW1iU3RldyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IHN0ZWFtZWRNdXNzbGVzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblxuICBjbGFzc2ljQnVyZ2VyLnRleHRDb250ZW50ID0gXCJDTEFTU0lDIEJVUkdFUlwiO1xuICBjbGFzc2ljQnVyZ2VyLmlubmVySFRNTCArPSBcIjxzcGFuPiQyNS4wMDwvc3Bhbj5cIjtcbiAgdmVnZXRhcmlhbkJ1cmdlci50ZXh0Q29udGVudCA9IFwiVkVHRVRBUklBTiBCVVJHRVJcIjtcbiAgdmVnZXRhcmlhbkJ1cmdlci5pbm5lckhUTUwgKz0gXCI8c3Bhbj4kMjUuMDA8L3NwYW4+XCI7XG4gIGNyaXNweUZpc2gudGV4dENvbnRlbnQgPSBcIkNSSVNQWSBGSVNIICYgQ0hJUFNcIjtcbiAgY3Jpc3B5RmlzaC5pbm5lckhUTUwgKz0gXCI8c3Bhbj4kMjguMDA8L3NwYW4+XCI7XG4gIGNvcm5lZEJlZWYudGV4dENvbnRlbnQgPSBcIkNPUk5FRCBCRUVGIFNBTkRXSUNIXCI7XG4gIGNvcm5lZEJlZWYuaW5uZXJIVE1MICs9IFwiPHNwYW4+JDIzLjAwPC9zcGFuPlwiO1xuICBoYW1BbmRDaGVlc2UudGV4dENvbnRlbnQgPSBcIkhBTSAmIENIRUVTRSBUT0FTVElFXCI7XG4gIGhhbUFuZENoZWVzZS5pbm5lckhUTUwgKz0gXCI8c3Bhbj4kMjIuMDA8L3NwYW4+XCI7XG4gIHBvdFBpZS50ZXh0Q29udGVudCA9IFwiQ0hJQ0tFTiBQT1QgUElFXCI7XG4gIHBvdFBpZS5pbm5lckhUTUwgKz0gXCI8c3Bhbj4kMjUuMDA8L3NwYW4+XCI7XG4gIGJhbmdlcnMudGV4dENvbnRlbnQgPSBcIkJBTkdFUlMgJiBNQVNIXCI7XG4gIGJhbmdlcnMuaW5uZXJIVE1MICs9IFwiPHNwYW4+JDI1LjAwPC9zcGFuPlwiO1xuICBncmlsbGVkU2FsbW9uLnRleHRDb250ZW50ID0gXCJHUklMTEVEIEFUTEFOVElDIFNBTE1PTlwiO1xuICBncmlsbGVkU2FsbW9uLmlubmVySFRNTCArPSBcIjxzcGFuPiQyOC4wMDwvc3Bhbj5cIjtcbiAgbGFtYlN0ZXcudGV4dENvbnRlbnQgPSBcIklSSVNIIExBTUIgU1RFV1wiO1xuICBsYW1iU3Rldy5pbm5lckhUTUwgKz0gXCI8c3Bhbj4kMjguMDA8L3NwYW4+XCI7XG4gIHN0ZWFtZWRNdXNzbGVzLnRleHRDb250ZW50ID0gXCJTVEVBTUVEIEZSRVNIIE1VU1NMRVNcIjtcbiAgc3RlYW1lZE11c3NsZXMuaW5uZXJIVE1MICs9IFwiPHNwYW4+JDI0LjAwPC9zcGFuPlwiO1xuXG4gIGZvb2RMaXN0LmFwcGVuZChcbiAgICBjbGFzc2ljQnVyZ2VyLFxuICAgIHZlZ2V0YXJpYW5CdXJnZXIsXG4gICAgY3Jpc3B5RmlzaCxcbiAgICBjb3JuZWRCZWVmLFxuICAgIGhhbUFuZENoZWVzZSxcbiAgICBwb3RQaWUsXG4gICAgYmFuZ2VycyxcbiAgICBncmlsbGVkU2FsbW9uLFxuICAgIGxhbWJTdGV3LFxuICAgIHN0ZWFtZWRNdXNzbGVzXG4gICk7XG59XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJpbXBvcnQgXCIuL3N0eWxlLmNzc1wiO1xuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVudXNlZC12YXJzXG5pbXBvcnQgdGV4YXNMb2dvIGZyb20gXCIuL2ltYWdlcy90ZXhhcy1sb2dvLnBuZ1wiO1xuaW1wb3J0IG1lbnVQYWdlIGZyb20gXCIuL21lbnVcIjtcbmltcG9ydCBnYWxsZXJ5UGFnZSBmcm9tIFwiLi9nYWxsZXJ5XCI7XG5pbXBvcnQgY29udGFjdFBhZ2UgZnJvbSBcIi4vY29udGFjdFwiXG5cbi8vIGJvZHkgPiAjY29udGVudFxuY29uc3QgZGl2Q29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY29udGVudFwiKTtcblxuLy8gYm9keSA+ICNjb250ZW50ID4gZGl2KjJcbmNvbnN0IHRvcEJhckRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5jb25zdCBjb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblxudG9wQmFyRGl2LmNsYXNzTGlzdC5hZGQoXCJ0b3AtYmFyXCIpO1xuY29udGVudC5jbGFzc0xpc3QuYWRkKFwibWFpbi1jb250ZW50XCIpO1xuXG5kaXZDb250ZW50LmFwcGVuZCh0b3BCYXJEaXYsIGNvbnRlbnQpO1xuXG4vLyAudG9wLWJhciA+IGRpdlxuY29uc3QgdG9wQmFyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblxudG9wQmFyRGl2LmFwcGVuZENoaWxkKHRvcEJhcik7XG5cbi8vIC50b3AtYmFyID4gZGl2ID4gZGl2KjJcbmNvbnN0IGxvZ29EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuY29uc3Qgb3B0aW9uc0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cbmxvZ29EaXYuY2xhc3NMaXN0LmFkZChcImxvZ29cIik7XG5vcHRpb25zQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJvcHRpb25zLWNvbnRhaW5lclwiKTtcblxubG9nb0Rpdi50ZXh0Q29udGVudCA9IFwiQ29yb25hIEV4dHJhXCI7XG5cbnRvcEJhci5hcHBlbmQobG9nb0Rpdiwgb3B0aW9uc0NvbnRhaW5lcik7XG5cbi8vIC5vcHRpb25zQ29udGFpbmVyID4gYnV0dG9uKjNcbmNvbnN0IGRlbGl2ZXJ5QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbmNvbnN0IG1lbnVCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuY29uc3QgZ2FsbGVyeUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG5jb25zdCBjb250YWN0QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbmNvbnN0IGZiSWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG5jb25zdCBpbnN0YUljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuXG5tZW51QnRuLmNsYXNzTGlzdC5hZGQoXCJtZW51XCIpO1xuZ2FsbGVyeUJ0bi5jbGFzc0xpc3QuYWRkKFwiZ2FsbGVyeVwiKTtcbmNvbnRhY3RCdG4uY2xhc3NMaXN0LmFkZChcImNvbnRhY3RcIik7XG5kZWxpdmVyeUJ0bi5jbGFzc0xpc3QuYWRkKFwiZGVsaXZlcnlcIik7XG5mYkljb24uY2xhc3NMaXN0LmFkZChcImZiXCIpO1xuaW5zdGFJY29uLmNsYXNzTGlzdC5hZGQoXCJpbnN0YVwiKTtcblxubWVudUJ0bi50ZXh0Q29udGVudCA9IFwiTWVudVwiO1xuZ2FsbGVyeUJ0bi50ZXh0Q29udGVudCA9IFwiR2FsbGVyeVwiO1xuY29udGFjdEJ0bi50ZXh0Q29udGVudCA9IFwiQ29udGFjdFwiO1xuZGVsaXZlcnlCdG4udGV4dENvbnRlbnQgPSBcIkRlbGl2ZXJ5XCI7XG5cbm9wdGlvbnNDb250YWluZXIuYXBwZW5kKFxuICBtZW51QnRuLFxuICBnYWxsZXJ5QnRuLFxuICBjb250YWN0QnRuLFxuICBkZWxpdmVyeUJ0bixcbiAgZmJJY29uLFxuICBpbnN0YUljb25cbik7XG5cbmNvbnN0IExvZ28gPSAoKSA9PiB7XG4gIC8vIG1haW4tY29udGVudCA+IGRpdlxuICBjb25zdCBncmVldGluZ1dvcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCBncmVldEJpZ0ZvbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXG4gIGdyZWV0QmlnRm9udC5jbGFzc0xpc3QuYWRkKFwiZ3JlZXRpbmdcIik7XG5cbiAgZ3JlZXRpbmdXb3JkLnRleHRDb250ZW50ID0gXCJUaGUgQmVzdFwiO1xuICBncmVldEJpZ0ZvbnQudGV4dENvbnRlbnQgPSBcIkJBUiBJTiBUSEUgVEVYQVMhXCI7XG5cbiAgY29udGVudC5hcHBlbmRDaGlsZChncmVldGluZ1dvcmQpO1xuICBncmVldGluZ1dvcmQuYXBwZW5kQ2hpbGQoZ3JlZXRCaWdGb250KTtcbn07XG5cbkxvZ28oKTtcblxuZGVsaXZlcnlCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXJlc3RyaWN0ZWQtZ2xvYmFsc1xuICBsb2NhdGlvbi5ocmVmID0gXCJodHRwczovL3d3dy55b3V0dWJlLmNvbS93YXRjaD92PWRRdzR3OVdnWGNRXCI7XG59KTtcblxuZnVuY3Rpb24gY2xlYXJDb250ZW50KCkge1xuICB3aGlsZSAoY29udGVudC5maXJzdENoaWxkKSB7XG4gICAgY29udGVudC5yZW1vdmVDaGlsZChjb250ZW50LmZpcnN0Q2hpbGQpO1xuICB9XG59XG5cbmxvZ29EaXYuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgY2xlYXJDb250ZW50KCk7XG4gIGNvbnRlbnQucmVtb3ZlQXR0cmlidXRlKFwiY2xhc3NcIik7XG4gIGNvbnRlbnQuY2xhc3NMaXN0LmFkZChcIm1haW4tY29udGVudFwiKTtcbiAgTG9nbygpO1xufSk7XG5cbm1lbnVCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgY2xlYXJDb250ZW50KCk7XG4gIGNvbnRlbnQucmVtb3ZlQXR0cmlidXRlKFwiY2xhc3NcIik7XG4gIGNvbnRlbnQuY2xhc3NMaXN0LmFkZChcIm1lbnUtY29udGVudFwiKTtcbiAgbWVudVBhZ2UoKTtcbn0pO1xuXG5nYWxsZXJ5QnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gIGNsZWFyQ29udGVudCgpO1xuICBjb250ZW50LnJlbW92ZUF0dHJpYnV0ZShcImNsYXNzXCIpO1xuICBjb250ZW50LmNsYXNzTGlzdC5hZGQoXCJnYWxsZXJ5LWNvbnRlbnRcIik7XG4gIGdhbGxlcnlQYWdlKCk7XG59KVxuXG5jb250YWN0QnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gIGNsZWFyQ29udGVudCgpO1xuICBjb250ZW50LnJlbW92ZUF0dHJpYnV0ZShcImNsYXNzXCIpO1xuICBjb250ZW50LmNsYXNzTGlzdC5hZGQoXCJjb250YWN0LWNvbnRlbnRcIik7XG4gIGNvbnRhY3RQYWdlKCk7XG59KSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==