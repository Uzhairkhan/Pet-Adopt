const express = require("express");
const app = express();
const { mongoose } = require("./config/database");
const { router } = require("./config/routes");

const port = process.env.PORT || 3786

app.use(express.json()); //always put express.json before router
app.use("/", router);

app.get("/", (req, res) => {
  res.send("please adopt rather than buying");
});

app.listen(port, () => console.log(`Server running on port ${port}`));
