

/*variables de valor moneda en euros */
const tasaDolar= 0.92;
const tasaLibra= 1.19;
const tasaYen= 0.0062;

/*variables de los resultados */
let resultadoDolar = euros * tasaDolar;
let resultadoLibra = euros * tasaLibra;
let resultadoYen = euros * tasaYen;

/*capturar datos del user */
document.getElementById("moneda").value


/* */
document.getElementById("dolar").value = resultadoDolar;
document.getElementById("libra").value = resultadoLibra;
document.getElementById("yenes").value = resultadoYen;

/*pasar de string a number */
/*usar parse int no incluye decimales */
let cantidad = parseFloat(document.getElementById("euros").value);
