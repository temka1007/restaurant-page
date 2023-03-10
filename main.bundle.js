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
  // .menu-content
  const content = document.querySelector(".contact-content");

  // .menu-content > div
  const contactContainer = document.createElement("div");

  contactContainer.classList.add("contact-container");

  content.appendChild(contactContainer);

  // .contact-container > div*3

  const telephone = document.createElement("div");
  const location = document.createElement("div");
  const hours = document.createElement("div");

  telephone.classList.add("telephone");
  location.classList.add("location");
  hours.classList.add("hours");

  telephone.textContent = "Telephone:";
  telephone.innerHTML += "<span>555-555-1212</span>";

  location.textContent = "Location:";
  location.innerHTML += "<span>123 Main Street<br>Rio Vista, TX 76093</span>";

  hours.textContent = "Hours of Operation:";
  hours.innerHTML += "<span>Monday - Thursday: 6PM-11PM<br>Friday: 6PM-12AM<br>Saturday: 5PM-12AM<br>Sunday: 5PM-11PM</span>";

  contactContainer.append(telephone, location, hours);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7Ozs7OztBQ0FxQjs7QUFFTjtBQUNmO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUNqQ3FCOztBQUVOO0FBQ2Y7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUM1QnFCOztBQUVOO0FBQ2Y7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDN0hBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSxHQUFHO1dBQ0g7V0FDQTtXQUNBLENBQUM7Ozs7O1dDUEQ7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FDZnFCO0FBQ3JCO0FBQ2dEO0FBQ2xCO0FBQ007QUFDRDs7QUFFbkM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsaURBQVE7QUFDVixDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRSxvREFBVztBQUNiLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFLG9EQUFXO0FBQ2IsQ0FBQyxDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvY29udGFjdC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvZ2FsbGVyeS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvbWVudS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsImltcG9ydCBcIi4vc3R5bGUuY3NzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNvbnRhY3QoKSB7XG4gIC8vIC5tZW51LWNvbnRlbnRcbiAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY29udGFjdC1jb250ZW50XCIpO1xuXG4gIC8vIC5tZW51LWNvbnRlbnQgPiBkaXZcbiAgY29uc3QgY29udGFjdENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cbiAgY29udGFjdENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwiY29udGFjdC1jb250YWluZXJcIik7XG5cbiAgY29udGVudC5hcHBlbmRDaGlsZChjb250YWN0Q29udGFpbmVyKTtcblxuICAvLyAuY29udGFjdC1jb250YWluZXIgPiBkaXYqM1xuXG4gIGNvbnN0IHRlbGVwaG9uZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IGxvY2F0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgaG91cnMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXG4gIHRlbGVwaG9uZS5jbGFzc0xpc3QuYWRkKFwidGVsZXBob25lXCIpO1xuICBsb2NhdGlvbi5jbGFzc0xpc3QuYWRkKFwibG9jYXRpb25cIik7XG4gIGhvdXJzLmNsYXNzTGlzdC5hZGQoXCJob3Vyc1wiKTtcblxuICB0ZWxlcGhvbmUudGV4dENvbnRlbnQgPSBcIlRlbGVwaG9uZTpcIjtcbiAgdGVsZXBob25lLmlubmVySFRNTCArPSBcIjxzcGFuPjU1NS01NTUtMTIxMjwvc3Bhbj5cIjtcblxuICBsb2NhdGlvbi50ZXh0Q29udGVudCA9IFwiTG9jYXRpb246XCI7XG4gIGxvY2F0aW9uLmlubmVySFRNTCArPSBcIjxzcGFuPjEyMyBNYWluIFN0cmVldDxicj5SaW8gVmlzdGEsIFRYIDc2MDkzPC9zcGFuPlwiO1xuXG4gIGhvdXJzLnRleHRDb250ZW50ID0gXCJIb3VycyBvZiBPcGVyYXRpb246XCI7XG4gIGhvdXJzLmlubmVySFRNTCArPSBcIjxzcGFuPk1vbmRheSAtIFRodXJzZGF5OiA2UE0tMTFQTTxicj5GcmlkYXk6IDZQTS0xMkFNPGJyPlNhdHVyZGF5OiA1UE0tMTJBTTxicj5TdW5kYXk6IDVQTS0xMVBNPC9zcGFuPlwiO1xuXG4gIGNvbnRhY3RDb250YWluZXIuYXBwZW5kKHRlbGVwaG9uZSwgbG9jYXRpb24sIGhvdXJzKTtcbn1cbiIsImltcG9ydCBcIi4vc3R5bGUuY3NzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdhbGxlcnkoKSB7XG4gIC8vIC5tZW51LWNvbnRlbnRcbiAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZ2FsbGVyeS1jb250ZW50XCIpO1xuXG4gIC8vIC5nYWxsZXJ5LWNvbnRlbnQgPiBkaXYgXG4gIGNvbnN0IGltYWdlQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbiAgaW1hZ2VDb250YWluZXIuY2xhc3NMaXN0LmFkZChcImltYWdlLWNvbnRhaW5lclwiKVxuXG4gIGNvbnRlbnQuYXBwZW5kQ2hpbGQoaW1hZ2VDb250YWluZXIpXG5cbiAgLy8gLmdhbGxlcnktY29udGVudCA+IC5pbWFnZS1jb250YWluZXIgPiBkaXYqMTJcbiAgY29uc3Qgb25lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGNvbnN0IHR3byA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBjb25zdCB0aHJlZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBjb25zdCBmb3VyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGNvbnN0IGZpdmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgY29uc3Qgc2l4ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGNvbnN0IHNldmVuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGNvbnN0IGVpZ3RoID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGNvbnN0IG5pbmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgY29uc3QgdGVuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGNvbnN0IGVsZXZlbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBjb25zdCB0d2VsdmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuICBpbWFnZUNvbnRhaW5lci5hcHBlbmQob25lLCB0d28sIHRocmVlLCBmb3VyLGZpdmUsc2l4LHNldmVuLGVpZ3RoLG5pbmUsdGVuLGVsZXZlbix0d2VsdmUpXG59XG4iLCJpbXBvcnQgXCIuL3N0eWxlLmNzc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBtZW51KCkge1xuICAvLyAubWVudS1jb250ZW50XG4gIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1lbnUtY29udGVudFwiKTtcblxuICAvLyAubWVudS1jb250ZW50ID4gZGl2KjJcbiAgY29uc3QgYmVlcnMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCBmb29kcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cbiAgYmVlcnMuY2xhc3NMaXN0LmFkZChcImJlZXItY29udGFpbmVyXCIpO1xuICBmb29kcy5jbGFzc0xpc3QuYWRkKFwiZm9vZC1jb250YWluZXJcIik7XG5cbiAgY29udGVudC5hcHBlbmQoYmVlcnMsIGZvb2RzKTtcblxuICAvLyAuYmVlci1jb250YWluZXIgPiBkaXZcbiAgY29uc3QgYmVlckxpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCBiZWVySW1hZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXG4gIGJlZXJMaXN0LmNsYXNzTGlzdC5hZGQoXCJiZWVyLWxpc3RcIik7XG4gIGJlZXJJbWFnZS5jbGFzc0xpc3QuYWRkKFwiYmVlci1pbWFnZVwiKTtcblxuICBiZWVycy5hcHBlbmQoYmVlckxpc3QsIGJlZXJJbWFnZSk7XG5cbiAgLy8gLmZvb2QtY29udGFpbmVyID4gZGl2XG4gIGNvbnN0IGZvb2RJbWFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IGZvb2RMaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblxuICBmb29kSW1hZ2UuY2xhc3NMaXN0LmFkZChcImZvb2QtaW1hZ2VcIik7XG4gIGZvb2RMaXN0LmNsYXNzTGlzdC5hZGQoXCJmb29kLWxpc3RcIik7XG5cbiAgZm9vZHMuYXBwZW5kKGZvb2RJbWFnZSwgZm9vZExpc3QpO1xuXG4gIC8vIC5iZWVyLWxpc3QgPiBkaXYqMTBcblxuICBjb25zdCBndWlubmVzcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IGRlYWRSYWJiaXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCBzaXhwb2ludCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IGhhcnAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCBicm9va2x5biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IGtyb21iYWNoZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCBhbGxhZ2FzaCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IGF1c3RpbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IGhhenkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCBidWQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXG4gIGd1aW5uZXNzLnRleHRDb250ZW50ID0gXCJHVUlOTkVTU1wiO1xuICBndWlubmVzcy5pbm5lckhUTUwgKz0gXCI8c3Bhbj4kOS4wMDwvc3Bhbj5cIjtcbiAgZGVhZFJhYmJpdC50ZXh0Q29udGVudCA9IFwiREVBRCBSQUJCSVQgUkVEIEFMRVwiO1xuICBkZWFkUmFiYml0LmlubmVySFRNTCArPSBcIjxzcGFuPiQ5LjAwPC9zcGFuPlwiO1xuICBzaXhwb2ludC50ZXh0Q29udGVudCA9IFwiU0lYUE9JTlQgU1dFRVQgQUNUSU9OXCI7XG4gIHNpeHBvaW50LmlubmVySFRNTCArPSBcIjxzcGFuPiQ5LjAwPC9zcGFuPlwiO1xuICBoYXJwLnRleHRDb250ZW50ID0gXCJIQVJQXCI7XG4gIGhhcnAuaW5uZXJIVE1MICs9IFwiPHNwYW4+JDExLjAwPC9zcGFuPlwiO1xuICBicm9va2x5bi50ZXh0Q29udGVudCA9IFwiQlJPT0tMWU4gTEFDRVJcIjtcbiAgYnJvb2tseW4uaW5uZXJIVE1MICs9IFwiPHNwYW4+JDkuMDA8L3NwYW4+XCI7XG4gIGtyb21iYWNoZXIudGV4dENvbnRlbnQgPSBcIktST01CQUNIRVIgUElMU05FUlwiO1xuICBrcm9tYmFjaGVyLmlubmVySFRNTCArPSBcIjxzcGFuPiQ5LjAwPC9zcGFuPlwiO1xuICBhbGxhZ2FzaC50ZXh0Q29udGVudCA9IFwiQUxMQUdBU0ggV0lUQklFUlwiO1xuICBhbGxhZ2FzaC5pbm5lckhUTUwgKz0gXCI8c3Bhbj4kOS4wMDwvc3Bhbj5cIjtcbiAgYXVzdGluLnRleHRDb250ZW50ID0gXCJBVVNUSU4gRUFTVCBPUklHSU5BTCBEUlkgQ0lERVJcIjtcbiAgYXVzdGluLmlubmVySFRNTCArPSBcIjxzcGFuPiQ4LjAwPC9zcGFuPlwiO1xuICBoYXp5LnRleHRDb250ZW50ID0gXCJBTE1PU1QgRkFNT1VTIEhBWlkgSVBBXCI7XG4gIGhhenkuaW5uZXJIVE1MICs9IFwiPHNwYW4+JDkuMDA8L3NwYW4+XCI7XG4gIGJ1ZC50ZXh0Q29udGVudCA9IFwiQlVEIExJR0hUIEJPVFRMRVwiO1xuICBidWQuaW5uZXJIVE1MICs9IFwiPHNwYW4+JDcuMDA8L3NwYW4+XCI7XG5cbiAgYmVlckxpc3QuYXBwZW5kKFxuICAgIGd1aW5uZXNzLFxuICAgIGRlYWRSYWJiaXQsXG4gICAgc2l4cG9pbnQsXG4gICAgaGFycCxcbiAgICBicm9va2x5bixcbiAgICBrcm9tYmFjaGVyLFxuICAgIGFsbGFnYXNoLFxuICAgIGF1c3RpbixcbiAgICBoYXp5LFxuICAgIGJ1ZFxuICApO1xuXG4gIC8vIC5mb29kLWxpc3QgPiBkaXYqMTBcbiAgY29uc3QgY2xhc3NpY0J1cmdlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IHZlZ2V0YXJpYW5CdXJnZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCBjcmlzcHlGaXNoID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgY29ybmVkQmVlZiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IGhhbUFuZENoZWVzZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IHBvdFBpZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IGJhbmdlcnMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCBncmlsbGVkU2FsbW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgbGFtYlN0ZXcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCBzdGVhbWVkTXVzc2xlcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cbiAgY2xhc3NpY0J1cmdlci50ZXh0Q29udGVudCA9IFwiQ0xBU1NJQyBCVVJHRVJcIjtcbiAgY2xhc3NpY0J1cmdlci5pbm5lckhUTUwgKz0gXCI8c3Bhbj4kMjUuMDA8L3NwYW4+XCI7XG4gIHZlZ2V0YXJpYW5CdXJnZXIudGV4dENvbnRlbnQgPSBcIlZFR0VUQVJJQU4gQlVSR0VSXCI7XG4gIHZlZ2V0YXJpYW5CdXJnZXIuaW5uZXJIVE1MICs9IFwiPHNwYW4+JDI1LjAwPC9zcGFuPlwiO1xuICBjcmlzcHlGaXNoLnRleHRDb250ZW50ID0gXCJDUklTUFkgRklTSCAmIENISVBTXCI7XG4gIGNyaXNweUZpc2guaW5uZXJIVE1MICs9IFwiPHNwYW4+JDI4LjAwPC9zcGFuPlwiO1xuICBjb3JuZWRCZWVmLnRleHRDb250ZW50ID0gXCJDT1JORUQgQkVFRiBTQU5EV0lDSFwiO1xuICBjb3JuZWRCZWVmLmlubmVySFRNTCArPSBcIjxzcGFuPiQyMy4wMDwvc3Bhbj5cIjtcbiAgaGFtQW5kQ2hlZXNlLnRleHRDb250ZW50ID0gXCJIQU0gJiBDSEVFU0UgVE9BU1RJRVwiO1xuICBoYW1BbmRDaGVlc2UuaW5uZXJIVE1MICs9IFwiPHNwYW4+JDIyLjAwPC9zcGFuPlwiO1xuICBwb3RQaWUudGV4dENvbnRlbnQgPSBcIkNISUNLRU4gUE9UIFBJRVwiO1xuICBwb3RQaWUuaW5uZXJIVE1MICs9IFwiPHNwYW4+JDI1LjAwPC9zcGFuPlwiO1xuICBiYW5nZXJzLnRleHRDb250ZW50ID0gXCJCQU5HRVJTICYgTUFTSFwiO1xuICBiYW5nZXJzLmlubmVySFRNTCArPSBcIjxzcGFuPiQyNS4wMDwvc3Bhbj5cIjtcbiAgZ3JpbGxlZFNhbG1vbi50ZXh0Q29udGVudCA9IFwiR1JJTExFRCBBVExBTlRJQyBTQUxNT05cIjtcbiAgZ3JpbGxlZFNhbG1vbi5pbm5lckhUTUwgKz0gXCI8c3Bhbj4kMjguMDA8L3NwYW4+XCI7XG4gIGxhbWJTdGV3LnRleHRDb250ZW50ID0gXCJJUklTSCBMQU1CIFNURVdcIjtcbiAgbGFtYlN0ZXcuaW5uZXJIVE1MICs9IFwiPHNwYW4+JDI4LjAwPC9zcGFuPlwiO1xuICBzdGVhbWVkTXVzc2xlcy50ZXh0Q29udGVudCA9IFwiU1RFQU1FRCBGUkVTSCBNVVNTTEVTXCI7XG4gIHN0ZWFtZWRNdXNzbGVzLmlubmVySFRNTCArPSBcIjxzcGFuPiQyNC4wMDwvc3Bhbj5cIjtcblxuICBmb29kTGlzdC5hcHBlbmQoXG4gICAgY2xhc3NpY0J1cmdlcixcbiAgICB2ZWdldGFyaWFuQnVyZ2VyLFxuICAgIGNyaXNweUZpc2gsXG4gICAgY29ybmVkQmVlZixcbiAgICBoYW1BbmRDaGVlc2UsXG4gICAgcG90UGllLFxuICAgIGJhbmdlcnMsXG4gICAgZ3JpbGxlZFNhbG1vbixcbiAgICBsYW1iU3RldyxcbiAgICBzdGVhbWVkTXVzc2xlc1xuICApO1xufVxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyY1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiaW1wb3J0IFwiLi9zdHlsZS5jc3NcIjtcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bnVzZWQtdmFyc1xuaW1wb3J0IHRleGFzTG9nbyBmcm9tIFwiLi9pbWFnZXMvdGV4YXMtbG9nby5wbmdcIjtcbmltcG9ydCBtZW51UGFnZSBmcm9tIFwiLi9tZW51XCI7XG5pbXBvcnQgZ2FsbGVyeVBhZ2UgZnJvbSBcIi4vZ2FsbGVyeVwiO1xuaW1wb3J0IGNvbnRhY3RQYWdlIGZyb20gXCIuL2NvbnRhY3RcIlxuXG4vLyBib2R5ID4gI2NvbnRlbnRcbmNvbnN0IGRpdkNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NvbnRlbnRcIik7XG5cbi8vIGJvZHkgPiAjY29udGVudCA+IGRpdioyXG5jb25zdCB0b3BCYXJEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuY29uc3QgY29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cbnRvcEJhckRpdi5jbGFzc0xpc3QuYWRkKFwidG9wLWJhclwiKTtcbmNvbnRlbnQuY2xhc3NMaXN0LmFkZChcIm1haW4tY29udGVudFwiKTtcblxuZGl2Q29udGVudC5hcHBlbmQodG9wQmFyRGl2LCBjb250ZW50KTtcblxuLy8gLnRvcC1iYXIgPiBkaXZcbmNvbnN0IHRvcEJhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cbnRvcEJhckRpdi5hcHBlbmRDaGlsZCh0b3BCYXIpO1xuXG4vLyAudG9wLWJhciA+IGRpdiA+IGRpdioyXG5jb25zdCBsb2dvRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbmNvbnN0IG9wdGlvbnNDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXG5sb2dvRGl2LmNsYXNzTGlzdC5hZGQoXCJsb2dvXCIpO1xub3B0aW9uc0NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwib3B0aW9ucy1jb250YWluZXJcIik7XG5cbmxvZ29EaXYudGV4dENvbnRlbnQgPSBcIkNvcm9uYSBFeHRyYVwiO1xuXG50b3BCYXIuYXBwZW5kKGxvZ29EaXYsIG9wdGlvbnNDb250YWluZXIpO1xuXG4vLyAub3B0aW9uc0NvbnRhaW5lciA+IGJ1dHRvbiozXG5jb25zdCBkZWxpdmVyeUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG5jb25zdCBtZW51QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbmNvbnN0IGdhbGxlcnlCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuY29uc3QgY29udGFjdEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG5jb25zdCBmYkljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuY29uc3QgaW5zdGFJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcblxubWVudUJ0bi5jbGFzc0xpc3QuYWRkKFwibWVudVwiKTtcbmdhbGxlcnlCdG4uY2xhc3NMaXN0LmFkZChcImdhbGxlcnlcIik7XG5jb250YWN0QnRuLmNsYXNzTGlzdC5hZGQoXCJjb250YWN0XCIpO1xuZGVsaXZlcnlCdG4uY2xhc3NMaXN0LmFkZChcImRlbGl2ZXJ5XCIpO1xuZmJJY29uLmNsYXNzTGlzdC5hZGQoXCJmYlwiKTtcbmluc3RhSWNvbi5jbGFzc0xpc3QuYWRkKFwiaW5zdGFcIik7XG5cbm1lbnVCdG4udGV4dENvbnRlbnQgPSBcIk1lbnVcIjtcbmdhbGxlcnlCdG4udGV4dENvbnRlbnQgPSBcIkdhbGxlcnlcIjtcbmNvbnRhY3RCdG4udGV4dENvbnRlbnQgPSBcIkNvbnRhY3RcIjtcbmRlbGl2ZXJ5QnRuLnRleHRDb250ZW50ID0gXCJEZWxpdmVyeVwiO1xuXG5vcHRpb25zQ29udGFpbmVyLmFwcGVuZChcbiAgbWVudUJ0bixcbiAgZ2FsbGVyeUJ0bixcbiAgY29udGFjdEJ0bixcbiAgZGVsaXZlcnlCdG4sXG4gIGZiSWNvbixcbiAgaW5zdGFJY29uXG4pO1xuXG5jb25zdCBMb2dvID0gKCkgPT4ge1xuICAvLyBtYWluLWNvbnRlbnQgPiBkaXZcbiAgY29uc3QgZ3JlZXRpbmdXb3JkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgZ3JlZXRCaWdGb250ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblxuICBncmVldEJpZ0ZvbnQuY2xhc3NMaXN0LmFkZChcImdyZWV0aW5nXCIpO1xuXG4gIGdyZWV0aW5nV29yZC50ZXh0Q29udGVudCA9IFwiVGhlIEJlc3RcIjtcbiAgZ3JlZXRCaWdGb250LnRleHRDb250ZW50ID0gXCJCQVIgSU4gVEhFIFRFWEFTIVwiO1xuXG4gIGNvbnRlbnQuYXBwZW5kQ2hpbGQoZ3JlZXRpbmdXb3JkKTtcbiAgZ3JlZXRpbmdXb3JkLmFwcGVuZENoaWxkKGdyZWV0QmlnRm9udCk7XG59O1xuXG5Mb2dvKCk7XG5cbmRlbGl2ZXJ5QnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1yZXN0cmljdGVkLWdsb2JhbHNcbiAgbG9jYXRpb24uaHJlZiA9IFwiaHR0cHM6Ly93d3cueW91dHViZS5jb20vd2F0Y2g/dj1kUXc0dzlXZ1hjUVwiO1xufSk7XG5cbmZ1bmN0aW9uIGNsZWFyQ29udGVudCgpIHtcbiAgd2hpbGUgKGNvbnRlbnQuZmlyc3RDaGlsZCkge1xuICAgIGNvbnRlbnQucmVtb3ZlQ2hpbGQoY29udGVudC5maXJzdENoaWxkKTtcbiAgfVxufVxuXG5sb2dvRGl2LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gIGNsZWFyQ29udGVudCgpO1xuICBjb250ZW50LnJlbW92ZUF0dHJpYnV0ZShcImNsYXNzXCIpO1xuICBjb250ZW50LmNsYXNzTGlzdC5hZGQoXCJtYWluLWNvbnRlbnRcIik7XG4gIExvZ28oKTtcbn0pO1xuXG5tZW51QnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gIGNsZWFyQ29udGVudCgpO1xuICBjb250ZW50LnJlbW92ZUF0dHJpYnV0ZShcImNsYXNzXCIpO1xuICBjb250ZW50LmNsYXNzTGlzdC5hZGQoXCJtZW51LWNvbnRlbnRcIik7XG4gIG1lbnVQYWdlKCk7XG59KTtcblxuZ2FsbGVyeUJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICBjbGVhckNvbnRlbnQoKTtcbiAgY29udGVudC5yZW1vdmVBdHRyaWJ1dGUoXCJjbGFzc1wiKTtcbiAgY29udGVudC5jbGFzc0xpc3QuYWRkKFwiZ2FsbGVyeS1jb250ZW50XCIpO1xuICBnYWxsZXJ5UGFnZSgpO1xufSlcblxuY29udGFjdEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICBjbGVhckNvbnRlbnQoKTtcbiAgY29udGVudC5yZW1vdmVBdHRyaWJ1dGUoXCJjbGFzc1wiKTtcbiAgY29udGVudC5jbGFzc0xpc3QuYWRkKFwiY29udGFjdC1jb250ZW50XCIpO1xuICBjb250YWN0UGFnZSgpO1xufSkiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=