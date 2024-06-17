// import test from "node:test";
const { sum, validateInput } = require("./index.js");

test("add 2 + 3 to 5", () => {
  expect(sum(2, 3)).toBe(5);
});

test("Object assignment", () => {
  const data = { one: 1 };
  // data.two = 2; passed
  data["two"] = 2; // passed
  expect(data).toEqual({ one: 1, two: 2 }); // Matcher is toEqual
});

test(" testing to falsy", () => {
  const n = 0; // undefined, 0, -0, null, empty string, false
  expect(n).toBeFalsy();
});

test(" testing to falsy", () => {
  const n = 1;
  expect(n).toBeTruthy();
});

// test("throw an invalid Error", () => {
//   expect(() => {
//     validateInput("2");
//   }).toThrow();
// }); // not throw an error, Not pass test

test("throw an invalid Error", () => {
  expect(() => {
    validateInput(2);
  }).toThrow();
}); //throw an Error, pass test
