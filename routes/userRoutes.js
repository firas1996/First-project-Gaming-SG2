const express = require("express");
const {
  createUser,
  getUser,
  getAllUsers,
} = require("../controllers/userController");

const router = express.Router();

router.route("/").post(createUser);
router.route("/:id").get(getUser);
router.route("/").get(getAllUsers);

module.exports = router;
