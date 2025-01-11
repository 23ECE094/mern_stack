document.getElementById('registrationForm').addEventListener('submit', function (e) {
    e.preventDefault();
    
    const username = document.getElementById('username');
    const email = document.getElementById('email');
    const phone = document.getElementById('phone');
    const address = document.getElementById('address');
    const password = document.getElementById('password');
    const confirmPassword = document.getElementById('confirmPassword');

    let isValid = true;
    document.querySelectorAll('.error-message').forEach(msg => msg.style.display = 'none');
    document.querySelectorAll('input, textarea').forEach(input => input.classList.remove('error'));
    if (username.value.trim() === '') {
        showError(username, 'Username is required');
        isValid = false;
    }
    if (!email.value.match(/^\S+@\S+\.\S+$/)) {
        showError(email, 'Please enter a valid email');
        isValid = false;
    }
    if (!phone.value.match(/^\d{10}$/)) {
        showError(phone, 'Phone number must be 10 digits');
        isValid = false;
    }
    if (address.value.trim() === '') {
        showError(address, 'Address is required');
        isValid = false;
    }
    if (password.value.length < 6) {
        showError(password, 'Password must be at least 6 characters');
        isValid = false;
    }
    if (confirmPassword.value !== password.value) {
        showError(confirmPassword, 'Passwords do not match');
        isValid = false;
    }
    if (isValid) {
        document.body.style.background = 'linear-gradient(135deg, #c6ffdd, #fbd786, #f7797d)';
        alert('Form submitted successfully!');
    }
});

function showError(input, message) {
    const errorMessage = input.nextElementSibling;
    errorMessage.textContent = message;
    errorMessage.style.display = 'block';
    input.classList.add('error');
}
