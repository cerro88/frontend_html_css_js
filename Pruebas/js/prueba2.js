//PRUEBA 

//Queremos poner a prueba lo que has aprendido y para ello seguiremos con nuestro 
// formulario que recoge datos de los jugadores de videojuegos.

//En este caso vamos a preparar nuestro JS para interactuar con cada 
// uno de los componentes. 
// Como vamos a comprobar todos los campos necesitaremos
// crear variables que almacenen cada uno de los objetos de los formularios: nombre, 
// email, edad, videojuego y plataforma.

// Capturar el elemento con ID 'name'
const nameInput = document.getElementById('name');
// Imprimir el tipo de nodo 
console.log(nameInput.nodeType);
// Asignar el valor "Belén" al input
nameInput.value = "Belén";
// Imprimir el valor del input
console.log(nameInput.value);
// Imprimir todo el elemento input en la consola
console.log(nameInput);

//Capturar el elemento con ID 'email'
const emailInput = document.getElementById('email');
// Imprimir el tipo de nodo 
console.log(emailInput.nodeType);
// Asignar un valor al input
emailInput.value = "bcerro@prueba.net";
// Imprimir el valor del input
console.log(emailInput.value);
// Imprimir todo el elemento input en la consola
console.log(emailInput);

//Capturar el elemento con ID 'edad'
const edadInput = document.getElementById('edad');
// Imprimir el tipo de nodo 
console.log(edadInput.nodeType);
// Imprimir todo el elemento input en la consola
console.log(edadInput);
// Imprimir el texto de la opción 3
console.log(edadInput.options[2].text);
//Imprimir el texto del elemento select
console.log(edadInput.options[edadInput.selectedIndex].text)

//Capturar el elemento con ID 'plataforma'
const plataformaInput = document.getElementById('plataforma');
// Imprimir el tipo de nodo 
console.log(plataformaInput.nodeType);
// Imprimir todo el elemento input en la consola
console.log(plataformaInput);
// Imprimir el texto de la opción 4
console.log(plataformaInput.options[3].text);
//Imprimir el texto del elemento select
console.log(plataformaInput.options[plataformaInput.selectedIndex].text)


// Capturar el elemento con ID 'videojuego'
const videojuegoInput = document.getElementById('videojuego');
// Imprimir el tipo de nodo 
console.log(videojuegoInput.nodeType);
// Asignar un valor al input
videojuegoInput.value = "Counter";
// Imprimir el valor del input
console.log(videojuegoInput.value);
// Imprimir todo el elemento input en la consola
console.log(videojuegoInput);