// Unit Testing with JEST
function sum(a, b) {
  return a + b;
}

function validateInput(input) {
  if (typeof input !== "string") {
    throw new Error("Invalid input");
  }
}

function fetchData(callback) {
  setTimeout(() => {
    callback("Fetching data");
  }, 1000);
}

function fetchPromise() {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve("Fetching promise"), 1000);
  });
}

module.exports = { sum, validateInput, fetchData, fetchPromise };
