const mongoose = require("mongoose");

const animalType = new mongoose.Schema({
  name: {
    type: String,
    required: true
  }
});

const Type = mongoose.model("Type", animalType);

module.exports = {
  Type
};
