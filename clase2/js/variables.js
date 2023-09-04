/*
    para declarar variables utilizamos la
    palabra reservada "let" 
*/

let numero = 9;
let frase = 'hola mundo';
/*
    para declarar constantes utilizamos la
    palabra reservada "const" 
*/
const nombre = 'marcos';

/* escribimos en el documento */
// document.write( numero );
//document.write( frase )

// escribimos dentro del span
// document.getElementById('txt').innerText = numero;

//sobreescribimos valores de las variables
numero = 2;
frase = 'Javascript desde 0';
//nombre = 'Rick Sanchez';

document.getElementById('txt').innerText = nombre;
