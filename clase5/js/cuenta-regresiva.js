//ubicamos elementos dentro del DOM
const txtDias = document.querySelector('#txtDias');
const txtHoras = document.querySelector('#txtHoras');
const txtMinutos = document.querySelector('#txtMinutos');
const txtSegundos = document.querySelector('#txtSegundos');
const h1 = document.querySelector('h1');

let intervalo = '';

//declaramos función de control
function cuentaRegresiva()
{
    //creamos objetos de fecha
    const ahora = new Date();
    const final = new Date( 2024, 0, 1 ); 
    /* const final = new Date( 2023, 8, 13, 11, 32 ); */
    console.log(ahora);
    console.log(final);
    // calculamos la diferencia entre objetos de fecha
    let diferencia = final - ahora;
    console.log(diferencia);
    /* tiempo expresado en milisegundos */

    //convertimos unidades de tiempo
    //obtenemos el tiempo en segundos
        // y le quetamos los decimales
    let segundos = Math.trunc( diferencia / 1000 );
    console.log(segundos);

    //obtenemos el tiempo en minutos
    let minutos = Math.trunc( segundos / 60 );
    console.log( minutos );

    //obtenemos el tiempo en horas
    let horas = Math.trunc( minutos / 60 );
    console.log( horas );

    //obtenemos el tiempo en dias
    let dias = Math.trunc( horas / 24 );
    console.log( dias );

    /* calculamos el resto en horas, minutos y segundos */
    horas = horas%24;
    console.log( 'horas restantes: '+ horas  );
    minutos = minutos%60;
    console.log( 'minutos restantes: '+ minutos  );
    segundos = segundos%60;
    console.log( 'segundos restantes: '+ segundos  );

    if( 
        dias <= 0 && horas <= 0 && minutos <= 0 && segundos < 0
      ){
        clearInterval( intervalo );
        segundos = 0;
        h1.innerText = 'Oferta finalizada';
      }


    /* imprimimos dentro de los span */
    txtDias.innerText = dias.toString().padStart( 2, '0' );
    txtHoras.innerText = horas.toString().padStart( 2, '0' );
    txtMinutos.innerText = minutos.toString().padStart( 2, '0' );
    txtSegundos.innerText = segundos.toString().padStart( 2, '0' );

}

//invocamos la función
cuentaRegresiva();
//actualizamos el llamado a la función
intervalo = setInterval( cuentaRegresiva, 1000 );