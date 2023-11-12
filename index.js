/*
COLOR THEMES AND TOGGLING 
*/

const redToggle = document.getElementById('red-theme');
const snowToggle = document.getElementById('snow-theme');
const greenToggle = document.getElementById('green-theme');

let redStyle = true;
let greenStyle = false;
let snowStyle = false;

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
    if (!redStyle) {
        redTheme();
        redStyle = true;
        greenStyle = false;
        snowStyle = false;
    }
});

snowToggle.addEventListener('click', function() {
    if (!snowStyle) {
        snowTheme();
        redStyle = false;
        greenStyle = false;
        snowStyle = true;
    }
});

greenToggle.addEventListener('click', function() {
    if (!greenStyle) {
        greenTheme();
        redStyle = false;
        greenStyle = true;
        snowStyle = false;
    }
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

dayBtns.forEach(button => {
    button.addEventListener('click', () => {
        modalOverlay.classList.add('open-modal');
        updateSlide();
    });
});

const nextBtn = document.querySelector('.next-btn');
const prevBtn = document.querySelector('.prev-btn');
const closeBtn = document.querySelector('.close-btn');
const playBtn = document.querySelector('.play-btn');

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

const questions = [
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

const questionNum = document.getElementById('question-num');
const questionText = document.getElementById('question-text');
const questionImg = document.getElementById('question-img');
const answerBtns = document.querySelectorAll('.answer-btn');

answerBtns.forEach(btn => console.log(btn.id))

function triviaStart() {
    setNextQuestion();
}

function setNextQuestion() {
    const answers = questions[0].answers;
    questionText.innerHTML = questions[0].question;
    questionImg.src = questions[0].image;
    
    };

function checkAnswer() {

}