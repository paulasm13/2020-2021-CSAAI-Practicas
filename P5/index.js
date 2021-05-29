//----- Obtener elemento de video y configurarlo
let live = document.getElementById("liveVideo");
const video1 = document.getElementById("video1");
const video2 = document.getElementById("video2");
const video3 = document.getElementById("video3");
const btn_video1 = document.getElementById("btn_video1");
const btn_video2 = document.getElementById("btn_video2");
const btn_video3 = document.getElementById("btn_video3");
const btn_test = document.getElementById("btn_test");
const btn_src_on = document.getElementById("btn_src_on");

const STATE = {
    OFF: false,
    ON: true,
}


//-- Establecer las dimensiones de los vídeos
live.width=420;
live.height=200;
video1.width=200;  
video1.height=100;
video2.width=200;  
video2.height=100;
video3.width=200;  
video3.height=100;

//-- Imagen de Test usada
const TEST_IMAGE_URL = "test.png";

//-- Imagen estática a mostrar cuando el video no
//-- ha arrancado
live.poster = TEST_IMAGE_URL;
video1.poster = TEST_IMAGE_URL;
video2.poster = TEST_IMAGE_URL;
video3.poster = TEST_IMAGE_URL;

// Estado
let state = STATE.OFF;
console.log("Estado inicial: " + state);

//-- Boton de FUENTES-ON
btn_src_on.onclick = () => {

  // Cambio de estado
  state = STATE.ON;
  console.log("Cambio de estado: " + state);
 
  //-- Establecer la fuente de la cámara 1
  video1.src="https://gsyc.urjc.es/jmplaza/csaai/realizador-fuente1.mp4";

  //-- Reprodeucimos un vídeo, desde el comienzo
  video1.currentTime = 0;
  video1.play();

  //-- Y en silencio...
  video1.muted;

  //-- En la emisión en directo ponemos la imagen de prueba
  live.poster = TEST_IMAGE_URL;
};

//-- Botón de Test
btn_test.onclick = () => {
    live.poster = TEST_IMAGE_URL;
};

//-- Botón de Selección de la cámara 1
btn_video1.onclick = () => {
    console.log(state);
    if (state == STATE.ON){
        console.log('Fuentes ON');
        live.src = video1.src;
        live.currentTime = video1.currentTime;
        live.play();
    } else {
        console.log('Primero fuentes ON!');        
    }
};
