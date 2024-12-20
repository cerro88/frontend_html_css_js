// Seleccionamos todos los elementos <li> del documento y los guardamos en la variable 'liItems'.
// Esto devuelve una HTMLCollection que contiene todos los <li>.
const liItems = document.getElementsByTagName('li');

// Imprimimos el tipo de nodo del objeto 'document'.
// document es el nodo raíz del DOM, y su tipo de nodo es 9 (Nodo de documento).
console.log("documento: " + document.nodeType);

// Intentamos imprimir el tipo de nodo de la HTMLCollection 'liItems'.
// Las HTMLCollections no son nodos, por lo que liItems.nodeType devuelve undefined.
console.log("HTMLCollection: " + liItems.nodeType);

// Usamos un bucle for...of para recorrer cada elemento <li> dentro de la HTMLCollection.
for (const liItem of liItems) {
    // Para cada elemento <li>, imprimimos su tipo de nodo.
    // Cada <li> es un nodo de tipo elemento, por lo que liItem.nodeType devuelve 1.
    console.log("liElement: " + liItem.nodeType);
}