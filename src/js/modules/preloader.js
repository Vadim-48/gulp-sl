// preloader.js
export function runPreloader() {
  const preloader = document.querySelector('.preloader');
  const progressEl = document.querySelector('.preloader__progress');
  const preloaderText = document.querySelector('.preloader__text');
  const mainContent = document.querySelector('.body-content');

  let progress = 0;

  // Simulating gradual loading
  const fakeProgressInterval = setInterval(() => {
    if (progress < 95) {
      progress += Math.floor(Math.random() * 3) + 1; // +1..3%
      if (progress > 95) progress = 95;
      progressEl.textContent = progress;
    }
  }, 100);

  // When the page is fully loaded
  window.addEventListener('load', () => {
    clearInterval(fakeProgressInterval);
    progress = 100;
    progressEl.textContent = progress;

    // We show 100% first
    preloaderText.textContent = `HI ${progress}%`;

    // Delay 0.5 seconds before replacing all text with "HILIGHT"
    setTimeout(() => {
      preloaderText.textContent = 'HILIGHT';

      // Smoothly disappearing the preloader
      preloader.classList.add('preloader--hidden');

      setTimeout(() => {
        preloader.style.display = 'none';
        mainContent.classList.remove('body-content_hidden');
      }, 500);
    }, 500);
  });
}

