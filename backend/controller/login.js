const bcrypt = require("bcrypt");
const User = require("../models/user");
const { generateToken } = require("../utils/authUtils");

async function loginUser(req, res) {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) {
      throw new Error("User not found");
    }
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      throw new Error("Invalid credentials");
    }
    const token = generateToken(user);
    res.status(200).json({ user, token });
  } catch (error) {
    res.status(401).json({ message: "Invalid credentials" });
  }
}

module.exports = { loginUser };
