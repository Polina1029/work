const modalReg = document.querySelector('.modal_reg');
const modalLogin = document.querySelector('.modal_login');

const userIcon = document.querySelector('.user_icon');
const openLoginBtn = document.getElementById('open-login-btn'); 

const closeBtnReg = document.querySelector('.close_reg');
const closeBtnLogin = document.getElementById('close-login-modal');

if (userIcon) {
    userIcon.addEventListener('click', () => {
        modalReg.style.display = 'block';
    });
}

if (closeBtnReg) {
    closeBtnReg.addEventListener('click', () => {
        modalReg.style.display = 'none';
    });
}

window.addEventListener('click', (event) => {
    if (modalReg && event.target === modalReg) {
        modalReg.style.display = 'none';
    }
});

if (openLoginBtn) {
    openLoginBtn.addEventListener('click', (event) => {
        event.preventDefault(); 

        if (modalReg && modalReg.style.display === 'block') {
            modalReg.style.display = 'none';
        }

        modalLogin.style.display = 'block';
    });
}

// Закрытие модального окна входа
if (closeBtnLogin) {
    closeBtnLogin.addEventListener('click', () => {
        modalLogin.style.display = 'none';
    });
}

// Закрытие модального окна входа при клике вне его области
window.addEventListener('click', (event) => {
    if (modalLogin && event.target === modalLogin) {
        modalLogin.style.display = 'none';
    }
});

// Переход из модального окна входа в модальное окно регистрации
if (modalLogin) {
    const registerLink = modalLogin.querySelector('p > a');

    if (registerLink) {
        registerLink.addEventListener('click', (event) => {
            event.preventDefault();

            if (modalLogin.style.display === 'block') {
                modalLogin.style.display = 'none';
            }
            modalReg.style.display = 'block';
        });
    }
}

// Переход из модального окна регистрации в модальное окно входа
if (modalReg) {
    const loginLink = modalReg.querySelector('#open-login-modal');

    if (loginLink) {
        loginLink.addEventListener('click', (event) => {
            event.preventDefault(); // Предотвращаем стандартное поведение ссылки

            if (modalReg.style.display === 'block') {
                modalReg.style.display = 'none'; // Закрываем окно регистрации
            }

            modalLogin.style.display = 'block'; // Открываем окно входа
        });
    }
}