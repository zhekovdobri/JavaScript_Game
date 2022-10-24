'use strict';

let secretNumber = Math.trunc(Math.random( )*20) + 1;
let score = 20;
let highscore = 0;

const displayMessage = function(message) {
    document.querySelector('.message').textContent = message;
}
const displayNumber = function(number) {
    document.querySelector('.number').textContent = number;
}
const displayScore = function(score) {
    document.querySelector('.score').textContent = score;
}

document.querySelector('.check').addEventListener('click', function() {
    const guess = Number(document.querySelector('.guess').value);
    console.log(guess, typeof guess);
    // When there is no input
    if(!guess) {
        // document.querySelector('.message').textContent = '⛔ No number';
        displayMessage('⛔ No number');
    
    // When player win
    } else if (guess === secretNumber) {
        // document.querySelector('.message').textContent = '🥳 Correct number';
        displayMessage('🥳 Correct number');
        //document.querySelector('.number').textContent = secretNumber;
        displayNumber(secretNumber);

        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '30rem';

        if(score > highscore) {
            highscore = score;
            document.querySelector('.highscore').textContent = highscore;
        }

    // When guess is wrong  
    } else if (guess !== secretNumber) {
        if(score > 1) {
            // document.querySelector('.message').textContent = guess > secretNumber ? '📈 To high' : '📈 To low';
            displayMessage(guess > secretNumber ? '📈 To high' : '📈 To low');
            score--;
            //document.querySelector('.score').textContent = score;
            displayScore(score);
        } else {
            // document.querySelector('.message').textContent = '💥 You lost the Game!';
            displayMessage('💥 You lost the Game!');
            //document.querySelector('.score').textContent = 0;
            displayScore(0);
        }
    }
});

// Asignment
document.querySelector('.again').addEventListener('click', function() {
    score = 20;
    secretNumber = Math.trunc(Math.random( )*20) + 1;

    // document.querySelector('.message').textContent = 'Start guessing...';
    displayMessage('Start guessing...');
    //document.querySelector('.score').textContent = score;
    displayScore(score);
    //document.querySelector('.number').tеxtContent = '?'; 
    displayNumber('?');
    document.querySelector('.guess').value = '';

    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
});
