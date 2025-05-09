// --- Conditional Statements

if (condition) {
  // if true
} else if (otherCondition) {
  // another block
} else {
  // code if no match
}

// Switch Statement
switch (value) {
  case 1:
    // do something
    break;
  case 2:
    // do something
    break;
  case 3:
    //do something
    break;
  default:
  // fallback execution
}

// --- Loops

// For Loop
for (let i = 0; i < 5; i++) {
  console.log(i);
}

// While Loop
let i = 0;
while (i < 5) {
  console.log(i);
  i++;
}

// Do...While Loop
let j = 0;
do {
  console.log(j);
  j++;
} while (j > 5);

// --- Loop Helpers

// For...Of (arrays, string)
for (const char of "Hello") {
  console.log(char);
}

// For..In (object keys)
const obj = { a: 1, b: 2 };
for (const key in obj) {
  console.log(key, obj[key]);
}

// --- Flow Control

// Break
for (let i; i < 10; i++) {
  if (i === 5) break;
  console.log(i);
}

// Continue
for (let i; i < 5; i++) {
  if (i === 2) continue;
  console.log(i);
}

// Error Handling
try {
  throw new Error("Error Message");
} catch (err) {
  console.error("Error Caught: ", err.message);
} finally {
  console.log("Cleanup (Runs Always)");
}
