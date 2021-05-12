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
    OP2: 3,
    COMA: false,
}

//-- Sonidos
const click = new Audio("click.mp3");
const fail = new Audio("fail.mp3");
 
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
            ESTADO.COMA = false;
            console.log('Segundo valor en curso, pasa al estado 3.');
        }
    }
    click.play();
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
            console.log('Primer valor OK + operador, pasa al estado 2.');
            click.play();
        } else if (estado == ESTADO.OPERATION) {
            fail.play();    
            console.log("No puede introducir más de un operador.");

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
        click.play();
    } else {
        fail.play();    //-- Sonido de error en caso de operación no calculable
        console.log("No se puede calcular ninguna expresión.");
    }
    
}

//-- Poner a cero la expresion
//-- Y volver al estado inicial
clear.onclick = () => {
  display.innerHTML = "";
  estado = ESTADO.INIT;
  console.log('Se elimina todo, estado 0.');
  click.play();
}

//-- Eliminar último valor
delete_lastnumber.onclick = () => {
    display.innerHTML = display.innerHTML.slice(0,-1);
    console.log('Último valor eliminado.');
    click.play();
}

//-- Evaluar la coma para evitar errores
point.onclick = () => {
    if(ESTADO.COMA == true) {
        console.log(ESTADO.COMA);
        console.log("No puede introducir más comas.");
        fail.play();
    } else {
        display.innerHTML += ".";
        console.log('Número con decimales.');
        ESTADO.COMA = true;
        click.play();
    }
}