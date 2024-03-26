require("dotenv").config();
const mysql = require("mysql2");

const { posts, users } = require("../Models/Models");

const dbConnection = mysql.createPool({
  user: process.env.DB_USER,
  database: process.env.DB_DATABASE,
  host: process.env.DB_HOST | "localhost",
  password: process.env.DB_PASS,
  connectionLimit: 10,
});

dbConnection.execute(users, (err, result) => {
  if (err) {
    console.log(err.message);
  } else {
    console.log(result);
  }
});

dbConnection.execute(posts, (err, result) => {
  if (err) {
    console.log(err);
  } else {
    console.log(result);
  }
});

module.exports = dbConnection.promise();
