document.getElementById('newsletter-form').addEventListener('submit', function(event) {
    event.stopPropagation();
    event.preventDefault();

    const nameInput = document.getElementById('name-input');
    const emailInput = document.getElementById('email-input');

    // check if I have at least one character before & after @ and after the dot
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const isValidEmail = emailRegex.test(emailInput.value);

    if (!isValidEmail) {
        alert('Please enter a valid email address!');
        return;
    }

    nameInput.value = '';
    emailInput.value = '';
});