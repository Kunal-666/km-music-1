import { useState, useRef } from "react";
import videoThumb from "../../assets/img/videothumb.png";
import videoFile from "../../assets/video/video1.mp4";

const Videoclip = () => {
  const videoRef = useRef(null);

  const [isPlaying, setIsPlaying] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [muted, setMuted] = useState(true);

  // START VIDEO
  const startVideo = () => {
    setIsPlaying(true);
    setIsPaused(false);

    videoRef.current.muted = true;

    setTimeout(() => {
      videoRef.current.play().catch(() => {});
    }, 50);
  };

  // PLAY / PAUSE
  const togglePlayPause = () => {
    if (!videoRef.current) return;

    if (videoRef.current.paused) {
      videoRef.current.play();
      setIsPaused(false);
    } else {
      videoRef.current.pause();
      setIsPaused(true);
    }
  };

  // MUTE TOGGLE
  const toggleMute = () => {
    videoRef.current.muted = !videoRef.current.muted;
    setMuted(!muted);
  };

  return (
    <section className="w-full py-20 text-center">
      
      {/* -------- TITLE -------- */}
      <div className="max-w-[1400px] mx-auto px-4">
        <h2 className="text-white text-4xl md:text-5xl font-bold">
          New video clip is out now
        </h2>
        <p className="text-gray-300 mt-4 max-w-2xl mx-auto">
          Our new video clip has been released. With great interest, it became
          one of the top 10 most watched videos.
        </p>
      </div>

      {/* -------- VIDEO BOX -------- */}
      <div className="max-w-[1400px] mx-auto mt-12 relative rounded-3xl overflow-hidden  px-4">

        {/* --- THUMBNAIL BEFORE PLAY --- */}
        {!isPlaying && (
          <div className="relative">
            <img
              src={videoThumb}
              className="w-full h-[550px] object-cover rounded-3xl"
              alt=""
            />

            {/* PLAY BUTTON */}
            <button
              onClick={startVideo}
              className="absolute inset-0 flex items-center justify-center"
            >
              <div className="
                w-28 h-28  backdrop-blur-xl rounded-full 
                border  shadow-lg flex items-center justify-center
                hover:scale-110 transition
              ">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-xl">
                  <svg fill="black" viewBox="0 0 24 24" className="w-10 h-10">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
              </div>
            </button>
          </div>
        )}

        {/* --- VIDEO --- */}
        {isPlaying && (
          <div className="relative">
            <video
              ref={videoRef}
              src={videoFile}
              muted={muted}
              playsInline
              className="w-full h-[550px] object-cover rounded-3xl"
            />

            {/* CENTER PAUSE/PLAY OVERLAY */}
            <button
              onClick={togglePlayPause}
              className="absolute inset-0 flex items-center justify-center group"
            >
              <div className="
                w-20 h-20 bg-black/40 backdrop-blur-xl rounded-full 
                flex items-center justify-center opacity-0 
                group-hover:opacity-100 transition
              ">
                {isPaused ? (
                  <svg fill="white" viewBox="0 0 24 24" className="w-10 h-10">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                ) : (
                  <svg fill="white" viewBox="0 0 24 24" className="w-10 h-10">
                    <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" />
                  </svg>
                )}
              </div>
            </button>

            {/* STANDARD SPEAKER ICON (BOTTOM RIGHT) */}
            <button
              onClick={toggleMute}
              className="absolute bottom-6 right-6 bg-black/40 backdrop-blur-xl p-3 rounded-full text-white hover:bg-black/60 transition"
            >
              {muted ? (
                // SPEAKER MUTE ICON
                <svg xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 24 24" className="w-6 h-6">
                  <path d="M16.5 12l4-4m-4 4l4 4m-10-6v6l-4-4H4V10h2.5l4-4v6z" stroke="white" strokeWidth="2" strokeLinecap="round" />
                </svg>
              ) : (
                // SPEAKER ICON
                <svg xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 24 24" className="w-6 h-6">
                  <path d="M14 3v18l-6-6H4V9h4l6-6z" stroke="white" strokeWidth="2" strokeLinecap="round" />
                </svg>
              )}
            </button>
          </div>
        )}

      </div>
    </section>
  );
};

export default Videoclip;
