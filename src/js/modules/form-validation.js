export function initFormValidation() {
    const form = document.getElementById('formRequest');
    if (!form) return;

    let submitted = false;

    // inputs
    const fields = {
        name: form.querySelector('#userName'),
        surename: form.querySelector('#userSurename'),
        phone: form.querySelector('#userPhone'),
        city: form.querySelector('#userCity'),
        email: form.querySelector('#userMail'),
        typeHidden: form.querySelector('.form__select-hidden')
    };

    // errors
    const errors = {
        name: form.querySelector('#nameError'),
        surename: form.querySelector('#lastNameError'),
        phone: form.querySelector('#phoneError'),
        city: form.querySelector('#cityError'),
        email: form.querySelector('#mailError'),
        type: form.querySelector('#typeError')
    };

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    function clearErrors() {
        Object.values(errors).forEach(e => e.textContent = '');
    }

    function validate() {
        let isValid = true;
        clearErrors();

        // NAME
        if (!fields.name.value.trim()) {
            errors.name.textContent = 'Введіть ваше ім’я';
            isValid = false;
        }

        // SURENAME
        if (!fields.surename.value.trim()) {
            errors.surename.textContent = 'Введіть прізвище';
            isValid = false;
        }

        // PHONE (inputmask)
        if (!fields.phone.inputmask || !fields.phone.inputmask.isComplete()) {
            errors.phone.textContent = 'Введіть правильний телефон';
            isValid = false;
        }

        // CITY
        if (!fields.city.value.trim()) {
            errors.city.textContent = 'Оберіть місто';
            isValid = false;
        }

        // EMAIL
        if (!emailRegex.test(fields.email.value.trim())) {
            errors.email.textContent = 'Введіть коректну пошту, наприклад: test@mail.com';
            isValid = false;
        }

        // PROPERTY TYPE (hidden)
        if (!fields.typeHidden.value.trim()) {
            errors.type.textContent = 'Оберіть тип обʼєкта зі списку';
            isValid = false;
        }

        return isValid;
    }

    // submit
    form.addEventListener('submit', e => {
        e.preventDefault();
        submitted = true;

        if (validate()) {
            document.getElementById('popup')?.classList.remove('open');
            document.getElementById('popup_2')?.classList.add('open');
            resetForm();
        }
    });

    // live validation after submit
    Object.values(fields).forEach(field => {
        field.addEventListener('input', () => {
            if (submitted) validate();
        });
    });

    // separate validation for custom select
    fields.typeHidden.addEventListener('change', () => {
        if (submitted) validate();
    });

    function resetForm() {
        submitted = false;
        form.reset();
        clearErrors();
    }
}
