// calculator.js - Node.js CLI Calculator

function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  if (b === 0) {
    throw new Error("Division by zero is not allowed");
  }
  return a / b;
}

function calculate(a, operator, b) {
  const numA = parseFloat(a);
  const numB = parseFloat(b);

  if (isNaN(numA) || isNaN(numB)) {
    throw new Error("Invalid input: both operands must be numbers");
  }

  switch (operator) {
    case "+":
      return add(numA, numB);
    case "-":
      return subtract(numA, numB);
    case "*":
      return multiply(numA, numB);
    case "/":
      return divide(numA, numB);
    default:
      throw new Error(`Unknown operator: ${operator}`);
  }
}

const args = process.argv.slice(2);

if (args.length === 3) {
  try {
    const result = calculate(args[0], args[1], args[2]);
    console.log(`${args[0]} ${args[1]} ${args[2]} = ${result}`);
  } catch (err) {
    console.error(`Error: ${err.message}`);
    process.exit(1);
  }
} else if (args.length > 0) {
  console.error("Usage: node calculator.js <number> <operator> <number>");
  console.error("Operators: + - * /");
  console.error("Example: node calculator.js 5 + 3");
  process.exit(1);
}

module.exports = { add, subtract, multiply, divide, calculate };
