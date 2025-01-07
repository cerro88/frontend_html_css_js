/*
* JS Para la comprovación de datos del formulario de entrada
*
*/

//inicialización de var, objetos, DOM
const nickInput=document.getElementById("nick");
const tamanoInput=document.getElementById("tamano");
const formEntrada=document.getElementById("formEntrada");

//Funciones de eventos
function comprobarForm(event){
    //comprobar cambios
    if(nickInput.value.length==0)
    {
        console.log("No hay nick");
        event.preventDefault();
    }
}

//Inicio de carga de eventos
formEntrada.addEventListener('submit' ,comprobarForm);
