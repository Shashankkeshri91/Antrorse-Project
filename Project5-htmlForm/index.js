document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('validationForm');
    const submissionHistory = document.getElementById('submissionHistory');

    form.addEventListener('submit', function (event) {
        event.preventDefault();

        const username = document.getElementById('username').value;
        const email = document.getElementById('email').value;
        const mobNo = document.getElementById('mobNo').value;
        const password = document.getElementById('password').value;
        const confirmPassword = document.getElementById('confirmPassword').value;

        const fileInput = document.getElementById('file');
        const selectedFile = fileInput.files[0];

        // Validate all input fields
        const isValidUsername = validateInput(username);
        const isValidEmail = validateEmail(email);
        const isValidMobNo = validateMobNo(mobNo);
        const isValidPassword = validateInput(password);
        const isValidConfirmPassword = password === confirmPassword && password !== '';
        const isValidFile = selectedFile && selectedFile.type === 'application/pdf';

        // Apply validation styles
        applyValidationStyle(document.getElementById('username'), isValidUsername);
        applyValidationStyle(document.getElementById('email'), isValidEmail);
        applyValidationStyle(document.getElementById('mobNo'), isValidMobNo);
        applyValidationStyle(document.getElementById('password'), isValidPassword);
        applyValidationStyle(document.getElementById('confirmPassword'), isValidConfirmPassword);
        applyValidationStyle(fileInput, isValidFile);

        if (isValidUsername && isValidEmail && isValidMobNo && isValidPassword && isValidConfirmPassword && isValidFile) {
            const listItem = document.createElement('li');
            listItem.textContent = `Username: ${username}, Email: ${email}, Mob No.: ${mobNo}, PDF File: ${selectedFile.name}`;
            submissionHistory.appendChild(listItem);

            form.reset();
            applyValidationStyle(fileInput, true);
        }
    });

    function validateInput(value) {
        return value.trim() !== '';
    }

    function validateEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    function validateMobNo(mobNo) {
        const mobNoRegex = /^\d{10}$/;
        return mobNoRegex.test(mobNo);
    }

    function applyValidationStyle(element, isValid) {
        if (isValid) {
            element.style.borderColor = 'green';
        } else {
            element.style.borderColor = 'red';
        }
    }
});
