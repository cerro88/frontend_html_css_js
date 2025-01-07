/*
* JS Para la comprovación de datos del formulario de entrada
*
*/

//inicialización de var, objetos, DOM
const botonjugar=document.getElementById("jugar");

//Funciones de eventos
function comprobarForm(){
    console.log("comprobamos el formulario");
}

function ejecutarAccion(){
    console.log("Ejecutar accion");
    botonjugar.removeEventListener('click' ,ejecutarAccion);
}

botonjugar.addEventListener('click' ,comprobarForm);
botonjugar.addEventListener('click' ,ejecutarAccion);