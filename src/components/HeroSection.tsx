"use client";

import React from "react";
import Image from "next/image";
import { 
  Play, 
  Download, 
  Sparkles, 
  Mic2, 
  Crown, 
  Gift, 
  Radio, 
  Zap,
} from "lucide-react";
import { APK_DOWNLOAD_URL, APP_VERSION, IOS_DOWNLOAD_URL, APK_DIRECT_DOWNLOAD, APK_FILENAME } from "@/constants/links";

function AppleIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 170 170">
      <path d="M150.37 130.25c-2.45 5.66-5.35 10.87-8.71 15.66-4.58 6.53-8.33 11.05-11.22 13.56-4.48 4.12-9.28 6.23-14.42 6.35-3.69 0-8.14-1.05-13.32-3.18-5.19-2.12-9.97-3.17-14.34-3.17-4.58 0-9.49 1.05-14.75 3.17-5.26 2.13-9.5 3.24-12.74 3.35-4.35.13-9.16-1.9-14.42-6.08-3.7-3.07-7.66-7.85-11.88-14.34-5.9-9.1-10.45-19.16-13.66-30.17-3.21-11.01-4.82-21.57-4.82-31.68 0-14.54 3.73-26.68 11.2-36.42 7.47-9.74 16.92-14.75 28.35-15.03 4.81 0 10.27 1.25 16.39 3.76 6.12 2.51 10.15 3.82 12.09 3.93 1.94-.11 6.13-1.47 12.57-4.08 6.44-2.61 11.83-3.8 16.18-3.57 11.64.67 21.03 5.09 28.17 13.26-10.28 6.24-15.31 14.88-15.09 25.92.22 8.71 3.55 16.03 10 21.96 6.45 5.93 14.15 9.4 23.1 10.41-2.22 6.56-4.66 13.15-7.31 19.78-2.65 6.63-5.23 12.63-7.74 18zM119.22 31.84c0-7.03 2.55-13.56 7.65-19.6 5.1-6.04 11.45-9.88 19.06-11.51.22 1.34.33 2.68.33 4.02 0 6.92-2.73 13.62-8.19 20.1-5.46 6.48-11.77 10.16-18.93 11.05-.11-1.34-.17-2.68-.17-4.06z" />
    </svg>
  );
}

interface HeroSectionProps {
  onOpenVideo?: () => void;
}

