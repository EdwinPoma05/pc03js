/* Crea una función en JavaScript que reciba una cadena de texto y devuelva la cadena invertida, 
pero sin usar el método reverse() ni split(). Debes iterar sobre la cadena de caracteres manualmente
para construir una nueva en orden inverso.
*/
function invertirCadena(cadena){
    let inversa =""
    for (let i = cadena.length -1; i >= 0; i--){
        inversa += cadena[i];
    }
    return inversa;
}
let cadena = prompt("INGRESE UNA CADEENA PARA INVERTIR : ");
let inversa = invertirCadena(cadena);
alert("LA CADENA INVERTIDA ES : " + inversa);