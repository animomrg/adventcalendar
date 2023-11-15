import { questions } from "./questions.js";
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
}
function redTheme() {
    root.style.setProperty('--clr-primary-1', '#DB0000');
    root.style.setProperty('--clr-primary-2', '#A82222');
    root.style.setProperty('--clr-primary-3', '#752F2F');
    root.style.setProperty('--clr-primary-4', '#4b0f0f');
    root.style.setProperty('--clr-primary-5', '#331010');    
}
function snowTheme() {
    root.style.setProperty('--clr-primary-1', '#CDFFFF');
    root.style.setProperty('--clr-primary-2', '#A6FFFF');
    root.style.setProperty('--clr-primary-3', '#00FFFF');
    root.style.setProperty('--clr-primary-4', '#02E6E6');
    root.style.setProperty('--clr-primary-5', '#14a8fe');    
}

redToggle.addEventListener('click', function() {
    redTheme();
});

snowToggle.addEventListener('click', function() {
    snowTheme();
});

greenToggle.addEventListener('click', function() {
    greenTheme();
});

// BACKGROUND TOGGLE
const backgroundToggle = document.getElementById('background-btn');
const mainContainer = document.querySelector('.main-container');
const bgImgs = ['none', 'url(./images/greenbg.png)', 'url(./images/redbg.png)', 'url(./images/neonbg.png)', 'url(./images/snowbg.png)'];
let bgIndex = 0;
backgroundToggle.addEventListener('click', function() {
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
fontToggle.addEventListener('click', function() {
    if (fontIndex === fonts.length - 1) {
        fontIndex = 0;
    } else {
        fontIndex += 1;
    }
    root.style.setProperty('--ff-primary', fonts[fontIndex]);
});

// SLIDE ARRAYS
const warningSlides = [
    {
        header: 'No Peeking!',
        text: '"Stupid. Ugly. Out of date. This is ridiculous. If I can\'t find something nice to wear I\'m not going."',
        img: './images/grinch.png'
    },
    {
        header: 'Bah Humbug!',
        text: '“If they would rather die they had better do it, and decrease the surplus population.”',
        img: './images/scrooge.png'
    },
    {
        header: 'Give Me That!',
        text: '“Don\'t you know you\'re not supposed to take things that don\'t belong to you? What\'s the matter with you? You some kind of wild animal?”',
        img: './images/grinch2.png'
    },
    {
        header: 'Still The Cowboy, Mr. McLane?',
        text: '"I\'m going to count to three. There will not be a four!"',
        img: './images/hans.png'
    },
    {
        header: 'What Do We Have Here?',
        text: '"Now look what you\'ve done! My bugs! My bugs! My bugs!"',
        img: './images/oogie.png'
    }
];

const introSlides = [
    [
        "The best thing about turning over the calendar to December is opening the first door of the advent calendar!", 
        "Each day, when you come back to your advent calendar and open the day's door, you'll find five trivia questions waiting for you.",
        "Choose the best answer from the multiple choice options by clicking or tapping on the correct button.",
        "Without further ado, let's get started!",
    ],
    [
        "Welcome back for day number 2! Glad you haven't OD'ed on Christmas baking yet, still plenty of time for that.",
        "Today is the first very special Sing Along Saturday! All questions will be fill-in-the-blank with the correct missing lyrics.",
        "Choose the best answer from the multiple choice options by clicking or tapping on the correct button.",
        "It's beginning to look a lot like Christmas! Let's go!"
    ],
    [
        "Since we all loved Sing Along Saturday so much, why not roll it right into a Sing Along Sunday!?",
        "If you missed yesterday, it's nice and easy. All questions are fill-in-the-blank with the correct missing lyrics.",
        "Choose the best answer from the multiple choice options by clicking or tapping on the correct button.",
        "Here's a vocal warm-up for you: 'Unique, New York. Unique, New York.' Are we ready?"
    ],
    [
        "Today we're going back to the movies, but before that a quick non-Christmas sing-along interlude...",
        "Happy birthday to Meg\nHappy birthday to Meg\nHappy birthday to Megan\nHappy birthday to you!",
        "And with that, a reminder to click or tap the correct button for your answer to the multiple-choice question.",
        "Let's get it started!",
    ],
];

// DAY BUTTONS
const currentDate = new Date().getDate();
const dayBtns = document.querySelectorAll('.btn-day');
const modalOverlay = document.querySelector('.modal-overlay');
const introModal = document.querySelector('.intro-modal');
// DAY BUTTON EVENT LISTENERS
dayBtns.forEach(button => {
    let btnDay = button.id;
    button.addEventListener('click', () => {
        modalReset();
        modalOverlay.classList.add('open-modal');
        if (currentDate >= btnDay) {
            dailyIntro(btnDay);
        } else {
            warningSlide();
        };
    });
});

const slideHeader = document.querySelector('.slide-header');
const slideText = document.querySelector('.slide-text');
const slideImg = document.querySelector('.slide-img');
const comeBackText = document.querySelector('.come-back-text');

// MODAL RESET FUNCTION
function modalReset() {
    slideHeader.textContent = '';
    slideText.textContent = '';
    slideImg.style.display = 'none';
    prevBtn.style.display = 'none';
    nextBtn.style.display = 'none';
    comeBackText.classList.remove('cbt-active');
    currentSlide = 0;
};

// WARNING MODAL FUNCTION
function warningSlide() {
    let index = Math.floor(Math.random() * warningSlides.length);
    let warning = warningSlides[index];
    slideHeader.textContent = warning.header;
    slideText.textContent = '';
    slideImg.src = warning.img;
    slideImg.style.display = 'inline';
    comeBackText.classList.add('cbt-active');
    closeBtn.addEventListener('click', function() {
        modalReset();
        modalOverlay.classList.remove('open-modal');
    });
};

// DAILY INTRO VARIABLES
let currentSlide = 0;
let introArray = [];
const nextBtn = document.getElementById('next-btn');
const prevBtn = document.getElementById('prev-btn');
const closeBtn = document.getElementById('close-btn');
const playBtn = document.getElementById('play-btn');

// DAILY INTRO FUNCTION
function dailyIntro(date) {
    introArray = introSlides[date - 1];
    slideHeader.textContent = `December ${date}`;
    updateSlide();

    nextBtn.addEventListener('click', function() {
        currentSlide++;
        updateSlide();
    });
    
    prevBtn.addEventListener('click', function() {
        currentSlide--;
        updateSlide();
    });
    
    closeBtn.addEventListener('click', function() {
        modalReset();
        modalOverlay.classList.remove('open-modal');
    });
    
    playBtn.addEventListener('click', function() {
        modalReset();
        introModal.style.display = 'none';
        triviaStart(date);
    });
};

// UPDATE SLIDE FUNCTION
function updateSlide() {
    slideText.textContent = introArray[currentSlide];
    if (currentSlide < introArray.length - 1) {
        nextBtn.style.display = 'inline';
    } else {
        nextBtn.style.display = 'none';
    }
    if (currentSlide > 0) {
        prevBtn.style.display = 'inline';
    } else {
        prevBtn.style.display = 'none';
    }
    if (currentSlide === introArray.length - 1) {
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
let triviaScore = 0;
let triviaQuestions = [];
let qIndex = 0;
let triviaActive = false;

const countdownContainer = document.querySelector('.countdown-container');
const questionContainer = document.querySelector('.question-container');
const answerContainer = document.querySelector('.answer-container');

function triviaStart(date) {
    triviaModal.style.display = 'inline';
    triviaActive = true;
    let userScore = 0;
    triviaQuestions = questions[date - 1];
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
    let question = triviaQuestions[index];
    let answers = question['answers'];
    let userAnswer = '';
    let correctAnswer = question['correct'];
    qImg.src = question['image'];
    qNum.textContent = `Question ${index + 1}`;
    qText.textContent = question['question'];
    for (let i = 0; i < answers.length; i++) {
        answerBtns[i].textContent = answers[i];
        answerBtns[i].addEventListener('click', (e) => {
            console.log(e.target.textContent);
        });
    };
};