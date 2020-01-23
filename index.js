const express = require("express");
const app = express();
const { mongoose } = require("./config/database");
const { router } = require("./config/routes");

app.use(express.json()); //always put express.json before router
app.use("/", router);

app.get("/", (req, res) => {
  res.send("please adopt rather than buying");
});

app.listen(3786, () => {
  console.log("Listening to port 3786");
});
