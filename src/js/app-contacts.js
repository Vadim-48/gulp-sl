import * as flsFunctions from "./modules/functions.js";
import { runPreloader } from './modules/preloader.js';
import { initBurger } from "./modules/init-burger.js";
import { initLocationDropdown } from "./modules/init-location-dropdown.js";
import { initHeaderScroll } from "./modules/init-header-scroll.js";
import { initLangToggle } from './modules/init-lang-toggle.js';
import { initPopupToggle } from './modules/popup.js';

// WebP support check
flsFunctions.isWebp();

document.addEventListener("DOMContentLoaded", () => {
  //preloader
  runPreloader();
  
  // Initialize burger menu
  initBurger();

  // Initialize location dropdown
  initLocationDropdown();

  // Scroll
  initHeaderScroll();

  // Lang
  initLangToggle();

  initPopupToggle();
});