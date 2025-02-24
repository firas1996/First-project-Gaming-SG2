const User = require("../models/userModel");

exports.signUp = async (req, res) => {
  try {
    const newUser = await User.create({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
      confirmPassword: req.body.confirmPassword,
    });
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

exports.signIn = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({
        message: "email and password are required !!!",
      });
    }
    const user = await User.findOne({ email });
    if (!user || user.password != password) {
      return res.status(400).json({
        message: "email or password are incorrect !!!",
      });
    }
    res.status(201).json({
      message: "connection reussite !!!!",
    });
  } catch (error) {
    res.status(400).json({
      message: "Fail !!!",
      error: error,
    });
  }
};

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

exports.deleteUser = async (req, res) => {
  try {
    await User.findByIdAndDelete(req.params.id);
    res.status(204).json({
      message: "User Deleted !!!!",
    });
  } catch (error) {
    res.status(400).json({
      message: "Fail !!!",
      error: error,
    });
  }
};
