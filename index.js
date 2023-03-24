
var readlineSync = require("readline-sync");

var score = 0;

function welcome() {
  var userName = readlineSync.question("What is your name: ");
  console.log("Welcome " + userName + " to Quiz on South Films");
  console.log();
  console.log("Please keep your spellings right!!!!!!");
  console.log();
}

function play(quest, answer) {
  var userAnswer = readlineSync.question(quest);
  if (userAnswer.toUpperCase() === answer.toUpperCase()) {
    console.log("You are right!");
    score = score + 1;
  }
  else {
    console.log("Sorry, You are wrong!")
  }
  console.log();
}

var questions = [
  {
    question: "What is the name of the film in which the hero loves pigeon? ",
    answer: "Maari"
  },
  {
    question: "Who is the director of KANTARA film? ",
    answer: "Rishabh Shetty"
  },
  {
    question: "Who did the role of Bhallaladeva in Baahubali film? ",
    answer: "Rana Daggubati"
  },
  {
    question: "A cultural based film in which the lead actor is deaf? ",
    answer: "Rangasthalam"
  },
  {
    question: "A film in which the hero launches his own Airline Service Company? ",
    answer: "Soorarai Pottru"
  }
];

function start() {
  for (var i = 0; i < questions.length; i++) {
    var que = questions[i];
    play(que.question, que.answer);
  }
}

function points() {
  console.log("Yay! Your Score is: " + score);
}

welcome();
start();
points();