const express = require("express");
const { loginUser } = require("../controller/login");

const router = express.Router();

router.post("/login", loginUser);

module.exports = router;
