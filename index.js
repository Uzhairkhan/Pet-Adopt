const express = require("express");
const app = express();
const { mongoose } = require("./config/database");

app.listen(3786, () => {
  console.log("Listening to port 3786");
});
