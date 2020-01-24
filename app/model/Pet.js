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
    type: mongoose.Schema.Types.ObjectId,
    ref: "Category"
  },
  breed: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Breed"
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  },
  createdAt: {
    type: Date,
    default: Date.now()
  }
});

petSchema.pre("save", function(next) {
  const pet = this;
  console.log(pet);
  if (pet.isNew) {
    next();
  } else {
    return Promise.reject("Already Created");
  }
});

const Pet = mongoose.model("Pet", petSchema);

module.exports = {
  Pet
};
