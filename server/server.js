const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");

const PlantLog = require("./models/PlantLog");

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log("✅ Connected to MongoDB Atlas"))
.catch((err) => console.error("❌ MongoDB connection error:", err));

// Health check route
app.get("/", (req, res) => {
  return res.status(200).json({ message: "🌱 Plant Log API is running!" });
});

// Endpoint to fetch latest plant record
app.get("/latest", async (req, res) => {
  try {
    const latest = await PlantLog.findOne().sort({ timestamp: -1 });
    console.log("Latest plant record fetched:", latest);
    if (!latest) {
      return res.status(404).json({ message: "No records found" });
    }
    return res.status(201).json(latest);
  } catch (error) {
    console.error("Error fetching latest plant:", error);
    res.status(500).json({ message: "Server error" });
  }
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
