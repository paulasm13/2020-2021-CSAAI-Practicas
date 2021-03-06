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
const grey = document.getElementById('grey');
const rotateH = document.getElementById('vueltaH');
const rotateV = document.getElementById('vueltaV');
const sepia = document.getElementById('sepia');

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

  for (var i = 0; i < data.length; i+=4) {
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

// Filtro escala de grises
grey.onclick = () => {
  sliders.style.display = 'none';
  ctx.drawImage(img, 0, 0);
  let imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);
  let data = imgData.data;
  var shine = 0;
  for (var i = 0; i < data.length; i+=4) {
    r = data[i];
    g = data[i+1];
    b = data[i+2];
    shine = (3 * r + 4 * g + b)/8;
    data[i] = data[i+1] = data[i+2] = shine;
  }
  console.log('Umbral de gris obtenido');
  ctx.putImageData(imgData, 0, 0);
}

// Filtro imagen especular
rotateH.onclick = () => {
  sliders.style.display = 'none';
  console.log("Imagen volteada de forma horizontal");
  ctx.drawImage(img, 0, 0);
  ctx.translate(canvas.width, 0);
  ctx.scale(-1, 1);
  ctx.drawImage(img, 0, 0);
}

// Filtro imagen boca abajo
rotateV.onclick = () => {
  sliders.style.display = 'none';
  console.log("Imagen volteada de forma vertical");
  ctx.drawImage(img, 0, 0);
  ctx.translate(0, canvas.height);
  ctx.scale(1, -1);
  ctx.drawImage(img, 0, 0);
}

// Filtro sepia
sepia.onclick = () => {
  sliders.style.display = 'none';
  ctx.drawImage(img, 0, 0);
  let imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);
  let data = imgData.data;
  for (var i = 0; i < data.length; i+=4) {
    r = data[i];
    g = data[i+1];
    b = data[i+2];
    data[i] = (r * .393) + (g * .769) + (b * .189);
    data[i+1] = (r * .349) + (g * .686) + (b * .168);
    data[i+2]= (r * .272) + (g * .534) + (b * .131);
  }
  console.log('Efecto sepia aplicado');
  ctx.putImageData(imgData, 0, 0);
}
  