//-- Manejador del evento click sobre el boton 
//-- Cada vez aue se hace click en el se invoca a esta funcion
function manejador_parrafo()
{
  console.log("El boton ha sido pulsado...")
}

console.log("Ejecutando js...")

//-- Leer el boton identificado como test
const button = document.getElementById('button')

//-- Configurar el manejador para el evento de
//-- pulsación de botón: que se ejecute la
//-- funcion manejador_parrafo()
button.onclick = manejador_parrafo;