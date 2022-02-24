'use strict';

//selecting Elements
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');

const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');


//Starting Conditions
score0El.textContent = 0;
score1El.textContent = 0;
current0El.textContent=0;
current1El.textContent=0;
diceEl.classList.add('hidden');

let score,curentScore,currentPlayer,playing;
function init(){
    score=[0,1];
    currentPlayer = 0;
    playing = true;
    curentScore = 0;
    score0El.textContent = 0;
    score1El.textContent = 0;
    current0El.textContent=0;
    current1El.textContent=0;
    diceEl.classList.add('hidden');
    
    player0El.classList.remove('player--winner');
    player1El.classList.remove('player--winner');
    player0El.classList.add('player--active');
    player1El.classList.remove('player--active');
};
init();
//Switching Player Function
const switchplayer = function(){
    curentScore = 0;
    document.getElementById(`current--${currentPlayer}`).textContent = curentScore;
    currentPlayer = currentPlayer===0? 1:0;
    player0El.classList.toggle('player--active');
    player1El.classList.toggle('player--active');
};

//Rolling Dice Function
btnRoll.addEventListener('click', function(){
    if (playing){
        //1. Generating random dice
        const dice = Math.trunc(Math.random()*6)+1;

        //2.Display Dice
        diceEl.classList.remove('hidden');
        diceEl.src = `dice-${dice}.png`;

        //3. Check for One i.e. 1
        if (dice != 1){
            //Add scores to current player score
            curentScore += dice;
            document.getElementById(`current--${currentPlayer}`).textContent = curentScore;
        }else{
            //switch to the other player
            switchplayer();
        }
    }
});

btnHold.addEventListener('click', function(){
    if  (playing){
        //add current score to the score of current player
        score[currentPlayer] += curentScore;
        //Assigning the current score to the score of current player
        document.getElementById(`score--${currentPlayer}`).textContent = score[currentPlayer];
        //Checking score 
        if (score[currentPlayer] >=100){
            //finish the game
            playing = false;
            //hidding the dice
            diceEl.classList.add('hidden');
            document.querySelector(`.player--${currentPlayer}`).classList.add('player--winner');
            document.querySelector(`.player--${currentPlayer}`).classList.remove('player--active');
        }else{
            switchplayer();
        }
    }
});

btnNew.addEventListener('click', function(){
    if(!playing){
        init();
    }
});