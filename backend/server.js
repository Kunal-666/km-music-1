const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();

app.use(express.json());
app.use(cors());

// ===== IMPORT ROUTES =====
const favoritesRoute = require("./routes/favorites");

// ===== USE ROUTES =====
app.use("/favorites", favoritesRoute);

// ===== HEALTH CHECK =====
app.get("/health", (req, res) => {
  res.json({ status: "ok" });
});

// ===== START MONGO =====
async function start() {
  try {
    const mongoUri = process.env.MONGO_URI;

    if (mongoUri) {
      await mongoose.connect(mongoUri);
      console.log("Connected to MongoDB");
    } else {
      console.warn("⚠ MONGO_URI missing, skip DB connection");
    }

    app.listen(5000, () =>
      console.log("Server running on http://localhost:5000")
    );
  } catch (err) {
    console.error("Failed to start server:", err);
  }
}

start();
