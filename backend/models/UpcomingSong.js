const mongoose = require("mongoose");

const upcomingSongSchema = new mongoose.Schema(
  {
    songTitle: {
      type: String,
      required: true,
    },

    category: {
      type: String,
      enum: ["Punjabi", "Haryanvi", "Bollywood", "Hollywood", "Rock", "Culture"],
      required: true,
    },

    sungBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Artist",
      required: true,
    },

    previewInfo: String,

    publishedDate: {
      type: Date,
      required: true,
    },

    youtubeUrl: {
      type: String,
      required: true,
    },

    thumbnailUrl: {
      type: String,
      required: true,
    },

    isActive: {
      type: Boolean,
      default: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("UpcomingSong", upcomingSongSchema);

