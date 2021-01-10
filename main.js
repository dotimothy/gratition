var answers = [];
var questions = ["question1","question2","question3","question4","question5","question6","question7","question8","question9","question10"];

function startGratiton() {
//separate function for transitions
  transition("Welcome","question1");

}

function q1() {
  input = document.getElementById("answer1").value;
  answers[0] = input;
  transition("question1","question2");
}

function q2a(answer) {
  answers[1] = answer;
}

function q2b() {
  transition("question2","question3");
}

var a3 = b3 = c3 = 0;
function q3a(answer) {
  var checklist = [];
  if(answer == "CB Answer1") {
    if(a3 == 0)
    checklist[0] = answer;
  }
  else if(answer == "CB Answer2" && b3 == 0) {
    checklist[1] = answer;
    b3++;
  }
  else if(answer == "CB Answer3" && c3 == 0)

}

function q3b() {
  transition("question3","Welcome");
}

function transition(element1,element2) {
  document.getElementById(element1).style.display = 'none';
  document.getElementById(element2).style.display = 'block';
}
