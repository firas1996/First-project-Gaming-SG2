const User = require("../models/userModel");

exports.createUser = async (req, res) => {
  try {
    const newUser = await User.create(req.body);
    res.status(201).json({
      message: "User Created !!!!",
      data: { newUser },
    });
  } catch (error) {
    res.status(400).json({
      message: "Fail !!!",
      error: error,
    });
  }
};
// this function can get you ....
exports.getUser = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    res.status(200).json({
      message: "User Fetched !!!!",
      data: { user },
    });
  } catch (error) {
    res.status(400).json({
      message: "Fail !!!",
      error: error,
    });
  }
};

exports.getAllUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json({
      message: "Users Fetched !!!!",
      data: { users },
    });
  } catch (error) {
    res.status(400).json({
      message: "Fail !!!",
      error: error,
    });
  }
};

exports.updateUser = async (req, res) => {
  try {
    const user = await User.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.status(201).json({
      message: "User Updated !!!!",
      data: { user },
    });
  } catch (error) {
    res.status(400).json({
      message: "Fail !!!",
      error: error,
    });
  }
};
