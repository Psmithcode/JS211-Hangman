const prompt = require("prompt-sync")({ sigint: true });

const printHint = () => {
  console.log(hint);
};

let words = [
  "pizza",
  "blue",
  "girls",
  "peace",
  "Jonathon",
  "flower",
  "healthy",
  "picture",
  "orange",
  "king",
  "slippery",
  "poundcake",
  "strawberry",
  "nurse",
  "vampire",
  "accessible",
  "nightmare",
  "lopsided",
  "glorious",
  "delicious",
  "frog",
  "camera",
  "sleep",
  "seven",
  "monkey",
  "earth",
  "apple",
  "happy",
  "feeling",
  "summer",
];

const solution = words[Math.floor(Math.random() * words.length)];
let hint = "";
// let lives = 5;

// let guess = prompt("Enter a Letter:");
// console.log(guess);

// const solution = "doggs";

const makeHint = (solution) => {
  for (let i = 0; i < solution.length; i++) {
    hint.push("_");
  }
  return hint;
};

const takeGuess = (guess) => {
  for (let i = 0; i < solution.length; i++) {
    if (solution[i] === guess) {
      hint[i] = guess;
    }
  }
  return hint;
};

const checkforwin = () => {
  if (hint.join("") === solution) {
    console.log("You win!!");
    return true;
  } else {
    // lives--;
    // console.log(`You have ${lives} lives remaining.`);
    return false;
  }
};

// 1) make a solution
//   makeSolution()
// 2) print the hint

makeHint(solution);

// takeGuess();
// 5) check for win or return a new hint
// checkforwin();

const hangman = () => {
  takeGuess(guess);
};

// const getPrompt = () => {
//   printHint();
//   rl.question("enter a letter: ", (guess) => {
//     hangman(guess);
//     getPrompt();
//   });
// };

if (!checkforwin()) {
  for (let i = 0; !checkforwin(); i++) {
    printHint();
    var guess = prompt("Enter a Letter:");
    hangman(guess);
  }
}
