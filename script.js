'use strict';
// Select Element
const player0Ele = document.querySelector('.player--0');
const player1Ele = document.querySelector('.player--1');
const score0Ele = document.querySelector('#score--0');
const score1Ele = document.getElementById('score--1');
const current0Ele = document.getElementById('current--0');
const current1Ele = document.getElementById('current--1');

const diceEle = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

// Start Condition
score0Ele.textContent = 0;
score1Ele.textContent = 0;
diceEle.classList.add('hidden');

const scores = [0,0]; // Final score
let currentScore = 0;
let activePlayer = 0;

// Rolling dice Function
btnRoll.addEventListener('click', function() {
  // 1. Generating a random roll
  const dice = Math.trunc(Math.random() * 6) + 1;
  console.log(dice);

  // 2. Display roll Dice
  diceEle.classList.remove('hidden')
  diceEle.src = `dice-${dice}.png`

  // 3. Check for roll = 1 
  if(dice !== 1) {
    currentScore += dice;
    document.getElementById(`current--${activePlayer}`).textContent = currentScore;
  } else {
    // Switch player 
    document.getElementById(`current--${activePlayer}`).textContent = 0;
    activePlayer = activePlayer === 0 ? 1 : 0;
    currentScore = 0;
    player0Ele.classList.toggle('player--active');
    player1Ele.classList.toggle('player--active');
  }
})
