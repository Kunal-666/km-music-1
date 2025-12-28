import { useRef, useState, useEffect } from "react";
import { PlayerContext } from "./PlayerContext";

export const PlayerProvider = ({ children }) => {
  const audioRef = useRef(new Audio());

  const [currentSong, setCurrentSong] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const playSong = async (song) => {
    if (!song?.songUrl && !song?.audioUrl) return;

    const url = song.audioUrl || song.songUrl;

    // Load new song if different
    if (currentSong?.songUrl !== url && currentSong?.audioUrl !== url) {
      audioRef.current.src = url;
    }

    try {
      await audioRef.current.play();
      setCurrentSong(song);
      setIsPlaying(true);
    } catch (err) {
      console.warn("Play blocked:", err);
    }
  };

  const pauseSong = () => {
    audioRef.current.pause();
    setIsPlaying(false);
  };

  // Keep UI in sync when song ends
  useEffect(() => {
    const audio = audioRef.current;
    const onEnded = () => setIsPlaying(false);
    audio.addEventListener("ended", onEnded);
    return () => audio.removeEventListener("ended", onEnded);
  }, []);

  return (
    <PlayerContext.Provider
      value={{
        audioRef,
        currentSong,
        isPlaying,
        playSong,
        pauseSong, // ✅ THIS FIXES EVERYTHING
      }}
    >
      {children}
    </PlayerContext.Provider>
  );
};
