// Registro
const registerForm = document.getElementById('register-form');
if (registerForm) {
    registerForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const newUser = {
            name: document.getElementById('first-name').value,
            lastname: document.getElementById('last-name').value,
            email: document.getElementById('email').value,
            password: document.getElementById('password').value,
            gender: document.getElementById('gender').value,
        };

        // Recuperar usuarios existentes o inicializar un arreglo vacío
        const users = JSON.parse(localStorage.getItem('users')) || [];

        // Verificar si el correo ya está registrado
        if (users.some(user => user.email === newUser.email)) {
            alert('El correo ya está registrado. Usa otro o inicia sesión.');
            return;
        }

        // Agregar nuevo usuario al arreglo
        users.push(newUser);
        localStorage.setItem('users', JSON.stringify(users));

        alert('Registro exitoso. Ahora puedes iniciar sesión.');
        window.location.href = 'login.html';
    });
}

// Inicio de sesión
const loginForm = document.getElementById('login-form');
if (loginForm) {
    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const email = document.getElementById('login-email').value;
        const password = document.getElementById('login-password').value;

        // Recuperar usuarios existentes
        const users = JSON.parse(localStorage.getItem('users')) || [];

        // Buscar usuario con correo y contraseña correctos
        const user = users.find(user => user.email === email && user.password === password);

        if (user) {
            localStorage.setItem('loggedInUser', user.name);
            alert(`¡Bienvenido, ${user.name}!`);
            window.location.href = 'index.html';
        } else {
            alert('Correo o contraseña incorrectos.');
        }
    });
}

// Mostrar usuario en el menú
const userInfo = document.getElementById('user-info');
if (userInfo) {
    const loggedInUser = localStorage.getItem('loggedInUser');
    if (loggedInUser) {
        userInfo.innerHTML = `
            <span>Hola, ${loggedInUser}</span>
            <button id="logout" class="btn">Cerrar Sesión</button>
        `;
        document.getElementById('logout').addEventListener('click', () => {
            localStorage.removeItem('loggedInUser');
            alert('Has cerrado sesión.');
            window.location.href = 'index.html';
        });
    } else {
        userInfo.innerHTML = `<a href="login.html" class="btn">Iniciar Sesión</a>`;
    }
}

// Header Aca
var CSbody = document.querySelector("body");
const CSnavbarMenu = document.querySelector("#cs-navigation");
const CShamburgerMenu = document.querySelector("#cs-navigation .cs-toggle");

CShamburgerMenu.addEventListener('click', function() {
    CShamburgerMenu.classList.toggle("cs-active");
    CSnavbarMenu.classList.toggle("cs-active");
    CSbody.classList.toggle("cs-open");
    ariaExpanded();
});

function ariaExpanded() {
    const csUL = document.querySelector('#cs-expanded');
    const csExpanded = csUL.getAttribute('aria-expanded');

    if (csExpanded === 'false') {
        csUL.setAttribute('aria-expanded', 'true');
    } else {
        csUL.setAttribute('aria-expanded', 'false');
    }
}


document.addEventListener('scroll', (e) => { 
    const scroll = document.documentElement.scrollTop;
    if(scroll >= 100){
document.querySelector('body').classList.add('scroll')
    } else {
    document.querySelector('body').classList.remove('scroll')
    }
});


const dropDowns = Array.from(document.querySelectorAll('#cs-navigation .cs-dropdown'));
    for (const item of dropDowns) {
        const onClick = () => {
        item.classList.toggle('cs-active')
    }
    item.addEventListener('click', onClick)
    }
       

    