export default function HeroSection({ onOpenVideo }: HeroSectionProps) {
  return (
    <section id="overview" className="relative pt-28 pb-16 sm:pt-36 sm:pb-24 overflow-hidden">
      {/* Ambient background glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-purple-700/20 blur-[140px] rounded-full pointer-events-none -z-10" />
      <div className="absolute top-40 right-10 w-[450px] h-[450px] bg-pink-600/15 blur-[120px] rounded-full pointer-events-none -z-10" />
      <div className="absolute top-60 left-10 w-[450px] h-[450px] bg-cyan-600/15 blur-[120px] rounded-full pointer-events-none -z-10" />

      {/* Grid Pattern overlay */}
      <div 
        className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_40%,#000_70%,transparent_100%)] pointer-events-none -z-10" 
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Headline, Description & CTAs */}
          <div className="lg:col-span-6 space-y-6 text-center lg:text-left">
            
            {/* Top Announcement Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gradient-to-r from-purple-900/60 via-pink-900/40 to-amber-900/40 border border-purple-500/30 text-purple-200 text-xs sm:text-sm font-semibold shadow-lg shadow-purple-950/50">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-pink-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-pink-500"></span>
              </span>
              <span className="text-white font-bold">🚀 COMING SOON</span>
              <span className="text-zinc-400">|</span>
              <span className="text-amber-300">Google Play Store & App Store</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.1] text-white">
              Hang Out. Speak Up. <br />
              <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-amber-300 bg-clip-text text-transparent">
                Party Live on Gappey.
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-zinc-300 font-normal leading-relaxed max-w-xl mx-auto lg:mx-0">
              The premier real-time voice party chat room app with <strong className="text-white">customizable 1, 2, 4, 8 & 16 seat arrangements</strong>, jaw-dropping <strong className="text-pink-400">full-screen animated broadcast gifts</strong>, Dual Blue & Pink Star Levels, VIP prestige rides, Coins & Diamonds economy, and intimate CP bonding.
            </p>

            {/* Feature Pills */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2 pt-1">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-purple-950/60 border border-purple-800/40 text-xs text-purple-200 font-medium">
                <Mic2 className="w-3.5 h-3.5 text-purple-400" /> 1 / 2 / 4 / 8 / 16 Dynamic Seats
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-pink-950/60 border border-pink-800/40 text-xs text-pink-200 font-medium">
                <Gift className="w-3.5 h-3.5 text-pink-400" /> Full-Screen SVGA Gifts
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-amber-950/60 border border-amber-800/40 text-xs text-amber-200 font-medium">
                <Crown className="w-3.5 h-3.5 text-amber-400" /> Blue &amp; Pink Star Levels
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-cyan-950/60 border border-cyan-800/40 text-xs text-cyan-200 font-medium">
                <Zap className="w-3.5 h-3.5 text-cyan-400" /> Ultra-Low Latency Audio
              </span>
            </div>

            {/* CTA Buttons */}
            <div className="pt-3 flex flex-wrap items-center justify-center lg:justify-start gap-3 sm:gap-4">
              {/* Direct APK Download CTA with Version */}
              <a
                href={APK_DIRECT_DOWNLOAD}
                download={APK_FILENAME}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-5 py-3.5 rounded-2xl bg-gradient-to-r from-purple-600 via-pink-600 to-amber-500 text-white font-bold text-sm shadow-[0_0_30px_rgba(168,85,247,0.4)] hover:shadow-[0_0_40px_rgba(236,72,153,0.6)] hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 group"
              >
                <Download className="w-4 h-4 text-white group-hover:scale-110 transition-transform" />
                <span>Download APK</span>
                <span className="text-[11px] font-mono font-extrabold px-2 py-0.5 rounded-full bg-black/40 text-amber-200 border border-amber-300/40">
                  {APP_VERSION}
                </span>
                <span className="text-[10px] uppercase font-mono px-1.5 py-0.5 rounded bg-black/30 text-white/90">
                  Android
                </span>
              </a>

              {/* iOS Download Button (Coming Soon / Prepared) */}
              {IOS_DOWNLOAD_URL ? (
                <a
                  href={IOS_DOWNLOAD_URL}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-2xl bg-zinc-900/90 hover:bg-zinc-800 border border-white/20 text-white font-semibold text-sm transition-all duration-200 shadow-lg shadow-black/60 group"
                >
                  <AppleIcon className="w-4 h-4 text-white" />
                  <span>Download iOS</span>
                </a>
              ) : (
                <button
                  type="button"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-2xl bg-zinc-900/90 border border-white/10 text-zinc-300 text-sm font-semibold shadow-lg shadow-black/60 cursor-pointer hover:border-white/25 hover:text-white transition-all group"
                  onClick={() => alert("iOS build is in preparation and will be available soon!")}
                >
                  <AppleIcon className="w-4 h-4 text-zinc-300 group-hover:text-white transition-colors" />
                  <span>Download iOS</span>
                  <span className="text-[10px] uppercase font-semibold px-1.5 py-0.5 rounded bg-white/10 text-zinc-300">
                    Soon
                  </span>
                </button>
              )}

              {/* Watch Video Demo Button */}
              <a
                href="#promo-film"
                onClick={onOpenVideo}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-3.5 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/10 text-zinc-300 hover:text-white text-sm font-medium transition-all"
              >
                <Play className="w-4 h-4 text-pink-400 fill-pink-400" />
                <span>Watch Promo Film</span>
              </a>
            </div>

            {/* Trust and status metrics */}
            <div className="pt-4 grid grid-cols-3 gap-3 border-t border-white/10 max-w-lg mx-auto lg:mx-0">
              <div className="text-center lg:text-left">
                <p className="text-2xl font-black text-white">1–16 Seats</p>
                <p className="text-xs text-zinc-400">Custom Room Grids</p>
              </div>
              <div className="text-center lg:text-left">
                <p className="text-2xl font-black text-pink-400">Dual Star</p>
                <p className="text-xs text-zinc-400">Blue &amp; Pink Levels</p>
              </div>
              <div className="text-center lg:text-left">
                <p className="text-2xl font-black text-amber-300">Coins &amp; Gems</p>
                <p className="text-xs text-zinc-400">Live Virtual Economy</p>
              </div>
            </div>

          </div>

          {/* Right Column: Beautiful Blended 3D App Mockup with Floating Interactive Cards */}
          <div className="lg:col-span-6 relative flex items-center justify-center">
            
            {/* Subtle background glow circle behind mockup */}
            <div className="absolute w-[320px] sm:w-[460px] h-[320px] sm:h-[460px] rounded-full bg-gradient-to-tr from-purple-600/30 via-pink-500/20 to-cyan-500/20 blur-[80px] -z-10" />

            {/* Mockup Container with seamless blend into background */}
            <div className="relative w-full max-w-[540px] aspect-[4/3] sm:aspect-[16/12] flex items-center justify-center group">
              
              {/* The User's 3D Mockup Image */}
              <div className="relative w-full h-full rounded-3xl overflow-hidden [mask-image:radial-gradient(ellipse_95%_90%_at_50%_50%,black_60%,transparent_100%)]">
                <Image
                  src="/mockup/d7cec7bb-fafd-4c06-bc7f-ef2bb58cac7a.png"
                  alt="Gappey App Live Experience Mockup"
                  fill
                  sizes="(max-width: 768px) 100vw, 540px"
                  className="object-contain object-center scale-[1.02] group-hover:scale-[1.04] transition-transform duration-700 ease-out drop-shadow-[0_20px_50px_rgba(0,0,0,0.9)]"
                  priority
                />
              </div>

              {/* Floating Live Badge: Active Room Audio */}
              <div className="absolute -top-3 sm:top-2 left-2 sm:left-4 z-20 animate-float">
                <div className="flex items-center gap-2 px-3 py-2 rounded-2xl bg-zinc-900/90 backdrop-blur-md border border-purple-500/40 shadow-xl shadow-purple-950/80">
                  <div className="w-7 h-7 rounded-xl bg-purple-600/30 border border-purple-500/60 flex items-center justify-center text-purple-300">
                    <Radio className="w-4 h-4 text-purple-400 animate-pulse" />
                  </div>
                  <div>
                    <div className="flex items-center gap-1">
                      <span className="text-xs font-bold text-white">Live Voice Room</span>
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                    </div>
                    <p className="text-[10px] text-zinc-400">1/2/4/8/16 Seat Layouts</p>
                  </div>
                </div>
              </div>

              {/* Floating Live Badge: Dual Star Level */}
              <div className="absolute top-1/3 -right-2 sm:-right-4 z-20 animate-float-delayed">
                <div className="flex items-center gap-2.5 px-3.5 py-2 rounded-2xl bg-zinc-900/90 backdrop-blur-md border border-amber-500/40 shadow-xl shadow-amber-950/80">
                  <div className="w-7 h-7 rounded-xl bg-amber-500/20 border border-amber-500/50 flex items-center justify-center text-amber-300">
                    <Crown className="w-4 h-4 text-amber-400" />
                  </div>
                  <div>
                    <span className="text-xs font-extrabold text-amber-300">Blue &amp; Pink Stars</span>
                    <p className="text-[10px] text-zinc-400">Prestige Progression 🌟</p>
                  </div>
                </div>
              </div>

              {/* Floating Live Badge: SVIP Ride Entrance */}
              <div className="absolute -bottom-3 sm:bottom-4 left-4 sm:left-8 z-20 animate-float">
                <div className="flex items-center gap-2.5 px-3.5 py-2 rounded-2xl bg-zinc-900/90 backdrop-blur-md border border-pink-500/40 shadow-xl shadow-pink-950/80">
                  <div className="w-7 h-7 rounded-xl bg-pink-500/20 border border-pink-500/50 flex items-center justify-center text-pink-300">
                    <Sparkles className="w-4 h-4 text-pink-400" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-pink-300">SVIP Luxury Rides</span>
                    <p className="text-[10px] text-zinc-400">Royal Entry Animations</p>
                  </div>
                </div>
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
