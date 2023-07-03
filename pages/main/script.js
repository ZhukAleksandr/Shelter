
const BTN_LEFT = document.querySelector(".btn-prev");
const BTN_RIGHT = document.querySelector(".btn-next");
const CAROUSEL = document.querySelector(".slider");
const ITEM_LEFT = document.querySelector("#item-left");
const ITEM_RIGHT = document.querySelector("#item-right");


const moveLeft = () => {
    CAROUSEL.classList.add("to-left");
    BTN_LEFT.removeEventListener('click', moveLeft);
    BTN_RIGHT.removeEventListener('click', moveRight);
};
const moveRight = () => {
    CAROUSEL.classList.add("to-right");
    BTN_LEFT.removeEventListener("click", moveLeft);
    BTN_RIGHT.removeEventListener("click", moveRight);
};

BTN_LEFT.addEventListener("click", moveLeft);
BTN_RIGHT.addEventListener("click", moveRight);

CAROUSEL.addEventListener("animationend",(animationEvent) => {
    if (animationEvent.animationName === "to-left") {
        CAROUSEL.classList.remove("to-left"); 
        const leftItems = ITEM_LEFT.innerHTML;

        document.querySelector("#item-active").innerHTML = leftItems;
        
        // const card1 = document.createElement("div");
        // card1.classList.add("card");
        // card1.innerText = Math.floor(Math.random() * 8);

        // const card2 = document.createElement("div");
        // card2.classList.add("card");
        // card2.innerText = Math.floor(Math.random() * 8);

        // const card3 = document.createElement("div");
        // card3.classList.add("card");
        // card3.innerText = Math.floor(Math.random() * 8);

        // ITEM_LEFT.innerHTML = "";
        // for(let i = 1; i <= 3; i++) {
        //     ITEM_LEFT.appendChild(`#card${i}`);
        // }       
    } else {
        CAROUSEL.classList.remove("to-right");
    }  
    
    BTN_LEFT.addEventListener('click', moveLeft);
    BTN_RIGHT.addEventListener('click', moveRight);
});



// BTN_RIGHT.addEventListener('click', () => {
//     CAROUSEL.classList.add("to-right");
// });