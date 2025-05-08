# JavaScript Terminology Reference

A comprehensive glossary of key JavaScript terms, concepts, and syntax for quick reference.

---

### Core Concepts

**this** – Refers to the object that is currently executing the function. In regular functions, it refers to the calling object; in arrow functions, it refers to the enclosing lexical context.

**arguments** – An array-like object available inside regular functions containing all passed arguments. Not available in arrow functions.

**parameters** – Named variables listed in the function definition, used to receive values.

**super** – Refers to the parent class and is used to call the parent’s constructor or methods within a subclass.

**variable** – A container for storing values, declared using `var`, `let`, or `const`.

**const** – Declares a block-scoped constant variable that cannot be reassigned.

**let** – Declares a block-scoped variable that can be reassigned.

**var** – Declares a function-scoped variable. Hoisted, but not block-scoped; generally discouraged in modern JS.

**hoisting** – JavaScript behavior where variable and function declarations are moved to the top of their scope before execution.

**data types** – Includes `String`, `Number`, `Boolean`, `Object`, `Array`, `Function`, `null`, `undefined`, and `Symbol`.

**undefined** – A variable that has been declared but not assigned a value.

**null** – A value that represents "no value" or "empty".

**NaN** – "Not a Number", a value indicating an invalid number operation.

**truthy / falsy** – Values that evaluate to `true` or `false` in a boolean context (e.g., `0`, `''`, `null`, `undefined`, `NaN` are falsy).

---

### Functions

**function declaration** – A traditional function defined using the `function` keyword.

**function expression** – A function assigned to a variable, which may or may not have a name.

**arrow function** – A concise syntax using `=>`, does not have its own `this`, `arguments`, or `super`.

**callback** – A function passed into another function to be executed later.

**closure** – A function that remembers its lexical scope even when executed outside that scope.

**IIFE (Immediately Invoked Function Expression)** – A function that runs immediately after being defined.

**rest parameters** – Allows functions to accept an indefinite number of arguments as an array using the `...args` syntax.

**spread operator** – Expands iterable elements or object properties into individual elements using `...`.

**higher-order function** – A function that accepts or returns another function.

**pure function** – A function that has no side effects and returns the same output for the same input.

**side effect** – Any action a function takes that affects outside its own scope (e.g., modifying global state or DOM).

---

### Control Structures

**if / else** – Conditional statements that execute code based on boolean expressions.

**switch** – A conditional statement used to execute code based on the value of an expression.

**for loop** – Repeats a block of code a specific number of times.

**while / do...while loop** – Loops that execute a block of code while a condition is true.

**break** – Exits a loop or switch statement prematurely.

**continue** – Skips the current loop iteration and moves to the next.

**try / catch / finally** – Used to handle exceptions (runtime errors) during code execution.

---

### Objects & Arrays

**object** – A collection of key-value pairs, where keys are strings and values can be any type.

**array** – An ordered list of values, accessed by numeric index.

**property** – A named value inside an object.

**method** – A function that is a property of an object.

**destructuring** – A syntax that unpacks values from arrays or properties from objects into variables.

**spread syntax** – Expands iterable elements or object properties using `...`.

---

### Classes & Prototypes

**class** – A template for creating objects, supporting inheritance and encapsulation.

**constructor** – A special method in a class that gets called when an object is instantiated.

**extends** – Creates a subclass by inheriting properties and methods from a parent class.

**prototype** – An object that other objects inherit properties and methods from.

**inheritance** – Mechanism for one class or object to access properties and methods of another.

---

### Asynchronous JavaScript

**asynchronous** – Code that runs separately from the main execution thread (e.g., timers, network requests).

**callback hell** – Deeply nested callbacks that make code hard to read and maintain.

**promise** – Represents the result of an asynchronous operation that may succeed or fail.

**async / await** – Syntax for writing asynchronous code that looks and behaves like synchronous code.

**then / catch / finally** – Methods used to handle the result, errors, or completion of a promise.

**event loop** – The mechanism that handles asynchronous operations by placing them in a queue and executing them one at a time.

---

### Browser & Environment

**DOM (Document Object Model)** – The tree structure of an HTML document that can be accessed and modified with JavaScript.

**event** – An action (e.g., click, keypress) that can be listened to and handled.

**event listener** – A function that runs in response to an event using `addEventListener`.

**localStorage / sessionStorage** – Browser storage for persisting data across sessions or tabs.

**fetch API** – Used to make network requests, returning a Promise.

---