// Basic Function
function greet(name) {
  return `Hello, ${name}!`;
}

// Arrow function
const add = (a, b) => a + b;

// Default Parameters
const greetWithDefault = (name='Greet') => `Hello, ${name}`;

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
    const data = [1, 2, 3, 4, 5]
    callback(data);
}
fetchData(data => console.log(data.map(n => n *2))); // [2, 4, 6, 8, 10]