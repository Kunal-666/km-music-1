import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

// Images
import img1 from "../../assets/img/artists/img1.png";
import img2 from "../../assets/img/artists/img2.png";
import img3 from "../../assets/img/artists/img3.png";
import img4 from "../../assets/img/artists/img4.png";
import img5 from "../../assets/img/artists/img5.png";
import img6 from "../../assets/img/artists/img6.png";

/* ================= ARTISTS DATA ================= */
const artists = [
  {
    img: img1,
    name: "M Bobby",
    studio: "Ray Studio",
    bio:
      "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in classical Latin literature.",
  },
  {
    img: img2,
    name: "John Smith",
    studio: "Sky Records",
    bio: "John Smith is a global music artist with millions of listeners.",
  },
  {
    img: img3,
    name: "Alicia R",
    studio: "Dream Studio",
    bio: "Alicia creates soulful emotional tracks loved worldwide.",
  },
  {
    img: img4,
    name: "Kara V",
    studio: "Wave Music",
    bio: "Kara V is known for wave-style electronic music.",
  },
  {
    img: img5,
    name: "Rocky D",
    studio: "Thunder Records",
    bio: "Rocky brings thunder to the stage with high energy.",
  },
  {
    img: img6,
    name: "Jenny P",
    studio: "Silver Studio",
    bio: "Jenny P is a silver-voice artist.",
  },
];

const ITEMS_PER_PAGE = 8;

const Artists = () => {
  const [page, setPage] = useState(1);
  const navigate = useNavigate();

  const totalPages = Math.ceil(artists.length / ITEMS_PER_PAGE);
  const startIndex = (page - 1) * ITEMS_PER_PAGE;
  const currentItems = artists.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  return (
    <section className="bg-black py-20">
      <div className="max-w-7xl mx-auto px-6">

        {/* ================= GRID ================= */}
        <div className="grid grid-cols-4 gap-10 max-lg:grid-cols-2 max-sm:grid-cols-1">
          {currentItems.map((artist, index) => (
            <div
              key={index}
              onClick={() =>
                navigate(`/artist/${encodeURIComponent(artist.name)}`, {
                  state: { artist },
                })
              }
              className="relative h-[460px] rounded-3xl overflow-hidden cursor-pointer group"
            >
              {/* IMAGE */}
              <img
                src={artist.img}
                alt={artist.name}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />

              {/* OVERLAY */}
              <div className="absolute inset-0 bg-gradient-to-t from-purple-800/90 via-purple-600/40 to-transparent opacity-0 group-hover:opacity-100 transition flex flex-col justify-end items-center pb-6">
                <h3 className="text-white text-xl font-bold">
                  {artist.name}
                </h3>
                <p className="text-white/80 text-sm">
                  {artist.studio}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* ================= PAGINATION ================= */}
        {totalPages > 1 && (
          <div className="flex justify-center gap-6 mt-16">
            <button
              onClick={() => setPage((p) => Math.max(p - 1, 1))}
              disabled={page === 1}
              className="px-6 py-2 border border-white/30 rounded-full disabled:opacity-40"
            >
              Prev
            </button>

            <button
              onClick={() => setPage((p) => Math.min(p + 1, totalPages))}
              disabled={page === totalPages}
              className="px-6 py-2 border border-white/30 rounded-full disabled:opacity-40"
            >
              Next
            </button>
          </div>
        )}

      </div>
    </section>
  );
};

export default Artists;
