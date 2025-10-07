import * as flsFunctions from "./modules/functions.js";
import { initBurger } from "./modules/init-burger.js";
import { initSwiperOneNews } from "./modules/init-swiper-one-news.js";
import { initLocationDropdown } from "./modules/init-location-dropdown.js";
// import { handleBlockLargeResize } from "./modules/block-large-handler.js";
import { initHeaderScroll } from "./modules/init-header-scroll.js";

// WebP support check
flsFunctions.isWebp();

document.addEventListener("DOMContentLoaded", () => {
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
});
