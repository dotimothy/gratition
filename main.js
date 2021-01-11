var answers = ["","","","","","","","","","",""];
var questions = ["question1","question2","question3","question4","question5","question6","question7","question8","question9","question10","question11","question12"];

function startGratiton() {
//separate function for transitions
  transition("Welcome","question1");

}

function q1() {
  var input = document.getElementById("answer1").value;
  answers[0] = input;
  transition("question1","question2");
}

function q2a(answer) {
  answers[1] = answer;
}

function q2b() {
  transition("question2","question3");
}

function q3() {
  var input = document.getElementById("answer3").value;
  answers[2] = input;
  transition("question3","question4");
}

function q4a(answer) {
  answers[3] = answer;
}

function q4b() {
  transition("question4","question5");
}

function q5() {
  var input = document.getElementById("answer5").value;
  answers[4] = input;
  transition("question5","question6");
}

function q5b() {
  transition("question5","question6");
}

function q6a(answer) {
  answers[5] = answer;
}

function q6b() {
  transition("question6","question7");
}

function q7a(answer) {
  answers[6] = answer;
}

function q7b() {
  transition("question7","question8");
}

function q8a(answer) {
  answers[7] = answer;
}

function q8b() {
  transition("question8","question9");
}

function q9() {
  var input = document.getElementById("answer9").value;
  answers[8] = input;
  transition("question9","question10");
}

function q10() {
  var input = document.getElementById("answer10").value;
  answers[9] = input;
  transition("question10","question11");
}

function q11() {
  var input = document.getElementById("answer11").value;
  answers[10] = input;
  madlib();
  transition("question11","result");
}

function bold() {
  for(var i = 0; i < 11; i++) {
    answers[i] = "<b>" + answers[i] + "</b>";
  }
}

var charCounter = 0;
function madlib() {
  var text = "Hello user of Gratition, whose name I see is " + answers[0] + "! Today you were feeling " + answers[1]  + ". After waking up you managed to accomplish " + answers[2] + " which made you " + answers[3] + " happy. The most notable thing that you completed today was " + answers[4] + " which was very impressive considering you got " + answers[5] + " of sleep after going to bed " + answers[6] + " last night. Today may have been a bit stressful due to " + answers[7] + " that made you lose track of time, but you got through it! Overall, you were so " + answers[8] + " today, but tomorrow is a new day! When you go to sleep you want to feel " + answers[9] + " and after taking time for yourself at " + answers[10] + " , you definitely deserve to feel that way! Thank you for using Gratition!";
  if(charCounter <= text.length) {
    document.getElementById("madlib").innerHTML += text.charAt(charCounter);
    setTimeout(madlib, 75);
    charCounter++;
  }
}

function transition(element1,element2) {
  document.getElementById(element1).style.display = 'none';
  document.getElementById(element2).style.display = 'block';
}
