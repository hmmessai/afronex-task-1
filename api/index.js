require("dotenv").config();
const express = require("express");
const cors = require("cors");

const dbConnection = require("./Config/db.js");
const postRoute = require("./Routes/postRoute");

const app = express();

app.use(express.json());
app.use(cors());

app.use("/post", postRoute);

app.listen(process.env.PORT || 3005, (err, result) => {
  if (err) {
    console.log(err.message);
  } else {
    console.log("connected to port", process.env.PORT || 3005);
  }
});
