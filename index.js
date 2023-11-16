import { questions } from "./questions.js";
import { introSlides, warningSlides } from "./slides.js";

/*
COLOR THEMES AND TOGGLING 
*/

// COLOR THEMES
const redToggle = document.getElementById('red-theme');
const snowToggle = document.getElementById('snow-theme');
const greenToggle = document.getElementById('green-theme');

function greenTheme() {
    root.style.setProperty('--clr-primary-1', '#00DB1D');
    root.style.setProperty('--clr-primary-2', '#22A834');
    root.style.setProperty('--clr-primary-3', '#2F7538');
    root.style.setProperty('--clr-primary-4', '#124819');
    root.style.setProperty('--clr-primary-5', '#29332A');
    redToggle.style.color = 'var(--clr-primary-2)';
    greenToggle.style.color = 'var(--clr-primary-1)';
    snowToggle.style.color = 'var(--clr-primary-2)';   
};

function redTheme() {
    root.style.setProperty('--clr-primary-1', '#A82222');
    root.style.setProperty('--clr-primary-2', '#DB0000');
    root.style.setProperty('--clr-primary-3', '#752F2F');
    root.style.setProperty('--clr-primary-4', '#4b0f0f');
    root.style.setProperty('--clr-primary-5', '#331010');
    redToggle.style.color = 'var(--clr-primary-2)';
    greenToggle.style.color = 'var(--clr-primary-1)';
    snowToggle.style.color = 'var(--clr-primary-1)';    
};

function snowTheme() {
    root.style.setProperty('--clr-primary-1', '#CDFFFF');
    root.style.setProperty('--clr-primary-2', '#A6FFFF');
    root.style.setProperty('--clr-primary-3', '#00FFFF');
    root.style.setProperty('--clr-primary-4', '#02E6E6');
    root.style.setProperty('--clr-primary-5', '#14a8fe');
    redToggle.style.color = 'var(--clr-primary-2)';
    greenToggle.style.color = 'var(--clr-primary-2)';
    snowToggle.style.color = 'var(--clr-primary-1)';       
};

redToggle.addEventListener('click', () => {
    redTheme();
});

snowToggle.addEventListener('click', () => {
    snowTheme();
});

greenToggle.addEventListener('click', () => {
    greenTheme();
});

// BACKGROUND TOGGLE
const backgroundToggle = document.getElementById('background-btn');
const mainContainer = document.querySelector('.main-container');
const bgImgs = ['none', 'url(./images/greenbg.png)', 'url(./images/redbg.png)', 'url(./images/neonbg.png)', 'url(./images/snowbg.png)'];
let bgIndex = 0;
backgroundToggle.addEventListener('click', () => {
    if (bgIndex === bgImgs.length - 1) {
        bgIndex = 0;
    } else {
        bgIndex += 1;
    }
    mainContainer.style.setProperty('background-image', bgImgs[bgIndex]);
});

// FONT TOGGLE
const fontToggle = document.getElementById('font-btn');
const fonts = ['Mountains of Christmas', 'Comic Neue', 'St Nicholas', 'Montserrat'];
const root = document.querySelector(':root');
let fontIndex = 0;
fontToggle.addEventListener('click', () => {
    if (fontIndex === fonts.length - 1) {
        fontIndex = 0;
    } else {
        fontIndex += 1;
    }
    root.style.setProperty('--ff-primary', fonts[fontIndex]);
});

// DAY BUTTONS
const currentDate = new Date().getDate();
const dayBtns = document.querySelectorAll('.btn-day');
const modalOverlay = document.querySelector('.modal-overlay');
const introModal = document.querySelector('.intro-modal');

// MODAL RESET FUNCTION
const introHeader = document.getElementById('intro-header');
const introText = document.getElementById('intro-text');
const warningText = document.getElementById('warning-text');
const nextBtn = document.getElementById('next-btn');
const prevBtn = document.getElementById('prev-btn');
const closeBtn = document.getElementById('close-btn');
const playBtn = document.getElementById('play-btn');
const pauseBtn = document.getElementById('pause-btn');

let currentSlide = 0;

nextBtn.addEventListener('click', () => {
    currentSlide++;
    updateSlide();
});

prevBtn.addEventListener('click', () => {
    currentSlide--;
    updateSlide();
});

