/*
COLOR THEMES AND TOGGLING 
*/

// COLOR & FONT VARIABLES
const redToggle = document.getElementById('red-theme');
const snowToggle = document.getElementById('snow-theme');
const greenToggle = document.getElementById('green-theme');
const backgroundToggle = document.getElementById('background-btn');
const fontToggle = document.getElementById('font-btn');
const mainContainer = document.querySelector('.main-container');
const bgImgs = ['none', 'url(./images/greenbg.png)', 'url(./images/redbg.png)', 'url(./images/neonbg.png)', 'url(./images/snowbg.png)'];
const fonts = ['Mountains of Christmas', 'Comic Neue', 'St Nicholas', 'Montserrat'];
const root = document.querySelector(':root');

// COLOR THEMES
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

// COLOR TOGGLES
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

// Selectors 

// BUTTONS
const nextBtn = document.querySelector('.next-btn');
const prevBtn = document.querySelector('.prev-btn');
const closeBtn = document.querySelector('.close-btn');
const playBtn = document.querySelector('.play-btn');
const answerBtns = document.querySelectorAll('.answer-btn');
const modalOverlay = document.querySelector('.modal-overlay');
const introModal = document.querySelector('.intro-modal');
const triviaModal = document.querySelector('.trivia-modal');
const slideHeader = document.getElementById('slide-header');
const slideText = document.getElementById('slide-text');
const slideImg = document.getElementById('slide-img');
const comeBackText = document.getElementById('come-back-text');
const modalContainer = document.querySelector('.modal-container');
const questionNum = document.getElementById('question-num');
const questionText = document.getElementById('question-text');
const questionImg = document.getElementById('question-img');

const currentDate = new Date().getDate();
let currentSlide = 0;

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

const introDec1 = [
    "The best thing about turning over the calendar to December is opening the first door of the advent calendar!", 
    "Each day, when you come back to your advent calendar and open the day's door, you'll find five trivia questions waiting for you.",
    "Choose the best answer from the multiple choice options by clicking or tapping on the correct button.",
    "Without further ado, let's get started!",
];

const introDec2 = [
    "Welcome back for day number 2! Glad you haven't OD'ed on Christmas baking yet, still plenty of time for that.",
    "Today is the first very special Sing Along Saturday! All questions will be fill-in-the-blank with the correct missing lyrics.",
    "Choose the best answer from the multiple choice options by clicking or tapping on the correct button.",
    "It's beginning to look a lot like Christmas! Let's go!"
];

const introDec3 = [
    "Since we all loved Sing Along Saturday so much, why not roll it right into a Sing Along Sunday!?",
    "If you missed yesterday, it's nice and easy. All questions are fill-in-the-blank with the correct missing lyrics.",
    "Choose the best answer from the multiple choice options by clicking or tapping on the correct button.",
    "Here's a vocal warm-up for you: 'Unique, New York. Unique, New York.' Are we ready?"
];

const introDec4 = [
    "Today we're going back to the movies, but before that a quick non-Christmas sing-along interlude...",
    "Happy birthday to Meg\nHappy birthday to Meg\nHappy birthday to Megan\nHappy birthday to you!",
    "And with that, a reminder to click or tap the correct button for your answer to the multiple-choice question.",
    "Let's get it started!",
];

const questionsDec1 = [
    {
        question: "What movie is this?",
        image: '/images/elf1.png',
        answers: ['Home Alone', 'Elf', 'The Grinch', 'The Santa Clause'],
        correct: 'Elf',
    },
    {
        question: 'According to Buddy, which of the following is not a main food group?',
        image: '/images/food.png',
        answers: ['Candy Corn', 'Candy Canes', 'Chocolate', 'SYRUP!'],
        correct: 'Chocolate',
    }
];

const questionsDec2 = [
    {
        lyric: "You know Dasher and Dancer and Prancer and _____\nComet and Cupid and ______ and Blitzen\nBut do you recall\nThe most famous reindeer of all?",
        image: '.images/rudolph.gif',
        answers: ['Vixen / Donner', 'Dixon / Rona', 'Nixon / Fauna', 'Billy / Reginald'],
        correct: 'Vixen / Donner',
    },
    {
        lyric: "Once again, as in olden days\nHappy golden days of ____\nFaithful friends who are ____ to us\nWill be near to us once more",
        image: '.images/frank.png',
        answers: ['Yours / Close', 'Yore / Dear', 'Snow / Good', 'Lore / Feared'],
        correct: 'Yore / Dear',
    }
];

const questionsDec3 = [
    {
        lyric: "In the meadow, we can build a snowman\mWe'll pretend that he is ______ Brown\nHe'll say, are you _______?\nWe'll say, no man\nBut you can do the job when you're in town",
        image: '.images/winter.png',
        answers: ['Carson / Tired', 'Mister / Cranky', 'Parson / Married', 'Jerry / Richard'],
        correct: 'Parson / Married',
    },
    {
        lyric: "Here comes Santa Claus, here comes Santa Claus, right down ________________\nHe's got a bag that's filled with toys for boys and girls again.\nHear those sleigh bells jingle jangle, oh what a beautiful _____\nSo jump in bed and cover your head, 'cause Santa Claus comes tonight",
        image: '.images/santa.gif',
        answers: ['Candy Cane Lane / Night', 'Sugar Drop Lane / Day', 'The Opposite Lane / Light', 'Santa Claus Lane / Sight'],
        correct: 'Santa Claus Lane / Sight',
    }
];

const questionsDec4 = [
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

// DAY BUTTONS
const dayBtns = document.querySelectorAll('.btn-day');

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

// MODAL RESET FUNCTION
function modalReset() {
    slideHeader.textContent = '';
    slideText.textContent = '';
    slideImg.style.display = 'none';
    comeBackText.style.display = 'none';
    prevBtn.style.display = 'none';
    nextBtn.style.display = 'none';
};

// WARNING MODAL FUNCTION
function warningSlide() {
    let index = Math.floor(Math.random() * warningSlides.length);
    let warning = warningSlides[index];
    slideHeader.textContent = warning.header;
    slideText.textContent = warning.text;
    slideImg.src = warning.img;
    slideImg.style.display = 'inline';
    comeBackText.style.display = 'block';
};

function dailyIntro(date) {
    let currentSlide = 1;
    let slideInfo = slides[`Dec ${date}`];
    slideHeader.textContent = `December ${date}`;
    slideText.textContent = slideInfo[`text${currentSlide}`];
    if (currentSlide < introLength - 1) {
        nextBtn.style.display = 'inline';
    } else {
        nextBtn.style.display = 'none';
    }

    if (currentSlide > 0) {
        prevBtn.style.display = 'inline';
    } else {
        prevBtn.style.display = 'none';
    }

    if (currentSlide === introLength - 1) {
        playBtn.style.display = 'inline';
    } else {
        playBtn.style.display = 'none';
    }
};

nextBtn.addEventListener('click', function() {
    currentSlide++;
    slideText.textContent = slideInfo[`text${currentSlide}`];
});

prevBtn.addEventListener('click', function() {
    currentSlide--;
});

closeBtn.addEventListener('click', function() {
    modalOverlay.classList.remove('open-modal');
    currentSlide = 0;
});

playBtn.addEventListener('click', function() {
    introModal.style.display = 'none';
    triviaModal.style.display = 'inline';
    triviaStart();
});



// Functions 





function triviaStart() {
    setNextQuestion();
};

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