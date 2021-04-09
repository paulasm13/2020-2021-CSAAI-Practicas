console.log("Ejecutando JS...");

//-- 

display = document.getElementById("display")
suma = document.getElementById("suma")
igual = document.getElementById("igual")
clear = document.getElementById("clear")

//-- Variables con varios elementos de una clase
    //-- Array de la clase digit
let digits = document.getElementsByClassName('digit');

//-- Estados de la calculadora
const ESTADO = {
    INIT: 0,
    OP1: 1,
    OPERATION: 2,
    OP2: 3
}
 
 //-- Variable de estado de la calculadora
 //-- Al comenzar estamos en el estado incial
 let estado = ESTADO.INIT;   
 console.log(digits);

 //-- Creo un array con todos los digitos del html
//-- Establecer la misma función de retrollamada
//-- para todos los botones de tipo dígito


    //-- Se ejecuta cuando se pulsa un boton
    //-- que es un dígito. Para que el código sea 
    //-- mas legible la función de retrollamada se
    //-- escribe como una función normal (digito)



//--for (i=0; i<digits.length; i++){
    //digits[i].onclick = (ev)=> {
      //value = ev.target.value;
     // console.log('Digito!');
    
    // console.log(value);
    //  console.log(digits);
   // }
 //- }
  

//-- Función de retrollamada de los digitos
function start (number)
{
    //-- Si es el primer dígito (estado inicial), no lo añadimos,
    //-- sino que lo mostramos directamente en el display, eliminando el 0 por defecto.
    if (estado == ESTADO.INIT) {
        console.log('PrimerEstadoOkkk')
        display.innerHTML += ev.target.value;
        //-- Pasar al siguiente estado
        estado = ESTADO.OP1;
    } else {
        //--En cualquier otro estado lo añadimos
        display.innerHTML += ev.target.value;

        //-- Y nos quedamos en el mismo estado
        //-- Ojo! Este ejemplo sólo implementa el primer
        //-- estado del diagrama. Habría que tener en 
        //-- cuenta el resto... lo debes hacer en tu práctica
    } 
    
}

for (let number of digits){
    number.onclick = (ev)=>{
        value = ev.target.value;
        console.log(value);
    }
}


//-------- Resto de funciones de retrollamada

//-- Operación de sumar
suma.onclick = (ev) => {

    //-- Insertar simbolo de sumar
    display.innerHTML += ev.target.value;

    //-- ¡Ojo! Aquí se inserta el + siempre!
    //-- Para que la calculadora funcione bien
    //-- sólo se debe permitir insertar el operador
    //-- en el estado OP1, y debe cambiar el estado
    //-- a OPERATION (según el diagrama de estados)
  
}

//-- Evaluar la expresion
igual.onclick = () => {
  
    //-- Calcular la expresión y añadirla al display
    display.innerHTML = eval(display.innerHTML);

    //-- ¡Ojo! Aquí se hace siempre!
    //-- Sólo se debe permitar que eso se haga
    //-- si se está en el estado final (OP2)
  
}

//-- Poner a cero la expresion
//-- Y volver al estado inicial
clear.onclick = () => {
  display.innerHTML = "0";
  estado = ESTADO.INIT;
}