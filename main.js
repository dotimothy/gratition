var answers = ["","","","","","","","","","",""];
var questions = ["question1","question2","question3","question4","question5","question6","question7","question8","question9","question10","question11","question12"];
speechSynthesis.getVoices().forEach(function(voice) {
  console.log(voice.name, voice.default ? voice.default :"");
});

function startGratiton() {
//separate function for transitions
  transition("Welcome","question1");
  speakText("What is your full name?");
}
 
// For now, it's the female Google voice but can make it adjustable per user settings soon!

function speakText(outputText) {    
    var msg = new SpeechSynthesisUtterance(outputText);
    msg.voice = speechSynthesis.getVoices().filter(function(voice) { return voice.name === "Google UK English Male"; })[0];
    msg.pitch = 1.25;
    msg.rate = 1;
    window.speechSynthesis.speak(msg);
}

function q1() {
  var input = document.getElementById("answer1").value;
  answers[0] = input;
  transition("question1","question2");
  speakText("How are you feeling today?");
}

function q2a(answer) {
  answers[1] = answer;
}

function q2b() {
  transition("question2","question3");
  speakText("What did you accomplish since waking up?");
}

function q3() {
  var input = document.getElementById("answer3").value;
  answers[2] = input;
  transition("question3","question4");
  speakText("Did these accomplishments make you happy?");
}

function q4a(answer) {
  answers[3] = answer;
}

function q4b() {
  speakText("Name One Thing You Would Like to Complete Today.");
  transition("question4","question5");
}

function q5() {
  var input = document.getElementById("answer5").value;
  answers[4] = input;
  speakText("How Many Hours of Sleep Did You Get Last Night?");
  transition("question5","question6");
}

function q6a(answer) {
  answers[5] = answer;
}

function q6b() {
  speakText("What Time Did You Go to Bed Last Night?");
  transition("question6","question7");
}

function q7a(answer) {
  answers[6] = answer;
}

function q7b() {
  speakText("What Made You Lose Track of Time Today?");
  transition("question7","question8");
}

function q8a(answer) {
  answers[7] = answer;
}

function q8b() {
  speakText("Fill in the Blank: Today I was so...");
  transition("question8","question9");
}

function q9() {
  var input = document.getElementById("answer9").value;
  answers[8] = input;
  speakText("When I go to sleep, I want to feel...");
  transition("question9","question10");
}

function q10() {
  var input = document.getElementById("answer10").value;
  answers[9] = input;
  speakText("When Time Are You Free Today?");
  transition("question10","question11");
}

function q11() {
  var input = document.getElementById("answer11").value;
  answers[10] = input;
  madlib();
  transition("question11","result");
}

//makes async for each loop
Object.defineProperty(Array.prototype, "asyncForEach", {
  value: async function(callback) {
    for (let i = 0; i < this.length; i++) {
      await callback(this[i], i,this);
    }
  }
});

async function madlib() { 
    var element = document.getElementById("madlib");
    var delay = 50;
    var speakMessage = `Hello |${answers[0]}|! Today you were feeling |${answers[1]}|. After waking up you managed to accomplish |${answers[2]}| which made you |${answers[3]}| happy. The most notable thing that you completed today was |${answers[4]}|, `;
    speakMessage += `which was very impressive considering you got |${answers[5]}| of sleep after going to bed at |${answers[6]}| last night. Today may have been a bit stressful due to |${answers[7]}| that made you lose track of time, but you got through it! Overall, you were so |${answers[8]}| `; 
    speakMessage += `today, but tomorrow is a new day! When you go to sleep you want to feel |${answers[9]}| and after taking time for yourself at |${answers[10]}|, you definitely deserve to feel that way! Thank you for using Gratition, and enjoy the rest of your day!`;
    speakText(speakMessage); 

    // so here I used template literals instead of concatenating variables and string with double quotes which can be messy.
    // appends string values to "speakMessage" var and web api will speak the message right away
    // detects words to be bolded just by scanning the "|" around them 

    var charCounter = 0; 

    if(charCounter <= speakMessage.length) {
      async function sleep(ms) {
        return await (new Promise(resolve => setTimeout(resolve, ms)));
      }

      async function typeBold(targetElement, speakMessage) {
        let bolded = document.createElement("b");
        targetElement.appendChild(bolded);
        for (let i of speakMessage) {
          await sleep(delay);
          bolded.innerHTML += i;
        }
      }

      speakMessage.split("|").asyncForEach(async (substring, index) => {
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

function transition(inElement,outElement) {
  document.getElementById(inElement).style.display = "none";
  document.getElementById(outElement).style.display = "block"; 
}