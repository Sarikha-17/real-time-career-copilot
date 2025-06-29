const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const app = express();
app.use(cors());
app.use(express.json());

const PORT = 3000;

app.get("/", (req, res) => {
  res.send("Career Copilot Backend Running");
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
