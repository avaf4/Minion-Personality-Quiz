/*Add your JavaScript here*/

//scores
var kevinScore = 0;
var bobScore = 0;
var ottoScore = 0;

var numQuestion = 0;

var result = document.getElementById("result");

var restart = document.getElementById("restart");

//questions
var q1a1 = document.getElementById("q1a1");
var q1a2 = document.getElementById("q1a2");
var q1a3 = document.getElementById("q1a3");

var q2a1 = document.getElementById("q2a1");
var q2a2 = document.getElementById("q2a2");
var q2a3 = document.getElementById("q2a3");

var q3a1 = document.getElementById("q3a1");
var q3a2 = document.getElementById("q3a2");
var q3a3 = document.getElementById("q3a3");

  //kevin
  q1a1.addEventListener("click", kevin)
  q2a2.addEventListener("click", kevin)
  q3a3.addEventListener("click", kevin)
  
  //bob
  q1a2.addEventListener("click", bob)
  q2a3.addEventListener("click", bobOtto)
  q3a1.addEventListener("click", bob)

  //otto
  q1a3.addEventListener("click", otto)
  q2a1.addEventListener("click", otto)
  q3a2.addEventListener("click", otto)

//restart
restart.addEventListener("click", restartQuiz)

//interactivity-kevin

function kevin(){
  kevinScore += 1;
  numQuestion += 1;

  console.log("numQuestion = " + numQuestion + " kevinScore = " + kevinScore);

  if (numQuestion == 3) {
  console.log("You have reached the end!");
    updateResult();
  }
  
}

//interactivity-bob

function bob(){
  bobScore += 1;
  numQuestion += 1;

  console.log("numQuestion = " + numQuestion + " bobScore = " + bobScore);

  if (numQuestion == 3) {
    console.log("You have reached the end!");
    updateResult();
  }
  
}


function bobOtto(){
    bobScore += 1;
ottoScore += 1;
  
  numQuestion += 1;

  console.log("numQuestion = " + numQuestion + " bobScore = " + bobScore);
  console.log("numQuestion = " + numQuestion + " ottoScore = " + ottoScore);

  if (numQuestion == 3) {
    console.log("You have reached the end!"); 
    updateResult();
  }
  
}


//interactivity-otto

function otto(){
  ottoScore += 1;
  numQuestion += 1;

  console.log("numQuestion = " + numQuestion + " ottoScore = " + ottoScore);

if (numQuestion == 3) {
  console.log("You have reached the end!");
  updateResult();
  }
  
}


function updateResult(){
 if (kevinScore >= 2){
  console.log("You are Kevin!");
   result.innerHTML= "You are Kevin!";
    } else if (bobScore >=2){
      console.log("You are Bob!");
   result.innerHTML= "You are Bob!";
      } else {
      console.log("You are Otto!");
   result.innerHTML = "You are Otto!";
 }
}

function restartQuiz(){
result.innerHTML = "Your result is...";
  console.log("Your result is...");
   kevinScore = 0;
 bobScore = 0;
 ottoScore = 0;
    numQuestion = 0; 
}



