var startBtn = document.querySelector("start-button");
var answerBtn = document.createElement("");
var answerChoices = document.createElement("li");
var timerDisplay = document.querySelector("#seconds-left");
var secondsLeft = 60;
var test, question, choice, choices;
var questionHead = doucment.createElement("p");
var questionNumber = -1;
var answer;
var questions = [
    {
        title: "Which HTML element do we put in JavaScript?",
        choices: ["JavaScript","script","js"],
        answer: "script"
    },
    {
        title: "Where is the correct place to insert Javascript",
        choices: ["In the head section", "in the body section", "Both A and B are right"],
        answer: "Both A and B are right"
    },
    {
        title: "How do you write 'Hello World' in an alert box?",
        choices: ["alert('Hello World');", "msgBox('Hello World');", "msg('Hello World');"],
        answer: "alert('Hello World');"
    },
    {
        title: "How do you write a function in JavaScript?",
        choices: ["function:myFunction()", "function = myFunction()", "function myFunctions()"],
        answer: "function myFunctions()"
    },
    {
        title: "Who created JavaScript?",
        choices: ["Netscape","Samsung", "Elon Musk "],
        answer: "Netscape"
    },
    {
        title: "How long did it take Brendan Eich to write the Javascript Langauge?",
        choices: ["3 years", "10 days", "19 months"],
        answer: "10 days"
    },
    {
        title: "is null an object?",
        choices: ["True", "False", "Neither"],
        answer: "True"
    },
    {
        title: "Java and Javascript are the same",
        choices: ["Yes", "No", "Sometimes"],
        answer: "No"
    }
];

startBtn.addEventListener('click', startQuiz);

function startQuiz(){
    coundDown();
    renderQuestion();
    
}

function coundDown(){
    var timeInterval = setInterval(function(){
        if(secondsLeft <= 0){
            clearInterval(secondsLeft = 0)
        }
        timerDisplay.innerHTML = secondsLeft
        secondsLeft -=1
    }, 1000)

    if(timeInterval === 0){
        renderResults();
    }
}

function renderQuestion(){
    
	questionNumber++;
	answer = questions[questionNumber].answer;

	questionHead.textContent = questions[questionNumber].title;
	answerChoices.innerHTML = "";

	var choices = questions[questionNumber].choices;

	for (var i=0; i<choices.length; i++){
		var nextQuestion = document.createElement("button");

		nextQuestion.textContent = choices[i];
		answerBtn = answerChoices.appendChild(nextChoice).setAttribute();
	}
}



function showResult(){
	var answerResult = document.getElementByID("result")


answerChoices.addEventListener("click", function (event){
	var answerResult = document.getElementByID("result")

	if (answer === event.target.textContent){ 
		answerResult.innerHTML = "Correct!";
		showResult();

	} else {
		answerResult.innerHTML = "Wrong!";
		secondsLeft = secondsLeft - 15;
		showResult();
	}
	renderQuestion();
});	











