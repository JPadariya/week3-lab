/**
 * Unit tests for calculator.js
 *
 * Covers: addition, subtraction, multiplication, division,
 *         modulo, power, square root
 */

const {
  addition,
  subtraction,
  multiplication,
  division,
  modulo,
  power,
  squareRoot,
} = require("../calculator");

// --- addition ---
console.assert(addition(2, 3) === 5, "addition(2, 3) should be 5");
console.assert(addition(-1, 1) === 0, "addition(-1, 1) should be 0");
console.assert(addition(0, 0) === 0, "addition(0, 0) should be 0");

// --- subtraction ---
console.assert(subtraction(5, 3) === 2, "subtraction(5, 3) should be 2");
console.assert(subtraction(0, 5) === -5, "subtraction(0, 5) should be -5");

// --- multiplication ---
console.assert(multiplication(3, 4) === 12, "multiplication(3, 4) should be 12");
console.assert(multiplication(-2, 5) === -10, "multiplication(-2, 5) should be -10");
console.assert(multiplication(0, 100) === 0, "multiplication(0, 100) should be 0");

// --- division ---
console.assert(division(10, 2) === 5, "division(10, 2) should be 5");
console.assert(division(7, 2) === 3.5, "division(7, 2) should be 3.5");
try {
  division(5, 0);
  console.assert(false, "division by zero should throw");
} catch (e) {
  console.assert(
    e.message.includes("Division by zero"),
    "division by zero error message should mention 'Division by zero'"
  );
}

// --- modulo ---
console.assert(modulo(10, 3) === 1, "modulo(10, 3) should be 1");
console.assert(modulo(8, 4) === 0, "modulo(8, 4) should be 0");
try {
  modulo(5, 0);
  console.assert(false, "modulo by zero should throw");
} catch (e) {
  console.assert(
    e.message.includes("Modulo by zero"),
    "modulo by zero error message should mention 'Modulo by zero'"
  );
}

// --- power ---
console.assert(power(2, 10) === 1024, "power(2, 10) should be 1024");
console.assert(power(3, 3) === 27, "power(3, 3) should be 27");
console.assert(power(5, 0) === 1, "power(5, 0) should be 1");

// --- square root ---
console.assert(squareRoot(9) === 3, "squareRoot(9) should be 3");
console.assert(squareRoot(0) === 0, "squareRoot(0) should be 0");
console.assert(squareRoot(2) === Math.sqrt(2), "squareRoot(2) should equal Math.sqrt(2)");
try {
  squareRoot(-1);
  console.assert(false, "squareRoot of negative should throw");
} catch (e) {
  console.assert(
    e.message.includes("negative"),
    "squareRoot negative error message should mention 'negative'"
  );
}

console.log("All tests passed!");
