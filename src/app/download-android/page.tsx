"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Download, AlertCircle, RefreshCw, CheckCircle2, ShieldAlert } from "lucide-react";
import { APK_DOWNLOAD_URL, APP_VERSION } from "@/constants/links";

interface ReleaseMetadata {
  active: boolean;
  version?: string;
  apkUrl?: string;
  sizeBytes?: number;
  reason?: string;
}

export default function DownloadAndroidPage() {
  const [release, setRelease] = useState<ReleaseMetadata | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchRelease = async () => {
    setError(null);
    try {
      const apiUrl = process.env.NEXT_PUBLIC_API_URL || "https://api.gappey.in";
      const res = await fetch(`${apiUrl}/system-config/active-android-release`, {
        cache: "no-store",
      });
      if (res.ok) {
        const data = await res.json();
        if (data.active === false) {
          setError(data.reason || "The active Android release has been temporarily withdrawn.");
          setRelease(data);
        } else {
          setRelease(data);
        }
      } else {
        // Fallback to static release constants
        setRelease({
          active: true,
          version: APP_VERSION,
          apkUrl: APK_DOWNLOAD_URL,
          sizeBytes: 94561659,
        });
      }
    } catch {
      // Offline or network error: fallback to default constants
      setRelease({
        active: true,
        version: APP_VERSION,
        apkUrl: APK_DOWNLOAD_URL,
        sizeBytes: 94561659,
      });
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    let alive = true;
    const load = async () => {
      try {
        const apiUrl = process.env.NEXT_PUBLIC_API_URL || "https://api.gappey.in";
        const res = await fetch(`${apiUrl}/system-config/active-android-release`, {
          cache: "no-store",
        });
        if (!alive) return;
        if (res.ok) {
          const data = await res.json();
          if (data.active === false) {
            setError(data.reason || "The active Android release has been temporarily withdrawn.");
            setRelease(data);
          } else {
            setRelease(data);
          }
        } else {
          setRelease({
            active: true,
            version: APP_VERSION,
            apkUrl: APK_DOWNLOAD_URL,
            sizeBytes: 94561659,
          });
        }
      } catch {
        if (!alive) return;
        setRelease({
          active: true,
          version: APP_VERSION,
          apkUrl: APK_DOWNLOAD_URL,
          sizeBytes: 94561659,
        });
      } finally {
        if (alive) setLoading(false);
      }
    };
    void load();
    return () => {
      alive = false;
    };
  }, []);

  const apkDownloadUrl = release?.apkUrl || APK_DOWNLOAD_URL;
  const versionLabel = release?.version ? (release.version.startsWith("v") ? release.version : `v${release.version}`) : APP_VERSION;
  const sizeMB = release?.sizeBytes ? (release.sizeBytes / (1024 * 1024)).toFixed(1) + " MB" : null;

  return (
    <main className="min-h-screen bg-[#070312] text-zinc-100 flex flex-col items-center justify-center p-4 sm:p-6 relative overflow-hidden selection:bg-amber-500 selection:text-black">
      {/* Background Ambience */}
      <div className="absolute top-[-20%] left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-gradient-to-br from-purple-800/25 via-fuchsia-900/10 to-transparent rounded-full blur-3xl pointer-events-none" />
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
          Download Gappey for Android
        </h1>
        <p className="text-sm text-zinc-400 max-w-xs mb-6">
          Download the latest official release, open the downloaded file, and follow the Android installation prompts.
        </p>

        {/* Status / Card Container */}
        <div className="w-full bg-white/[0.04] border border-white/10 rounded-2xl p-6 backdrop-blur-xl shadow-xl flex flex-col items-center mb-6">
          {loading ? (
            <div className="py-8 flex flex-col items-center gap-3">
              <RefreshCw className="w-7 h-7 text-amber-400 animate-spin" />
              <p className="text-xs text-zinc-400">Checking latest release...</p>
            </div>
          ) : error ? (
            <div className="py-4 flex flex-col items-center text-center gap-3">
              <div className="w-12 h-12 rounded-full bg-red-500/10 border border-red-500/20 flex items-center justify-center text-red-400">
                <AlertCircle className="w-6 h-6" />
              </div>
              <div>
                <p className="text-sm font-semibold text-red-300">Release Unavailable</p>
                <p className="text-xs text-zinc-400 mt-1 max-w-xs">{error}</p>
              </div>
              <button
                onClick={() => void fetchRelease()}
                className="mt-2 inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white/10 hover:bg-white/15 text-xs font-medium text-white transition active:scale-95"
              >
                <RefreshCw className="w-3.5 h-3.5" />
                Retry Check
              </button>
            </div>
          ) : (
            <>
              {/* Version & Size Pill */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-400/10 border border-amber-400/20 text-amber-300 text-xs font-medium mb-5">
                <span className="font-semibold">{versionLabel}</span>
                {sizeMB && (
                  <>
                    <span className="text-amber-400/40">•</span>
                    <span>{sizeMB}</span>
                  </>
                )}
                <span className="text-amber-400/40">•</span>
                <span className="text-emerald-400 flex items-center gap-1">
                  <CheckCircle2 className="w-3 h-3" /> Official
                </span>
              </div>

              {/* Prominent Download Button */}
              <a
                href={apkDownloadUrl}
                download
                className="w-full group relative inline-flex items-center justify-center gap-3 px-6 py-4 rounded-xl font-bold text-black text-base shadow-lg transition-all duration-300 active:scale-[0.98] overflow-hidden bg-gradient-to-r from-amber-400 via-amber-300 to-yellow-500 hover:brightness-105"
              >
                <Download className="w-5 h-5 text-black transition-transform group-hover:translate-y-0.5" />
                <span>Download APK</span>
              </a>

              {/* Instructions */}
              <div className="w-full mt-6 pt-5 border-t border-white/5 text-left">
                <p className="text-xs font-semibold text-zinc-300 mb-2">How to install:</p>
                <ol className="text-xs text-zinc-400 space-y-1.5 list-decimal list-inside leading-relaxed">
                  <li>Tap <strong className="text-zinc-200">Download APK</strong> above.</li>
                  <li>When downloaded, tap the notification or open the file in Chrome.</li>
                  <li>If prompted, tap <strong className="text-zinc-200">Settings</strong> to allow installing apps from Chrome.</li>
                  <li>Tap <strong className="text-zinc-200">Install</strong>, then open Gappey.</li>
                </ol>
              </div>
            </>
          )}
        </div>

        {/* Security Guidance Notice */}
        <div className="w-full flex items-start gap-3 p-3.5 rounded-xl bg-amber-500/[0.07] border border-amber-500/20 text-left">
          <ShieldAlert className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
          <p className="text-[11px] text-zinc-300 leading-normal">
            Android or Chrome may ask for confirmation before downloading or opening APK files. This is standard security verification for direct app updates.
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
