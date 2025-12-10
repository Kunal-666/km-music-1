import React from "react";

// Import all aboutpage components
import UpcomingHero from "../components/Upcoming/upcominghero";
import UpcomingSection from "../components/Upcoming/upcomingsongs";

const Upcomingsongs = () => {
  return (
    <div className="bg-[#111] text-white">
      <UpcomingHero />
      <UpcomingSection />
    </div>
  );
};

export default Upcomingsongs;
