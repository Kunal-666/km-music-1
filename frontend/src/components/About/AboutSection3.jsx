const AboutSection3 = () => {
  return (
    <section className="w-full bg-[#0d0d0d] py-12 overflow-hidden">

      <style>{`
        @keyframes marqueeLeft {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.33%); }
        }

        @keyframes marqueeRight {
          0% { transform: translateX(-33.33%); }
          100% { transform: translateX(0); }
        }

        .marquee-track {
          width: 300%;
          display: flex;
          justify-content: center; /* center inside track */
          align-items: center;
        }

        .marquee-left {
          animation: marqueeLeft 15s linear infinite;
        }

        .marquee-right {
          animation: marqueeRight 15s linear infinite;
        }

        .marquee-text {
          letter-spacing: -0.5px;
          padding-right: 2.5rem;
        }
      `}</style>

      {/* CONTAINER FIX — ADDED */}
      <div className="max-w-[1900px] mx-auto ">

        {/* LINE 1 — RIGHT → LEFT */}
        <div className="overflow-hidden whitespace-nowrap">
          <div className="marquee-track marquee-left">
            {[1, 2, 3, 4, 5].map((n) => (
              <span
                key={n}
                className="marquee-text text-white text-3xl sm:text-4xl font-extrabold"
              >
                People All Over The World Trusted By Over 300M+ •
              </span>
            ))}
          </div>
        </div>

        {/* LINE 2 — LEFT → RIGHT */}
        <div className="overflow-hidden whitespace-nowrap mt-6">
          <div className="marquee-track marquee-right">
            {[1, 2, 3, 4, 5].map((n) => (
              <span
                key={n}
                className="marquee-text text-white text-3xl sm:text-4xl font-extrabold"
              >
                People All Over The World Trusted By Over 300M+ •
              </span>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default AboutSection3;
