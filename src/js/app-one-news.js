import * as flsFunctions from "./modules/functions.js";
import { runPreloader } from './modules/preloader.js';
import { initBurger } from "./modules/init-burger.js";
import { initSwiperOneNews } from "./modules/init-swiper-one-news.js";
import { initLocationDropdown } from "./modules/init-location-dropdown.js";
// import { handleBlockLargeResize } from "./modules/block-large-handler.js";
import { initHeaderScroll } from "./modules/init-header-scroll.js";
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
  initSwiperOneNews();

  // Initialize location dropdown
  initLocationDropdown();

  // Responsive class toggle based on screen width
//   handleBlockLargeResize(); 
  
  // Scroll
  initHeaderScroll();

  initAreaSelector();

  initCustomSelect()
  initFormValidation();
  initFileDrop();
  initPopupToggle();
});
