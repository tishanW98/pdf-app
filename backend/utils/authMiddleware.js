const jwt = require("jsonwebtoken");
const secretKey = require("../config/jwt");

function authenticateToken(req, res, next) {
  const authHeader = req.headers['authorization'];
  if (!authHeader) {
    return res.status(401).json({ message: "Token is required" });
  }

  const [bearer, token] = authHeader.split(" ");
  if (bearer !== "Bearer" || !token) {
    return res.status(401).json({ message: "Token is required" });
  }

  jwt.verify(token, secretKey, (err, user) => {
    if (err) {
      console.error(err);
      return res.status(403).json({ message: err.message });
    }
    req.user = user;
    next();
  });
}

module.exports = { authenticateToken };
