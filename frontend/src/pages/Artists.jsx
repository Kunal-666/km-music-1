import React from "react";

// Import all aboutpage components
import ArtistsHero from "../components/Artists/artistshero";
import ArtistsSection from "../components/Artists/artistssection";

const About = () => {
  return (
    <div className="bg-[#111] text-white">
      <ArtistsHero />
      <ArtistsSection />
    </div>
  );
};

export default About;
