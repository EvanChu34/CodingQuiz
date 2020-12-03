var startBtn = document.querySelector("start-button");
var quizBody = document.querySelector("#quiz");


var timerDisplay = document.getElementById("timer");
var secondsLeft = 60;

var questionHeader = document.getElementById("questions");
var answerChoices = document.getElementsById("answers");
var questionNumber = -1;
var answer;



function startQuiz(){
    coundDown();

    renderQuestion();
}

function coundDown(){
   var timerDown = setInterval(function(){
        secondsLeft--;
        timerDisplay.textContent = "Time;" + secondsLeft;

        if(secondsLeft === 0 || questionNumber === questions.length){
            clearInterval(timerDown)
        }
    }, 500)
}

function renderQuestion(){

    questionNumber++;
	answer = questions[questionNumber].answer

	questionHeader.textContent = questions[questionNumber].title;
	answerChoices.innerHTML = "";

	var choices = questions[questionNumber].choices;

	for (var i=0; i<choices.length; i++){
		var nextQuestion = document.createElement("button");
		nextQuestion.textContent = choices[i];
        document.answerChoices.appendChild(nextQuestion)
    }

}

startBtn.addEventListener('click', renderQuestion);




function showResult(){
	var answerResult = document.getElementByID("result")
}

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

