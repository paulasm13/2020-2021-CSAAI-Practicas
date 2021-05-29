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
const btn_src_off = document.getElementById("btn_src_off");


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

//-- FUENTES-ON
btn_src_on.onclick = () => {

  // Cambio de estado
  state = STATE.ON;
  console.log("Cambio de estado: " + state);
  console.log('Fuentes ON');
 
  //-- Establecer fuentes
  video1.src="https://gsyc.urjc.es/jmplaza/csaai/realizador-fuente1.mp4";
  video2.src="https://gsyc.urjc.es/jmplaza/csaai/realizador-fuente2.mp4";
  video3.src="https://gsyc.urjc.es/jmplaza/csaai/realizador-fuente3.mp4";

  //-- Reproducción de vídeos desde el comienzo en silencio
  video1.currentTime = 0;
  video1.play();
  video1.muted = true;

  video2.currentTime = 0;
  video2.play();
  video2.muted = true;

  video3.currentTime = 0;
  video3.play();
  video3.muted = true;

  //-- En la emisión en directo ponemos la imagen de prueba
  live.poster = TEST_IMAGE_URL;
};

btn_src_off.onclick = () => {
    console.log('Fuentes OFF');
    state = STATE.OFF;
    live.src = TEST_IMAGE_URL;
    video1.src = TEST_IMAGE_URL;
    video2.src = TEST_IMAGE_URL;
    video3.src = TEST_IMAGE_URL;
};

//-- Botón de Test
btn_test.onclick = () => {
    console.log('test');
    live.src = TEST_IMAGE_URL;
};

//-- Botón de Selección de la cámara 1
btn_video1.onclick = () => {
    if (state == STATE.ON){
        console.log('Vídeo 1 en directo');
        live.src = video1.src;
        live.currentTime = video1.currentTime;
        live.play();
    } else {
        console.log('Primero hay que activar las fuentes');        
    }
};

btn_video2.onclick = () => {
    if (state == STATE.ON){
        console.log('Vídeo 2 en directo');
        live.src = video2.src;
        live.currentTime = video2.currentTime;
        live.play();
    } else {
        console.log('Primero hay que activar las fuentes');        
    }
};

btn_video3.onclick = () => {
    if (state == STATE.ON){
        console.log('Vídeo 3 en directo');
        live.src = video3.src;
        live.currentTime = video3.currentTime;
        live.play();
    } else {
        console.log('Primero hay que activar las fuentes');        
    }
};
