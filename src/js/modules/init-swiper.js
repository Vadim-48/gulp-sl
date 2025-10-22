export function initSwiper() {
    // Check if Swiper is loaded and .swiper element exists
    if (typeof Swiper === "undefined" || !document.querySelector('.swiper')) return;
  
    new Swiper('.swiper', {
      navigation: {
        nextEl: '.progressbar__btn-next',
        prevEl: '.progressbar__btn-prev'
      },
      pagination: {
        el: '.swiper-pagination',
        type: 'progressbar',
      },
      on: {
        slideChange: function () {
          updateSlideNumbers(this);
        },
        init: function () {
          updateSlideNumbers(this);
        },
      },
      slidesPerView: 1.17,
      loop: true,
      // grabCursor: true,
    });
  
    // Update slide number display
    function updateSlideNumbers(swiper) {
      const current = swiper.realIndex;
      const display = document.querySelector('.progressbar__currentNumbers');
      if (display) {
        display.textContent = current + 1 < 10 ? `0${current + 1}` : current + 1;
      }
    }
  }