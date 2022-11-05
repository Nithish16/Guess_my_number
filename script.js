'use strict';

// document.querySelector('.message').textContent = '😃You are correct🍻!!';
// document.querySelector('.number').textContent = 16;
// document.querySelector('.guess').value = 10;
// console.log((document.querySelector('.guess').value = 220));

// The same below code with duplicate codes

// let secretNumber = Math.trunc(Math.random() * 20) + 1;
// let score = 20;
// let highScore = 0;

// document.querySelector('.check').addEventListener('click', function () {
//   //method 1
//   //   console.log(document.querySelector('.guess').value);
//   //   method 2
//     const guess = Number(document.querySelector('.guess').value);
//   console.log(guess);
// The input received from UI is always a string so to convert the UI input from string to number we need use NUMBER function.

// when there is no input

//   if (!guess) {
//     document.querySelector('.message').textContent = '🚫No number';

//     // when the number is correct
//   } else if (guess === secretNumber) {
//     document.querySelector('.message').textContent =
//       '😃You have guessed the correct number🍻!!';
//     document.querySelector('.number').textContent = secretNumber;
//     document.querySelector('body').style.backgroundColor = '#60b347';
//     document.querySelector('.number').style.width = '30rem';

//     if (score > highScore) {
//       highScore = score;
//       document.querySelector('.highscore').textContent = highScore;
//     }

//     // when the guess is wrong
//     else if (guess !== secretNumber) {
//       if (score > 1) {
//         document.querySelector('.message').textContent =
//           guess > secretNumber ? 'Too high📈' : 'Too high📈';
//         score--;
//         document.querySelector('.score').textContent = score;
//       } else {
//         document.querySelector('.message').textContent =
//           'You have lost the game... Go home... LOL';
//         document.querySelector('.score').textContent = 0;
//       }
//     }

//     //     when the guess is too high

//     //   } else if (guess > secretNumber) {
//     //     if (score > 1) {
//     //       document.querySelector('.message').textContent = 'Too high📈';
//     //       score--;
//     //       document.querySelector('.score').textContent = score;
//     //     } else {
//     //       document.querySelector('.message').textContent =
//     //         'You have lost the game... Go home... LOL';
//     //       document.querySelector('.score').textContent = 0;
//     //     }

//     //     when the guess is too low
//     //   } else if (guess < secretNumber) {
//     //     if (score > 1) {
//     //       document.querySelector('.message').textContent = 'Too low📈';
//     //       score--;
//     //       document.querySelector('.score').textContent = score;
//     //     } else {
//     //       document.querySelector('.message').textContent =
//     //         'You have lost the game... Go home... LOL';
//     //       document.querySelector('.score').textContent = 0;
//     //     }
//     //   }

//     //when click the again button

//     document.querySelector('.again').addEventListener('click', function () {
//       score = 20;
//       secretNumber = Math.trunc(Math.random() * 20) + 1;

//     //   document.querySelector('.message').textContent = 'Start guessing...';
//       displayMessage('Start guessing...')
//       document.querySelector('.score').textContent = score;
//       document.querySelector('.number').textContent = '?';
//       document.querySelector('.guess').value = '';
//       document.querySelector('body').style.backgroundColor = '#222';
//       document.querySelector('.number').style.width = '15rem';
//     });
//   }
// });

// The correct way of coding with refactoring

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  //method 1
  //   console.log(document.querySelector('.guess').value);
  //   method 2
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess);
  // The input received from UI is always a string so to convert the UI input from string to number we need use NUMBER function.

  // when there is no input

  if (!guess) {
    displayMessage('🚫No number');

    // when the number is correct
  } else if (guess === secretNumber) {
    displayMessage('😃You have guessed the correct number🍻!!');
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }

    // when the guess is wrong
    else if (guess !== secretNumber) {
      if (score > 1) {
        displayMessage(guess > secretNumber ? 'Too high📈' : 'Too high📈');
        score--;
        document.querySelector('.score').textContent = score;
      } else {
        displayMessage('You have lost the game... Go home... LOL');
        document.querySelector('.score').textContent = 0;
      }
    }

    //when click the again button

    document.querySelector('.again').addEventListener('click', function () {
      score = 20;
      secretNumber = Math.trunc(Math.random() * 20) + 1;
      displayMessage('Start guessing...');
      document.querySelector('.score').textContent = score;
      document.querySelector('.number').textContent = '?';
      document.querySelector('.guess').value = '';
      document.querySelector('body').style.backgroundColor = '#222';
      document.querySelector('.number').style.width = '15rem';
    });
  }
});
