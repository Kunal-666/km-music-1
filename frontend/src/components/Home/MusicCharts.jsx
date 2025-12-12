import React from "react";
import { FaPlay } from "react-icons/fa";

import img1 from "../../assets/img/recent_releases/home1.png";
import img2 from "../../assets/img/recent_releases/home2.png";
import img3 from "../../assets/img/recent_releases/home3.png";
import img4 from "../../assets/img/recent_releases/home4.png";
import img5 from "../../assets/img/recent_releases/home5.png";

const monthlySongs = [
  { img: img1, title: "Something", artist: "Ray Studio" },
  { img: img3, title: "Life Of Pie", artist: "Ray Studio" },
  { img: img5, title: "About", artist: "Ray Studio" },
  { img: img4, title: "Happy Ninja", artist: "Ray Studio" },
  { img: img2, title: "Something", artist: "Ray Studio" },
  { img: img1, title: "M Bobby", artist: "Awsome Song" },
  { img: img3, title: "Napa fashion", artist: "Awsome Song" },
  { img: img5, title: "Woo Albuu", artist: "Awsome Song" },
  { img: img4, title: "Build Musicly", artist: "Awsome Song" },
  { img: img2, title: "Manjeet Kaur", artist: "Awsome Song" },
];

const weeklySongs = [...monthlySongs];

const ChartCard = ({ title, songs }) => {
  return (
    <div className="bg-[#111] border border-[#3a3a3a] rounded-[22px] p-4 w-full">

      {/* Header */}
      <div className="flex justify-between items-center">
        <h2 className="text-white text-2xl sm:text-3xl font-bold">
          {title}
        </h2>

        <button className="px-4 sm:px-6 py-2 border border-[#3a3a3a] rounded-full text-white text-sm hover:bg-white/10 transition">
          View All
        </button>
      </div>

      <div className="border-b border-[#3a3a3a] mt-6 mb-6"></div>

      {/* Responsive Columns */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-10">

        {songs.map((song, index) => (
          <div key={index} className="pb-6">
            <div className="flex justify-between items-center">

              {/* Song Info */}
              <div className="flex items-center gap-4">
                <img
                  src={song.img}
                  className="w-12 h-12 sm:w-14 sm:h-14 rounded-[12px] object-cover"
                  alt={song.title}
                />

                <div>
                  <h3 className="text-white text-sm sm:text-[17px] font-semibold leading-tight">
                    {song.title}
                  </h3>
                  <p className="text-[#B3B3B3] text-xs sm:text-sm mt-1">
                    {song.artist}
                  </p>
                </div>
              </div>

              {/* Play button */}
              <button className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-[#3d3d3d] flex items-center justify-center hover:bg-[#4a4a4a] transition shadow-md">
                <FaPlay className="text-white text-xs sm:text-sm pl-[2px]" />
              </button>
            </div>

            {/* Divider */}
            {index < songs.length - 1 && (
              <div className="border-b border-[#3a3a3a] mt-4"></div>
            )}
          </div>
        ))}

      </div>
    </div>
  );
};

const MusicCharts = () => {
  return (
    <div
      className="
        max-w-[1900px] mx-auto 
        px-4 sm:px-6 md:px-12 lg:px-[60px]
        py-12
      "
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <ChartCard title="Monthly Top Chart" songs={monthlySongs} />
        <ChartCard title="Weekly Top Chart" songs={weeklySongs} />
      </div>
    </div>
  );
};

export default MusicCharts;
