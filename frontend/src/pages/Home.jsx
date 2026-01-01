import React, { useState } from "react";

// HOME COMPONENTS
import Hero from "../components/Home/Hero";
import Artists from "../components/Home/Artists";
import Genres_Category from "../components/Home/Genres_Category";
import RecentReleases from "../components/Home/RecentReleases";
import TopWeeklyCharts from "../components/Home/TopWeeklyCharts";
import Videoclip from "../components/Home/Videoclip";
import MusicPlayer from "../components/Home/MusicPlayer";

// 🔥 SAME LIST USED AS TRENDING
import TrendingList from "../components/Trending/trendinglist";

const Home = () => {
  // ✅ DEFAULT CATEGORY (as you asked)
  const [selectedGenre, setSelectedGenre] = useState("");

  return (
    <div className="bg-[#111] text-white">
      <Hero />

      <RecentReleases />
      <TopWeeklyCharts />

      {/* GLOBAL PLAYER */}
      <MusicPlayer />

      <Artists />
      <Videoclip />

      {/* 🔥 CATEGORY (SAME AS TRENDING) */}
      <Genres_Category
        selectedGenre={selectedGenre}
        onSelect={setSelectedGenre}
      />

      {/* 🔥 SONG LIST (SAME COMPONENT AS TRENDING) */}
      <TrendingList selectedGenre={selectedGenre} />
    </div>
  );
};

export default Home;
