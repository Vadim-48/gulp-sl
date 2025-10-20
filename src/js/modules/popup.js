// export function initPopupToggle() {
//     const popupButtons = document.querySelectorAll(".popup-request");
//
//     if (!popupButtons.length) {
//         console.warn('Жодної кнопки ".popup-request" не знайдено на сторінці.');
//         return;
//     }
//
//     const lockBody = () => {
//         const scrollBarWidth = window.innerWidth - document.documentElement.clientWidth;
//         document.body.style.paddingRight = scrollBarWidth + "px";
//         document.body.classList.add("lock");
//         document.documentElement.classList.add("lock");
//     };
//
//     const unlockBody = () => {
//         document.body.style.paddingRight = "";
//         document.body.classList.remove("lock");
//         document.documentElement.classList.remove("lock");
//     };
//
//     popupButtons.forEach(button => {
//         button.addEventListener("click", (e) => {
//             e.preventDefault();
//
//             const targetSelector = button.getAttribute("data-popup-target") || "#popup";
//             const popup = document.querySelector(targetSelector);
//
//             if (!popup) {
//                 console.warn(`Попап "${targetSelector}" не знайдено.`);
//                 return;
//             }
//
//             popup.classList.add("open");
//             lockBody();
//
//             const closePopup = (event) => {
//                 if (
//                     event.target.classList.contains("popup") ||
//                     event.target.closest(".popup__close")
//                 ) {
//                     popup.classList.remove("open");
//                     unlockBody();
//                     popup.removeEventListener("click", closePopup);
//                 }
//             };
//
//             popup.addEventListener("click", closePopup);
//         });
//     });
//
//     document.addEventListener("click", (e) => {
//         if (e.target.classList.contains("popup__btn")) {
//             e.preventDefault();
//
//             const currentPopup = e.target.closest(".popup");
//             if (!currentPopup) return;
//
//             currentPopup.classList.remove("open");
//
//             const successPopup = document.querySelector("#popupSuccess");
//             if (successPopup) {
//                 successPopup.classList.add("open");
//             }
//
//             lockBody();
//
//             const closeSuccess = (event) => {
//                 if (
//                     event.target.classList.contains("popup") ||
//                     event.target.closest(".popup__close")
//                 ) {
//                     successPopup.classList.remove("open");
//                     unlockBody();
//                     successPopup.removeEventListener("click", closeSuccess);
//                 }
//             };
//
//             successPopup.addEventListener("click", closeSuccess);
//         }
//     });
// }


export function initPopupToggle() {
    const popupButtons = document.querySelectorAll(".popup-request");

    if (!popupButtons.length) {
        console.warn('Жодної кнопки ".popup-request" не знайдено на сторінці.');
        return;
    }

    const lockBody = () => {
        const scrollBarWidth = window.innerWidth - document.documentElement.clientWidth;
        document.body.style.paddingRight = scrollBarWidth + "px";
        document.body.classList.add("lock");
        document.documentElement.classList.add("lock");
    };

    const unlockBody = () => {
        document.body.style.paddingRight = "";
        document.body.classList.remove("lock");
        document.documentElement.classList.remove("lock");
    };

    popupButtons.forEach(button => {
        button.addEventListener("click", (e) => {
            e.preventDefault();

            const targetSelector = button.getAttribute("data-popup-target") || "#popup";
            const popup = document.querySelector(targetSelector);

            if (!popup) {
                console.warn(`Попап "${targetSelector}" не знайдено.`);
                return;
            }

            popup.classList.add("open");
            lockBody();

            const closePopup = (event) => {
                if (
                    event.target.classList.contains("popup") ||
                    event.target.closest(".popup__close")
                ) {
                    // Миттєво прибираємо скрол
                    popup.style.overflowY = "hidden";

                    // Закриваємо попап (починається плавне зникнення opacity)
                    popup.classList.remove("open");
                    unlockBody();

                    // Після завершення transition (800ms) прибираємо inline стиль overflowY
                    setTimeout(() => {
                        popup.style.overflowY = "";
                    }, 800);

                    popup.removeEventListener("click", closePopup);
                }
            };

            popup.addEventListener("click", closePopup);
        });
    });

    document.addEventListener("click", (e) => {
        if (e.target.classList.contains("popup__btn")) {
            e.preventDefault();

            const currentPopup = e.target.closest(".popup");
            if (!currentPopup) return;

            // Миттєво прибираємо скрол у поточному попапі
            currentPopup.style.overflowY = "hidden";

            // Закриваємо поточний попап
            currentPopup.classList.remove("open");
            unlockBody();

            const successPopup = document.querySelector("#popupSuccess");
            if (successPopup) {
                successPopup.classList.add("open");
                lockBody();

                const closeSuccess = (event) => {
                    if (
                        event.target.classList.contains("popup") ||
                        event.target.closest(".popup__close")
                    ) {
                        // Миттєво прибираємо скрол success попапу
                        successPopup.style.overflowY = "hidden";

                        successPopup.classList.remove("open");
                        unlockBody();

                        setTimeout(() => {
                            successPopup.style.overflowY = "";
                        }, 800);

                        successPopup.removeEventListener("click", closeSuccess);
                    }
                };

                successPopup.addEventListener("click", closeSuccess);
            }

            // Після 800ms прибираємо inline стиль overflowY у поточному попапі
            setTimeout(() => {
                currentPopup.style.overflowY = "";
            }, 800);
        }
    });
}



// const popupLinks = document.querySelectorAll('.popup-request');
// const body = document.querySelector('body');
// const lockPadding = document.querySelectorAll(".lock-padding");
//
// let unlock = true;
//
// const timeout = 800;
//
// if (popupLinks.length > 0) {
//     for (let index = 0; index < popupLinks.length; index++) {
//         const popupLink = popupLinks[index];
//         popupLink.addEventListener('click', function (e)  {
//             const popupName = popupLink.getAttribute('href').replace('#', '');
//             const curentPopup = document.getElementById(popupName);
//             popupOpen(curentPopup);
//             e.preventDefault();
//         });
//     }
// }
// const popupCloseIcon = document.querySelectorAll('.close-popup');
// if (popupCloseIcon.length > 0) {
//     for (let index = 0; index < popupCloseIcon.length; index++) {
//         const el = popupCloseIcon[index];
//         el.addEventListener('click', function (e) {
//             popupClose(el.closest('.popup'));
//             e.preventDefault();
//         });
//     }
// }
//
// function popupOpen(curentPopup) {
//     if (currentPopup && unlock) {
//         const popupActive = document.querySelector('popup.open');
//         if (poppupActive) {
//             popupClose(popupActive, false);
//         } else {
//             bodyLock();
//         }
//         currentPopup.classList.add('open');
//         curentPopup.addEventListener('click', function (e) {
//             if (!e.target.closest('.popup__content')) {
//                 popupClose(e.target.closest('.popup'));
//             }
//         });
//     }
// }


