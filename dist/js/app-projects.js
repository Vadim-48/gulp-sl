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
/* harmony export */   runPreloader: () => (/* binding */ runPreloader)
/* harmony export */ });
// preloader.js
function runPreloader() {
  const preloader = document.querySelector('.preloader');
  const progressEl = document.querySelector('.preloader__progress');
  const preloaderText = document.querySelector('.preloader__text');
  const mainContent = document.querySelector('.body-content');

  let progress = 0;

  // Simulating gradual loading
  const fakeProgressInterval = setInterval(() => {
    if (progress < 95) {
      progress += Math.floor(Math.random() * 3) + 1; // +1..3%
      if (progress > 95) progress = 95;
      progressEl.textContent = progress;
    }
  }, 100);

  // When the page is fully loaded
  window.addEventListener('load', () => {
    clearInterval(fakeProgressInterval);
    progress = 100;
    progressEl.textContent = progress;

    // We show 100% first
    preloaderText.textContent = `HI ${progress}%`;

    // Delay 0.5 seconds before replacing all text with "HILIGHT"
    setTimeout(() => {
      preloaderText.textContent = 'HILIGHT';

      // Smoothly disappearing the preloader
      preloader.classList.add('preloader--hidden');

      setTimeout(() => {
        preloader.style.display = 'none';
        mainContent.classList.remove('body-content_hidden');
      }, 500);
    }, 500);
  });
}



/***/ }),
/* 3 */
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
/* 4 */,
/* 5 */
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
/* 6 */
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   handleBlockLargeResize: () => (/* binding */ handleBlockLargeResize)
/* harmony export */ });
function handleBlockLargeResize() {
    const blockLargeElements = document.querySelectorAll(".block_large");
  
    if (blockLargeElements.length > 0) {
      const updateClass = () => {
        blockLargeElements.forEach((el) => {
          if (window.innerWidth <= 850) {
            el.classList.remove("block_large");
          } else {
            el.classList.add("block_large");
          }
        });
      };
  
      updateClass();
      window.addEventListener("resize", updateClass);
    }
  }

/***/ }),
/* 7 */
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

/***/ }),
/* 8 */
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   initLangToggle: () => (/* binding */ initLangToggle)
/* harmony export */ });
function initLangToggle() {
  const langToggle = document.querySelector('.header__lang');
  const langMenu = document.querySelector('.header__lang-menu');

  langToggle.addEventListener('click', function (event) {
    event.stopPropagation();
    langMenu.classList.toggle('active');
  });

  document.addEventListener('click', function () {
    langMenu.classList.remove('active');
  });
}

/***/ }),
/* 9 */
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   initAreaSelector: () => (/* binding */ initAreaSelector)
/* harmony export */ });
// export function initAreaSelector() {
//     const items = document.querySelectorAll('.popup__line-point');
//     const input = document.getElementById('areaValue');
//
//     if (!items.length || !input) return;
//
//     items.forEach(item => {
//         item.addEventListener('click', () => {
//             // знімаємо active з усіх
//             items.forEach(i => i.querySelector('.popup__point-item').classList.remove('active'));
//
//             // додаємо active до поточного
//             item.querySelector('.popup__point-item').classList.add('active');
//
//             // зберігаємо значення у hidden input
//             input.value = item.dataset.value;
//         });
//     });
// }

function initAreaSelector() {
    const items = document.querySelectorAll('.popup__line-point');
    const input = document.getElementById('areaValue');

    if (!items.length || !input) return;

    items.forEach(item => {
        item.addEventListener('click', () => {
            // Зняти active з усіх
            items.forEach(i => i.querySelector('.popup__point-item').classList.remove('active'));

            // Додати active до поточного
            item.querySelector('.popup__point-item').classList.add('active');

            // Записати значення в hidden input
            input.value = item.dataset.value;
        });
    });
}

/***/ }),
/* 10 */,
/* 11 */
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   initApartamentsToggle: () => (/* binding */ initApartamentsToggle)
/* harmony export */ });
function initApartamentsToggle() {
    const apartamentsToggle = document.querySelector('.hero__dropdown-btn');
    const apartamentsList = document.querySelector('.hero__dropdown-list');
  
    if (!apartamentsToggle || !apartamentsList) return;
  
    apartamentsToggle.addEventListener('click', function (event) {
      event.stopPropagation();
      apartamentsList.classList.toggle('active');
    });
  
    document.addEventListener('click', function () {
      apartamentsList.classList.remove('active');
    });
  
    //  resize
    window.addEventListener('resize', function () {
      if (window.innerWidth > 650) {
        apartamentsList.classList.remove('active');
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
/* harmony import */ var _modules_preloader_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);
/* harmony import */ var _modules_init_burger_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3);
/* harmony import */ var _modules_init_location_dropdown_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5);
/* harmony import */ var _modules_block_large_handler_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6);
/* harmony import */ var _modules_init_header_scroll_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7);
/* harmony import */ var _modules_init_lang_toggle_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(8);
/* harmony import */ var _modules_init_apartaments_toggle_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(11);
/* harmony import */ var _modules_init_area_selector_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(9);










// WebP support check
_modules_functions_js__WEBPACK_IMPORTED_MODULE_0__.isWebp();

document.addEventListener("DOMContentLoaded", () => {
  //preloader
  (0,_modules_preloader_js__WEBPACK_IMPORTED_MODULE_1__.runPreloader)();
  
  // Initialize burger menu
  (0,_modules_init_burger_js__WEBPACK_IMPORTED_MODULE_2__.initBurger)();

  // Initialize location dropdown
  (0,_modules_init_location_dropdown_js__WEBPACK_IMPORTED_MODULE_3__.initLocationDropdown)();

  // Responsive class toggle based on screen width
  (0,_modules_block_large_handler_js__WEBPACK_IMPORTED_MODULE_4__.handleBlockLargeResize)(); 

  // Scroll
  (0,_modules_init_header_scroll_js__WEBPACK_IMPORTED_MODULE_5__.initHeaderScroll)();

  // Lang
  (0,_modules_init_lang_toggle_js__WEBPACK_IMPORTED_MODULE_6__.initLangToggle)();

  // Apartaments
  (0,_modules_init_apartaments_toggle_js__WEBPACK_IMPORTED_MODULE_7__.initApartamentsToggle)();

  (0,_modules_init_area_selector_js__WEBPACK_IMPORTED_MODULE_8__.initAreaSelector)();
});
})();

/******/ })()
;