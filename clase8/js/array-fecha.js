const txt = document.querySelector('#txt');

//creamos objeto de fecha
const fecha = new Date();

//obtenemos el número de día de la semana
let nDiaSemana = fecha.getDay();
/*
 0 -> Domingo
 1 -> Lunes
 2 -> Martes
*/
const diasSemana = [
                    'Domingo', 'Lunes', 'Martes',
                    'Miércoles', 'Jueves', 'Viernes',
                    'Sábado'
                    ];

txt.innerText = diasSemana[ nDiaSemana ];
