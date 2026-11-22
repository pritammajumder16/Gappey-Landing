"use client";

import React from "react";
import Link from "next/link";
import {
  Sparkles,
  Smartphone,
  ShieldCheck,
  ExternalLink,
} from "lucide-react";
import GetTheApp from "@/components/GetTheApp";

export default function DownloadSection() {
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
            Get the Gappey App
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            Join the Voice Party Today
          </h2>
          <p className="text-zinc-300 text-sm sm:text-base leading-relaxed">
            Available on Android smartphones. Connect with friends in live audio party rooms and enjoy casual social mini-games.
          </p>
        </div>

        {/* Central App Store Card */}
        <div className="rounded-3xl bg-[#120f26]/80 border border-purple-500/30 p-8 sm:p-10 backdrop-blur-xl shadow-2xl shadow-purple-950/60 relative overflow-hidden">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="space-y-4 text-center md:text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/80 border border-cyan-500/40 text-cyan-300 text-xs font-semibold">
                <Smartphone className="w-3.5 h-3.5" />
                <span>Official App Releases</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                Download Gappey
              </h3>
              <p className="text-xs sm:text-sm text-zinc-300 max-w-lg leading-relaxed">
                Enjoy crystal-clear real-time voice chat, expressive broadcast gifts, interactive companion bonding, and community Families.
              </p>

              <div className="flex flex-wrap items-center justify-center md:justify-start gap-3 pt-1">
                <span className="inline-flex items-center gap-1.5 text-xs text-emerald-400 font-medium">
                  <ShieldCheck className="w-4 h-4" /> Secure &amp; Verified
                </span>
                <span className="text-zinc-600">•</span>
                <span className="text-xs text-zinc-400">Android 8.0+</span>
                <span className="text-zinc-600">•</span>
                <span className="text-xs text-zinc-400">iOS Coming Soon</span>
              </div>
            </div>

            {/* Badges */}
            <div className="flex flex-col items-center md:items-end gap-4 w-full md:w-auto shrink-0">
              <GetTheApp size="lg" />

              <p className="text-xs text-zinc-400 pt-1 text-center md:text-right">
                Looking for alternative direct installation?{" "}
                <Link
                  href="/download-android"
                  className="text-amber-400 hover:text-amber-300 underline font-medium"
                >
                  Visit Android Download Page
                </Link>
              </p>
            </div>
          </div>
        </div>

        {/* Social Communities */}
        <div className="mt-12 text-center space-y-4">
          <p className="text-xs font-bold uppercase tracking-widest text-zinc-400">
            Join Our Official Communities
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            {socialChannels.map((ch) => (
              <a
                key={ch.name}
                href={ch.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white/[0.03] hover:bg-white/[0.08] border border-white/10 text-xs font-medium text-zinc-300 hover:text-white transition-all duration-200"
              >
                <div
                  className={`w-6 h-6 rounded-lg bg-gradient-to-tr ${ch.gradient} flex items-center justify-center text-white`}
                >
                  {ch.icon}
                </div>
                <span>{ch.name}</span>
                <span className="text-zinc-500 group-hover:text-zinc-300 font-mono text-[11px]">
                  {ch.handle}
                </span>
                <ExternalLink className="w-3 h-3 text-zinc-500 group-hover:text-zinc-300" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
