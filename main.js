var answers = ["","","","","","","","","","",""];
var questions = ["question1","question2","question3","question4","question5","question6","question7","question8","question9","question10","question11"];
var qc = ["What is your full name?","How are you feeling today?","What did you accomplish since waking up?","Did these accomplishments make you happy?","Name One Thing You Would Like to Complete Today.","How Many Hours of Sleep Did You Get Last Night?","What Time Did You Go to Bed Last Night?","What Made You Lose Track of Time Today?","Fill in the Blank: Today I was so...","When I go to sleep, I want to feel...","When Time Are You Free Today?"];
var msg = new SpeechSynthesisUtterance();
var volume = 1;
msg.voice = speechSynthesis.getVoices().filter(function(voice) { return voice.name === "Google UK English Male"; })[0];
msg.pitch = 1.25;
msg.rate = 1;
msg.text = '';
msg.volume = volume;


function mute() {
  volume = 1-volume;
  msg.volume = volume;
}

function checkSpeech() {
  var speak = 0;
  for(var i = 0; i < questions.length; i++) {
    var element = document.getElementById(questions[i]);
    if(element.classList.contains("fade-in") && !(speak)) {
      speakText(qc[i]);
      speak = 1;
    }
  }
  speak = 0;
}


function startGratiton() {
//separate function for transitions
  transition("Welcome","question1");
  //speakText("What is your full name?");
}

// For now, it's the female Google voice but can make it adjustable per user settings soon!

function speakText(outputText) {
    msg.text = outputText;
    msg.volume = volume;
    window.speechSynthesis.speak(msg);
}

function q1() {
  var input = document.getElementById("answer1").value;
  answers[0] = input;
  transition("question1","question2");
  //speakText("How are you feeling today?");
}

function q2a(answer) {
  answers[1] = answer;
}

function q2b() {
  transition("question2","question3");
  //speakText("What did you accomplish since waking up?");
}

function q3() {
  var input = document.getElementById("answer3").value;
  answers[2] = input;
  transition("question3","question4");
  //speakText("Did these accomplishments make you happy?");
}

function q4a(answer) {
  answers[3] = answer;
}

function q4b() {
  //speakText("Name One Thing You Would Like to Complete Today.");
  transition("question4","question5");
}

function q5() {
  var input = document.getElementById("answer5").value;
  answers[4] = input;
  //speakText("How Many Hours of Sleep Did You Get Last Night?");
  transition("question5","question6");
}

function q6a(answer) {
  answers[5] = answer;
}

function q6b() {
  //speakText("What Time Did You Go to Bed Last Night?");
  transition("question6","question7");
}

function q7a(answer) {
  answers[6] = answer;
}

function q7b() {
  //speakText("What Made You Lose Track of Time Today?");
  transition("question7","question8");
}

function q8a(answer) {
  answers[7] = answer;
}

function q8b() {
  //speakText("Fill in the Blank: Today I was so...");
  transition("question8","question9");
}

function q9() {
  var input = document.getElementById("answer9").value;
  answers[8] = input;
  //speakText("When I go to sleep, I want to feel...");
  transition("question9","question10");
}

function q10() {
  var input = document.getElementById("answer10").value;
  answers[9] = input;
  //speakText("When Time Are You Free Today?");
  transition("question10","question11");
}

async function q11() {
  var input = document.getElementById("answer11").value;
  answers[10] = input;
  transition("question11","result");
  msg.rate = 1.1;
  await sleep(250);
  await madlib();
  showParty();

}

//makes async for each loop
Object.defineProperty(Array.prototype, "asyncForEach", {
  value: async function(callback) {
    for (let i = 0; i < this.length; i++) {
      await callback(this[i], i,this);
    }
  }
});

async function sleep(ms) {
  return await (new Promise(resolve => setTimeout(resolve, ms)));
}

async function madlib() {
    var element = document.getElementById("madlib");
    var delay = 30;
    var speakMessage = `Hello |${answers[0]}|! Today you were feeling |${answers[1]}|. After waking up you managed to accomplish |${answers[2]}| which made you |${answers[3]}| happy. The most notable thing that you completed today was |${answers[4]}|, `;
    speakMessage += `which was very impressive considering you got |${answers[5]}| of sleep after going to bed at |${answers[6]}| last night. Today may have been a bit stressful due to |${answers[7]}| that made you lose track of time, but you got through it! Overall, you were so |${answers[8]}| `;
    speakMessage += `today, but tomorrow is a new day! When you go to sleep you want to feel |${answers[9]}| and after taking time for yourself at |${answers[10]}|, you definitely deserve to feel that way! Thank you for using Graatition, and enjoy the rest of your day!`;
    speakText(speakMessage);

    // so here I used template literals instead of concatenating variables and string with double quotes which can be messy.
    // appends string values to "speakMessage" var and web api will speak the message right away
    // detects words to be bolded just by scanning the "|" around them

    var charCounter = 0;

    if(charCounter <= speakMessage.length) {


      async function typeBold(targetElement, speakMessage) {
        let bolded = document.createElement("b");
        targetElement.appendChild(bolded);
        for (let i of speakMessage) {
          await sleep(delay);
          bolded.innerHTML += i;
        }
      }

      await speakMessage.split("|").asyncForEach(async (substring, index) => {
        if (index % 2 === 0) {
          for (let i of substring) {
            await sleep(delay);
            element.innerHTML += i;
          }
        } else {
            await typeBold(element, substring);
        }
      });
    }
}

function showParty() {
  var party = document.getElementById("party");
  party.style.display = "block";
  party.classList.add('fade-in');
}

function transition(outElement,inElement) {
  var inE = document.getElementById(inElement);
  var outE = document.getElementById(outElement);
  outE.classList.remove('fade-in');
  outE.classList.add('fade-out');
  outE.setAttribute('hidden','');
  inE.classList.remove('fade-out');
  inE.classList.add('fade-in');
  // inE.style.display = "block";
  inE.removeAttribute('hidden');
  checkSpeech();
}
