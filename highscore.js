// This document focuses on saving and retrieving high scores.

//Creating Variables, first gets from local storage, others refer to html documents.
var savedScores=JSON.parse(localStorage.getItem("savedScores"));
var userNameBox=document.querySelector("#user-name-input");
var highScoreBox=document.querySelector("#viewHighScore");
var scoreForm=document.querySelector("#save-score-form");
var highScoreList=document.querySelector("#high-score-list");

// It there are no high scores, we place a place holder.
if(savedScores===null){
    savedScores=[[0,"Name"]];
    localStorage.setItem("savedScores", JSON.stringify(savedScores));
}

// console.log(savedScores);


// Adds the current user's name and score to the local storage for high scores.
function addSavedScore(){
    var userName=userNameBox.value.trim();
    if(userName===""){
        return;
    }
    savedScores.push([timeLeft, userName]);
    localStorage.setItem("savedScores", JSON.stringify(savedScores));
    sortScore();

}


// Call the addSavedScore function when a person submits the form in the modal for saving scores.
scoreForm.addEventListener("submit",function(event){
    addSavedScore();

});

// Places the high score in descending order.  Then, we only keep the top 10 scores.
function sortScore(){
    for(var j=0; j < savedScores.length; j++){
        for(var i=j; i< savedScores.length; i++){
            if(savedScores[i][0] > savedScores[j][0]){
                var x=savedScores[i];
                var y=savedScores[j];
                savedScores[i]=y;
                savedScores[j]=x;
            }
        }
    }
    savedScores=savedScores.slice(0,10);
    localStorage.setItem("savedScores", JSON.stringify(savedScores));
}

//Makes the high score list.
function displayHighScore(){
    highScoreList.innerHTML="<h2>High Score</h2>";
    for(var i=0; i< savedScores.length; i++){
        var newDiv=document.createElement("li");
        newDiv.textContent=savedScores[i][1] +" got " +savedScores[i][0] +":";
        highScoreList.appendChild(newDiv);  
    }
}

// Toggles the high score list between displayed or not.
highScoreBox.addEventListener("click", function(){
    if(highScoreList.style.display==="" || highScoreList.style.display==="none"){
    displayHighScore();
    highScoreBox.textContent="Hide High Scores";
    highScoreList.setAttribute("style","display: block")
    }
    else if(highScoreList.style.display==="block"){
        highScoreBox.textContent="View High Scores";
        highScoreList.setAttribute("style","display: none")
    }
})
