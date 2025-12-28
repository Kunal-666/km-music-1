import { useEffect, useState } from "react";
import { usePlayer } from "../../context/PlayerContext";

import artistAvatar from "../../assets/artist-avatar.png";
import downloadIcon from "../../assets/musicplayer/material-symbols_download.svg";
import heartIcon from "../../assets/musicplayer/solar_heart-line-duotone.svg";


const MusicPlayer = () => {
  const { currentSong, isPlaying, playSong, pauseSong, audioRef } = usePlayer();

  const [currentTime, setCurrentTime] = useState("00:00");
  const [duration, setDuration] = useState("00:00");
  const [progress, setProgress] = useState(0);
  const [volume, setVolume] = useState(1);
  const [popup, setPopup] = useState("");
  const [isMinimized, setIsMinimized] = useState(false);
const player = usePlayer();
console.log("PLAYER FROM MusicPlayer:", player);
  /* ================= HELPERS ================= */

  const formatTime = (sec) => {
    if (!sec || isNaN(sec)) return "00:00";
    const m = Math.floor(sec / 60);
    const s = Math.floor(sec % 60).toString().padStart(2, "0");
    return `${m}:${s}`;
  };

  const togglePlay = () => {
    isPlaying ? pauseSong() : playSong(currentSong);
  };

  const handleSeek = (e) => {
    const audio = audioRef.current;
    if (!audio || !audio.duration) return;

    const width = e.currentTarget.clientWidth;
    const clickX = e.nativeEvent.offsetX;
    audio.currentTime = (clickX / width) * audio.duration;
  };

  const handleVolume = (e) => {
    const vol = Number(e.target.value);
    audioRef.current.volume = vol;
    setVolume(vol);
  };

  const addToFavorites = async () => {
    try {
      await fetch("http://localhost:5000/favorites/add", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(currentSong),
      });

      setPopup("Song added to favorites ❤️");
      setTimeout(() => setPopup(""), 2500);
    } catch (err) {
      console.error("Favorite error:", err);
    }
  };

  /* ================= EFFECTS ================= */

  useEffect(() => {
    if (!audioRef.current) return;

    const audio = audioRef.current;

    const update = () => {
      setCurrentTime(formatTime(audio.currentTime));
      setDuration(formatTime(audio.duration));
      setProgress((audio.currentTime / audio.duration) * 100 || 0);
    };

    audio.addEventListener("timeupdate", update);
    audio.addEventListener("loadedmetadata", update);

    return () => {
      audio.removeEventListener("timeupdate", update);
      audio.removeEventListener("loadedmetadata", update);
    };
  }, [audioRef, currentSong]);

  /* ================= SAFE EARLY RETURN ================= */

  if (!currentSong) return null;

  /* ================= JSX ================= */

  return (
    <>
      {/* MINI PLAYER */}
      {isMinimized && (
        <div
          className="fixed bottom-4 left-4 z-[60] w-[60px] h-[60px] rounded-full bg-purple-600 flex items-center justify-center cursor-pointer"
          onClick={() => setIsMinimized(false)}
        >
          <img
            src={currentSong.thumbnailUrl || artistAvatar}
            className="w-12 h-12 rounded-full"
          />
        </div>
      )}

      {/* FULL PLAYER */}
      <div
        className={`fixed bottom-0 left-0 right-0 z-50 bg-gradient-to-r from-[#4668E7] via-[#8A4BF0] to-[#C625EB]
        transition-transform duration-500 ${
          isMinimized ? "-translate-x-full" : "translate-x-0"
        }`}
      >
        <div className="max-w-[1500px] mx-auto px-6 py-4 flex flex-wrap items-center justify-between gap-4">

          {/* LEFT */}
          <div className="flex items-center gap-4">
            <img
              src={currentSong.thumbnailUrl || artistAvatar}
              className="w-14 h-14 rounded-full"
            />
            <div>
              <h3 className="text-white font-semibold">
                {currentSong.songName}
              </h3>
              <p className="text-white/70 text-sm">
                {currentSong.artistName}
              </p>
            </div>
          </div>

          {/* CONTROLS */}
          <div className="flex items-center gap-6 flex-1 justify-center">
            <button
              onClick={togglePlay}
              className="w-11 h-11 rounded-full bg-white/20 flex items-center justify-center"
            >
              {isPlaying ? "❚❚" : "▶"}
            </button>

            <span className="text-white text-sm">
              {currentTime} / {duration}
            </span>

            <div
              className="w-[400px] h-[2px] bg-white/30 rounded cursor-pointer"
              onClick={handleSeek}
            >
              <div
                className="h-[2px] bg-white rounded"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>

          {/* RIGHT */}
          <div className="flex items-center gap-4">
            <input
              type="range"
              min="0"
              max="1"
              step="0.01"
              value={volume}
              onChange={handleVolume}
            />

            <button onClick={addToFavorites}>
              <img src={heartIcon} className="w-5" />
            </button>

            <a href={currentSong.audioUrl} download>
              <img src={downloadIcon} className="w-5" />
            </a>

            <button
              onClick={() => setIsMinimized(true)}
              className="text-white text-sm"
            >
              Minimize
            </button>
          </div>
        </div>

        {popup && (
          <div className="absolute top-[-60px] left-1/2 -translate-x-1/2 bg-white px-6 py-3 rounded-xl">
            {popup}
          </div>
        )}
      </div>
    </>
  );
};

export default MusicPlayer;
