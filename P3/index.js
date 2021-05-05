console.log('Ejecutando JS...');

// Variables
const canvas = document.getElementById("canvas");
var brickRows = 5; // 5 filas y 9 columnas!
var brickColumns = 9;
var brickWidth = 50;    
var brickHeight = 20;
var brickPadding = 8;    // Espacio entre ladrillos
var brickMarginTop = 40;
var brickMarginLeft = 15;
// Variables pelota (Coord-Vel)
let x = canvas.width/2;
let y = canvas.height/2+500;
let velx = 3;
let vely = 1;

// Defino el tamaño del canvas
canvas.width = 550;
canvas.height = 690;

// Dibujo en el canvas a partir del contexto
const ctx = canvas.getContext("2d");

// Implemento ladrillos en matriz bidimensional
var bricks = [];
for (i=0; i<brickColumns; i++) {
    bricks[i] = [];
    for(j=0; j<brickRows; j++) {
        bricks[i][j] = {x: 0, y: 0};    // Inicializo la posición de cada ladrillo
    }
}

// Función para dibujar ladrillos
function drawBricks() {
    for(i=0; i<brickColumns; i++) {
        for(j=0; j<brickRows; j++) {
            var brickX = (i*(brickWidth+brickPadding))+brickMarginLeft;     // Asocio a cada ladrillo
            var brickY = (j*(brickHeight+brickPadding))+brickMarginTop;     // su posición
            bricks[i][j].x = brickX;
            bricks[i][j].y = brickY;
            ctx.beginPath();
            ctx.rect(brickX, brickY, brickWidth, brickHeight);              // Estilo del ladrillo
            ctx.fillStyle = 'lightseagreen';
            ctx.fill();
            ctx.closePath();        
        }
    }
}

// Dibujo pelota
function drawBall() {
    ctx.beginPath();
    ctx.arc(x, y, 10, 0, Math.PI*2, false);
    ctx.fillStyle = 'black';
    ctx.fill();
    ctx.closePath();
}

//function moveBall() {
  //  console.log('Ejecutando movimientos con la pelota...');
    // Rebote en extremos
    //if (x < 0 || x >= (canvas.width) {
      //  velx = -velx;
    //}
   // if (y <= 0 || y > canvas.height) {
     //   vely = -vely;
    //}
    // Actualizar posición
    //x = x + velx;
    //y = y + vely;
    // Borrar canvas
    //ctx.clearRect(0, 0, canvas.width, canvas.height);
    //ctx.beginPath();    // Dibujar la pelota
      //  ctx.arc(x, y, 10, 0, Math.PI*2);
        //ctx.fillStyle = 'black';
        // ctx.fill();
   // ctx.closePath();
   // requestAnimationFrame(moveBall);
//}

drawBricks();
drawBall();
//moveBall();

    