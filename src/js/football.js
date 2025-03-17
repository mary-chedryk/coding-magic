document.addEventListener("DOMContentLoaded", () => {
    const ball = document.getElementById("ball");
    const goal = document.getElementById("goal");
    const scoreDisplay = document.getElementById("score");
    let score = 0;

    goal.addEventListener("click", () => {
        const goalRect = goal.getBoundingClientRect();
        const ballRect = ball.getBoundingClientRect();

        ball.style.transition = "all 0.5s ease-in-out";
        ball.style.left = goalRect.left + goalRect.width / 2 - ballRect.width / 2 + "px";
        ball.style.top = goalRect.top + goalRect.height / 2 - ballRect.height / 2 + "px";

        setTimeout(() => {
            score++;
            scoreDisplay.textContent = score;
            resetBall();
        }, 600);
    });

    function resetBall() {
        ball.style.transition = "none";
        ball.style.left = "50px";
        ball.style.top = "50%";
    }
});
