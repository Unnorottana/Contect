const dino = document.getElementById('dino');
const obstacle = document.getElementById('obstacle');
const scoreDisplay = document.getElementById('score');
let score = 0;
let isJumping = false;

// Jump function
function jump() {
    if (isJumping) return;
    isJumping = true;
    dino.classList.add('jump');

    setTimeout(() => {
        dino.classList.remove('jump');
        isJumping = false;
    }, 500);
}

// Collision detection
function checkCollision() {
    const dinoRect = dino.getBoundingClientRect();
    const obstacleRect = obstacle.getBoundingClientRect();

    if (
        dinoRect.left < obstacleRect.left + obstacleRect.width &&
        dinoRect.left + dinoRect.width > obstacleRect.left &&
        dinoRect.bottom > obstacleRect.top
    ) {
        alert(`Game Over! Your score was: ${score}`);
        clearInterval(scoreInterval);
        location.reload(); // Reload the page to restart the game
    }
}

// Score increment
const scoreInterval = setInterval(() => {
    score++;
    scoreDisplay.textContent = `Score: ${score}`;
}, 1000);

// Key event listener
document.addEventListener('keydown', (event) => {
    if (event.code === 'Space') {
        jump();
    }
});

// Check collision every 10 milliseconds
setInterval(checkCollision, 10);
