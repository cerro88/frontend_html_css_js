//A partir del código con el formulario sobre los gustos de los 
// gamers vamos a realiza las siguientes comprobaciones:

//Nombre, email, videojuego no vacío

//Edad >0  <200

//Plataforma seleccionada


//inicialización de var, objetos, DOM
const nameInput=document.getElementById("name");
const emailInput=document.getElementById("email");
const edadInput=document.getElementById("edad");
const plataformaInput=document.getElementById("plataforma");
const videojuegoInput=document.getElementById("videojuego");

//Funciones de eventos
function comprobarForm(event){
    //comprobar el Nombre
    if(nameInput.value.length==0)
    {
        console.log("No se ha definido un nombre");
        nameInput.focus();
        event.preventDefault();
        return false;
    }else if(emailInput.value.length==0){
        console.log("No se ha definido ningún email");
        emailInput.focus();
        event.preventDefault();
        return false;
    }else if (!["1", "2", "3", "4", "5", "6"].includes(edadInput.value)) {
        console.log("No se ha seleccionado un rango de edad");
        edadInput.focus();
        event.preventDefault();
        return false;

    }else if (!["1", "2", "3", "4", "5"].includes(plataformaInput.value)) {
        console.log("No se ha seleccionado ninguna plataforma");
        plataformaInput.focus();
        event.preventDefault();
        return false;
    }else if(videojuegoInput.value.length==0){
        console.log("No se ha descrito ningún videojuego");
        videojuegoInput.focus();
        event.preventDefault();
        return false;
    }
}


//Inicio de carga de eventos
formEntrada.addEventListener('submit' ,comprobarForm);