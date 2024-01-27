'use strict';

// Secret Number
let guessNumber = Math.trunc(Math.random() * 20 + 1);

//score
let score = 20;
let highscore = 0;
document.querySelector('.score').textContent = score;

//restore score "again"
document.querySelector('.again').addEventListener('click', function () {
  score = 20; // reset score
  guessNumber = Math.trunc(Math.random() * 20 + 1); // update the global guessNumber
  document.body.style.backgroundColor = '#222';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.message').textContent = '🔄 Start guessing...';
  document.querySelector('.score').textContent = score;
  document.querySelector('.guess').value = ''; // reset the input field
});

document.querySelector('.check').addEventListener('click', function () {
  var guess = Number(document.querySelector('.guess').value);
  if (!guess) {
    document.querySelector('.message').textContent = '⛔ No Number';
  }
  //when player wins
  else if (guessNumber === guess) {
    document.querySelector('.message').textContent = '🎉 Correct Number';
    document.body.style.backgroundColor = 'green';
    document.querySelector('.number').textContent = guessNumber;

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  }
  //when guess is too high or too low
  else {
    document.querySelector('.message').textContent =
      guessNumber > guess ? '🔽 Number is lower' : '🔼 Number is higher';
    score--;
    if (score > 1) {
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.score').textContent = '💔 You lose the Game';
      document.body.style.backgroundColor = 'red';
    }
  }
});
