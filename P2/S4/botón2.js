//-- Manejador del evento click sobre el boton 
//-- Cada vez aue se hace click en el se invoca a esta funcion
function manejador_boton1()
{
  paragraph.innerHTML += "1"   //-- Se suma un 1 al párrafo 
  console.log('Botón pulsado')
}

function manejador_boton2()
{
  paragraph.innerHTML += "2"   //-- Se suma un 1 al párrafo 
  console.log('Botón pulsado')
}

console.log("Ejecutando js...")

//-- Leer el boton identificado como test
const button1 = document.getElementById('button1')
const button2 = document.getElementById('button2')
const paragraph = document.getElementById('paragraph')  //-- El párrafo obtiene su valor inicial que es ""


//-- Configurar el manejador para el evento de
//-- pulsación de botón: que se ejecute la
//-- funcion manejador_boton()
button1.onclick = manejador_boton1;
button2.onclick = manejador_boton2;