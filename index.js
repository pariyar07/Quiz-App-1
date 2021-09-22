var readlineSync = require("readline-sync");

var userName = readlineSync.question("What's your name? ")
console.log("Great name! Let's play a quiz, " + userName + ".");

score = 0;

function quiz(question, answer){
  userAns = readlineSync.question(question);
  if(userAns === answer){
    console.log("Nailed It!")
    score = score + 1;
    console.log("Your score is " + score);
  }else{
    console.log("That's wrong!");
    score = score;
    console.log("Your score is " + score);
  }
  console.log("---------------")
}

var questions = [{
  question: "Whats my name?(Satyam/Adarsh) ", 
  answer: "Satyam"
},{
  question: "Whats my hair color?(Brown/Black) ", 
  answer: "Black"
},{
  question: "Who is my favourite footballer?(Pogba/Rooney) ", 
  answer: "Pogba"
},{
  question: "What do I prefer?(Tea/Coffee) ", 
  answer: "Coffee"
},{
  question: "What do I prefer?(Burger/Pizza) ", 
  answer: "Pizza"
}
];

for (var i = 0; i < questions.length; i++){
  var currentQuestion = questions[i];
  quiz(currentQuestion.question, currentQuestion.answer)
}

console.log("Your high-score is: " + score);
console.log("************************")