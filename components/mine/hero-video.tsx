"use client";

export default function HeroVideo() {
  return (
    <div className="relative h-screen w-full">
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="relative h-[600px] w-[600px] rounded-full bg-purple-200/50">
          <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-purple-300/50"></div>
          <div className="absolute left-1/2 top-1/2 h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-purple-400/50"></div>
        </div>

        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform">
          <img
            src="/hero.gif"
            alt="Hero Animation"
            className="w-[800px] max-w-none"
          />
        </div>
      </div>
    </div>
  );
}
