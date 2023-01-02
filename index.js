var readlineSync = require("readline-sync");
var chalk = require("chalk");

var right = chalk.bold.green;
var orange = chalk.keyword('orange');
var blue = chalk.blue;
var wrong = chalk.bold.red;

console.log("Welcome to the QUIZ.");
var userName = readlineSync.question(blue("Enter Your Name: "));
console.log(blue("Hello! " + userName + " Let's play INDIAN QUIZ..."));
console.log("*******************************************");
console.log("\n");

console.log("RULES & INSTRUCTIONS ==>");
console.log(orange("1. All questions are compulsary. "));
console.log(orange("2. You will be awarded 2 points for each correct answer. "));
console.log(orange("3. 1 point will be deducted if answer is wrong"));
console.log(orange("4. For answering the questions you have to press serial no/index value of the option. "));
console.log("*******************************************");
console.log("\n");


var questionList = [
  {
    options: ['1,010,193,422 Billion', '9,10,193,422 Billion', '1,210,193,422 Billion', '1,910,193,422 Billion'],
    question: "Q.1. India's population, as on 1 March 2011? ",
    answer: '1,210,193,422 Billion'
  },
  {
    options: ['Delhi', 'Mumbai', 'Chennai', 'Pune'],
    question: "Q.2. India's largest city by population? ",
    answer: 'Mumbai'
  },
  {
    options: ['29', '27', '28', '30'],
    question: 'Q.3. Number of states in India? ',
    answer: '28'
  },
  {
    options: ['Lion', 'Tiger', 'Cheetah', 'Leopard'],
    question: 'Q.4. National Animal? ',
    answer: 'Tiger'
  },
  {
    options: ['Rose', 'Hibiscus', 'Lotus', 'Sun Flower'],
    question: 'Q.5. National Flower? ',
    answer: 'Lotus'
  }
];

var score = 0;
function quiz(options, question, answer) {
  var userAnswer = readlineSync.keyInSelect(options, question);

  if (options[userAnswer] === answer) {
    console.log(right("Right!"));
    score += 2;
    console.log(right("Current score is: ", score));
  } else {
    console.log(wrong("Wrong!!"));
    score -= 1;
    console.log("The correct answer is ", answer);
    console.log(wrong("Current score is: ", score));
  }

  if (score < 0) {
    score = 0;
  }

}



for (var i = 0; i < questionList.length; i++) {
  quiz(questionList[i].options, questionList[i].question, questionList[i].answer);
  console.log("<---------------------------------------->");
  console.log("******************************************");
}

console.log(orange("Congratulations!! " + userName + " your total score is: ", score));