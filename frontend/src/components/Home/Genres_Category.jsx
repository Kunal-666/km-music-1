import React from "react";
import hoverImg from "../../assets/img/genrescategory/Rectangle 59.png";

const genres = [
  "Poetry",
  "Adventure",
  "Classical",
  "Birthday",
  "Contemporary",
  "Country",
  "Documentary",
  "Fiction",
  "Cuture",
  "Hip-Hop",
  "Punjabi",
  "Haryanvi",
  "Bollywood",
  "Hollywood",
  "Rock",
  "Rap",
  "Playful",
  "Soulful",
  "Sad",
  "Gym",
];

const GenresCategory = () => {
  return (
    <section className="w-full text-white py-16">
      <div className="mx-auto max-w-[1600px] px-4 sm:px-6 md:px-10 lg:px-[60px]">

        {/* TOP TITLE BUTTON */}
        <div className="flex justify-center mb-10">
          <div className="rounded-full p-[3px] bg-gradient-to-r from-[#4A8CFF] to-[#C642FF] w-[220px] sm:w-[250px]">
            <div className="w-full rounded-full bg-black text-white text-xl sm:text-[28px] font-medium tracking-wide py-3 sm:py-4 flex items-center justify-center">
              SONG GENRES
            </div>
          </div>
        </div>

        {/* PAGE TITLE */}
        <h2 className="text-center text-3xl sm:text-4xl md:text-[44px] font-medium mb-12 tracking-wide">
          Genres Category
        </h2>

        {/* RESPONSIVE GRID */}
        <div
          className="
            grid
            grid-cols-2 
            sm:grid-cols-2 
            md:grid-cols-3 
            lg:grid-cols-5

            gap-4 sm:gap-6 md:gap-6
          "
        >
          {genres.map((item) => (
            <button
              key={item}
              className="
                group relative 
                w-full
                h-[60px] sm:h-[65px] md:h-[70px] lg:h-[75px]
                rounded-[6px]
                overflow-hidden
                border border-white/20
                bg-gradient-to-r from-[#171717] to-[#0C0C0C]
                transition-all duration-300 
                hover:border-white/50
                flex items-center justify-center
              "
            >
              {/* Default background */}
              <div
                className="
                  absolute inset-0 
                  bg-gradient-to-r from-[#171717] to-[#0C0C0C]
                  group-hover:opacity-0 
                  transition-opacity duration-300
                "
              />

              {/* Hover Background */}
              <img
                src={hoverImg}
                alt=""
                className="
                  absolute inset-0 w-full h-full object-cover
                  opacity-0 group-hover:opacity-100
                  transition-opacity duration-300
                "
              />

              {/* Dark overlay */}
              <div
                className="
                  absolute inset-0 bg-black/40
                  opacity-0 group-hover:opacity-100
                  transition-opacity duration-300
                "
              />

              {/* Text */}
              <span className="relative z-10 text-base sm:text-lg md:text-xl font-medium">
                {item}
              </span>
            </button>
          ))}
        </div>

      </div>
    </section>
  );
};

export default GenresCategory;
