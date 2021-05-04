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

drawBricks();


    