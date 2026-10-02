"use client";

import React, { useState } from "react";
import Image from "next/image";
import confetti from "canvas-confetti";
import { Gift, Sparkles, Crown, Volume2 } from "lucide-react";

export default function InteractiveGifts() {
  const [selectedGift, setSelectedGift] = useState<string>("gajraj");
  const [comboCount, setComboCount] = useState<number>(1);
  const [lastSentGift, setLastSentGift] = useState<string | null>(null);

  const gifts = [
    {
      id: "gajraj",
      name: "Gajraj Royal Elephant",
      iconSrc: "/gappey_assets/broadcast gifts/gajraj_icon.svg",
      animSrc: "/gappey_assets/broadcast gifts/gajraj_animation.svg",
      tier: "Royal Broadcast",
      border: "border-amber-500/50",
      soundEffect: "🐘 Royal Elephant Trumpet!"
    },
    {
      id: "rocket",
      name: "Cosmic Rocket",
      iconSrc: "/gappey_assets/broadcast gifts/rocket_icon.svg",
      animSrc: "/gappey_assets/broadcast gifts/rocket_animation.svg",
      tier: "Broadcast",
      border: "border-purple-500/50",
      soundEffect: "🚀 Cosmic Blastoff!"
    },
    {
      id: "tajmahal",
      name: "Taj Mahal Monument",
      iconSrc: "/gappey_assets/broadcast gifts/tajmahal_icon.svg",
      animSrc: "/gappey_assets/broadcast gifts/tajmahal_animation.svg",
      tier: "Grandeur",
      border: "border-emerald-500/50",
      soundEffect: "🕌 Royal Chimes!"
    },
    {
      id: "diya_utsav",
      name: "Diya Utsav Festival",
      iconSrc: "/gappey_assets/broadcast gifts/diya_utsav_icon.svg",
      animSrc: "/gappey_assets/broadcast gifts/diya_utsav_animation.svg",
      tier: "Celebration",
      border: "border-yellow-500/50",
      soundEffect: "🪔 Golden Sparks!"
    },
    {
      id: "gappey_exclusive",
      name: "Gappey Exclusive",
      iconSrc: "/gappey_assets/broadcast gifts/gappey_exclusive_icon.svg",
      animSrc: "/gappey_assets/broadcast gifts/gappey_exclusive_animation.svg",
      tier: "Signature",
      border: "border-pink-500/50",
      soundEffect: "✨ Starlight Fanfare!"
    },
    {
      id: "bigbang",
      name: "Big Bang Galaxy",
      iconSrc: "/gappey_assets/broadcast gifts/bigbang_icon.svg",
      animSrc: "/gappey_assets/broadcast gifts/bigbang_animation.svg",
      tier: "Super Star",
      border: "border-cyan-500/50",
      soundEffect: "🌌 Cosmic Supernova!"
    },
    {
      id: "rose",
      name: "Enchanted Rose",
      iconSrc: "/animated/rose.gif",
      animSrc: "/animated/rose.gif",
      tier: "Romantic",
      border: "border-rose-500/50",
      soundEffect: "🌹 Rose Bloom Ding!"
    },
    {
      id: "kiss",
      name: "Flying Kiss",
      iconSrc: "/animated/kiss.gif",
      animSrc: "/animated/kiss.gif",
      tier: "Intimacy",
      border: "border-pink-500/50",
      soundEffect: "💋 Mwah!"
    },
    {
      id: "ship",
      name: "Luxury Yacht",
      iconSrc: "/animated/ship.gif",
      animSrc: "/animated/ship.gif",
      tier: "VIP Ride",
      border: "border-blue-500/50",
      soundEffect: "🚢 Ocean Waves & Horn!"
    },
    {
      id: "laugh",
      name: "Party Haha",
      iconSrc: "/animated/laugh.gif",
      animSrc: "/animated/laugh.gif",
      tier: "Room Fun",
      border: "border-amber-500/50",
      soundEffect: "🎉 Party Cheers & Laugh!"
    },
  ];

  const handleSendGift = (gift: typeof gifts[0]) => {
    setSelectedGift(gift.id);
    setComboCount((prev) => (lastSentGift === gift.id ? prev + 1 : 1));
    setLastSentGift(gift.id);

    // Confetti effect burst
    confetti({
      particleCount: 50,
      spread: 75,
      origin: { y: 0.7 },
      colors: ["#a855f7", "#ec4899", "#ffd700", "#00f0ff"],
    });
  };

  const currentGiftObj = gifts.find(g => g.id === selectedGift) || gifts[0];

  return (
    <section id="gifts" className="relative py-24 bg-[#070611] overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[550px] bg-pink-900/15 blur-[160px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-pink-500/10 border border-pink-500/30 text-pink-300 text-xs font-bold uppercase tracking-wider">
            <Gift className="w-3.5 h-3.5" />
            Interactive Gift Simulator
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
            Send Gifts. Light Up <br className="hidden sm:inline" />
            <span className="bg-gradient-to-r from-pink-400 via-amber-300 to-purple-400 bg-clip-text text-transparent">
              The Entire Voice Room
            </span>
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
            Click any gift icon below to test-fire its broadcast animation on the live party room stage with real-time combo multipliers!
          </p>
        </div>

        {/* Simulator Area */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left: Gift Catalog Grid with clear SVG/GIF icons */}
          <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-5 gap-3 sm:gap-3.5">
            {gifts.map((gift) => {
              const isSelected = selectedGift === gift.id;
              return (
                <button
                  key={gift.id}
                  onClick={() => handleSendGift(gift)}
                  className={`relative p-3 rounded-2xl flex flex-col items-center text-center transition-all duration-200 group bg-zinc-900/80 hover:bg-zinc-800/90 border ${
                    isSelected
                      ? `${gift.border} bg-purple-950/60 shadow-lg shadow-purple-900/40 scale-105`
                      : "border-white/10 hover:border-white/30"
                  }`}
                >
                  {/* Top Tier Badge */}
                  <span className="text-[9px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-black/60 text-zinc-300 mb-1.5 border border-white/10">
                    {gift.tier}
                  </span>

                  {/* Gift Icon */}
                  <div className="relative w-14 h-14 sm:w-16 sm:h-16 flex items-center justify-center my-1 group-hover:scale-110 transition-transform">
                    <Image
                      src={gift.iconSrc}
                      alt={gift.name}
                      width={64}
                      height={64}
                      className="w-full h-full object-contain drop-shadow-md"
                      unoptimized
                    />
                  </div>

                  {/* Name */}
                  <p className="text-[11px] sm:text-xs font-bold text-white group-hover:text-pink-300 transition-colors truncate max-w-[100px] mt-1">
                    {gift.name}
                  </p>

                  {isSelected && (
                    <div className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-pink-500 text-white flex items-center justify-center text-[10px] font-bold shadow-md">
                      ✓
                    </div>
                  )}
                </button>
              );
            })}
          </div>

          {/* Right: Live Room Screen Simulation with Animation */}
          <div className="lg:col-span-5">
            <div className="relative rounded-3xl bg-[#110e26] border-2 border-purple-500/40 p-6 sm:p-8 shadow-2xl shadow-purple-950/80 overflow-hidden text-center space-y-6">
              
              {/* Top Room Banner */}
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="text-xs font-bold text-white">Party Room #108 (Live)</span>
                </div>
                <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/40 text-[11px] font-extrabold">
                  <Crown className="w-3.5 h-3.5" />
                  Star Stage
                </div>
              </div>

              {/* Gift Stage Animation Box */}
              <div className="relative h-60 flex flex-col items-center justify-center bg-black/50 rounded-2xl border border-white/10 overflow-hidden p-4">
                
                {/* Ambient glow behind active gift */}
                <div className="absolute w-40 h-40 rounded-full bg-pink-500/20 blur-3xl animate-pulse" />

                {/* Active Gift Graphic */}
                <div className="relative w-36 h-36 flex items-center justify-center animate-bounce">
                  <Image
                    src={currentGiftObj.animSrc}
                    alt={currentGiftObj.name}
                    width={144}
                    height={144}
                    className="w-full h-full object-contain drop-shadow-[0_10px_30px_rgba(236,72,153,0.7)]"
                    unoptimized
                  />
                </div>

                {/* Combo Multiplier Floater */}
                {comboCount > 1 && (
                  <div className="absolute top-4 right-4 animate-scale-in">
                    <span className="text-2xl font-black italic tracking-tighter bg-gradient-to-r from-amber-300 via-pink-400 to-purple-400 bg-clip-text text-transparent drop-shadow-md">
                      COMBO x{comboCount}! 🔥
                    </span>
                  </div>
                )}

                {/* Broadcast Toast Banner */}
                <div className="absolute bottom-3 inset-x-3 px-3 py-2 rounded-xl bg-purple-950/90 backdrop-blur-md border border-purple-500/40 flex items-center justify-center gap-2">
                  <Sparkles className="w-3.5 h-3.5 text-amber-300 shrink-0" />
                  <span className="text-xs font-bold text-white truncate">
                    <strong className="text-pink-400">You</strong> sent <strong className="text-amber-300">{currentGiftObj.name}</strong>!
                  </span>
                </div>
              </div>

              {/* Sound & Action Row */}
              <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-2">
                <div className="flex items-center gap-2 text-xs text-zinc-300">
                  <Volume2 className="w-4 h-4 text-pink-400 shrink-0" />
                  <span>Effect: <strong className="text-white">{currentGiftObj.soundEffect}</strong></span>
                </div>

                <button
                  onClick={() => handleSendGift(currentGiftObj)}
                  className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-gradient-to-r from-pink-600 via-purple-600 to-amber-500 text-white font-bold text-xs shadow-lg shadow-pink-600/30 hover:scale-105 active:scale-95 transition-all"
                >
                  ⚡ Send Again (Combo x{comboCount})
                </button>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
