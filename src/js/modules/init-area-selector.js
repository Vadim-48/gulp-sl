// export function initAreaSelector() {
//     const items = document.querySelectorAll('.popup__line-point');
//     const input = document.getElementById('areaValue');
//
//     if (!items.length || !input) return;
//
//     items.forEach(item => {
//         item.addEventListener('click', () => {
//             // знімаємо active з усіх
//             items.forEach(i => i.querySelector('.popup__point-item').classList.remove('active'));
//
//             // додаємо active до поточного
//             item.querySelector('.popup__point-item').classList.add('active');
//
//             // зберігаємо значення у hidden input
//             input.value = item.dataset.value;
//         });
//     });
// }

export function initAreaSelector() {
    const items = document.querySelectorAll('.popup__line-point');
    const input = document.getElementById('areaValue');

    if (!items.length || !input) return;

    items.forEach(item => {
        item.addEventListener('click', () => {
            // Зняти active з усіх
            items.forEach(i => i.querySelector('.popup__point-item').classList.remove('active'));

            // Додати active до поточного
            item.querySelector('.popup__point-item').classList.add('active');

            // Записати значення в hidden input
            input.value = item.dataset.value;
        });
    });
}