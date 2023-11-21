import { questions } from "./questions.js";
import { introSlides, warningSlides } from "./slides.js";
"use strict";

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
const titleContent = document.querySelector('.title-content');
const bgImgs = ['none', 'url(./images/backgroundimgs/greenbg.png)', 'url(./images/backgroundimgs/redbg.png)', 'url(./images/backgroundimgs/neonbg.png)', 'url(./images/backgroundimgs/snowbg.png)'];
let bgIndex = 0;
backgroundToggle.addEventListener('click', () => {
    if (bgIndex === bgImgs.length - 1) {
        bgIndex = 0;
        titleContent.classList.remove('title-content-border');
    } else {
        bgIndex += 1;
        titleContent.classList.add('title-content-border');
    }
    mainContainer.style.setProperty('background-image', bgImgs[bgIndex]);
});

// FONT TOGGLE
const fontToggle = document.getElementById('font-btn');
const fonts = ['Mountains of Christmas', 'Comic Neue', 'St Nicholas'];
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

// NUMBER SIZE TOGGLE
const numSizeToggle = document.getElementById('num-size-btn');
const dayNumbers = document.querySelectorAll('.day-number');
const sizeIcon = document.getElementById('size-icon');

numSizeToggle.addEventListener('click', () => {
    sizeIcon.classList.toggle('fa-maximize');
    sizeIcon.classList.toggle('fa-minimize');
    for (let i = 0; i < dayNumbers.length; i++) {
        dayNumbers[i].classList.toggle('large-numbers');
    };
});

// DAY BUTTONS
// const currentDate = new Date().getDate();
const currentDate = 5
const dayBtns = document.querySelectorAll('.btn-day');
const modalOverlay = document.querySelector('.modal-overlay');
const introModal = document.querySelector('.intro-modal');
const titleSection = document.querySelector('.title');
const dayBoxes = document.querySelector('.day-boxes')

// MODAL RESET FUNCTION
const introHeader = document.getElementById('intro-header');
const introText = document.querySelector('.intro-text-container');
const nextBtn = document.getElementById('next-btn');
const prevBtn = document.getElementById('prev-btn');
const playBtn = document.getElementById('play-btn');
const closeBtnWarning = document.getElementById('warning-close-btn');
const closeBtnIntro = document.getElementById('intro-close-btn');

// OTHER VARIABLES
let currentSlide = 0;
let introSlideArray = [];

nextBtn.addEventListener('click', () => {
    currentSlide++;
    updateSlide();
});

prevBtn.addEventListener('click', () => {
    currentSlide--;
    updateSlide();
});

closeBtnWarning.addEventListener('click', () => {
    returnHome();
});

closeBtnIntro.addEventListener('click', () => {
    currentSlide = 0;
    returnHome();
});

playBtn.addEventListener('click', () => {
    introModal.style.display = 'none';
});

// DAY BUTTON EVENT LISTENERS
dayBtns.forEach(button => {
    let btnDay = button.textContent;
    button.addEventListener('click', () => {
        if (currentDate >= btnDay) {
            modalActivate();
            introModal.style.display = 'block';
            dailyIntro(btnDay);
        } else {
            modalActivate();
            warningActivate();
        };
    });
});

function modalActivate() {
    titleSection.style.display = 'none';
    dayBoxes.style.display = 'none';
    modalOverlay.style.display = 'block';
};

function dailyIntro(date) {
    introSlideArray = introSlides[date - 1];
    introHeader.textContent = `December ${date}`;
    updateSlide(); 
    playBtn.addEventListener('click', () => {
        triviaStart(date);
    });
};

