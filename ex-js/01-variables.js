// Variable Types
const firstname = "John";
const lastname = "Wick";
let age = 52;

// Increment, Decrement
age++;
age--;

// String Operations
console.log(firstname.toUpperCase());   // JOHN
console.log(firstname.length);          // 4 - length of the string

// Number Operations
console.log(age.toString());            // "26"
console.log(Math.pow(age, 2));          // 2704 - age squared
console.log(Number("33"));              // converts string to number

// Template Literals
console.log(`${firstname} ${lastname} is ${age} years old.`);

// String Replacement 
let greeting = "Hello, John!";
greeting = greeting.replace("John", "Johnathan");
console.log(greeting);

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
