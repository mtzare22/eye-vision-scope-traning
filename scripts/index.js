let tds = document.querySelectorAll('td');

let centered = document.querySelector('.centered');

let up = document.querySelector(".top");
let left = document.querySelector('.left');
let right = document.querySelector('.right');
let down = document.querySelector('.bottom');

let wordTimer = document.querySelector('.timer');

let countOfCorrect = document.querySelector('.correct');
let countOfWrong = document.querySelector('.wrong');


let result = document.querySelector('.result');

let counter = 60;
wordTimer.innerText = counter; 
let checkChoice = false;
let correct = 0;
let wrong = 0;
let allCorrects = 0;

const words = [ "سلام", "کمال", "حواس", "تفکر", "رفتن", "کتاب", "دفتر", "نماز", "کلام", "کباب", "شامی", "بانو",
                 "کادو", "لامپ", "بابک", "نان", "بام", "کام", "فال", "خال", "ناز", "آرم", "سام", "مهر", "بهر"
              ];

/* Generate new word */
function randomWord() {
    return Math.floor(Math.random() * 24);
};
/* Generate a number between 0 - 3  ,zero is our targer*/
function randomChance() {
    return Math.floor(Math.random() * 3);
}


const timer = setInterval(function () {
    let word = randomWord();
    let key = words[word];
    let chance = randomChance();
    centered.classList.add('black');
    if (chance === 0) {
        checkChoice = true;
        allCorrects++;
        up.innerText = key;
        left.innerText = key;
        right.innerText = key;
        down.innerText = key;
    } else {
        checkChoice = false;
        up.innerText = words[randomWord()];
        left.innerText = words[randomWord()];
        right.innerText = words[randomWord()];
        down.innerText = words[randomWord()];
    }
    counter--;
    wordTimer.innerText = counter;
    if (counter == 0) {
        clearInterval(timer);
        result.className = 'show';
        countOfCorrect.innerText = correct;
        countOfWrong.innerText = wrong;
    }
  

}, 700);

const getkey = document.body;
getkey.addEventListener('keypress',function(e) {
if((e.code === 'Space') && (checkChoice === true)){
    correct++;
    centered.className = ('centered green');
}else {
    wrong++;
    centered.className = ('centered red');
}
}) ;