'use strict';

let randomNumber = () => Math.floor(Math.random() * 20 + 1);

let generatedNumber = randomNumber();
let score = 20;
let highscore = 0;

const secretNumber = document.querySelector('.number');
const message = document.querySelector('.message');
const displayScore = document.querySelector('.score');
const displayHighscore = document.querySelector('.highscore');
const guess = document.querySelector('.guess');
const bodyColor = document.querySelector('body');

document.querySelector('.check').addEventListener('click', () => {
  const gessNumber = Number(guess.value);

  if (score > 1) {
    if (!gessNumber) {
      message.textContent = '⛔ Input a Number...';
    } else if (gessNumber === generatedNumber) {
      secretNumber.textContent = generatedNumber;
      message.textContent = '🎉 Congrats! Your Guess is correct...';
      highscore = score > highscore ? score : highscore;
      displayHighscore.textContent = highscore;
      bodyColor.style.backgroundColor = 'green';
    } else if (gessNumber !== generatedNumber) {
      message.textContent =
        gessNumber > generatedNumber ? 'Too high..' : 'Too low';
      score--;
      displayScore.textContent = score;
    }
  } else {
    message.textContent = '👎 You loose! Try again...';
    bodyColor.style.backgroundColor = 'red';
  }
});

document.querySelector('.again').addEventListener('click', () => {
  generatedNumber = randomNumber();
  secretNumber.textContent = '?';
  message.textContent = 'Start guessing...';
  score = 20;
  displayScore.textContent = score;
  guess.value = '';
  bodyColor.style.backgroundColor = '#222';
});
