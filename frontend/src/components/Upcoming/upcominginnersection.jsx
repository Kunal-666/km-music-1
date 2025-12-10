import React from "react";
import { useLocation } from "react-router-dom";
import { FaPlay } from "react-icons/fa";

const UpcomingInnerSection = () => {
  const { state } = useLocation();
  const song = state?.song;

  if (!song) return null;

  return (
    <section className="w-full min-h-screen bg-black px-6 lg:px-16 py-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[1.5fr_1fr] gap-10">

        {/* ================= LEFT IMAGE + PLAYER ================= */}
        <div className="bg-[#111] rounded-2xl overflow-hidden">
          <img
            src={song.img}
            alt={song.title}
            className="w-full h-[420px] object-cover"
          />

          {/* PLAYER BAR */}
          <div className="px-6 py-4 bg-[#0f0f0f] flex items-center gap-4">
            <button className="w-12 h-12 rounded-full border border-blue-500
                               flex items-center justify-center text-blue-500">
              <FaPlay />
            </button>

            <div className="flex-1">
              <div className="h-[3px] bg-gray-600 rounded-full">
                <div className="w-1/3 h-full bg-blue-500 rounded-full" />
              </div>
            </div>

            <span className="text-gray-400 text-sm">02:45</span>
          </div>
        </div>

        {/* ================= RIGHT INFO BOX ================= */}
        <div className="bg-[#111] rounded-2xl p-8 flex flex-col justify-between">

          <div>
            {/* SONG TITLE */}
            <h1 className="text-3xl font-semibold text-white mb-2">
              {song.title}
            </h1>

            {/* ARTIST */}
            <p className="text-gray-400 text-lg mb-6">
              Sung By: <span className="text-white">{song.artist}</span>
            </p>

            <div className="space-y-4 text-gray-300 text-sm">
              <div className="flex justify-between border-b border-gray-700 pb-2">
                <span>Item Type</span>
                <span>MP3</span>
              </div>

              <div className="flex justify-between border-b border-gray-700 pb-2">
                <span>Resolution</span>
                <span>4001×6001</span>
              </div>

              <div className="flex justify-between border-b border-gray-700 pb-2">
                <span>Published</span>
                <span>Oct 8, 2023</span>
              </div>

              <div className="flex justify-between border-b border-gray-700 pb-2">
                <span>Views</span>
                <span>5459</span>
              </div>

              <div className="flex justify-between">
                <span>Downloads</span>
                <span>592</span>
              </div>
            </div>
          </div>

          {/* DOWNLOAD BUTTON */}
          <button className="mt-8 w-full py-4 rounded-xl bg-blue-600
                             hover:bg-blue-700 transition text-white font-medium">
            Download Now
          </button>
        </div>

      </div>
    </section>
  );
};

export default UpcomingInnerSection;
