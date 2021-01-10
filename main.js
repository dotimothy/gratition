var answers = [];
var questions = ["question1","question2","question3","question4","question5","question6","question7","question8","question9","question10"];

function startGratiton() {
//separate function for transitions
  return;

}

function submit(question,answer) {
  var index;
  var input = document.getElementById(answer).value;
  for(var i = 0; i < questions.length; i++) {
    if(questions[i] == question) {
        index = i;
    }
  }

  answers[index] = input;
  document.write(input);
}

function transition(element1,element2) {
  document.getElementbyID('element1').style.display = 'none';
  document.getElementbyID('element2').style.display = 'block';
}
