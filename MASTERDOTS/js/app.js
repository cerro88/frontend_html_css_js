/*
* JS Para la comprobación de datos del formulario de entrada
*
*/

// Inicialización de variables y obtención de elementos del DOM
const nickInput = document.getElementById("nick"); // Captura el campo de entrada para el nombre de usuario (nick)
const tamanoInput = document.getElementById("tamano"); // Captura el campo de entrada para el tamaño del panel
const formEntrada = document.getElementById("formEntrada"); // Captura el formulario con id "formEntrada"
const error = document.getElementById("error"); // Captura el elemento donde se mostrarán los mensajes de error

// Función que valida el formulario cuando se intenta enviar
function comprobarForm(event) {
    // Verifica si el valor del campo nick comienza con un número
    if (nickInput.value.match(/(?<!\S)^[0-9]/)) { 
        console.log("No hay nick"); // Muestra un mensaje en la consola si el nick es inválido
        nickInput.focus(); // Enfoca el campo del nick para que el usuario lo corrija
        event.preventDefault(); // Detiene el envío del formulario
        error.innerText = "El campo no puede empezar por un número"; // Muestra el mensaje de error en la página
        return false; // Retorna falso para indicar que la validación falló
    } 
    // Verifica si el campo de tamaño tiene el valor "0" (sin seleccionar)
    else if (tamanoInput.value == "0") {
        console.log("No se ha seleccionado tamaño de panel"); // Muestra un mensaje en la consola
        tamanoInput.focus(); // Enfoca el campo de selección de tamaño
        event.preventDefault(); // Detiene el envío del formulario
        error.innerText = "Se debe de seleccionar un tamaño de panel"; // Muestra un mensaje de error en la página
        return false; // Retorna falso para indicar que la validación falló
    }
    return true; // Si todas las validaciones pasan, el formulario se envía correctamente
}

// Asigna la función de validación al evento "submit" del formulario
formEntrada.addEventListener('submit', comprobarForm);
