console.log("work please");


var startBtn = document.querySelector("#start-button");

var timerEl = document.querySelector("#timer");
var secondsLeft = 60;

var questionHeader = document.querySelector("#questions");
var answerChoices = document.querySelector("#answers");

var questionNumber = -1;
var answer;

var questions = [
    {
        title: "Which HTML element do we put in JavaScript?",
        choices: ["JavaScript", "script" , "js"],
        answer: "script"
    },

    {
        title: "Where is the correct place to insert Javascript",
        choices: ["In the head section" , "in the body section" , "Both A and B are right"],
        answer: "Both A and B are right"
    },

    {
        title: "How do you write 'Hello World' in an alert box?",
        choices: ["alert('Hello World');" , "msgBox('Hello World');" , "msg('Hello World');"],
        answer: "alert('Hello World');"
    },

    {
        title: "How do you write a function in JavaScript?",
        choices: ["function:myFunction()" , "function = myFunction()" , "function myFunctions()"],
        answer: "function myFunctions()"
    },

    {
        title: "Who created JavaScript?",
        choices: ["Netscape" , "Samsung" , "Elon Musk "],
        answer: "Netscape"
    },

    {
        title: "How long did it take Brendan Eich to write the Javascript Langauge?",
        choices: ["3 years" , "10 days" , "19 months"],
        answer: "10 days"
    },

    {
        title: "is null an object?",
        choices: ["True" , "False" , "Neither"],
        answer: "True"
    },
    
    {
        title: "Java and Javascript are the same",
        choices: ["Yes" , "No" , "Sometimes"],
        answer: "No"
    }
];

function startQuiz(){

    countDown();
    renderQuestion();
}

function countDown(){
   var timerDown = setInterval(function(){
        secondsLeft--;
        timerEl.textContent = secondsLeft; 
        if(secondsLeft <= 0 || questionNumber === questions.length){
           clearInterval(timerDown)
       } 
    }, 1000)
};


function renderQuestion(){
    questionNumber++;
	answer = questions[questionNumber].answer

	questionHeader.textContent = questions[questionNumber].title;
	answerChoices.innerHTML = "";

	var choices = questions[questionNumber].choices;

	for (var i=0; i<choices.length; i++){
		var nextQuestion = document.createElement("button");
		nextQuestion.textContent = choices[i];
        answerBtn = answerChoices.appendChild(nextQuestion)
    }
}

startBtn.addEventListener("click", countDown);
startBtn.addEventListener("click", renderQuestion);


function showResult(){
    var answerResult = document.querySelector("#result")
}

answerChoices.addEventListener("click", function (event){
	var answerResult = document.querySelector("#result")

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




var userScore = document.querySelector("#user-score");

function giveScore(){
    userScore.textContent = "Your score was: " + secondsLeft + "!"
}


var hsInput = document.querySelector("#hs-text");
var hsForm = document.querySelector("#high-score");
var hsList = document.querySelector("#hs-list");
var score = [];

function renderHS(){
   
    for (var i=0; i<score.length; i++) {
        var score = score[i];

        var li = document.createElement("li");
        li.textContent = score;
        li.setAttribute("data-index",i);

        hsList.appendChild(li);
    }
}

function init(){
    var storedHS = JSON.parse(localStorage.getItem("score"));
    if (storedHS !== null){
        score = storedHS;
    }
    renderHS();
}

function storeHS(){
    localStorage.setItem("score", JSON.stringify(score));
}

hsForm.addEventListener("submit", function(event) {
    event.preventDefault();
    
    var hsText = hsInput.value.trim();

    if(hsText === ""){
        return;
    }

    score.push(hsText);
    hsInput.value = "";

    storeHS();
    renderHS();
});




