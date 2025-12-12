import Second from "../../assets/About/second.png";

const AboutSection = () => {
  return (
    <section className="w-full bg-[#000000] py-16 sm:py-20">

      {/* FIX: MAX WIDTH + CENTER ALIGNMENT */}
      <div className="max-w-[1600px] mx-auto px-5 sm:px-8 md:px-12 lg:px-[60px]">

        {/* FIX: FLEX + CENTER BOTH COLUMNS */}
        <div
          className="
            w-full bg-[#181818] rounded-[22px]
            flex flex-col lg:flex-row
            overflow-hidden
            items-center
          "
        >

          {/* LEFT SIDE CONTENT — NOW PERFECTLY CENTERED */}
          <div
            className="
              flex-1 
              text-white
              p-8 sm:p-12 md:p-14 lg:p-16 
              flex flex-col justify-center
              h-full
            "
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold leading-tight">
              Our Story
            </h2>

            <p className="text-white/80 text-base sm:text-lg leading-relaxed max-w-[650px] mt-4">
              In 2013, Stoky launched as a Tumblr blog with 10 high-resolution 
              photos that could be used for anything. Today, Stoky powers more 
              people and products than any other visual search engine in the world,
              with more than 100 million images downloaded every month —
              more than the rest of the industry combined.
            </p>

            <div className="max-w-[650px] mt-6">
              <p className="text-xl sm:text-2xl font-semibold mb-2">
                Unlimited royalty-free downloads
              </p>

              <p className="text-white/80 text-base sm:text-lg leading-relaxed">
                Create with images only Stoky subscribers have access to.
                New images are added every month.
              </p>
            </div>

            <button
              className="
                mt-6 border border-[#246BFD] text-white rounded-full
                px-10 sm:px-12 py-3 sm:py-4 text-base sm:text-lg
                hover:bg-[#246BFD] transition w-fit
              "
            >
              Browse Music
            </button>
          </div>

          {/* RIGHT SIDE IMAGE */}
          <div className="flex-1 w-full h-full">
            <img
              src={Second}
              alt="Gallery"
              className="
                w-full 
                h-full 
                object-cover
              "
            />
          </div>

        </div>

      </div>
    </section>
  );
};

export default AboutSection;
