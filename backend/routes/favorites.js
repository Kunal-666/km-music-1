const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");

// ===== Song Schema for Favorites =====
const FavoriteSchema = new mongoose.Schema({
  title: String,
  artist: String,
  url: String,
  cover: String,
});

const Favorite = mongoose.model("Favorite", FavoriteSchema);

// ===== Add Favorite Song =====
router.post("/add", async (req, res) => {
  try {
    const song = new Favorite(req.body);
    await song.save();
    res.json({ success: true, message: "Song added to favorites" });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

// ===== Get All Favorites =====
router.get("/list", async (req, res) => {
  try {
    const favorites = await Favorite.find();
    res.json(favorites);
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

// ===== Remove from Favorites =====
router.delete("/remove/:id", async (req, res) => {
  try {
    await Favorite.findByIdAndDelete(req.params.id);
    res.json({ success: true, message: "Removed from favorites" });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

module.exports = router;
