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
/* 4 */
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   initSwiper: () => (/* binding */ initSwiper)
/* harmony export */ });
function initSwiper() {
    // Check if Swiper is loaded and .swiper element exists
    if (typeof Swiper === "undefined" || !document.querySelector('.swiper')) return;
  
    new Swiper('.swiper', {
      navigation: {
        nextEl: '.progressbar__btn-next',
        prevEl: '.progressbar__btn-prev'
      },
      pagination: {
        el: '.swiper-pagination',
        type: 'progressbar',
      },
      on: {
        slideChange: function () {
          updateSlideNumbers(this);
        },
        init: function () {
          updateSlideNumbers(this);
        },
      },
      slidesPerView: 1.17,
      loop: true,
      grabCursor: true,
    });
  
    // Update slide number display
    function updateSlideNumbers(swiper) {
      const current = swiper.realIndex;
      const display = document.querySelector('.progressbar__currentNumbers');
      if (display) {
        display.textContent = current + 1 < 10 ? `0${current + 1}` : current + 1;
      }
    }
  }

/***/ }),
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
function initAreaSelector() {
    const points = document.querySelectorAll('.popup__line-point');
    const form = document.getElementById('formRequest');

// Створюємо приховане поле, якщо ще не існує
    let areaInput = form.querySelector('input[name="area"]');
    if (!areaInput) {
        areaInput = document.createElement('input');
        areaInput.type = 'hidden';
        areaInput.name = 'area';
        form.appendChild(areaInput);
    }

    points.forEach(point => {
        point.addEventListener('click', () => {
            // Знімаємо клас active з усіх точок
            points.forEach(p => p.classList.remove('active'));

            // Додаємо active до вибраної
            point.classList.add('active');

            // Отримуємо значення площі з data-value
            const value = point.querySelector('.popup__point-text').dataset.value;

            // Записуємо його в hidden input
            areaInput.value = value;

            console.log('Обрано площу:', value);
        });
    });

// Встановлюємо значення при завантаженні, якщо вже є активна точка
    const activePoint = document.querySelector('.popup__line-point.active');
    if (activePoint) {
        const initialValue = activePoint.querySelector('.popup__point-text').dataset.value;
        areaInput.value = initialValue;
    }
}


/***/ }),
/* 10 */
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   initPopupToggle: () => (/* binding */ initPopupToggle)
/* harmony export */ });
// export function initPopupToggle() {
//     const popupButtons = document.querySelectorAll(".popup-request");
//
//     if (!popupButtons.length) {
//         console.warn('Жодної кнопки ".popup-request" не знайдено на сторінці.');
//         return;
//     }
//
//     const lockBody = () => {
//         const scrollBarWidth = window.innerWidth - document.documentElement.clientWidth;
//         document.body.style.paddingRight = scrollBarWidth + "px";
//         document.body.classList.add("lock");
//         document.documentElement.classList.add("lock");
//     };
//
//     const unlockBody = () => {
//         document.body.style.paddingRight = "";
//         document.body.classList.remove("lock");
//         document.documentElement.classList.remove("lock");
//     };
//
//     popupButtons.forEach(button => {
//         button.addEventListener("click", (e) => {
//             e.preventDefault();
//
//             const targetSelector = button.getAttribute("data-popup-target") || "#popup";
//             const popup = document.querySelector(targetSelector);
//
//             if (!popup) {
//                 console.warn(`Попап "${targetSelector}" не знайдено.`);
//                 return;
//             }
//
//             popup.classList.add("open");
//             lockBody();
//
//             const closePopup = (event) => {
//                 if (
//                     event.target.classList.contains("popup") ||
//                     event.target.closest(".popup__close")
//                 ) {
//                     popup.classList.remove("open");
//                     unlockBody();
//                     popup.removeEventListener("click", closePopup);
//                 }
//             };
//
//             popup.addEventListener("click", closePopup);
//         });
//     });
//
//     document.addEventListener("click", (e) => {
//         if (e.target.classList.contains("popup__btn")) {
//             e.preventDefault();
//
//             const currentPopup = e.target.closest(".popup");
//             if (!currentPopup) return;
//
//             currentPopup.classList.remove("open");
//
//             const successPopup = document.querySelector("#popupSuccess");
//             if (successPopup) {
//                 successPopup.classList.add("open");
//             }
//
//             lockBody();
//
//             const closeSuccess = (event) => {
//                 if (
//                     event.target.classList.contains("popup") ||
//                     event.target.closest(".popup__close")
//                 ) {
//                     successPopup.classList.remove("open");
//                     unlockBody();
//                     successPopup.removeEventListener("click", closeSuccess);
//                 }
//             };
//
//             successPopup.addEventListener("click", closeSuccess);
//         }
//     });
// }


