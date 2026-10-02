"use client";

import React, { useState } from "react";
import confetti from "canvas-confetti";
import { 
  Download, 
  Sparkles, 
  CheckCircle2, 
  Smartphone, 
  HelpCircle
} from "lucide-react";

export default function DownloadSection() {
  const [emailOrPhone, setEmailOrPhone] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [downloadStarted, setDownloadStarted] = useState(false);

  const handlePreRegister = (e: React.FormEvent) => {
    e.preventDefault();
    if (!emailOrPhone.trim()) return;

    setIsSubmitted(true);
    confetti({
      particleCount: 100,
      spread: 90,
      origin: { y: 0.6 },
      colors: ["#a855f7", "#ec4899", "#ffd700", "#10b981"],
    });
  };

  const handleApkDownload = () => {
    setDownloadStarted(true);
    confetti({
      particleCount: 40,
      spread: 60,
      origin: { y: 0.8 },
      colors: ["#38bdf8", "#a855f7", "#ffd700"],
    });
  };

  return (
    <section id="download" className="relative py-24 sm:py-32 bg-gradient-to-b from-[#06060c] via-[#0d0a1d] to-[#06060c] overflow-hidden">
      {/* Ambient background lights */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-purple-600/15 blur-[160px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gradient-to-r from-purple-500/20 via-pink-500/20 to-amber-500/20 border border-purple-500/40 text-amber-300 text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-amber-300" />
            Get Ready for Launch
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            Be the First to Experience <br />
            <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-amber-300 bg-clip-text text-transparent">
              Gappey Live Voice Party
            </span>
          </h2>
          <p className="text-zinc-300 text-sm sm:text-base leading-relaxed">
            Pre-register now for Google Play launch perks or download the latest Android APK directly to start testing immediately!
          </p>
        </div>

        {/* Two Columns: Google Play Pre-Registration & Direct APK Download */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Card: Google Play Store Pre-Registration */}
          <div className="lg:col-span-6 rounded-3xl bg-[#120f26]/80 border border-purple-500/30 p-6 sm:p-8 flex flex-col justify-between backdrop-blur-xl shadow-2xl shadow-purple-950/60 relative overflow-hidden">
            
            {/* Top Badge */}
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-zinc-900 border border-white/10 flex items-center justify-center p-2">
                    <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none">
                      <path d="M3.609 1.814L13.792 12 3.61 22.186a2.38 2.38 0 01-.61-.954c-.1-.328-.154-.674-.154-1.032V3.8c0-.358.054-.704.154-1.032.146-.48.406-.856.609-.954z" fill="#00D3FF"/>
                      <path d="M17.18 8.613L13.792 12l3.388 3.387 3.82-2.205c1.092-.63 1.092-1.734 0-2.364l-3.82-2.205z" fill="#FFCE00"/>
                      <path d="M13.792 12L3.609 1.814A2.08 2.08 0 014.846 1.44c.484 0 .977.126 1.428.386l10.906 6.287L13.792 12z" fill="#00F076"/>
                      <path d="M13.792 12l3.388 3.887-10.906 6.287c-.451.26-.944.386-1.428.386a2.08 2.08 0 01-1.237-.374L13.792 12z" fill="#FF3A44"/>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">Google Play Store</h3>
                    <p className="text-xs text-zinc-400">Official Android Release</p>
                  </div>
                </div>

                <span className="px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 text-xs font-bold uppercase tracking-wider">
                  Coming Soon
                </span>
              </div>

              <div className="space-y-3 pt-2">
                <h4 className="text-lg font-bold text-white">
                  Pre-Register for Early Bird Rewards 🎁
                </h4>
                <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
                  Join the pre-launch list to receive an exclusive <strong className="text-amber-300">1,000 Free Gold Coins</strong>, the <strong className="text-pink-400">Founding Host Avatar Frame</strong>, and an automatic notify link the second we go live on Google Play!
                </p>
              </div>

              {/* Pre-Register Form */}
              {!isSubmitted ? (
                <form onSubmit={handlePreRegister} className="space-y-3 pt-2">
                  <div className="flex flex-col sm:flex-row gap-2">
                    <input
                      type="text"
                      placeholder="Enter your Email or Phone Number"
                      value={emailOrPhone}
                      onChange={(e) => setEmailOrPhone(e.target.value)}
                      required
                      className="flex-1 px-4 py-3 rounded-xl bg-zinc-900/90 border border-zinc-700 text-white placeholder:text-zinc-500 text-sm focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500"
                    />
                    <button
                      type="submit"
                      className="px-6 py-3 rounded-xl bg-gradient-to-r from-purple-600 via-pink-600 to-amber-500 text-white font-bold text-sm shadow-lg shadow-purple-600/40 hover:scale-[1.02] active:scale-[0.98] transition-all shrink-0"
                    >
                      Pre-Register
                    </button>
                  </div>
                  <p className="text-[11px] text-zinc-500">
                    🔒 Zero spam guarantee. We will only notify you about the Gappey release.
                  </p>
                </form>
              ) : (
                <div className="p-4 rounded-2xl bg-emerald-950/60 border border-emerald-500/40 space-y-2 animate-in fade-in duration-300">
                  <div className="flex items-center gap-2 text-emerald-300 font-bold text-sm">
                    <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                    You are Pre-Registered!
                  </div>
                  <p className="text-xs text-emerald-200/90 leading-relaxed">
                    Thank you! Your VIP Early Bird bonus (1,000 Gold + Founding Frame) is reserved for <strong className="text-white">{emailOrPhone}</strong>.
                  </p>
                </div>
              )}
            </div>

            {/* Perks List */}
            <div className="pt-6 border-t border-white/10 mt-6 grid grid-cols-2 gap-3">
              <div className="flex items-center gap-2 text-xs text-zinc-300">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Instant Launch Alert</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-zinc-300">
                <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Founding Host Frame</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-zinc-300">
                <CheckCircle2 className="w-4 h-4 text-pink-400 shrink-0" />
                <span>1,000 Free Gold Coins</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-zinc-300">
                <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>VIP Room Reservation</span>
              </div>
            </div>

          </div>

          {/* Right Card: Direct Android APK Download */}
          <div className="lg:col-span-6 rounded-3xl bg-[#120f26]/80 border border-cyan-500/30 p-6 sm:p-8 flex flex-col justify-between backdrop-blur-xl shadow-2xl shadow-cyan-950/60 relative overflow-hidden">
            
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-cyan-950/60 border border-cyan-500/40 flex items-center justify-center p-2 text-cyan-400">
                    <Smartphone className="w-7 h-7" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">Direct Android APK</h3>
                    <p className="text-xs text-cyan-400 font-mono">gappey.apk (v1.0.0)</p>
                  </div>
                </div>

                <span className="px-3 py-1 rounded-full bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 text-xs font-bold uppercase tracking-wider">
                  Direct Install
                </span>
              </div>

              <div className="space-y-3 pt-2">
                <h4 className="text-lg font-bold text-white">
                  Download &amp; Install Directly ⚡
                </h4>
                <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
                  Want to test the app right now? Download the standalone APK package directly to your Android device without waiting for the Play Store review.
                </p>
              </div>

              {/* Direct APK Download Button */}
              <div className="pt-2">
                <a
                  href="/app/gappey.apk"
                  download="gappey.apk"
                  onClick={handleApkDownload}
                  className="w-full inline-flex items-center justify-center gap-3 px-6 py-4 rounded-2xl bg-gradient-to-r from-cyan-600 via-blue-600 to-purple-600 text-white font-black text-base shadow-[0_0_30px_rgba(6,182,212,0.4)] hover:shadow-[0_0_40px_rgba(6,182,212,0.6)] hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 group"
                >
                  <Download className="w-5 h-5 text-cyan-200 group-hover:animate-bounce" />
                  <span>Download gappey.apk</span>
                  <span className="text-xs font-mono px-2 py-0.5 rounded bg-black/40 text-cyan-200 border border-white/20">
                    APK
                  </span>
                </a>

                {downloadStarted && (
                  <p className="text-xs text-emerald-400 mt-2 flex items-center gap-1.5 font-medium">
                    <CheckCircle2 className="w-4 h-4" /> Download started! Check your browser downloads.
                  </p>
                )}
              </div>
            </div>

            {/* Quick 3-step installation guide */}
            <div className="pt-6 border-t border-white/10 mt-6 space-y-2">
              <p className="text-xs font-bold text-zinc-300 uppercase tracking-wider flex items-center gap-1.5">
                <HelpCircle className="w-3.5 h-3.5 text-cyan-400" />
                How to install on Android:
              </p>
              <div className="grid grid-cols-3 gap-2 text-[11px] text-zinc-400">
                <div className="p-2.5 rounded-xl bg-zinc-900/60 border border-white/5 space-y-1">
                  <span className="font-bold text-cyan-300">1. Download</span>
                  <p>Tap download button above to get `gappey.apk`</p>
                </div>
                <div className="p-2.5 rounded-xl bg-zinc-900/60 border border-white/5 space-y-1">
                  <span className="font-bold text-cyan-300">2. Allow Install</span>
                  <p>Enable &quot;Install Unknown Apps&quot; in Chrome/Files</p>
                </div>
                <div className="p-2.5 rounded-xl bg-zinc-900/60 border border-white/5 space-y-1">
                  <span className="font-bold text-cyan-300">3. Party!</span>
                  <p>Open Gappey and join live voice rooms!</p>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
