const MAIN_CONTAINER = document.querySelector(".main_container");
const AGAIN_BUTTON = document.getElementById("again");
const CORRECT_NUMBER = document.getElementById("number");
const INPUT_ANSWER = document.getElementById("check_number");
const CHECK_NUMBER_BUTTON = document.getElementById("check_number_btn");
const GUESS_MESSAGE = document.getElementById("start_guessing");
const SCORE_NUMBER = document.getElementById("score_number");
const HIGHT_SCORE_NUMBER = document.getElementById("hight_score_number");

// const RANDOM_NUMBER = [
//   1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
// ];

let TOTAL_SCORE = 20;
let HIGHT_SCORE = 0;
const MAX_NUMBER = 20;

SCORE_NUMBER.textContent = TOTAL_SCORE;
HIGHT_SCORE_NUMBER.textContent = HIGHT_SCORE;

let secretNumber = Math.floor(Math.random() * MAX_NUMBER) + 1;
// let secretNumber = RANDOM_NUMBER[randomIndex - 1];
console.log(secretNumber);

CHECK_NUMBER_BUTTON.addEventListener("click", () => {
  const guess = Number(INPUT_ANSWER.value);

  if (guess === secretNumber) {
    MAIN_CONTAINER.style.backgroundColor = "green";
    GUESS_MESSAGE.textContent = "🎉 Correct Number!";
    CORRECT_NUMBER.textContent = secretNumber;
    if (TOTAL_SCORE > HIGHT_SCORE) {
      HIGHT_SCORE = TOTAL_SCORE;
      HIGHT_SCORE_NUMBER.textContent = HIGHT_SCORE;
    }
  } else {
    if (TOTAL_SCORE > 1) {
      TOTAL_SCORE--;
      SCORE_NUMBER.textContent = TOTAL_SCORE;
      GUESS_MESSAGE.textContent =
        guess > secretNumber ? "📈 Too high!" : "📉 Too low!";
    } else {
      MAIN_CONTAINER.style.backgroundColor = "red";
      GUESS_MESSAGE.textContent = "💥 You lost the game!";
      SCORE_NUMBER.textContent = 0;
    }
  }
});

AGAIN_BUTTON.addEventListener("click", () => {
  TOTAL_SCORE = 20;
  SCORE_NUMBER.textContent = TOTAL_SCORE;
  MAIN_CONTAINER.style.backgroundColor = "";
  CORRECT_NUMBER.textContent = "?";
  INPUT_ANSWER.value = "";
  secretNumber = Math.floor(Math.random() * MAX_NUMBER) + 1;
  console.log(secretNumber);
});
