const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const breedSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  info: {
    type: String
  }
});

const Breed = mongoose.model("Breed", breedSchema);

module.exports = {
  Breed
};
