// --- CRUD: R(ead)- HTTP Method: Get
// --- Get Request
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

//  Custom Headers
async function getWithHeader() {
  try {
    const res = await fetch("https://api.chucknorris.io/jokes/random", {
      headers: {
        Accept: "application/json",
      },
    });

    const data = await res.json();
    console.log("Response with header: ", data.value);
  } catch (error) {
    console.error("Header fetch error:", error.message);
  }
}

getWithHeader();

// --- CRUD: C(reate) - HTTP Method: Post
// --- Post Request
async function createPost() {
  const postData = {
    title: "Hello API",
    body: "This is a sample post",
    userId: 1,
  };

  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(postData),
    });

    const result = await response.json();
    console.log("Created Post: ", result);
  } catch (error) {
    console.log("Post error: ", error.message);
  }
}

createPost();

// --- CRUD: U(pdate) - HTTP Method: Put
// --- Put Request - Full Update
async function updatePost() {
  try {
    const updatedData = {
      id: 1,
      title: "Updated Title",
      body: "Updated content.",
      userId: 1,
    };

    const res = await fetch("https://jsonplaceholder.typicode.com/posts/1", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedData),
    });

    const result = await res.json();
    console.log("PUT response: ", result);
  } catch (err) {
    console.error("PUT error: ", err.message);
  }
}

updatePost();

// --- Patch Request - Partial Update
async function patchPost() {
  try {
    const patchData = {
      title: "Patched Title Only",
    };

    const res = await fetch("https://jsonplaceholder.typicode.com/posts/1", {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(patchData),
    });

    const result = await res.json();
    console.log("PATCH response: ", result);
  } catch (err) {
    console.error("PATCH error: ", err.message);
  }
}

patchPost();

// --- CRUD: D(elete) - HTTP Method: Delete
// --- Delete Request
async function deletePost() {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts/1", {
      method: "DELETE",
    });

    if (res.ok) {
      console.log("Post deleted successfully.");
    } else {
      throw new Error("Delete operation failed.");
    }
  } catch (err) {
    console.log("DELETE error: ", err.message);
  }
}

deletePost();

// Using .then() for fetch
// Manual Error Handling and Chaining Promise Methods
fetch("https://api.chucknorris.io/jokes/random")
  .then((res) => {
    if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`); // Manually catching failed HTTP responses
    return res.json();
  }) // Promise Chaining I - Handles Response
  .then((data) => {
    console.log("Joke (.then): ", data.value);
  }) // Promise Chaining II - Data Process
  .catch((error) => {
    console.error("Fetch error (.then): ", error.message);
  }); // Error Catching

  
// ---
// -> fetch Transformation into reusable Utility Function
function fetchJson(url) {
  return fetch(url)
    .then(res => {
      if (!res.ok) throw new Error('Network error');
      return res.json();
    });
}

//  simplifies logic into 
fetchJson("https://api.chucknorris.io/jokes/random")
  .then(data => console.log("Joke:", data.value))
  .catch(err => console.error("Error:", err.message)); 