function initPopupToggle() {
    const popupButtons = document.querySelectorAll(".popup-request");

    if (!popupButtons.length) {
        console.warn('Жодної кнопки ".popup-request" не знайдено на сторінці.');
        return;
    }

    const lockBody = () => {
        const scrollBarWidth = window.innerWidth - document.documentElement.clientWidth;
        document.body.style.paddingRight = scrollBarWidth + "px";
        document.body.classList.add("lock");
        document.documentElement.classList.add("lock");
    };

    const unlockBody = () => {
        document.body.style.paddingRight = "";
        document.body.classList.remove("lock");
        document.documentElement.classList.remove("lock");
    };

    popupButtons.forEach(button => {
        button.addEventListener("click", (e) => {
            e.preventDefault();

            const targetSelector = button.getAttribute("data-popup-target") || "#popup";
            const popup = document.querySelector(targetSelector);

            if (!popup) {
                console.warn(`Попап "${targetSelector}" не знайдено.`);
                return;
            }

            popup.classList.add("open");
            lockBody();

            const closePopup = (event) => {
                if (
                    event.target.classList.contains("popup") ||
                    event.target.closest(".popup__close")
                ) {
                    // Миттєво прибираємо скрол
                    popup.style.overflowY = "hidden";

                    // Закриваємо попап (починається плавне зникнення opacity)
                    popup.classList.remove("open");
                    unlockBody();

                    // Після завершення transition (800ms) прибираємо inline стиль overflowY
                    setTimeout(() => {
                        popup.style.overflowY = "";
                    }, 800);

                    popup.removeEventListener("click", closePopup);
                }
            };

            popup.addEventListener("click", closePopup);
        });
    });

    document.addEventListener("click", (e) => {
        if (e.target.classList.contains("popup__btn")) {
            e.preventDefault();

            const currentPopup = e.target.closest(".popup");
            if (!currentPopup) return;

            // Миттєво прибираємо скрол у поточному попапі
            currentPopup.style.overflowY = "hidden";

            // Закриваємо поточний попап
            currentPopup.classList.remove("open");
            unlockBody();

            const successPopup = document.querySelector("#popupSuccess");
            if (successPopup) {
                successPopup.classList.add("open");
                lockBody();

                const closeSuccess = (event) => {
                    if (
                        event.target.classList.contains("popup") ||
                        event.target.closest(".popup__close")
                    ) {
                        // Миттєво прибираємо скрол success попапу
                        successPopup.style.overflowY = "hidden";

                        successPopup.classList.remove("open");
                        unlockBody();

                        setTimeout(() => {
                            successPopup.style.overflowY = "";
                        }, 800);

                        successPopup.removeEventListener("click", closeSuccess);
                    }
                };

                successPopup.addEventListener("click", closeSuccess);
            }

            // Після 800ms прибираємо inline стиль overflowY у поточному попапі
            setTimeout(() => {
                currentPopup.style.overflowY = "";
            }, 800);
        }
    });
}



// const popupLinks = document.querySelectorAll('.popup-request');
// const body = document.querySelector('body');
// const lockPadding = document.querySelectorAll(".lock-padding");
//
// let unlock = true;
//
// const timeout = 800;
//
// if (popupLinks.length > 0) {
//     for (let index = 0; index < popupLinks.length; index++) {
//         const popupLink = popupLinks[index];
//         popupLink.addEventListener('click', function (e)  {
//             const popupName = popupLink.getAttribute('href').replace('#', '');
//             const curentPopup = document.getElementById(popupName);
//             popupOpen(curentPopup);
//             e.preventDefault();
//         });
//     }
// }
// const popupCloseIcon = document.querySelectorAll('.close-popup');
// if (popupCloseIcon.length > 0) {
//     for (let index = 0; index < popupCloseIcon.length; index++) {
//         const el = popupCloseIcon[index];
//         el.addEventListener('click', function (e) {
//             popupClose(el.closest('.popup'));
//             e.preventDefault();
//         });
//     }
// }
//
// function popupOpen(curentPopup) {
//     if (currentPopup && unlock) {
//         const popupActive = document.querySelector('popup.open');
//         if (poppupActive) {
//             popupClose(popupActive, false);
//         } else {
//             bodyLock();
//         }
//         currentPopup.classList.add('open');
//         curentPopup.addEventListener('click', function (e) {
//             if (!e.target.closest('.popup__content')) {
//                 popupClose(e.target.closest('.popup'));
//             }
//         });
//     }
// }




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
/* harmony import */ var _modules_init_swiper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4);
/* harmony import */ var _modules_init_location_dropdown_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5);
/* harmony import */ var _modules_block_large_handler_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6);
/* harmony import */ var _modules_init_header_scroll_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(7);
/* harmony import */ var _modules_init_lang_toggle_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(8);
/* harmony import */ var _modules_init_area_selector_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(9);
/* harmony import */ var _modules_popup_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(10);











// WebP support check
_modules_functions_js__WEBPACK_IMPORTED_MODULE_0__.isWebp();

document.addEventListener("DOMContentLoaded", () => {
  //preloader
  (0,_modules_preloader_js__WEBPACK_IMPORTED_MODULE_1__.runPreloader)();

  // Initialize burger menu
  (0,_modules_init_burger_js__WEBPACK_IMPORTED_MODULE_2__.initBurger)();

  // Initialize Swiper slider
  (0,_modules_init_swiper_js__WEBPACK_IMPORTED_MODULE_3__.initSwiper)();

  // Initialize location dropdown
  (0,_modules_init_location_dropdown_js__WEBPACK_IMPORTED_MODULE_4__.initLocationDropdown)();

  // Responsive class toggle based on screen width
  (0,_modules_block_large_handler_js__WEBPACK_IMPORTED_MODULE_5__.handleBlockLargeResize)(); 
  
  // Scroll
  (0,_modules_init_header_scroll_js__WEBPACK_IMPORTED_MODULE_6__.initHeaderScroll)();

  // Lang
  (0,_modules_init_lang_toggle_js__WEBPACK_IMPORTED_MODULE_7__.initLangToggle)();

  (0,_modules_init_area_selector_js__WEBPACK_IMPORTED_MODULE_8__.initAreaSelector)();

  // initPopupToggle();
});


})();

/******/ })()
;