import React, { useState } from "react";

import TrendingHero from "../components/Trending/trendinghero";
import TrendingCategory from "../components/Trending/trendingcategory";
import TrendingList from "../components/Trending/trendinglist";
import MusicPlayer from "../components/Home/MusicPlayer";
const Trending = () => {
  const [selectedGenre, setSelectedGenre] = useState("Culture");

  return (
    <div className="bg-[#111] text-white">
      {/* HERO */}
      <MusicPlayer />
      <TrendingHero />

      {/* CATEGORY */}
      <TrendingCategory
        selectedGenre={selectedGenre}
        onSelect={setSelectedGenre}
      />

      {/* LIST */}
      <TrendingList selectedGenre={selectedGenre} />
    </div>
  );
};

export default Trending;
