// Testing asynchronous Code
const { fetchData, fetchPromise } = require("./index");

// SetTimeouts and SetIntervals
test("Fetching Data", (done) => {
  function callback(data) {
    try {
      expect(data).toBe("Fetching data");
      done();
    } catch (error) {
      done(error);
    }
  }
  fetchData(callback);
});

// Promise based tests
test("Fetching promise", () => {
  return expect(fetchPromise()).resolves.toBe("Fetching promise");
});

test("Fetching promise", () => {
  return expect(fetchPromise()).rejects.toThrow("Rejected");
});

test("Fetching promise", async () => {
  const data = await fetchPromise();
  expect(data).toBe("Fetching promise");
});
