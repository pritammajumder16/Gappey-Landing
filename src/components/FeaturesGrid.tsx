"use client";

import React, { useState } from "react";
import Image from "next/image";
import { 
  Mic2, 
  Gift, 
  Crown, 
  TrendingUp, 
  HeartHandshake, 
  Sparkles,
  MessageCircle,
  Share2,
  Users,
  Compass,
  CalendarCheck,
  Maximize2,
  X,
  ChevronLeft,
  ChevronRight
} from "lucide-react";

type FeatureCategory = "all" | "voice" | "levels" | "social" | "agency" | "economy";

export default function FeaturesGrid() {
  const [activeTab, setActiveTab] = useState<FeatureCategory>("all");
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);

  const features = [
    {
      category: "voice" as const,
      icon: <Mic2 className="w-6 h-6 text-purple-400" />,
      tag: "1–16 Dynamic Seats",
      title: "Custom Multi-Seat Voice Rooms",
      desc: "Switch between 1-seat solo, 2-seat duo, 4-seat podcast, 8-seat squad, and 16-seat grand party arrangements with real-time mic moderation and low latency.",
      image: "/ss2/live_room.png",
      color: "from-purple-500/20 to-indigo-500/5",
      badgeColor: "bg-purple-900/50 text-purple-300 border-purple-700/50"
    },
    {
      category: "levels" as const,
      icon: <TrendingUp className="w-6 h-6 text-cyan-400" />,
      tag: "Dual Progression",
      title: "Blue Star & Pink Star Levels",
      desc: "Dual star tier prestige: Blue Star Level rewards generous room gifters, while Pink Star Level celebrates popular room hosts and streamers.",
      image: "/ss2/Levels.png",
      color: "from-cyan-500/20 to-blue-500/5",
      badgeColor: "bg-cyan-900/50 text-cyan-300 border-cyan-700/50"
    },
    {
      category: "levels" as const,
      icon: <Crown className="w-6 h-6 text-amber-400" />,
      tag: "Prestige Club",
      title: "VIP & SVIP Exclusive Privileges",
      desc: "Unlock luxury entrance rides, custom profile frames, personalized chat bubbles, stealth room entry, and elite VIP badges.",
      image: "/ss2/VIP_SVIP.png",
      color: "from-amber-500/20 to-yellow-500/5",
      badgeColor: "bg-amber-900/50 text-amber-300 border-amber-700/50"
    },
    {
      category: "voice" as const,
      icon: <Gift className="w-6 h-6 text-pink-400" />,
      tag: "Broadcast Gifts",
      title: "Virtual Gifting & Rocket Animations",
      desc: "Send animated broadcast gifts like the Cosmic Rocket, Gajraj, and Taj Mahal with room-wide celebratory effects and lucky combo multipliers.",
      image: "/ss2/Rocket_Gift.png",
      color: "from-pink-500/20 to-rose-500/5",
      badgeColor: "bg-pink-900/50 text-pink-300 border-pink-700/50"
    },
    {
      category: "agency" as const,
      icon: <Users className="w-6 h-6 text-emerald-400" />,
      tag: "Agency, Reseller & Clans",
      title: "Agency, Coin Seller & Clan Hub",
      desc: "Direct in-app ecosystem for talent agencies, authorized coin sellers, and clan guild leaderboards accessible right from your profile.",
      image: "/ss2/Agency_Coinseller_Clans.png",
      color: "from-emerald-500/20 to-teal-500/5",
      badgeColor: "bg-emerald-900/50 text-emerald-300 border-emerald-700/50"
    },
    {
      category: "social" as const,
      icon: <HeartHandshake className="w-6 h-6 text-rose-400" />,
      tag: "CP Romantic Link",
      title: "Intimacy Bonding & Twin Frames",
      desc: "Link with your special partner via CP (Couple) intimacy, earn CP points, unlock matching romance avatar rings, and celebrate milestones.",
      image: "/ss2/Intimacy.png",
      color: "from-rose-500/20 to-pink-500/5",
      badgeColor: "bg-rose-900/50 text-rose-300 border-rose-700/50"
    },
    {
      category: "social" as const,
      icon: <Share2 className="w-6 h-6 text-blue-400" />,
      tag: "Moments Feed",
      title: "Social Moments & Community Sharing",
      desc: "Post updates, photos, party highlights, and music moments with the global Gappey community to gain followers and boost popularity.",
      image: "/ss2/Social_Moments.png",
      color: "from-blue-500/20 to-indigo-500/5",
      badgeColor: "bg-blue-900/50 text-blue-300 border-blue-700/50"
    },
    {
      category: "social" as const,
      icon: <MessageCircle className="w-6 h-6 text-violet-400" />,
      tag: "Direct Messages",
      title: "Friendship 1v1 Text & Audio Chat",
      desc: "Add friends, send private text messages, exchange photos, and invite pals directly into active voice party rooms with one tap.",
      image: "/ss2/friendship_chatting.jpg",
      color: "from-violet-500/20 to-purple-500/5",
      badgeColor: "bg-violet-900/50 text-violet-300 border-violet-700/50"
    },
    {
      category: "economy" as const,
      icon: <CalendarCheck className="w-6 h-6 text-yellow-400" />,
      tag: "Login Bonus",
      title: "Daily Rewards & Quest System",
      desc: "Earn free trial frames, rides, and bonus coins every day by checking in and completing interactive room quests.",
      image: "/ss2/Daily_login_Rewards.png",
      color: "from-yellow-500/20 to-amber-500/5",
      badgeColor: "bg-yellow-900/50 text-yellow-300 border-yellow-700/50"
    },
    {
      category: "voice" as const,
      icon: <Compass className="w-6 h-6 text-teal-400" />,
      tag: "Discovery Hub",
      title: "Explore Trending Party Rooms",
      desc: "Browse live voice rooms filtered by music, hangout, karaoke, gaming, and clan battles with real-time participant counts.",
      image: "/ss2/explore_rooms.png",
      color: "from-teal-500/20 to-cyan-500/5",
      badgeColor: "bg-teal-900/50 text-teal-300 border-teal-700/50"
    },
  ];

  const filteredFeatures = activeTab === "all" 
    ? features 
    : features.filter(f => f.category === activeTab);

  return (
    <section id="features" className="relative py-24 sm:py-32 overflow-hidden bg-gradient-to-b from-[#06060c] via-[#090815] to-[#06060c]">
      {/* Glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-purple-900/15 blur-[160px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-300 text-xs font-bold tracking-wider uppercase">
            <Sparkles className="w-3.5 h-3.5" />
            Everything Inside Gappey
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
            Built for Peak <br className="hidden sm:inline" />
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-amber-300 bg-clip-text text-transparent">
              Voice Entertainment &amp; Social Hangouts
            </span>
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
            Real in-app screens showcasing dynamic 1–16 seat arrangements, Blue &amp; Pink Star progression, Coins &amp; Diamonds economy, CP intimacy, and social moments.
          </p>

          {/* Category Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-4">
            {[
              { id: "all" as const, label: "All Features" },
              { id: "voice" as const, label: "Voice Rooms & Seats" },
              { id: "levels" as const, label: "Star Levels & VIP" },
              { id: "social" as const, label: "Intimacy & Moments" },
              { id: "agency" as const, label: "Agencies & Clans" },
              { id: "economy" as const, label: "Coins & Rewards" },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`text-xs sm:text-sm font-semibold px-4 py-2 rounded-xl transition-all duration-200 ${
                  activeTab === tab.id
                    ? "bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg shadow-purple-600/40"
                    : "bg-zinc-900/80 text-zinc-400 hover:text-white hover:bg-zinc-800 border border-white/5"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredFeatures.map((item, index) => (
            <div
              key={index}
              className="group relative rounded-3xl bg-[#0e0c1e]/80 border border-white/10 hover:border-purple-500/40 p-5 sm:p-6 flex flex-col justify-between overflow-hidden backdrop-blur-xl transition-all duration-300 hover:shadow-2xl hover:shadow-purple-950/80 hover:-translate-y-1.5"
            >
              {/* Card Gradient Background */}
              <div className={`absolute inset-0 bg-gradient-to-b ${item.color} opacity-40 group-hover:opacity-70 transition-opacity`} />

              <div className="relative z-10 space-y-3">
                <div className="flex items-center justify-between">
                  <div className="p-3 rounded-2xl bg-zinc-800/90 border border-white/10 group-hover:scale-110 transition-transform">
                    {item.icon}
                  </div>
                  <span className={`text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full border ${item.badgeColor}`}>
                    {item.tag}
                  </span>
                </div>

                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-purple-300 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-zinc-400 mt-2 leading-relaxed font-normal">
                    {item.desc}
                  </p>
                </div>
              </div>

              {/* In-Card Screen Preview Thumbnail */}
              <div 
                onClick={() => setSelectedImageIndex(index)}
                className="relative z-10 mt-5 pt-4 border-t border-white/5 cursor-pointer"
              >
                <div className="relative h-64 sm:h-72 w-full rounded-2xl overflow-hidden bg-black/60 border border-white/10 group-hover:border-purple-500/40 transition-all flex items-center justify-center">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 380px"
                    className="object-contain object-top group-hover:scale-[1.03] transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-between p-3">
                    <span className="text-xs text-white font-medium flex items-center gap-1.5">
                      <Maximize2 className="w-3.5 h-3.5 text-pink-400" /> Click to zoom
                    </span>
                  </div>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>

      {/* Fullscreen Zoom Modal for Screen Preview */}
      {selectedImageIndex !== null && (
        <div 
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-2xl flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200"
          onClick={() => setSelectedImageIndex(null)}
        >
          <div 
            className="relative max-w-4xl w-full max-h-[92vh] flex flex-col md:flex-row items-center gap-6 bg-[#110e24] border border-purple-500/40 rounded-3xl p-6 sm:p-8 shadow-2xl shadow-purple-950/90"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedImageIndex(null)}
              className="absolute top-4 right-4 w-9 h-9 rounded-full bg-zinc-800 hover:bg-zinc-700 text-zinc-300 hover:text-white flex items-center justify-center transition-colors z-20"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Image View */}
            <div className="relative w-full max-w-[280px] sm:max-w-[320px] aspect-[9/19] rounded-[32px] overflow-hidden border-2 border-white/20 shadow-2xl bg-black shrink-0">
              <Image
                src={filteredFeatures[selectedImageIndex]?.image || ""}
                alt={filteredFeatures[selectedImageIndex]?.title || ""}
                fill
                className="object-contain"
              />
            </div>

            {/* Info and Navigation */}
            <div className="flex-1 space-y-4 text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/20 text-purple-300 border border-purple-500/40 text-xs font-bold uppercase">
                <Sparkles className="w-3.5 h-3.5 text-pink-400" />
                {filteredFeatures[selectedImageIndex]?.tag}
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                {filteredFeatures[selectedImageIndex]?.title}
              </h3>

              <p className="text-zinc-300 text-sm sm:text-base leading-relaxed">
                {filteredFeatures[selectedImageIndex]?.desc}
              </p>

              <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setSelectedImageIndex((prev) => (prev !== null && prev > 0 ? prev - 1 : filteredFeatures.length - 1))}
                    className="p-2.5 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-white transition-colors"
                    aria-label="Previous"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <button
                    onClick={() => setSelectedImageIndex((prev) => (prev !== null && prev < filteredFeatures.length - 1 ? prev + 1 : 0))}
                    className="p-2.5 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-white transition-colors"
                    aria-label="Next"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                  <span className="text-xs text-zinc-400 ml-2 font-mono">
                    {selectedImageIndex + 1} / {filteredFeatures.length}
                  </span>
                </div>

                <a
                  href="#download"
                  onClick={() => setSelectedImageIndex(null)}
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
