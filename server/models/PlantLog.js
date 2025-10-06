const mongoose = require("mongoose");

const SpeciesSchema = new mongoose.Schema({
  name: String,
  confidence: Number,
}, { _id: false });

const PlantLog = new mongoose.Schema({
  timestamp: String,
  species: SpeciesSchema,
  height_in: Number,
  image_name: String,
  image_url: String,
  source: String
}, { collection: "plant_logs" });

module.exports = mongoose.model("plan_logs", PlantLog);
