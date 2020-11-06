var questionSect = document.getElementById("questionSect");
var answersSect = document.getElementById("answersSect");
var rightWrong = document.getElementById("rightWrong");
var highScoreId = document.getElementById("highScoreId")
var testBtn = document.getElementById("testBtn");
var countDownQuizId = document.getElementById("countDownQuizId")
var countDownId = document.getElementById("countDownId")
var listParent = document.querySelector("#listParent")

var secondsRemainQuiz = 100

var questObjArr = [
    {
        question: "What is JavaScript?",
        answers: [
            "A fancier version of Java that uses scripts.",
            "An Object oriented programming language.",
            "A replacement for HTML and CSS.",
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
        question: "What method do you use when you have an event listener inside a form?",
        answers: [
            "event.preventDefault();",
            "event.Splice();",
            "event.exitMethod();"
        ],
        correctAnswer: 0
    },
    {
        question: "What is JavaScript?",
        answers: [
            "A fancier version of Java that uses scripts.",
            "A replacement for HTML and CSS.",
            "An Object oriented programming language."
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
            "The animal that killed Stever irwin.",
            "An action that can be performed on objects."
        ],
        correctAnswer: 0
    },
    {
        question: "What is the outcome of ",
        answers: [
            "A fancier version of Java that uses scripts.",
            "A replacement for HTML and CSS.",
            "An Object oriented programming language."
        ],
        correctAnswer: 2
    },
]

var questionNum = 0
var quizInterval

function quizTimer() {
    quizInterval = setInterval(function () {
        secondsRemainQuiz--;
        countDownQuizId.textContent = secondsRemainQuiz;
        if (secondsRemainQuiz === 0) {
            outOfTime();
        } else if (questionNum === questObjArr.length - 1) {
            clearInterval(quizInterval)
            endGame();
        }
    }, 1000)
}

function clicker() {
    rightWrong.textContent = "TESTING TESTING";
    questionSect.textContent = questObjArr[questionNum].question
    listParent.innerHTML = "";

    for (i = 0; i < questObjArr[questionNum].answers.length; ++i) {
        listItem = document.createElement('button');
        listItem.innerHTML = questObjArr[questionNum].answers[i];
        listItem.setAttribute("id", i)
        listParent.appendChild(listItem);
    }
}

function startGame() {
    clicker();
    quizTimer();
}
testBtn.addEventListener("click", startGame);

function answerInput(event) {
    if (event.target.matches("button")) {
        event.preventDefault();
        console.log(event.target.id)

        if (questObjArr[questionNum].correctAnswer !== parseInt(event.target.id)) {
            secondsRemainQuiz -= 10;
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
    questionSect.textContent = "Congrats! You had " + secondsRemainQuiz + " seconds left!"
    rightWrong.textContent = "Congrats! You had " + secondsRemainQuiz + " seconds left!"
    listParent.prepend(listItem);
    listParent.textContent = "Congrats! You had " + secondsRemainQuiz + " seconds left!"
}
//  Stop the timer
function outOfTime() {
    clearInterval(quizInterval)
    questionSect.textContent = "DID NOT FINISH IN TIME!"
    rightWrong.textContent = "DID NOT FINISH IN TIME!"
    listParent.prepend(listItem);
    listParent.textContent = "DID NOT FINISH IN TIME!  You don't even qualify for a score."
}

//  have a form for users initials
//  submit button to save initials to variable for local storage
//  store the data as an objects
//  read from local storage and convert local storage JSON  to store
//  push object into an array




















