//ubicamos elementos dentro del DOM
const txt2 = document.querySelector('#txt2');
    //botones
    /*
    const btnAnterior = document.querySelector('img[alt="btnAnterior"]');
    const btnSiguiente = document.querySelector('img[alt="btnSiguiente"]');
    */
   const botones = document.querySelectorAll('img');
   const btnAnterior = botones[0];
   const btnSiguiente = botones[1];
   console.log(botones);

const marcas = [
                'Hermès', 'Zara', 'Boss',
                'Aeropostale', 'Tommy', 'Hollister',
                'Old Navy', 'Kingpin', 'Honda', 'KLR'
               ];
const cantidad = marcas.length;

let posicion = 4;
txt2.innerText = marcas[posicion]; 

btnSiguiente.addEventListener(
        'click',
        function()
        {
            posicion++;
                console.log(posicion);
            if( posicion >= cantidad ){
                posicion = 0;
            }
            txt2.innerText = marcas[posicion]; 
        }
);

btnAnterior.addEventListener(
        'click',
        function()
        {
            posicion--;
                console.log(posicion);
            if( posicion < 0 ){
                posicion = cantidad - 1;
            }
            txt2.innerText = marcas[posicion]; 
        }
);

/* que se ejecute cada 3 segundos */
function moveNext()
{
        posicion++;
            console.log(posicion);
        if( posicion >= cantidad ){
            posicion = 0;
        }
        txt2.innerText = marcas[posicion]; 
}

setInterval( moveNext, 3000 );