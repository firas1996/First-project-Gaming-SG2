const express = require("express");
const { createUser } = require("../controllers/userController");
const { model } = require("mongoose");

const router = express.Router();

router.route("/").post(createUser);

module.exports = router;
