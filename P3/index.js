console.log('Ejecutando JS...');

const canvas = document.getElementById("canvas");

// Defino el tamaño del canvas
canvas.width = 550;
canvas.height = 690;

// Obtengo el contexto del canvas
const ctx = canvas.getContext("2d");

// Variables
var ballSize = 10;


let x = canvas.width/2;
let y = canvas.height-20;
let velx = 3;
let vely = 1;

// Dibujo pelota
function drawBall() {
    ctx.beginPath();
        ctx.arc(x, y, ballSize, 0, Math.PI*2);
        ctx.fillStyle = 'black';
        ctx.fill();
    ctx.closePath();
}

// Pelota en movimiento
function move() {
    console.log('Función mvto');
    if (x < 0 || x >= (canvas.width - ballSize) ) {
        velx = -velx;
    }
    if (y <= 0 || y > (canvas.height - ballSize) ) {
        vely = -vely
    }
    x = x + velx;
    y = y + vely;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawBall();
    requestAnimationFrame(move);
}

move();

    