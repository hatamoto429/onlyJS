const numbers = [1, 2, 3, 4, 5, 6, 7];

// --- Transformations

// .map() - double each number
const doubled = numbers.map(num => num * 2);
console.log('Doubled:', doubled); // [2, 4, 6, 8, 10, 12, 14]

// .filter() - get even numbers
const evenNumbers = numbers.filter(num => num % 2 === 0);
console.log('Even Numbers:', evenNumbers); // [2, 4, 6]

// .flatMap() - expand and flatten
const flatMapped = numbers.flatMap(num => [num, num * 2]);
console.log('FlatMapped:', flatMapped); // [1, 2, 2, 4, 3, 6, ...]

// --- Search & Condition Checks

// .find() - get the first number greater than 5
const foundNumber = numbers.find(num => num > 5);
console.log('Found > 5:', foundNumber); // 6

// .some() - check if any number is even
const hasEven = numbers.some(num => num % 2 === 0);
console.log('Has Even:', hasEven); // true

// .every() - check if all numbers are positive
const allPositive = numbers.every(num => num > 0);
console.log('All Positive:', allPositive); // true

// .includes() - check if array contains 3
const containsThree = numbers.includes(3);
console.log('Includes 3:', containsThree); // true

// .indexOf() - get index of number 4
const indexOfFour = numbers.indexOf(4);
console.log('Index of 4:', indexOfFour); // 3

// .lastIndexOf() - works similarly but searches from the end
const duplicateNumbers = [1, 2, 3, 2, 1];
const lastIndex = duplicateNumbers.lastIndexOf(2);
console.log('Last Index of 2:', lastIndex); // 3

// --- Utility

// .concat() - join arrays
const joinedArray = numbers.concat([8, 9]);
console.log('Concatenated:', joinedArray); // [1, 2, ..., 9]

// .slice() - get part of array
const sliced = numbers.slice(2, 5);
console.log('Sliced (2-5):', sliced); // [3, 4, 5]

// .flat() - flatten nested arrays
const nested = [1, [2, 3], [4, [5]]];
console.log('Flat (1 level):', nested.flat()); // [1, 2, 3, 4, [5]]
console.log('Flat (2 levels):', nested.flat(2)); // [1, 2, 3, 4, 5]

// .at() - get item at index, supports negative indexing
console.log('At -1:', numbers.at(-1)); // 7 (last element)

// --- Accumulation

// .reduce() - sum all numbers
const sum = numbers.reduce((total, number) => total + number, 0);
console.log('Sum:', sum); // 28

// --- Iteration

// .forEach() - perform action on each item
console.log('ForEach:');
numbers.forEach(num => {
  console.log(num * 10);
});

// --- Sorting and Reversing

// .sort() - sort ascending
const sortedAsc = [...numbers].sort((a, b) => a - b);
console.log('Sorted Asc:', sortedAsc);

// .reverse() - reverse the array
const reversed = [...numbers].reverse();
console.log('Reversed:', reversed);

// --- Mutation (modifies original)

// .splice() - remove 2 items from index 1
const copy = [...numbers];
copy.splice(1, 2); // remove two elements starting at index 1
console.log('Spliced:', copy);

// .fill() - fill with static value
const filled = new Array(5).fill(0);
console.log('Filled:', filled); // [0, 0, 0, 0, 0]

// --- Array Constructors

// Array.of()
console.log('Array.of():', Array.of(1, 2, 3)); // [1, 2, 3]

// Array.from() - create array from iterable
console.log('Array.from():', Array.from('hello')); // ['h', 'e', 'l', 'l', 'o']
