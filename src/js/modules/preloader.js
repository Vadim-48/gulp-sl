// // preloader.js
// export function runPreloader() {
//     const preloader = document.querySelector('.preloader');
//     const progressEl = document.querySelector('.preloader__progress');
//     const mainContent = document.querySelector('.body-content');
  
//     let progress = 0;
  
//     //  Симуляція поступового відсотка (поки сторінка вантажиться)
//     const fakeProgressInterval = setInterval(() => {
//       if (progress < 95) {
//         progress += Math.floor(Math.random() * 3) + 1; // +1..3%
//         if (progress > 95) progress = 95;
//         progressEl.textContent = progress;
//       }
//     }, 100);
  
//     //  Реальне завершення завантаження всієї сторінки
//     window.addEventListener('load', () => {
//       clearInterval(fakeProgressInterval);
//       progress = 100;
//       progressEl.textContent = progress;
  
//       // Плавне зникнення прелоадера
//       preloader.classList.add('preloader--hidden');
  
//       // Показати контент
//       setTimeout(() => {
//         preloader.style.display = 'none';
//         mainContent.classList.remove('body-content_hidden');
//       }, 500);
//     });
//   }  

// preloader.js
export function runPreloader() {
  const preloader = document.querySelector('.preloader');
  const progressEl = document.querySelector('.preloader__progress');
  const mainContent = document.querySelector('.body-content');

  let currentPercent = 0;

  const interval = setInterval(() => {
    currentPercent += 10;
    if (currentPercent > 100) currentPercent = 100;

    progressEl.textContent = currentPercent;

    if (currentPercent >= 100) {
      clearInterval(interval);

      // Плавне зникнення прелоадера
      preloader.classList.add('preloader_hidden');

      setTimeout(() => {
        preloader.style.display = 'none';
        mainContent.classList.remove('body-content_hidden');
      }, 300);
    }
  }, 50); // Зміни тривалість тут, щоб керувати швидкістю (300мс на крок)
}
