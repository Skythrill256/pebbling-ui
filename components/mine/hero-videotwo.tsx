"use client";

import { useRef, useState } from "react";
import { FaVolumeMute, FaVolumeUp } from "react-icons/fa";

export default function HeroVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isMuted, setIsMuted] = useState(true);

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(videoRef.current.muted);
    }
  };

  return (
    <div className="relative w-full">
      <div className="h-fit absolute inset-0 flex items-center justify-center mt-60">
        {/* Glowing circle effect */}
        {/* <div className="relative h-[600px] w-[600px] mt-20 rounded-full bg-purple-200/50">
          <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-purple-300/50"></div>
          <div className="absolute left-1/2 top-1/2 h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-purple-400/50"></div>
        </div> */}

        {/* Video with mute/unmute */}
       <div className="absolute h-[800px] w-[800px] left-1/6 top-1/2 -translate-x-1/2 -translate-y-1/2 transform">
          <video
            ref={videoRef}
            autoPlay
            loop
            muted={isMuted}
            playsInline
            className=" max-w-none mt-20 h-full"
          >
            
            <source src="/hero3.webm" type="video/webm" />
            Your browser does not support the video tag.
          </video>

          {/* Mute/Unmute Button */}
          <button
  onClick={toggleMute}
  className="absolute -mr-72 bottom-14 right-6 z-10 flex items-center justify-center rounded-full bg-white/80 p-3 text-purple-700 shadow-lg transition hover:scale-110 hover:bg-white"
>
  {isMuted ? (
    <FaVolumeMute size={24} />
  ) : (
    <FaVolumeUp size={24} />
  )}
</button>
        </div>
      </div>
      
    </div>
  );
}
