document.addEventListener("DOMContentLoaded", () => {
    const ball = document.getElementById("ball");
    const goal = document.getElementById("goal");
    const scoreDisplay = document.getElementById("score");
    let score = 0;
    const positions = [
        { left: "30%", top: "50%" },
        { left: "50%", top: "40%" },
        { left: "70%", top: "50%" }
    ];

    goal.addEventListener("click", () => {
        const goalRect = goal.getBoundingClientRect();
        const fieldRect = document.getElementById("field").getBoundingClientRect();
        
        const goalCenterX = goalRect.left + goalRect.width / 2 - fieldRect.left;
        const goalCenterY = goalRect.top + goalRect.height / 2 - fieldRect.top;
        
        ball.style.transition = "all 0.5s ease-in-out";
        ball.style.left = `${goalCenterX - ball.offsetWidth / 2}px`;
        ball.style.top = `${goalCenterY - ball.offsetHeight / 2}px`;
        
        setTimeout(() => {
            score++;
            scoreDisplay.textContent = score;
            resetBall();
        }, 600);
    });

    function resetBall() {
        ball.style.transition = "none";
        const randomPos = positions[Math.floor(Math.random() * positions.length)];
        ball.style.left = randomPos.left;
        ball.style.top = randomPos.top;
    }
});
