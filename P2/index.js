console.log("Ejecutando JS calculadora...");

//-- Identificadores cogidos del archivo html.
display = document.getElementById("display")
suma = document.getElementById("suma")
equal = document.getElementById("equal")
clear = document.getElementById("clear")
delete_lastnumber = document.getElementById("delete")
point = document.getElementById("point")
sqrt = document.getElementById("sqrt")



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
 
 //-- Comienza en estado inicial.
 let estado = ESTADO.INIT;   

//-- Función de retrollamada de los digitos.
function start (value)
{
    // Si es el primer dígito (estado inicial), no lo añade,
    // sino que lo muestra directamente en el display, eliminando el 0 por defecto.
    if (estado == ESTADO.INIT) {
        display.innerHTML = value;
        estado = ESTADO.OP1;
        console.log('Primer valor en curso, estado 1.');
    } else if (estado == ESTADO.OP1 || estado == ESTADO.OP2 || estado == ESTADO.OPERATION) {
        // En cualquier otro estado, añade el valor en el display sin eliminar el anterior.
        display.innerHTML += value;
        if(estado == ESTADO.OPERATION) {
            estado = ESTADO.OP2;
            ESTADO.COMA = false;
            console.log('Segundo valor en curso, pasa al estado 3.');
        }
    }
    click.play();
}

//-- Resto de funciones de retrollamada

// Ejecución de digitos
for (let number of digits){
    number.onclick = (ev) =>{
        start(ev.target.value);
    }
} 

// Ejecución de operadores 
for (let object of operations){
    object.onclick = (ev) =>{
        if(estado == ESTADO.OP1){
            display.innerHTML += ev.target.value;
            estado = ESTADO.OPERATION;
            console.log('Primer valor OK + operador, pasa al estado 2.');
            click.play();
        } else if (estado == ESTADO.OPERATION) {
            fail.play();    // Sonido de error en caso de más de un operador
            console.log("No puede introducir más de un operador.");

        }
    }
}

// Evalúa la expresión
equal.onclick = () => {
    if(estado == ESTADO.OP2){
        display.innerHTML = eval(display.innerHTML);
        estado = ESTADO.OP1;
        console.log('Segundo valor OK + resultado, vuelve al estado 1.');
        click.play();
    } else {
        fail.play();    // Sonido de error en caso de operación no calculable
        console.log("No se puede calcular ninguna expresión.");
    }
    
}

// Pone a cero la expresion
// y vuelve al estado inicial
clear.onclick = () => {
  display.innerHTML = "";
  estado = ESTADO.INIT;
  console.log('Se elimina todo, estado inicial.');
  click.play();
}

// Elimina el último valor
delete_lastnumber.onclick = () => {
    display.innerHTML = display.innerHTML.slice(0,-1);
    console.log('Último valor eliminado.');
    click.play();
}

// Evalúa la coma para evitar errores
point.onclick = () => {
    if(ESTADO.COMA == true) {
        console.log("No puede introducir más comas.");
        fail.play();    // Sonido de error para más de una coma
    } else {
        display.innerHTML += ".";
        console.log('Número con decimales.');
        ESTADO.COMA = true;
        click.play();
    }
}

// Evalúa raiz cuadrada
sqrt.onclick = () => {
    display.innerHTML = Math.sqrt(display.innerHTML);
    click.play();
}
