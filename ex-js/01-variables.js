const firstname = "John";
const lastname = "Wick";

let age = 52;
var deprecated = "Jimmy"; // avoid, usage only older versions

// Increment, Decrement
age++;
age--;

// String Operations
console.log(firstname.toUpperCase());   // JOHN
console.log(firstname.length);          // 4 - length of the string

// Template Literals
console.log(`${firstname} ${lastname} is ${age} years old.`);

// String Replacement 
let greeting = "Hello, John!";
greeting = greeting.replace("John", "Johnathan");
console.log(greeting);

// Number Operations
console.log(age.toString());            // "26"
console.log(Number("33"));              // converts string to number
console.log(parseInt("42px"));          // 42 - extracts number (int)
console.log(parseFloat("42.55kg"));     // 42.55 - extracts number (float)

// Math Utilities
console.log(Math.round(4.6));           // 5
console.log(Math.pow(age, 2));          // 2704
console.log(Math.floor(4.9));           // 4
console.log(Math.ceil(4.1));            // 5
console.log(Math.random());             // random float between 0 and 1

// Arithmetic Operations
let num = 10;

num += 5;                               // num = num + 5
num -= 5;                               // num = num - 5
num *= 5;                               // num = num * 5
num /= 2;                               // num = num / 2

let remainder = num % 3;                // num = num % 3 (remainder when dividing by 3)
let power = num ** 2;                   // num = num raised to the power of 2

num++;                                  // num = num + 1
num--;                                  // num = num - 1

// Type Checks
console.log(typeof firstname);          // 'string
console.log(typeof age);                // 'number'
console.log(typeof true);               // 'boolean'
console.log(typeof null);               // 'object' (quirk in JS)
console.log(typeof undefined);          // 'undefined'

console.log(isNaN("hello"));            // true (Not a Number)
console.log(isNaN(123));                // false    

// Boolean Logic & Coercion
console.log(Boolean(0));                // false
console.log(Boolean(""));               // false
console.log(Boolean("text"))            // true

// Constants & Immutability
const PI = 3.14159;
PI = 3; // Assignment on constant variable, not working

// Primitive vs Reference Types
let a = 10; 
let b = a;
b++;
console.log(a, b); // Output: 10, 11 - primitives copied by value

let obj1 = {val: 1}
let obj2 = obj1;
obj2.val = 2;
console.log(obj1.val); // 2 - objects copied by reference
