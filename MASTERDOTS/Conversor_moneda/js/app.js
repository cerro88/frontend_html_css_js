//Valores en €
const tasaDolar= 0.92;
const tasaLibra= 1.19;
const tasaYen= 0.0062;


//Inicialización de variables y obtención de elementos del DOM
const eurosInput = document.getElementById("euros");

//Captura el elemento donde se mostrarán los mensajes de error
const error = document.getElementById("error");

//Busca el botón convertir y agrega un evento al botón para cuando el usuario haga clic
document.getElementById("convertir").addEventListener("click", function() {
    
    //pasar de string a number 
    //usar parseInt no incluye decimales por eso se usa parseFloat 
    let cantidad = parseFloat(eurosInput.value);

    //validar que el campo no esta vacio
    if (eurosInput.value.trim() === "") {
        console.log("No se ha especificado cantidad");
        eurosInput.focus();
        error.innerText = "Debe expecificar una cantidad en euros";

    }
    
    //validar que el usuario inserta un número
    //is not a number
    else if (isNaN(cantidad)){
        console.log("La cantidad ingresada no es un número válido");
        eurosInput.focus();
        error.innerText = "Debe ingresar un número válido";
        
    }
    
    //validar que no es menor a 0
    else if (cantidad < 0 ){
        console.log("No se pueden ingresar cantidades negativas");
        eurosInput.focus();
        error.innerText = "La cantidad debe ser mayor a 0";

    }
    
    //si todo se cumple se hace conversión
    else {
        // Limpiar el mensaje de error
         error.innerText = "";  

         //conversiones 
         let resultadoDolar = cantidad * tasaDolar;
         let resultadoLibra = cantidad * tasaLibra;
         let resultadoYen = cantidad * tasaYen;  

         // Mostrar los resultados en los inputs correspondientes con 2 decimales
         document.getElementById("dolar").value = resultadoDolar.toFixed(2);
         document.getElementById("libra").value = resultadoLibra.toFixed(2);
         document.getElementById("yenes").value = resultadoYen.toFixed(2);
    }


});