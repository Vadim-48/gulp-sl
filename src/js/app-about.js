import * as flsFunctions from "./modules/functions.js";
import { runPreloader } from './modules/preloader.js';
import { initBurger } from "./modules/init-burger.js";
import { initSwiperAbout } from "./modules/init-swiper-about.js";
// import { initLocationDropdown } from "./modules/init-location-dropdown.js";
// import { handleBlockLargeResize } from "./modules/block-large-handler.js";
import { initHeaderScroll } from "./modules/init-header-scroll.js";

// WebP support check
flsFunctions.isWebp();

document.addEventListener("DOMContentLoaded", () => {
  //preloader
  runPreloader();
  
  // Initialize burger menu
  initBurger();

  // Initialize Swiper slider
  initSwiperAbout();

  // Initialize location dropdown
//   initLocationDropdown();

  // Responsive class toggle based on screen width
//   handleBlockLargeResize(); 
  
  // Scroll
  initHeaderScroll();
});