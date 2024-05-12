const showPasswordButton = document.getElementById('showPassword');
const passwordField = document.getElementById('password');
const loginForm = document.getElementById('loginForm');
const loginButton = document.getElementById('loginButton');

showPasswordButton.addEventListener('click', function() {
    if (passwordField.type === 'password') {
        passwordField.type = 'text';
        showPasswordButton.textContent = 'Ocultar contraseña';
    } else {
        passwordField.type = 'password';
        showPasswordButton.textContent = 'Mostrar contraseña';
    }
});

loginButton.addEventListener('click', function() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Verificar las credenciales del usuario aquí
    // En este ejemplo, verificamos que el nombre de usuario sea "nombre" y la contraseña "1405"
    if (username === 'Noelia' && password === '1005') {
        // Redirigir al usuario si las credenciales son correctas
        window.location.href = 'https://profound-piroshki-19b33e.netlify.app';
    } else {
        // Mostrar un mensaje de error si las credenciales son incorrectas
        alert('su nombre y su fecha de nacimiento primero mes y dia.');
    }
});
