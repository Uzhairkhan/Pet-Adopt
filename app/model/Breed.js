const mongoose = require("mongoose");

const breedSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  info: {
    type: String
  },
  animal_type: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Category"
  }
});

const Breed = mongoose.model("Breed", breedSchema);

module.exports = {
  Breed
};
