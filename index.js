import { questions } from "./questions.js";
import { introSlides, warningSlides } from "./slides.js";
import { postTrivia, welcomeText } from "./content.js";
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
    root.style.setProperty('--clr-primary-2', '#21fb3e');
    root.style.setProperty('--clr-primary-3', '#2F7538');
    root.style.setProperty('--clr-primary-4', '#124819');
    root.style.setProperty('--clr-primary-5', '#29332A');
    redToggle.style.color = 'var(--clr-primary-2)';
    greenToggle.style.color = 'var(--clr-primary-1)';
    snowToggle.style.color = 'var(--clr-primary-2)';   
};

function redTheme() {
    root.style.setProperty('--clr-primary-1', '#A82222');
    root.style.setProperty('--clr-primary-2', '#f20000');
    root.style.setProperty('--clr-primary-3', '#490000');
    root.style.setProperty('--clr-primary-4', '#670216');
    root.style.setProperty('--clr-primary-5', '#331010');
    redToggle.style.color = 'var(--clr-primary-2)';
    greenToggle.style.color = 'var(--clr-primary-1)';
    snowToggle.style.color = 'var(--clr-primary-1)';    
};

function snowTheme() {
    root.style.setProperty('--clr-primary-1', '#7efcfc');
    root.style.setProperty('--clr-primary-2', '#ffffff');
    root.style.setProperty('--clr-primary-3', '#00FFFF');
    root.style.setProperty('--clr-primary-4', 'rgb(15, 251, 247)');
    root.style.setProperty('--clr-primary-5', '#14a8fe');
    redToggle.style.color = 'var(--clr-primary-2)';
    greenToggle.style.color = 'var(--clr-primary-2)';
    snowToggle.style.color = 'var(--clr-primary-1)';       
};

redToggle.addEventListener('click', () => {
    redTheme();
    localStorage.setItem('theme-color', 'red');
});

snowToggle.addEventListener('click', () => {
    snowTheme();
    localStorage.setItem('theme-color', 'snow');
});

greenToggle.addEventListener('click', () => {
    greenTheme();
    localStorage.setItem('theme-color', 'green');
});

// BACKGROUND TOGGLE
const backgroundToggle = document.getElementById('background-btn');
const mainContainer = document.querySelector('.main-container');
const titleContent = document.querySelector('.title-content');
const bgImgs = ['none', 'url(./images/backgroundimgs/greenbg.png)', 'url(./images/backgroundimgs/redbg.png)', 'url(./images/backgroundimgs/neonbg.png)'];
let bgIndex = 0;

backgroundToggle.addEventListener('click', bgToggle);

function bgToggle() {
    if (bgIndex === bgImgs.length - 1) {
        bgIndex = 0;
        titleContent.classList.remove('title-content-border');
        mainContainer.style.setProperty('background', '')
    } else {
        bgIndex += 1;
        titleContent.classList.add('title-content-border');
        mainContainer.style.setProperty('background-image', bgImgs[bgIndex]);
    }
    localStorage.setItem('bg-image', bgImgs[bgIndex]);
};

// FONT TOGGLE
const fontToggleBtn = document.getElementById('font-btn');
const fonts = ['Mountains of Christmas', 'Comic Neue', 'Montserrat'];
const root = document.querySelector(':root');
let fontIndex = 0;
fontToggleBtn.addEventListener('click', fontToggle);

function fontToggle() {
    if (fontIndex === fonts.length - 1) {
        fontIndex = 0;
    } else {
        fontIndex += 1;
    }
    root.style.setProperty('--ff-primary', fonts[fontIndex]);
    localStorage.setItem('font', fonts[fontIndex]);
};

// NUMBER SIZE TOGGLE
const numSizeToggle = document.getElementById('num-size-btn');
let numSize = 'small';
const dayNumbers = document.querySelectorAll('.day-number');
const sizeIcon = document.getElementById('size-icon');

numSizeToggle.addEventListener('click', setNumSize);

function setNumSize() {
    if (numSize === 'small') {
        numSize = 'large';
        sizeIcon.classList.toggle('fa-minimize');
        localStorage.setItem('num-size', numSize);
        for (let i = 0; i < dayNumbers.length; i++) {
            dayNumbers[i].classList.add('large-numbers'); 
        };

    } else {
        numSize = 'small';
        sizeIcon.classList.toggle('fa-maximize');
        localStorage.setItem('num-size', numSize);
        for (let i = 0; i < dayNumbers.length; i++) {
            dayNumbers[i].classList.remove('large-numbers'); 
        };
    }
}

// DAY BUTTONS
// const currentDate = new Date().getDate();
const currentDate = 11;

