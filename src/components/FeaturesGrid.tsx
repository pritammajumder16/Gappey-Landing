"use client";

import React, { useState } from "react";
import {
  Mic2,
  LayoutGrid,
  Gift,
  Crown,
  HeartHandshake,
  Gamepad2,
  ShieldAlert,
  Users,
  Share2,
  Sparkles,
  Zap,
  Award,
} from "lucide-react";

type FeatureCategory = "all" | "voice" | "social" | "economy" | "games";

interface FeatureItem {
  category: FeatureCategory;
  icon: React.ReactNode;
  tag: string;
  title: string;
  desc: string;
  color: string;
  badgeColor: string;
}

export default function FeaturesGrid() {
  const [activeTab, setActiveTab] = useState<FeatureCategory>("all");

  const features: FeatureItem[] = [
    {
      category: "voice",
      icon: <Mic2 className="w-6 h-6 text-purple-400" />,
      tag: "Live Audio",
      title: "Real-Time Voice Party Rooms",
      desc: "Crystal-clear, ultra-low latency multi-user voice rooms with host controls, background music, and instant mute tools.",
      color: "from-purple-500/20 to-indigo-500/5",
      badgeColor: "bg-purple-900/50 text-purple-300 border-purple-700/50",
    },
    {
      category: "voice",
      icon: <LayoutGrid className="w-6 h-6 text-cyan-400" />,
      tag: "1–16 Seats",
      title: "Dynamic Multi-Seat Layouts",
      desc: "Switch between 1-seat solo, 2-seat duo, 4-seat podcast, 8-seat squad, and 16-seat grand party arrangements on the fly.",
      color: "from-cyan-500/20 to-blue-500/5",
      badgeColor: "bg-cyan-900/50 text-cyan-300 border-cyan-700/50",
    },
    {
      category: "economy",
      icon: <Gift className="w-6 h-6 text-pink-400" />,
      tag: "Broadcast Gifts",
      title: "Animated Virtual Gifting",
      desc: "Send full-screen broadcast gifts with dynamic animations, combo multipliers, and room-wide celebratory banners.",
      color: "from-pink-500/20 to-rose-500/5",
      badgeColor: "bg-pink-900/50 text-pink-300 border-pink-700/50",
    },
    {
      category: "social",
      icon: <Award className="w-6 h-6 text-amber-400" />,
      tag: "Dual Progression",
      title: "Blue & Pink Star Levels",
      desc: "Blue Star Levels celebrate generous gifters, while Pink Star Levels showcase top broadcasters and room streamers.",
      color: "from-amber-500/20 to-yellow-500/5",
      badgeColor: "bg-amber-900/50 text-amber-300 border-amber-700/50",
    },
    {
      category: "social",
      icon: <HeartHandshake className="w-6 h-6 text-rose-400" />,
      tag: "CP Romance",
      title: "Couple Intimacy & Twin Badges",
      desc: "Pair with your favorite partner via CP intimacy rings, earn shared bonding points, and display matching romance frames.",
      color: "from-rose-500/20 to-pink-500/5",
      badgeColor: "bg-rose-900/50 text-rose-300 border-rose-700/50",
    },
    {
      category: "games",
      icon: <Gamepad2 className="w-6 h-6 text-emerald-400" />,
      tag: "Free Entertainment",
      title: "In-Room Table Mini-Games",
      desc: "Play fun social table games like Greedy, Teen Patti, and Ludo using free Silver tokens with zero real-money cashout.",
      color: "from-emerald-500/20 to-teal-500/5",
      badgeColor: "bg-emerald-900/50 text-emerald-300 border-emerald-700/50",
    },
    {
      category: "social",
      icon: <Users className="w-6 h-6 text-indigo-400" />,
      tag: "Community",
      title: "Clans & Clan Leaderboards",
      desc: "Create or join powerful community clans, compete in weekly ranking seasons, and earn exclusive guild prestige badges.",
      color: "from-indigo-500/20 to-violet-500/5",
      badgeColor: "bg-indigo-900/50 text-indigo-300 border-indigo-700/50",
    },
    {
      category: "economy",
      icon: <Crown className="w-6 h-6 text-yellow-400" />,
      tag: "Prestige Club",
      title: "VIP & SVIP Privileges",
      desc: "Unlock luxury entry rides, royal avatar frames, custom chat bubble themes, and stealth room entrance controls.",
      color: "from-yellow-500/20 to-amber-500/5",
      badgeColor: "bg-yellow-900/50 text-yellow-300 border-yellow-700/50",
    },
    {
      category: "social",
      icon: <Share2 className="w-6 h-6 text-blue-400" />,
      tag: "Moments",
      title: "Moments Feed & Direct Chat",
      desc: "Post lifestyle photos and stories to the global feed, and chat 1-on-1 with end-to-end ephemeral media privacy.",
      color: "from-blue-500/20 to-cyan-500/5",
      badgeColor: "bg-blue-900/50 text-blue-300 border-blue-700/50",
    },
    {
      category: "economy",
      icon: <Zap className="w-6 h-6 text-violet-400" />,
      tag: "Ecosystem",
      title: "Agencies & Authorized Sellers",
      desc: "Streamlined dashboard for host talent agencies, host commission settlement, and authorized coin seller services.",
      color: "from-violet-500/20 to-purple-500/5",
      badgeColor: "bg-violet-900/50 text-violet-300 border-violet-700/50",
    },
  ];

  const filteredFeatures =
    activeTab === "all"
      ? features
      : features.filter((f) => f.category === activeTab);

  return (
    <section
      id="features"
      className="relative py-20 sm:py-28 overflow-hidden bg-gradient-to-b from-[#06060c] via-[#090815] to-[#06060c]"
    >
      {/* Background Ambient Glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-purple-900/10 blur-[160px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-300 text-xs font-bold tracking-wider uppercase">
            <Sparkles className="w-3.5 h-3.5" />
            Core App Capabilities
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
            Built for Peak <br className="hidden sm:inline" />
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-amber-300 bg-clip-text text-transparent">
              Voice Entertainment &amp; Social Hangouts
            </span>
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
            Everything you need for engaging audio parties: dynamic 1–16 seat arrangements, Blue &amp; Pink Star progression, animated gifts, intimate CP bonding, and entertainment mini-games.
          </p>

          {/* Category Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-4">
            {[
              { id: "all" as const, label: "All Features" },
              { id: "voice" as const, label: "Voice & Seats" },
              { id: "social" as const, label: "Social & CP" },
              { id: "economy" as const, label: "Gifts & Levels" },
              { id: "games" as const, label: "Mini-Games" },
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

        {/* Feature Cards Grid (Fast, CSS-only, no heavy image modals) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {filteredFeatures.map((item, index) => (
            <div
              key={index}
              className="group relative rounded-2xl bg-[#0e0c1e]/80 border border-white/10 hover:border-purple-500/40 p-6 flex flex-col justify-between overflow-hidden backdrop-blur-xl transition-all duration-300 hover:shadow-xl hover:shadow-purple-950/60 hover:-translate-y-1"
            >
              {/* Card Gradient Background */}
              <div
                className={`absolute inset-0 bg-gradient-to-b ${item.color} opacity-40 group-hover:opacity-70 transition-opacity pointer-events-none`}
              />

              <div className="relative z-10 space-y-3">
                <div className="flex items-center justify-between">
                  <div className="p-3 rounded-xl bg-zinc-800/90 border border-white/10 group-hover:scale-105 transition-transform">
                    {item.icon}
                  </div>
                  <span
                    className={`text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full border ${item.badgeColor}`}
                  >
                    {item.tag}
                  </span>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-white group-hover:text-purple-300 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-zinc-400 mt-2 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
