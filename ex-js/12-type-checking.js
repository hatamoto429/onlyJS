
// 1. typeof — Check primitive types

console.log(typeof 123);          // "number"
console.log(typeof 'hello');      // "string"
console.log(typeof true);         // "boolean"
console.log(typeof undefined);    // "undefined"
console.log(typeof null);         // "object" ← historical bug
console.log(typeof {});           // "object"
console.log(typeof []);           // "object"
console.log(typeof function(){}); // "function"


// 2. Array.isArray() — Check if it's an array

console.log(Array.isArray([]));         // true
console.log(Array.isArray({}));         // false
console.log(Array.isArray('string'));   // false


// 3. instanceof — Check constructor relationships

console.log([] instanceof Array);              // true
console.log({} instanceof Object);             // true
console.log(new Date() instanceof Date);       // true
console.log('hello' instanceof String);        // false
console.log(new String('hello') instanceof String); // true


// 4. isNaN() vs Number.isNaN()

console.log(isNaN('hello'));            // true  (not reliable — coerces)
console.log(Number.isNaN('hello'));     // false
console.log(Number.isNaN(NaN));         // true

// NOTE: isNaN is a global function, not a method like `thing.isNaN`


// 5. == vs === — Loose vs Strict Equality

console.log('5' == 5);   // true  (type coercion)
console.log('5' === 5);  // false (strict check)

// Always prefer === for reliable type-safe checks


// 6. Object.prototype.toString.call() — Advanced accurate type

console.log(Object.prototype.toString.call([]));         // "[object Array]"
console.log(Object.prototype.toString.call(null));       // "[object Null]"
console.log(Object.prototype.toString.call(undefined));  // "[object Undefined]"
console.log(Object.prototype.toString.call(new Date())); // "[object Date]"

// Helpful when typeof returns "object" for many things


// 7. Example Type Guard

function process(value) {
  if (typeof value === 'string') {
    console.log("It's a string of length", value.length);
  } else if (Array.isArray(value)) {
    console.log("It's an array with", value.length, "items");
  } else if (typeof value === 'number') {
    console.log("It's a number:", value);
  } else {
    console.log("Unknown type:", typeof value);
  }
}

process('hello');        // It's a string
process([1, 2, 3]);      // It's an array
process(42);             // It's a number
process({});             // Unknown type


// SUMMARY

// typeof               → Check primitives (string, number, etc.)
// Array.isArray()      → Reliable array check
// instanceof           → Object type check (custom/class-based)
// isNaN / Number.isNaN → NaN detection
// ===                  → Strict comparison
// Object.prototype.toString.call() → Accurate object type