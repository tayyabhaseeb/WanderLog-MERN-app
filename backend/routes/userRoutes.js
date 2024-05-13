const express = require("express");

const router = express.Router();

const {
  getAllUsers,
  signupController,
  loginController,
} = require("../controllers/userControllers");

router.route("/").get(getAllUsers);

router.route("/signup").post(signupController);
router.route("/login").post(loginController);

module.exports = router;
