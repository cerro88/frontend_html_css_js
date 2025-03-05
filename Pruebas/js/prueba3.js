//A partir del código con el formulario sobre los gustos de los 
// gamers vamos a realiza las siguientes comprobaciones:

//Nombre, email, videojuego no vacío

//Edad >0  <200

//Plataforma seleccionada

// Inicialización de var, objetos, DOM
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const edadInput = document.getElementById("edad");
const plataformaInput = document.getElementById("plataforma");
const videojuegoInput = document.getElementById("videojuego")
const valoresEdad = ["1", "2", "3", "4", "5", "6"];
const valoresPlataforma = ["1", "2", "3", "4", "5"];
const error=document.getElementById("error");

function mostrarError(mensaje, campo) {
    console.log(mensaje);
    campo.focus();
}

// Funciones de eventos
function comprobarForm(event) {
    if (nameInput.value.length == 0) {
        mostrarError("No se ha definido un nombre", nameInput);
        event.preventDefault();
        error.innerText="El campo de nombre no puede estar vacio"
        return false;
    } else if (emailInput.value.length == 0) {
        mostrarError("No se ha definido ningún email", emailInput);
        event.preventDefault();
        error.innerText="El campo de email no puede estar vacio"
        return false;
    } else if (!valoresEdad.includes(edadInput.value)) {
        mostrarError("No se ha seleccionado un rango de edad", edadInput);
        event.preventDefault();
        error.innerText="Debe seleccionar un rango de edad"
        return false;
    } else if (!valoresPlataforma.includes(plataformaInput.value)) {
        mostrarError("No se ha seleccionado ninguna plataforma", plataformaInput);
        event.preventDefault();
        error.innerText="Debe elejir una plataforma"
        return false;
    } else if (videojuegoInput.value.length == 0) {
        mostrarError("No se ha descrito ningún videojuego", videojuegoInput);
        event.preventDefault();
        error.innerText="Seleccione el videojuego más jugado"
        return false;
    }
}

// Inicio de carga de eventos
formEntrada.addEventListener("submit", comprobarForm);