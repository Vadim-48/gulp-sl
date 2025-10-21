import * as flsFunctions from "./modules/functions.js";
import { runPreloader } from './modules/preloader.js';
import { initBurger } from "./modules/init-burger.js";
import { initSwiperAbout } from "./modules/init-swiper-about.js";
import { initHeaderScroll } from "./modules/init-header-scroll.js";
import { initAreaSelector } from './modules/init-area-selector.js';
import { initPopupToggle } from './modules/popup.js';

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

  initAreaSelector();

  initPopupToggle();
});