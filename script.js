var question0={
    question: "In which HTML tag does the javascript go?",
    answer: ["<scripting>",
    "<script>",
    "<js>",
     "<javascript>"],
    correctAnswer: 2
}
var question1={
    question: "Which of the following will change the tag to say 'Hello World' <p id='demo'>This is a demonstration</p>",
    answer: ["document.querySelector('demo').textContent='Hello World!'",
    "document.GetElementById('demo').text='Hello World!'",
    "document.querySelector('#demo').innerHTML='Hello World!'",
    "document.querySelector('.demo').textContent='Hello World!'"],
    correctAnswer: 3
}
var question2={
    question: "Question 2",
    answer: ["Q2 Answer 1",
    "Q2 Answer 2",
    "Q2 Answer 3",
     "Q2 Answer 4"],
    correctAnswer: 1
}
var question3={
    question: "Question 3",
    answer: ["Q3 Answer 1",
    "Q3 Answer 2",
    "Q3 Answer 3",
     "Q3 Answer 4"],
    correctAnswer: 4
}

var highScore = localStorage.getItem("highScore");

if(highScore===null){
        localStorage.setItem("highScore", 0);
        highScore=0;

    }

var highScoreBox=document.querySelector("#viewHighScore");
highScoreBox.textContent="High Score: " + highScore;

var questions=[question0, question1, question2, question3];

var questionBox=document.querySelector("#question");
var answerBox1=document.querySelector("#answer1Label");
var answerBox2=document.querySelector("#answer2Label");
var answerBox3=document.querySelector("#answer3Label");
var answerBox4=document.querySelector("#answer4Label");
var answerBox=[answerBox1,answerBox2,answerBox3,answerBox4];
var submitBtn=document.querySelector("#submit-btn");
var currentQuestion=0;
var timeLeft=60;
var timeBox=document.querySelector("#time");
var fieldSet = document.querySelector("fieldset");
var answerCont=document.querySelector("#answer-cont");


function changeQuestion() {
    if(currentQuestion===0){
        timeRemaining();
        submitBtn.textContent="Submit Answer";
        answerCont.setAttribute("style", "visibility: visible");

    }
    if(0 < currentQuestion && currentQuestion<= questions.length){
        checkAnswer();
    }
    if(currentQuestion< questions.length){
    questionBox.textContent=questions[currentQuestion].question;
        for(var i=0; i< 4; i++){
    answerBox[i].textContent=questions[currentQuestion].answer[i];
            }
    }
    currentQuestion++;
    submitBtn.disabled=true;
    if(currentQuestion < questions.length+1){
    setTimeout(function(){
        submitBtn.disabled=false;
    },1000);}



}

submitBtn.addEventListener("click",changeQuestion);


function timeRemaining(){
    var timerInterval=setInterval(function(){
        timeLeft--;
        timeBox.textContent="Time left: "+ timeLeft;
        if(timeLeft==0 || (currentQuestion > questions.length)){
            clearInterval(timerInterval);
            checkHighScore();
            submitBtn.disabled=true;
        }
    },1000)

    
}


var userAnswer=1;

function changeUserAnswer(j){
    userAnswer=j;
}





fieldSet.addEventListener("click", function(event) {
    var element = event.target;
    if (element.matches("input")){
        userAnswer=Number(element.getAttribute("data-answer"));
    }
    // if (element.matches("button"){
    //     changeQuestion();
    // })
});






function checkAnswer() {
    if(userAnswer != questions[currentQuestion-1].correctAnswer){
        timeLeft=timeLeft -10;
    }
}



function checkHighScore(){
    if(highScore < timeLeft){
        localStorage.setItem("highScore", timeLeft);
        highScoreBox.textContent="High Score: " + timeLeft;
    }

}

