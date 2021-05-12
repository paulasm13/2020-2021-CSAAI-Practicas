console.log("Ejecutando JS calculadora...");

//-- Identificadores cogidos del archivo html.
display = document.getElementById("display")
suma = document.getElementById("suma")
igual = document.getElementById("igual")
clear = document.getElementById("clear")
delete_lastnumber = document.getElementById("delete")
point = document.getElementById("point")


//-- Variables con varios arrays de elementos de una clase.
let digits = document.getElementsByClassName('digit');
let operations = document.getElementsByClassName('operation');

//-- Estados de la calculadora.
const ESTADO = {
    INIT: 0,
    OP1: 1,
    OPERATION: 2,
    OP2: 3
}
 
 //-- Variable de estado de la calculadora.
 //-- Al comenzar estamos en el estado incial.
 let estado = ESTADO.INIT;   

//-- Función de retrollamada de los digitos.
function start (value)
{
    //-- Si es el primer dígito (estado inicial), no lo añadimos,
    //-- sino que lo mostramos directamente en el display, eliminando el 0 por defecto.
    if (estado == ESTADO.INIT) {
        display.innerHTML = value;
        //-- Pasar al siguiente estado
        estado = ESTADO.OP1;
        console.log('Primer valor en curso, estado 1.');
    } else if (estado == ESTADO.OP1 || estado == ESTADO.OP2 || estado == ESTADO.OPERATION) {
        //--En cualquier otro estado lo añadimos en el display sin eliminar el anterior valor.
        display.innerHTML += value;
        if(estado == ESTADO.OPERATION) {
            estado = ESTADO.OP2;
            console.log('Segundo valor en curso, pasa al estado 3.');
        }
    }
}

//-------- Resto de funciones de retrollamada

//-- Se ejecuta cuando se pulsa un botón
//-- que es un dígito. Se le pasa la función start.
for (let number of digits){
    number.onclick = (ev) =>{
        start(ev.target.value);
        console.log('Digito añadido...');
    }
} 

//-- Se ejecuta cuando se pulsa un botón
//-- que es un operador. 
for (let object of operations){
    object.onclick = (ev) =>{
        if(estado == ESTADO.OP1){
            display.innerHTML += ev.target.value;
            estado = ESTADO.OPERATION;
            console.log('Primer valor OK + operador, pasa al estado 2.')
        }
    }
}

//-- Evaluar la expresion
equal.onclick = () => {
    if(estado == ESTADO.OP2){
        //-- Calcular la expresión y añadirla al display
        display.innerHTML = eval(display.innerHTML);
        estado = ESTADO.OP1;
        console.log('Segundo valor OK + resultado, vuelve al estado 1.');
    }
}

//-- Poner a cero la expresion
//-- Y volver al estado inicial
clear.onclick = () => {
  display.innerHTML = "";
  estado = ESTADO.INIT;
  console.log('Se elimina todo, estado 0.');
}

//-- Eliminar último valor, en caso de que sea 0 se queda sin valor
delete_lastnumber.onclick = () => {
    if (display.innerHTML == "0") {
        display.innerHTML = "";
    } else {
        display.innerHTML = display.innerHTML.slice(0,-1);
    }
    console.log('Último valor eliminado.');
}