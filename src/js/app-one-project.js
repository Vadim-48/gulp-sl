import * as flsFunctions from "./modules/functions.js";
import { initBurger } from "./modules/initBurger.js";
import { initLocationDropdown } from "./modules/initLocationDropdown.js";
import { initHeaderScroll } from "./modules/initHeaderScroll.js";

// WebP support check
flsFunctions.isWebp();

document.addEventListener("DOMContentLoaded", () => {
  // Initialize burger menu
  initBurger();

  // Initialize location dropdown
  initLocationDropdown();

  // Scroll
  initHeaderScroll();
});
