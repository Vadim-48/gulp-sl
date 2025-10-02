import * as flsFunctions from "./modules/functions.js";
import { initBurger } from "./modules/initBurger.js";
import { initSwiper } from "./modules/initSwiper.js";
import { initLocationDropdown } from "./modules/initLocationDropdown.js";
// import { handleBlockLargeResize } from "./modules/blockLargeHandler.js";
import { initHeaderScroll } from "./modules/initHeaderScroll.js";

// WebP support check
flsFunctions.isWebp();

document.addEventListener("DOMContentLoaded", () => {
  // Initialize burger menu
  initBurger();

  // Initialize Swiper slider
  initSwiper();

  // Initialize location dropdown
  initLocationDropdown();

  // Responsive class toggle based on screen width
  // handleBlockLargeResize(); 
  
  // Scroll
  initHeaderScroll();
});

