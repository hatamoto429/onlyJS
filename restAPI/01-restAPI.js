// The basic implementation of a rest API was already created in the folder /backend there all necessary files and procedures of the backend architecture can be seen
// Following a quick wrapup of the whole rest API process 

// Example: Todos

// index.js
const express = require('express');
const app = express();
const PORT = 3000;

// Middleware to parse JSON bodies in requests
app.use(express.json());

// In-memory data store for todos
let todos = [];
let idCounter = 1;

// Middleware to log every incoming request method and URL with timestamp
app.use((req, res, next) => {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
  next();
});

// GET /api/todos
// Returns the full list of todos as JSON
app.get('/api/todos', (req, res) => {
  res.json(todos);
});

// POST /api/todos
// Creates a new todo with the 'title' provided in the JSON body
// Responds with the created todo item or an error if title is missing
app.post('/api/todos', (req, res) => {
  const { title } = req.body;
  if (!title) {
    return res.status(400).json({ error: 'Title is required' });
  }

  const newTodo = {
    id: idCounter++,  // Unique incremental ID
    title,
    completed: false  // New todos start as not completed
  };

  todos.push(newTodo);  // Add new todo to the array
  res.status(201).json(newTodo);  // Respond with created todo and HTTP 201 status
});

// PUT /api/todos/:id
// Updates an existing todo by ID with provided fields in the JSON body (title, completed)
// Returns updated todo or 404 if not found
app.put('/api/todos/:id', (req, res) => {
  const id = parseInt(req.params.id);  // Extract ID from URL and convert to number
  const todo = todos.find(t => t.id === id);

  if (!todo) {
    return res.status(404).json({ error: 'Todo not found' });
  }

  // Update fields only if provided
  const { title, completed } = req.body;

  if (title !== undefined) todo.title = title;
  if (completed !== undefined) todo.completed = completed;

  res.json(todo);  // Return the updated todo
});

// DELETE /api/todos/:id
// Deletes the todo with the given ID if it exists
// Returns HTTP 204 No Content on success or 404 if not found
app.delete('/api/todos/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const index = todos.findIndex(t => t.id === id);

  if (index === -1) {
    return res.status(404).json({ error: 'Todo not found' });
  }

  todos.splice(index, 1);  // Remove todo from the array
  res.status(204).send();  // Send empty response with 204 status code
});

// Start the server and listen on the specified port
app.listen(PORT, () => {
  console.log(`REST API running at http://localhost:${PORT}`);
});
