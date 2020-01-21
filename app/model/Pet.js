const mongoose = require("mongoose");

const petSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  age: {
    type: String,
    required: true
  },
  gender: {
    type: String,
    required: true
  },
  city: {
    type: String,
    required: true
  },
  res_place: {
    type: String,
    required: true
  },
  is_adopted: {
    type: Boolean,
    default: false
  },
  animal_type: {
    type: Schema.Types.ObjectId,
    ref: "Type"
  },
  breed: {
    type: Schema.Types.ObjectId,
    ref: "Breed"
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: "User"
  },
  createdAt: {
    type: Date,
    default: Date.now()
  }
});

const Pet = mongoose.model("Pet", petSchema);

module.exports = {
  Pet
};
