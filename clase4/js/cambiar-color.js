//ubicamos elemento dentro del DOM
const caja = document.getElementById('caja');


//declaramos funciones de control
function pintarRojo()
{
    caja.style.backgroundColor = '#ed6565';
    caja.style.fontSize = '32px';
    caja.style.padding = '40px';
    caja.innerText = 'rojo';
}

function pintarAmarillo()
{
    caja.style.backgroundColor = '#EAEC63';
    caja.style.fontSize = '32px';
    caja.style.padding = '40px';
    caja.innerText = 'amarillo';
}

function pintarVerde()
{
    caja.style.backgroundColor = '#A8EC63';
    caja.style.fontSize = '32px';
    caja.style.padding = '40px';
    caja.innerText = 'verde';
}