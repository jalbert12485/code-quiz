var question0={
    question: "Question 0",
    answer1: "Q0 Answer 1",
    answer2: "Q0 Answer 2",
    answer3: "Q0 Answer 3",
    answer4: "Q0 Answer 4"
}
var question1={
    question: "Question 1",
    answer1: "Q1 Answer 1",
    answer2: "Q1 Answer 2",
    answer3: "Q1 Answer 3",
    answer4: "Q1 Answer 4"
}
var question2={
    question: "Question 2",
    answer1: "Q2 Answer 1",
    answer2: "Q2 Answer 2",
    answer3: "Q2 Answer 3",
    answer4: "Q2 Answer 4"
}
var question3={
    question: "Question 3",
    answer1: "Q3 Answer 1",
    answer2: "Q3 Answer 2",
    answer3: "Q3 Answer 3",
    answer4: "Q3 Answer 4"
}


var questions=[question0, question1, question2, question3];

var questionBox=document.querySelector("#question");
var answerBox1=document.querySelector("#answer1Label");
var answerBox2=document.querySelector("#answer2Label");
var answerBox3=document.querySelector("#answer3Label");
var answerBox4=document.querySelector("#answer4Label");
var submitBtn=document.querySelector("#submit-btn");
var currentQuestion=0;
var timeLeft=60;
var timeBox=document.querySelector("#time");


function changeQuestion() {
    if(currentQuestion===0){
        timeRemaining();
    }
    if(currentQuestion< questions.length){
    questionBox.textContent=questions[currentQuestion].question;
    answerBox1.textContent=questions[currentQuestion].answer1;
    answerBox2.textContent=questions[currentQuestion].answer2;
    answerBox3.textContent=questions[currentQuestion].answer3;
    answerBox4.textContent=questions[currentQuestion].answer4;
    }
    currentQuestion++;

}

submitBtn.addEventListener("click",changeQuestion);


function timeRemaining(){
    var timerInterval=setInterval(function(){
        timeLeft--;
        timeBox.textContent="Time left: "+ timeLeft;
        if(timeLeft==0 || (currentQuestion > questions.length)){
            clearInterval(timerInterval);
        }
    },1000)

    
}


