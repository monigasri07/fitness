document.getElementById('login-form').addEventListener('submit', (e) => {
    e.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Simplified authentication for demonstration
    if (email && password) {
        localStorage.setItem('loggedIn', true);
        localStorage.setItem('username', email.split('@')[0]);
        window.location.href = 'health.html';
    } else {
        alert('Please enter valid credentials.');
    }
});