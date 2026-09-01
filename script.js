'use strict';

// document.querySelector('.message').textContent = 'correct number!';

// document.querySelector('.score').textContent = 12;

// document.querySelector('.guess').value =  23;

// console.log(document.querySelector('.guess').value);


let  secretNumber = Math.trunc(Math.random () * 20 ) + 1 ;

let score = 20;
let highscore = 0;


const displayMessage = function (message) {
    document.querySelector('.message').textContent = message;
}

document.querySelector('.check').addEventListener('click', function (){
    const guess = Number (document.querySelector('.guess').value);
    
    if (!guess) {
        displayMessage(' No number entered!');
    }

    else if (guess !== secretNumber) {
        if (score > 1) {
            displayMessage(guess > secretNumber ? 'Too High!' : 'Too Low!');
            score--;
            document.querySelector('.score').textContent = score;
        } else {
            displayMessage('You lost the game!');
            document.querySelector('.score').textContent = 0;
        }
    }
    else if (guess === secretNumber) {
        displayMessage('correct number!');
        score--;
        document.querySelector('.score').textContent = score;
        document.querySelector('.number').textContent = secretNumber;
        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '40rem';

        if (score > highscore) {
            highscore = score;
            document.querySelector('.highscore').textContent = highscore;
        }
    }
})


//coding challange  ---1 //

document.querySelector('.again').addEventListener('click', function () {
    score = 20;

     secretNumber = Math.trunc(Math.random () * 20 ) + 1 ;

    displayMessage('Start guessing...');
    document.querySelector('.score').textContent = score;
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = '';
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
})