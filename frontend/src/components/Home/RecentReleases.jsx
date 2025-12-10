import { useRef, useEffect } from "react";
import { FaPlay, FaChevronLeft, FaChevronRight } from "react-icons/fa";

import home1 from "../../assets/img/recent_releases/home1.png";
import home2 from "../../assets/img/recent_releases/home2.png";
import home3 from "../../assets/img/recent_releases/home3.png";
import home4 from "../../assets/img/recent_releases/home4.png";
import home5 from "../../assets/img/recent_releases/home5.png";
import home6 from "../../assets/img/recent_releases/home6.png";

const RecentReleases = () => {
  const scrollRef = useRef();

  const slideLeft = () => {
    scrollRef.current.scrollBy({ left: -320, behavior: "smooth" });
  };

  const slideRight = () => {
    scrollRef.current.scrollBy({ left: 320, behavior: "smooth" });
  };

  // Auto Slide Every 3 sec
  useEffect(() => {
    const auto = setInterval(() => {
      if (scrollRef.current) {
        scrollRef.current.scrollBy({ left: 320, behavior: "smooth" });
      }
    }, 3000);

    return () => clearInterval(auto);
  }, []);

  const albums = [
    { img: home1, title: "Something", artist: "Ray Studio" },
    { img: home2, title: "M Bobby", artist: "Awsome Song" },
    { img: home3, title: "Life Of Pie", artist: "Holly Studio" },
    { img: home4, title: "Love Is Blind", artist: "Playboy" },
    { img: home5, title: "Napa Fashion", artist: "Music Go" },
    { img: home6, title: "Urban Mood", artist: "Studio One" },
  ];

  // Inline scrollbar hide style
  const hideScrollbar = {
    scrollbarWidth: "none", // Firefox
    msOverflowStyle: "none", // IE/Edge
  };

  const hideScrollbarWebkit = `
    ::-webkit-scrollbar { display: none; }
  `;

  return (
    <div className="w-full px-4 sm:px-10 overflow-hidden">

      {/* Hide Scrollbar for Chrome/Safari */}
      <style>{hideScrollbarWebkit}</style>

      {/* Header */}
      <div className="flex justify-between items-center">
        <button className="px-6 py-2 border border-purple-300 rounded-full text-white font-semibold bg-gradient-to-r from-purple-500 to-indigo-600">
          TOP ARTISTS
        </button>

        <div className="flex gap-4">
          <button
            onClick={slideLeft}
            className="w-10 h-10 flex items-center justify-center border border-purple-300 rounded-full text-white hover:bg-purple-500 transition"
          >
            <FaChevronLeft />
          </button>

          <button
            onClick={slideRight}
            className="w-10 h-10 flex items-center justify-center border border-purple-300 rounded-full text-white hover:bg-purple-500 transition"
          >
            <FaChevronRight />
          </button>
        </div>
      </div>

      <h2 className="text-white text-3xl font-bold mt-6">
        Recent Releases Albums
      </h2>

      {/* CARD SCROLLER */}
      <div
        ref={scrollRef}
        style={hideScrollbar}
        className="flex gap-6 overflow-x-scroll scroll-smooth mt-6 pb-4"
      >
        {albums.map((item, index) => (
          <div
            key={index}
            className="
              min-w-[220px] sm:min-w-[260px]
              shadow-lg 
              hover:scale-105 
              transition
            "
          >
            {/* IMAGE */}
            <div className="w-full h-[300px] overflow-hidden rounded-t-2xl">
              <img
                src={item.img}
                alt={item.title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* CONTENT BOX */}
            <div
              className="
                bg-[#3a3a3a] 
                rounded-b-2xl 
                px-4 py-4 
                flex justify-between items-center
              "
            >
              <div>
                <h3 className="text-white text-lg font-semibold">
                  {item.title}
                </h3>
                <p className="text-gray-300 text-sm">{item.artist}</p>
              </div>

              <button className="w-10 h-10 rounded-full bg-gray-500 flex items-center justify-center">
                <FaPlay size={14} className="text-white" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentReleases;
