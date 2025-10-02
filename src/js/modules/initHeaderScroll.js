export function initHeaderScroll() {
    window.addEventListener('scroll', () => {
      const header = document.getElementById('header');
      if (header) {
        header.classList.toggle('scrolled', window.scrollY > 0);
      }
    });
  }