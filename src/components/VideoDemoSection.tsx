"use client";

import React, { useRef, useState, useEffect } from "react";
import { 
  Play, 
  Pause, 
  Volume2, 
  VolumeX, 
  Sparkles, 
  Mic2, 
  MessageSquare, 
  Gift, 
  Crown,
  Tv
} from "lucide-react";

export default function VideoDemoSection() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleTimeUpdate = () => setCurrentTime(video.currentTime);
    const handleLoadedMetadata = () => setDuration(video.duration);

    video.addEventListener("timeupdate", handleTimeUpdate);
    video.addEventListener("loadedmetadata", handleLoadedMetadata);

    return () => {
      video.removeEventListener("timeupdate", handleTimeUpdate);
      video.removeEventListener("loadedmetadata", handleLoadedMetadata);
    };
  }, []);

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  const toggleMute = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    const time = parseFloat(e.target.value);
    if (videoRef.current) {
      videoRef.current.currentTime = time;
      setCurrentTime(time);
    }
  };

  const formatTime = (timeInSec: number) => {
    const mins = Math.floor(timeInSec / 60);
    const secs = Math.floor(timeInSec % 60);
    return `${mins}:${secs < 10 ? "0" : ""}${secs}`;
  };

  const highlights = [
    {
      icon: <Mic2 className="w-5 h-5 text-purple-400" />,
      title: "1, 2, 4, 8 & 16 Dynamic Seats",
      desc: "Instant seat arrangement flexibility for 1v1 duos, 4-seat podcasts, 8-seat squads, or 16-seat grand parties.",
    },
    {
      icon: <Gift className="w-5 h-5 text-pink-400" />,
      title: "Full-Screen Broadcast Gifts",
      desc: "Send Gajraj, Cosmic Rockets, and Taj Mahal monuments with room-wide celebratory effects.",
    },
    {
      icon: <Crown className="w-5 h-5 text-amber-400" />,
      title: "Blue & Pink Star Levels",
      desc: "Dual star progression: Blue Star Level for gifters and Pink Star Level for star room hosts.",
    },
    {
      icon: <MessageSquare className="w-5 h-5 text-cyan-400" />,
      title: "Intimacy CP & Social Moments",
      desc: "Bond with CP partner matching frames, direct chatting, and sharing daily community moments.",
    },
  ];

  return (
    <section id="promo-film" className="relative py-20 sm:py-28 overflow-hidden bg-gradient-to-b from-[#06060c] via-[#0b0a18] to-[#06060c]">
      {/* Glow Backdrops */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[600px] h-[600px] bg-purple-600/10 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute top-1/3 right-1/4 w-[500px] h-[500px] bg-pink-600/10 blur-[140px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-pink-500/10 border border-pink-500/30 text-pink-400 text-xs font-bold tracking-wide uppercase">
            <Tv className="w-3.5 h-3.5" />
            Official Launch Film
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
            Watch the <span className="bg-gradient-to-r from-pink-400 via-purple-400 to-cyan-300 bg-clip-text text-transparent">Gappey Promo Video</span>
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
            Experience the excitement, voice parties, animated broadcast gifts, and social connections awaiting you in Gappey.
          </p>
        </div>

        {/* Landscape Video Showcase Card */}
        <div className="max-w-5xl mx-auto mb-16">
          <div className="relative rounded-3xl p-1 bg-gradient-to-r from-purple-600/50 via-pink-600/50 to-cyan-500/50 shadow-[0_0_50px_rgba(168,85,247,0.3)]">
            <div className="relative rounded-[22px] overflow-hidden bg-[#0a0915] border border-white/10">
              
              {/* Landscape 16:9 Video Box */}
              <div className="relative aspect-video w-full bg-black">
                <video
                  ref={videoRef}
                  src="/screenshots/document_6197079144551949903.mp4"
                  autoPlay
                  loop
                  muted={isMuted}
                  playsInline
                  className="w-full h-full object-contain bg-black"
                />

                {/* Ambient Top Glow */}
                <div className="absolute top-0 inset-x-0 h-20 bg-gradient-to-b from-black/70 to-transparent pointer-events-none z-10 flex items-center justify-between px-6 pt-2">
                  <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/10 text-xs font-semibold text-white">
                    <span className="w-2 h-2 rounded-full bg-pink-500 animate-ping" />
                    Gappey Official Promo
                  </div>
                  <span className="text-xs font-mono text-zinc-300 px-2.5 py-1 rounded-full bg-black/50 border border-white/10">
                    HD 1080p
                  </span>
                </div>

                {/* Floating Bottom Control Bar */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent flex flex-col justify-end p-4 sm:p-6 z-20">
                  
                  {/* Progress Slider */}
                  <input
                    type="range"
                    min={0}
                    max={duration || 100}
                    value={currentTime}
                    onChange={handleSeek}
                    className="w-full h-1.5 bg-white/20 rounded-lg appearance-none cursor-pointer accent-pink-500 mb-3 sm:mb-4"
                  />

                  {/* Controls */}
                  <div className="flex items-center justify-between text-white text-xs sm:text-sm">
                    <div className="flex items-center gap-3">
                      <button
                        onClick={togglePlay}
                        className="w-10 h-10 rounded-xl bg-white/20 hover:bg-white/30 backdrop-blur-md flex items-center justify-center transition-transform active:scale-95"
                        aria-label={isPlaying ? "Pause" : "Play"}
                      >
                        {isPlaying ? <Pause className="w-4 h-4 fill-white" /> : <Play className="w-4 h-4 fill-white ml-0.5" />}
                      </button>

                      <button
                        onClick={toggleMute}
                        className="w-10 h-10 rounded-xl bg-white/20 hover:bg-white/30 backdrop-blur-md flex items-center justify-center transition-transform active:scale-95"
                        aria-label={isMuted ? "Unmute" : "Mute"}
                      >
                        {isMuted ? <VolumeX className="w-4 h-4 text-zinc-300" /> : <Volume2 className="w-4 h-4 text-pink-400" />}
                      </button>

                      <span className="font-mono text-xs text-zinc-300">
                        {formatTime(currentTime)} / {formatTime(duration)}
                      </span>
                    </div>

                    <a
                      href="#download"
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold text-xs hover:scale-105 transition-transform"
                    >
                      <Sparkles className="w-3.5 h-3.5 text-amber-200" />
                      Pre-Register
                    </a>
                  </div>
                </div>

              </div>

            </div>
          </div>
        </div>

        {/* Highlights Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {highlights.map((item, index) => (
            <div
              key={index}
              className="p-5 rounded-2xl bg-zinc-900/60 border border-white/5 hover:border-purple-500/30 hover:bg-zinc-800/60 transition-all duration-300 space-y-2.5 group"
            >
              <div className="w-10 h-10 rounded-xl bg-zinc-800/80 border border-white/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                {item.icon}
              </div>
              <h4 className="text-sm font-bold text-white group-hover:text-purple-300 transition-colors">
                {item.title}
              </h4>
              <p className="text-xs text-zinc-400 leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
