export function initLangToggle() {
  const langToggle = document.querySelector('.header__lang');
  const langMenu = document.querySelector('.header__lang-menu');

  langToggle.addEventListener('click', function (event) {
    event.stopPropagation();
    langMenu.classList.toggle('active');
  });

  document.addEventListener('click', function () {
    langMenu.classList.remove('active');
  });
}