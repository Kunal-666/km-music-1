import React from "react";

// Import all homepage components
import Hero from "../components/Home/Hero";
import Artists from "../components/Home/Artists";
import Genres_Category from "../components/Home/Genres_Category";
import MusicCharts from "../components/Home/MusicCharts";
import MusicPlayer from "../components/Home/MusicPlayer";
import RecentReleases from "../components/Home/RecentReleases";
import TopWeeklyCharts from "../components/Home/TopWeeklyCharts";
import Videoclip from "../components/Home/Videoclip";

const Home = () => {
  return (
    <div className="bg-[#111] text-white">
      <Hero />
      <RecentReleases />
      <MusicCharts />
      <TopWeeklyCharts />
      <MusicPlayer />
      <Artists />
      <Videoclip />
      <Genres_Category />
    </div>
  );
};

export default Home;
