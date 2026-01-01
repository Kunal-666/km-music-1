import React from "react";

/* ✅ YOUTUBE ID FUNCTION */


const UpcomingInnerSection = ({ song }) => {
  if (!song) return null;

  return (
    <section className="max-w-7xl mx-auto py-16 grid grid-cols-1 lg:grid-cols-2 gap-10">

      {/* VIDEO */}
      <div className="rounded-2xl overflow-hidden">
        <iframe
          width="100%"
          height="420"
          src={song.videoUrl}
          title={song.title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>

      {/* INFO */}
      <div className="bg-[#111] rounded-2xl p-8 text-white">
        <h1 className="text-2xl font-bold mb-4">{song.title}</h1>

        <p className="text-sm text-gray-400 mb-2">
          Song by: {song.sungBy?.name}
        </p>

        <p className="text-sm text-gray-400 mb-2">
          Category: {song.category}
        </p>

        <p className="text-sm text-gray-400 mb-6">
          Published: {song.createdAt?.slice(0, 10)}
        </p>

        <p className="text-gray-300 leading-relaxed">
          {song.description}
        </p>
      </div>
    </section>
  );
};


export default UpcomingInnerSection;
