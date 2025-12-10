const AboutSection3 = () => {
    return (
      <section className="w-full bg-[#0d0d0d] py-12 overflow-hidden">
  
        <style>{`
          @keyframes marqueeLeft {
            0%   { transform: translateX(0); }
            100% { transform: translateX(-33.33%); }
          }
  
          @keyframes marqueeRight {
            0%   { transform: translateX(-33.33%); }
            100% { transform: translateX(0); }
          }
  
          .marquee-track {
            width: 300%;
            display: flex;
          }
  
          .marquee-left {
            animation: marqueeLeft 15s linear infinite;
          }
  
          .marquee-right {
            animation: marqueeRight 15s linear infinite;
          }
  
          /* Smaller gap after bullet + tighter text look */
          .marquee-text {
            letter-spacing: -0.5px;      /* Slim text width */
            padding-right: 2rem;         /* Smaller gap (was too large before) */
          }
        `}</style>
  
        {/* LINE 1 — RIGHT → LEFT */}
        <div className="overflow-hidden whitespace-nowrap">
          <div className="marquee-track marquee-left">
  
            <span className="marquee-text text-white text-3xl sm:text-4xl font-extrabold">
              People All Over The World Trusted By Over 300M+ •
            </span>
            <span className="marquee-text text-white text-3xl sm:text-4xl font-extrabold">
              People All Over The World Trusted By Over 300M+ •
            </span>
            <span className="marquee-text text-white text-3xl sm:text-4xl font-extrabold">
              People All Over The World Trusted By Over 300M+ •
            </span>
  
          </div>
        </div>
  
        {/* LINE 2 — LEFT → RIGHT */}
        <div className="overflow-hidden whitespace-nowrap mt-6">
          <div className="marquee-track marquee-right">
  
            <span className="marquee-text text-white text-3xl sm:text-4xl font-extrabold">
              People All Over The World Trusted By Over 300M+ •
            </span>
            <span className="marquee-text text-white text-3xl sm:text-4xl font-extrabold">
              People All Over The World Trusted By Over 300M+ •
            </span>
            <span className="marquee-text text-white text-3xl sm:text-4xl font-extrabold">
              People All Over The World Trusted By Over 300M+ •
            </span>
  
          </div>
        </div>
  
      </section>
    );
  };
  
  export default AboutSection3;
  