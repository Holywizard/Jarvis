//Contact us code.
function contact() {
 alert(
  "Whatsapp: +917262896435, Telegram: @officialarbazansari"
 );
}


//text display area
var motherbox = document
 .getElementById("mother");


//Typing area
var message = document
 .getElementById("startmsg");
var savedms = "";

//Variables
var speak = "";
var rate = 0;
var pit = 0;
var optshow = 0;
var darkornot = "off";
var activatebody = 0;
var remindercontrol = "off";
var reminde = "";
var remindList = [];
var remindArray = 0;
var onlyonereminder = 0;
var ii = 0;
var NoSpeak = false;
var turnoffspeaker = true;
var openPersonal = false;
const personalUrl =
 "https://docs.google.com/spreadsheets/d/1rXS3lUm0wPc8PzOw3KkNszCm8URm41zwYRk_lj9lm4A/export?format=csv";
var gotquery = 0;
var dataPoint = [11, 22, 33];
var dataOutput = ["A", "B", "C"];
var rmodeFilter = false;

//Send Button systems
function sendit() {
 if (message.value != "") {
  /*fetching message from text typing */
  savedms = message.value;

  //creating our message for jarvis
  var newmsg = document
   .createElement(
    "div");
  var pelement = document
   .createElement("p");
  var breaker = document
   .createElement("br");
  newmsg.setAttribute("align",
   "right");
  pelement.innerHTML = message.value;
  newmsg.appendChild(pelement);
  motherbox.appendChild(breaker);
  motherbox.appendChild(newmsg);
  pelement.className = "me";

  motherbox.scrollTop = motherbox
   .scrollHeight;
  message.value = "";
  /* We have sent our message now
   Jarvis will take 1 second to respond.*/
  setTimeout(receiveIt, 1000);
 } else {
  runSpeechRecognition();
  /* JS comes here */
  function runSpeechRecognition() {
   // get output div reference
   // new speech recognition object
   var SpeechRecognition =
    SpeechRecognition ||
    webkitSpeechRecognition;
   var recognition =
    new SpeechRecognition();

   // This runs when the speech recognition service starts
   recognition.onstart = function() {
    document.getElementById("mic")
     .innerText = "•••";
   };

   recognition.onspeechend =
    function() {
     recognition.stop();
     document.getElementById("mic")
      .innerText = "🎤";
    }

   recognition.onend = () => {
    // When speech recognition ends, start it again
    recognition.start();
   };

   // This runs when the speech recognition service returns result
   recognition.onresult = function(
    event) {
    var transcript = event.results[
     0][0].transcript;
    var confidence = event.results[
     0][0].confidence;
    message.value = transcript;
    sendit();
   }

   // start recognition
   recognition.start();
  }
 }
 speechtext();
}

