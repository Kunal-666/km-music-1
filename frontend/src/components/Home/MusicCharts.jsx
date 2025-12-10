import React from "react";
import { FaPlay } from "react-icons/fa";

// Replace with your own images
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

const weeklySongs = [
  { img: img1, title: "Something", artist: "Ray Studio" },
  { img: img3, title: "Life Of Pie", artist: "Ray Studio" },
  { img: img5, title: "About", artist: "Ray Studio" },
  { img: img4, title: "Happy Ninja", artist: "Ray Studio" },
  { img: img2, title: "Something", artist: "Ray Studio" },
  { img: img1, title: "Manjeet Kaur", artist: "Awsome Song" },
  { img: img3, title: "Napa fashion", artist: "Awsome Song" },
  { img: img5, title: "Woo Albuu", artist: "Awsome Song" },
  { img: img4, title: "Build Musicly", artist: "Awsome Song" },
  { img: img2, title: "Manjeet Kaur", artist: "Awsome Song" },
];

const ChartCard = ({ title, songs }) => {
  return (
    <div className="bg-[#111] border border-[#3a3a3a] rounded-[22px] p-4 w-full">

      {/* Header */}
      <div className="flex justify-between items-center">
        <h2 className="text-white text-[32px] font-bold">{title}</h2>

        <button className="px-6 py-2 border border-[#3a3a3a] rounded-full text-white text-sm hover:bg-white/10 transition">
          View All
        </button>
      </div>

      {/* Divider */}
      <div className="border-b border-[#3a3a3a] mt-6 mb-6"></div>

      {/* Two Column Grid */}
      <div className="grid grid-cols-2 gap-x-10">

        {songs.map((song, index) => (
          <div key={index} className="pb-6">
            <div className="flex justify-between items-center">

              {/* Left Side */}
              <div className="flex items-center gap-4">
                <img
                  src={song.img}
                  className="w-14 h-14 rounded-[12px] object-cover"
                  alt={song.title}
                />

                <div>
                  <h3 className="text-white text-[17px] font-semibold leading-tight">
                    {song.title}
                  </h3>
                  <p className="text-[#B3B3B3] text-sm mt-1">
                    {song.artist}
                  </p>
                </div>
              </div>

              {/* Play Button */}
              <button className="w-10 h-10 rounded-full bg-[#3d3d3d] flex items-center justify-center hover:bg-[#4a4a4a] transition shadow-md">
                <FaPlay className="text-white text-sm pl-[2px]" />
              </button>
            </div>

            {/* Divider inside each column */}
            {index < songs.length - 2 && (
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
    <div className="w-full px-5 md:px-16 py-12 grid grid-cols-1 lg:grid-cols-2 gap-12">
      <ChartCard title="Monthly Top Chart" songs={monthlySongs} />
      <ChartCard title="Weekly Top Chart" songs={weeklySongs} />
    </div>
  );
};

export default MusicCharts;
