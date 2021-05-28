console.log("Ejecutando JS....");

//-- Obtener elementos del DOM
const canvas = document.getElementById('canvas');
const pict1 = document.getElementById('source1');
const pict2 = document.getElementById('source2');
const ctx = canvas.getContext('2d');
buttonrgb = document.getElementById("rgb");
button1 = document.getElementById("img1");
button2 = document.getElementById("img2");


// Elección de la imagen 1
button1.onclick = () => {
  pict1.onload = function () {
    console.log("Imagen 1 cargada");
  };
  // Dibuja la imagen en el canvas
  // con el tamaño original
  canvas.width = pict1.width;
  canvas.height = pict1.height;
  ctx.drawImage(pict1, 0,0);
}

// Elección de la imagen 2
button2.onclick = () => {
  pict2.onload = function () {
    console.log("Imagen 2 cargada");
  };
  canvas.width = pict2.width;
  canvas.height = pict2.height;
  ctx.drawImage(pict2, 0,0);
}

// Filtro de color
buttonrgb.onclick = () => {
  
}


