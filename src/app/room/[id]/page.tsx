import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { PLAY_STORE_URL, APK_DOWNLOAD_URL } from "@/constants/links";

interface Props {
  params: Promise<{ id: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  return {
    title: `Join Room on Gappey`,
    description: `Voice party room on Gappey. Hang out, play ludo, and listen to music together!`,
    openGraph: {
      title: `Join Room on Gappey`,
      description: `Voice party room on Gappey. Hang out, play ludo, and listen to music together!`,
      url: `https://gappey.in/room/${id}`,
      siteName: "Gappey",
      type: "website",
    },
  };
}

export default async function RoomDeepLinkPage({ params }: Props) {
  const { id } = await params;
  const deepLink = `gappey://room/${encodeURIComponent(id)}`;

  return (
    <main className="min-h-screen bg-[#0b0c15] text-white flex flex-col items-center justify-center px-4 py-16">
      <div className="max-w-md w-full bg-[#161622] border border-white/10 rounded-2xl p-6 text-center shadow-2xl">
        <div className="w-20 h-20 bg-gradient-to-tr from-amber-500 to-yellow-300 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg shadow-amber-500/20 text-3xl">
          🎙️
        </div>
        <h1 className="text-2xl font-bold mb-2">Join Voice Room</h1>
        <p className="text-white/60 text-sm mb-6">
          You were invited to a live voice party on Gappey! Tap below to open in the app.
        </p>

        <a
          href={deepLink}
          className="block w-full py-3.5 bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-500 hover:to-amber-600 text-black font-bold rounded-xl mb-3 shadow-md transition"
        >
          Open in Gappey App
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
