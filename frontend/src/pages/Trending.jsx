import React, { useState } from "react";

import TrendingHero from "../components/Trending/trendinghero";
import TrendingCategory from "../components/Trending/trendingcategory";
import TrendingList from "../components/Trending/trendinglist";

const Trending = () => {
  const [selectedGenre, setSelectedGenre] = useState("Punjabi");

  return (
    <div className="bg-[#111] text-white">
      {/* HERO */}
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
