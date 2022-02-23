'use strict';

//generating SecretNumber to be guessed
let secret = Math.trunc(Math.random()*20)+1;
let score =20;
let highscore = 0;

//function for displaying message
const displayMessage = function(message){
    document.querySelector('.message').textContent = message;
}

//Check the guess
document.querySelector('.check').addEventListener('click', function(){
    //Getting guessed number from user input
    const guess = Number(document.querySelector('.guess').value);
    //condition for empty guess
    if (!guess){
        displayMessage('😡 No Number!');
    }
    //if secret number is correctly guessed
    else if (guess === secret){
        document.querySelector('.number').textContent = secret;
        displayMessage('🎉 Correct Number!');
        document.querySelector('body').style.backgroundColor = "#60b347";
        document.querySelector('.number').style.width ='30rem';
        if (score > highscore){
            highscore = score;
        }
        document.querySelector('.score').textContent=score;
        document.querySelector('.highscore').textContent=highscore;
    }
    //if guess is high or low then secret number
    else if (guess != secret){
        if (score >0){
            displayMessage(guess > secret ? '📈 Too high!':'📉 Too Low!');
            score --;
            document.querySelector('.score').textContent=score;
        }
        else {
            displayMessage('💥 You Lost the Game!');
            score = 0;
            document.querySelector('.score').textContent=score; 
        }
    }
});

//On play again event 
document.querySelector('.again').addEventListener('click', function(){
    secret = Math.trunc(Math.random()*20)+1;
    score =20;
    displayMessage('🔎 Start Guessing....');
    document.querySelector('.score').textContent=score;
    document.querySelector('.number').textContent='?';
    document.querySelector('.guess').value ='';
    document.querySelector('body').style.backgroundColor = "#222";
    document.querySelector('.number').style.width ='15rem';
})
