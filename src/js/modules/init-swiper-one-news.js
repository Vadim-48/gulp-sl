export function initSwiperOneNews() {
    // Check if Swiper is loaded and .swiper element exists
    if (typeof Swiper === "undefined" || !document.querySelector('.swiper')) return;
  
    new Swiper('.swiper', {
      on: {
      },
      // slidesPerView: 3,
      loop: true,
      spaceBetween: 40,
      breakpoints: {
        0: {
          slidesPerView: 1,
          spaceBetween: 0,
        },
        650: {
          slidesPerView: 1.4,
          spaceBetween: 40,
        },
        1100: {
          slidesPerView: 3,
        }
      }
    });
  }