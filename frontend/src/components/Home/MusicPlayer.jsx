import { useState, useRef, useEffect } from "react";

import artistAvatar from "../../assets/artist-avatar.png";
import downloadIcon from "../../assets/musicplayer/material-symbols_download.svg";
import heartIcon from "../../assets/musicplayer/solar_heart-line-duotone.svg";
import songFile from "../../assets/musicsong/shri-hanuman-chalisa.mp3";

const MusicPlayer = () => {
  const audioRef = useRef(null);

  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState("00:00");
  const [duration, setDuration] = useState("00:00");
  const [progress, setProgress] = useState(0);

  const [volume, setVolume] = useState(1);
  const [showVolumeSlider, setShowVolumeSlider] = useState(false);

  const [popup, setPopup] = useState("");

  const formatTime = (sec) => {
    if (!sec) return "00:00";
    const m = Math.floor(sec / 60);
    const s = Math.floor(sec % 60).toString().padStart(2, "0");
    return `${m}:${s}`;
  };

  // AUDIO EVENTS
  useEffect(() => {
    const audio = audioRef.current;

    const setAudioDuration = () => setDuration(formatTime(audio.duration));
    const updateTime = () => {
      setCurrentTime(formatTime(audio.currentTime));
      setProgress((audio.currentTime / audio.duration) * 100);
    };

    audio.addEventListener("loadedmetadata", setAudioDuration);
    audio.addEventListener("timeupdate", updateTime);

    // RESET BUTTON WHEN SONG ENDS
    audio.addEventListener("ended", () => {
      setIsPlaying(false);
    });

    return () => {
      audio.removeEventListener("loadedmetadata", setAudioDuration);
      audio.removeEventListener("timeupdate", updateTime);
      audio.removeEventListener("ended", () => setIsPlaying(false));
    };
  }, []);

  // CLOSE VOLUME SLIDER ON OUTSIDE CLICK
  useEffect(() => {
    const closeSlider = (e) => {
      if (!e.target.closest(".volume-wrapper")) {
        setShowVolumeSlider(false);
      }
    };
    document.addEventListener("click", closeSlider);

    return () => document.removeEventListener("click", closeSlider);
  }, []);

  const togglePlay = () => {
    const audio = audioRef.current;

    if (isPlaying) audio.pause();
    else audio.play();

    setIsPlaying(!isPlaying);
  };

  const handleSeek = (e) => {
    const audio = audioRef.current;
    const width = e.target.clientWidth;
    const clickX = e.nativeEvent.offsetX;
    audio.currentTime = (clickX / width) * audio.duration;
  };

  const handleVolume = (e) => {
    const audio = audioRef.current;
    const vol = Number(e.target.value);
    audio.volume = vol;
    setVolume(vol);
  };

  // ADD TO FAVORITE
  const addToFavorites = async () => {
    const data = {
      title: "Shri Hanuman Chalisa",
      artist: "Manjeet Kaur",
      url: "/userfavoritelist/shri-hanuman-chalisa.mp3",
      cover: artistAvatar,
    };

    await fetch("http://localhost:5000/favorites/add", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    setPopup("Song has been added to your favorite list!");
    setTimeout(() => setPopup(""), 2500);
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 h-[88px] flex items-center bg-gradient-to-r from-[#4668E7] via-[#8A4BF0] to-[#C625EB] shadow-lg">

      <audio ref={audioRef} src={songFile}></audio>

      <div className="max-w-[1500px] mx-auto w-full px-8 flex items-center justify-between">

        {/* LEFT — Avatar + Name */}
        <div className="flex items-center gap-4">
          <img
            src={artistAvatar}
            className="w-[56px] h-[56px] rounded-full object-cover"
          />
          <div>
            <h3 className="text-white text-xl font-semibold">Manjeet Kaur</h3>
            <p className="text-white/70 text-sm -mt-1">Awesome Song</p>
          </div>
        </div>

        {/* Divider */}
        <div className="hidden sm:block w-px h-[56px] bg-white/30 mx-6"></div>

        {/* CENTER */}
        <div className="flex items-center gap-6">

          {/* Play Button */}
          <button
            onClick={togglePlay}
            className="w-[44px] h-[44px] rounded-full bg-white/20 flex items-center justify-center hover:bg-white/30 transition"
          >
            {isPlaying ? (
              <svg width="16" height="16" fill="white" viewBox="0 0 20 20">
                <rect x="5" y="3" width="3" height="14" />
                <rect x="12" y="3" width="3" height="14" />
              </svg>
            ) : (
              <svg width="16" height="16" fill="white" viewBox="0 0 20 20">
                <path d="M4 3L17 10L4 17V3Z" />
              </svg>
            )}
          </button>

          {/* Time */}
          <div className="text-white text-sm font-medium flex gap-3">
            <span>{currentTime}</span>
            <span>{duration}</span>
          </div>

          {/* Volume */}
          <div
            className="relative volume-wrapper"
            onClick={(e) => e.stopPropagation()}
          >
            <button onClick={() => setShowVolumeSlider(!showVolumeSlider)}>
              <svg width="20" height="20" stroke="white" fill="none" strokeWidth="2">
                <polygon points="5 9 9 9 13 5 13 19 9 15 5 15" />
                <path d="M16 8.82a4 4 0 0 1 0 6.36" />
              </svg>
            </button>

            {showVolumeSlider && (
              <input
                type="range"
                min="0"
                max="1"
                step="0.01"
                value={volume}
                onChange={handleVolume}
                className="absolute left-6 -top-2 w-[120px]"
              />
            )}
          </div>

          {/* Progress Bar */}
          <div
            className="bg-white/30 h-[1px] rounded-full w-[520px] cursor-pointer"
            onClick={handleSeek}
          >
            <div
              className="h-[1px] bg-white rounded-full"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
        </div>

        {/* Divider */}
        <div className="hidden sm:block w-px h-[56px] bg-white/30 mx-6"></div>

        {/* RIGHT */}
        <div className="flex items-center border border-white/50 rounded-full px-6 py-3 gap-4">
          <span className="text-white text-sm">Download: 2.4K</span>

          <div className="w-px h-5 bg-white/40"></div>

          <button onClick={addToFavorites}>
            <img src={heartIcon} className="w-[18px] h-[18px]" />
          </button>

          <a href={songFile} download>
            <img src={downloadIcon} className="w-[18px] h-[18px]" />
          </a>
        </div>
      </div>

      {/* Popup */}
      {popup && (
        <div className="absolute top-[-60px] left-1/2 -translate-x-1/2 bg-white text-black px-6 py-3 rounded-xl shadow-xl">
          {popup}
        </div>
      )}
    </div>
  );
};

export default MusicPlayer;
