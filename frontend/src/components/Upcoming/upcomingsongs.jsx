import React, { useState } from "react";
import { FaPlay } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

/* ✅ SAME IMAGE FOR ALL GENRES (LEFT SIDE ONLY ACTIVE) */
import genreBg from "../../assets/img/genrescategory/Rectangle 59.png";

/* ✅ RIGHT SIDE CARD IMAGES */
import img1 from "../../assets/img/recent_releases/home1.png";
import img2 from "../../assets/img/recent_releases/home2.png";
import img3 from "../../assets/img/recent_releases/home3.png";
import img4 from "../../assets/img/recent_releases/home4.png";
import img5 from "../../assets/img/recent_releases/home5.png";

/* ================= GENRES ================= */
const genres = ["Punjabi", "Haryanvi", "Bollywood", "Hollywood", "Rock"];

/* ================= SONG DATA ================= */
const genreSongs = {
  Punjabi: [
    { img: img1, title: "Manjeet Kaur", artist: "Awsome Song" },
    { img: img2, title: "Something", artist: "Ray Studio" },
    { img: img3, title: "M Bobby", artist: "Awsome Song" },
  ],
  Haryanvi: [
    { img: img4, title: "Desi Hood", artist: "HR Beats" },
    { img: img5, title: "Jaat Flow", artist: "Haryanvi Song" },
  ],
  Bollywood: [
    { img: img2, title: "Love Story", artist: "Bollywood Hit" },
    { img: img3, title: "Filmy Night", artist: "Movie Song" },
  ],
  Hollywood: [
    { img: img4, title: "Dark Bass", artist: "Global Music" },
    { img: img1, title: "Sky High", artist: "EDM World" },
  ],
  Rock: [
    { img: img5, title: "Fire Guitar", artist: "Rock Band" },
    { img: img3, title: "Metal Heart", artist: "Heavy Rock" },
  ],
};

const UpcomingSongs = () => {
  const [activeGenre, setActiveGenre] = useState("Punjabi");
  const navigate = useNavigate();

  return (
    <section className="w-full px-6 lg:px-16 py-16 bg-black">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[260px_1fr] gap-10">

        {/* ================= LEFT GENRE LIST ================= */}
        <div className="bg-[#111] rounded-2xl p-4 space-y-4">
          {genres.map((genre) => {
            const isActive = activeGenre === genre;

            return (
              <div
                key={genre}
                onClick={() => setActiveGenre(genre)}
                className={`relative h-[64px] rounded-xl overflow-hidden cursor-pointer
                            transition-all duration-300
                            ${isActive ? "scale-[1.02]" : ""}`}
                style={{
                  backgroundImage: isActive ? `url(${genreBg})` : "none",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                <div
                  className={`absolute inset-0 transition-all duration-300
                    ${
                      isActive
                        ? "bg-gradient-to-r from-blue-500/80 to-purple-600/80"
                        : "bg-black"
                    }`}
                />
                <div className="relative z-10 h-full flex items-center justify-center
                                text-white font-medium text-lg">
                  {genre}
                </div>
              </div>
            );
          })}
        </div>

        {/* ================= RIGHT CARDS (ONCLICK ADDED) ================= */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {genreSongs[activeGenre].map((song, index) => (
            <div
              key={index}
              onClick={() =>
                navigate("/song", {
                  state: { song },
                })
              }
              className="cursor-pointer rounded-[28px] overflow-hidden bg-[#1a1a1a]
                         hover:scale-[1.03] transition duration-300"
            >
              {/* IMAGE */}
              <div className="h-[320px]">
                <img
                  src={song.img}
                  alt={song.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* INFO BAR */}
              <div className="bg-[#6b6b6b] px-6 py-5 flex items-center justify-between">
                <div>
                  <h3 className="text-white text-lg font-semibold">
                    {song.title}
                  </h3>
                  <p className="text-white/80 text-sm">
                    {song.artist}
                  </p>
                </div>

                <button
                  onClick={(e) => e.stopPropagation()}
                  className="w-12 h-12 rounded-full bg-[#8a8a8a]
                             flex items-center justify-center
                             hover:bg-white hover:text-black transition"
                >
                  <FaPlay />
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default UpcomingSongs;
