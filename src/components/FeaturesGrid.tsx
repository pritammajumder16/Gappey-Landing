"use client";

import React, { useState } from "react";
import Image from "next/image";
import { 
  Mic2, 
  Gift, 
  Crown, 
  TrendingUp, 
  Coins, 
  HeartHandshake, 
  Sparkles
} from "lucide-react";

type FeatureCategory = "all" | "voice" | "gifting" | "vip" | "economy";

export default function FeaturesGrid() {
  const [activeTab, setActiveTab] = useState<FeatureCategory>("all");

  const features = [
    {
      category: "voice" as const,
      icon: <Mic2 className="w-6 h-6 text-purple-400" />,
      tag: "Live Audio",
      title: "16 Dynamic Voice Seats",
      desc: "Instant low-latency voice rooms with dynamic seat switching (1–16 seats), host moderation locks, mute controls, and synchronized room music.",
      image: "/screens/voice room.png",
      color: "from-purple-500/20 to-indigo-500/5",
      badgeColor: "bg-purple-900/50 text-purple-300 border-purple-700/50"
    },
    {
      category: "gifting" as const,
      icon: <Gift className="w-6 h-6 text-pink-400" />,
      tag: "Luxury SVGA",
      title: "Full-Screen Broadcast Gifts",
      desc: "Trigger breathtaking whole-screen animations for all room participants with Aurum Dragons, Supercars, Big Bang explosions, and Taj Mahal monuments.",
      image: "/screens/gift drawer.png",
      color: "from-pink-500/20 to-rose-500/5",
      badgeColor: "bg-pink-900/50 text-pink-300 border-pink-700/50"
    },
    {
      category: "vip" as const,
      icon: <Crown className="w-6 h-6 text-amber-400" />,
      tag: "Prestige Status",
      title: "VIP & SVIP Luxury Tiers",
      desc: "Unlock prestige entrance car rides, luxury profile frames, customized colorful chat bubbles, stealth entry, and dedicated account managers.",
      image: "/screens/vip.png",
      color: "from-amber-500/20 to-yellow-500/5",
      badgeColor: "bg-amber-900/50 text-amber-300 border-amber-700/50"
    },
    {
      category: "vip" as const,
      icon: <TrendingUp className="w-6 h-6 text-cyan-400" />,
      tag: "Dual Progression",
      title: "Blue Whale & Pink Star Levels",
      desc: "Dual rank system: Blue Level rewards generous gifters with spending power, while Pink Level celebrates star creators and room popularity.",
      image: "/screens/leaderboard.png",
      color: "from-cyan-500/20 to-blue-500/5",
      badgeColor: "bg-cyan-900/50 text-cyan-300 border-cyan-700/50"
    },
    {
      category: "economy" as const,
      icon: <Coins className="w-6 h-6 text-emerald-400" />,
      tag: "4-Currency System",
      title: "Gold, Silver, Diamonds & R-Coins",
      desc: "Robust social economy with in-app wallet, instant gift conversions, agency revenue splits, host cashouts, and coin reseller merchant tools.",
      image: "/screens/daily rewards.png",
      color: "from-emerald-500/20 to-teal-500/5",
      badgeColor: "bg-emerald-900/50 text-emerald-300 border-emerald-700/50"
    },
    {
      category: "voice" as const,
      icon: <HeartHandshake className="w-6 h-6 text-rose-400" />,
      tag: "Social Connection",
      title: "CP Link, Clans & Agency Dashboard",
      desc: "Pair with your favorite person via CP (Couple) link with twin frames, form clans for global leaderboard battles, or run your own talent agency.",
      image: "/screens/profile with menu agency.png",
      color: "from-rose-500/20 to-pink-500/5",
      badgeColor: "bg-rose-900/50 text-rose-300 border-rose-700/50"
    },
  ];

  const filteredFeatures = activeTab === "all" 
    ? features 
    : features.filter(f => f.category === activeTab);

  return (
    <section id="features" className="relative py-24 sm:py-32 overflow-hidden">
      {/* Glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-purple-900/15 blur-[150px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-300 text-xs font-bold tracking-wider uppercase">
            <Sparkles className="w-3.5 h-3.5" />
            Built for Peak Social Entertainment
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
            Everything You Need for a <br className="hidden sm:inline" />
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-amber-300 bg-clip-text text-transparent">
              World-Class Voice Party
            </span>
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
            Engineered from the ground up for low latency, stunning graphics, and deep monetization.
          </p>

          {/* Category Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-4">
            {[
              { id: "all" as const, label: "All Features" },
              { id: "voice" as const, label: "Voice Rooms" },
              { id: "gifting" as const, label: "Animated Gifts" },
              { id: "vip" as const, label: "VIP Prestige & Levels" },
              { id: "economy" as const, label: "Economy & Agency" },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`text-xs sm:text-sm font-semibold px-4 py-2 rounded-xl transition-all duration-200 ${
                  activeTab === tab.id
                    ? "bg-purple-600 text-white shadow-lg shadow-purple-600/40"
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
              className="group relative rounded-3xl bg-[#0e0c1e]/70 border border-white/10 hover:border-purple-500/40 p-6 flex flex-col justify-between overflow-hidden backdrop-blur-xl transition-all duration-300 hover:shadow-2xl hover:shadow-purple-950/80 hover:-translate-y-1.5"
            >
              {/* Card Gradient Background */}
              <div className={`absolute inset-0 bg-gradient-to-b ${item.color} opacity-40 group-hover:opacity-70 transition-opacity`} />

              <div className="relative z-10 space-y-4">
                <div className="flex items-center justify-between">
                  <div className="p-3 rounded-2xl bg-zinc-800/90 border border-white/10 group-hover:scale-110 transition-transform">
                    {item.icon}
                  </div>
                  <span className={`text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full border ${item.badgeColor}`}>
                    {item.tag}
                  </span>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-white group-hover:text-purple-300 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-zinc-400 mt-2 leading-relaxed font-normal">
                    {item.desc}
                  </p>
                </div>
              </div>

              {/* In-Card Screen Preview Thumbnail */}
              <div className="relative z-10 mt-6 pt-4 border-t border-white/5">
                <div className="relative h-44 w-full rounded-2xl overflow-hidden bg-black/40 border border-white/5 group-hover:border-purple-500/30 transition-colors">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 380px"
                    className="object-cover object-top scale-100 group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  <div className="absolute bottom-2.5 left-3 flex items-center gap-1.5 text-[11px] font-semibold text-zinc-200">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                    In-App Screen Preview
                  </div>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
