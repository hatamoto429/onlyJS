async function getJoke() {
  try {
    const res = await fetch("https://api.chucknorris.io/jokes/random");
    if (!res.ok) throw new Error("Failed to fetch joke");
    const data = await res.json();
    console.log("Joke:", data.value);
  } catch (error) {
    console.log("Error:", error);
  }
}

getJoke();

// Using .then() for fetch
fetch("https://api.chucknorris.io/jokes/random")
  .then((res) => res.json())
  .then((data) => console.log("Joke with then:", data.value))
  .catch((error) => console.log("Error with then:", error));
