# Project Flow Summary

This document explains the **file structure** and **flow** of the application, from setting up the server to creating routes, models, controllers, and connecting to databases.

## Step-by-Step Explanation

### 1. **`09-env.js`**: Environment Variables
   - **Purpose**: Store sensitive information like database URIs, API keys, and JWT secrets.
   - **Dependencies**: None (must be loaded first using `dotenv.config()`).

### 2. **`00-databases.js`**: Database Connection Setup
   - **Purpose**: This file establishes the connection to your databases (MongoDB, PostgreSQL, or MySQL) using Mongoose and `pg` or `mysql2` for SQL databases.
   - **Dependencies**: Requires `09-env.js` for environment variables like `MONGO_URI`, `PG_URI`, etc.
   - **Note**: The database connection setup will need to be imported into `01-server.js` to ensure the server is connected to the database at startup.

### 3. **`01-server.js`**: Server Setup
   - **Purpose**: Initialize Express server, configure middleware like `cors`, and start the server.
   - **Dependencies**: 
     - Must import `00-databases.js` to ensure the database connection is established before the server starts.
     - Requires `03-routes.js` to set up routing.
   - **Note**: The server listens for requests after the database connection is successfully established.

### 4. **`03-routes.js`**: API Routing
   - **Purpose**: Define the API routes (e.g., `GET`, `POST`, `PUT`, `DELETE`) and connect them to the controllers in `05-controllers.js`.
   - **Dependencies**: 
     - Requires `01-server.js` to ensure the server is running and can use these routes.
     - Imports `05-controllers.js` for CRUD logic.
   - **Note**: These routes will be used to handle HTTP requests and link them to specific controller functions.

### 5. **`05-controllers.js`**: Business Logic
   - **Purpose**: Contains the functions that handle the logic for each route (e.g., fetching posts, creating posts, updating posts, etc.).
   - **Dependencies**: 
     - Imports `04-models.js` to interact with the database models (e.g., `Post`).
     - Must be imported by `03-routes.js` to link controllers with routes.
   - **Note**: This is where the main logic happens — fetching data, saving, updating, or deleting posts.

### 6. **`04-models.js`**: Database Models
   - **Purpose**: Define the database schema and models (e.g., `Post` model for MongoDB or SQL).
   - **Dependencies**: 
     - Must be imported by `05-controllers.js` to access the model.
     - Does not depend on other files directly but needs to connect to the database defined in `00-databases.js`.

### 7. **`06-restAPI.js`**: Frontend API Integration
   - **Purpose**: Contains the code to make HTTP requests (via `fetch`) from the frontend (React/Vue) to the backend routes.
   - **Dependencies**: 
     - Interacts with routes defined in `03-routes.js` and controllers in `05-controllers.js`.
   - **Note**: This is used to call your backend API from the frontend. It is typically used in React or Vue components.

### 8. **`07-sql-basics.js`**: SQL Queries & Operations
   - **Purpose**: Contains basic SQL queries for operations like `SELECT`, `INSERT`, `UPDATE`, `DELETE` to interact with SQL databases (PostgreSQL/MySQL).
   - **Dependencies**: Can be used in place of `04-models.js` for SQL operations but is not a strict dependency.
   - **Note**: It is helpful for understanding how to interact with SQL databases directly before moving to ORM tools like Prisma or Sequelize.

### 9. **`08-authentication.js`**: Authentication & Authorization
   - **Purpose**: Handle user authentication (JWT, password hashing, middleware).
   - **Dependencies**: 
     - Often used in conjunction with `05-controllers.js` to secure certain routes.
     - The middleware from this file is typically used in `03-routes.js` to protect routes from unauthorized access.

<!-- ---------------------------------------------------------------------------------------------------- -->
00-databases.js → 01-server.js → 03-routes.js → 05-controllers.js → 04-models.js
↓ ↓ ↓ ↑
07-sql-basics.js ↓ 06-restAPI.js ←
↑ ↓
08-authentication.js 09-env.js
<!-- ---------------------------------------------------------------------------------------------------- -->

## General Flow Overview (Tree)

1. **Start with `09-env.js`**: Set environment variables for database URIs, JWT secrets, etc.
2. **`00-databases.js`**: Set up database connections (MongoDB/PostgreSQL/MySQL).
3. **`01-server.js`**: Set up the Express server and import the database setup to ensure the server connects to the database before it starts.
4. **`03-routes.js`**: Define API routes (GET, POST, PUT, DELETE).
5. **`05-controllers.js`**: Implement business logic (fetching, creating, updating, deleting).
6. **`04-models.js`**: Define the database models (MongoDB models with Mongoose or SQL schemas).
7. **`06-restAPI.js`**: Frontend makes HTTP requests to backend routes (fetching data from `03-routes.js`).
8. **`07-sql-basics.js`**: Write SQL queries for interacting with your database directly if not using ORM.
9. **`08-authentication.js`**: Implement authentication and authorization (JWT, user login/register).
