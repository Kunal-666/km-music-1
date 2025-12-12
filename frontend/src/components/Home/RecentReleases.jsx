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
    scrollRef.current.scrollBy({ left: -280, behavior: "smooth" });
  };

  const slideRight = () => {
    scrollRef.current.scrollBy({ left: 280, behavior: "smooth" });
  };

  // Auto slide every 3s
  useEffect(() => {
    const auto = setInterval(() => {
      if (scrollRef.current) {
        scrollRef.current.scrollBy({ left: 280, behavior: "smooth" });
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

  const hideScrollbar = {
    scrollbarWidth: "none",
    msOverflowStyle: "none",
  };

  const hideScrollbarWebkit = `
    ::-webkit-scrollbar { display: none; }
  `;

  return (
    // FULL WIDTH WRAPPER (keeps section centered on every zoom)
    <div className="w-full flex justify-center overflow-hidden">
      {/* FIXED CENTERED CONTAINER */}
      <div className="w-full max-w-[1900px] px-3 sm:px-6 md:px-10">

        <style>{hideScrollbarWebkit}</style>

        {/* HEADER */}
        <div className="flex justify-between items-center mt-4">
          <button
            className="
              px-4 sm:px-6 
              py-1.5 sm:py-2
              border border-purple-300 
              rounded-full 
              text-white font-semibold 
              text-xs sm:text-sm 
              bg-gradient-to-r from-purple-500 to-indigo-600
            "
          >
            TOP ARTISTS
          </button>

          <div className="flex gap-2 sm:gap-4">
            <button
              onClick={slideLeft}
              className="
                w-8 h-8 sm:w-10 sm:h-10 
                flex items-center justify-center 
                border border-purple-300 
                rounded-full 
                text-white 
                hover:bg-purple-500 
                transition
              "
            >
              <FaChevronLeft size={14} />
            </button>

            <button
              onClick={slideRight}
              className="
                w-8 h-8 sm:w-10 sm:h-10 
                flex items-center justify-center 
                border border-purple-300 
                rounded-full 
                text-white 
                hover:bg-purple-500 
                transition
              "
            >
              <FaChevronRight size={14} />
            </button>
          </div>
        </div>

        <h2 className="text-white text-2xl sm:text-3xl font-bold mt-6">
          Recent Releases Albums
        </h2>

        {/* CARD SCROLLER */}
        <div
          ref={scrollRef}
          style={hideScrollbar}
          className="
            flex gap-4 sm:gap-6 
            overflow-x-scroll scroll-smooth 
            mt-6 pb-4
            snap-x snap-mandatory
          "
        >
          {albums.map((item, index) => (
            <div
              key={index}
              className="
                snap-start
                shrink-0
                min-w-[160px] 
                sm:min-w-[200px]
                md:min-w-[240px]
                lg:min-w-[260px]
                shadow-lg 
                hover:scale-105 
                transition
              "
            >
              {/* IMAGE */}
              <div
                className="
                  w-full 
                  h-[180px] 
                  sm:h-[220px] 
                  md:h-[260px] 
                  lg:h-[300px] 
                  overflow-hidden 
                  rounded-t-2xl
                "
              >
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* CONTENT */}
              <div
                className="
                  bg-[#3a3a3a] 
                  rounded-b-2xl 
                  px-3 sm:px-4 
                  py-3 
                  flex justify-between items-center
                "
              >
                <div>
                  <h3 className="text-white text-sm sm:text-lg font-semibold">
                    {item.title}
                  </h3>
                  <p className="text-gray-300 text-xs sm:text-sm">
                    {item.artist}
                  </p>
                </div>

                <button
                  className="
                    w-8 h-8 sm:w-10 sm:h-10 
                    rounded-full bg-gray-500 
                    flex items-center justify-center
                  "
                >
                  <FaPlay size={12} className="text-white" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RecentReleases;
