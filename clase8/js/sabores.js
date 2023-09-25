const lista = document.querySelector('#lista');

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

/* <li>sabor</li> */

let contenido = '';
let i = 0;
const cantidad = sabores.length;
while( i < cantidad ){
    contenido = contenido + `<li>${sabores[i]}</li> `;
    i++;
}
//escribimos en el ul
lista.innerHTML = contenido;