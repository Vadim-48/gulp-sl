export function initSwiperOneNews() {
    // Check if Swiper is loaded and .swiper element exists
    if (typeof Swiper === "undefined" || !document.querySelector('.swiper')) return;
  
    new Swiper('.swiper', {
      on: {
      },
      loop: true,
      grabCursor: true,
      breakpoints: {
        0: {
          slidesPerView: 1.1,
        },
        550: {
          slidesPerView: 1.67,
        },
        850: {
          slidesPerView: 2.6,
        },
        1100: {
          slidesPerView: 3.4,
        }
      }
    });
  }