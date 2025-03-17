const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

let dino = { x: 50, y: 150, width: 40, height: 40, dy: 0, gravity: 0.6, jumpPower: -12, grounded: false };
let obstacles = [];
let frame = 0;
let score = 0; // Додаємо змінну для балів
let gameOver = false;

// Функція для малювання динозаврика
function drawDino() {
    ctx.fillStyle = "black";
    ctx.fillRect(dino.x, dino.y, dino.width, dino.height);
}

// Функція для малювання перешкод
function drawObstacles() {
    ctx.fillStyle = "red";
    obstacles.forEach(obs => ctx.fillRect(obs.x, obs.y, obs.width, obs.height));
}

// Функція для малювання рахунку
function drawScore() {
    ctx.fillStyle = "black";
    ctx.font = "20px Arial";
    ctx.fillText("Score: " + score, 10, 30); // Малюємо рахунок у верхньому лівому кутку
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

    // Генерація перешкод кожні 90 кадрів
    if (frame % 90 === 0) {
        obstacles.push({ x: 800, y: 160, width: 20, height: 40 });
    }

    obstacles.forEach(obs => {
        obs.x -= 5; // Рухаємо перешкоди ліворуч
        if (obs.x + obs.width < 0) {
            obstacles.shift(); // Видаляємо перешкоди, коли вони виходять за екран
            score++; // Збільшуємо бал при проходженні кактуса
        }

        // Перевірка на зіткнення
        if (dino.x < obs.x + obs.width && dino.x + dino.width > obs.x && dino.y + dino.height > obs.y) {
            gameOver = true;
            alert("Game Over! Refresh to restart.");
        }
    });

    drawDino();
    drawObstacles();
    drawScore(); // Малюємо рахунок
    frame++;
    requestAnimationFrame(update);
}

// Обробка події натискання клавіші
document.addEventListener("keydown", (e) => {
    if (e.code === "KeyW" && dino.grounded) {
        dino.dy = dino.jumpPower;
        dino.grounded = false;
    }
});

update();
