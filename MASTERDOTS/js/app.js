/*
* JS Para la comprovación de datos del formulario de entrada
*
*/

//inicialización de var, objetos, DOM
const nickInput=document.getElementById("nick");
const tamanoInput=document.getElementById("tamano");
const formEntrada=document.getElementById("formEntrada");
const error=document.getElementById("error");

//Funciones de eventos
function comprobarForm(event){
    //comprobar cambios
    if(nickInput.value.match(/(?<!\S)^[0-9]/))
    {
        console.log("No hay nick");
        nickInput.focus();
        event.preventDefault();
        error.innerText="El campo no puede empezar por un número"
        return false;
    }else if(tamanoInput.value=="0"){
        console.log("No se ha seleccionado tamaño de panel");
        tamanoInput.focus();
        event.preventDefault();
        error.innerText="Se debe de seleccionar un tamaño de panel"
        return false;
    }
    return true;
}

//Inicio de carga de eventos
formEntrada.addEventListener('submit' ,comprobarForm);
