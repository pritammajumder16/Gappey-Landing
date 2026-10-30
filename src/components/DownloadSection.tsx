"use client";

import React, { useState } from "react";
import Link from "next/link";
import confetti from "canvas-confetti";
import {
  Download,
  Sparkles,
  CheckCircle2,
  Smartphone,
  HelpCircle,
  ExternalLink,
  ShieldCheck,
} from "lucide-react";
import {
  APK_DIRECT_DOWNLOAD,
  APK_FILENAME,
  APP_VERSION,
  PLAY_STORE_URL,
} from "@/constants/links";

export default function DownloadSection() {
  const [downloadStarted, setDownloadStarted] = useState(false);

  const handleApkDownload = () => {
    setDownloadStarted(true);
    confetti({
      particleCount: 50,
      spread: 70,
      origin: { y: 0.7 },
      colors: ["#a855f7", "#ec4899", "#38bdf8", "#fbbf24"],
    });
  };

  const socialChannels = [
    {
      name: "Instagram",
      handle: "@gappey.india",
      href: "https://instagram.gappey.in",
      gradient: "from-[#f09433] via-[#e6683c] via-[#dc2743] via-[#cc2366] to-[#bc1888]",
      icon: (
        <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.13-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
        </svg>
      ),
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
      ),
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
      ),
    },
  ];

  return (
    <section
      id="download"
      className="relative py-20 sm:py-28 bg-gradient-to-b from-[#06060c] via-[#0d0a1d] to-[#06060c] overflow-hidden"
    >
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-purple-600/10 blur-[160px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gradient-to-r from-purple-500/20 via-pink-500/20 to-amber-500/20 border border-purple-500/40 text-amber-300 text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-amber-300" />
            Direct Android Install
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            Download Gappey for Android
          </h2>
          <p className="text-zinc-300 text-sm sm:text-base leading-relaxed">
            Get the official Gappey Android release directly to your device and jump into live voice party rooms right away.
          </p>
        </div>

        {/* Central Download Card */}
        <div className="rounded-3xl bg-[#120f26]/80 border border-purple-500/30 p-8 sm:p-10 backdrop-blur-xl shadow-2xl shadow-purple-950/60 relative overflow-hidden">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="space-y-4 text-center md:text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/80 border border-cyan-500/40 text-cyan-300 text-xs font-semibold">
                <Smartphone className="w-3.5 h-3.5" />
                <span>Verified Official Package</span>
                <span className="text-zinc-500">•</span>
                <span className="font-mono">{APP_VERSION}</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                Official Android APK Package
              </h3>
              <p className="text-xs sm:text-sm text-zinc-300 max-w-lg leading-relaxed">
                Clean build signed with our release certificate. Compatible with Android 8.0 and newer smartphones.
              </p>

              <div className="flex flex-wrap items-center justify-center md:justify-start gap-3 pt-1">
                <span className="inline-flex items-center gap-1.5 text-xs text-emerald-400 font-medium">
                  <ShieldCheck className="w-4 h-4" /> Virus-Free &amp; Verified
                </span>
                <span className="text-zinc-600">•</span>
                <span className="text-xs text-zinc-400">~90 MB</span>
                <span className="text-zinc-600">•</span>
                <span className="text-xs text-zinc-400 font-mono">{APK_FILENAME}</span>
              </div>
            </div>

            {/* Download Action */}
            <div className="flex flex-col items-center gap-3 w-full md:w-auto shrink-0">
              <Link
                href="/download-android"
                className="w-full md:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-2xl bg-gradient-to-r from-purple-600 via-pink-600 to-amber-500 text-white font-extrabold text-base shadow-[0_0_30px_rgba(168,85,247,0.4)] hover:shadow-[0_0_40px_rgba(236,72,153,0.6)] hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 group"
              >
                <Download className="w-5 h-5 text-white group-hover:scale-110 transition-transform" />
                <span>Download for Android (APK)</span>
              </Link>

              <a
                href={PLAY_STORE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full md:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl border border-white/10 bg-white/[0.04] hover:bg-white/[0.08] text-zinc-300 font-semibold text-sm transition-all duration-200"
              >
                <svg className="w-4 h-4 fill-current text-zinc-300" viewBox="0 0 24 24">
                  <path d="M3.609 1.814L13.793 12 3.61 22.186a1.996 1.996 0 0 1-.61-1.442V3.256c0-.564.226-1.077.609-1.442zm11.234 11.236l2.302-2.302-11.83-6.83 9.528 9.132zm0 1.898l-9.528 9.132 11.83-6.83-2.302-2.302zm1.414-1.414l3.12-1.802c.866-.5 1.397-1.42 1.397-2.42 0-1-.531-1.92-1.397-2.42l-3.12-1.802-2.302 2.302 2.302 2.302z"/>
                </svg>
                <span>Get it on Google Play</span>
                <span className="text-[10px] font-semibold tracking-wide uppercase px-2 py-0.5 rounded-full bg-emerald-400/20 text-emerald-300 border border-emerald-400/30">
                  Closed Test
                </span>
              </a>

              <a
                href={APK_DIRECT_DOWNLOAD}
                download={APK_FILENAME}
                onClick={handleApkDownload}
                className="text-xs text-zinc-400 hover:text-white underline underline-offset-4 transition-colors"
              >
                Or start direct download immediately
              </a>

              {downloadStarted && (
                <p className="text-xs text-emerald-400 flex items-center gap-1.5 font-medium animate-in fade-in">
                  <CheckCircle2 className="w-4 h-4" /> Download started! Check notification or downloads folder.
                </p>
              )}
            </div>
          </div>

          {/* Quick 3-Step Guide */}
          <div className="pt-8 border-t border-white/10 mt-8 space-y-3">
            <p className="text-xs font-bold text-zinc-300 uppercase tracking-wider flex items-center gap-1.5">
              <HelpCircle className="w-3.5 h-3.5 text-cyan-400" />
              How to install on Android:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs text-zinc-400">
              <div className="p-3.5 rounded-xl bg-zinc-900/60 border border-white/5 space-y-1">
                <span className="font-bold text-amber-300">1. Download APK</span>
                <p>Tap download to save the official package.</p>
              </div>
              <div className="p-3.5 rounded-xl bg-zinc-900/60 border border-white/5 space-y-1">
                <span className="font-bold text-cyan-300">2. Allow Install</span>
                <p>When prompted, enable &quot;Install unknown apps&quot; in Settings for Chrome/Files.</p>
              </div>
              <div className="p-3.5 rounded-xl bg-zinc-900/60 border border-white/5 space-y-1">
                <span className="font-bold text-pink-300">3. Party Live!</span>
                <p>Open Gappey and join live voice rooms with friends.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Social Media Community Banner */}
        <div className="mt-10 p-6 rounded-3xl bg-zinc-900/60 border border-white/10 backdrop-blur-xl">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-center md:text-left space-y-1">
              <h3 className="text-base sm:text-lg font-bold text-white flex items-center justify-center md:justify-start gap-2">
                <Sparkles className="w-4 h-4 text-pink-400" />
                Join Our Official Community
              </h3>
              <p className="text-xs sm:text-sm text-zinc-400">
                Follow Gappey on Instagram, YouTube, and Facebook for events, giveaways &amp; voice party updates.
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
                  <span className="text-zinc-400 text-[11px] font-normal hidden sm:inline">
                    ({item.handle})
                  </span>
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
