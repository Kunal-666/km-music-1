import React, { useRef, useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import songFile from "../../assets/musicsong/shri-hanuman-chalisa.mp3";
import {
  Play,
  Pause,
  Volume2,
  Heart,
  Download,
  Facebook,
  Instagram,
  Twitter,
} from "lucide-react";

/* ---------------- SONG DATA ---------------- */
const songs = Array.from({ length: 5 }, (_, i) => ({
  id: i + 1,
  title: "Awsome Song",
}));

/* ---------------- TIME FORMAT ---------------- */
const formatTime = (t = 0) => {
  const m = Math.floor(t / 60);
  const s = Math.floor(t % 60);
  return `${m}:${s < 10 ? "0" : ""}${s}`;
};

const ArtistDetail = () => {
  const { state } = useLocation();
  const artist = state?.artist;

  const audioRef = useRef(new Audio(songFile));

  const [activeId, setActiveId] = useState(null);
  const [playing, setPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(0.7);
  const [likes, setLikes] = useState({});

  /* ---------------- AUDIO EVENTS ---------------- */
  useEffect(() => {
    const audio = audioRef.current;

    const timeUpdate = () => setCurrentTime(audio.currentTime);
    const metaLoaded = () => setDuration(audio.duration);
    const ended = () => {
      setPlaying(false);
      setActiveId(null);
      setCurrentTime(0);
    };

    audio.addEventListener("timeupdate", timeUpdate);
    audio.addEventListener("loadedmetadata", metaLoaded);
    audio.addEventListener("ended", ended);

    return () => {
      audio.removeEventListener("timeupdate", timeUpdate);
      audio.removeEventListener("loadedmetadata", metaLoaded);
      audio.removeEventListener("ended", ended);
    };
  }, []);

  /* ---------------- PLAY / PAUSE ---------------- */
  const togglePlay = (id) => {
    const audio = audioRef.current;

    if (activeId !== id) {
      audio.pause();
      audio.currentTime = 0;
      setCurrentTime(0);
    }

    if (playing && activeId === id) {
      audio.pause();
      setPlaying(false);
      setActiveId(null);
    } else {
      audio.volume = volume;
      audio.play();
      setPlaying(true);
      setActiveId(id);
    }
  };

  /* ---------------- SEEK ---------------- */
  const handleSeek = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const percent = (e.clientX - rect.left) / rect.width;
    audioRef.current.currentTime = percent * duration;
  };

  /* ---------------- VOLUME ---------------- */
  const handleVolume = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const percent = (e.clientX - rect.left) / rect.width;
    audioRef.current.volume = percent;
    setVolume(percent);
  };

  /* ---------------- LIKE ---------------- */
  const likeSong = (id) =>
    setLikes((p) => ({ ...p, [id]: (p[id] || 0) + 1 }));

  /* ---------------- DOWNLOAD ---------------- */
  const downloadSong = () => {
    const a = document.createElement("a");
    a.href = songFile;
    a.download = "song.mp3";
    a.click();
  };

  if (!artist) return null;

  return (
    <section className="bg-black text-white min-h-screen px-8 py-16">
      <div className="max-w-7xl mx-auto">

        {/* ================= ARTIST TOP ================= */}
        <div className="grid grid-cols-3 gap-14 max-lg:grid-cols-1 items-center">

          {/* IMAGE */}
          <div className="relative h-[520px] rounded-3xl overflow-hidden">
            <img
              src={artist.img}
              alt={artist.name}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-purple-800/90 to-transparent" />
          </div>

          {/* RIGHT CONTENT */}
          <div className="col-span-2">
            <h1 className="text-4xl font-extrabold mb-4">
              {artist.name}
            </h1>

            <p className="text-white/70 max-w-3xl leading-relaxed mb-6">
              {artist.bio}
            </p>

            {/* ✅ FIXED SOCIAL MEDIA ICONS */}
            <div className="flex gap-4">
              <SocialIcon>
                <Facebook size={20} color="#1877F2" />
              </SocialIcon>

              <SocialIcon>
                <Instagram size={20} color="#E4405F" />
              </SocialIcon>

              <SocialIcon>
                <Twitter size={20} color="#1DA1F2" />
              </SocialIcon>
            </div>
          </div>
        </div>

        {/* ================= MUSIC LIST ================= */}
        <h2 className="mt-20 mb-8 text-3xl font-bold">
          {artist.name}’s Music
        </h2>

        <div className="space-y-6">
          {songs.map((song) => {
            const isActive = activeId === song.id;
            const progress =
              duration > 0 ? (currentTime / duration) * 100 : 0;

            return (
              <div
                key={song.id}
                className={`flex items-center px-6 py-5 rounded-xl
                  ${
                    isActive
                      ? "bg-gradient-to-r from-[#4A78FF] to-[#B83CFF]"
                      : "bg-[#141414]"
                  }`}
              >
                {/* ARTIST IMAGE */}
                <div className="flex items-center gap-4 w-[260px]">
                  <img
                    src={artist.img}
                    className="w-14 h-14 rounded-full object-cover"
                  />
                  <div>
                    <h4 className="font-semibold">{artist.name}</h4>
                    <p className="text-white/60 text-sm">
                      {song.title}
                    </p>
                  </div>
                </div>

                <div className="w-px h-10 bg-white/30 mx-4" />

                {/* PLAY */}
                <button
                  onClick={() => togglePlay(song.id)}
                  className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center"
                >
                  {isActive && playing ? (
                    <Pause size={18} />
                  ) : (
                    <Play size={18} />
                  )}
                </button>

                {/* PROGRESS */}
                <div className="flex items-center gap-4 flex-1 mx-6">
                  <span className="w-[45px] text-sm">
                    {isActive ? formatTime(currentTime) : "00:00"}
                  </span>

                  <div
                    onClick={handleSeek}
                    className="flex-1 h-[2px] bg-white/30 relative cursor-pointer"
                  >
                    <div
                      className="absolute h-full bg-white"
                      style={{ width: `${isActive ? progress : 0}%` }}
                    />
                  </div>

                  <span className="w-[45px] text-sm">
                    {formatTime(duration || 165)}
                  </span>

                  {isActive && (
                    <div className="flex items-center gap-2">
                      <Volume2 size={16} />
                      <div
                        onClick={handleVolume}
                        className="w-[60px] h-[2px] bg-white/40 cursor-pointer relative"
                      >
                        <div
                          className="absolute h-full bg-white"
                          style={{ width: `${volume * 100}%` }}
                        />
                      </div>
                    </div>
                  )}
                </div>

                {/* ACTIONS */}
                <div className="px-6 py-3 border border-white/60 rounded-full flex items-center gap-4 text-sm">
                  <button
                    onClick={() => likeSong(song.id)}
                    className="flex items-center gap-1"
                  >
                    <Heart size={18} />
                    <span>{likes[song.id] || 0}</span>
                  </button>

                  <button onClick={downloadSong}>
                    <Download size={18} />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default ArtistDetail;

/* ---------------- SOCIAL ICON WRAPPER ---------------- */
const SocialIcon = ({ children }) => (
  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center hover:scale-110 transition cursor-pointer">
    {children}
  </div>
);
