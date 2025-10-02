/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ([
/* 0 */,
/* 1 */
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   isWebp: () => (/* binding */ isWebp)
/* harmony export */ });
function isWebp() {
	function testWebP(callback) {

		let webP = new Image();
		webP.onload = webP.onerror = function () {
			callback(webP.height == 2);
		};
		webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
	}
	testWebP(function (support) {
		let className = support === true ? 'webp' : 'no-webp';
        document.documentElement.classList.add(className);
	});
}



/***/ }),
/* 2 */
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   initBurger: () => (/* binding */ initBurger)
/* harmony export */ });
function initBurger() {
    const burgerBtn = document.querySelector(".burger__btn");
    const burgerBlock = document.querySelector(".burger__block");
    const body = document.body;
    const links = document.querySelectorAll(".menu__item-link");
  
    if (!burgerBtn || !burgerBlock) return;
  
    // Toggle burger menu
    burgerBtn.addEventListener("click", () => {
      burgerBlock.classList.toggle("active");
      burgerBtn.classList.toggle("active");
      body.classList.toggle("lock");
    });
  
    // Close menu on link click
    links.forEach(link => {
      link.addEventListener("click", () => {
        burgerBlock.classList.remove("active");
        burgerBtn.classList.remove("active");
        body.classList.remove("lock");
      });
    });
  
    // Reset burger state on screen resize > 1100px
    let wasBelowOrEqual1100 = window.innerWidth <= 1100;
    window.addEventListener('resize', () => {
      const isNowAbove1100 = window.innerWidth > 1100;
      if (wasBelowOrEqual1100 && isNowAbove1100) {
        burgerBlock.classList.remove('active');
        burgerBtn.classList.remove('active');
        body.classList.remove('lock');
      }
      wasBelowOrEqual1100 = window.innerWidth <= 1100;
    });
  }

/***/ }),
/* 3 */,
/* 4 */
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   initLocationDropdown: () => (/* binding */ initLocationDropdown)
/* harmony export */ });
function initLocationDropdown() {
    const buttons = document.querySelectorAll(".location__btn");
  
    buttons.forEach(function (btn) {
      btn.addEventListener("click", function (e) {
        e.stopPropagation();
  
        const container = btn.closest(".main-footer__location");
        const content = container?.querySelector(".location__content");
        const arrow = btn.querySelector(".location__arrow");
  
        content?.classList.toggle("active");
        arrow?.classList.toggle("active");
      });
    });
  
    // Close all dropdowns on outside click
    document.addEventListener("click", () => {
      document.querySelectorAll(".location__content.active").forEach(el => el.classList.remove("active"));
      document.querySelectorAll(".location__arrow.active").forEach(el => el.classList.remove("active"));
    });
  
    // Prevent closing when clicking inside content
    document.querySelectorAll(".location__content").forEach(content => {
      content.addEventListener("click", e => e.stopPropagation());
    });
  }

/***/ }),
/* 5 */
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   initHeaderScroll: () => (/* binding */ initHeaderScroll)
/* harmony export */ });
function initHeaderScroll() {
    window.addEventListener('scroll', () => {
      const header = document.getElementById('header');
      if (header) {
        header.classList.toggle('scrolled', window.scrollY > 0);
      }
    });
  }

/***/ })
/******/ 	]);
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
/************************************************************************/
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be isolated against other modules in the chunk.
(() => {
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_functions_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _modules_initBurger_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);
/* harmony import */ var _modules_initLocationDropdown_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4);
/* harmony import */ var _modules_initHeaderScroll_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5);





// WebP support check
_modules_functions_js__WEBPACK_IMPORTED_MODULE_0__.isWebp();

document.addEventListener("DOMContentLoaded", () => {
  // Initialize burger menu
  (0,_modules_initBurger_js__WEBPACK_IMPORTED_MODULE_1__.initBurger)();

  // Initialize location dropdown
  (0,_modules_initLocationDropdown_js__WEBPACK_IMPORTED_MODULE_2__.initLocationDropdown)();

  // Scroll
  (0,_modules_initHeaderScroll_js__WEBPACK_IMPORTED_MODULE_3__.initHeaderScroll)();
});

})();

/******/ })()
;