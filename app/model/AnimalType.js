const mongoose = require("mongoose");

const animalSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  }
});

const Category = mongoose.model("Category", animalSchema);

module.exports = {
  Category
};
