/**
 * Node.js CLI Calculator
 *
 * Supported operations:
 *   - addition
 *   - subtraction
 *   - multiplication
 *   - division
 *   - modulo
 *   - power
 *   - square root
 */

/**
 * addition: Add two numbers together
 * @param {number} a
 * @param {number} b
 * @returns {number}
 */
function addition(a, b) {
  return a + b;
}

/**
 * subtraction: Subtract b from a
 * @param {number} a
 * @param {number} b
 * @returns {number}
 */
function subtraction(a, b) {
  return a - b;
}

/**
 * multiplication: Multiply two numbers
 * @param {number} a
 * @param {number} b
 * @returns {number}
 */
function multiplication(a, b) {
  return a * b;
}

/**
 * division: Divide a by b (throws on division by zero)
 * @param {number} a
 * @param {number} b
 * @returns {number}
 */
function division(a, b) {
  if (b === 0) {
    throw new Error("Error: Division by zero is not allowed.");
  }
  return a / b;
}

/**
 * modulo: Return the remainder of a divided by b
 * @param {number} a
 * @param {number} b
 * @returns {number}
 */
function modulo(a, b) {
  if (b === 0) {
    throw new Error("Error: Modulo by zero is not allowed.");
  }
  return a % b;
}

/**
 * power: Raise a to the power of b
 * @param {number} a
 * @param {number} b
 * @returns {number}
 */
function power(a, b) {
  return Math.pow(a, b);
}

/**
 * squareRoot: Return the square root of a (throws on negative input)
 * @param {number} a
 * @returns {number}
 */
function squareRoot(a) {
  if (a < 0) {
    throw new Error("Error: Square root of a negative number is not allowed.");
  }
  return Math.sqrt(a);
}

module.exports = { addition, subtraction, multiplication, division, modulo, power, squareRoot };

// CLI entry point
if (require.main === module) {
  const args = process.argv.slice(2);

  if (args.length < 2) {
    console.error("Usage: node calculator.js <operation> <a> [b]");
    console.error("Operations: addition, subtraction, multiplication, division, modulo, power, squareRoot");
    process.exit(1);
  }

  const operation = args[0];
  const a = parseFloat(args[1]);
  const b = args[2] !== undefined ? parseFloat(args[2]) : undefined;

  if (isNaN(a)) {
    console.error(`Invalid number: ${args[1]}`);
    process.exit(1);
  }

  const binaryOps = ["addition", "subtraction", "multiplication", "division", "modulo", "power"];
  if (binaryOps.includes(operation)) {
    if (b === undefined || isNaN(b)) {
      console.error(`Operation '${operation}' requires two numeric arguments.`);
      process.exit(1);
    }
  }

  try {
    let result;
    switch (operation) {
      case "addition":
        result = addition(a, b);
        break;
      case "subtraction":
        result = subtraction(a, b);
        break;
      case "multiplication":
        result = multiplication(a, b);
        break;
      case "division":
        result = division(a, b);
        break;
      case "modulo":
        result = modulo(a, b);
        break;
      case "power":
        result = power(a, b);
        break;
      case "squareRoot":
        result = squareRoot(a);
        break;
      default:
        console.error(`Unknown operation: ${operation}`);
        process.exit(1);
    }
    console.log(`Result: ${result}`);
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
}
