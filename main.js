var answers = ["","","","","","","","","","",""];
var questions = ["question1","question2","question3","question4","question5","question6","question7","question8","question9","question10","question11"];
var msg = new SpeechSynthesisUtterance();
var volume = 1;
var voices = ["Google UK English Male","Google US English"];
msg.voice = speechSynthesis.getVoices().filter(function(voice) { return voice.name == voices[0];})[0];
msg.pitch = 1.25;
msg.rate = 1;
msg.text = '';
msg.volume = volume;

function start() {
  msg.voice = speechSynthesis.getVoices().filter(function(voice) { return voice.name == voices[0];})[0];
  speakText("Welcome to Graatition!");
}


function mute() {
  volume = 1-volume;
  msg.volume = volume;
  var mute = document.getElementById("mute");
  if(mute.innerHTML == "🔇") {
      mute.innerHTML = "🔈";
  }
  else {
      mute.innerHTML = "🔇";
  }
}

function theme() {
    var toggle = document.getElementById("theme");
    var page = document.documentElement;
    if(toggle.innerHTML == "🌙") {
        page.removeAttribute('dark-theme','');
        toggle.innerHTML = "☀️";
    }
    else {
        page.setAttribute('dark-theme','');
        toggle.innerHTML = "🌙";
    }
}

function voice() {
  var voice = document.getElementById("voice");
  if(voice.innerHTML == "👱‍♂️") {
    voice.innerHTML = "👩";
    msg.voice = speechSynthesis.getVoices().filter(function(voice) { return voice.name == voices[1];})[0];
  }
  else {
    voice.innerHTML = "👱‍♂️";
    msg.voice = speechSynthesis.getVoices().filter(function(voice) { return voice.name == voices[0];})[0];
  }

}

function startGratiton() {
//separate function for transitions
  transition("Welcome","question1");
  speakText("What is your full name?");
}

// For now, it's the female Google voice but can make it adjustable per user settings soon!

function speakText(outputText) {
    msg.text = outputText;
    msg.volume = volume;
    window.speechSynthesis.speak(msg);
}

function q1() {
  var input = document.getElementById("answer1").value;
  if(!input.trim()) return alert('Please answer the question :D');
  answers[0] = input;
  transition("question1","question2");
  speakText("How are you feeling today?");
}


function q2a(answer) {
  answers[1] = answer;
}

function q2b() {
  if(!answers[1].trim()) return alert('Please answer the question :D');
  transition("question2","question3");
  speakText("What did you accomplish since waking up?");
}

function q3() {
  var input = document.getElementById("answer3").value;
  if(!input.trim()) return alert('Please answer the question :D');
  answers[2] = input;
  transition("question3","question4");
  speakText("Did these accomplishments make you happy?");
}

function q4a(answer) {
  answers[3] = answer;
}

function q4b() {
  if(!answers[3].trim()) return alert('Please answer the question :D');
  transition("question4","question5");
  speakText("Name One Thing You Would Like to Complete Today.");
}

function q5() {
  var input = document.getElementById("answer5").value;
  if(!input.trim()) return alert('Please answer the question :D');
  answers[4] = input;
  transition("question5","question6");
  speakText("How Many Hours of Sleep Did You Get Last Night?");
}

function q6a(answer) {
  answers[5] = answer;
}

function q6b() {
  if(!answers[5].trim()) return alert('Please answer the question :D');
  transition("question6","question7");
  speakText("What Time Did You Go to Bed Last Night?");
}

function q7a(answer) {
  answers[6] = answer;
}

function q7b() {
  if(!answers[6].trim()) return alert('Please answer the question :D');
  transition("question7","question8");
  speakText("What Made You Lose Track of Time Today?");
}

function q8a(answer) {
  answers[7] = answer;
}

function q8b() {
  if(!answers[7].trim()) return alert('Please answer the question :D');
  transition("question8","question9");
  speakText("Fill in the Blank: Today I was so...");
}

function q9() {
  var input = document.getElementById("answer9").value;
  if(!input.trim()) return alert('Please answer the question :D');
  answers[8] = input;
  transition("question9","question10");
  speakText("When I go to sleep, I want to feel...");
}

function q10() {
  var input = document.getElementById("answer10").value;
  if(!input.trim()) return alert('Please answer the question :D');
  answers[9] = input;
  //speakText("When Time Are You Free Today?");
  transition("question10","question11");
}

async function q11() {
  var input = document.getElementById("answer11").value;
  if(!input.trim()) return alert('Please answer the question :D');
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
    var delay = 50;
    var textMessage = `Hello |${answers[0]}|! Today you were feeling |${answers[1]}|. After waking up you managed to accomplish |${answers[2]}| which made you |${answers[3]}| happy. The most notable thing that you completed today was |${answers[4]}|, `;
    textMessage += `which was very impressive considering you got |${answers[5]}| of sleep after going to bed at |${answers[6]}| last night. Today may have been a bit stressful due to |${answers[7]}| that made you lose track of time, but you got through it! Overall, you were so |${answers[8]}| `;
    textMessage += `today, but tomorrow is a new day! When you go to sleep you want to feel |${answers[9]}| and after taking time for yourself at |${answers[10]}|, you definitely deserve to feel that way! Thank you for using Gratition, and enjoy the rest of your day!`;
    var speakMessage = textMessage.replace(/Gratition/g, 'Graatition').replace(/\|/g, ''); //`Hello |${answers[0]}|! Today you were feeling |${answers[1]}|. After waking up you managed to accomplish |${answers[2]}| which made you |${answers[3]}| happy. The most notable thing that you completed today was |${answers[4]}|, which was very impressive considering you got |${answers[5]}| of sleep after going to bed at |${answers[6]}| last night. Today may have been a bit stressful due to |${answers[7]}| that made you lose track of time, but you got through it! Overall, you were so |${answers[8]}|  today, but tomorrow is a new day! When you go to sleep you want to feel |${answers[9]}| and after taking time for yourself at |${answers[10]}|, you definitely deserve to feel that way! Thank you for using Graatition, and enjoy the rest of your day!`;
    speakText(speakMessage);

    // so here I used template literals instead of concatenating variables and string with double quotes which can be messy.
    // appends string values to "speakMessage" var and web api will speak the message right away
    // detects words to be bolded just by scanning the "|" around them

    var charCounter = 0;

    if(charCounter <= textMessage.length) {


      async function typeBold(targetElement, textMessage) {
        let bolded = document.createElement("b");
        targetElement.appendChild(bolded);
        for (let i of textMessage) {
          await sleep(delay);
          bolded.innerHTML += i;
        }
      }

      await textMessage.split("|").asyncForEach(async (substring, index) => {
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


[...document.querySelectorAll('.box')].forEach(box => {
  const radios = [...box.querySelectorAll('.radio')];
  radios.forEach(radio => {
    radio.addEventListener('click', () => {
      radios.forEach(r => r.removeAttribute('selected'));
      radio.setAttribute('selected', '');
    });
  });
});