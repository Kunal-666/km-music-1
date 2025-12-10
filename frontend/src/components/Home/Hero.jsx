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
    <section className="relative w-full px-5 sm:px-10 md:px-[60px] pt-40 pb-16">
      <div className="relative overflow-hidden rounded-[30px] sm:rounded-[40px] 
        h-[450px] sm:h-[520px] md:h-[650px] lg:h-[700px] xl:h-[750px]">

        {/* Slides container */}
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

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/30"></div>

              {/* Text Content */}
              <div className="relative z-10 h-full flex items-center px-6 sm:px-10 md:px-20">
                <div className="max-w-[480px] space-y-5 sm:space-y-7">
                  <h1 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight">
                    {slide.title}
                  </h1>

                  <p className="text-white/90 text-base sm:text-lg leading-relaxed">
                    {slide.description}
                  </p>

                  <button className="border-2 border-[#246BFD] text-white 
                    rounded-full px-8 py-3 sm:px-10 sm:py-4 
                    text-base sm:text-lg hover:bg-[#246BFD] transition">
                    Trending Songs
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Side Arrow Buttons */}
        <div className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 
          flex flex-col gap-3 z-20">

          <button
            onClick={goToPrevSlide}
            className="w-10 h-10 sm:w-12 sm:h-12 bg-[#246BFD] 
              rounded-full flex items-center justify-center shadow-lg 
              hover:bg-[#1e5dd9] transition"
          >
            <svg width="16" height="8" viewBox="0 0 16 8">
              <path d="M2 6L8 2L14 6" stroke="white" strokeWidth="2.5" />
            </svg>
          </button>

          <button
            onClick={goToNextSlide}
            className="w-10 h-10 sm:w-12 sm:h-12 bg-[rgba(84,84,84,0.8)] 
              rounded-full flex items-center justify-center shadow-lg 
              hover:bg-[rgba(84,84,84,1)] transition"
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
