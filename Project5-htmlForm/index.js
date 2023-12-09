// Wait for the DOM content to be fully loaded
document.addEventListener('DOMContentLoaded', function () {
    // Get the form and submission history elements
    const form = document.getElementById('validationForm');
    const submissionHistory = document.getElementById('submissionHistory');

    // Add a submit event listener to the form
    form.addEventListener('submit', function (event) {
        // Prevent the default form submission
        event.preventDefault();

        // Get values from form inputs
        const username = document.getElementById('username').value;
        const email = document.getElementById('email').value;
        const mobNo = document.getElementById('mobNo').value;
        const password = document.getElementById('password').value;
        const confirmPassword = document.getElementById('confirmPassword').value;

        // Get the selected file from the file input
        const fileInput = document.getElementById('file');
        const selectedFile = fileInput.files[0];

        // Validate all input fields
        const isValidUsername = validateInput(username);
        const isValidEmail = validateEmail(email);
        const isValidMobNo = validateMobNo(mobNo);
        const isValidPassword = validateInput(password);
        const isValidConfirmPassword = password === confirmPassword && password !== '';
        const isValidFile = selectedFile && selectedFile.type === 'application/pdf';

        // Apply validation styles to input elements
        applyValidationStyle(document.getElementById('username'), isValidUsername);
        applyValidationStyle(document.getElementById('email'), isValidEmail);
        applyValidationStyle(document.getElementById('mobNo'), isValidMobNo);
        applyValidationStyle(document.getElementById('password'), isValidPassword);
        applyValidationStyle(document.getElementById('confirmPassword'), isValidConfirmPassword);
        applyValidationStyle(fileInput, isValidFile);

        // If all fields are valid, add the submission to the history
        if (isValidUsername && isValidEmail && isValidMobNo && isValidPassword && isValidConfirmPassword && isValidFile) {
            const listItem = document.createElement('li');
            listItem.textContent = `Username: ${username}, Email: ${email}, Mob No.: ${mobNo}, PDF File: ${selectedFile.name}`;
            submissionHistory.appendChild(listItem);

            // Reset the form and apply validation style to the file input
            form.reset();
            applyValidationStyle(fileInput, true);
        }
    });

    // Function to validate non-empty input
    function validateInput(value) {
        return value.trim() !== '';
    }

    // Function to validate email format
    function validateEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    // Function to validate 10-digit mobile number
    function validateMobNo(mobNo) {
        const mobNoRegex = /^\d{10}$/;
        return mobNoRegex.test(mobNo);
    }

    // Function to apply validation styles to elements
    function applyValidationStyle(element, isValid) {
        if (isValid) {
            element.style.borderColor = 'green';
        } else {
            element.style.borderColor = 'red';
        }
    }
});