function updateSlide() {
    introText.innerHTML = introSlideArray[currentSlide];
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

const warningModal = document.querySelector('.warning-modal');
const warningHeader = document.getElementById('warning-header');
const warningImg = document.getElementById('warning-img');

function warningActivate() {
    warningModal.style.display = 'block';
    let index = Math.floor(Math.random() * warningSlides.length);
    let warningContent = warningSlides[index];
    warningHeader.textContent = warningContent.header;
    warningImg.src = warningContent.img;
};

// // TRIVIA VARIABLES
let currentQuestion = 0;
let userScore = 0;
let dayQuestions = [];
const triviaModal = document.querySelector('.trivia-modal');
const questionContainer = document.querySelector('.question-container');
const questionImgContainer = document.querySelector('.question-img-container');
const answerContainer = document.querySelector('.answer-container');
const elQuestion = document.getElementById('question-text');
const elImage = document.getElementById('question-image');

function triviaStart(date) {
    triviaModal.style.display = 'block';
    introModal.style.display = 'none';
    dayQuestions = questions[date - 1];
    loadQuestion(date);
};

function loadQuestion(date) {
    elQuestion.innerHTML = dayQuestions[currentQuestion].question;
    elImage.src = dayQuestions[currentQuestion].image;
    answerContainer.innerHTML = "";

    for (let i = 0; i < dayQuestions.length - 1; i++) {
        const answerDiv = document.createElement('div');
        const answer = document.createElement('input');
        const answerLabel = document.createElement('label');
        
        answerLabel.textContent = dayQuestions[currentQuestion].answers[i].text;
        answerLabel.classList.add('answer-label');
        answerLabel.htmlFor = i;
        if (answerLabel.textContent.length > 20) {
            answerLabel.classList.add('label-small-font');
        }

        answer.type = 'submit';
        answer.name = 'answer';
        answer.value = i;
        answer.id = i;
        answer.className = 'answer-button';
        answer.addEventListener('click', () => {
            if (dayQuestions[currentQuestion].answers[answer.id].isCorrect) {
                userScore++;
                answerLabel.classList.add('correct-answer');
                setTimeout(() => {
                    nextQuestion(date);
                }, 2000);
            } else {
                answerLabel.classList.add('incorrect-answer');
                setTimeout(() => {
                    nextQuestion(date);
                }, 2000);
            }
        });

        answerDiv.className = 'answer-div';
        answerDiv.appendChild(answer);
        answerDiv.appendChild(answerLabel);

        answerContainer.appendChild(answerDiv);
    }
};

function nextQuestion(date) {
    if (currentQuestion < dayQuestions.length - 1) {
        currentQuestion++;
        loadQuestion(date);
    } else {
        questionContainer.style.display = 'none';
        questionImgContainer.style.display = 'none';
        answerContainer.style.display = 'none';
        loadScore(date);
    }
};

function loadScore(date) {
    const scoreContainer = document.querySelector('.score-container');
    const scoreText = document.getElementById('score-text');
    const scoreImgContainer = document.querySelector('.score-img-container');
    const scoreImg = document.getElementById('score-img');
    const homeBtnContainer = document.querySelector('.home-btn-container');
    const homeBtn = document.getElementById('home-btn');

    homeBtn.addEventListener('click', () => {
        scoreContainer.style.display = 'none';
        questionContainer.style.display = 'block';
        questionImgContainer.style.display = 'block';
        answerContainer.style.display = 'grid';
        userScore = 0;
        currentSlide = 0;
        currentQuestion = 0;
        returnHome();
    });

    updateBtn(date);

    scoreContainer.style.display = 'block';
    scoreImgContainer.style.display = 'block';
    scoreImg.style.display = 'block';
    homeBtnContainer.style.display = 'block';

    scoreText.textContent = `You scored ${userScore} out of ${dayQuestions.length}!`;
    if (userScore === 5) {
        scoreImg.src = './images/scoregifs/kidthumbsup.gif';
    } else if (userScore === 4) {
        scoreImg.src = './images/scoregifs/babythumbsup.gif';
    } else if (userScore === 3) {
        scoreImg.src = './images/scoregifs/notbad.gif';
    } else if (userScore === 2) {
        scoreImg.src = './images/scoregifs/larry.gif';
    } else if (userScore === 1) {
        scoreImg.src = './images/scoregifs/ouch.gif';
    } else {
        scoreImg.src = './images/scoregifs/youch.gif';
    }
};

function returnHome() {
    modalOverlay.style.display = 'none';
    warningModal.style.display = 'none';
    introModal.style.display = 'none';
    triviaModal.style.display = 'none';
    titleSection.style.display = 'flex';
    dayBoxes.style.display = 'grid';
    dayQuestions = [];
};

function updateBtn(date) {
    console.log(date);
}