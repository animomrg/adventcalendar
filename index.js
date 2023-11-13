/*
COLOR THEMES AND TOGGLING 
*/

const redToggle = document.getElementById('red-theme');
const snowToggle = document.getElementById('snow-theme');
const greenToggle = document.getElementById('green-theme');
const backgroundToggle = document.getElementById('background-btn');
const mainContainer = document.querySelector('.main-container');
const bgImgs = ['none', 'url(./images/greenbg.png)', 'url(./images/redbg.png)', 'url(./images/neonbg.png)', 'url(./images/snowbg.png)'];

const root = document.querySelector(':root');

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
    root.style.setProperty('--clr-primary-5', '#6BC8FF');    
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

let bgIndex = 0;
backgroundToggle.addEventListener('click', function() {
    if (bgIndex === bgImgs.length - 1) {
        bgIndex = 0;
    } else {
        bgIndex += 1;
    }
    mainContainer.style.setProperty('background-image', bgImgs[bgIndex]);
});

/* 
FONT TOGGLING 
*/

const fonts = ['Mountains of Christmas', 'Comic Neue', 'St Nicholas', 'Montserrat'];
const fontToggle = document.getElementById('font-btn');
let fontIndex = 0;

fontToggle.addEventListener('click', function() {
    if (fontIndex === fonts.length - 1) {
        fontIndex = 0;
    } else {
        fontIndex += 1;
    }
    root.style.setProperty('--ff-primary', fonts[fontIndex]);
});


/*
DAY BTNS & INTRO MODAL
*/

const dayBtns = document.querySelectorAll('.btn-day');
const modalOverlay = document.querySelector('.modal-overlay');

const date = new Date().getDate();

dayBtns.forEach(button => {
    let btnDay = button.id;

    button.addEventListener('click', () => {
        if (date >= btnDay) {
            slideImg.src = ''
            modalOverlay.classList.add('open-modal');
            updateSlide();
        } else {
            modalOverlay.classList.add('open-modal');
            warningSlide();
        };
    });
});

const nextBtn = document.querySelector('.next-btn');
const prevBtn = document.querySelector('.prev-btn');
const closeBtn = document.querySelector('.close-btn');
const playBtn = document.querySelector('.play-btn');

const warningSlides = [
    {
        header: 'No Peeking!',
        text: "You don't want coal in your stocking, do you?"
    }
];

const slides = [
    {
        header: 'Happy December 1!',
        text: "As always, the best thing about turning over the calendar to December is opening the first door of the advent calendar!",
    },
    {
        header: 'Instructions',
        text: "Each day, when you come back to your advent calendar and open the day's door, you'll find five trivia questions waiting for you.",
    },
    {
        header: 'Instructions',
        text: "Click on the best answer from the multiple-choice selections in order to pull up the next question. Time matters so once you know you're answer be sure to quickly choose the correct option.",
    },
    {
        header: 'Ready?',
        text: "Without further ado, let's get started!",
    },
];

const introModal = document.querySelector('.intro-modal');
const triviaModal = document.querySelector('.trivia-modal');
const slideHeader = document.getElementById('slide-header');
const slideText = document.getElementById('slide-text');
const slideImg = document.querySelector('.slide-img');
const modalContainer = document.querySelector('.modal-container');

let currentSlide = 0;

function updateSlide() {
    const slide = slides[currentSlide];
    slideHeader.textContent = slide.header;
    slideText.textContent = slide.text;
    if (currentSlide < slides.length - 1) {
        nextBtn.style.display = 'inline';
    } else {
        nextBtn.style.display = 'none';
    }

    if (currentSlide > 0) {
        prevBtn.style.display = 'inline';
    } else {
        prevBtn.style.display = 'none';
    }

    if (currentSlide === slides.length - 1) {
        playBtn.style.display = 'inline';
    } else {
        playBtn.style.display = 'none';
    }
};

function warningSlide() {
    let slide = warningSlides[0];
    slideHeader.textContent = slide.header;
    slideText.textContent = slide.text;
    prevBtn.style.display = 'none';
    nextBtn.style.display = 'none';
    slideImg.src = './images/grinch.png';
}

nextBtn.addEventListener('click', function() {
    currentSlide++;
    updateSlide();
});

prevBtn.addEventListener('click', function() {
    currentSlide--;
    updateSlide();
});

closeBtn.addEventListener('click', function() {
    modalOverlay.classList.remove('open-modal');
    currentSlide = 0;
});

playBtn.addEventListener('click', function() {
    introModal.style.display = 'none';
    triviaModal.style.display = 'inline';
    triviaStart();
})

/*
TRIVIA FUNCTIONALITY
*/

const questionsDec1 = [
    {
        question: "What movie is this?",
        image: '/images/elf1.png',
        answers: ['Home Alone', 'Elf', 'The Grinch', 'The Santa Clause'],
        correct: 'Elf',
    },
    {
        question: 'According to Buddy, which of the following is not a main food group?',
        image: '/images.food.png',
        answers: ['Candy Corn', 'Candy Canes', 'Chocolate', 'SYRUP!'],
        correct: 'Chocolate',
    }
];

const questionsDec2 = [
    {
        question: "What movie is this?",
        image: '/images/homealone.png',
        answers: ['Home Alone', 'Elf', 'The Grinch', 'The Santa Clause'],
        correct: 'Home Alone',
    },
    {
        question: 'What criminal nickname did Marv give himself and Harry?',
        image: '/images/homealonebadguys.png',
        answers: ['The Sticky Bandits', 'The Goodfellas', 'Team Rocket', 'The Wet Bandits'],
        correct: 'The Wet Bandits',
    }  
];

const questionNum = document.getElementById('question-num');
const questionText = document.getElementById('question-text');
const questionImg = document.getElementById('question-img');
const answerBtns = document.querySelectorAll('.answer-btn');

function triviaStart() {
    setNextQuestion();
}

function setNextQuestion() {
    let questionIndex = 0;
    questionNum.textContent = `Question ${questionIndex + 1}`;
    questionText.textContent = questions[questionIndex].question;
    questionImg.src = questions[questionIndex].image; 
    let answers = questions[questionIndex].answers;
    let correctAnswer = questions[questionIndex].correct;
    for (let i = 0; i < answers.length; i++) {
        answerBtns[i].textContent = answers[i];
    };
};