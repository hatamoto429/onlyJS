const user = {
  name: "John",
  age: 52,
  city: "NewYork",
  greet() {
    return `Good to se you ${this.name}`;
  },
};

// Access properties
console.log(user.name);
console.log(user["age"]);

// Object destruction
const { name, age } = user;
console.log(name, age);

//  Object.keys() to get all keys
const keys = Object.keys(user);
console.log(keys);

// Object.values() to get all values
const values = Object.values(user);
console.log(values);

// Adding a new property
user.country = "US";
console.log(user);

// Calling a method inside an object
console.log(user.greet());

// Object spread operator
const updatedUser = { ...user, age: 53 };
console.log(updatedUser); 