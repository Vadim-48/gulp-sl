import * as flsFunctions from "./modules/functions.js";
import { runPreloader } from './modules/preloader.js';
import { initBurger } from "./modules/init-burger.js";
import { initSwiper } from "./modules/init-swiper.js";
import { initLocationDropdown } from "./modules/init-location-dropdown.js";
import { handleBlockLargeResize } from "./modules/block-large-handler.js";
import { initHeaderScroll } from "./modules/init-header-scroll.js";
import { initLangToggle } from './modules/init-lang-toggle.js';
import { initAreaSelector } from './modules/init-area-selector.js';

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
});

