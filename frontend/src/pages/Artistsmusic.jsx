import React from "react";
import { useLocation } from "react-router-dom";

import ArtistDetail from "../components/Artists/ArtistDetail";
import MusicHero from "../components/Artists/musichero";
import MusicPlayer from "../components/Home/MusicPlayer";
const Artistsmusic = () => {
  const { state } = useLocation();
  const artist = state?.artist;

  if (!artist) return null;

  return (
    <div className="bg-[#111] text-white">
      {/* ✅ HERO */}
      <MusicPlayer />
      <MusicHero artistName={artist.name} />

      {/* ✅ DETAIL */}
      <ArtistDetail />
    </div>
  );
};

export default Artistsmusic;
