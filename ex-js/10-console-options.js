
// Basic Logging
console.log("This is a log message"); // Output: This is a log message

// Warnings & Errors
console.warn("This is a warning!"); // Output: This is a warning! (yellow icon in console)
console.error("This is an error!"); // Output: This is an error! (red icon in console)

// Info
console.info("This is some info"); // Output: This is some info (blue icon in console)

// Assertions
console.assert(2 + 2 === 5, "Math is broken!"); // Output: Math is broken! (only if false)

// Clear Console
console.clear(); // Output: Clears the console

// Grouping Logs
console.group("User Info");
console.log("Name: John");
console.log("Age: 30");
console.groupEnd(); // Output: User Info group (collapsible)

// Collapsed Group
console.groupCollapsed("Collapsed User Info");
console.log("Name: John");
console.log("Age: 30");
console.groupEnd(); // Output: Collapsed group (can expand)

// Counting
console.count("Login Attempt"); // Output: Login Attempt: 1
console.count("Login Attempt"); // Output: Login Attempt: 2
console.countReset("Login Attempt"); // Output: Resets the counter for "Login Attempt"

// Timing
console.time("Timer");
for (let i = 0; i < 1000000; i++) {}
console.timeEnd("Timer"); // Output: Timer: <time>ms

// Trace
function a() {
  b();
}
function b() {
  console.trace("Trace this call");
}
a(); // Output: Trace this call (shows stack trace in the console)

// Table View
const users = [
  { name: "Alice", age: 30 },
  { name: "Bob", age: 25 },
];
console.table(users); // Output: Displays an interactive table of users

// Dir
const obj = { name: "John", age: 30 };
console.dir(obj); // Output: Shows the object's properties and methods in a detailed, collapsible format

// Console with Styles
console.log("%c Styled log", "color: blue; font-weight: bold;"); // Output: Styled log (styled with blue and bold)

// Example: Using Assertions
console.assert(3 + 3 === 6, "This will not show up"); // No output since the assertion is true
console.assert(3 + 3 === 7, "This is an assertion failure!"); // Output: This is an assertion failure!

// Example: Using Count Reset
console.count("Items in cart");
console.count("Items in cart");
console.countReset("Items in cart"); // Resets the counter
console.count("Items in cart"); // Output: Items in cart: 1 (after reset)

// Example: Timer with TimeEnd
console.time("Process Time");
setTimeout(() => {
  console.timeEnd("Process Time"); // Output: Process Time: <time>ms
}, 1000);

// Combining console methods for debugging
console.group("Debugging Session");
console.log("Initializing app...");
console.time("App Load Time");
setTimeout(() => {
  console.timeEnd("App Load Time");
  console.log("App Loaded Successfully");
  console.groupEnd();
}, 2000);