//-- Manejador del evento click sobre el boton 
//-- Cada vez aue se hace click en el se invoca a esta funcion
function manejador_boton()
{
  paragraph.innerHTML = "El botón ha sido pulsado..."   //-- Se cambia el texto del párrafo 
  console.log('Botón pulsado')
}

console.log("Ejecutando js...")

//-- Leer el boton identificado como test
const button = document.getElementById('button')
const paragraph = document.getElementById('paragraph')  //-- El párrafo obtiene su valor inicial que es ""


//-- Configurar el manejador para el evento de
//-- pulsación de botón: que se ejecute la
//-- funcion manejador_boton()
button.onclick = manejador_boton;