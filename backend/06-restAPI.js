// Make API calls from frontend (React/Vue) to backend

// Fetch posts (React)
useEffect(() => {
  fetch("/api/posts")
    .then(res => res.json())
    .then(setPosts);
}, []);

// Create post
const createPost = async () => {
  await fetch("/api/posts", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ title: "New Post", content: "Hello" })
  });
};
