console.log('Ejecutando JS del Breakout...');

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
const BRICK = {
    rows: 7,
    columns: 9,
    width: 50,
    height: 20,
    padding: 8,
    marginTop: 60,
    marginLeft: 15,
    show: true
};

let x = canvas.width/2;
let y = canvas.height-190;
let velx = 4;
let vely = 2;
let scores = 0;
let lifes = 5;

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
for (i=0; i<BRICK.columns; i++) {
    bricks[i] = [];
    for(j=0; j<BRICK.rows; j++) {
        bricks[i][j] = {
            x: (i*(BRICK.width+BRICK.padding))+BRICK.marginLeft,
            y: (j*(BRICK.height+BRICK.padding))+BRICK.marginTop,
            visible: BRICK.show
        };  // Asocio a cada ladrillo su posición y su visibilidad (true)
    }
}

// Dibujo ladrillos
function drawBricks() {
    collisions();
    for(i=0; i<BRICK.columns; i++) {
        for(j=0; j<BRICK.rows; j++) {
            if(bricks[i][j].visible){
              ctx.beginPath();
                ctx.rect(bricks[i][j].x, bricks[i][j].y, BRICK.width, BRICK.height);              // Estilo del ladrillo
                ctx.fillStyle = '#851B03';
                ctx.fill();
            ctx.closePath();  
            }       
        }
    }
}

// Detecto colisiones 
function collisions() {
    for(i=0; i<BRICK.columns; i++) {
        for(j=0; j<BRICK.rows; j++) {
            var l = bricks[i][j];
            if(l.visible == true) {
                if(x > l.x && x < l.x + BRICK.width && y > l.y && y < l.y + BRICK.height) {
                    vely = -vely;
                    l.visible = false;
                    scores += 1;
                }
            }
        }
    }
}

// Mostrar puntuación y vidas
function drawPoints() {
    ctx.font = "25px Fantasy";
    ctx.filltyle = 'black';
    ctx.fillText("Puntuación: " + scores, 10, 40);
    ctx.fillText("Vidas: " + lifes, 430, 40);
}

// Movimientos del juego
function move() {
    console.log('Pelota en mvto...');
    if (x < ballSize || x >= (canvas.width - ballSize)) {
        velx = -velx;
    }
    if (y <= ballSize) {
        vely = -vely
    } else if (y > (canvas.height - ballSize)) {
        if (x > paddle && x < paddle + paddleWidth) {
            vely = -vely;   // En caso de rebotar en la raqueta
        }else{            // En caso de tocar el suelo
            lifes = lifes - 1;
            console.log(lifes);
            if (lifes <= 0) {
                alert("GAME OVER");
                document.location.reload();
            }
        }
    }
    if(rightPressed && paddle < canvas.width - paddleWidth) {
        paddle = paddle + 7;
    } else if(leftPressed && paddle > 0) {
        paddle = paddle - 7;
    }

    x = x + velx;
    y = y + vely;

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    drawBricks();
    drawBall();
    drawPaddle();
    drawPoints();
    requestAnimationFrame(move);
}

move();

    