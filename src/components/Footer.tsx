"use client";

import React from "react";
import Image from "next/image";
import { Download, ArrowUp, ExternalLink } from "lucide-react";
import { APK_DOWNLOAD_URL } from "@/constants/links";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const socialHandles = [
    {
      name: "Instagram",
      handle: "@gappey.india",
      href: "https://www.instagram.com/gappey.india",
      color: "hover:text-pink-400 hover:border-pink-500/50 hover:bg-pink-500/10",
      icon: (
        <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.13-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
        </svg>
      )
    },
    {
      name: "YouTube",
      handle: "@GappeyIndia",
      href: "https://www.youtube.com/@GappeyIndia",
      color: "hover:text-red-400 hover:border-red-500/50 hover:bg-red-500/10",
      icon: (
        <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
          <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
        </svg>
      )
    },
    {
      name: "Facebook",
      handle: "Gappey Official",
      href: "https://www.facebook.com/profile.php?id=61594831059345",
      color: "hover:text-blue-400 hover:border-blue-500/50 hover:bg-blue-500/10",
      icon: (
        <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
        </svg>
      )
    }
  ];

  return (
    <footer className="relative bg-[#040408] border-t border-white/10 pt-16 pb-12 overflow-hidden text-zinc-400 text-xs sm:text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          
          {/* Brand Col */}
          <div className="md:col-span-4 space-y-4">
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
              The premier next-generation voice party room platform. Experience low-latency 1–16 seat conversations, full-screen animated gifts, Blue &amp; Pink Star progression, CP intimacy, and social entertainment.
            </p>

            <div className="flex items-center gap-2 pt-1">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-950/80 border border-emerald-500/30 text-emerald-300 text-[11px] font-bold">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                Coming Soon to Google Play Store
              </span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-2 space-y-3">
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
                <a href="#promo-film" className="hover:text-purple-300 transition-colors">
                  Promo Video
                </a>
              </li>
              <li>
                <a href="#features" className="hover:text-purple-300 transition-colors">
                  Features &amp; Screens
                </a>
              </li>
              <li>
                <a href="#gifts" className="hover:text-purple-300 transition-colors">
                  Gift Simulator
                </a>
              </li>
              <li>
                <a href="#download" className="hover:text-purple-300 transition-colors">
                  Download APK
                </a>
              </li>
            </ul>
          </div>

          {/* Official Social Media Handles */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              Official Community
            </h4>
            <div className="space-y-2.5">
              {socialHandles.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center justify-between p-2.5 rounded-xl bg-zinc-900/80 border border-white/5 transition-all duration-200 group ${item.color}`}
                >
                  <div className="flex items-center gap-2.5">
                    <span className="text-zinc-300 group-hover:scale-110 transition-transform">
                      {item.icon}
                    </span>
                    <div>
                      <p className="text-xs font-bold text-white group-hover:text-inherit transition-colors">
                        {item.name}
                      </p>
                      <p className="text-[11px] text-zinc-400">
                        {item.handle}
                      </p>
                    </div>
                  </div>
                  <ExternalLink className="w-3.5 h-3.5 opacity-50 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                </a>
              ))}
            </div>
          </div>

          {/* Download & Legal */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              Get the App
            </h4>
            <div className="space-y-2.5">
              <a
                href={APK_DOWNLOAD_URL}
                download="gappey.apk"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-zinc-900 hover:bg-zinc-800 text-zinc-200 hover:text-white border border-white/10 text-xs font-semibold transition-all w-full justify-center"
              >
                <Download className="w-3.5 h-3.5 text-cyan-400" />
                Download Android APK (Direct)
              </a>

              <p className="text-[11px] text-zinc-400 leading-relaxed">
                Pre-register on Google Play Store to receive 1,000 free coins and founding host privileges upon public release.
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
