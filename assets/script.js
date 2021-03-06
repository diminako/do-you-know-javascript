var questionSect = document.getElementById("questionSect");
var answersSect = document.getElementById("answersSect");
var rightWrong = document.getElementById("rightWrong");
var highScoreId = document.getElementById("highScoreId")
var testBtn = document.getElementById("testBtn");
var countDownQuizId = document.getElementById("countDownQuizId")
var countDownId = document.getElementById("countDownId")
var listParent = document.querySelector("#listParent")
var formControl = document.getElementById("formControl")
var finalScore = document.getElementById("finalScore")
// control the time
var secondsRemainQuiz = 100
var questionNum = 0
var quizInterval
// array of questions and answers
var questObjArr = [
    {
        question: "What is JavaScript?",
        answers: [
            "A fancier version of Java that uses scripts.",
            "An Object oriented programming language.",
            "A replacement for HTML and CSS."
        ],
        correctAnswer: 1
    },
    {
        question: "What is the DOM?",
        answers: [
            "Document Object Model.",
            "Dominate Outer Module.",
            "Dimitri Only Matters."
        ],
        correctAnswer: 0
    },
    {
        question: "What method do you use when you have an event listener on a button inside of a form?",
        answers: [
            "event.preventDefault();",
            "event.Splice();",
            "event.exitMethod();"
        ],
        correctAnswer: 0
    },
    {
        question: "How long will this while loop run... while (i < 100) { do something }",
        answers: [
            "As long as the i variable is above 100.",
            "While i is equal to 1000.",
            "As long as the i variable is 99 and below."
        ],
        correctAnswer: 2
    },
    {
        question: "What is the outcome of NaN + 'NaN'?",
        answers: [
            "NaN - Not a Number.",
            "NaNaNaNaNaNaNaNaNaNa BatNaN!!!",
            "'NaNNaN'- a string."
        ],
        correctAnswer: 2
    },
    {
        question: "What is an Array?",
        answers: [
            "A data structure.",
            "Shorthand term for stingrays.",
            "An action that can be performed on objects."
        ],
        correctAnswer: 0
    },
    {
        question: "What does .prepend() do?",
        answers: [
            "It pretends to be an actual HTML element.",
            "It adds an HTML element.",
            "It removes a target element."
        ],
        correctAnswer: 2
    },
]

//  function to start game
function startGame() {
    clicker();
    quizTimer();
}
testBtn.addEventListener("click", startGame);

// function that controls the next question coming up and what goes in the elements.
function clicker() {
    rightWrong.textContent = "Don't be wrong ;)";
    questionSect.textContent = questObjArr[questionNum].question;
    listParent.innerHTML = "";

    for (i = 0; i < questObjArr[questionNum].answers.length; ++i) {
        listItem = document.createElement('button');
        listItem.innerHTML = questObjArr[questionNum].answers[i];
        listItem.setAttribute("id", i);
        listItem.setAttribute("class", "button-primary m-2 liBtns")
        listParent.appendChild(listItem);
    }
}

// function to control full quick time
function quizTimer() {
    quizInterval = setInterval(function () {
        secondsRemainQuiz--;
        countDownQuizId.textContent = secondsRemainQuiz;
        if (secondsRemainQuiz === 0) {
            outOfTime();
        } else if (questionNum === questObjArr.length) {
            clearInterval(quizInterval)
            endGame();
        }
    }, 1000)
}

// checks whether or not the answer was correct and what to do.
function answerInput(event) {
    if (event.target.matches("button")) {
        event.preventDefault();

        if (questObjArr[questionNum].correctAnswer !== parseInt(event.target.id)) {
            secondsRemainQuiz -= 10;
            rightWrong.textContent = "WRONG!!!";
        }
        if (questObjArr.length - 1 !== questionNum) {
            questionNum++;
            clicker();
        } else {
            endGame();
        }
    }
}
listParent.addEventListener("click", answerInput)

//  Game Ends
function endGame() {
    //  clear HTML to show different content
    clearInterval(quizInterval)
    questionSect.textContent = "Congrats! You had " + secondsRemainQuiz + " seconds left!"
    rightWrong.textContent = "You did it!!!"
    listParent.prepend(listItem);
    listParent.textContent = ""
    inputFormShow();
}
//  Stop the timer
function outOfTime() {
    clearInterval(quizInterval)
    questionSect.textContent = "DID NOT FINISH IN TIME!"
    rightWrong.innerHTML = "<a href='index.html'><button>Start Over</button></a>"
    listParent.prepend(listItem);
    listParent.textContent = "DID NOT FINISH IN TIME!  You don't even qualify for a score."
}

//  control whether or not you can see the input form.
function inputFormShow() {
    formControl.setAttribute("class", "displaying")
    finalScore.textContent = secondsRemainQuiz;
}

// controls localStorage of th high score input
var initialsInput = document.getElementById("initialsInput")
formControl.addEventListener("submit", function (event) {
    event.preventDefault();

    var currentLocal = JSON.parse(localStorage.getItem("highScoreStore"))
    if (!currentLocal) {
        currentLocal = []
    }
    var initials = initialsInput.value
    currentLocal.push(initials + ": " + secondsRemainQuiz)
    localStorage.setItem("highScoreStore", JSON.stringify(currentLocal))

    window.location = "./highscore.html";
})







