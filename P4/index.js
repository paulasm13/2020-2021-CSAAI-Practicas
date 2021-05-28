console.log("Ejecutando JS....")

//-- Obtener elementos del DOM
const canvas = document.getElementById('canvas');
const img1 = document.getElementById('imagesrc1');
const img2 = document.getElementById('imagesrc2');
const ctx = canvas.getContext('2d');

//-- Para la imagen uno
img1.onload = function () {

  console.log("Imagen cargada");

  //-- Se establece como tamaño del canvas el mismo
  //-- que el de la imagen original
  canvas.width = img1.width;
  canvas.height = img1.height;

  //-- Situar la imagen original en el canvas
  //-- No se han hecho manipulaciones todavia
  ctx.drawImage(img1, 0,0);
};

console.log("Fin...");