// Get input and label elements
const idInput = document.getElementById('user-id');
const idLabel = document.querySelector('.id-label');

const passwordInput = document.getElementById('password');
const passwordLabel = document.querySelector('.password-label');

// Change ID Label on Focus
idInput.addEventListener('focus', () => {
    idLabel.textContent = 'Enter your ID';
});
idInput.addEventListener('blur', () => {
    if (idInput.value === '') {
        idLabel.textContent = 'ID';
    }
});

// Change Password Label on Focus
passwordInput.addEventListener('focus', () => {
    passwordLabel.textContent = 'Enter your Password';
});
passwordInput.addEventListener('blur', () => {
    if (passwordInput.value === '') {
        passwordLabel.textContent = 'Password';
    }
});
