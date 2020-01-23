const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost:27017/petadopt", {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log("Database Connected");
  })
  .catch((err) => console.log(err));
