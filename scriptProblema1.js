/*
1.- Determina si un número es primo
Escribe una función en JavaScript que determine si un número entero positivo es primo. 
Un número es primo si solo es divisible entre 1 y sí mismo, y mayor que 1. 
La función debe recibir un número y devolver true si es primo y false en caso contrario. 
Asegúrate de optimizar el código para evitar interaciones innecesarias.
*/
function esPrimo(n) {
    if (n <= 1) return false;
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) return false;
    }
    return true;
}

function verificarPrimo() {
    let numero = parseInt(prompt("Ingresa un número:"));
    if (isNaN(numero) || numero < 1) {
        console.log('Por favor, introduce un número válido.');
    } else {
        if (esPrimo(numero)) {
            console.log(`El número ${numero} es primo.`);
        } else {
            console.log(`El número ${numero} no es primo.`);
        }
    }
}

verificarPrimo();
