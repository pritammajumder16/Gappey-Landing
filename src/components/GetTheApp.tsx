"use client";

import React from "react";
import { getPlayStoreUrlWithReferrer } from "@/constants/links";

interface GetTheAppProps {
  className?: string;
  size?: "sm" | "md" | "lg";
  code?: string | null;
}

export default function GetTheApp({ className = "", size = "md", code = null }: GetTheAppProps) {
  const isSmall = size === "sm";
  const playUrl = getPlayStoreUrlWithReferrer(code);

  return (
    <div className={`flex flex-wrap items-center gap-3 ${className}`}>
      {/* Google Play Store Badge */}
      <a
        href={playUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Get Gappey on Google Play"
        className={`group inline-flex items-center gap-3 rounded-xl border border-white/15 bg-white/[0.06] hover:bg-white/[0.12] hover:border-amber-400/40 text-white transition-all shadow-md active:scale-95 ${
          isSmall ? "px-3.5 py-2 text-xs" : "px-4 sm:px-5 py-2.5 sm:py-3 text-sm"
        }`}
      >
        <svg className="w-5 h-5 shrink-0 fill-current text-amber-400 group-hover:scale-105 transition-transform" viewBox="0 0 24 24">
          <path d="M3.609 1.814L13.793 12 3.61 22.186a1.996 1.996 0 0 1-.61-1.442V3.256c0-.564.226-1.077.609-1.442zm11.234 11.236l2.302-2.302-11.83-6.83 9.528 9.132zm0 1.898l-9.528 9.132 11.83-6.83-2.302-2.302zm1.414-1.414l3.12-1.802c.866-.5 1.397-1.42 1.397-2.42 0-1-.531-1.92-1.397-2.42l-3.12-1.802-2.302 2.302 2.302 2.302z"/>
        </svg>
        <div className="flex flex-col text-left leading-tight">
          <span className="text-[10px] text-zinc-400 uppercase tracking-wider font-semibold">GET IT ON</span>
          <span className="font-bold text-white text-sm sm:text-base">Google Play</span>
        </div>
      </a>

      {/* Apple App Store Badge (Disabled, Coming soon) */}
      <div
        aria-disabled="true"
        className={`inline-flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.03] text-zinc-400 opacity-60 cursor-not-allowed select-none ${
          isSmall ? "px-3.5 py-2 text-xs" : "px-4 sm:px-5 py-2.5 sm:py-3 text-sm"
        }`}
      >
        <svg className="w-5 h-5 shrink-0 fill-current text-zinc-400" viewBox="0 0 24 24">
          <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 6.37c.61-.75 1.04-1.8 0.92-2.85-.9.04-2 .6-2.65 1.35-.58.66-1.08 1.73-.95 2.76 1.01.08 2.06-.51 2.68-1.26z"/>
        </svg>
        <div className="flex flex-col text-left leading-tight">
          <span className="text-[10px] text-zinc-500 uppercase tracking-wider font-semibold flex items-center gap-1.5">
            App Store <span className="text-[9px] px-1.5 py-0.2 rounded-full bg-zinc-800 text-amber-300 border border-amber-400/30">Coming soon</span>
          </span>
          <span className="font-semibold text-zinc-300 text-sm sm:text-base">Download on iOS</span>
        </div>
      </div>
    </div>
  );
}
