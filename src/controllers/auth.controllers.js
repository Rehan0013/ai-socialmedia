const userModel = require("../models/user.model");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

const registerController = async (req, res) => {
  const { username, password } = req.body;

  const isUser = await userModel.findOne({ username });
  if (isUser) {
    res.status(409).json({ message: "User already exists" });
  }

  const user = await userModel.create({
    username,
    password: await bcrypt.hash(password, 10),
  });
  const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);

  res.cookie("token", token, {
    expires: new Date(Date.now() + 60 * 60 * 1000 * 24 * 7),
  });

  res.status(201).json({
    message: "User created successfully",
    token: token,
  });
};

const loginController = async (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    res.status(400).json({ message: "Username and password are required" });
  }

  const user = await userModel.findOne({ username });
  if (!user) {
    res.status(404).json({ message: "User not found" });
  }

  const isPasswordValid = await bcrypt.compare(password, user.password);
  if (!isPasswordValid) {
    return res.status(401).json({ message: "Invalid password" });
  }

  const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);

  res.cookie("token", token, {
    expires: new Date(Date.now() + 60 * 60 * 1000 * 24 * 7),
  });

  res.status(200).json({
    message: "User logged in successfully",
    token: token,
  });
};

const logoutController = async (req, res) => {
  res.clearCookie("token");
  res.status(200).json({ message: "User logged out successfully" });
};

const userController = async (req, res) => {
  const { token } = req.cookies;

  if (!token) {
    res.status(401).json({ message: "Unauthorized - No token" });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await userModel.findById(decoded.id).select("-password -__v");
    res.status(200).json(user);
  } catch (error) {
    res.status(401).json({ message: "Unauthorized - Invalid token" });
  }
};

module.exports = {
  registerController,
  loginController,
  logoutController,
  userController,
};
