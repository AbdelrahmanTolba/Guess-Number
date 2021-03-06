'use strict';
/*
// console.log(document.querySelector('.between').textContent);
document.querySelector('.message').textContent = 'πCorrect Number!';

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;
document.querySelector('.guess').value = 23;
// console.log(document.querySelector('.guess').value);
document.querySelector('.guess').value = 23;


document.querySelector('.check').addEventListener('click', function () {
  console.log(document.querySelector('.guess').value);
  document.querySelector('.message').textContent = 'πCorrect Number!';
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
    displayMessage('β No Number');
  }
  //WRONG VALUE
  else if (guess !== secretNumber) {
    if (score > 1) {
      score -= 1;
      displayScore(score);
      document.querySelector('.message').textContent =
        guess > secretNumber ? 'π Too high!' : 'π Too low!';
    } else {
      displayMessage('π₯ You lose the game');
      displayScore(0);
    }
  }
  //HIGH VALUE
  // else if (guess > secretNumber) {
  //   document.querySelector('.message').textContent = 'π Too high!';

  //   //LOW VALUEC
  // } else if (guess < secretNumber) {
  //   // score--;
  //     document.querySelector('.message').textContent = 'π Too low!';

  //   //WINNER
  // }
  else if (guess === secretNumber) {
    displayMessage('π Correct Number!');
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
  displayMessage('π Start guessing...');
  displayScore(score);
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
