import * as flsFunctions from "./modules/functions.js";
import { runPreloader } from './modules/preloader.js';
import { initBurger } from "./modules/init-burger.js";
import { initLocationDropdown } from "./modules/init-location-dropdown.js";
import { initHeaderScroll } from "./modules/init-header-scroll.js";
import { initLangToggle } from './modules/init-lang-toggle.js';
import { initApartamentsToggle } from './modules/init-apartaments-toggle.js';
import { initAreaSelector } from './modules/init-area-selector.js';
import { activeMenuItem } from './modules/active-menu-item.js';

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

  // Initialize location dropdown
  initLocationDropdown();

  // Scroll
  initHeaderScroll();

  // Lang
  initLangToggle();

  // Apartaments
  initApartamentsToggle();

  initAreaSelector();

  activeMenuItem();

  initCustomSelect()
  initFormValidation();
  initFileDrop();
  initPopupToggle();
});
