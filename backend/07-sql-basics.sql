// SQL syntax and basic queries with EXAMPLES

-- --------------------
-- SQL CRUD Operations
-- --------------------

-- =====================
-- CREATE TABLE: posts
-- =====================
-- This statement creates a table called `posts` with four columns:
-- - id: A unique identifier (Primary Key) for each post.
-- - title: A VARCHAR column to store the title of the post.
-- - content: A TEXT column to store the content of the post.
-- - created_at: A TIMESTAMP column to store the date and time the post was created, with a default value of the current timestamp.

CREATE TABLE posts (
  id SERIAL PRIMARY KEY,            -- Auto-incrementing primary key
  title VARCHAR(255) NOT NULL,      -- Title of the post
  content TEXT NOT NULL,            -- Content of the post
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP  -- Timestamp when post is created
);

-- =====================
-- INSERT INTO: posts
-- =====================
-- This SQL statement inserts a new record into the `posts` table.
-- You must provide values for the `title` and `content` columns, and the `created_at` column will automatically be filled with the current timestamp.

INSERT INTO posts (title, content) 
VALUES ('Hello', 'World');  -- Example data: title 'Hello', content 'World'

-- =======================
-- SELECT: Retrieve Data
-- =======================
-- This query retrieves all columns from the `posts` table where the `id` is equal to 1.

SELECT * FROM posts WHERE id = 1;

-- To retrieve all posts in the table (no filter):
SELECT * FROM posts;

-- =======================
-- UPDATE: Modify Data
-- =======================
-- The `UPDATE` statement modifies existing records in the `posts` table.
-- In this example, it changes the title of the post with `id = 1` to 'Updated'.

UPDATE posts 
SET title = 'Updated' 
WHERE id = 1;

-- After running the above query, if you select the data again:
SELECT * FROM posts WHERE id = 1;

-- =======================
-- DELETE: Remove Data
-- =======================
-- This SQL statement deletes the post with `id = 1` from the `posts` table.

DELETE FROM posts WHERE id = 1;

-- After running this, if you select the data again:
SELECT * FROM posts;





-- =======================
-- Adding More Operations
-- =======================

-- Example 1: Insert multiple records at once
INSERT INTO posts (title, content)
VALUES
  ('Post 1', 'Content of post 1'),
  ('Post 2', 'Content of post 2'),
  ('Post 3', 'Content of post 3');

-- Example 2: Retrieve data with ordering
-- Select all posts and order them by creation date (newest first).
SELECT * FROM posts ORDER BY created_at DESC;

-- Example 3: LIMIT the number of results
-- Limit to 2 posts in the result
SELECT * FROM posts LIMIT 2;

-- Example 4: Use LIKE for pattern matching
-- Select all posts where the title contains the word 'Post'
SELECT * FROM posts WHERE title LIKE '%Post%';

-- Example 5: Use JOIN to combine data from two tables
-- Assuming there is another table `comments` related to `posts`
-- We would join the two tables based on post ID.
SELECT posts.title, comments.comment
FROM posts
JOIN comments ON posts.id = comments.post_id;

-- Example 6: Use COUNT to count records
-- Count how many posts exist in the `posts` table
SELECT COUNT(*) FROM posts;

-- Example 7: Add a new column to the table
-- This command adds a `author` column to the `posts` table
ALTER TABLE posts ADD COLUMN author VARCHAR(100);

-- Example 8: Modify a column's data type
-- Change the `content` column to hold longer text (TEXT is good for longer content)
ALTER TABLE posts ALTER COLUMN content TYPE TEXT;

-- =======================
-- DROP TABLE: Delete Table
-- =======================
-- If you no longer need the `posts` table, you can drop it using this command.
-- WARNING: This will permanently delete the table and its data!

DROP TABLE posts;


