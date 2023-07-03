const BTN_LEFT = document.querySelector(".btn-prev");
const BTN_RIGHT = document.querySelector(".btn-next");
const CAROUSEL = document.querySelector(".slider");
// const CARDS = document.querySelector(".cards");
// const CARDS_LIST = document.querySelector(".card");


const moveLeft = () => {
    CAROUSEL.classList.add("to-left");
    BTN_LEFT.removeEventListener('click', moveLeft);
    BTN_RIGHT.removeEventListener('click', moveRight);
};
const moveRight = () => {
    CAROUSEL.classList.add("to-right");
    BTN_LEFT.removeEventListener('click', moveLeft);
    BTN_RIGHT.removeEventListener('click', moveRight);
};

BTN_LEFT.addEventListener('click', moveLeft);
BTN_RIGHT.addEventListener('click', moveRight);

CAROUSEL.addEventListener("animationend",(animationEvent) => {
    if (animationEvent.animationName ==="to-left") {
        CAROUSEL.classList.remove("to-left");        
    } else {
        CAROUSEL.classList.remove("to-right");
    }  
    
    BTN_LEFT.addEventListener('click', moveLeft);
    BTN_RIGHT.addEventListener('click', moveRight);
});



// BTN_RIGHT.addEventListener('click', () => {
//     CAROUSEL.classList.add("to-right");
// });