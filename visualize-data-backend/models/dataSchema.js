const mongoose = require("mongoose");

const dataSchema = new mongoose.Schema({
  intensity: Number,
  likelihood: Number,
  relevance: Number,
  year: Number,
  country: String,
  topic: String,
  region: String,
  city: String,
  sector: String,
  pestle: String,
  source: String,
  swot: String,
});
const Data = mongoose.model("Data", dataSchema, "data");
exports.module = Data;
