const numbers = [1, 2, 3, 4, 5, 6, 7];

// .map() to double each number
const doubled = numbers.map(num => num * 2);
console.log(doubled); // [2, 4, 6, 8, 10, 12, 14, 16, 18, 20]

// .filter() to get even numbers
const evenNumbers = numbers.filter(num => num % 2 === 0);
console.log(evenNumbers); // [2, 4, 6, 8, 10]

// .reduce() to sum all numbers
const sum = numbers.reduce((total, number) => total + number, 0);
console.log(sum); // 55

// .find() to get the first number 
const foundNumber = numbers.find(num => num > 5);
console.log(foundNumber);

// .some() checks even numbers 
const evenNumber = numbers.even(num => num % 2 === 0);
console.log(evenNumber);

// .every() checks all positives
const positiveNumbers = numbers.every(num => num > 0);
console.log(positiveNumbers);

// .concat() to join arrays
const joinedArray = numbers.concat([1, 2, 3]);
console.log(joinedArray);