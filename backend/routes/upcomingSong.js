const express = require("express");
const UpcomingSong = require("../models/UpcomingSong");
const uploadThumbnail = require("../config/uploadThumbnail");


const router = express.Router();

/**
 * ===============================
 * ✅ ADD UPCOMING SONG
 * ===============================
 */
router.post(
  "/add",
  uploadThumbnail.single("thumbnail"),
  async (req, res) => {
    try {
      const {
        songTitle,
        sungBy,
        previewInfo,
        publishedDate,
        youtubeUrl,
        category, 
      } = req.body;

      if (!songTitle || !sungBy || !publishedDate || !youtubeUrl || !category) {
        return res.status(400).json({ message: "All fields required" });
      }

      if (!req.file) {
        return res.status(400).json({ message: "Thumbnail required" });
      }

      const parsedDate = new Date(publishedDate);
      if (isNaN(parsedDate)) {
        return res.status(400).json({ message: "Invalid date format" });
      }

      const upcomingSong = new UpcomingSong({
        songTitle,
        category,
        sungBy,
        previewInfo,
        publishedDate: parsedDate,
        youtubeUrl,
        thumbnailUrl: req.file.location,
        itemType: "Video",
      });

      

      await upcomingSong.save();

      res.status(201).json({
        success: true,
        message: "Upcoming song added successfully",
      });
    } catch (err) {
      console.error("ADD UPCOMING ERROR:", err);
      res.status(500).json({ message: err.message });
    }
  }
);


/**
 * ===============================
 * ✅ GET ALL UPCOMING SONGS
 * ===============================
 */
router.get("/", async (req, res) => {
  try {
  
    const upcomingSongs = await UpcomingSong.find()
  .populate("sungBy", "name")   // 🔥 artist ka naam fetch
  .sort({ publishedDate: -1 });


    res.status(200).json({
      success: true,
      upcomingSongs,
    });
  } catch (error) {
    console.error("GET UPCOMING SONGS ERROR:", error);
    res.status(500).json({ message: "Server error" });
  }
});

/**
 * ===============================
 * ✅ GET SINGLE UPCOMING SONG
 * ===============================
 */
router.get("/:id", async (req, res) => {
  try {
    const upcoming = await UpcomingSong.findById(req.params.id)
      .populate("sungBy", "name"); // ✅ ARTIST NAME FETCH

    if (!upcoming) {
      return res.status(404).json({ message: "Upcoming song not found" });
    }

    res.status(200).json(upcoming);
  } catch (error) {
    console.error("GET UPCOMING ERROR:", error);
    res.status(500).json({ message: "Server error" });
  }
});


/**
 * ===============================
 * ✅ UPDATE UPCOMING SONG
 * ===============================
 */
router.put(
  "/:id",
  uploadThumbnail.any(), // 🔥 THIS FIXES req.body
  async (req, res) => {
    try {
      console.log("BODY:", req.body); // 👈 debug (optional)

      const {
        songTitle,
        sungBy,
        previewInfo,
        publishedDate,
        youtubeUrl,
        category,
      } = req.body || {};

      const upcomingSong = await UpcomingSong.findById(req.params.id);

      if (!upcomingSong) {
        return res.status(404).json({ message: "Upcoming song not found" });
      }

      if (songTitle) upcomingSong.songTitle = songTitle;
      if (category) upcomingSong.category = category;
      if (sungBy) upcomingSong.sungBy = sungBy;
      if (previewInfo) upcomingSong.previewInfo = previewInfo;
      if (youtubeUrl) upcomingSong.youtubeUrl = youtubeUrl;

      if (publishedDate) {
        const parsedDate = new Date(publishedDate);
        if (!isNaN(parsedDate)) {
          upcomingSong.publishedDate = parsedDate;
        }
      }

      // ✅ thumbnail optional
      if (req.files && req.files.length > 0) {
        const thumb = req.files.find(f => f.fieldname === "thumbnail");
        if (thumb) {
          upcomingSong.thumbnailUrl = thumb.location;
        }
      }

      await upcomingSong.save();

      res.json({
        success: true,
        message: "Upcoming song updated successfully",
      });
    } catch (err) {
      console.error("UPDATE UPCOMING ERROR:", err);
      res.status(500).json({ message: err.message });
    }
  }
);




/**
 * ===============================
 * ✅ DELETE UPCOMING SONG
 * ===============================
 */
router.delete("/:id", async (req, res) => {
  try {
    const upcomingSong = await UpcomingSong.findByIdAndDelete(req.params.id);

    if (!upcomingSong) {
      return res.status(404).json({ message: "Upcoming song not found" });
    }

    res.status(200).json({
      success: true,
      message: "Upcoming song deleted successfully",
    });
  } catch (error) {
    console.error("DELETE UPCOMING SONG ERROR:", error);
    res.status(500).json({ message: "Server error" });
  }
});

module.exports = router;