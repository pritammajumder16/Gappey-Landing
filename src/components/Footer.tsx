"use client";

import React from "react";
import Image from "next/image";
import { Download, ArrowUp } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-[#040408] border-t border-white/10 pt-16 pb-12 overflow-hidden text-zinc-400 text-xs sm:text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          
          {/* Brand Col */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl overflow-hidden bg-black p-0.5 border border-purple-500/50 shadow-md shadow-purple-900/50">
                <Image
                  src="/assets/logo.jpeg"
                  alt="Gappey"
                  width={40}
                  height={40}
                  className="w-full h-full object-cover rounded-[14px]"
                />
              </div>
              <span className="text-xl font-black text-white tracking-tight">
                Gappey
              </span>
            </div>

            <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed max-w-sm">
              The premier next-generation voice party room platform. Experience low-latency multi-seat conversations, animated gifts, VIP prestige status, and social entertainment.
            </p>

            <div className="flex items-center gap-2 pt-1">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-950/80 border border-emerald-500/30 text-emerald-300 text-[11px] font-bold">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                Coming Soon to Google Play Store
              </span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              Explore Gappey
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#overview" className="hover:text-purple-300 transition-colors">
                  Overview
                </a>
              </li>
              <li>
                <a href="#live-demo" className="hover:text-purple-300 transition-colors">
                  Live Screen Recording
                </a>
              </li>
              <li>
                <a href="#features" className="hover:text-purple-300 transition-colors">
                  Voice Rooms &amp; Features
                </a>
              </li>
              <li>
                <a href="#screenshots" className="hover:text-purple-300 transition-colors">
                  App Screenshots
                </a>
              </li>
              <li>
                <a href="#gifts" className="hover:text-purple-300 transition-colors">
                  Gift Simulator
                </a>
              </li>
            </ul>
          </div>

          {/* Download & Legal */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              Get the App
            </h4>
            <div className="space-y-2.5">
              <a
                href="/app/gappey.apk"
                download="gappey.apk"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-zinc-900 hover:bg-zinc-800 text-zinc-200 hover:text-white border border-white/10 text-xs font-semibold transition-all"
              >
                <Download className="w-3.5 h-3.5 text-cyan-400" />
                Download Android APK (Direct)
              </a>

              <p className="text-[11px] text-zinc-400">
                Play Store pre-registration gives you an early bonus of 1,000 free coins upon public release.
              </p>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-400">
          <p>© {new Date().getFullYear()} Gappey App. All rights reserved.</p>

          <div className="flex items-center gap-4">
            <button
              onClick={scrollToTop}
              className="p-2 rounded-xl bg-zinc-900 hover:bg-zinc-800 text-zinc-300 hover:text-white border border-white/10 transition-colors flex items-center gap-1.5 text-[11px]"
              aria-label="Scroll to top"
            >
              <ArrowUp className="w-3.5 h-3.5" /> Back to top
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
