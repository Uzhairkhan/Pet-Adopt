const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost:27017/petadopt", {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then((response) => {
    console.log("Database Connected");
  })
  .catch((err) => {
    console.log(err);
  });

module.exports = {
  mongoose
};
