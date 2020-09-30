//Questions are modified from W3School's JavaScript quiz at https://www.w3schools.com/quiztest/quiztest.asp?qtest=JS

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
    question: "Which of the following will correctly link an external script called ''script.js''",
    answer: ["<script name=''script.js''></script>",
    "<script href=''script.js''></script>",
    "<script src=''script.js''></script>",
     "<link href=''script.js''></link>"],
    correctAnswer: 3
}
var question3={
    question: "How would you write ''Hello World!'' in an alert box?",
    answer: ["alert(''Hello World!'');",
        "msg(''Hello World!'');",
    "alertBox(''Hello World!'');",
     "msgBox(''Hello Wolrd!'');"],
    correctAnswer: 1
}
var question4={
    question: "How do you create a function called ''myFunction'' in JavaScript?",
    answer: ["function=myFunction()",
        "function=myFunction()",
    "function() myFunction",
     "function myFunction()"],
    correctAnswer: 4
}
var question5={
    question: "How would you call a function called ''myFunction'' in JavaScript?",
    answer: ["call myFunction()",
        "myFunction()",
    "call function myFunction()",
     "myFunction"],
    correctAnswer: 2
}
var question6={
    question: "Which is a valid if statement in JavaScript",
    answer: ["if i==5 then {}",
        "if(i==5) then {}",
    "if i==5 {}",
     "if(i==5) {}"],
    correctAnswer: 4
}
var question7={
    question: "How does a for loop start?",
    answer: ["for i=1 to 5",
        "for (i=0; i <=5)",
    "for(i <=5; i++)",
     "for(i=0; i <=5; i++)"],
    correctAnswer: 4
}
var question8={
    question: "How do you add a comment in JavaScript?",
    answer: ["<!-- This is a comment -->",
        " /This is a comment",
    "// This is a comment  ",
     "< This is a comment >"],
    correctAnswer: 3
}
var question9={
    question: "Which of the following is a properly declared array?",
    answer: ["array myArray=[0,1,2]",
        "var myArray=[0,1,2]",
    "array myArray={ entry1: 1, entry2: 2, entry3: 3 }",
     "var myArray={ entry1: 1, entry2: 2, entry3: 3 }"],
    correctAnswer: 2
}


var highScore = localStorage.getItem("highScore");

if(highScore===null){
        localStorage.setItem("highScore", 0);
        highScore=0;

    }

var highScoreBox=document.querySelector("#viewHighScore");
highScoreBox.textContent="High Score: " + highScore;

var questions=[question0, question1, question2, question3, question4, question5, question6, question7, question8, question9];

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
    if((currentQuestion < questions.length+1) && (timeLeft>0)){
    setTimeout(function(){
        submitBtn.disabled=false;
    },1000);}



}

submitBtn.addEventListener("click",changeQuestion);


function timeRemaining(){
    var timerInterval=setInterval(function(){
        timeLeft--;
        if(timeLeft<=0 || (currentQuestion > questions.length)){
            timeLeft=0;
            clearInterval(timerInterval);
            checkHighScore();
            submitBtn.disabled=true;
        }
        timeBox.textContent="Time left: "+ timeLeft;
    }
    ,1000)

    
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

});






function checkAnswer() {
    if(userAnswer != questions[currentQuestion-1].correctAnswer){
        timeLeft=timeLeft -10;
        // if(timeLeft <= 0){
        //     timeLeft=0;
        // }
    }
}



function checkHighScore(){
    if(highScore < timeLeft){
        localStorage.setItem("highScore", timeLeft);
        highScoreBox.textContent="High Score: " + timeLeft;
    }

}

