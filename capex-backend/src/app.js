const express = require("express");
const cors = require("cors");

const app = express();

app.use(
  cors({
    origin: process.env.CLIENT_URL || "*",
    credentials: true
  })
);

app.use(express.json());

app.get("/", (req, res) => {
  res.json({ message: "API running 🚀" });
});

app.use("/api/auth", require("./routes/authRoute"));

module.exports = app;
