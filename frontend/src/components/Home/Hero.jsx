import { useState, useEffect } from "react";
import heroBg from "../../assets/hero-bg-1f34dd.png";

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: "Bring Your Music To Life",
      description:
        "DJ music, often referred to as electronic dance music (EDM), is a genre of music that is primarily created and Our Bring Your Music",
      image: heroBg,
    },
    {
      title: "Discover New Sounds",
      description:
        "Explore thousands of tracks from emerging artists and established musicians. Find your next favorite song today.",
      image: heroBg,
    },
    {
      title: "Join the Music Revolution",
      description:
        "Be part of a community that celebrates music in all its forms. Share, discover, and enjoy music together.",
      image: heroBg,
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const goToNextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const goToPrevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section
      className="
        relative w-full
        max-w-[1900px] mx-auto
        px-4 sm:px-6 md:px-12 lg:px-[60px]
        pt-32 sm:pt-36 md:pt-40
        pb-12 sm:pb-16
      "
    >
      <div
        className="
        relative overflow-hidden rounded-[25px] sm:rounded-[40px]
        h-[420px] sm:h-[500px] md:h-[620px] lg:h-[700px] xl:h-[780px] 2xl:h-[900px]
      "
      >
        <div
          className="h-full transition-transform duration-[700ms] ease-[cubic-bezier(0.65,0,0.35,1)]"
          style={{ transform: `translateY(-${currentSlide * 100}%)` }}
        >
          {slides.map((slide, index) => (
            <div key={index} className="w-full h-full relative">
              <img
                src={slide.image}
                className="absolute inset-0 w-full h-full object-cover"
                alt=""
              />

              <div className="absolute inset-0 bg-black/40"></div>

              <div className="relative z-10 h-full flex items-center">
                <div
                  className="
                    px-5 sm:px-10 md:px-16 lg:px-24 xl:px-32
                    max-w-[95%] sm:max-w-[520px] md:max-w-[600px] lg:max-w-[650px]
                    space-y-4 sm:space-y-6 md:space-y-8
                  "
                >
                  <h1
                    className="
                      text-white font-bold leading-tight
                      text-2xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl
                      max-w-[90%]
                    "
                  >
                    {slide.title}
                  </h1>

                  <p
                    className="
                      text-white/90 leading-relaxed
                      text-sm sm:text-base md:text-lg lg:text-xl
                      max-w-[85%]
                    "
                  >
                    {slide.description}
                  </p>

                  <button
                    className="
                      border-2 border-[#246BFD] text-white 
                      rounded-full
                      px-7 py-2.5
                      sm:px-10 sm:py-3
                      md:px-12 md:py-4
                      text-sm sm:text-base md:text-lg
                      hover:bg-[#246BFD] transition
                    "
                  >
                    Trending Songs
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Arrow Buttons */}
        <div
          className="
          absolute right-3 sm:right-6 md:right-8
          top-1/2 -translate-y-1/2 
          flex flex-col gap-3
          z-20
        "
        >
          <button
            onClick={goToPrevSlide}
            className="
              w-9 h-9 sm:w-10 sm:h-10 md:w-12 md:h-12
              bg-[#246BFD] rounded-full
              flex items-center justify-center shadow-lg
              hover:bg-[#1e5dd9] transition
            "
          >
            <svg width="16" height="8" viewBox="0 0 16 8">
              <path d="M2 6L8 2L14 6" stroke="white" strokeWidth="2.5" />
            </svg>
          </button>

          <button
            onClick={goToNextSlide}
            className="
              w-9 h-9 sm:w-10 sm:h-10 md:w-12 md:h-12
              bg-[rgba(84,84,84,0.8)]
              rounded-full flex items-center justify-center shadow-lg
              hover:bg-[rgba(84,84,84,1)] transition
            "
          >
            <svg width="16" height="8" viewBox="0 0 16 8">
              <path d="M2 2L8 6L14 2" stroke="white" strokeWidth="2.5" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
