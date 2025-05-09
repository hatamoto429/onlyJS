function greet(name) {
  return `Hello, ${name}!`;
}

// Arrow function
const add = (a, b) => a + b;
/* Default function
function add(a, b) {
  return a + b;
}
*/

// ! Arrow function do not have their own this, arguments or super


// Default Parameters
const greetWithDefault = (name = "Greet") => `Hello, ${name}`;

// Higher-order functions (functions that accept other functions)
const double = (num) => num * 2;
const numbers = [1, 2, 3, 4, 5];
const doubleNumbers = numbers.map(double);
console.log(doubleNumbers);

// Function returning another function (closure)
const multiplier = (factor) => (num) => num * factor;
const multiplyBy3 = multiplier(3);
console.log(multiplyBy3(5));

// Callback Example
function fetchData(callback) {
  const data = [1, 2, 3, 4, 5];
  callback(data);
}
fetchData((data) => console.log(data.map((n) => n * 2))); // [2, 4, 6, 8, 10]

// Anonymous Functions
const squared = numbers.map(function (n) {
  return n * n;
});
console.log(squared);

// Spread Operator
function sumAll(...nums) {
  return nums.reduce((acc, num) => acc + num, 0);
}
console.log(sumAll(1, 2, 3, 4, 5));

// Immediately Invoked Function Expression
(function () {
  console.log("IIFE ran");
})();

// Function Hoisting
function hoisted() {
  return "Hosted Function";
}

const notHoisted = function () {
  return "Not Hoisted Function;";
};
// Function Expression => Not Hoisted

// Arrow Function Nuances
const person = {
  name: "John",
  sayHi: function () {
    console.log(`Hi, I'm ${this.name}`);
  },
  sayHiArrow: () => {
    console.log(`Hi, I'm ${this.name}`);
  },
  // ! Arrow function do not have their own this => person.sayHiArrow() => Output: 'undefined'
};
person.sayHi();
person.sayHiArrow();

