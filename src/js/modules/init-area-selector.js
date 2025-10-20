export function initAreaSelector() {
    const points = document.querySelectorAll('.popup__line-point');
    const form = document.getElementById('formRequest');

// Створюємо приховане поле, якщо ще не існує
    let areaInput = form.querySelector('input[name="area"]');
    if (!areaInput) {
        areaInput = document.createElement('input');
        areaInput.type = 'hidden';
        areaInput.name = 'area';
        form.appendChild(areaInput);
    }

    points.forEach(point => {
        point.addEventListener('click', () => {
            // Знімаємо клас active з усіх точок
            points.forEach(p => p.classList.remove('active'));

            // Додаємо active до вибраної
            point.classList.add('active');

            // Отримуємо значення площі з data-value
            const value = point.querySelector('.popup__point-text').dataset.value;

            // Записуємо його в hidden input
            areaInput.value = value;

            console.log('Обрано площу:', value);
        });
    });

// Встановлюємо значення при завантаженні, якщо вже є активна точка
    const activePoint = document.querySelector('.popup__line-point.active');
    if (activePoint) {
        const initialValue = activePoint.querySelector('.popup__point-text').dataset.value;
        areaInput.value = initialValue;
    }
}
