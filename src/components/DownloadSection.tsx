"use client";

import React, { useState } from "react";
import confetti from "canvas-confetti";
import { 
  Download, 
  Sparkles, 
  CheckCircle2, 
  Smartphone, 
  HelpCircle,
  ExternalLink
} from "lucide-react";
import { APK_DOWNLOAD_URL } from "@/constants/links";

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

  const socialChannels = [
    {
      name: "Instagram",
      handle: "@gappey.india",
      href: "https://www.instagram.com/gappey.india",
      gradient: "from-[#f09433] via-[#e6683c] via-[#dc2743] via-[#cc2366] to-[#bc1888]",
      icon: (
        <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.13-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
        </svg>
      )
    },
    {
      name: "YouTube",
      handle: "@GappeyIndia",
      href: "https://www.youtube.com/@GappeyIndia",
      gradient: "from-red-600 to-red-800",
      icon: (
        <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
          <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
        </svg>
      )
    },
    {
      name: "Facebook",
      handle: "Gappey Official",
      href: "https://www.facebook.com/profile.php?id=61594831059345",
      gradient: "from-blue-600 to-indigo-800",
      icon: (
        <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
        </svg>
      )
    }
  ];

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
                <span>1,000 Free Coins</span>
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
                  href={APK_DOWNLOAD_URL}
                  download="gappey.apk"
                  onClick={handleApkDownload}
                  className="w-full inline-flex items-center justify-center gap-3 px-6 py-4 rounded-2xl bg-gradient-to-r from-cyan-600 via-blue-600 to-purple-600 text-white font-black text-base shadow-[0_0_30px_rgba(6,182,212,0.4)] hover:shadow-[0_0_40px_rgba(6,182,212,0.6)] hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 group"
                >
                  <Download className="w-5 h-5 text-cyan-200 group-hover:animate-bounce" />
                  <span>Download APK (Direct EAS)</span>
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

        {/* Official Social Media Community Banner */}
        <div className="mt-12 p-6 rounded-3xl bg-zinc-900/60 border border-white/10 backdrop-blur-xl">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-center md:text-left space-y-1">
              <h3 className="text-base sm:text-lg font-bold text-white flex items-center justify-center md:justify-start gap-2">
                <Sparkles className="w-4 h-4 text-pink-400" />
                Join Our Official Social Community
              </h3>
              <p className="text-xs sm:text-sm text-zinc-400">
                Follow Gappey on Instagram, YouTube, and Facebook for launch events, gift giveaways &amp; live room tournaments!
              </p>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-3">
              {socialChannels.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-white border border-white/10 text-xs font-bold hover:scale-105 transition-all shadow-md group"
                >
                  <span className="p-1 rounded-lg bg-zinc-900 text-zinc-200 group-hover:text-pink-400 transition-colors">
                    {item.icon}
                  </span>
                  <span>{item.name}</span>
                  <span className="text-zinc-400 text-[11px] font-normal hidden sm:inline">({item.handle})</span>
                  <ExternalLink className="w-3 h-3 text-zinc-400 group-hover:text-white" />
                </a>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
