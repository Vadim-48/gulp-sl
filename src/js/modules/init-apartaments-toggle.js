export function initApartamentsToggle() {
    const apartamentsToggle = document.querySelector('.hero__dropdown-btn');
    const apartamentsList = document.querySelector('.hero__dropdown-list');
  
    if (!apartamentsToggle || !apartamentsList) return;
  
    apartamentsToggle.addEventListener('click', function (event) {
      event.stopPropagation();
      apartamentsList.classList.toggle('active');
    });
  
    document.addEventListener('click', function () {
      apartamentsList.classList.remove('active');
    });
  
    //  resize
    window.addEventListener('resize', function () {
      if (window.innerWidth > 650) {
        apartamentsList.classList.remove('active');
      }
    });
  }