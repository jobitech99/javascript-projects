const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function scoreToGrade(score) {
  if (score >= 70) return "A";
  if (score >= 60) return "B";
  if (score >= 50) return "C";
  if (score >= 45) return "D";
  if (score >= 40) return "E";
  return "F";
}

function askScore() {
  rl.question('Enter score 0-100 (or "done" to stop): ', (input) => {
    if (input.trim().toLowerCase() === "done") {
      rl.close();
      return;
    }

    const score = Number(input);

    if (Number.isNaN(score) || score < 0 || score > 100) {
      console.log("Invalid score. Enter a number between 0 and 100.");
    } else {
      console.log(`Score: ${score} -> Grade: ${scoreToGrade(score)}`);
    }

    askScore();
  });
}

askScore();
