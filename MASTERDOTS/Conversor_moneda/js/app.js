
/*variables de valor moneda en euros */
const tasaDolar= 0.92;
const tasaLibra= 1.19;
const tasaYen= 0.0062;




//Busca el botón convertir y agrega un evento al botón para cuando el usuario haga click
document.getElementById("convertir").addEventListener("click", function() {
    
    //pasar de string a number 
    //usar parse int no incluye decimales por eso se usa parseFloat

    //capturar datos introducidos del user 
    let cantidad = parseFloat(document.getElementById("euros").value);

    //validar que el usuario inserta un número
    //si cantidad ! ES un número ejecuta el código dentro de if 
    //(NaN Not a Number, sin ! la negación se estaría comprobando si no es un número)
    if(!isNaN(cantidad)) {

        /*variables de los resultados */
        let resultadoDolar = cantidad * tasaDolar;
        let resultadoLibra = cantidad * tasaLibra;
        let resultadoYen = cantidad * tasaYen;

        // Mostrar los resultados en los inputs correspondientes
        document.getElementById("dolar").value = resultadoDolar.toFixed(2);
        document.getElementById("libra").value = resultadoLibra.toFixed(2);
        document.getElementById("yenes").value = resultadoYen.toFixed(2);

    } else {
        alert("Por favor , introduce una cantidad valida en euros.")
    }


});






