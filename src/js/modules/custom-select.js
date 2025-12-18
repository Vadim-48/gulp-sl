export function initCustomSelect() {
    const selects = document.querySelectorAll(".form__select");

    selects.forEach(select => {
        const input = select.querySelector(".form__select-input");
        const hidden = select.querySelector(".form__select-hidden");
        const arrow = select.querySelector(".form__select-arrow");
        const optionsBox = select.querySelector(".form__select-options");
        const options = Array.from(optionsBox.querySelectorAll("span"));
        const error = select.querySelector(".form__text-error"); // 🟢

        let savedValue = "";
        let hasSelected = false;

        const isOpen = () => select.classList.contains("open");

        const open = () => {
            select.classList.add("open");
            filter();

            if (hidden) hidden.value = ""; //  очищаємо hidden
        };

        const close = () => {
            select.classList.remove("open");

            if (!hasSelected) {
                input.value = savedValue;
            }

            hasSelected = false;
        };

        const filter = () => {
            const value = input.value.toLowerCase().trim();
            options.forEach(opt => {
                opt.style.display = opt.textContent.toLowerCase().includes(value)
                    ? "block"
                    : "none";
            });
        };

        const toggle = () => {
            if (!isOpen()) {
                savedValue = input.value;
                input.value = "";
                open();
            } else {
                close();
            }
        };

        input.addEventListener("click", e => {
            e.stopPropagation();
            toggle();
        });

        arrow.addEventListener("click", e => {
            e.stopPropagation();
            toggle();
        });

        input.addEventListener("input", () => {
            filter();
            if (hidden) hidden.value = ""; //  ручний ввід = не валідно
        });

        options.forEach(option => {
            option.addEventListener("click", e => {
                e.stopPropagation();

                const value = option.textContent.trim();

                input.value = value;
                savedValue = value;
                hasSelected = true;

                if (hidden) hidden.value = value; //  ТІЛЬКИ тут
                if (error) error.textContent = ""; //  чистимо помилку

                close();
            });
        });

        document.addEventListener("click", e => {
            if (!select.contains(e.target) && isOpen()) {
                close();
            }
        });
    });
}
