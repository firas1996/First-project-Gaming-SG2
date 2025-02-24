const express = require("express");
const {
  createUser,
  getUser,
  getAllUsers,
  updateUser,
} = require("../controllers/userController");

const router = express.Router();

router.route("/").post(createUser);
router.route("/").get(getAllUsers);
router.route("/:id").get(getUser);
router.route("/:id").patch(updateUser);

module.exports = router;
