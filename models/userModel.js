const mongoose = require("mongoose");
const validator = require("validator");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "The Name is required !!!"],
  },
  email: {
    type: String,
    required: [true, "The E-mail is required !!!"],
    unique: true,
    lowercase: true,
    validate: [validator.isEmail, "Set a valid email !!!"],
  },
  password: {
    type: String,
    required: [true, "The Password is required !!!"],
    minlength: 8,
  },
  confirmPassword: {
    type: String,
    required: [true, "The Password is required !!!"],
    minlength: 8,
    validate: {
      validator: function (cPass) {
        return cPass === this.password;
      },
      message: "Password does not match !!!!",
    },
  },
  role: {
    type: String,
    enum: ["admin", "user"],
    default: "user",
  },
  created_at: {
    type: Date,
    default: Date.now(),
  },
  last_pass_update: {
    type: Date,
    default: Date.now(),
  },
});

const User = mongoose.model("User", userSchema);

module.exports = User;
