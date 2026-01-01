import React from "react";
import hoverImg from "../../assets/img/genrescategory/Rectangle 59.png";

const genres = [
  
    "Culture",
    "Punjabi",
    "Haryanvi",
    "Classical",
    "Bollywood",
    "Hollywood",
    "Rock",
    "Rap",
    "Soulful",
    "Birthday"
   
];

const TrendingCategory = ({ selectedGenre, onSelect }) => {
  return (
    <section className="w-full py-16 bg-black">
      <div className="mx-auto max-w-7xl px-4">

        <div className="grid grid-cols-5 gap-6 max-lg:grid-cols-3 max-md:grid-cols-2">
          {genres.map((item) => {
            const isActive = selectedGenre === item;

            return (
              <button
                key={item}
                onClick={() => onSelect(item)}
                className="
                  group relative
                  h-[72px]
                  rounded-[6px]
                  overflow-hidden
                  border
                  transition-all
                  flex items-center justify-center
                "
              >
                {/* ✅ IMAGE — show on ACTIVE + HOVER */}
                <img
                  src={hoverImg}
                  alt=""
                  className={`
                    absolute inset-0 w-full h-full object-cover
                    transition-opacity duration-300
                    ${isActive ? "opacity-100" : "opacity-0 group-hover:opacity-100"}
                  `}
                />

                {/* ✅ GRADIENT OVERLAY */}
                <div
                  className={`
                    absolute inset-0
                    transition-opacity duration-300
                    ${
                      isActive
                        ? "bg-gradient-to-r from-[#4A78FF]/80 to-[#B83CFF]/80 opacity-100"
                        : "bg-gradient-to-r from-[#1A1A1A] to-[#0D0D0D] opacity-100 group-hover:opacity-0"
                    }
                  `}
                />

                {/* ✅ DARK OVERLAY for IMAGE */}
                <div
                  className={`
                    absolute inset-0 bg-black/40
                    transition-opacity duration-300
                    ${isActive ? "opacity-100" : "opacity-0 group-hover:opacity-100"}
                  `}
                />

                {/* TEXT */}
                <span className="relative z-10 text-white text-[20px] font-medium">
                  {item}
                </span>

                {/* BORDER */}
                <span
                  className={`
                    absolute inset-0 rounded-[6px] border
                    ${isActive ? "border-transparent" : "border-white/20 group-hover:border-white/40"}
                  `}
                />
              </button>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default TrendingCategory;
