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
title.classList.remove("highlight")


// Changing styles
title.style.color = "red";
btn.style.backgroundColor = "yellow";

// Adding a new element
const newElement = document.createElement("p");
newElement.textContent = "This is a new paragraph!";
document.body.appendChild(newElement);
