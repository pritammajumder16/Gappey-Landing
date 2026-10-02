"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Download, Sparkles, Menu, X, Flame } from "lucide-react";

interface NavbarProps {
  onOpenPreRegister?: () => void;
}

export default function Navbar({ onOpenPreRegister }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Overview", href: "#overview" },
    { name: "Live Demo", href: "#live-demo" },
    { name: "Features", href: "#features" },
    { name: "Screenshots", href: "#screenshots" },
    { name: "Gift Vault", href: "#gifts" },
    { name: "Get APK", href: "#download" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[#090814]/90 backdrop-blur-xl border-b border-purple-900/30 shadow-[0_10px_30px_rgba(0,0,0,0.8)] py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo & Brand */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="relative w-10 h-10 sm:w-12 sm:h-12 rounded-2xl overflow-hidden p-0.5 bg-gradient-to-tr from-purple-600 via-pink-500 to-amber-400 shadow-lg shadow-purple-600/30 group-hover:scale-105 transition-transform duration-300">
              <div className="w-full h-full rounded-[14px] overflow-hidden bg-black">
                <Image
                  src="/assets/logo.jpeg"
                  alt="Gappey Logo"
                  width={48}
                  height={48}
                  className="w-full h-full object-cover"
                  priority
                />
              </div>
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xl sm:text-2xl font-black tracking-tight text-white group-hover:text-purple-300 transition-colors">
                  Gappey
                </span>
                <span className="hidden xs:inline-flex items-center gap-1 text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-gradient-to-r from-pink-500/20 to-purple-500/20 border border-pink-500/40 text-pink-300">
                  <Flame className="w-3.5 h-3.5 text-pink-400 animate-pulse" />
                  Voice Party
                </span>
              </div>
              <p className="text-[10px] sm:text-xs text-zinc-400 font-medium -mt-0.5">
                Coming to Play Store
              </p>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2 px-4 py-1.5 rounded-full bg-zinc-900/60 border border-white/10 backdrop-blur-md">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-xs lg:text-sm font-medium text-zinc-300 hover:text-white px-3 py-1.5 rounded-full hover:bg-white/10 transition-all duration-200"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Right Action Buttons */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href="/app/gappey.apk"
              download="gappey.apk"
              className="inline-flex items-center gap-2 text-xs font-semibold px-3.5 py-2 rounded-xl bg-zinc-800/80 hover:bg-zinc-700/80 border border-zinc-700/60 text-zinc-200 hover:text-white transition-all duration-200 shadow-sm hover:shadow-purple-500/10"
              title="Download Android APK directly"
            >
              <Download className="w-3.5 h-3.5 text-cyan-400" />
              <span>Direct APK</span>
            </a>

            <a
              href="#download"
              onClick={onOpenPreRegister}
              className="relative group inline-flex items-center gap-2 text-xs sm:text-sm font-bold px-4 py-2 sm:px-5 sm:py-2.5 rounded-xl bg-gradient-to-r from-purple-600 via-pink-600 to-amber-500 text-white shadow-lg shadow-purple-600/30 hover:shadow-purple-600/50 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 overflow-hidden"
            >
              <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity" />
              <Sparkles className="w-4 h-4 text-amber-200 animate-spin-slow" />
              <span>Pre-Register</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex sm:hidden items-center gap-2">
            <a
              href="/app/gappey.apk"
              download="gappey.apk"
              className="p-2 rounded-xl bg-zinc-800 border border-zinc-700 text-cyan-400"
              title="Download APK"
            >
              <Download className="w-4 h-4" />
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl bg-zinc-900 border border-white/10 text-zinc-300 hover:text-white focus:outline-none"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {mobileMenuOpen && (
        <div className="sm:hidden bg-[#0c0a1a]/98 backdrop-blur-2xl border-b border-purple-900/40 px-5 pt-3 pb-6 mt-3 space-y-3 animate-in fade-in slide-in-from-top-4 duration-200">
          <div className="flex flex-col space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm font-medium text-zinc-300 hover:text-white px-3 py-2.5 rounded-xl hover:bg-purple-900/30 transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="pt-2 border-t border-white/10 flex flex-col gap-2.5">
            <a
              href="/app/gappey.apk"
              download="gappey.apk"
              className="w-full flex items-center justify-center gap-2 text-sm font-semibold px-4 py-2.5 rounded-xl bg-zinc-800 text-zinc-200 border border-zinc-700"
            >
              <Download className="w-4 h-4 text-cyan-400" />
              Download Android APK
            </a>
            <a
              href="#download"
              onClick={() => {
                setMobileMenuOpen(false);
                if (onOpenPreRegister) onOpenPreRegister();
              }}
              className="w-full flex items-center justify-center gap-2 text-sm font-bold px-4 py-2.5 rounded-xl bg-gradient-to-r from-purple-600 via-pink-600 to-amber-500 text-white shadow-lg shadow-purple-600/30"
            >
              <Sparkles className="w-4 h-4 text-amber-200" />
              Pre-Register for Launch
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
