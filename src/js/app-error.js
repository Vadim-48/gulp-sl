import * as flsFunctions from "./modules/functions.js";
// import { runPreloader } from './modules/preloader.js';
import { initBurger } from "./modules/init-burger.js";
import { initLocationDropdown } from "./modules/init-location-dropdown.js";
import { initLangToggle } from './modules/init-lang-toggle.js';
import { initAreaSelector } from './modules/init-area-selector.js';
import { initPopupToggle } from './modules/popup.js';

// WebP support check
flsFunctions.isWebp();

document.addEventListener("DOMContentLoaded", () => {
  // Initialize burger menu
  initBurger();

  // Initialize location dropdown
  initLocationDropdown();


  // Lang
  initLangToggle();

  initAreaSelector();

  initPopupToggle();
});