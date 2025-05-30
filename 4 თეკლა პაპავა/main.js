const button = document.getElementById("button");
const title = document.getElementById("title");
const numberBox = document.getElementById("number-box");
const input = document.getElementById("number-input");
const checkBtn = document.getElementById("check-btn");
const message = document.getElementById("message");
const scoreLabel = document.getElementById("score-label");
const highscoreLabel = document.getElementById("highscore-label");


let number = Math.floor(Math.random() * 20) + 1;
console.log(number);
let score = 20;
let highscore = 0;


checkBtn.addEventListener("click", ()=>{

    const guess = Number(input.value);

    if(!guess || guess < 1 || guess > 20){
        message.textContent = "Please enter a number between 1 and 20!";
        return;
    }

    if(guess === number){
        message.textContent = "Correct Number!";
        document.body.style.backgroundColor = "#60b347";
        numberBox.textContent = number;
        
        if(score > highscore){
            highscore = score;
            highscoreLabel.textContent = `Highscore: ${highscore}`;
        }
    
        input.disabled = true;
        checkBtn.disabled = true;
    }else{
        if(guess > number){
            message.textContent = "Too high!";
        }else{
            message.textContent = "Too low!";
        }

        score--;
        scoreLabel.textContent = `Score: ${score}`;

        if(score === 0){
            message.textContent = "You lost the game!";

            number.disabled = true;
            checkBtn.disabled = true;
        }
    }
})


button.addEventListener("click", ()=>{
    score = 20;
    scoreLabel.textContent = `Score: ${score}`;
    message.textContent = `Start guessing...`;
    input.value = "";
    input.disabled = false;
    checkBtn.disabled = false;
    numberBox.textContent = "?";
    document.body.style.backgroundColor = "#222";
    number = Math.floor(Math.random() * 20) + 1;
})












































