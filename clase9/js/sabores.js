//ubicamos elementos dentro del DOM
const lista = document.querySelector('#lista');
const nuevo = document.querySelector('#nuevo');
const btn = document.querySelector('#btn');

const sabores = [
    'Pistacchio',
    'Quinotos al whisky',
    'Menta granizada',
    'Dulce de Leche',
    'Chocolate',
    'Tramontana',
    'Maracuya',
    'Frutos del bosque',
    'Crema del cielo',
    'Cereza'
];


/* let contenido = '<li>Pistacchio</li>';
    contenido = contenido + '<li>Quinotos al Whisky</li>';
    contenido = contenido + '<li>Menta granizada</li>';
 */


function alimentarLista()
{
    let contenido = '';
    let cantidad = sabores.length;
    for( let i = 0; i < cantidad; i++ ){
        contenido = contenido + `<li>${sabores[i]}</li>`;
    }
    //imprimimos listado de sabores dentro del UL
    lista.innerHTML = contenido;
}

alimentarLista();

/* acción del botón */
btn.addEventListener(
        'click',
        function (){
            //obtener el valor escrito en el input
            let nuevoSabor = nuevo.value;
            // inyectamos nuevoSabor dentro del array
            sabores.push( nuevoSabor );

            //alimentamos ls lista de sabores
            alimentarLista();
        }
);