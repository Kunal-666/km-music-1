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
      <div className="mx-auto max-w-6xl">

        {/* TOP TITLE BUTTON */}
        <div className="flex justify-center mb-10">
          <div className="rounded-full p-[3px] bg-gradient-to-r from-[#4A8CFF] to-[#C642FF] w-[250px]">
            <div className="w-full rounded-full bg-black text-white text-[28px] font-medium tracking-wide py-4 flex items-center justify-center">
              SONG GENRES
            </div>
          </div>
        </div>

        {/* PAGE TITLE */}
        <h2 className="text-center text-[44px] font-medium mb-12 tracking-wide">
          Genres Category
        </h2>

        {/* GRID — increased card width */}
        <div className="grid grid-cols-[repeat(5,220px)] justify-between gap-y-8">

          {genres.map((item) => (
            <button
              key={item}
              className="
                group relative 
                w-[220px] 
                h-[70px]  
                rounded-[5px]
                overflow-hidden
                border border-white/20
                bg-gradient-to-r from-[#171717] to-[#0C0C0C]
                transition-all duration-300 
                hover:border-white/50
              "
            >
              {/* Default Background */}
              <div className="
                absolute inset-0 
                bg-gradient-to-r from-[#171717] to-[#0C0C0C]
                group-hover:opacity-0 
                transition-opacity duration-300
              " />

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
              <span className="relative z-10 text-[22px] font-medium">
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
