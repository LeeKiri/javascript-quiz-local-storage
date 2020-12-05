var answerOne = document.getElementById("answerOne");
var answerTwo = document.getElementById("answerTwo");
var answerThree = document.getElementById("answerThree");
var AnswerFour = document.getElementById("answerFour");
//var onLoad = document.getElementById("body");
var score = 0;
var questionContainer = document.getElementById("questionContainer");
var quizQuestion = document.getElementById("title");
var answerOptions = document.getElementById("quizform");

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

  init();

function displayQuestions(){
    quizQuestion.innerText=questions[0].title;
    answerOne.textContent=questions[0].choices[0];
    answerTwo.textContent=questions[0].choices[1];
    answerThree.textContent=questions[0].choices[2];
    answerFour.textContent=questions[0].choices[3];
    
    console.log("display", questions[0].title);

}
function init(){
    displayQuestions();
};


    





