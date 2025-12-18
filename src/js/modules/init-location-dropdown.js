export function initLocationDropdown() {
  const buttons = document.querySelectorAll(".location__btn");

  buttons.forEach(btn => {
      btn.addEventListener("click", e => {
          e.stopPropagation();

          const container = btn.closest(".main-footer__location");
          const content = container.querySelector(".location__content");
          const arrow = btn.querySelector(".location__arrow");

          // Відкриваємо/закриваємо список
          const isActive = content.classList.toggle("active");
          arrow.classList.toggle("active");

          // aria-expanded для доступності
          btn.setAttribute("aria-expanded", isActive);
      });
  });

  // Закриваємо дропдаун при кліку поза ним
  document.addEventListener("click", () => {
      document.querySelectorAll(".location__content.active").forEach(el => el.classList.remove("active"));
      document.querySelectorAll(".location__arrow.active").forEach(el => el.classList.remove("active"));
      document.querySelectorAll(".location__btn").forEach(btn => btn.setAttribute("aria-expanded", false));
  });

  // Не закривати при кліку всередині контенту
  document.querySelectorAll(".location__content").forEach(content => {
      content.addEventListener("click", e => e.stopPropagation());
  });

  // **Вибір міста**
  document.querySelectorAll(".location__content span").forEach(city => {
      city.addEventListener("click", () => {
          const container = city.closest(".main-footer__location");
          const btn = container.querySelector(".location__btn");
          const content = container.querySelector(".location__content");
          const arrow = btn.querySelector(".location__arrow");

          // Оновлюємо текст кнопки на обране місто
          btn.querySelector(".location__text").textContent = city.textContent;

          // Закриваємо список
          content.classList.remove("active");
          arrow.classList.remove("active");
          btn.setAttribute("aria-expanded", false);
      });
  });
}
