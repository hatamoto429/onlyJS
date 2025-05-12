// Store and use environment variables securely

PORT=5000
MONGO_URI=mongodb+srv://user:pass@cluster.mongodb.net/mydb
PG_URI=postgres://user:pass@host/dbname
JWT_SECRET=jwt_secret


// => Access variables in code
require("dotenv").config();
console.log(process.env.PORT);
