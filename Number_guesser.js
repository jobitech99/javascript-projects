const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const target = Math.floor(Math.random() * 100) + 1;
const maxAttempts = 7;
let attempts = 0;

function askGuess() {
  rl.question(
    `Guess a number between 1 and 100 (attempt ${attempts + 1}/${maxAttempts}): `,
    (input) => {
      const guess = Number(input);
      attempts++;

      if (Number.isNaN(guess)) {
        console.log("That is not a valid number.");
        return askGuess();
      }

      if (guess === target) {
        console.log(
          `Correct! The number was ${target}. You used ${attempts} attempt(s).`,
        );
        rl.close();
        return;
      }

      if (attempts >= maxAttempts) {
        console.log(`Out of attempts. The number was ${target}.`);
        rl.close();
        return;
      }

      console.log(guess < target ? "Too low." : "Too high.");
      askGuess();
    },
  );
}

askGuess();
