//Questions are modified from W3School's JavaScript quiz at https://www.w3schools.com/quiztest/quiztest.asp?qtest=JS
// Questions are saved as objects with connected answers, then all will be inserted in an array questions.

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
var questions=[question0, question1, question2, question3, question4, question5, question6, question7, question8, question9];



// assigning variables that will be used to connect to html.
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
var saveScoreBtn=document.querySelector("#score-btn");


// This will change the content of the question box as well as the answer boxes to correspond the next question in the array questions.  It also begins the quiz by changing begin quiz text to submit question on button.
function changeQuestion() {
    //After Begin quiz, make elements visible and change text on button.
    if(currentQuestion===0){
        timeRemaining();
        submitBtn.textContent="Submit Answer";
        answerCont.setAttribute("style", "visibility: visible");

    }
    // While there are still questions left, we went to check the submitted answer against the correct answer.
    if(0 < currentQuestion && currentQuestion<= questions.length){
        checkAnswer();
    }
    // Here we change the question and answer box text.
    if(currentQuestion< questions.length){
    questionBox.textContent=questions[currentQuestion].question;
        for(var i=0; i< 4; i++){
    answerBox[i].textContent=questions[currentQuestion].answer[i];
            }
    }
    // change to next question
    currentQuestion++;
    // disable submit button, then enables it after 1 sec to avoid accidently clicking through questions.  Note delay could be shorter if just avoiding double click, but also wanted to ensure the user reads the question for atleast 1 second.
    submitBtn.disabled=true;
    if((currentQuestion < questions.length+1) && (timeLeft>0)){
    setTimeout(function(){
        submitBtn.disabled=false;
    },1000);}



}

// We listen for the submit button to be clicked.  When it is, the changeQuestion function above will be called.
submitBtn.addEventListener("click",changeQuestion);

//Sets timer that decrement timeLeft.
function timeRemaining(){
    var timerInterval=setInterval(function(){
        // Decrements time left
        timeLeft--;
        //If time is out or we have answered all the questions, we set time to 0, check if we got a highscore and disable the submit button.
        if(timeLeft<=0 || (currentQuestion > questions.length)){
            clearInterval(timerInterval);
            submitBtn.disabled=true;
            saveScoreBtn.setAttribute("style","display: block");
        }
        if(timeLeft < 0){
            timeLeft=0;
        }
        // Updated the timer box to show the current time left.
        timeBox.textContent="Time left: "+ timeLeft;
    }
    ,1000)

    
}

//userAnswer corresponds to the currently chosen answer box.
var userAnswer=1;

function changeUserAnswer(j){
    userAnswer=j;
}




//When the user clicks on an input in the form box, the userAnswer is changed to the number corresponding to that box.
fieldSet.addEventListener("click", function(event) {
    var element = event.target;
    if (element.matches("input")){
        userAnswer=Number(element.getAttribute("data-answer"));
    }

});





// When an answer is submit we use this to see if the currently checked box corresponds to the correct answer for that quesion.  If not, we deduct 10 seconds from the time left.
function checkAnswer() {
    if(userAnswer != questions[currentQuestion-1].correctAnswer){
        timeLeft=timeLeft -10;
    }
}




