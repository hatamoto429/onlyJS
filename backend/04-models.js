// Define Mongoose or SQL-based database schemas and models

// Mongoose model
const mongoose = require("mongoose");

const PostSchema = new mongoose.Schema({
  title: String,
  content: String,
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Post", PostSchema);

// Prisma example (schema.prisma) => Open Source Object-Relational Mapping for Node.js and TypeScript
/*
model Post {
  id        Int      @id @default(autoincrement())
  title     String
  content   String?
  createdAt DateTime @default(now())
}
*/