closeBtn.addEventListener('click', () => {
    modalOverlay.classList.remove('open-modal');
    modalReset();
});

playBtn.addEventListener('click', () => {
    modalReset();
    introModal.style.display = 'none';
});

function modalReset() {
    introHeader.textContent = '';
    introText.textContent = '';
    prevBtn.style.display = 'none';
    nextBtn.style.display = 'none';
    playBtn.style.display = 'none';
    warningImg.style.display = 'none';
    warningText.style.display = 'none';
    currentSlide = 0;
};

// DAY BUTTON EVENT LISTENERS
dayBtns.forEach(button => {
    let btnDay = button.id;
    button.addEventListener('click', () => {
        modalOverlay.classList.add('open-modal');
        if (currentDate >= btnDay) {
            dailyIntro(btnDay);
        } else {
            modalReset();
            warningSlide();
        };
    });
});

// DAILY INTRO FUNCTION
let introSlideArray = [];

function dailyIntro(date) {
    introSlideArray = introSlides[date - 1];
    introHeader.textContent = `December ${date}`;
    updateSlide(); 
    playBtn.addEventListener('click', function() {
        triviaStart(date);
    });
};

// WARNING MODAL FUNCTION
const warningImg = document.getElementById('warning-img');

function warningSlide() {
    let index = Math.floor(Math.random() * warningSlides.length);
    let warning = warningSlides[index];
    introHeader.textContent = warning.header;
    warningText.style.display = 'block';
    warningText.textContent = 'Come back when this day is ready!';
    warningImg.style.display = 'block';
    warningImg.src = warning.img;
    closeBtn.addEventListener('click', () => {
        modalReset();
        modalOverlay.classList.remove('open-modal');
    });
};

// UPDATE SLIDE FUNCTION
function updateSlide() {
    introText.textContent = introSlideArray[currentSlide];
    if (currentSlide < introSlideArray.length - 1) {
        nextBtn.style.display = 'inline';
    } else {
        nextBtn.style.display = 'none';
    }
    if (currentSlide > 0) {
        prevBtn.style.display = 'inline';
    } else {
        prevBtn.style.display = 'none';
    }
    if (currentSlide === introSlideArray.length - 1) {
        playBtn.style.display = 'block';
    } else {
        playBtn.style.display = 'none';
    }
};

// TRIVIA VARIABLES
const triviaModal = document.querySelector('.trivia-modal');
const answerBtns = document.querySelectorAll('.answer-btn');
const qNum = document.getElementById('question-num');
const qText = document.getElementById('question-text');
const qImg = document.getElementById('question-img');
let triviaQuestions = [];
let triviaAnswers = [];
let correctAnswers = [];
let userAnswers = [];
let qIndex = 0;

const countdownContainer = document.querySelector('.countdown-container');
const questionContainer = document.querySelector('.question-container');
const answerContainer = document.querySelector('.answer-container');

function triviaStart(date) {
    triviaModal.style.display = 'inline';
    closeBtn.style.display = 'none'; 
    triviaQuestions = questions[date - 1];
    correctAnswers = triviaQuestions.map(question => question['correct']);
    triviaCountdown();
    setNextQuestion(qIndex);
};

function triviaCountdown() {
    let timeRem = 2;
    clearInterval();
    let timer = null;
    timer = setInterval(countdown, 1000);
    function countdown() {
        countdownContainer.innerHTML = `<h1 id="countdown">${timeRem}</h1>`
        if (timeRem === 0) {
            clearInterval();
            countdownContainer.style.display = 'none';
            questionContainer.style.display = 'inline';
            answerContainer.style.visibility = 'visible';
        } else {
            timeRem--;
        };
    };
}

function setNextQuestion(index) {
    pauseBtn.style.display = 'inline';
    let question = triviaQuestions[index];
    triviaAnswers = question['answers'];
    qImg.src = question['image'];
    qNum.textContent = `Question ${index + 1}`;
    qText.textContent = question['question'];
    for (let i = 0; i < triviaAnswers.length; i++) {
        answerBtns[i].textContent = triviaAnswers[i];
        answerBtns[i].addEventListener('click', (e) => {
            userAnswers.push(e.target.textContent);
        });
    };
};