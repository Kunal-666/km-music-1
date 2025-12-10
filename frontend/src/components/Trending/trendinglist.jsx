import React, { useRef, useState } from "react";
import artistAvatar from "../../assets/artist-avatar.png";
import songFile from "../../assets/musicsong/shri-hanuman-chalisa.mp3";
import { Heart, Download, Volume2, Play, Pause } from "lucide-react";

const songs = [
  { id: 1, genre: "Punjabi", title: "Awsome Song", artist: "Manjeet Kaur" },
  { id: 2, genre: "Punjabi", title: "Awsome Song", artist: "Manjeet Kaur" },
  { id: 3, genre: "Haryanvi", title: "Awsome Song", artist: "Manjeet Kaur" },
  { id: 4, genre: "Haryanvi", title: "Awsome Song", artist: "Manjeet Kaur" },
  { id: 5, genre: "Bollywood", title: "Awsome Song", artist: "Manjeet Kaur" },
];

const formatTime = (time) => {
  if (!time) return "00:00";
  const m = Math.floor(time / 60);
  const s = Math.floor(time % 60);
  return `${m}:${s < 10 ? "0" : ""}${s}`;
};

const TrendingList = ({ selectedGenre }) => {
  const audioRefs = useRef({});
  const [activeId, setActiveId] = useState(null);
  const [progress, setProgress] = useState({});
  const [currentTime, setCurrentTime] = useState({});
  const [duration, setDuration] = useState({});
  const [volume, setVolume] = useState({});
  const [likes, setLikes] = useState({});

  const filteredSongs = songs.filter(
    (song) => song.genre === selectedGenre
  );

  const togglePlay = (id) => {
    if (activeId && activeId !== id) {
      audioRefs.current[activeId].pause();
    }

    const audio = audioRefs.current[id];

    if (activeId === id) {
      audio.pause();
      setActiveId(null);
    } else {
      audio.play();
      setActiveId(id);
    }
  };

  return (
    <section className="bg-black py-10">
      <div className="max-w-7xl mx-auto px-4 space-y-6">

        {filteredSongs.map((song) => (
          <div
            key={song.id}
            className={`flex items-center px-6 py-5 rounded-xl
              ${activeId === song.id
                ? "bg-gradient-to-r from-[#4A78FF] to-[#B83CFF]"
                : "bg-[#141414]"
              }`}
          >
            {/* AUDIO */}
            <audio
              ref={(el) => (audioRefs.current[song.id] = el)}
              src={songFile}
              onTimeUpdate={(e) => {
                setCurrentTime((p) => ({
                  ...p,
                  [song.id]: e.target.currentTime,
                }));
                setProgress((p) => ({
                  ...p,
                  [song.id]:
                    (e.target.currentTime / e.target.duration) * 100 || 0,
                }));
              }}
              onLoadedMetadata={(e) =>
                setDuration((p) => ({
                  ...p,
                  [song.id]: e.target.duration,
                }))
              }
            />

            {/* ARTIST */}
            <div className="flex items-center gap-4 w-[260px]">
              <img src={artistAvatar} className="w-14 h-14 rounded-full" />
              <div>
                <h4 className="text-white font-semibold">{song.artist}</h4>
                <p className="text-white/60 text-sm">{song.title}</p>
              </div>
            </div>

            <div className="w-px h-10 bg-white/30 mx-4" />

            {/* PLAY */}
            <button
              onClick={() => togglePlay(song.id)}
              className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center"
            >
              {activeId === song.id ? <Pause size={18} /> : <Play size={18} />}
            </button>

            {/* PROGRESS */}
            <div className="flex items-center gap-4 flex-1 mx-6">
              <span className="w-[45px] text-sm">
                {formatTime(currentTime[song.id])}
              </span>

              <div className="flex-1 h-[2px] bg-white/30 relative">
                <div
                  className="absolute h-full bg-white"
                  style={{ width: `${progress[song.id] || 0}%` }}
                />
              </div>

              <span className="w-[45px] text-sm">
                {formatTime(duration[song.id])}
              </span>

              {/* VOLUME */}
              {activeId === song.id && (
                <div className="flex items-center gap-2 ml-3">
                  <Volume2 size={16} />
                  <div
                    onClick={(e) => {
                      const rect = e.target.getBoundingClientRect();
                      const v = (e.clientX - rect.left) / rect.width;
                      audioRefs.current[song.id].volume = v;
                      setVolume((p) => ({ ...p, [song.id]: v }));
                    }}
                    className="w-[60px] h-[2px] bg-white/40 relative cursor-pointer"
                  >
                    <div
                      className="absolute h-full bg-white"
                      style={{
                        width: `${(volume[song.id] || 0.7) * 100}%`,
                      }}
                    />
                  </div>
                </div>
              )}
            </div>

            {/* ACTIONS */}
            <div className="px-6 py-3 border border-white/70 rounded-full flex items-center gap-4 text-sm">
              <span>Download</span>

              {/* ✅ FIXED LIKE DESIGN */}
              <button
                onClick={() =>
                  setLikes((p) => ({
                    ...p,
                    [song.id]: (p[song.id] || 0) + 1,
                  }))
                }
                className="flex items-center gap-2 min-w-[50px] justify-center"
              >
                <Heart size={22} />
                <span className="text-xs w-[12px] text-left">
                  {likes[song.id] || 0}
                </span>
              </button>

              <button
                onClick={() => {
                  const a = document.createElement("a");
                  a.href = songFile;
                  a.download = "song.mp3";
                  a.click();
                }}
              >
                <Download size={20} />
              </button>
            </div>
          </div>
        ))}

      </div>
    </section>
  );
};

export default TrendingList;
