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
    /* Crear un objeto con la información del usuario */
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
//carrito
const carrito = document.getElementById('carrito');
const elementos1 = document.getElementById('lista-1');
const lista = document.getElementById('#lista-carrito tbody');
const vaciarCarritoBtn =document.getElementById('vaciar-carrito');

cargarEventListeners();

function cargarEventListeners() {
    elementos1.addEventListener('click', comprarElemento);
    carrito.addEventListener('click', eliminarElemento);
    vaciarCarritoBtn.addEventListener('click', vaciarCarrito);
}

function comprarElemento(e) {
    e.preventDefault();
    if(e.target.classList.contains('agregar-carrito')) {
        const elemento = e.target.parentElement.parentElement;
        leerDatosElemento(elemento);
    }
}

function leerDatosElemento(elemento) {
    const infoElemento = {
        imagen: elemento.querySelector('img').src,
        titulo: elemento.querySelector('h3').textContent,
        precio: elemento.querySelector('.precio').textContent,
        id: elemento.querySelector('a').getAttribute('data-id')
    }
    insertarCarrito(infoElemento);
}

function insertarCarrito(elemento) {
    const row = document.createElement('tr');
    row.innerHTML = `
        <td>
            <img src="${elemento.imagen}" width=100 heigth=150px >
        </td>
        <td>
            ${elemento.titulo}
        </td>
        <td>
            ${elemento.precio}
        </td>
        <td>
            <a href="#" class="borrar" data-id="${elemento.id}" >X</a>
        </td>
    `;
    lista.appendChild(row);
}

function eliminarElemento(e){
    e.preventDefault();
    let elemento,
        elementoId;

    if(e.target.classList.contains('borrar')){
        e.target.parentElement.parentElement.remove();
        elemento = e.target.parentElement.parentElement;
        elementoId = elemento.querySelector('a').getAttribute('data-id');

    }
}
function vaciarCarrito() {
    while(lista.firstChild) {
        lista.removeChild(lista,firstChild);
    }
    return false;
}