
const BTN_LEFT = document.querySelector(".btn-prev");
const BTN_RIGHT = document.querySelector(".btn-next");
const CAROUSEL = document.querySelectorAll(".card");
const CARDS = document.querySelector(".cards");



    let i = 1;
    for(let card of CAROUSEL) {
        card.style.position = 'relative';
        card.insertAdjacentHTML('beforeend', `<span style="position:absolute;left:0;top:0"></span>`);
        i++;
    }

    /* конфигурация */
    let width = 360; // ширина картинки
    let count = 3; // видимое количество изображений

    // let list = carousel.querySelector('ul');
    // let listElems = carousel.querySelectorAll('li');

    let position = 0; // положение ленты прокрутки

    BTN_LEFT.onclick = function() {
      // сдвиг влево     
        position += width * count;
      // последнее передвижение влево может быть не на 3, а на 2 или 1 элемент
        position = Math.min(position, 0);
        CARDS.style.marginLeft = position + 'px';
        
    };

    BTN_RIGHT.onclick = function() {
      // сдвиг вправо        
        position -= width * count;
      // последнее передвижение вправо может быть не на 3, а на 2 или 1 элемент
        position = Math.max(position, -width * (CAROUSEL.length - count));
        CARDS.style.marginLeft = position + 'px';
    };


//Pop-up


// const jsonPets = JSON.parse("./db/pets.json");

const popUp = document.querySelector('.pop-up');
const btnClose = popUp.querySelector('.pop-up__close');
const popUpOverlay = popUp.querySelector('.pop-up__overlay');
const popUpBody = popUp.querySelector('.pop-up__body');
// let popUpisActive = false

const imgPopUp = popUpBody.querySelector('.pop-up__img');
const petName = popUpBody.querySelector('.name');
const typeBreed = popUpBody.querySelector('.type-breed');
const description = popUpBody.querySelector('.description');
const age = popUpBody.querySelector('.age');
const inoculations = popUpBody.querySelector('.inoculations');
const diseases = popUpBody.querySelector('.diseases');
const parasites = popUpBody.querySelector('.parasites');

CAROUSEL.forEach(card => card.addEventListener('click', () => {    
    let indexCard = card.getAttribute('data-value');
    showPopUp(indexCard);
}));


btnClose.addEventListener('click', () => {
    closePopUp();
});

popUpOverlay.addEventListener('click', () => {
    btnClose.click();
});

function showPopUp(index) {
    
    // imgPopUp.src = jsonPets[index].img;
    // petName.innerHTML = jsonPets[index].name;
    // typeBreed.innerHTML = jsonPets[index].type + ' - ' + jsonPets[index].breed;
    // description.innerHTML = jsonPets[index].description;
    // age.innerHTML = '<strong>Age:</strong> ' + jsonPets[index].age;
    // inoculations.innerHTML = '<strong>Inoculations:</strong> ' + jsonPets[index].inoculations;
    // diseases.innerHTML = '<strong>Diseases:</strong> ' + jsonPets[index].diseases;
    // parasites.innerHTML = '<strong>Parasites:</strong> ' + jsonPets[index].parasites;

    //Activ
    popUp.classList.add('is-active');
    popUpOverlay.classList.add('change');
    document.body.style.overflowY = 'hidden';
}

function closePopUp() {
    popUp.classList.remove('is-active');
    popUpOverlay.classList.remove('change');
    document.body.style.overflowY = 'visible';
}