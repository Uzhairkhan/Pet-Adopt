const mongoose = require("mongoose");
const validator = require("validator");

const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true,
    validate: {
      validator: function(value) {
        return validator.isEmail(value);
      },
      message: function() {
        return "Invalid Email Format";
      }
    }
  },
  mobile: {
    type: String,
    required: true
  },
  address: {
    type: String
  },
  currentAddress: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true,
    minlength: 8,
    maxlength: 128
  },
  confirmPassword: {
    type: String,
    required: true,
    minlength: 8,
    maxlength: 128
  },
  createdAt: {
    type: Date,
    default: Date.now()
  }
});

const User = mongoose.model("User", userSchema);

module.exports = {
  User
};
