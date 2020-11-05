var questionSect = document.getElementById("questionSect");
var answersSect = document.getElementById("answersSect");
var rightWrong = document.getElementById("rightWrong");
var highScoreId = document.getElementById("highScoreId")
var testBtn = document.getElementById("testBtn");
var countDownQuizId = document.getElementById("countDownQuizId")
var countDownId = document.getElementById("countDownId")
var listParent = document.querySelector("#listParent")

var secondsRemainQuiz = 600
var secondsRemainQuestion = 60

var correctA = 0
var incorrectA = 0


var questObjArr = [
    {
        question: "What is JavaScript?",
        answers: ["A fancier version of Java that uses scripts.", "An Object oriented programming language.", "A replacement for HTML and CSS.",],
        correctAnswer: 1
    },
    {
        question: "What is the DOM?",
        answers: ["Document Object Model.", "Dominate Outer Module.", "Dimitri Only Matters.",],
        correctAnswer: 0
    },
    {
        question: "What method do you use when you have an event listener inside a form?",
        answers: ["event.preventDefault();", "event.Splice();", "event.exitMethod();",],
        correctAnswer: 0
    },
    {
        question: "What is JavaScript?",
        answers: ["A fancier version of Java that uses scripts.", "A replacement for HTML and CSS.", "An Object oriented programming language."],
        correctAnswer: 2
    },
    {
        question: "What is the outcome of ",
        answers: ["A fancier version of Java that uses scripts.", "A replacement for HTML and CSS.", "An Object oriented programming language."],
        correctAnswer: 2
    },
]




// for (i = 0; i < questObjArr[i].answers.length; ++i) {
//     listItem = document.createElement('button');
//     listItem.innerHTML = questObjArr[i].answers[i];
//     listParent.appendChild(listItem);
// }




function clicker() {
    i++
    questionSect.textContent = questObjArr[i].question

    rightWrong.textContent = "not yet";

    for (i = 0; i < questObjArr[i].answers.length; ++i) {
        listItem = document.createElement('button');
        listItem.innerHTML = questObjArr[i].answers[i];
        listParent.appendChild(listItem);
    }

}

testBtn.addEventListener("click", clicker);










function quizTimer() {
    var quizInterval = setInterval(function () {
        secondsRemainQuiz--;
        countDownQuizId.textContent = secondsRemainQuiz;

        if (secondsRemainQuiz === 0) {
            clearInterval(quizInterval)
            questionSect.textContent = "DID NOT FINISH IN TIME!"
            rightWrong.textContent = "DID NOT FINISH IN TIME!"
        }
    }, 1000)
}
quizTimer();


function questionTimer() {
    var questionInterval = setInterval(function () {
        secondsRemainQuestion--;
        countDownId.textContent = secondsRemainQuestion;

        if (secondsRemainQuestion === 0) {
            clearInterval(questionInterval);



        }
    }, 1000)
}
questionTimer();










