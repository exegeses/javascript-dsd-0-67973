const phantom = document.querySelector('img[alt="phantom"]');
const fondo = document.querySelector('#fondo');

//flag 
let direccion = 'derecha';
let posX = 450;
let posXBG = 0;

function moverX()
{

    if( direccion == 'derecha' ){
        posX++;
    }
    else{
        posX--;
    }

    //límites y rebotes
    if( posX >= 1100 ){
        direccion = 'izquierda';
    }
    if( posX <= 300 ){
        direccion = 'derecha';
    }
    
    //movimiento del pj
                //transform: translateX(450px) 
    phantom.style.transform = 'translateX('+ posX +'px)';

    posXBG = posX / -2;
    fondo.style.backgroundPosition = posXBG + 'px -600px';
}

setInterval( moverX, 50 );