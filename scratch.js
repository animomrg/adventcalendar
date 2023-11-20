function triviaStart(date) {
    triviaModal.style.display = 'block';
    introModal.style.display = 'none';
    dayQuestions = questions[date - 1];
    console.log(dayQuestions);
    loadQuestion();
};

function loadQuestion() {
    elQuestion.innerHTML = dayQuestions[currentQuestion].question;
    elImage.src = dayQuestions[currentQuestion].image;
    submitBtn.addEventListener('click', checkAnswer);
    answerContainer.innerHTML = "";

    for (let i = 0; i < dayQuestions.length - 1; i++) {
        const answerDiv = document.createElement('div');
        const answer = document.createElement('input');
        const answerLabel = document.createElement('label');
        
        answer.type = 'radio';
        answer.name = 'answer';
        answer.value = i;
        answer.id = i;
        answer.className = 'answer-radio';

        answerLabel.textContent = dayQuestions[currentQuestion].answers[i].text;
        answerLabel.classList.add('answer-label');
        answerLabel.htmlFor = i;
        if (answerLabel.textContent.length > 20) {
            answerLabel.classList.add('label-small-font');
        }

        answerDiv.className = 'answer-div';
        answerDiv.appendChild(answer);
        answerDiv.appendChild(answerLabel);

        answerContainer.appendChild(answerDiv);
    }
};

function checkAnswer() {
    const userAnswer = parseInt(document.querySelector('input[name="answer"]:checked').value);
    if (dayQuestions[currentQuestion].answers[userAnswer].isCorrect) {
        userScore++;
        nextQuestion();
    } else {
        nextQuestion();
    }
};

function nextQuestion() {
    if (currentQuestion < dayQuestions.length - 1) {
        currentQuestion++;
        loadQuestion();
    } else {
        questionContainer.remove();
        questionImgContainer.remove();
        answerContainer.remove();
        submitBtn.remove();
        loadScore();
    }
};

function loadScore() {
    const scoreContainer = document.querySelector('.score-container');
    const totalScore = document.getElementById('score-text');
    const scoreImgContainer = document.querySelector('.score-img-container');
    const scoreImg = document.getElementById('score-img');
    const homeBtnContainer = document.querySelector('.home-btn-container');
    const homeBtn = document.getElementById('home-btn');

    homeBtn.addEventListener('click', () => {
        scoreContainer.style.display = 'none';
        currentSlide = 0;
        currentQuestion = 0;
        dayQuestions = [];
        returnHome();
    });
    
    scoreContainer.style.display = 'block';
    scoreImgContainer.style.display = 'block';
    scoreImg.style.display = 'block';
    homeBtnContainer.style.display = 'block';

    totalScore.textContent = `You scored ${userScore} out of ${dayQuestions.length}!`;
    if (userScore === 5) {
        scoreImg.src = './images/leslie.gif';
    } else if (userScore === 4) {
        scoreImg.src = './images/santawink.gif';
    } else if (userScore === 3) {
        scoreImg.src = './images/shrug.gif';
    } else if (userScore === 2) {
        scoreImg.src = './images/ralphieshrug.gif';
    } else if (userScore === 1) {
        scoreImg.src = './images/christmasangry.gif';
    } else {
        scoreImg.src = './images/samuel.gif';
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