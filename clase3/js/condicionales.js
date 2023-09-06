//ubicamos elemento dentro del DOM
const contenedor = document.getElementById('contenedor');

/*
    hacer una progunta al usuario
    almacenar la respuesta en una variable
*/
let respuesta = prompt('¿qué seleccionado ganó al copa Qatar 2022?');

if ( respuesta.toLowerCase() == 'argentina' ){
    //bloque a ejecutar si la condicion es true
    contenedor.innerHTML = 'Correcto <br> <img src="imgs/ok.png">';
}else{
    //bloque a ejecutar si la condicion es false
    contenedor.innerHTML = 'Incorrecto <br> <img src="imgs/error.png">';
}

