console.log("Ejecutando JS....")

//-- Obtener elementos del DOM
const canvas = document.getElementById('canvas');
const pict1 = document.getElementById('source1');
const pict2 = document.getElementById('source2');
const ctx = canvas.getContext('2d');
button1 = document.getElementById("img1");
button2 = document.getElementById("img2");


button1.onclick = () => {
  console.log("claaakc");
  pict1.onload = function () {
    console.log("Imagen 1 cargada");
  };
  canvas.width = pict1.width;
  canvas.height = pict1.height;
  ctx.drawImage(pict1, 0,0);
}

button2.onclick = () => {
  console.log("cliiikc");
  pict2.onload = function () {
    console.log("Imagen 2 cargada");
  };
  canvas.width = pict2.width;
  canvas.height = pict2.height;
  ctx.drawImage(pict2, 0,0);
}

//boton2.onclick = () => {
  //imagen2.onload = function(){
    //console.log("Cargamos imagen 2");
    //console.log("Imagen 2");
  //};
  //img = imagen2;
  //ctx.drawImage(img, 0,0);
//}


