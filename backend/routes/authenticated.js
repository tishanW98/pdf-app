const express = require("express");
const { getUserById } = require("../controller/authenticated");
const { authenticateToken } = require("../utils/authMiddleware");

const router = express.Router();

router.get("/user", authenticateToken, getUserById);

module.exports = router;
