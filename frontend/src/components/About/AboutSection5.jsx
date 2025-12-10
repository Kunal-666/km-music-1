import { useState } from "react";

const faqs = [
  {
    q: "Are Music Really Free?",
    a: "Yes! All music on our platform comes with full personal usage rights...",
  },
  {
    q: "How can I support this site?",
    a: "You can support us by subscribing to a premium plan...",
  },
  {
    q: "What Kundra Music Offers?",
    a: "Kundra Music provides a huge library of high-quality tracks...",
  },
  {
    q: "How long until we deliver your first blog post?",
    a: "You will receive your first curated blog post within 24–48 hours...",
  },

  // ⭐ ADD TWO MORE FOR THIRD ROW
  {
    q: "Do you provide copyrights?",
    a: "Yes, all downloads come with license proof for safe usage.",
  },
  {
    q: "Can I use sounds on YouTube?",
    a: "Absolutely! Our sounds are safe for YouTube monetization.",
  },
];

const WeeklyTopPlaylists = () => {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className="w-full py-20 px-6 md:px-16 lg:px-24 text-white">
      
      {/* Heading */}
      <div className="flex items-center justify-between mb-10">
        <span className="px-8 py-3 rounded-full border border-[#5936FF] text-lg shadow-[0_0px_25px_rgba(89,54,255,0.45)]">
          FAQ LISTS
        </span>

        <button className="px-10 py-3 rounded-full border border-[#246BFD] hover:bg-[#246BFD] transition text-lg">
          Discover More
        </button>
      </div>

      <h2 className="text-4xl md:text-5xl font-extrabold mb-12">
        Weekly Top Playlists
      </h2>

      {/* GRID FIX — equal-height cards */}
      <div className="grid md:grid-cols-2 gap-10 items-stretch">
        {faqs.map((item, index) => (
          <div
            key={index}
            className="
              relative bg-[#181818] p-8 rounded-2xl 
              shadow-[0_20px_50px_rgba(36,107,253,0.15)]
              flex flex-col
            "
          >
            {/* Question */}
            <div
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
              className="flex items-center gap-5 cursor-pointer select-none"
            >
              <span className="text-3xl font-bold">
                {openIndex === index ? "—" : "+"}
              </span>
              <h3 className="text-xl font-semibold">{item.q}</h3>
            </div>

            {/* Smooth Answer */}
            <div
              className={`overflow-hidden transition-all duration-500 ${
                openIndex === index ? "mt-5 max-h-screen" : "max-h-0"
              }`}
            >
              <p className="text-white/70 leading-relaxed">{item.a}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WeeklyTopPlaylists;
