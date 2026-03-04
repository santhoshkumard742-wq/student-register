const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");
const studentRoutes = require("./routes/studentRoutes");
const path = require("path");
require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json());

connectDB();

// serve frontend assets
app.use(express.static(path.join(__dirname, "public")));

// make uploaded images accessible
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

app.use("/api", studentRoutes);

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});