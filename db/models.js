const mongoose = require("mongoose");

const JobSchema = new mongoose.Schema({
  title: String,
  company: String,
  location: String,
  tags: [String],
  postedAt: Date,
  source: String,
});

module.exports = mongoose.model("Job", JobSchema);
