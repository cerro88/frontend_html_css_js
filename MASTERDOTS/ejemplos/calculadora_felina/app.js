//CALCULO DE AÑOS FELINOS

//variable
var edadhumana=0;

console.log("GATO   HUMANO")
console.log("-------------")

//bucle
for(let edadgato = 1; edadgato < 22; edadgato++) { 
    // Inicia un bucle que va desde 1 hasta 21 (excluye 22)
    if(edadgato == 1) { 
        // Si la edad del gato es 1 año
        edadhumana = 15; 
        // La edad humana equivalente es 15 años
    } else if(edadgato == 2) { 
        // Si la edad del gato es 2 años
        edadhumana = 24; 
        // La edad humana equivalente es 24 años
    } else { 
        // Para edades mayores a 2 años
        edadhumana = edadhumana + 4; 
        // Suma 4 años humanos por cada año adicional del gato
    }
    console.log("   " + edadgato + "    " + edadhumana); 
    // Muestra en la consola la edad del gato y la edad humana
}



