// SQL and NoSQL Examples
// Connect and interact with MongoDB, PostgreSQL and MySQL using Node.js

// ===== MongoDB (Mongoose) =====
const mongoose = require("mongoose");
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.error(err));


// ===== PostgreSQL (pg) =====
const { Pool } = require("pg");
const pool = new Pool({ connectionString: process.env.PG_URI });

const pgResult = await pool.query("SELECT * FROM posts");


// ===== MySQL (mysql2) =====
// npm install mysql2
const mysql = require("mysql2/promise");

const mysqlConnection = await mysql.createConnection({
  host: process.env.MYSQL_HOST,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DB
});

console.log("MySQL connected");
