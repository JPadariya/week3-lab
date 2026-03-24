/**
 * Comprehensive unit tests for the Node.js CLI Calculator.
 * Tests cover addition, subtraction, multiplication, division,
 * and edge cases such as division by zero.
 */

const { add, subtract, multiply, divide, calculate } = require("../calculator");

// ── Addition ─────────────────────────────────────────────────────────────────

describe("add()", () => {
  test("adds two positive numbers", () => {
    expect(add(2, 3)).toBe(5);
  });

  test("adds a positive and a negative number", () => {
    expect(add(10, -4)).toBe(6);
  });

  test("adds two negative numbers", () => {
    expect(add(-5, -7)).toBe(-12);
  });

  test("adds zero to a number", () => {
    expect(add(9, 0)).toBe(9);
  });

  test("adds two decimal numbers", () => {
    expect(add(1.1, 2.2)).toBeCloseTo(3.3);
  });
});

// ── Subtraction ───────────────────────────────────────────────────────────────

describe("subtract()", () => {
  test("subtracts two positive numbers", () => {
    expect(subtract(10, 4)).toBe(6);
  });

  test("subtracts a larger number from a smaller one (negative result)", () => {
    expect(subtract(3, 8)).toBe(-5);
  });

  test("subtracts zero from a number", () => {
    expect(subtract(7, 0)).toBe(7);
  });

  test("subtracts a negative number", () => {
    expect(subtract(5, -3)).toBe(8);
  });

  test("subtracts two decimal numbers", () => {
    expect(subtract(5.5, 2.2)).toBeCloseTo(3.3);
  });
});

// ── Multiplication ────────────────────────────────────────────────────────────

describe("multiply()", () => {
  test("multiplies two positive numbers", () => {
    expect(multiply(3, 4)).toBe(12);
  });

  test("multiplies a positive and a negative number", () => {
    expect(multiply(6, -2)).toBe(-12);
  });

  test("multiplies two negative numbers", () => {
    expect(multiply(-3, -4)).toBe(12);
  });

  test("multiplies a number by zero", () => {
    expect(multiply(99, 0)).toBe(0);
  });

  test("multiplies two decimal numbers", () => {
    expect(multiply(2.5, 4)).toBe(10);
  });
});

// ── Division ──────────────────────────────────────────────────────────────────

describe("divide()", () => {
  test("divides two positive numbers evenly", () => {
    expect(divide(20, 4)).toBe(5);
  });

  test("divides and returns a decimal result", () => {
    expect(divide(7, 2)).toBe(3.5);
  });

  test("divides a negative number by a positive number", () => {
    expect(divide(-12, 3)).toBe(-4);
  });

  test("divides two negative numbers", () => {
    expect(divide(-10, -2)).toBe(5);
  });

  test("divides zero by a number", () => {
    expect(divide(0, 5)).toBe(0);
  });

  test("throws an error when dividing by zero", () => {
    expect(() => divide(10, 0)).toThrow("Division by zero is not allowed.");
  });
});

// ── calculate() ───────────────────────────────────────────────────────────────

describe("calculate()", () => {
  test("performs addition via '+'", () => {
    expect(calculate(8, "+", 7)).toBe(15);
  });

  test("performs subtraction via '-'", () => {
    expect(calculate(10, "-", 3)).toBe(7);
  });

  test("performs multiplication via '*'", () => {
    expect(calculate(4, "*", 6)).toBe(24);
  });

  test("performs division via '/'", () => {
    expect(calculate(20, "/", 4)).toBe(5);
  });

  test("throws an error for an unknown operator", () => {
    expect(() => calculate(5, "%", 2)).toThrow(
      'Unknown operator: "%". Use +, -, *, or /'
    );
  });

  test("throws an error for division by zero via calculate()", () => {
    expect(() => calculate(10, "/", 0)).toThrow(
      "Division by zero is not allowed."
    );
  });
});
