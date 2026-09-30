const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function calculate(a, operator, b) {
  switch (operator) {
    case "+":
      return a + b;
    case "-":
      return a - b;
    case "*":
      return a * b;
    case "/":
      if (b === 0) throw new Error("Cannot divide by zero");
      return a / b;
    default:
      throw new Error(`Unknown operator: ${operator}`);
  }
}

rl.question("Enter first number: ", (first) => {
  rl.question("Enter operator (+, -, *, /): ", (operator) => {
    rl.question("Enter second number: ", (second) => {
      const a = parseFloat(first);
      const b = parseFloat(second);

      try {
        const result = calculate(a, operator, b);
        console.log(`${a} ${operator} ${b} = ${result}`);
      } catch (err) {
        console.log(`Error: ${err.message}`);
      }

      rl.close();
    });
  });
});
