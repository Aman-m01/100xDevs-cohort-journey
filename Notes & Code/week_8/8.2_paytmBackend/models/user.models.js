const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
  userName: {
    type: String,
    required: true,
    trim: true,
    lowerCase: true,
    minLength: 4,
    maxLength: 20,
    sparse: true,
  },
  password: {
    type: String,
    required: true,
    minLength: 6,
  },
  firstName: {
    type: String,
    required: true,
    trim: true,
    minLength: 4,
    maxLength: 20,
  },
  lastName: {
    type: String,
    required: true,
    trim: true,
    minLength: 4,
    maxLength: 20,
  },
});

const User = mongoose.model("User", userSchema);

module.exports = User;
