//A partir del código con el formulario sobre los gustos de los 
// gamers vamos a realiza las siguientes comprobaciones:

//Nombre, email, videojuego no vacío

//Edad >0  <200

//Plataforma seleccionada


// Inicialización de variables, objetos y elementos del DOM
const nameInput = document.getElementById("name"); // Campo de entrada para el nombre
const emailInput = document.getElementById("email"); // Campo de entrada para el email
const edadInput = document.getElementById("edad"); // Campo de entrada para la edad
const plataformaInput = document.getElementById("plataforma"); // Campo de entrada para la plataforma
const videojuegoInput = document.getElementById("videojuego"); // Campo de entrada para el videojuego
const valoresEdad = ["1", "2", "3", "4", "5", "6"]; // Posibles valores permitidos para la edad
const valoresPlataforma = ["1", "2", "3", "4", "5"]; // Posibles valores permitidos para la plataforma
const error = document.getElementById("error"); // Elemento donde se mostrarán los errores

// Función para mostrar errores y enfocar el campo incorrecto
function mostrarError(mensaje, campo) {
    console.log(mensaje); // Muestra el mensaje de error en la consola
    campo.focus(); // Coloca el cursor en el campo que tiene el error
}

// Función para comprobar el formulario antes de enviarlo
function comprobarForm(event) {
    // Verifica si el nombre comienza con un número
    if (nameInput.value.match(/(?<!\S)^[0-9]/)) {
        mostrarError("No se ha definido un nombre", nameInput);
        event.preventDefault(); // Evita el envío del formulario
        error.innerText = "El campo de nombre no puede empezar por un número";
        return false;
    // Verifica si el email tiene un formato válido
    } else if (!emailInput.value.match(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)) {
        mostrarError("Debe ingresar un email válido", emailInput);
        event.preventDefault(); // Evita el envío del formulario
        error.innerText = "El email no es válido";
        return false;
    // Verifica si se ha seleccionado una edad válida
    } else if (!valoresEdad.includes(edadInput.value)) {
        mostrarError("No se ha seleccionado un rango de edad", edadInput);
        event.preventDefault(); // Evita el envío del formulario
        error.innerText = "Debe seleccionar un rango de edad";
        return false;
    // Verifica si se ha seleccionado una plataforma válida
    } else if (!valoresPlataforma.includes(plataformaInput.value)) {
        mostrarError("No se ha seleccionado ninguna plataforma", plataformaInput);
        event.preventDefault(); // Evita el envío del formulario
        error.innerText = "Debe elegir una plataforma";
        return false;
    // Verifica si el campo de videojuego no está vacío
    } else if (videojuegoInput.value.length == 0) {
        mostrarError("No se ha descrito ningún videojuego", videojuegoInput);
        event.preventDefault(); // Evita el envío del formulario
        error.innerText = "Seleccione el videojuego más jugado";
        return false;
    }
}

// Asigna el evento de validación al formulario al enviarlo
formEntrada.addEventListener("submit", comprobarForm);
