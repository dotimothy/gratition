var answers = [];
var questions = ["question1","question2","question3","question4","question5","question6","question7","question8","question9","question10","question11","question12"];

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

var checklist3 = ["","",""];
function q3a(answer) {
  if(answer == "CB Answer1") {
    if(checklist3[0] == "") {
    checklist3[0] = answer;
    }
    else if(checklist3[0] == "CB Answer1") {
      checklist3[0] = "";
    }
  }
  if(answer == "CB Answer2") {
    if(checklist3[1] == "") {
    checklist3[1] = answer;
    }
    else if(checklist3[1] == "CB Answer1") {
      checklist3[1] = "";
    }
  }
  if(answer == "CB Answer3") {
    if(checklist3[2] == "") {
    checklist3[2] = answer;
    }
    else if(checklist3[2] == "CB Answer3") {
      checklist3[2] = "";
    }
  }
}

function q3b() {
  var final = "";
  for(var i = 0; i < 3; i++) {
    if(checklist3[i] != "") {
      final += checklist3[i];
      if(i != 2) {
        final += ",";
      }
    }

  }
  answers[2] = final;
  transition("question3","Welcome");
}

function transition(element1,element2) {
  document.getElementById(element1).style.display = 'none';
  document.getElementById(element2).style.display = 'block';
}
