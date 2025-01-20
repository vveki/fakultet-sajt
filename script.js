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
//hamburger meni
document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('navLinks');

    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('show');
    });
});
document.addEventListener('DOMContentLoaded', () => {
    const elements = document.querySelectorAll('[data-text-en][data-text-sr]'); 
    const toggleEn = document.getElementById('toggle-en');
    const toggleSr = document.getElementById('toggle-sr');

    const savedLanguage = localStorage.getItem('language') || 'en'; 

  
    function updateLanguage(language) {
        elements.forEach(element => {
            const text = element.getAttribute(`data-text-${language}`);
            if (text) {
                element.innerHTML = text;
            }
        });

        if (language === 'en') {
            toggleEn.classList.add('active');
            toggleSr.classList.remove('active');
        } else {
            toggleSr.classList.add('active');
            toggleEn.classList.remove('active');
        }
    }

    toggleEn.addEventListener('click', () => {
        localStorage.setItem('language', 'en');
        updateLanguage('en');
    });

    toggleSr.addEventListener('click', () => {
        localStorage.setItem('language', 'sr');
        updateLanguage('sr');
    });

    updateLanguage(savedLanguage);
});


//odabir jezika
document.addEventListener('DOMContentLoaded', () => {
    const languageSwitcher = document.getElementById('languageSwitcher');
    const elements = document.querySelectorAll('[data-text-en][data-text-sr]'); 

    const savedLanguage = localStorage.getItem('language') || 'en'; 

    function updateLanguage(language) {
        elements.forEach(element => {
            const text = element.getAttribute(`data-text-${language}`);
            if (text) {
                element.innerHTML = text;
            }
        });
    }

    languageSwitcher.addEventListener('change', (e) => {
        const selectedLanguage = e.target.value;
        localStorage.setItem('language', selectedLanguage); 
        updateLanguage(selectedLanguage);
    });

    updateLanguage(savedLanguage);
});


