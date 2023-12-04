document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('form');

    form.addEventListener('submit', function (event) {
        event.preventDefault(); // Prevent the form from submitting

        // Validate each input field
        const username = document.getElementById('username');
        const email = document.getElementById('email');
        const mobNo = document.getElementById('mobNo');
        const password = document.getElementById('password');
        const confirmPassword = document.getElementById('confirmPassword');

        if (validateInput(username.value)) {
            applyValidationStyle(username, true);
        } else {
            applyValidationStyle(username, false);
        }

        if (validateInput(email.value)) {
            applyValidationStyle(email, true);
        } else {
            applyValidationStyle(email, false);
        }

        if (validateInput(mobNo.value)) {
            applyValidationStyle(mobNo, true);
        } else {
            applyValidationStyle(mobNo, false);
        }

        if (validateInput(password.value)) {
            applyValidationStyle(password, true);
        } else {
            applyValidationStyle(password, false);
        }

        if (password.value === confirmPassword.value && password.value !== '') {
            applyValidationStyle(confirmPassword, true);
        } else {
            applyValidationStyle(confirmPassword, false);
        }
    });

    function validateInput(value) {
        return value.trim() !== ''; // Basic validation: Check if the input is not empty
    }

    function applyValidationStyle(element, isValid) {
        // Apply styles based on validation result
        if (isValid) {
            element.style.borderColor = 'green';
        } else {
            element.style.borderColor = 'red';
        }
    }
});
