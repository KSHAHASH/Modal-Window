'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const closeModal = document.querySelector('.close-modal');
const openModal = document.querySelectorAll('.show-modal');


console.log(openModal);
console.log()

const open = function(){
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
    
}

const close = function(){
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
    
}

for(let i =0; i<openModal.length; i++){
    openModal[i].addEventListener('click', open)
}

// closing the modal using "x" button
closeModal.addEventListener('click', close);

//close the modal by pressing outside of the modal 
overlay.addEventListener('click', close);

//close the modal using "esc" key
document.addEventListener('keydown', function(e){
    console.log(e);
    if(e.key==='Escape' && !modal.classList.contains('hidden') ){
        close();
    }

})