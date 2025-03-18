// Valores en €
const tasaDolar = 0.92;
const tasaLibra = 1.19;
const tasaYen = 0.0062;

// Inicialización de variables y obtención de elementos del DOM
const eurosInput = document.getElementById("euros");

// Captura el elemento donde se mostrarán los mensajes de error
const error = document.getElementById("error");

// Evento para el botón convertir
document.getElementById("convertir").addEventListener("click", function() {
    
    let cantidad = eurosInput.value.trim(); // Eliminar espacios en blanco

    // Validar que el campo no está vacío
    if (cantidad === "") {
        console.log("No se ha especificado cantidad");
        eurosInput.focus();
        error.innerText = "Debe especificar una cantidad en euros";
        return;
    }

    // Evitar caracteres después del número
    if (!/^\d+(\.\d+)?$/.test(cantidad) || isNaN(cantidad)) {
        console.log("La cantidad ingresada contiene caracteres no permitidos después del número");
        eurosInput.focus();
        error.innerText = "Debe ingresar solo números sin caracteres extra.";
        return;
    }

    // Convertir a número flotante
    cantidad = parseFloat(cantidad);

    // Validar que el usuario ingresó un número válido
    if (isNaN(cantidad)) {
        console.log("La cantidad ingresada no es un número válido");
        eurosInput.focus();
        error.innerText = "Debe ingresar un número válido";
        return;
    }

    // Validar que no es menor a 0
    if (cantidad < 0) {
        console.log("No se pueden ingresar cantidades negativas");
        eurosInput.focus();
        error.innerText = "La cantidad debe ser mayor a 0";
        return;
    }

    // Si todo se cumple, hacer la conversión
    error.innerText = "";

    let resultadoDolar = cantidad * tasaDolar;
    let resultadoLibra = cantidad * tasaLibra;
    let resultadoYen = cantidad * tasaYen;

    // Mostrar los resultados en los inputs correspondientes con 2 decimales
    document.getElementById("dolar").value = resultadoDolar.toFixed(2);
    document.getElementById("libra").value = resultadoLibra.toFixed(2);
    document.getElementById("yenes").value = resultadoYen.toFixed(2);
});
