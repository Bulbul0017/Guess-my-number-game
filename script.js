'use strict';
/*
console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = 'Correct Number!';

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;

console.log(document.querySelector('.guess').value);
document.querySelector('.guess').value = 23;
*/

let correctNumber = Math.trunc(Math.random() * 20) + 1;
//document.querySelector('.number').textContent = correctNumber;
let score = 20;
let highscore = 0;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess);

  //when there is no input
  if (!guess) {
    document.querySelector('.message').textContent = '⛔ No Number!';
  }

  //when player wins
  else if (guess === correctNumber) {
    document.querySelector('.message').textContent = '🎉 Correct Number!';
    document.querySelector('.number').textContent = correctNumber;
    //document.querySelector('.highscore').textContent = score;

    document.querySelector('body').style.backgroundColor = '#60b347';

    document.querySelector('.number').style.width = '30rem';
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  }

  //when guess is too high
  /* else if (guess > correctNumber && guess <= 20) {
    if (score > 1) {
      document.querySelector('.message').textContent = '📈 Too High!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '😢 You Lost!';
      document.querySelector('.score').textContent = 0;
    }
  } */

  //when guess is too low
  else if (guess != correctNumber && guess >= 1 && guess <= 20) {
    if (score > 1) {
      if (guess < correctNumber)
        document.querySelector('.message').textContent = '📉 Too Low!';
      else document.querySelector('.message').textContent = '📈 Too High!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '😢 You Lost!';
      document.querySelector('.score').textContent = 0;
      document.querySelector('body').style.backgroundColor = '#FF0000';
    }
  }

  //when number is not in range
  else if (guess < 1 || guess > 20) {
    document.querySelector('.message').textContent =
      '❌ Guess between 1 and 20!';
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  correctNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';

  document.querySelector('body').style.backgroundColor = '#222';

  document.querySelector('.number').style.width = '15rem';
});
