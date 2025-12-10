import Second from "../../assets/About/second.png";

const AboutSection = () => {
  return (
    <section className="w-full bg-[#000000] px-5 sm:px-10 md:px-[60px] py-20">

      {/* MAIN CARD */}
      <div
        className="w-full bg-[#181818] rounded-[22px] 
        flex flex-col lg:flex-row overflow-hidden"
      >
        {/* LEFT SIDE CONTENT */}
        <div className="flex-1 text-white p-10 sm:p-14 lg:p-16 space-y-8">
          <h2 className="text-4xl sm:text-5xl font-semibold">Our Story</h2>

          <p className="text-white/80 text-lg leading-relaxed">
            In 2013, Stoky launched as a Tumblr blog with 10 high-resolution 
            photos that could be used for anything. Today, Stoky powers more 
            people and products than any other visual search engine in the world, 
            with more than 100 million images downloaded every month — 
            more than the rest of the industry combined.
          </p>

          <div>
            <p className="text-2xl font-semibold mb-3">
              Unlimited royalty-free downloads
            </p>

            <p className="text-white/80 text-lg leading-relaxed">
              Create with images only Stoky subscribers have access to.
              New images are added every month.
            </p>
          </div>

          <button
            className="mt-6 border border-[#246BFD] text-white rounded-full 
            px-12 py-4 text-lg hover:bg-[#246BFD] transition w-fit"
          >
            Browse Music
          </button>
        </div>

        {/* RIGHT SIDE FULL-BLEED IMAGE (NO GAP ANYWHERE) */}
        <div className="flex-1">
          <img
            src={Second}
            alt="Gallery"
            className="w-full h-full object-cover"
          />
        </div>

      </div>
    </section>
  );
};

export default AboutSection;
