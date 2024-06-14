const jwt = require('jsonwebtoken');
const secretKey = require('../config/jwt'); // Ensure this path is correct

function generateToken(user) {
  const payload = {
    id: user._id,
    email: user.email,
  };
  return jwt.sign(payload, secretKey, { expiresIn: '1h' });
}

function generateRefreshToken(user) {
  const payload = {
    id: user._id,
    email: user.email,
  };
  return jwt.sign(payload, secretKey, { expiresIn: '7d' });
}

module.exports = { generateToken, generateRefreshToken };
