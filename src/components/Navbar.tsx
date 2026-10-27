"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Download, Menu, X, Flame, Coins, LogIn } from "lucide-react";
import { APP_VERSION } from "@/constants/links";
import { useAuth } from "@/context/AuthContext";

interface NavbarProps {
  onScrollToDownload?: () => void;
}

export default function Navbar({ onScrollToDownload }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { session, user, wallet, openAuthModal } = useAuth();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Overview", href: "/#overview" },
    { name: "Features", href: "/#features" },
    { name: "Download", href: "/#download" },
    { name: "Top-Up Coins", href: "/recharge", highlight: true },
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
          <Link href="/" className="flex items-center gap-3 group">
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
                Live Audio &amp; Social Hangout
              </p>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2 px-4 py-1.5 rounded-full bg-zinc-900/60 border border-white/10 backdrop-blur-md">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`text-xs lg:text-sm font-medium px-3.5 py-1.5 rounded-full transition-all duration-200 flex items-center gap-1.5 ${
                  link.highlight
                    ? "text-amber-300 hover:text-amber-200 bg-amber-400/10 border border-amber-400/30"
                    : "text-zinc-300 hover:text-white hover:bg-white/10"
                }`}
              >
                {link.highlight && <Coins className="w-3.5 h-3.5 text-amber-400" />}
                <span>{link.name}</span>
              </Link>
            ))}
          </nav>

          {/* Right Action: Auth / Top-Up & Download */}
          <div className="hidden sm:flex items-center gap-2.5">
            {/* Top Up CTA */}
            <Link
              href="/recharge"
              className="inline-flex items-center gap-1.5 text-xs font-bold px-3.5 py-2 rounded-xl bg-amber-400/10 hover:bg-amber-400/20 border border-amber-400/30 text-amber-300 transition-colors"
            >
              <Coins className="w-3.5 h-3.5 text-amber-400" />
              <span>Top-Up</span>
            </Link>

            {/* Auth Button or User Badge */}
            {session && user ? (
              <Link
                href="/recharge"
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-zinc-900/80 border border-white/10 text-xs text-zinc-200 hover:border-purple-500/40 transition-colors"
              >
                <div className="w-5 h-5 rounded-full bg-purple-600/40 flex items-center justify-center text-[10px] font-bold text-white">
                  {(user.displayName || user.username).charAt(0).toUpperCase()}
                </div>
                <span className="font-semibold max-w-[80px] truncate">{user.displayName || user.username}</span>
                <span className="text-amber-400 font-mono text-[11px]">
                  {(wallet?.goldCoins ?? 0).toLocaleString("en-IN")} 🪙
                </span>
              </Link>
            ) : (
              <button
                type="button"
                onClick={() => openAuthModal("login")}
                className="inline-flex items-center gap-1.5 text-xs font-bold px-3 py-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-zinc-300 transition-colors"
              >
                <LogIn className="w-3.5 h-3.5 text-purple-400" />
                <span>Sign In</span>
              </button>
            )}

            {/* Download CTA */}
            <Link
              href="/download-android"
              className="relative group inline-flex items-center gap-2 text-xs sm:text-sm font-bold px-4 py-2 sm:px-4 sm:py-2 rounded-xl bg-gradient-to-r from-purple-600 via-pink-600 to-amber-500 text-white shadow-lg shadow-purple-600/30 hover:shadow-purple-600/50 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 overflow-hidden"
            >
              <Download className="w-4 h-4 text-white" />
              <span>Download</span>
              <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-black/40 text-amber-200 border border-amber-300/30">
                {APP_VERSION}
              </span>
            </Link>
          </div>

          {/* Mobile Actions */}
          <div className="flex sm:hidden items-center gap-2">
            <Link
              href="/recharge"
              className="p-2 rounded-xl bg-amber-400/10 border border-amber-400/30 text-amber-400"
              title="Top Up Coins"
            >
              <Coins className="w-4 h-4" />
            </Link>

            <Link
              href="/download-android"
              className="p-2 rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 text-white"
              title="Download APK"
            >
              <Download className="w-4 h-4" />
            </Link>

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
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`text-sm font-medium px-3 py-2.5 rounded-xl transition-colors flex items-center justify-between ${
                  link.highlight
                    ? "text-amber-300 bg-amber-400/10 font-bold border border-amber-400/20"
                    : "text-zinc-300 hover:text-white hover:bg-purple-900/30"
                }`}
              >
                <span>{link.name}</span>
                {link.highlight && <Coins className="w-4 h-4 text-amber-400" />}
              </Link>
            ))}
          </div>

          {/* Mobile Auth button */}
          <div className="pt-2 border-t border-white/10 flex flex-col gap-2.5">
            {session && user ? (
              <div className="p-3 rounded-xl bg-black/40 border border-white/10 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded-full bg-purple-600/40 flex items-center justify-center text-xs font-bold text-white">
                    {(user.displayName || user.username).charAt(0).toUpperCase()}
                  </div>
                  <span className="text-xs font-semibold text-white">{user.displayName || user.username}</span>
                </div>
                <span className="text-xs font-bold text-amber-400 font-mono">
                  {(wallet?.goldCoins ?? 0).toLocaleString("en-IN")} 🪙
                </span>
              </div>
            ) : (
              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  openAuthModal("login");
                }}
                className="w-full flex items-center justify-center gap-2 text-sm font-bold px-4 py-2.5 rounded-xl bg-white/10 hover:bg-white/15 text-white border border-white/10"
              >
                <LogIn className="w-4 h-4 text-purple-400" />
                <span>Sign In to Gappey</span>
              </button>
            )}

            <Link
              href="/download-android"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center gap-2 text-sm font-bold px-4 py-2.5 rounded-xl bg-gradient-to-r from-purple-600 via-pink-600 to-amber-500 text-white shadow-lg shadow-purple-600/30"
            >
              <Download className="w-4 h-4 text-white" />
              <span>Download for Android (APK)</span>
              <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-black/40 text-amber-200">
                {APP_VERSION}
              </span>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
