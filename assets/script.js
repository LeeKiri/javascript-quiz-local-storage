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
    quizform.addEventListener("click", function(e) {
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
    console.log("the answer is " + userAnswerText);
}

function showNextQuestion() {
    currentQuestionNumber++;
    displayQuestion(questions[currentQuestionNumber]);
}

/*
var imageContainer = document.querySelector(".img-container");

imageContainer.addEventListener("click", function(event) {
  var element = event.target;

  if (element.matches("img")) {
    var state = element.getAttribute("data-state");

    if (state === "still") {
      element.setAttribute("data-state", "animate");
      element.setAttribute("src", element.getAttribute("data-animate"));
    } else if (state === "animate") {
      element.setAttribute("data-state", "still");
      element.setAttribute("src", element.getAttribute("data-still"));
    }
  }
});

*/





