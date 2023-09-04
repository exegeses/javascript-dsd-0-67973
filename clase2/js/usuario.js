/*
    pedimos al usuario que ingrese su noombre
*/
let nombre = prompt('Ingrese su nombre');

document.getElementById('txt').innerText = nombre;


/*
    document        referencia al documento
    .getElementByID('nombre_id')     referencia a un elemento 
                                      quetiene un id en el HTML

    innerText       "texto interior"
*/