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

let x = canvas.width/2;
let y = canvas.height-20;
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
}

// Pelota en movimiento
function move() {
    console.log('Pelota en mvto...');
    if (x < ballSize || x >= (canvas.width - ballSize) ) {
        velx = -velx;
    }
    if (y <= ballSize || y > (canvas.height - ballSize) ) {
        vely = -vely
    }
    x = x + velx;
    y = y + vely;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawBall();
    drawPaddle();
    requestAnimationFrame(move);
}

move();

    