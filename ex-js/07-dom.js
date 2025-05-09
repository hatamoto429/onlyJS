//  Element Selection

const title = document.getElementById("title");
const btn = document.getElementById("btn");
const input = document.getElementById("input");

const firstDiv = document.querySelector("div"); // First matching element
const allButtons = document.querySelectorAll("button"); // All matching elements
console.log(allButtons);

// Content Manipulation
title.textContent = "New Title";
btn.innerHTML = "<strong>Click Me!</strong>";

// Style Manipulation
title.style.color = "red";
btn.style.backgroundColor = "yellow";

// Event Handling
btn.addEventListener("click", (e) => {
  e.preventDefault();
  title.textContent = input.value;
  input.value = "";
});

// Classes
title.classList.add("highlight");
title.classList.remove("highlight");
title.classList.toggle("highlight"); // adds if missing, removes if present
console.log(title.classList.contains("highlight")); // true / false

// Attributes
input.setAttribute("placeholder", "Enter something...");
console.log(input.getAttribute("type"));
input.removeAttribute("disabled");

// Creating and Adding Elements
const newElement = document.createElement("p");
newElement.textContent = "This is a new paragraph!";
document.body.appendChild(newElement);

// Removing Elements
// Remove Element after 5 seconds
setTimeout(() => {
  newElement.remove();
}, 5000);

// Dom Traversal
const container = document.getElementById("container");
console.log(container.parentNode);
console.log(container.children);
console.log(container.firstElementChild);
console.log(container.nextElementSibling);

// Changing styles
title.style.color = "red";
btn.style.backgroundColor = "yellow";

// Changing Content
const newDescription = document.querySelector(".description");
newDescription.textContent = "New Description";
console.log(newDescription.textContent);

// Form Interaction
const form = document.querySelector("form");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log("Submitted:", input.value);
});
