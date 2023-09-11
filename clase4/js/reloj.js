// ubicamos elemento/s dentro del DOM
// const txt = document.getElementById('txt');
const txt = document.querySelector('#txt');

//declaramos función d e control
function reloj()
{
    //creamos objeto de fecha
    const fecha = new Date();
    console.log(fecha);

    //obtenemos número correspondiente a las horas
    let horas = fecha.getHours();
    console.log(horas);

    //obtenemos número correspondiente a los minutos
    let minutos = fecha.getMinutes();
    if( minutos < 10 ){
        minutos = '0'+ minutos;
    }
    console.log(minutos);

    //obtenemos número correspondiente a los segundos
    let segundos = fecha.getSeconds();
    if( segundos < 10 ){
        segundos = '0'+ segundos;
    }
    console.log(segundos);

    //imprimimos el reloj en el span
    txt.innerText = `${horas}:${minutos}:${segundos}`;
}

//invocamos la función reloj()
reloj();

//actualizamos el llamado a la función
setInterval( reloj, 1000 );