// Integración de APIs relacionadas
// Función para mostrar un mensaje en la página
function showMessage(message) {
    const messageElement = document.getElementById("registration-status");
    messageElement.textContent = message;
    messageElement.style.display = "block";
}

// Función para registrar un nuevo usuario
function registerUser() {

    const username = document.getElementById("username").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    // Mostrar mensaje de confirmación
    showMessage(`¡Registro exitoso para ${username}!`);
}
// Función para iniciar sesión
function loginUser() {
    const username = document.getElementById("login-username").value;
    const password = document.getElementById("login-password").value;

}
