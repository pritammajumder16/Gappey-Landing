"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Download,
  Sparkles,
  Mic2,
  Crown,
  Gift,
  Radio,
  Heart,
  Coins,
} from "lucide-react";
import { APP_VERSION } from "@/constants/links";

interface HeroSectionProps {
  onScrollToDownload?: () => void;
}

export default function HeroSection({ onScrollToDownload }: HeroSectionProps) {
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
          {/* Left Column: Headline, Description & Single CTA */}
          <div className="lg:col-span-6 space-y-6 text-center lg:text-left">
            {/* Top Announcement Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gradient-to-r from-purple-900/60 via-pink-900/40 to-amber-900/40 border border-purple-500/30 text-purple-200 text-xs sm:text-sm font-semibold shadow-lg shadow-purple-950/50">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="text-white font-bold">OFFICIAL RELEASE</span>
              <span className="text-zinc-400">|</span>
              <span className="text-amber-300 font-mono">{APP_VERSION} for Android</span>
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
              India&apos;s premier real-time voice party app for{" "}
              <strong className="text-white">dating, meeting friends &amp; live audio hangouts</strong>.
              Join <strong className="text-purple-400">dynamic 1–16 seat audio rooms</strong>,
              find your girlfriend, boyfriend or life partner, send vibrant <strong className="text-pink-400">animated broadcast gifts</strong>,
              and earn <strong className="text-emerald-400">real creator rewards as a live audio host</strong>.
            </p>

            {/* Feature Pills */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2 pt-1">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-rose-950/60 border border-rose-800/40 text-xs text-rose-200 font-medium">
                <Heart className="w-3.5 h-3.5 text-rose-400" /> Dating &amp; CP Romance
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-emerald-950/60 border border-emerald-800/40 text-xs text-emerald-200 font-medium">
                <Sparkles className="w-3.5 h-3.5 text-emerald-400" /> Host Earning App
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-purple-950/60 border border-purple-800/40 text-xs text-purple-200 font-medium">
                <Mic2 className="w-3.5 h-3.5 text-purple-400" /> 1–16 Dynamic Seats
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-pink-950/60 border border-pink-800/40 text-xs text-pink-200 font-medium">
                <Gift className="w-3.5 h-3.5 text-pink-400" /> Full-Screen Gifts
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-amber-950/60 border border-amber-800/40 text-xs text-amber-200 font-medium">
                <Crown className="w-3.5 h-3.5 text-amber-400" /> Blue &amp; Pink Stars
              </span>
            </div>

            {/* Action CTAs */}
            <div className="pt-3 flex flex-wrap items-center justify-center lg:justify-start gap-3 sm:gap-4">
              <Link
                href="/download-android"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-4 rounded-2xl bg-gradient-to-r from-purple-600 via-pink-600 to-amber-500 text-white font-bold text-base shadow-[0_0_30px_rgba(168,85,247,0.4)] hover:shadow-[0_0_40px_rgba(236,72,153,0.6)] hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 group"
              >
                <Download className="w-5 h-5 text-white group-hover:scale-110 transition-transform" />
                <span>Download for Android (APK)</span>
                <span className="text-xs font-mono font-extrabold px-2 py-0.5 rounded-full bg-black/40 text-amber-200 border border-amber-300/40">
                  {APP_VERSION}
                </span>
              </Link>
              <Link
                href="/recharge"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-4 rounded-2xl bg-amber-400/10 hover:bg-amber-400/20 border border-amber-400/30 text-amber-300 font-bold text-base hover:scale-[1.02] active:scale-[0.98] transition-all duration-200"
              >
                <Coins className="w-5 h-5 text-amber-400" />
                <span>Top-Up Coins Online</span>
              </Link>
            </div>

            {/* Metrics */}
            <div className="pt-4 grid grid-cols-3 gap-3 border-t border-white/10 max-w-lg mx-auto lg:mx-0">
              <div className="text-center lg:text-left">
                <p className="text-2xl font-black text-white">1–16 Seats</p>
                <p className="text-xs text-zinc-400">Custom Audio Layouts</p>
              </div>
              <div className="text-center lg:text-left">
                <p className="text-2xl font-black text-pink-400">Dual Star</p>
                <p className="text-xs text-zinc-400">Blue &amp; Pink Levels</p>
              </div>
              <div className="text-center lg:text-left">
                <p className="text-2xl font-black text-amber-300">Live Economy</p>
                <p className="text-xs text-zinc-400">Coins &amp; Diamonds</p>
              </div>
            </div>
          </div>

          {/* Right Column: 3D App Mockup with Floating Badges */}
          <div className="lg:col-span-6 relative flex items-center justify-center">
            {/* Subtle background glow circle behind mockup */}
            <div className="absolute w-[320px] sm:w-[460px] h-[320px] sm:h-[460px] rounded-full bg-gradient-to-tr from-purple-600/30 via-pink-500/20 to-cyan-500/20 blur-[80px] -z-10" />

            {/* Mockup Container */}
            <div className="relative w-full max-w-[540px] aspect-[4/3] sm:aspect-[16/12] flex items-center justify-center group">
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
                    <p className="text-[10px] text-zinc-400">1–16 Seat Layouts</p>
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
                    <p className="text-[10px] text-zinc-400">Dual Progression 🌟</p>
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
