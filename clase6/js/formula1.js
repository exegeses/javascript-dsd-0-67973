//ubicamos los divs de las escuderías
const redbull = document.querySelector('#redbull');
const ferrari = document.querySelector('#ferrari');
const amartin = document.querySelector('#amartin');
const mercedes = document.querySelector('#mercedes');

//ubicamos los botones
const btnRedbull = document.querySelector('#btnRedbull');
const btnFerrari = document.querySelector('#btnFerrari');
const btnAMartin = document.querySelector('#btnAMartin');
const btnMercedes = document.querySelector('#btnMercedes');

/* estado inicial: 
    se ve 1 (uno) de los 4 divs
    vamos a mostrar el 1ero (redbull)
    y vamos a ocultar los otros 3
*/

ferrari.style.display = 'none';
amartin.style.display = 'none';
mercedes.style.display = 'none';

btnRedbull.addEventListener(
        'click',
        function(){
            redbull.style.display = 'flex'; // se ve
            ferrari.style.display = 'none';
            amartin.style.display = 'none';
            mercedes.style.display = 'none';
        }
);
btnFerrari.addEventListener(
        'click',
        function(){
            redbull.style.display = 'none'; 
            ferrari.style.display = 'flex'; // se ve
            amartin.style.display = 'none';
            mercedes.style.display = 'none';
        }
);
btnAMartin.addEventListener(
        'click',
        function(){
            redbull.style.display = 'none'; 
            ferrari.style.display = 'none'; 
            amartin.style.display = 'flex'; // se ve
            mercedes.style.display = 'none';
        }
);
btnMercedes.addEventListener(
        'click',
        function(){
            redbull.style.display = 'none'; 
            ferrari.style.display = 'none'; 
            amartin.style.display = 'none'; 
            mercedes.style.display = 'flex'; // se ve
        }
);