function receiveIt() {
 // creating jarvis reply
 var newmsg = document
  .createElement(
   "div");
 var breaker = document
  .createElement("br");
 if (savedms.toLowerCase().search(
   "open tic tac toe") >= 0 ||
  savedms
  .toLowerCase() == "/ttt") {
  newmsg.innerHTML =
   "<div style='overflow:hidden;background-color:none;border-radius:5px;width:300px; height:320px;border:none;'><iframe src='https://arbazdiary.blogspot.com/p/solve-cubic-equations.html' style='border:none; height:500px;width:300px; background-color:none;border-radius:6px;margin-top:-150px;' scrolling='no'></iframe></div>";
  newmsg.style = "height:0px";
  speak = "Opening tic tac toe!";
 } else if (savedms.toLowerCase()
  .search("open cubic solution") >=
  0 || savedms
  .toLowerCase() == "/cubic") {
  newmsg.innerHTML =
   "<iframe src='https://myfuntools.blogspot.com/?m=1' height='240px' scrolling='no' style='border-radius:6px; border:none;background-color:rgba(0,0,0,0.1);'> </iframe>";
  newmsg.style = "height:0px;"
  speak = "Opening cubic solution!";
 } else if (savedms.toLowerCase()
  .search("time") >= 0 ||
  savedms
  .toLowerCase() == "/time") {
  var time = new Date();
  var h = time.getHours();
  var m = time.getMinutes();

  if (m < 10) {
   m = "0" + m;
  }
  if (h < 12 && h != 00) {
   m = m + " AM";
  }
  if (h > 12) {
   h = h - 12;
   m = m + " PM";
  }
  if (h == 00) {
   h = 12;
   m = m + " AM";
  }
  if (h < 10) {
   h = "0" + h;
  }

  newmsg.innerText = h + ":" + m;
  speak = "It's" + newmsg.innerText;
 } else if (savedms.toLowerCase()
  .search("tell me full time") >=
  0 || savedms
  .toLowerCase() == "/fulltime") {
  var allTime = new Date();
  newmsg.innerText = allTime;
  speak = newmsg.innerText;
 } else if (savedms.toLowerCase() ==
  "turn off speaker" || savedms
  .toLowerCase() == "turn of speaker"
 ) {
  turnoffspeaker == false;
  newmsg.innerText =
   "Speaker is turned off";
  speak =
   "Ok sir, speaker is now turned off";
 } else if (savedms.toLowerCase() ==
  "turn on speaker") {
  turnoffspeaker == true;
  newmsg.innerText =
   "I'm back, speaker is now turned on";
  speak = newmsg.innerText;
 } else if (savedms.toLowerCase()
  .search("what is") >= 0 && savedms
  .replace("+", "plus").search(
   "plus") >= 0) {
  var matches = savedms.match(
   /d+/g
  ); // creates array from matches

  var pluss = 0;
  if (matches.length < 1) {
   plus = "Sorry, i didn't get that";
  } else {
   for (var yi = 0; yi < matches
    .length; yi++) {
    pluss = pluss + Number(matches[
     yi]);

   }

   pluss = "It's " + pluss + " sir!";
  }
  newmsg.innerText = pluss;
  speak = pluss;
 } else if (savedms.toLowerCase()
  .search("what is") >= 0 && savedms
  .replace("x", "multiply by")
  .search(
   "multiply by") >= 0) {
  var matches = savedms.match(
   /d+/g
  ); // creates array from matches

  var pluss = 1;
  if (matches.length < 1) {
   plus = "Sorry, i didn't get that";
  } else {
   for (var yi = 0; yi < matches
    .length; yi++) {
    pluss = pluss * Number(matches[
     yi]);

   }

   pluss = "It's " + pluss + " sir!";
  }
  newmsg.innerText = pluss;
  speak = pluss;
 } else if (savedms.substring(0, 11)
  .toLowerCase() == "my name is " &&
  savedms.substring(11) != "") {
  newmsg.innerText = savedms
   .substring(11) + "!...nice name.";
  speak = newmsg.innerText;
  localStorage.setItem("name",
   savedms.substring(11));
 } else if (savedms.toLowerCase()
  .search("what is my name") >= 0) {
  newmsg.innerText =
   "Your name is " + localStorage
   .getItem("name");
  speak = newmsg.innerText;
 } else if (savedms.toLowerCase()
  .search("thank") >= 0) {
  newmsg.innerText =
   "I am happy to help you :)";
  speak =
   "I am happy to help you sir!";
 } else if (savedms.toLowerCase() ==
  "open call") {
  document.getElementById("call")
   .click();
  newmsg.innerHTML =
   "Okay sir!";
  speak = "Okay sir!";
  rate = 0.3;
 } else if (savedms.toLowerCase() ==
  "open sms") {
  document.getElementById("opensms")
   .click();
  newmsg.innerHTML = "Got it!";
  speak = "Got it!";
 } else if (savedms.toLowerCase()
  .search("enable dark mode") >=
  0 || savedms
  .toLowerCase() == "/dark") {
  darkornot = "off";
  theme();
  newmsg.innerText =
   "Dark mode enabled";
  speak = newmsg.innerText;
 } else if (savedms.toLowerCase()
  .search("enable light mode") >=
  0 || savedms
  .toLowerCase() == "/light") {
  darkornot = "on";
  theme();
  newmsg.innerText =
   "Light mode enabled";
  speak = newmsg.innerText;
 } else if (remindercontrol ==
  "on") {
  speak = remindList[remindArray];
  remindercontrol = "off"
  newmsg.innerText = remindList[
   remindArray];
  remindArray = remindArray + 1;
  onlyonereminder = 0;
 } else if (savedms.toLowerCase()
  .search(
   "remind me after") >= 0 && savedms
  .toLowerCase().search("minute") >=
  0 && onlyonereminder < 2) {
  var a = savedms.length;
  var b = savedms.substring(0, 16);
  var c = savedms.search("for");
  var d = savedms.search("after");
  var e = savedms.search("minute");
  var f = savedms.slice(d + 6, e -
   savedms.length);
  var ff = f * 60 * 1000;

  newmsg.innerText =
   "I'll remind you after " + f +
   " minutes";
  speak = newmsg.innerText;
  //  remindList.push(f);
  reminde =
   "Excuse me sir!, You had a reminder " +
   f + " minutes ago ";
  if (c > 0) {
   /* remindList.push(savedms.substring(c)); */
   reminde = reminde + savedms
    .substring(c);
  }
  remindList.push(reminde);
  setTimeout(remindon, ff);
  onlyonereminder = onlyonereminder +
   1;
  if (onlyonereminder > 1) {
   savedms = "How many reminders?";
   onlyonereminder =
    onlyonereminder - 1;
   receiveIt();
  }

 } else if (savedms ==
  "How many reminders?") {
  newmsg.innerHTML =
   "You can only set one reminder at a time";
  speak = newmsg.innerHTML;
 } else if (savedms.toLowerCase()
  .search("hello") >= 0 || savedms
  .toLowerCase().search("hii") >=
  0 || savedms.toLowerCase().search(
   "hey") >= 0) {
  var hireply = ["Hey!",
   "Hello sir!", "Oh hello!",
   "Hello, what can I do sir?"
  ];
  newmsg.innerText = hireply[Math
   .floor(Math.random() * hireply
    .length)];
  speak = newmsg.innerText;
 } else if (savedms.toLowerCase()
  .search("what are you doing") >= 0
 ) {
  newmsg.innerHTML =
   "I am still learning..";
  speak = newmsg.innerHTML;
 } else if (savedms.toLowerCase()
  .search(
   "close personal details") >= 0
 ) {
  newmsg.innerHTML = "Done";
  speak = newmsg.innerHTML;
  openPersonal = false;
 } else if (savedms.toLowerCase()
  .search("my personal details") >= 0
 ) {
  newmsg.innerHTML =
   "Okay sir, What do you want to know?";
  speak = newmsg.innerHTML;
  openPersonal = true;
  fetch(personalUrl).then(result =>
   result
   .text()).then(
   function(csvtext) {
    return csv().fromString(
     csvtext);
   }).then(
   function(csv) {
    csv.forEach(
     function(row) {
      dataPoint.push(row.Data);
      dataOutput.push(row.Arbaz);
     })
   });
 } else if (openPersonal == true) {
  for (var i = 0; i < dataPoint
   .length; i++) {
   var query = savedms.toLowerCase()
    .search(dataPoint[i]);

   if (query >= 0) {
    newmsg.innerHTML = dataOutput[i];
    speak = newmsg.innerHTML;
    gotquery = gotquery + 1;
   } else if (query < 0 && i ==
    dataPoint.length - 1 &&
    gotquery == 0) {
    newmsg.innerHTML =
     "Sorry, this data is not available.";
    speak = newmsg.innerHTML;
   }

  }
 } else if (savedms.toLowerCase()
  .search("open whatsapp") >= 0) {
  newmsg.innerHTML =
   "Opening whatsapp.";
  speak = newmsg.innerHTML;
  setTimeout(waopen, 1000);

  function waopen() {
   document.getElementById("walink")
    .click();
  }
 } else if (savedms == "/d") {
  rmodeFilter = false;
  speak = "default mode activated"
 } else if (savedms.toLowerCase()
  .search("register mode") >= 0 ||
  savedms == "/r" || rmodeFilter ==
  true) {
  newmsg.innerHTML =
   "Register mode activated";
  speak = newmsg.innerHTML;
  rmodeFilter = true;
 } else {
  var err = [
   "<em>Hint: You can say <b>Open call</b> to call someone.</em>",
   "<em>Hint: You can say <b>Open sms</b> to message someone.</em>",
   "<em>Hint: You can ask <b>What is the time</b> to get current time.</em>",
   "<em>Hint: You can say <b>Enable dark mode</b>/<b>Enable light mode</b> to change display.</em>",
   "<em>Hint: You can say <b>Remind me after 14 minutes for breakfast</b> to set a reminder.</em>",
   "<em>Hint: You can say <b>Open cubic solution</b> to solve cubic equations.</em>",
   "<em>Hint: You can say <b>Open tic tac toe</b> to open tic tac toe game.</em>",
   "<em>Hint: You can say <b>Open whatsapp</b> to message someone on WhatsApp.</em>"
  ];
  newmsg.innerHTML =
   "Can't understand what you are trying to say! <br><br>" +
   err[Math.floor(Math.random() * err
    .length)];
  pit = pit + 0.1;
  if (NoSpeak == false) {
   speak =
    "Can't understand what you are trying to say!";
   NoSpeak = true;
  } else {
   speak = "";
  }
 }
 motherbox.appendChild(breaker);
 motherbox.appendChild(newmsg);
 newmsg.className = "reply";
 gotquery = 0;
 motherbox.scrollTop = motherbox
  .scrollHeight;
 textToAudio();
}

