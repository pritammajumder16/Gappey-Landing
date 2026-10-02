"use client";

import React from "react";
import { 
  Code2, 
  Smartphone, 
  Server, 
  Cloud, 
  Monitor, 
  Globe, 
  Sparkles, 
  ArrowUpRight,
  Send
} from "lucide-react";

export default function DeveloperPromo() {
  const services = [
    { label: "Mobile Apps (iOS & Android)", icon: <Smartphone className="w-3.5 h-3.5" /> },
    { label: "High-Scale Backends & APIs", icon: <Server className="w-3.5 h-3.5" /> },
    { label: "Modern Web Apps & Websites", icon: <Globe className="w-3.5 h-3.5" /> },
    { label: "DevOps, Cloud & Infrastructure", icon: <Cloud className="w-3.5 h-3.5" /> },
    { label: "Desktop Applications", icon: <Monitor className="w-3.5 h-3.5" /> },
  ];

  return (
    <section className="relative py-12 bg-[#05050a] border-t border-purple-950/40">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Sleek, Compact Card */}
        <div className="relative rounded-3xl bg-gradient-to-r from-[#120e24]/90 via-[#18112e]/90 to-[#0e0c1f]/90 border border-purple-500/20 p-6 sm:p-8 backdrop-blur-xl shadow-xl shadow-purple-950/40 overflow-hidden">
          
          {/* Subtle Glow in background */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-pink-600/10 blur-3xl rounded-full pointer-events-none" />

          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 relative z-10">
            
            {/* Left Info */}
            <div className="space-y-3 max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/15 border border-purple-500/30 text-purple-300 text-[11px] font-bold uppercase tracking-wider">
                <Code2 className="w-3.5 h-3.5 text-pink-400" />
                Custom Software &amp; Web Solutions
              </div>

              <h3 className="text-xl sm:text-2xl font-black text-white tracking-tight">
                Need Help Building Your Next Web, Mobile, or Backend App?
              </h3>

              <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
                Looking to build high-performance mobile applications, modern responsive websites, scalable backends, DevOps infrastructure, or desktop software? Comprehensive software solutions provided for a competitive price.
              </p>

              {/* Service Badges */}
              <div className="flex flex-wrap gap-2 pt-1">
                {services.map((srv, idx) => (
                  <span
                    key={idx}
                    className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-zinc-900/80 border border-white/5 text-[11px] font-medium text-zinc-300"
                  >
                    <span className="text-pink-400">{srv.icon}</span>
                    {srv.label}
                  </span>
                ))}
              </div>
            </div>

            {/* Right: Instagram CTA Contact */}
            <div className="shrink-0 w-full md:w-auto flex flex-col items-center md:items-end gap-2">
              <a
                href="https://instagram.com/khushi_jha16"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full md:w-auto inline-flex items-center justify-center gap-2.5 px-5 py-3.5 rounded-2xl bg-gradient-to-tr from-[#f09433] via-[#e6683c] via-[#dc2743] via-[#cc2366] to-[#bc1888] text-white font-bold text-sm shadow-lg shadow-pink-600/30 hover:scale-[1.03] active:scale-[0.98] transition-all duration-200 group"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.13-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
                <span>Contact @khushi_jha16</span>
                <ArrowUpRight className="w-4 h-4 text-white/80 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
              <span className="text-[11px] text-zinc-400">
                DM on Instagram for inquiries &amp; quotes
              </span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
