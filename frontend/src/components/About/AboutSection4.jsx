import React, { useEffect, useRef } from "react";

import img1 from "../../assets/img/artists/img1.png";
import img2 from "../../assets/img/artists/img2.png";
import img3 from "../../assets/img/artists/img3.png";
import img4 from "../../assets/img/artists/img4.png";
import img5 from "../../assets/img/artists/img5.png";
import img6 from "../../assets/img/artists/img6.png";

const Artists = () => {
  const artistImages = [
    { img: img1, name: "M Bobby", studio: "Ray Studio" },
    { img: img2, name: "John Smith", studio: "Sky Records" },
    { img: img3, name: "Alicia R", studio: "Dream Studio" },
    { img: img4, name: "Kara V", studio: "Wave Music" },
    { img: img5, name: "Rocky D", studio: "Thunder Records" },
    { img: img6, name: "Jenny P", studio: "Silver Studio" },
  ];

  const scrollRef = useRef(null);

  /** AUTO-SLIDER **/
  useEffect(() => {
    const interval = setInterval(() => {
      if (!scrollRef.current) return;
      scrollRef.current.scrollBy({ left: 320, behavior: "smooth" });

      if (
        scrollRef.current.scrollLeft + scrollRef.current.clientWidth >=
        scrollRef.current.scrollWidth - 10
      ) {
        scrollRef.current.scrollTo({ left: 0, behavior: "smooth" });
      }
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const scroll = (dir) => {
    scrollRef.current?.scrollBy({
      left: dir === "left" ? -320 : 320,
      behavior: "smooth",
    });
  };

  return (
    <>
      <style>
        {`
          .artist-scroll::-webkit-scrollbar { display: none; }
          .artist-scroll { scrollbar-width: none; }
        `}
      </style>

      <section className="w-full py-20">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 md:px-10 relative">

          {/* Badge */}
          <div className="flex justify-center mb-6">
            <span className="px-6 py-2 rounded-full border border-purple-500 text-purple-300 font-semibold tracking-wide">
              ARTISTS
            </span>
          </div>

          {/* Heading */}
          <h2 className="text-center text-white text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-14">
            Top Kundra Music Artists
          </h2>

          {/* Left Arrow */}
          <button
            onClick={() => scroll("left")}
            className="
              absolute left-2 sm:left-4 
              top-[55%] -translate-y-1/2 
              z-20 bg-white/10 text-white p-3 sm:p-4 
              rounded-full backdrop-blur-md 
              hover:bg-white/20 transition
            "
          >
            ◀
          </button>

          {/* Right Arrow */}
          <button
            onClick={() => scroll("right")}
            className="
              absolute right-2 sm:right-4 
              top-[55%] -translate-y-1/2 
              z-20 bg-white/10 text-white p-3 sm:p-4 
              rounded-full backdrop-blur-md 
              hover:bg-white/20 transition
            "
          >
            ▶
          </button>

          {/* Slider */}
          <div
            ref={scrollRef}
            className="
              artist-scroll flex gap-6 sm:gap-8 
              overflow-x-auto scroll-smooth p-2 sm:p-4
            "
          >
            {artistImages.map((item, index) => (
              <div
                key={index}
                className="
                  relative 
                  min-w-[240px] sm:min-w-[280px] md:min-w-[320px] lg:min-w-[340px]
                  h-[360px] sm:h-[420px] md:h-[460px]
                  rounded-3xl overflow-hidden flex-shrink-0 group
                "
              >
                {/* Image */}
                <img
                  src={item.img}
                  alt={item.name}
                  className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110"
                />

                {/* Hover Overlay */}
                <div
                  className="
                    absolute inset-0 bg-gradient-to-t 
                    from-purple-800/90 via-purple-600/40 to-transparent 
                    opacity-0 group-hover:opacity-100 
                    transition-all duration-500 
                    flex flex-col items-center justify-end pb-3
                  "
                >
                  {/* Icons */}
                  <div className="flex gap-5 mb-3">

                    {/* Facebook */}
                    <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center cursor-pointer shadow-md hover:scale-110 transition">
                      <svg width="20" height="20" fill="#1877F2" viewBox="0 0 24 24">
                        <path d="M22 12C22 6.48 17.52 2 12 2S2 6.48 2 12c0 5 3.66 9.13 8.44 9.88v-6.99H8v-2.89h2.44V9.83c0-2.42 1.44-3.76 3.64-3.76 1.06 0 2.17.19 2.17.19v2.38H15.9c-1.27 0-1.67.79-1.67 1.6v1.92h2.84l-.45 2.89H14.2v6.99C18.99 21.13 22 17 22 12z"/>
                      </svg>
                    </div>

                    {/* Instagram */}
                    <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center cursor-pointer shadow-md hover:scale-110 transition">
                      <svg width="20" height="20" fill="#E4405F" viewBox="0 0 24 24">
                        <path d="M7 2C4.24 2 2 4.24 2 7v10c0 2.76 2.24 5 5 5h10c2.76 0 5-2.24 5-5V7c0-2.76-2.24-5-5-5H7zm10 2c1.65 0 3 1.35 3 3v10c0 1.65-1.35 3-3 3H7c-1.65 0-3-1.35-3-3V7c0-1.65 1.35-3 3-3h10zm-5 3.5A4.5 4.5 0 1 0 16.5 12 4.51 4.51 0 0 0 12 7.5zm0 7A2.5 2.5 0 1 1 14.5 12 2.5 2.5 0 0 1 12 14.5zm4.75-8.88a1.12 1.12 0 1 1-1.12 1.12 1.12 1.12 0 0 1 1.12-1.12z"/>
                      </svg>
                    </div>

                    {/* Twitter */}
                    <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center cursor-pointer shadow-md hover:scale-110 transition">
                      <svg width="20" height="20" fill="#1DA1F2" viewBox="0 0 24 24">
                        <path d="M22.46 6c-.77.35-1.6.58-2.46.69a4.26 4.26 0 0 0 1.88-2.36 8.59 8.59 0 0 1-2.72 1.03A4.24 4.24 0 0 0 15.5 4a4.25 4.25 0 0 0-4.15 5.23A12 12 0 0 1 3.15 5.1a4.25 4.25 0 0 0 1.32 5.67 4.2 4.2 0 0 1-1.92-.53v.05A4.25 4.25 0 0 0 6.2 14a4.28 4.28 0 0 1-1.92.07 4.25 4.25 0 0 0 3.96 2.94A8.52 8.52 0 0 1 2 19.54 12 12 0 0 0 8.29 21c7.55 0 11.68-6.26 11.68-11.68 0-.18 0-.35-.01-.53A8.18 8.18 0 0 0 22.46 6z"/>
                      </svg>
                    </div>
                  </div>

                  {/* Name */}
                  <h3 className="text-white text-xl font-bold">{item.name}</h3>
                  <p className="text-white/80 text-sm">{item.studio}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>
    </>
  );
};

export default Artists;
