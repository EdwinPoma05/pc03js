/*5.- Calcula la media, mediana y moda de una lista de números
Escribe una función en JavaScript que calcule la media, mediana y moda de un array de números. La función debe devolver un objeto con los tres valores.*/
let lista = [12, 1, 12, 30, 40, 60, 12, 81];

function media(lista = []) {
    if (lista.length === 0) return 0;

    let suma = 0;

    for (let i = 0; i < lista.length; i++) {
        suma += lista[i];
    }

    return suma / lista.length;
}

function moda(lista = []) {
    let frecuencias = {};
    let maxFrecuencia = 0;
    let moda = [];

    for (let i = 0; i < lista.length; i++) {
        let num = lista[i];
        frecuencias[num] = (frecuencias[num] || 0) + 1;

        if (frecuencias[num] > maxFrecuencia) {
            maxFrecuencia = frecuencias[num];
        }
    }

    for (let num in frecuencias) {
        if (frecuencias[num] === maxFrecuencia) {
            moda.push(Number(num));
        }
    }

    return moda.length === lista.length ? null : moda; 
}

function mediana(lista = []) {
    if (lista.length === 0) return 0;

    let listaOrdenada = lista.slice().sort((a, b) => a - b); 
    let mitad = Math.floor(listaOrdenada.length / 2);

    if (listaOrdenada.length % 2 !== 0) {
        return listaOrdenada[mitad];
    }

    return (listaOrdenada[mitad - 1] + listaOrdenada[mitad]) / 2;
}

console.log(`La media es: ${media(lista)}`);
console.log(`La moda es: ${moda(lista)}`);
console.log(`La mediana es: ${mediana(lista)}`);
