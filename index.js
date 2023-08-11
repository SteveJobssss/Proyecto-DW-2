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

    // Crear un objeto con la información del usuario
    const newUser = {
        username: username,
        email: email,
        password: password
    };

    // Obtener la lista de usuarios registrados almacenados en el almacenamiento local
    const registeredUsers = JSON.parse(localStorage.getItem("registeredUsers")) || [];

    // Agregar el nuevo usuario a la lista de usuarios registrados
    registeredUsers.push(newUser);

    // Guardar la lista actualizada de usuarios en el almacenamiento local
    localStorage.setItem("registeredUsers", JSON.stringify(registeredUsers));

    // Mostrar mensaje de confirmación
    showMessage(`¡Registro exitoso para ${username}!`);

    // Restablecer los valores de los campos de entrada
    document.getElementById("username").value = "";
    document.getElementById("email").value = "";
    document.getElementById("password").value = "";
}

// Función para iniciar sesión
function loginUser() {
    const inputUsername = document.getElementById("login-username").value;
    const inputPassword = document.getElementById("login-password").value;

    // Obtener la lista de usuarios registrados almacenados en el almacenamiento local
    const registeredUsers = JSON.parse(localStorage.getItem("registeredUsers")) || [];

    // Buscar el usuario en la lista de usuarios registrados
    const foundUser = registeredUsers.find(user => user.username === inputUsername && user.password === inputPassword);

    // Verificar si se encontró el usuario
    if (foundUser) {
        showMessage("¡Inicio de sesión exitoso!");
    } else {
        showMessage("Usuario o contraseña incorrectos.");
    }
}
