import * as flsFunctions from "./modules/functions.js";
import { runPreloader } from './modules/preloader.js';
import { initBurger } from "./modules/init-burger.js";
import { initSwiperAbout } from "./modules/init-swiper-about.js";
import { initHeaderScroll } from "./modules/init-header-scroll.js";
import { initLangToggle } from './modules/init-lang-toggle.js';
import { initAreaSelector } from './modules/init-area-selector.js';

import { initCustomSelect } from './modules/custom-select.js';
import { initFormValidation } from './modules/form-validation.js'; 
import { initFileDrop } from './modules/init-file-drop.js';
import { initPopupToggle } from './modules/popup.js';
import Inputmask from 'inputmask';

import { initWorkFormValidation } from './modules/work-form-validation.js';

// WebP support check
flsFunctions.isWebp();

document.addEventListener("DOMContentLoaded", () => {
  //preloader
  runPreloader();
  
  // Initialize burger menu
  initBurger();

  // Initialize Swiper slider
  initSwiperAbout();
  
  // Scroll
  initHeaderScroll();

  // Lang
  initLangToggle();

  initAreaSelector();

  initCustomSelect()
  initFormValidation();
  initFileDrop();
  initPopupToggle();

  initWorkFormValidation();
});