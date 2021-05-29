console.log("Ejecutando JS....");

//-- Obtener elementos del DOM
const canvas = document.getElementById('canvas');
  canvas.style.display = 'none';
const pict1 = document.getElementById('source1');
const pict2 = document.getElementById('source2');
const ctx = canvas.getContext('2d');
const button1 = document.getElementById('img1');
const button2 = document.getElementById('img2');
const rgb = document.getElementById('rgb');
const sliders = document.getElementById('sliders');

// Deslizadores y sus valores correspondientes
const sliderRed = document.getElementById('red');
const sliderGreen = document.getElementById('green');
const sliderBlue = document.getElementById('blue');

const range_valueR = document.getElementById('valueR');
const range_valueG = document.getElementById('valueG');
const range_valueB = document.getElementById('valueB');


// Elección de la imagen 1
button1.onclick = () => {
  sliders.style.display = 'none';
  canvas.style.display = 'block';
  pict1.onload = function () {
    console.log("Imagen 1 cargada");
  };
  img = pict1;
  // Dibuja la imagen en el canvas
  // con el tamaño original
  canvas.width = img.width;
  canvas.height = img.height;
  ctx.drawImage(img, 0,0);
}

// Elección de la imagen 2
button2.onclick = () => {
  sliders.style.display = 'none';
  canvas.style.display = 'block';
  pict2.onload = function () {
    console.log("Imagen 2 cargada");
  };
  img = pict2;
  canvas.width = img.width;
  canvas.height = img.height;
  ctx.drawImage(img, 0,0);
}

function colors() {
  // Mostrar nuevos valores
  range_valueR.innerHTML = sliderRed.value;
  range_valueG.innerHTML = sliderGreen.value;
  range_valueB.innerHTML = sliderBlue.value;

  ctx.drawImage(img, 0, 0);
  let imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);
  let data = imgData.data

  // Obtener umbral del deslizador
  let umbralR = sliderRed.value;
  let umbralG = sliderGreen.value;
  let umbralB = sliderBlue.value;

  for (let i = 0; i < data.length; i+=4) {
    if (data[i] > umbralR){
      data[i] = umbralR;
    }
    if (data[i+1] > umbralG){
      data[i+1] = umbralG;
    }
    if (data[i+2] > umbralB){
      data[i+2] = umbralB;
    }
  }
  ctx.putImageData(imgData, 0, 0);
}

// Filtro de color
rgb.onclick = () => {
  // Modifica la prop. del display y muestra los deslizadores
  sliders.style.display = 'inline-flex';

  // Imagen original en canvas
  ctx.drawImage(img, 0, 0);

  sliderRed.oninput = () => {
    colors();
    console.log("Edición rojo");
  }
  sliderGreen.oninput = () => {
    colors();
    console.log("Edición verde");
  }
  sliderBlue.oninput = () => {
    colors();
    console.log("Edición azul");
  }  
};