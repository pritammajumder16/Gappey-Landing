"use client";

import React, { useRef, useState, useEffect } from "react";
import { 
  Play, 
  Pause, 
  Volume2, 
  VolumeX, 
  Sparkles, 
  Flame, 
  Mic2, 
  MessageSquare, 
  Gift, 
  Crown
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
      title: "Real-time Multi-Seat Audio",
      desc: "Instant voice synchronization with active speaker wave rings and host admin controls.",
    },
    {
      icon: <MessageSquare className="w-5 h-5 text-pink-400" />,
      title: "Custom VIP Chat Bubbles",
      desc: "Stand out in chat with neon glows, animated text bubbles, and prestige badges.",
    },
    {
      icon: <Gift className="w-5 h-5 text-amber-400" />,
      title: "Full-Screen 3D Gift Effects",
      desc: "Send legendary broadcast gifts with whole-screen SVGA animations and room alerts.",
    },
    {
      icon: <Crown className="w-5 h-5 text-cyan-400" />,
      title: "SVIP Luxury Experience",
      desc: "Supercar entrance animations, custom profile frames, and exclusive sound effects.",
    },
  ];

  return (
    <section id="live-demo" className="relative py-20 sm:py-28 overflow-hidden bg-gradient-to-b from-[#06060c] via-[#0b0a18] to-[#06060c]">
      {/* Glow Backdrops */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[500px] h-[500px] bg-purple-600/10 blur-[130px] rounded-full pointer-events-none" />
      <div className="absolute top-1/3 right-1/4 w-[400px] h-[400px] bg-pink-600/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-pink-500/10 border border-pink-500/30 text-pink-400 text-xs font-bold tracking-wide uppercase">
            <Flame className="w-3.5 h-3.5 animate-bounce" />
            Live App Experience
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
            See Gappey in <span className="bg-gradient-to-r from-pink-400 via-purple-400 to-cyan-300 bg-clip-text text-transparent">Action</span>
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
            Watch the real screen recording of Gappey. From ultra-smooth 16-seat voice parties to animated luxury gifts and custom chat bubbles.
          </p>
        </div>

        {/* Video & Features Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Phone Mockup Frame containing Video */}
          <div className="lg:col-span-6 flex justify-center">
            <div className="relative w-full max-w-[320px] sm:max-w-[340px]">
              
              {/* Outer Neon Glow around phone */}
              <div className="absolute -inset-1.5 bg-gradient-to-tr from-purple-600 via-pink-600 to-amber-500 rounded-[48px] blur-lg opacity-70 group-hover:opacity-100 transition duration-500 animate-pulse-slow" />

              {/* Smartphone Bezel Body */}
              <div className="relative bg-[#0c0a17] p-3 rounded-[46px] border border-white/20 shadow-2xl shadow-purple-950/90 overflow-hidden">
                
                {/* Dynamic Island / Speaker Pill */}
                <div className="absolute top-5 left-1/2 -translate-x-1/2 w-28 h-4 bg-black rounded-full z-30 flex items-center justify-end px-3">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#1b192e] border border-zinc-800" />
                </div>

                {/* Phone Screen Area */}
                <div className="relative aspect-[9/19.5] w-full rounded-[38px] overflow-hidden bg-black">
                  
                  <video
                    ref={videoRef}
                    src="/screenshots/document_6197079144551949903.mp4"
                    autoPlay
                    loop
                    muted={isMuted}
                    playsInline
                    className="w-full h-full object-cover"
                  />

                  {/* Top Glass Gradient Overlay */}
                  <div className="absolute top-0 inset-x-0 h-16 bg-gradient-to-b from-black/60 to-transparent pointer-events-none z-10" />

                  {/* Floating Video Overlay Controls on Hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex flex-col justify-end p-4 z-20">
                    
                    {/* Progress Slider */}
                    <input
                      type="range"
                      min={0}
                      max={duration || 100}
                      value={currentTime}
                      onChange={handleSeek}
                      className="w-full h-1 bg-white/20 rounded-lg appearance-none cursor-pointer accent-pink-500 mb-3"
                    />

                    {/* Bottom Control Bar */}
                    <div className="flex items-center justify-between text-white text-xs">
                      <div className="flex items-center gap-2">
                        <button
                          onClick={togglePlay}
                          className="w-8 h-8 rounded-full bg-white/20 hover:bg-white/30 backdrop-blur-md flex items-center justify-center transition-transform active:scale-95"
                          aria-label={isPlaying ? "Pause" : "Play"}
                        >
                          {isPlaying ? <Pause className="w-3.5 h-3.5 fill-white" /> : <Play className="w-3.5 h-3.5 fill-white ml-0.5" />}
                        </button>

                        <button
                          onClick={toggleMute}
                          className="w-8 h-8 rounded-full bg-white/20 hover:bg-white/30 backdrop-blur-md flex items-center justify-center transition-transform active:scale-95"
                          aria-label={isMuted ? "Unmute" : "Mute"}
                        >
                          {isMuted ? <VolumeX className="w-3.5 h-3.5 text-zinc-300" /> : <Volume2 className="w-3.5 h-3.5 text-pink-400" />}
                        </button>

                        <span className="font-mono text-[11px] text-zinc-300">
                          {formatTime(currentTime)} / {formatTime(duration)}
                        </span>
                      </div>

                      <div className="flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-pink-500/30 border border-pink-500/50 text-[10px] font-bold text-pink-200">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                        Live Gappey Screen
                      </div>
                    </div>
                  </div>

                </div>
              </div>

              {/* Bottom Phone Reflection Glow */}
              <div className="w-3/4 h-6 mx-auto bg-pink-500/20 blur-xl rounded-full" />
            </div>
          </div>

          {/* Right Highlights & Explanations */}
          <div className="lg:col-span-6 space-y-6">
            
            <div className="space-y-2">
              <span className="text-xs font-bold text-purple-400 uppercase tracking-wider">
                Engineered for Peak Entertainment
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                Ultra-smooth, Lag-Free Social Hangouts
              </h3>
              <p className="text-sm sm:text-base text-zinc-300 leading-relaxed">
                Experience seamless multi-mic voice communication with studio clarity. Whether you are hosting a karaoke session, organizing clan battles, or gifting your favorite creators, Gappey delivers unmatched performance.
              </p>
            </div>

            {/* Highlights Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              {highlights.map((item, index) => (
                <div
                  key={index}
                  className="p-4 rounded-2xl bg-zinc-900/60 border border-white/5 hover:border-purple-500/30 hover:bg-zinc-800/60 transition-all duration-300 space-y-2 group"
                >
                  <div className="w-10 h-10 rounded-xl bg-zinc-800/80 border border-white/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                    {item.icon}
                  </div>
                  <h4 className="text-sm font-bold text-white group-hover:text-purple-300 transition-colors">
                    {item.title}
                  </h4>
                  <p className="text-xs text-zinc-400 leading-normal">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>

            {/* Quick Action under Video */}
            <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
              <a
                href="#download"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-r from-pink-600 to-purple-600 text-white font-bold text-sm shadow-lg shadow-pink-600/30 hover:scale-[1.02] transition-transform"
              >
                <Sparkles className="w-4 h-4 text-amber-200" />
                <span>Get Early Access on Google Play</span>
              </a>

              <a
                href="/app/gappey.apk"
                download="gappey.apk"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-zinc-200 text-sm font-medium border border-zinc-700 transition-colors"
              >
                Download Test APK
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
