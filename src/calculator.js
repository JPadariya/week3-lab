/**
 * Node.js CLI Calculator
 *
 * Supports the following basic arithmetic operations:
 *  - Addition (+)
 *  - Subtraction (-)
 *  - Multiplication (*)
 *  - Division (/)
 *
 * Usage:
 *   node src/calculator.js <num1> <operator> <num2>
 *
 * Example:
 *   node src/calculator.js 10 + 5   => 15
 *   node src/calculator.js 10 - 3   => 7
 *   node src/calculator.js 4 * 6    => 24
 *   node src/calculator.js 20 / 4   => 5
 */

/**
 * Adds two numbers together.
 * @param {number} a - The first operand.
 * @param {number} b - The second operand.
 * @returns {number} The sum of a and b.
 */
function add(a, b) {
  return a + b;
}

/**
 * Subtracts the second number from the first.
 * @param {number} a - The first operand.
 * @param {number} b - The second operand.
 * @returns {number} The difference of a minus b.
 */
function subtract(a, b) {
  return a - b;
}

/**
 * Multiplies two numbers together.
 * @param {number} a - The first operand.
 * @param {number} b - The second operand.
 * @returns {number} The product of a and b.
 */
function multiply(a, b) {
  return a * b;
}

/**
 * Divides the first number by the second.
 * Throws an error if the divisor is zero.
 * @param {number} a - The dividend.
 * @param {number} b - The divisor.
 * @returns {number} The quotient of a divided by b.
 */
function divide(a, b) {
  if (b === 0) {
    throw new Error("Division by zero is not allowed.");
  }
  return a / b;
}

/**
 * Performs a calculation based on the operator string.
 * @param {number} a - The first operand.
 * @param {string} operator - One of '+', '-', '*', '/'.
 * @param {number} b - The second operand.
 * @returns {number} The result of the calculation.
 */
function calculate(a, operator, b) {
  switch (operator) {
    case "+":
      return add(a, b);
    case "-":
      return subtract(a, b);
    case "*":
      return multiply(a, b);
    case "/":
      return divide(a, b);
    default:
      throw new Error(`Unknown operator: "${operator}". Use +, -, *, or /`);
  }
}

module.exports = { add, subtract, multiply, divide, calculate };

// CLI entry point
if (require.main === module) {
  const args = process.argv.slice(2);

  if (args.length !== 3) {
    console.error("Usage: node src/calculator.js <num1> <operator> <num2>");
    console.error("Supported operators: +, -, *, /");
    process.exit(1);
  }

  const a = parseFloat(args[0]);
  const operator = args[1];
  const b = parseFloat(args[2]);

  if (isNaN(a) || isNaN(b)) {
    console.error("Error: Both operands must be valid numbers.");
    process.exit(1);
  }

  try {
    const result = calculate(a, operator, b);
    console.log(`${a} ${operator} ${b} = ${result}`);
  } catch (err) {
    console.error(`Error: ${err.message}`);
    process.exit(1);
  }
}
