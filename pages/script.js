document.addEventListener('DOMContentLoaded', () => {
    const loginButton = document.getElementById('loginButton');
    const logoutButton = document.getElementById('logoutButton');
    if (localStorage.getItem('isLoggedIn') === 'true') {
        logoutButton.style.display = 'block';
        loginButton.style.display = 'none';
    } else {
        loginButton.style.display = 'block';
        logoutButton.style.display = 'none';
    }

    logoutButton.addEventListener('click', () => {
        localStorage.removeItem('isLoggedIn');
        localStorage.removeItem('userEmail');
        logoutButton.style.display = 'none';
        loginButton.style.display = 'block';

    });
    loginButton.addEventListener('click', () => {
        window.location.href = '/pages/login/login.html';
    });
});
