const title = document.getElementById("title");
const btn = document.getElementById("btn");
const input = document.getElementById("input");

// Changing text content
title.textContent = "New Title";

// Changing HTML content
btn.innerHTML = "<strong>Click Me!</strong>";

// Adding event listeners
btn.addEventListener("click", () => {
  title.textContent = input.value;
  input.value = ""; // Clear input
});

// Changing styles
title.style.color = "red";
btn.style.backgroundColor = "yellow";

// Adding a new element
const newElement = document.createElement("p");
newElement.textContent = "This is a new paragraph!";
document.body.appendChild(newElement);

// Querying elements with querySelector
const firstDiv = document.querySelector("div");
firstDiv.style.backgroundColor = "lightblue";
