//ubicamos elementos/s dentro del DOM
const caja = document.querySelector('#caja');
const botones = document.querySelectorAll('nav button');

console.log(botones);

function pintar( codigoColor )
{
    caja.style.backgroundColor = codigoColor;
}


botones[0].addEventListener(
        'click',
        function(){
            pintar('rgb(230,30, 30)');
        }
);
botones[1].addEventListener(
        'click',
        function(){
            pintar('rgb(200,200,50)');
        }
);
botones[2].addEventListener(
        'click',
        function(){
            pintar('rgb(30,230, 100)');
        }
);