import { add } from '../utils/stringCalculator';

// Test cases for empty string
test('should return 0 for an empty string', () => {
  expect(add("")).toBe(0);
});

// Test case for a single number
test('should return the number itself when a single number is provided', () => {
  expect(add("1")).toBe(1);
});

// Test case for two numbers
test('should return the sum of two numbers', () => {
  expect(add("1,2")).toBe(3);
});

// Test case for multiple numbers
test('should return the sum of multiple numbers', () => {
  expect(add("1,2,3")).toBe(6);
});

// Test case for handling newlines as delimiters
test('should handle newlines as delimiters', () => {
  expect(add("1\n2,3")).toBe(6);
});

// Test case for custom delimiters
test('should handle custom delimiters', () => {
  expect(add("//;\n1;2")).toBe(3);
});

// Test case for throwing error on negative numbers
test('should throw an error for negative numbers', () => {
  expect(() => add("1,-2,3")).toThrow("Negative numbers not allowed: -2");
});

// Test case for throwing error with multiple negative numbers
test('should throw an error listing all negative numbers', () => {
  expect(() => add("-1,-2,3")).toThrow("Negative numbers not allowed: -1, -2");
});
