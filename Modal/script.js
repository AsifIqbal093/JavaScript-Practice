'use strict';

//Getting All the component required for functionality
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const buttonclosemodal = document.querySelector('.close-modal');
const btnopenmodal = document.querySelectorAll('.show-modal');

//Function for Openning Modal
const openModal = function(){
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
};

//Function for closing Modal
const closeModal = function(){
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
};

//Event handling for Openning Modal
for (let i=0; i<btnopenmodal.length; i++){
    btnopenmodal[i].addEventListener('click', openModal);
};



//Event handling for Closing Modal
buttonclosemodal.addEventListener('click',closeModal);
overlay.addEventListener('click',closeModal);


//Keyboard Event Handler for Escape to close Modal
document.addEventListener('keydown', function(e){
    if (e.key === 'Escape' && !modal.classList.contains('hidden')){
        closeModal();
    }
});
