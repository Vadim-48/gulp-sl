export function initPopupToggle() {
    const popupLinks = document.querySelectorAll('.popup-request');
    const body = document.querySelector('body');
    const lockPadding = document.querySelectorAll(".lock-padding");

    let unlock = true;
    const timeout = 800;

    if (popupLinks.length > 0) {
        popupLinks.forEach(popupLink => {
            popupLink.addEventListener('click', function (e)  {
                const popupName = popupLink.dataset.popupTarget?.replace('#', '');
                const curentPopup = document.getElementById(popupName);
                popupOpen(curentPopup);
                e.preventDefault();
            });
        });
    }

    const popupCloseIcon = document.querySelectorAll('.close-popup');
    if (popupCloseIcon.length > 0) {
        popupCloseIcon.forEach(el => {
            el.addEventListener('click', function (e) {
                popupClose(el.closest('.popup'));
                e.preventDefault();
            });
        });
    }

    function popupOpen(curentPopup) {
        if (curentPopup && unlock) {
            const popupActive = document.querySelector('.popup.open');
            if (popupActive) {
                popupClose(popupActive, false);
            } else {
                bodyLock();
            }

            curentPopup.classList.add('open');

            // Маска для телефону
            const phoneInput = curentPopup.querySelector('#userPhone');
            if (phoneInput && !phoneInput.inputmask) {
                const im = new Inputmask("+38 (999) 999-99-99", {
                    placeholder: "",
                    showMaskOnHover: false,
                    showMaskOnFocus: false,
                    jitMasking: true
                });
                im.mask(phoneInput);
            }
        }
        const phoneInput = curentPopup.querySelector('#userPhone');
        console.log('Телефонний інпут:', phoneInput);
        console.log('Inputmask присутній:', phoneInput.inputmask);
    }

    // function popupClose(popupActive, doUnlock = true) {
    //     if (unlock) {
    //         popupActive.classList.remove('open');
    //         if (doUnlock) {
    //             bodyUnlock();
    //         }
    //     }
    // }
    function popupClose(popupActive, doUnlock = true) {
        if (unlock) {
            popupActive.classList.remove('open');
    
            // Перевіряємо, чи другий попап ще відкритий
            const secondPopup = document.getElementById('popup_2');
            if (doUnlock && (!secondPopup || !secondPopup.classList.contains('open'))) {
                bodyUnlock();
            }
        }
    }

    function bodyLock() {
        const lockPaddingValue = window.innerWidth - document.querySelector('.body-content').offsetWidth + 'px';
        lockPadding.forEach(el => el.style.paddingRight = lockPaddingValue);
        body.style.paddingRight = lockPaddingValue;
        body.classList.add('lock-popup');
        unlock = false;
        setTimeout(() => unlock = true, timeout);
    }

    function bodyUnlock() {
        setTimeout(() => {
            lockPadding.forEach(el => el.style.paddingRight = '0px');
            body.style.paddingRight = '0px';
            body.classList.remove('lock-popup');
        }, timeout);
        unlock = false;
        setTimeout(() => unlock = true, timeout);
    }

    document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape') {
            const popupActive = document.querySelector('.popup.open');
            if (popupActive) popupClose(popupActive);
        }
    });

    // Полифіли
    if (!Element.prototype.closest) {
        Element.prototype.closest = function (css) {
            var node = this;
            while (node) {
                if (node.matches(css)) return node;
                else node = node.parentElement;
            }
            return null;
        };
    }

    if (!Element.prototype.matches) {
        Element.prototype.matches = Element.prototype.matchesSelector ||
            Element.prototype.webkitMatchesSelector ||
            Element.prototype.mozMatchesSelector ||
            Element.prototype.msMatchesSelector;
    }

    const form = document.getElementById('formRequest');

    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault(); // Зупиняємо стандартну відправку
            const firstPopup = document.getElementById('popup');
            const secondPopup = document.getElementById('popup_2');

            // Перевірка заповнення обов'язкових полів
            // if (form.checkValidity()) {
            //     popupClose(firstPopup);
            //     popupOpen(secondPopup);
            // } else {
            //     form.reportValidity();
            // }
            // Використовуємо нашу кастомну валідацію
            if (window.validateForm()) {
                popupClose(firstPopup);
                popupOpen(secondPopup);
            }
        });
    }

}
