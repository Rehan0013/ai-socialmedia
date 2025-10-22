const express = require("express");
const {
  registerController,
  loginController,
  logoutController,
  userController,
} = require("../controllers/auth.controllers");

const router = express.Router();

router.post("/register", registerController);
router.post("/login", loginController);
router.get("/logout", logoutController);
router.get("/user", userController);

module.exports = router;
