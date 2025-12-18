export function initApartamentsToggle() {
  const apartamentsToggle = document.querySelector('.hero__dropdown-btn');
  const apartamentsList = document.querySelector('.hero__dropdown-list');
  const arrow = apartamentsToggle.querySelector('img');

  if (!apartamentsToggle || !apartamentsList) return;

  // Відкриття/закриття дропдауну
  apartamentsToggle.addEventListener('click', function (event) {
      event.stopPropagation();
      const isActive = apartamentsList.classList.toggle('active');
      arrow.classList.toggle('active', isActive);
      apartamentsToggle.setAttribute('aria-expanded', isActive);
  });

  // Закриття при кліку поза дропдауном
  document.addEventListener('click', function () {
      apartamentsList.classList.remove('active');
      arrow.classList.remove('active');
      apartamentsToggle.setAttribute('aria-expanded', false);
  });

  // Не закривати при кліку всередині списку
  apartamentsList.addEventListener('click', function (event) {
      event.stopPropagation();
  });

  // Swap тексту між кнопкою та списком
  apartamentsList.querySelectorAll('span').forEach(item => {
      item.addEventListener('click', () => {
          const btnText = apartamentsToggle.querySelector('span').textContent;
          // Міняємо текст кнопки на обране
          apartamentsToggle.querySelector('span').textContent = item.textContent;
          // Поточний текст кнопки замінюємо у списку на старий текст
          item.textContent = btnText;

          // Закриваємо дропдаун
          apartamentsList.classList.remove('active');
          arrow.classList.remove('active');
          apartamentsToggle.setAttribute('aria-expanded', false);
      });
  });

  // Закриття при resize > 650px
  window.addEventListener('resize', function () {
      if (window.innerWidth > 650) {
          apartamentsList.classList.remove('active');
          arrow.classList.remove('active');
          apartamentsToggle.setAttribute('aria-expanded', false);
      }
  });
}
