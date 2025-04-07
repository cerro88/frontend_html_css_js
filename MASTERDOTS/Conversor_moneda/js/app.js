//Valores en € (06/04/2025)
const tasaDolar= 1.08985;
const tasaLibra= 0.848138;
const tasaYen= 158.571;



//Inicialización de variables y obtención de elementos del DOM
//Captura el campo dnde el user escribe la cantidad de euros a convertir
const eurosInput = document.getElementById("euros");

//Captura el elemento donde se mostrarán los mensajes de error
const error = document.getElementById("error");




//Busca el botón convertir y agrega un evento al botón para cuando el usuario haga clic que ejecuta la siguiente función
document.getElementById("convertir").addEventListener("click", function() {

    
    
    //pasar de string a number 
    //usar parseInt no incluye decimales por eso se usa parseFloat 
    let cantidad = parseFloat(eurosInput.value);



    //validar que el campo no esta vacio
    if (eurosInput.value.trim() === "") {
        //console.log ineccesarios para el código (solo para comprovaciones en desarrollo)
        console.log("No se ha especificado cantidad");
        eurosInput.focus();
        error.innerText = "Debe expecificar una cantidad en euros";

    }

    //validar que no hay símbolos 
    //expresión regular regExp
    else if (/[^0-9.,]/.test(eurosInput.value)) {
        eurosInput.focus();
        error.innerText = "Solo se permiten números, puntos o comas";
    }
    
    //validar que el usuario inserta un número
    //is not a number
    else if (isNaN(cantidad)){
        eurosInput.focus();
        error.innerText = "Debe ingresar un número válido";
        
    }
    
    //validar que no es menor a 0
    else if (cantidad < 0 ){
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