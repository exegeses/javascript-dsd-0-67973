const txt = document.querySelector('#txt');
const boton = document.querySelector('#boton');

//boton.addEventListener( 'event', acción );

boton.addEventListener(

        'click',
        function(){
            txt.innerText = 'click!';
        }

);
boton.addEventListener(

        'mouseover',
        function(){
            txt.innerText = 'mouse sobre';
        }

);
boton.addEventListener(

        'mouseout',
        function(){
            txt.innerText = 'mouse fuera';
        }

);