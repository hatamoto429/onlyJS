// --- Example
// --- Synchronous Example
console.log("1. Start");
function syncFunction() {
  console.log("2. Inside synchronous function");
}
syncFunction();
console.log("3. End");

// Output:
// 1. Start
// 2. Inside synchronous function
// 3. End

// --- Asynchronous Example (with setTimeout)
console.log("1. Start");
setTimeout(() => {
  console.log("2. Inside asynchronous function");
}, 1000); // runs after 1 second
console.log("3. End");

// Output:
// 1. Start
// 3. End
// 2. Inside asynchronous function

// --- --- --- --- ---

// Async Function
async function asyncFunction() {
  return [1, 2, 3];
}
asyncFunction().then((data) => console.log(data));

// Async - Await Keyword
// Use async when you want to use await, and await can only be used with functions that return promises
async function fetchData() {
  const res = await fetch("https://api.example.com"); // First Promise - fetch
  const data = await res.json(); // Second Promise - res.json();
  console.log(data);
}
fetchData();

// Custom Promise Returning Functions
function wait(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
wait(1000).then(() => console.log("Waited 1 second"));

// Error handling with try / catch
async function fetchWithErrorHandling() {
  try {
    const response = await fetch("https://invalid.url");
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error("Caught error: ", error.message);
  }
}
fetchWithErrorHandling();

// Combining multiple async calls with await
async function fetchMultiple() {
  const res1 = await fetch("https://api.chucknorris.io/jokes/random");
  const joke1 = await res1.json();

  const res2 = await fetch("https://api.chucknorris.io/jokes/random");
  const joke2 = await res2.json();

  console.log("Joke 1:", joke1.value);
  console.log("Joke 2:", joke2.value);
}
fetchMultiple();

// Promise.all to run parallel tasks
async function fetchInParallel() {
  const urls = [
    "https://api.chucknorris.io/jokes/random",
    "https://api.chucknorris.io/jokes/random",
  ];

  const responses = await Promise.all(urls.map(url => fetch(url)));
  const jokes = await Promise.all(responses.map(res => res.json()));

  jokes.forEach((joke, i) => console.log(`Joke ${i + 1}:`, joke.value));
}
fetchInParallel();


// Mixing async with .then()
function mixedApproach() {
  fetch("https://api.chucknorris.io/jokes/random")
    .then((res) => {
      if (!res.ok) throw new Error("HTTP error");
      return res.json();
    })
    .then((data) => console.log("Mixed style joke:", data.value))
    .catch((err) => console.error("Mixed style error:", err.message));
}
mixedApproach();

// Using setTimeout with Promises
function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function delayedLog() {
  console.log("Waiting...");
  await delay(2000);
  console.log("2 seconds later");
}
delayedLog();

// Async Constructor Limitation (Not allowed)
class Example {
  constructor() {
    // async/await not allowed here directly
    // You can call an async init method instead
    this.init();
  }

  async init() {
    const res = await fetch("https://api.chucknorris.io/jokes/random");
    const data = await res.json();
    console.log("From class:", data.value);
  }
}
new Example();

// Promise.race - Resolves as soon as one promise resolves
async function raceExample() {
  const fast = new Promise(resolve => setTimeout(() => resolve("Fast"), 500));
  const slow = new Promise(resolve => setTimeout(() => resolve("Slow"), 2000));

  const result = await Promise.race([fast, slow]);
  console.log("Race result:", result); // "Fast"
}
raceExample();