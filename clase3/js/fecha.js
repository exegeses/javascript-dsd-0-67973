//ubicamos elemento dentro del DOM
const txt = document.getElementById('txt');

/*
    mostrar la fecha actual
    formato:  Miércoles 06/09/2023
*/

//creamos objeto de fecha
const fecha = new Date();

//obtenemos el número de día de la semana
let diaSemana = fecha.getDay();
/*
 0 -> Domingo
 1 -> Lunes
 2 -> Martes
*/
switch( diaSemana ){
    case 0:
        diaSemana = 'Domingo';
        break;
    case 1:
        diaSemana = 'Lunes';
        break;
    case 2:
        diaSemana = 'Martes';
        break;
    case 3:
        diaSemana = 'Miércoles';
        break;
    case 4:
        diaSemana = 'Jueves';
        break;
    case 5:
        diaSemana = 'Viernes';
        break;
    default:
        diaSemana = 'Sábado';
        break;
}

//obtenemos el número de día de mes (1 ~ 31)
let diaMes = fecha.getDate();
if( diaMes < 10 ){
    diaMes = '0' + diaMes;
}

//obtenemos el número de mes actual
let mes = fecha.getMonth() + 1;
if( mes < 10 ){
    mes = '0' + mes;
}


//obtenemos el número de año actual
let anio = fecha.getFullYear();

//imprimimos en el span 
//txt.innerText = diaSemana +' '+ diaMes +'/'+ mes +'/'+ anio;
txt.innerText = `${diaSemana} ${diaMes}/${mes}/${anio}`;