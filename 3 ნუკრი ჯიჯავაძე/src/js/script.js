let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

const numberDisplay = document.querySelector('.number');
const guessInput = document.querySelector('.guess');
const checkButton = document.querySelector('.check');
const againButton = document.querySelector('.again');
const message = document.querySelector('.message');
const scoreDisplay = document.querySelector('.score span');
const highscoreDisplay = document.querySelector('.highscore span');

checkButton.addEventListener('click', function () {
    const guess = Number(guessInput.value);

    if (!guess) {
        message.textContent = '⛔ No number!';
    }
    else if (guess === secretNumber) {
        message.textContent = '🎉 Correct Number!';
        numberDisplay.textContent = secretNumber;
        numberDisplay.style.width = '15rem';
        document.body.style.backgroundColor = '#60b347';

        if (score > highscore) {
            highscore = score;
            highscoreDisplay.textContent = highscore;
        }
    }
    else if (guess !== secretNumber) {
        if (score > 1) {
            message.textContent = guess > secretNumber ? '📈 Too high!' : '📉 Too low!';
            score--;
            scoreDisplay.textContent = score;
        } else {
            message.textContent = '💥 You lost the game!';
            scoreDisplay.textContent = 0;
        }
    }
});

againButton.addEventListener('click', function () {
    score = 20;
    secretNumber = Math.trunc(Math.random() * 20) + 1;

    message.textContent = 'Start guessing...';
    scoreDisplay.textContent = score;
    numberDisplay.textContent = '?';
    guessInput.value = '';
    numberDisplay.style.width = '10rem';
    document.body.style.backgroundColor = '#222';
}); 