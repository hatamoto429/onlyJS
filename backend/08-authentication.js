// Handle user auth with JWT, hashing, and middleware

// Register user
const bcrypt = require("bcryptjs");
const hashedPassword = await bcrypt.hash(password, 10);

// Login & generate token
const jwt = require("jsonwebtoken");
const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: "1d" });

// Middleware to protect routes
const authMiddleware = (req, res, next) => {
  const token = req.headers.authorization?.split(" ")[1];
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch {
    res.status(401).json({ error: "Unauthorized" });
  }
};