function speechtext() {
 if (message.value == "") {
  document.getElementById("mic")
   .innerText = "🎤";
 }
 if (message.value != "") {
  document.getElementById("mic")
   .innerText = ">";
 }
}

function textToAudio() {
 if (turnoffspeaker == false) {
  speak = "";
 }
 let speech =
  new SpeechSynthesisUtterance();
 speech.lang = "en-AU";

 speech.text = speak;
 speech.volume = 1;
 speech.rate = 1;
 speech.pitch = 0.5;

 window.speechSynthesis.speak(
  speech);
}

document.getElementById("setss")
 .style.display = "none";
document.getElementById("turnon")
 .style.display = "none";

function open_settings() {
 if (optshow == 0) {
  document.getElementById("setss")
   .style.display = "";
  document.getElementById("turnon")
   .style.display = "";
  optshow = 1;
  document.getElementById("setting")
   .innerText = "❌";
  setTimeout(offftime, 100);
 } else {
  optshow = 0;
  document.getElementById("setss")
   .style.display = "none";
  document.getElementById("turnon")
   .style.display = "none";
  document.getElementById("setting")
   .innerText = "⚙️";
 }

}

function theme() {
 localStorage.setItem("theme",
  darkornot);
 dark();
}
dark();

function dark() {
 if (localStorage.getItem("theme") ==
  "off") {
  document.body.style =
   "background-color:black";
  document.querySelector(
    ".motherclass").style =
   "background-color:#474b59;";
  document.getElementById("headelm")
   .style =
   "background-color:#474b59;color:white;border-radius:5px";
  document.getElementById("setss")
   .innerText = "Light mode";
  document.querySelector(".sets")
   .style =
   "background-color:#474b59;color:white";
  darkornot = "on";
 } else {
  document.body.style =
   "background-color:none;";

  document.querySelector(
    ".motherclass").style =
   "background-color:lightBlue;border:solid black";

  document.getElementById("setss")
   .innerText = "Dark mode";
  document.getElementById("headelm")
   .style =
   "background-color:white;border: solid black;color:black;border-radius:5px";
  document.querySelector(".sets")
   .style =
   "background-color:yellow;color: black";
  darkornot = "off";
 }
}

function remindon() {
 savedms = "###33";
 remindercontrol = "on";
 receiveIt();
}

var intervalJarvisCheck = true;

function jarviss() {
 if (intervalJarvisCheck == false) {
  intervalJarvisCheck = true;
 } else {
  setTimeout(sendit, 6000);
  setTimeout(jarviss, 6000);
 }

}

function update_alert() {
 alert(
  "audio message feature added.🎤");
}
