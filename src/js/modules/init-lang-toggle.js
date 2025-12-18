// export function initLangToggle() {
//   const langToggle = document.querySelector('.header__lang');
//   const langMenu = document.querySelector('.header__lang-menu');

//   langToggle.addEventListener('click', function (event) {
//     event.stopPropagation();
//     langMenu.classList.toggle('active');
//   });

//   document.addEventListener('click', function () {
//     langMenu.classList.remove('active');
//   });
// }

export function initLangToggle() {
  const langToggle = document.querySelector('.header__lang');
  const langButton = langToggle.querySelector('button');
  const langMenu = langToggle.querySelector('.header__lang-menu');

  if (!langToggle || !langMenu) return; // перевірка на наявність елементів

  // Відкриття/закриття меню при кліку на кнопку
  langButton.addEventListener('click', function(event) {
    event.stopPropagation();
    langMenu.classList.toggle('active');
  });

  // Вибір мови
  langMenu.querySelectorAll('span').forEach(lang => {
    lang.addEventListener('click', (event) => {
      event.stopPropagation();
      langButton.textContent = lang.textContent; // змінюємо текст кнопки
      langMenu.classList.remove('active');       // закриваємо меню
    });
  });

  // Закриття меню при кліку поза блоком
  document.addEventListener('click', () => {
    langMenu.classList.remove('active');
  });
}
