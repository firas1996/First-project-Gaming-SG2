const express = require("express");
const { createUser, getUser } = require("../controllers/userController");

const router = express.Router();

router.route("/").post(createUser);
router.route("/:id").get(getUser);

module.exports = router;
