var answerOne = document.getElementById("answerOne");
var answerTwo = document.getElementById("answerTwo");
var answerThree = document.getElementById("answerThree");
var AnswerFour = document.getElementById("answerFour");
var quizform = document.getElementById("quizform");
//var onLoad = document.getElementById("body");
var score = 0;
var questionContainer = document.getElementById("questionContainer");
var quizQuestion = document.getElementById("title");
var currentQuestionNumber = 0;

// list of all questions, choices, and answers
var questions = [
    {
        title: "Commonly used data types DO NOT include:",
        choices: ["strings", "booleans", "alerts", "numbers"],
        answer: "alerts"
    },
    {
        title: "The condition in an if / else statement is enclosed within ____.",
        choices: ["quotes", "curly brackets", "parentheses", "square brackets"],
        answer: "parentheses"
    },
    {
        title: "Arrays in JavaScript can be used to store ____.",
        choices: [
            "numbers and strings",
            "other arrays",
            "booleans",
            "all of the above"
        ],
        answer: "all of the above"
    },
    {
        title:
            "String values must be enclosed within ____ when being assigned to variables.",
        choices: ["commas", "curly brackets", "quotes", "parentheses"],
        answer: "quotes"
    },
    {
        title:
            "A very useful tool used during development and debugging for printing content to the debugger is:",
        choices: ["JavaScript", "terminal / bash", "for loops", "console.log"],
        answer: "console.log"
    }
];
//calls the page to load
init();

// displays the first question
function displayQuestion(questionBlock) {
    quizQuestion.innerText = questionBlock.title;
    answerOne.textContent = questionBlock.choices[0];
    answerTwo.textContent = questionBlock.choices[1];
    answerThree.textContent = questionBlock.choices[2];
    answerFour.textContent = questionBlock.choices[3];

}
// when the page loads init starts the quiz
function init() {
    startQuiz();
    quizform.addEventListener("click", function (e) {
        var buttonClicked = e.target;
        checkAnswer(buttonClicked.innerText);
    });
}
//defines start quiz function
function startQuiz() {
    displayQuestion(questions[0]);
    //startTimer();
}

function checkAnswer(userAnswerText) {
    if (userAnswerText === questions[currentQuestionNumber].answer) {
        score++;
        showNextQuestion();
    } else {
        showNextQuestion();
        //drop timer
    }
}

function showNextQuestion() {
    if (currentQuestionNumber === questions.length - 1) {
        endQuiz();
    } else {
        currentQuestionNumber++;
        displayQuestion(questions[currentQuestionNumber]);
    };
}

function endQuiz() {
    quizform.remove();
    quizQuestion.textContent = "Your score is " + score;
    var userInput = document.createElement("p");
    userInput.textContent = "To save your score enter your initials here";
    userInput.setAttribute("style", "margin-left:50px; font-size: 30px; margin-top: 20px");
    quizQuestion.appendChild(userInput);
    var userInitials = document.createElement("input");
    userInitials.setAttribute("type", "text");
    userInitials.setAttribute("style", "margin-left:50px; width:6rem");
    quizQuestion.appendChild(userInitials);
    var savehighScoreBtn = document.createElement("button");
    savehighScoreBtn.setAttribute("type", "button");
    savehighScoreBtn.setAttribute("style", "background-color: #007bff; border-radius: 8px; margin-left:20px; padding-left: 15px; padding-right: 15px; color:white; border-color: #007bff; font-size:30px; font-weight:200");
    savehighScoreBtn.textContent = "Save";
    quizQuestion.appendChild(savehighScoreBtn);
    
    savehighScoreBtn.addEventListener("click", function(e) {
         e.preventDefault();
         if(userInitials.value === "") {
             alert("Enter your intitials")
         } else {
             storeScore(userInitials.value, score);
        }
        
    });
    
    function storeScore(userName, newScore){
        localStorage.setItem("newHighScoreAdded", JSON.stringify({userName, newScore}));
        window.location.assign("highscores.html");
    }
}    

i = 60;
function onTimer() {
  document.getElementById("mycounter").innerHTML = i;
  i--;
  if (i < 0) {
    alert('game over!');
  }
  else {
    setTimeout(onTimer, 1000);
  }
};