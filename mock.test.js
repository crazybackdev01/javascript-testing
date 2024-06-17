// Mocking functions and Spies
// const { jest, expect } = require("@jest/globals");

test("Mock function test", () => {
  const mockFn = jest.fn((value) => value + 42);
  expect(mockFn(2)).toBe(44);
});
