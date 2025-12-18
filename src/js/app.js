import * as flsFunctions from "./modules/functions.js";
import { runPreloader } from './modules/preloader.js';
import { initBurger } from "./modules/init-burger.js";
import { initSwiper } from "./modules/init-swiper.js";
import { initLocationDropdown } from "./modules/init-location-dropdown.js";
import { handleBlockLargeResize } from "./modules/block-large-handler.js";
import { initHeaderScroll } from "./modules/init-header-scroll.js";
import { initLangToggle } from './modules/init-lang-toggle.js';
import { initAreaSelector } from './modules/init-area-selector.js';

import { initCustomSelect } from './modules/custom-select.js';
import { initFormValidation } from './modules/form-validation.js'; 
import { initFileDrop } from './modules/init-file-drop.js';
import { initPopupToggle } from './modules/popup.js';
import Inputmask from 'inputmask';

// WebP support check
flsFunctions.isWebp();

document.addEventListener("DOMContentLoaded", () => {
  //preloader
  runPreloader();

  // Initialize burger menu
  initBurger();

  // Initialize Swiper slider
  initSwiper();

  // Initialize location dropdown
  initLocationDropdown();

  // Responsive class toggle based on screen width
  handleBlockLargeResize(); 
  
  // Scroll
  initHeaderScroll();

  // Lang
  initLangToggle();

  initAreaSelector();

  //Потрібен такий порядок
  initCustomSelect()
  initFormValidation();
  initFileDrop();
  initPopupToggle();


  // initPhoneMask();   // маска для телефону (якщо поле вже є)
});

