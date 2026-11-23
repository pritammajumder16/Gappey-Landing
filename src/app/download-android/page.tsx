"use client";

import React from "react";
import Image from "next/image";
import { Download, AlertCircle, RefreshCw, CheckCircle2, ShieldAlert } from "lucide-react";
import { APK_DOWNLOAD_URL, APK_SIZE_BYTES, APP_VERSION, PLAY_STORE_URL } from "@/constants/links";

interface ReleaseMetadata {
  active: boolean;
  version?: string;
  apkUrl?: string;
  sizeBytes?: number;
  reason?: string;
}

export default function DownloadAndroidPage() {
  // The landing page always offers the current production build (constants); it no longer asks the legacy API.
  const release: ReleaseMetadata = { active: true, version: APP_VERSION, apkUrl: APK_DOWNLOAD_URL, sizeBytes: APK_SIZE_BYTES };
  const loading = false;
  const error: string | null = null;
  const fetchRelease = () => {};

  const apkDownloadUrl = release?.apkUrl || APK_DOWNLOAD_URL;
  const versionLabel = release?.version ? (release.version.startsWith("v") ? release.version : `v${release.version}`) : APP_VERSION;
  const sizeMB = release?.sizeBytes ? (release.sizeBytes / (1024 * 1024)).toFixed(1) + " MB" : null;

  return (
    <main className="min-h-screen bg-[#070312] text-zinc-100 flex flex-col items-center justify-center p-4 sm:p-6 relative overflow-hidden selection:bg-amber-500 selection:text-black">
      {/* Background Ambience */}
      <div className="absolute top-[-20%] left-1/2 -translate-x-1/2 w-full max-w-[600px] h-[600px] bg-gradient-to-br from-purple-800/25 via-fuchsia-900/10 to-transparent rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[400px] h-[400px] bg-amber-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="w-full max-w-md mx-auto z-10 flex flex-col items-center text-center">
        {/* App Icon */}
        <div className="relative mb-5 group">
          <div className="absolute -inset-1.5 bg-gradient-to-r from-amber-500 to-purple-600 rounded-[28px] blur opacity-60 group-hover:opacity-100 transition duration-500" />
          <div className="relative w-24 h-24 rounded-[24px] overflow-hidden bg-[#160a2b] border border-amber-400/30 flex items-center justify-center shadow-2xl">
            <Image
              src="/icon-192.png"
              alt="Gappey App Icon"
              width={96}
              height={96}
              className="w-full h-full object-cover"
              priority
            />
          </div>
        </div>

        {/* Title & Heading */}
        <h2 className="text-sm font-semibold tracking-widest uppercase text-amber-400 mb-1">
          Gappey
        </h2>
        <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mb-2">
          Get Gappey for Android
        </h1>
        <p className="text-sm text-zinc-400 max-w-xs mb-6">
          Install Gappey from the Google Play Store or download the official Android APK directly.
        </p>

        {/* Status / Card Container */}
        <div className="w-full bg-white/[0.04] border border-white/10 rounded-2xl p-6 backdrop-blur-xl shadow-xl flex flex-col items-center mb-6">
          {/* Primary Option: Google Play Store */}
          <div className="w-full mb-5">
            <a
              href={PLAY_STORE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full group relative inline-flex items-center justify-center gap-3 px-6 py-4 rounded-xl font-bold text-black text-base shadow-lg transition-all duration-300 active:scale-[0.98] overflow-hidden bg-gradient-to-r from-amber-400 via-amber-300 to-yellow-500 hover:brightness-105"
            >
              <svg className="w-5 h-5 fill-current text-black" viewBox="0 0 24 24">
                <path d="M3.609 1.814L13.793 12 3.61 22.186a1.996 1.996 0 0 1-.61-1.442V3.256c0-.564.226-1.077.609-1.442zm11.234 11.236l2.302-2.302-11.83-6.83 9.528 9.132zm0 1.898l-9.528 9.132 11.83-6.83-2.302-2.302zm1.414-1.414l3.12-1.802c.866-.5 1.397-1.42 1.397-2.42 0-1-.531-1.92-1.397-2.42l-3.12-1.802-2.302 2.302 2.302 2.302z"/>
              </svg>
              <span>Get it on Google Play</span>
            </a>
          </div>

          <div className="w-full flex items-center gap-3 my-2 text-zinc-500 text-xs">
            <span className="h-px bg-white/10 flex-1" />
            <span>OR DIRECT INSTALL</span>
            <span className="h-px bg-white/10 flex-1" />
          </div>

          {loading ? (
            <div className="py-6 flex flex-col items-center gap-3">
              <RefreshCw className="w-6 h-6 text-amber-400 animate-spin" />
              <p className="text-xs text-zinc-400">Checking latest release...</p>
            </div>
          ) : error ? (
            <div className="py-4 flex flex-col items-center text-center gap-3">
              <div className="w-10 h-10 rounded-full bg-red-500/10 border border-red-500/20 flex items-center justify-center text-red-400">
                <AlertCircle className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs font-semibold text-red-300">Direct Download Unavailable</p>
                <p className="text-[11px] text-zinc-400 mt-1 max-w-xs">{error}</p>
              </div>
              <button
                onClick={() => void fetchRelease()}
                className="mt-1 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/10 hover:bg-white/15 text-xs text-white"
              >
                <RefreshCw className="w-3 h-3" />
                Retry
              </button>
            </div>
          ) : (
            <>
              {/* Version & Size Pill */}
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-400/10 border border-amber-400/20 text-amber-300 text-xs font-medium my-3">
                <span className="font-semibold">{versionLabel}</span>
                {sizeMB && (
                  <>
                    <span className="text-amber-400/40">•</span>
                    <span>{sizeMB}</span>
                  </>
                )}
                <span className="text-amber-400/40">•</span>
                <span className="text-emerald-400 flex items-center gap-1">
                  <CheckCircle2 className="w-3 h-3" /> Signed APK
                </span>
              </div>

              {/* Single Official APK Button */}
              <a
                href={apkDownloadUrl}
                download
                className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl font-semibold text-white text-sm border border-white/15 bg-white/[0.06] hover:bg-white/[0.12] transition-all duration-200 active:scale-[0.98]"
              >
                <Download className="w-4 h-4 text-amber-400" />
                <span>Download APK ({versionLabel})</span>
              </a>

              {/* Instructions */}
              <div className="w-full mt-6 pt-5 border-t border-white/5 text-left">
                <p className="text-xs font-semibold text-zinc-300 mb-2">How to install APK:</p>
                <ol className="text-xs text-zinc-400 space-y-1.5 list-decimal list-inside leading-relaxed">
                  <li>Tap <strong className="text-zinc-200">Download APK</strong> above.</li>
                  <li>When downloaded, tap the file in notifications or Downloads.</li>
                  <li>If prompted, enable <strong className="text-zinc-200">Install unknown apps</strong> for your browser.</li>
                  <li>Tap <strong className="text-zinc-200">Install</strong>, then launch Gappey.</li>
                </ol>
              </div>
            </>
          )}
        </div>

        {/* Security Guidance Notice */}
        <div className="w-full flex items-start gap-3 p-3.5 rounded-xl bg-amber-500/[0.07] border border-amber-500/20 text-left">
          <ShieldAlert className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
          <p className="text-[11px] text-zinc-300 leading-normal">
            Android may prompt a confirmation before installing APK files downloaded outside Google Play. This is standard security verification for direct packages.
          </p>
        </div>

        {/* Footer info */}
        <p className="mt-8 text-[11px] text-zinc-500">
          © {new Date().getFullYear()} Gappey. Verified official release.
        </p>
      </div>
    </main>
  );
}
