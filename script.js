'use strict';
/*
// console.log(document.querySelector('.between').textContent);
document.querySelector('.message').textContent = '🎉Correct Number!';

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;
document.querySelector('.guess').value = 23;
// console.log(document.querySelector('.guess').value);
document.querySelector('.guess').value = 23;


document.querySelector('.check').addEventListener('click', function () {
  console.log(document.querySelector('.guess').value);
  document.querySelector('.message').textContent = '🎉Correct Number!';
});
*/
let secretNumber = Math.trunc(Math.random() * 20) + 1;
console.log(secretNumber);
// let score = 20;
let score = document.querySelector('.score').textContent;
let highScore = document.querySelector('.highscore').textContent;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};
const displayScore = function (scores) {
  document.querySelector('.score').textContent = scores;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  //NO VALUE
  if (!guess) {
    displayMessage('⛔ No Number');
  }
  //WRONG VALUE
  else if (guess !== secretNumber) {
    if (score > 1) {
      score -= 1;
      displayScore(score);
      document.querySelector('.message').textContent =
        guess > secretNumber ? '📈 Too high!' : '📉 Too low!';
    } else {
      displayMessage('💥 You lose the game');
      displayScore(0);
    }
  }
  //HIGH VALUE
  // else if (guess > secretNumber) {
  //   document.querySelector('.message').textContent = '📈 Too high!';

  //   //LOW VALUEC
  // } else if (guess < secretNumber) {
  //   // score--;
  //     document.querySelector('.message').textContent = '📉 Too low!';

  //   //WINNER
  // }
  else if (guess === secretNumber) {
    displayMessage('🎉 Correct Number!');
    document.querySelector('.number').textContent = guess;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
  }
});
//AGAIN BTN
document.querySelector('.again').addEventListener('click', function () {
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  score = 20;
  displayMessage('😜 Start guessing...');
  displayScore(score);
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
