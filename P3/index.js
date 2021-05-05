console.log('Ejecutando JS...');

const canvas = document.getElementById("canvas");

// Defino el tamaño del canvas
canvas.width = 550;
canvas.height = 690;

// Obtengo el contexto del canvas
const ctx = canvas.getContext("2d");

// Variables
var ballSize = 10;
var paddleHeight = 12;
var paddleWidth = 65;
var paddle = (canvas.width - paddleWidth)/2;
var rightPressed = false;
var leftPressed = false;
var brickRows = 5; // 5 filas y 9 columnas!
var brickColumns = 9;
var brickWidth = 50;    
var brickHeight = 20;
var brickPadding = 8;    // Espacio entre ladrillos
var brickMarginTop = 40;
var brickMarginLeft = 15;
var ballSize = 10;

let x = canvas.width/2;
let y = canvas.height-190;
let velx = 4;
let vely = 2;

// Dibujo pelota
function drawBall() {
    ctx.beginPath();
        ctx.arc(x, y, ballSize, 0, Math.PI*2);
        ctx.fillStyle = 'black';
        ctx.fill();
    ctx.closePath();
}

// Dibujo raqueta
function drawPaddle() {
    ctx.beginPath();
        ctx.rect(paddle, canvas.height-paddleHeight, paddleWidth, paddleHeight);
        ctx.fillStyle = 'black';
        ctx.fill();
    ctx.closePath();
    booleanPaddle();
}

// Estado teclas raqueta
function booleanPaddle() {
    window.onkeydown = (e) => {     // Tecla pulsada
        if (e.keyCode == 39) {
            rightPressed = true;
        }
        else if(e.keyCode == 37) {
            leftPressed = true;
        } 
    }
    window.onkeyup = (e) => {       // Tecla liberada
        if (e.keyCode == 39) {
            rightPressed = false;
        }
        else if(e.keyCode == 37) {
            leftPressed = false;
        } 
    }
}

// Implemento ladrillos en matriz bidimensional
var bricks = [];
for (i=0; i<brickColumns; i++) {
    bricks[i] = [];
    for(j=0; j<brickRows; j++) {
        bricks[i][j] = {x: 0, y: 0};    // Inicializo la posición de cada ladrillo
    }
}

// Dibujo ladrillos
function drawBricks() {
    for(i=0; i<brickColumns; i++) {
        for(j=0; j<brickRows; j++) {
            var brickX = (i*(brickWidth+brickPadding))+brickMarginLeft;     // Asocio a cada ladrillo
            var brickY = (j*(brickHeight+brickPadding))+brickMarginTop;     // su posición
            bricks[i][j].x = brickX;
            bricks[i][j].y = brickY;
            ctx.beginPath();
                ctx.rect(brickX, brickY, brickWidth, brickHeight);              // Estilo del ladrillo
                ctx.fillStyle = '#851B03';
                ctx.fill();
            ctx.closePath();        
        }
    }
}

// Movimientos del juego
function move() {
    console.log('Pelota en mvto...');
    if (x < ballSize || x >= (canvas.width - ballSize)) {
        velx = -velx;
    }
    if (y <= ballSize) {
        vely = -vely
    }
    else if(y > (canvas.height - ballSize)) {
        if(x > paddle && x < paddle + paddleWidth){
            vely = -vely;
        }
        else{
            alert('GAME OVER');
        }
    }
    
    if(rightPressed && paddle < canvas.width - paddleWidth) {
        paddle = paddle + 7;
    }
    else if(leftPressed && paddle > 0) {
        paddle = paddle - 7;
    }

    x = x + velx;
    y = y + vely;

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    drawBricks();
    drawBall();
    drawPaddle();
    requestAnimationFrame(move);
}


move();

    