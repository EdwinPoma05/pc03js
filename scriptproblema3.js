function esPalindromo(cadena) {
    let cadenaLimpia = cadena.toLowerCase().replace(/\s/g, '');
    return cadenaLimpia === cadenaLimpia.split('').reverse().join('');
}

// Ejemplo de uso en la consola
console.log(esPalindromo("Anita lava la tina")); 
console.log(esPalindromo("Hola mundo"));