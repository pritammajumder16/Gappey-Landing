"use client";

import React, { useState } from "react";
import Image from "next/image";
import { 
  ChevronLeft, 
  ChevronRight, 
  Maximize2, 
  X, 
  Sparkles, 
  Smartphone,
  Eye,
  CheckCircle2
} from "lucide-react";

export default function ScreenshotsShowcase() {
  const [selectedScreenIndex, setSelectedScreenIndex] = useState<number | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>("all");

  const screens = [
    {
      src: "/screens/voice room.png",
      title: "Live 16-Seat Voice Room",
      category: "voice",
      caption: "Interactive voice stage with animated microphones, dynamic seat switching, and audience chat.",
      tag: "Voice Party"
    },
    {
      src: "/screens/gift drawer.png",
      title: "Animated Gift Vault",
      category: "gifts",
      caption: "Rich drawer with 100+ virtual gifts, combo counters, broadcast alerts, and lucky bag draws.",
      tag: "Virtual Gifting"
    },
    {
      src: "/screens/vip.png",
      title: "VIP & SVIP Prestige Club",
      category: "vip",
      caption: "Exclusive tiered privileges including luxury rides, shiny badges, and custom profile banners.",
      tag: "VIP Privileges"
    },
    {
      src: "/screens/leaderboard.png",
      title: "Global Prestige Leaderboard",
      category: "ranking",
      caption: "Daily, weekly, and monthly rankings for Blue Level Whales and Pink Level Popular Star Hosts.",
      tag: "Hall of Fame"
    },
    {
      src: "/screens/room chats with custom bubble chat.png",
      title: "Custom VIP Chat Bubbles",
      category: "voice",
      caption: "Stand out in any party room with colorful customized neon bubbles and exclusive fonts.",
      tag: "Chat Bubbles"
    },
    {
      src: "/screens/entrance animation with badge animation.png",
      title: "Supercar Entrance & Badges",
      category: "vip",
      caption: "Arrival animations that announce your presence with visual fanfare and special sound effects.",
      tag: "Entrance Effects"
    },
    {
      src: "/screens/daily rewards.png",
      title: "Daily Spin & Check-In Rewards",
      category: "rewards",
      caption: "Claim free trial frames, luxury rides, and gold coins every single day you check in.",
      tag: "Daily Bonus"
    },
    {
      src: "/screens/profile with menu agency.png",
      title: "Creator Profile & Agency Hub",
      category: "agency",
      caption: "Manage your clan, talent agency, CP couple link, and real-time revenue analytics.",
      tag: "Agency Management"
    },
    {
      src: "/screenshots/photo_6197302650815058234_y.jpg",
      title: "In-App Live Party Room",
      category: "voice",
      caption: "Live user interactions with gifts firing and active talkers during prime-time parties.",
      tag: "Live Room"
    },
    {
      src: "/screenshots/photo_6197302650815058232_y.jpg",
      title: "Luxury SVIP Badge Suite",
      category: "vip",
      caption: "SVIP level 1 through 6 with progressively stunning golden & diamond tier ornaments.",
      tag: "SVIP Tiers"
    }
  ];

  const filteredScreens = activeCategory === "all"
    ? screens
    : screens.filter(s => s.category === activeCategory);

  return (
    <section id="screenshots" className="relative py-24 bg-gradient-to-b from-[#06060c] via-[#090815] to-[#06060c] overflow-hidden">
      {/* Glows */}
      <div className="absolute top-1/2 right-10 w-[450px] h-[450px] bg-pink-600/10 blur-[130px] rounded-full pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[450px] h-[450px] bg-purple-600/10 blur-[130px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-bold uppercase tracking-wider">
            <Smartphone className="w-3.5 h-3.5" />
            App Screen Gallery
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
            Designed for <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">Luxury & Polish</span>
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
            Take a deep look into the real user interface of Gappey. Every screen is tuned for high visual immersion and seamless navigation.
          </p>

          {/* Filter Chips */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-2">
            {[
              { id: "all", label: "All Screens" },
              { id: "voice", label: "Voice & Chat" },
              { id: "gifts", label: "Gifting Vault" },
              { id: "vip", label: "VIP & Prestige" },
              { id: "ranking", label: "Leaderboards" },
              { id: "rewards", label: "Daily Bonus" },
              { id: "agency", label: "Agency Hub" },
            ].map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`text-xs font-semibold px-3.5 py-1.5 rounded-xl transition-all duration-200 ${
                  activeCategory === cat.id
                    ? "bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-md shadow-pink-600/30"
                    : "bg-zinc-900 text-zinc-400 hover:text-white hover:bg-zinc-800 border border-white/5"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Screens Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6">
          {filteredScreens.map((screen, idx) => (
            <div
              key={idx}
              onClick={() => setSelectedScreenIndex(idx)}
              className="group relative cursor-pointer rounded-3xl bg-[#0f0e22] border border-white/10 hover:border-pink-500/50 p-2.5 sm:p-3 overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-purple-900/50 hover:-translate-y-2 flex flex-col justify-between"
            >
              {/* Image Frame */}
              <div className="relative aspect-[9/18.5] w-full rounded-2xl overflow-hidden bg-black/60">
                <Image
                  src={screen.src}
                  alt={screen.title}
                  fill
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 20vw"
                  className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                />
                
                {/* Hover overlay with zoom icon */}
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-xs">
                  <div className="w-10 h-10 rounded-full bg-pink-500/80 text-white flex items-center justify-center shadow-lg shadow-pink-500/50 scale-75 group-hover:scale-100 transition-transform">
                    <Maximize2 className="w-5 h-5" />
                  </div>
                </div>

                {/* Top Badge */}
                <div className="absolute top-2 left-2 z-10">
                  <span className="text-[9px] font-bold uppercase px-2 py-0.5 rounded-md bg-black/80 backdrop-blur-md text-pink-300 border border-pink-500/40">
                    {screen.tag}
                  </span>
                </div>
              </div>

              {/* Caption */}
              <div className="mt-2.5 px-1 space-y-0.5">
                <h3 className="text-xs sm:text-sm font-bold text-white truncate group-hover:text-pink-300 transition-colors">
                  {screen.title}
                </h3>
                <p className="text-[11px] text-zinc-400 line-clamp-1">
                  {screen.caption}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Fullscreen Zoom Modal */}
      {selectedScreenIndex !== null && (
        <div 
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-xl flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200"
          onClick={() => setSelectedScreenIndex(null)}
        >
          <div 
            className="relative max-w-4xl w-full max-h-[90vh] flex flex-col md:flex-row items-center gap-6 bg-[#110e24] border border-purple-500/40 rounded-3xl p-6 sm:p-8 shadow-2xl shadow-purple-950/90"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedScreenIndex(null)}
              className="absolute top-4 right-4 w-9 h-9 rounded-full bg-zinc-800 hover:bg-zinc-700 text-zinc-300 hover:text-white flex items-center justify-center transition-colors z-20"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Left/Main: Phone Screen View */}
            <div className="relative w-full max-w-[280px] sm:max-w-[320px] aspect-[9/19] rounded-[32px] overflow-hidden border-2 border-white/20 shadow-2xl bg-black shrink-0">
              <Image
                src={filteredScreens[selectedScreenIndex]?.src || ""}
                alt={filteredScreens[selectedScreenIndex]?.title || ""}
                fill
                className="object-contain"
              />
            </div>

            {/* Right: Screen Details & Navigation */}
            <div className="flex-1 space-y-5 text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/20 text-purple-300 border border-purple-500/40 text-xs font-bold uppercase">
                <Sparkles className="w-3 h-3 text-pink-400" />
                {filteredScreens[selectedScreenIndex]?.tag}
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                {filteredScreens[selectedScreenIndex]?.title}
              </h3>

              <p className="text-zinc-300 text-sm sm:text-base leading-relaxed">
                {filteredScreens[selectedScreenIndex]?.caption}
              </p>

              <div className="pt-2 border-t border-white/10 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setSelectedScreenIndex((prev) => (prev !== null && prev > 0 ? prev - 1 : filteredScreens.length - 1))}
                    className="p-2.5 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-white transition-colors"
                    aria-label="Previous"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <button
                    onClick={() => setSelectedScreenIndex((prev) => (prev !== null && prev < filteredScreens.length - 1 ? prev + 1 : 0))}
                    className="p-2.5 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-white transition-colors"
                    aria-label="Next"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                  <span className="text-xs text-zinc-400 ml-2 font-mono">
                    {selectedScreenIndex + 1} / {filteredScreens.length}
                  </span>
                </div>

                <a
                  href="#download"
                  onClick={() => setSelectedScreenIndex(null)}
                  className="px-4 py-2 rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 text-white text-xs font-bold hover:scale-105 transition-transform"
                >
                  Pre-Register
                </a>
              </div>
            </div>

          </div>
        </div>
      )}
    </section>
  );
}
