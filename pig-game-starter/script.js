'use strict';

const scoreEl0 = document.getElementById('score--0');
const scroreEl1 = document.getElementById('score--1');

const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');

const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');

let currentScore, activePlayer, scores, playing;

//starting conditions
scoreEl0.textContent = 0;
scroreEl1.textContent = 0;
diceEl.classList.add('hidden');

const switchPlayer = function () {
  //switch to next player
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  currentScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;

  player0El.classList.toggle('player--active');
  player1El.classList.toggle('player--active');
};

const init = function () {
  playing = true;
  currentScore = 0;
  activePlayer = 0;
  scores = [0, 0];

  scoreEl0.textContent = 0;
  scroreEl1.textContent = 0;

  current0El.textContent = 0;
  current1El.textContent = 0;

  player0El.classList.remove('player--winner');
  player1El.classList.remove('player--winner');

  player0El.classList.add('player--active');
  player1El.classList.remove('player--active');
};

init();

//rolling conditions

btnRoll.addEventListener('click', function () {
  if (playing) {
    //1. generation the random number

    const dice = Math.trunc(Math.random() * 6 + 1);

    console.log(dice);
    //2. display the dice

    diceEl.classList.remove('hidden');
    diceEl.src = `dice-${dice}.png`;
    //3. check for the rolled 1 if == 1

    if (dice !== 1) {
      currentScore += dice;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
    } else {
      //then switch the player 2
      switchPlayer();
    }
  }
});

btnHold.addEventListener('click', function () {
  if (playing) {
    //1. add current score to active player score
    scores[activePlayer] += currentScore;
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];

    //2. check if score is >= 100

    if (scores[activePlayer] >= 20) {
      playing = false;
      diceEl.classList.add('hidden');

      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active');
    } else {
      //3. switch to the next player
      switchPlayer();
    }
  }
});

btnNew.addEventListener('click', init);
