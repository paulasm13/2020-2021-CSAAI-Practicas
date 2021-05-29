// DOM
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
const btn_pause = document.getElementById("btn_pause");
const btn_play = document.getElementById("btn_play");
const btn_back = document.getElementById("btn_retroceder");
const btn_advance = document.getElementById("btn_avanzar");
const btn_fullscreen = document.getElementById("btn_pcompleta");

const TEST_IMAGE_URL = "test.jpg";

const STATE = {
    OFF: false,
    ON: true,
}

live.width=450;
live.height=220;
video1.width=200;  
video1.height=100;
video2.width=200;  
video2.height=100;
video3.width=200;  
video3.height=100;

live.poster = TEST_IMAGE_URL;
video1.poster = TEST_IMAGE_URL;
video2.poster = TEST_IMAGE_URL;
video3.poster = TEST_IMAGE_URL;

// Estado
let state = STATE.OFF;
console.log("Estado inicial: " + state);

//-- Fuentes ON
btn_src_on.onclick = () => {

  // Cambio de estado
  state = STATE.ON;
  console.log("Cambio de estado: " + state);
  console.log('Fuentes ON');
 
  video1.src="https://gsyc.urjc.es/jmplaza/csaai/realizador-fuente1.mp4";
  video2.src="https://gsyc.urjc.es/jmplaza/csaai/realizador-fuente2.mp4";
  video3.src="https://gsyc.urjc.es/jmplaza/csaai/realizador-fuente3.mp4";

  video1.currentTime = 0;
  video1.play();
  video1.muted = true;

  video2.currentTime = 0;
  video2.play();
  video2.muted = true;

  video3.currentTime = 0;
  video3.play();
  video3.muted = true;

  live.poster = TEST_IMAGE_URL;
};

//-- Fuentes OFF
btn_src_off.onclick = () => {
    console.log('Fuentes OFF');
    state = STATE.OFF;
    live.src = TEST_IMAGE_URL;
    video1.src = TEST_IMAGE_URL;
    video2.src = TEST_IMAGE_URL;
    video3.src = TEST_IMAGE_URL;
};

//-- Test
btn_test.onclick = () => {
    console.log('test');
    live.src = TEST_IMAGE_URL;
    live.poster = TEST_IMAGE_URL;
};

//-- Selección de vídeo
btn_video1.onclick = () => {
    if (state == STATE.ON){
        console.log('Vídeo 1 en directo');
        // Evitar solapación con 'test'
        live.poster = null;
        console.log(live.readyState);
        // Cargar vídeo
        if(video1.readyState !== 4) {
            video1.load();
        }
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
        live.poster = null;
        if(video2.readyState !== 4) {
            video2.load();
        }
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
        live.poster = null;
        if(video3.readyState !== 4) {
            video3.load();
        }
        live.src = video3.src;
        live.currentTime = video3.currentTime;
        live.play();
    } else {
        console.log('Primero hay que activar las fuentes');        
    }
};

//-- Opciones
btn_play.onclick = () => {
    if(live.paused) {
        live.play();
    }
};

btn_pause.onclick = () => {
    if(!live.paused) {
        live.pause();
    }
};

btn_advance.onclick = () => {
    live.currentTime = live.currentTime + 2;
    live.play();
};

btn_back.onclick = () => {
    live.currentTime = live.currentTime - 2;
    live.play();
};

btn_back.onclick = () => {
    live.currentTime = live.currentTime - 2;
    live.play();
};

btn_fullscreen.onclick = () => {
    if(state == STATE.ON) {
        live.requestFullscreen();
        live.play();
    }
};

