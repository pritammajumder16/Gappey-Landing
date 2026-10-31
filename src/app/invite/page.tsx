import React from "react";
import type { Metadata } from "next";
import { PLAY_STORE_URL, APK_DOWNLOAD_URL } from "@/constants/links";

export const metadata: Metadata = {
  title: "Join me on Gappey! Voice Party & Games",
  description: "Hang out in real-time voice rooms, play social games, and chat with friends on Gappey.",
  openGraph: {
    title: "Join me on Gappey! Voice Party & Games",
    description: "Hang out in real-time voice rooms, play social games, and chat with friends on Gappey.",
    url: "https://gappey.in/invite",
    siteName: "Gappey",
    type: "website",
  },
};

interface Props {
  searchParams: Promise<{ code?: string }>;
}

export default async function InviteDeepLinkPage({ searchParams }: Props) {
  const { code } = await searchParams;
  const deepLink = code
    ? `gappey://invite?code=${encodeURIComponent(code)}`
    : `gappey://invite`;

  return (
    <main className="min-h-screen bg-[#0b0c15] text-white flex flex-col items-center justify-center px-4 py-16">
      <div className="max-w-md w-full bg-[#161622] border border-white/10 rounded-2xl p-6 text-center shadow-2xl">
        <div className="w-20 h-20 bg-gradient-to-tr from-amber-400 to-orange-500 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg shadow-orange-500/20 text-3xl">
          🎁
        </div>
        <h1 className="text-2xl font-bold mb-2">You&apos;re Invited to Gappey!</h1>
        <p className="text-white/60 text-sm mb-4">
          Join voice party rooms, play ludo, send gifts, and claim welcome rewards.
        </p>

        {code && (
          <div className="bg-amber-500/10 border border-amber-500/30 rounded-xl p-3 mb-6">
            <span className="text-xs text-amber-400 block font-semibold uppercase tracking-wider mb-1">
              Referral Code
            </span>
            <span className="text-xl font-mono font-bold text-white tracking-widest">{code}</span>
          </div>
        )}

        <a
          href={deepLink}
          className="block w-full py-3.5 bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-500 hover:to-amber-600 text-black font-bold rounded-xl mb-3 shadow-md transition"
        >
          Open Gappey & Claim Reward
        </a>

        <div className="text-xs text-white/40 my-4 flex items-center justify-center gap-2">
          <span className="h-px bg-white/10 flex-1" />
          <span>Don&apos;t have the app yet?</span>
          <span className="h-px bg-white/10 flex-1" />
        </div>

        <div className="flex flex-col gap-2.5">
          <a
            href={PLAY_STORE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full py-3 bg-white/10 hover:bg-white/15 text-white font-medium rounded-xl text-sm transition"
          >
            Get it on Google Play
          </a>
          <a
            href={APK_DOWNLOAD_URL}
            className="w-full py-3 bg-white/5 hover:bg-white/10 text-white/80 hover:text-white font-medium rounded-xl text-sm transition"
          >
            Direct APK Download
          </a>
        </div>
      </div>
    </main>
  );
}
