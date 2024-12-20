// Definimos una función llamada 'piramide' que recibe un parámetro 'numpisos'.
// Este parámetro indica el número de pisos o niveles que tendrá la pirámide.
function piramide(numpisos) {

    // Bucle externo: Itera desde 0 hasta numpisos - 1.
    // Cada iteración representa un nivel o piso de la pirámide.
    for (let i = 0; i < numpisos; i++) {
        // Declaramos una variable 'piso' como una cadena vacía.
        // Esta variable contendrá los caracteres '*' que forman el piso actual.
        let piso = '';

        // Bucle interno: Añade '*' a la cadena 'piso'.
        // Este bucle se ejecuta 'i' veces, donde 'i' es el número del piso actual.
        for (let j = 0; j < i; j++) {
            // Concatenamos un asterisco '*' a la variable 'piso'.
            piso = piso + '*';
        }

        // Después de construir el piso actual, lo mostramos en la consola.
        console.log(piso);
    }
}

// Llamamos a la función 'piramide' con el argumento 5.
// Esto crea una pirámide con 5 niveles.
piramide(5);