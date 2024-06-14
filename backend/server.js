const express = require("express");
const cors = require("cors");
const path = require("path");
const connectDB = require("./config/db");
const { port } = require("./config/config");
const pdfRoutes = require("./routes/pdfRoutes");
const loginRoutes = require("./routes/login");
const signupRoutes = require("./routes/signup");
const authenticatedRoutes = require("./routes/authenticated");
const bodyParser = require("body-parser");

const app = express();

// Connect to database
connectDB();

// Middleware
app.use(express.json());
app.use(cors());

app.use("/files", express.static(path.join(__dirname, "files")));
app.use(bodyParser.json());

// Routes
app.use("/", pdfRoutes);
app.use("/user", signupRoutes);
app.use("/auth", loginRoutes);
app.use("/api", authenticatedRoutes);

// Start server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
