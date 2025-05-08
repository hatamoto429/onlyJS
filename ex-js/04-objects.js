const user = {
  name: "John",
  age: 52,
  city: "New York",
  greet() {
    return `Good to see you ${this.name}`;
  },
};

// Access properties
console.log(user.name);
console.log(user["age"]);

// Get Entries (key-value pairs as array)
const entries = Object.entries(user);
console.log(entries);

// Object destruction
const { name, age } = user;
console.log(name, age);

//  Object.keys() to get all keys
const keys = Object.keys(user);
console.log(keys);

// Object.values() to get all values
const values = Object.values(user);
console.log(values);

// Prevent Changes
const frozenUser = Object.freeze(user);
frozenUser.name = "Tony"; // No Effect
console.log(frozenUser.name); // Still "John"

// Adding a new property
user.country = "US";
console.log(user);

// Prevent Add / Remove but allow modifying
const sealedUser = Object.seal(user);
sealedUser.name = "Jimmy"; // Works
sealedUser.county = "US"; // Does not Work
console.log(sealedUser);

// Check for property
console.log(user.hasOwnProperty("city"));

// Calling a method inside an object
console.log(user.greet());

// Object spread operator
const updatedUser = { ...user, age: 53 };
console.log(updatedUser);

// --- Nested Objects
// Access Nested Objects
const person = {
  name: "Tony",
  address: {
    city: "New York",
    zip: 12345,
  },
};
console.log(person.address.city); // Boston

// Access 