const dayBtns = document.querySelectorAll('.btn-day');
const modalOverlay = document.querySelector('.modal-overlay');
const introModal = document.querySelector('.intro-modal');
const titleSection = document.querySelector('.title');
const dayBoxes = document.querySelector('.day-boxes');

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
    if (currentDate >= btnDay && currentDate < 25) {
        button.classList.add('unlocked-day');
    } else {
        button.classList.add('locked-day');
    }
    button.addEventListener('click', () => {
        if (currentDate >= btnDay && currentDate < 25) {
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
    introSlideArray = introSlides[date * 1];
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

const triviaModal = document.querySelector('.trivia-modal');
const pianoSection = document.querySelector('.piano-section');
const questionContainer = document.querySelector('.question-container');
const questionInfo = document.querySelector('.question-info');
const questionImgContainer = document.querySelector('.question-img-container');
const answerContainer = document.querySelector('.answer-container');
const elQuestion = document.querySelector('.question-text');
const elImage = document.getElementById('question-image');

function triviaStart(date) {
    let currentQuestion = 0;
    let score = 0;
    let dayQuestions = questions[date - 1];
    introModal.style.display = 'none';
    triviaModal.style.display = 'block';
    questionInfo.style.display = 'block';
    if (date == 12 || date == 16 || date == 23) {
        pianoSection.style.display = 'block';
        elQuestion.classList.add('piano-question');

        const keys = document.querySelectorAll(".key");
        const note = document.querySelector(".nowplaying");

        function playNote(e) {
            const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`)
            const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);

            if (!key) return;

            const keyNote = key.getAttribute("data-note");

            key.classList.add("playing");
            note.innerHTML = keyNote;
            audio.currentTime = 0;
            audio.play();
        }

        function removeTransition(e) {
            if (e.propertyName !== "transform") return;
            this.classList.remove("playing");
        }

        keys.forEach(key => key.addEventListener("transitionend", removeTransition));
        window.addEventListener("keydown", playNote);
    }
    
    loadQuestion(date, dayQuestions, currentQuestion, score);
};

function loadQuestion(date, questions, currentQ, score) {
    elQuestion.innerHTML = questions[currentQ].question;
    if (questions[currentQ].image) {
        elImage.src = questions[currentQ].image;
        questionImgContainer.style.display = 'block';
    } else {
        questionImgContainer.style.display = 'none';
        questionInfo.style.height = '40%';
        answerContainer.style.height = '40%';
        questionContainer.style.height = '80%';    
    }
    answerContainer.innerHTML = "";

    for (let i = 0; i < questions.length - 1; i++) {
        const answerDiv = document.createElement('div');
        const answer = document.createElement('input');
        const answerLabel = document.createElement('label');
        
        answerLabel.textContent = questions[currentQ].answers[i].text;
        answerLabel.classList.add('answer-label');
        answerLabel.htmlFor = i;

        answer.type = 'submit';
        answer.name = 'answer';
        answer.value = i;
        answer.id = i;
        answer.className = 'answer-button';
        answer.addEventListener('click', () => {
            if (questions[currentQ].answers[answer.id].isCorrect) {
                score++;
                answerLabel.classList.add('correct-answer');
                setTimeout(() => {
                    nextQuestion(date, questions, currentQ, score);
                }, 2000);

            } else {
                answerLabel.classList.add('incorrect-answer');
                setTimeout(() => {
                    nextQuestion(date, questions, currentQ, score);
                }, 2000);
            }
        });

        answerDiv.className = 'answer-div';
        answerDiv.appendChild(answer);
        answerDiv.appendChild(answerLabel);

        answerContainer.appendChild(answerDiv);
    }
};

function nextQuestion(date, questions, currentQ, score) {
    if (currentQ < questions.length - 1) {
        currentQ++;
        loadQuestion(date, questions, currentQ, score);
        
    } else {
        questionContainer.style.display = 'none';
        questionImgContainer.style.display = 'none';
        answerContainer.style.display = 'none';
        loadScore(date, questions, score);
    }
};

function loadScore(date, questions, score) {
    const scoreContainer = document.querySelector('.score-container');
    const scoreText = document.getElementById('score-text');
    const scoreImgContainer = document.querySelector('.score-img-container');
    const scoreImg = document.getElementById('score-img');
    const homeBtnContainer = document.querySelector('.home-btn-container');
    const homeBtn = document.getElementById('home-btn');
    const reminderText = document.getElementById('reminder-text');

    homeBtn.addEventListener('click', () => {
        scoreContainer.style.display = 'none';
        pianoSection.style.display = 'none';
        questionContainer.style.display = 'block';
        questionImgContainer.style.display = 'block';
        answerContainer.style.display = 'grid';
        currentSlide = 0;
        returnHome();
    });

    updateBtn(date, score);

    scoreContainer.style.display = 'block';
    scoreImgContainer.style.display = 'block';
    scoreImg.style.display = 'block';
    homeBtnContainer.style.display = 'block';

    scoreText.textContent = `You scored ${score} out of ${questions.length}!`;
    let randomNum = Math.floor(Math.random() * 3);
    if (score === 5) {
        scoreImg.src = './images/scoregifs/santaelf.gif';
        reminderText.textContent = postTrivia[0][randomNum];
    } else if (score === 4) {
        scoreImg.src = './images/scoregifs/carlton.gif';
        reminderText.textContent = postTrivia[1][randomNum];
    } else if (score === 3) {
        scoreImg.src = './images/scoregifs/ralphieshrug.gif';
        reminderText.textContent = postTrivia[2][randomNum];
    } else if (score === 2) {
        scoreImg.src = './images/scoregifs/ornaments.gif';
        reminderText.textContent = postTrivia[3][randomNum];
    } else if (score === 1) {
        scoreImg.src = './images/scoregifs/getout.gif';
        reminderText.textContent = postTrivia[4][randomNum];
    } else {
        scoreImg.src = './images/scoregifs/dogsanta.gif';
        reminderText.textContent = postTrivia[5][randomNum];
    }
};

function returnHome() {
    modalOverlay.style.display = 'none';
    warningModal.style.display = 'none';
    introModal.style.display = 'none';
    triviaModal.style.display = 'none';
    titleSection.style.display = 'flex';
    dayBoxes.style.display = 'grid';
};

function updateBtn(date, score) {
    const btnNum = Number(date);
    let completedDayBtn = document.querySelector(`button[value="${btnNum}"]`);
    completedDayBtn.classList.add('completed-day');
    completedDayBtn.removeEventListener('click', () => {
        if (currentDate >= btnDay) {
            modalActivate();
            introModal.style.display = 'block';
            dailyIntro(btnDay);
        } else {
            modalActivate();
            warningActivate();
        };
    });
    let completeDay = { btnNum, score };
    let completedDays = getCompletedDays();
    completedDays.push(completeDay);
    localStorage.setItem('complete-days', JSON.stringify(completedDays));
};

function getCompletedDays() {
    return localStorage.getItem('complete-days')
        ? JSON.parse(localStorage.getItem('complete-days'))
        : [];
};

function initializeCalendar() {
    let completedDays = getCompletedDays();
    if (completedDays.length > 0) {
        completedDays.forEach((item) => {
            let btnNum = item.btnNum;
            let completedDayBtn = document.querySelector(`button[value="${btnNum}"]`);
            completedDayBtn.classList.add('completed-day');
        });
    }
};

const welcomeMsg = document.querySelector('.welcome-msg');
const welcomeHeader = document.getElementById('welcome-header');
const welcomeTextContent = document.getElementById('welcome-text');
const welcomeBtn = document.getElementById('welcome-btn');
const welcomeForm = document.getElementById('welcome-form');
const nameInput = document.getElementById('user-name-input');
const readyBtn = document.getElementById('ready-btn');

function initializeUsername() {
    if (localStorage.getItem('username')) {
        const name = localStorage.getItem('username');
        const title = document.getElementById('advent-title');
        let index = Math.floor(Math.random() * welcomeText.length);
        welcomeHeader.textContent = `Welcome Back, ${name}!`;
        welcomeTextContent.style.display = 'block';
        welcomeTextContent.innerHTML = `${welcomeText[index]}`;
        welcomeForm.style.display = 'none';
        welcomeMsg.style.display = 'block';
        readyBtn.style.display = 'block';
        title.innerHTML = `${name}'s Advent Calendar`  
    } else {
        welcomeMsg.style.display = 'block';
    }
};

function initializeTheme() {
        if (localStorage.getItem('theme-color')) {
        let themeColor = localStorage.getItem('theme-color');
        if (themeColor === 'green') {
            greenTheme();
        } else if (themeColor === 'snow') {
            snowTheme();
        } else {
            redTheme();
        }
    }
};

function initializeBackground() {
    if (localStorage.getItem('bg-image')) {
        let bgImage = localStorage.getItem('bg-image');
        mainContainer.style.setProperty('background-image', bgImage);
        }
};
  
function initializeFont() {
    if (localStorage.getItem('font')) {
        let font = localStorage.getItem('font');
        root.style.setProperty('--ff-primary', font);
    }
};
  
function initializeNumSize() {
    if (localStorage.getItem('num-size')) {
        let size = localStorage.getItem('num-size');
        if (size === 'large') {
            numSize = 'large';
            sizeIcon.classList.toggle('fa-minimize');
            localStorage.setItem('num-size', numSize);
            for (let i = 0; i < dayNumbers.length; i++) {
                dayNumbers[i].classList.add('large-numbers'); 
            };
        } 
    }
};  

document.addEventListener("DOMContentLoaded", () => {
    initializeUsername();
    initializeTheme();
    initializeBackground();
    initializeFont();
    initializeNumSize();
    initializeCalendar();
});

readyBtn.addEventListener('click', () => {
    welcomeMsg.style.display = 'none';
});

welcomeForm.addEventListener('submit', (e) => e.preventDefault());

welcomeBtn.addEventListener('click', () => {
    localStorage.setItem('username', nameInput.value);
    welcomeModal();
});

function welcomeModal() {
    const name = localStorage.getItem('username');
    welcomeHeader.style.display = "none";
    welcomeTextContent.style.display = 'block';
    welcomeTextContent.innerHTML = `
    <h4>Welcome to your advent calendar, ${name}! Hope you have some fun while you're here!</h4>
    <br>
    <h4>If you run into any issues, try refreshing the page <em>(classic, I know)</em> and let me know if something is broken.</h4>
    <br>
    <h4>Other than that, I hope you have fun and enjoy a little trivia challenge each day. Good luck!</h4>
        `; 
    welcomeForm.style.display = 'none';
    readyBtn.style.display = 'block';
};
