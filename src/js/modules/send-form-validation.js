export function initSendFormValidation() {
    const form = document.querySelector('.send__form');
    if (!form) return;

    const input = form.querySelector('.send__form-input');
    const error = form.querySelector('.send__mail-error');

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    form.addEventListener('submit', (e) => {
        const email = input.value.trim();

        //  не валідно — блокуємо відправку
        if (!email || !emailRegex.test(email)) {
            e.preventDefault();
            error.textContent = 'Введіть коректний email';
            input.classList.add('error');
            return;
        }

        //  валідно — дозволяємо submit
        error.textContent = '';
        input.classList.remove('error');

        // очищаємо форму після submit
        form.reset();
    });
}
