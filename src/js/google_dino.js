const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

let dino = { x: 50, y: 150, width: 40, height: 40, dy: 0, gravity: 0.6, jumpPower: -12, grounded: false };
let obstacles = [];
let frame = 0;
let gameOver = false;

function drawDino() {
    ctx.fillStyle = "black";
    ctx.fillRect(dino.x, dino.y, dino.width, dino.height);
}

function drawObstacles() {
    ctx.fillStyle = "red";
    obstacles.forEach(obs => ctx.fillRect(obs.x, obs.y, obs.width, obs.height));
}

function update() {
    if (gameOver) return;
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    dino.dy += dino.gravity;
    dino.y += dino.dy;
    if (dino.y >= 150) {
        dino.y = 150;
        dino.dy = 0;
        dino.grounded = true;
    }

    if (frame % 90 === 0) {
        obstacles.push({ x: 800, y: 160, width: 20, height: 40 });
    }

    obstacles.forEach(obs => {
        obs.x -= 5;
        if (obs.x + obs.width < 0) obstacles.shift();
        if (dino.x < obs.x + obs.width && dino.x + dino.width > obs.x && dino.y + dino.height > obs.y) {
            gameOver = true;
            alert("Game Over! Refresh to restart.");
        }
    });

    drawDino();
    drawObstacles();
    frame++;
    requestAnimationFrame(update);
}

document.addEventListener("keydown", (e) => {
    if (e.code === "Space" && dino.grounded) {
        dino.dy = dino.jumpPower;
        dino.grounded = false;
    }
});

update();
