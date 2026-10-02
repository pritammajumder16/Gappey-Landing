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
  Zap
} from "lucide-react";

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
            <div className="pt-3 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 sm:gap-4">
              {/* Play Store Pre-Register CTA */}
              <a
                href="#download"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-6 py-3.5 rounded-2xl bg-gradient-to-r from-purple-600 via-pink-600 to-amber-500 text-white font-bold text-base shadow-[0_0_30px_rgba(168,85,247,0.4)] hover:shadow-[0_0_40px_rgba(236,72,153,0.6)] hover:scale-[1.02] active:scale-[0.98] transition-all duration-200"
              >
                <Sparkles className="w-5 h-5 text-amber-200" />
                <span>Pre-Register on Google Play</span>
              </a>

              {/* Direct APK Download CTA */}
              <a
                href="/app/gappey.apk"
                download="gappey.apk"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-5 py-3.5 rounded-2xl bg-zinc-900/90 hover:bg-zinc-800 border border-cyan-500/30 text-white font-semibold text-sm hover:border-cyan-400/60 shadow-lg shadow-black/60 transition-all duration-200 group"
              >
                <Download className="w-4 h-4 text-cyan-400 group-hover:scale-110 transition-transform" />
                <span>Direct APK Download</span>
                <span className="text-[10px] uppercase font-mono px-1.5 py-0.5 rounded bg-cyan-950 text-cyan-300 border border-cyan-800/60">
                  Android
                </span>
              </a>

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
