import React from "react";
import type { Metadata } from "next";
import LegalPageLayout from "@/components/legal/LegalPageLayout";
import { Users, Mic, HeartHandshake, ShieldCheck, Gamepad2, Award } from "lucide-react";
import { BUSINESS_IDENTITY } from "@/constants/compliance";

export const metadata: Metadata = {
  title: "About Us | Gappey Live Voice Party",
  description:
    "Learn about Gappey, India's real-time social audio and live voice party platform developed by PRITAMI (Unit: Gappey) in Kolkata, West Bengal.",
};

export default function AboutUsPage() {
  return (
    <LegalPageLayout
      badge="About Gappey"
      title="About Us"
      description="Connecting voices, fostering friendships, and celebrating social communities across India in interactive, real-time live voice rooms."
    >
      {/* 1. Who We Are */}
      <section className="space-y-4">
        <h2 className="text-xl font-bold text-white flex items-center gap-2">
          <Mic className="w-5 h-5 text-amber-400" /> 1. Who We Are
        </h2>
        <p>
          <strong>Gappey</strong> is an interactive social audio application developed and operated by{" "}
          <strong>{BUSINESS_IDENTITY.enterpriseName}</strong> (Unit: <strong>{BUSINESS_IDENTITY.unitName}</strong>),
          a registered micro-enterprise under the Ministry of Micro, Small and Medium Enterprises (MSME), Government of India
          (Registration Number: <span className="font-mono text-amber-300">{BUSINESS_IDENTITY.registrationNumber}</span>),
          headquartered in {BUSINESS_IDENTITY.city}, {BUSINESS_IDENTITY.state}.
        </p>
        <p>
          We created Gappey to bring people together through the power of human voice. Whether singing, hosting casual talk shows,
          participating in lively discussions, or hanging out after a busy day, Gappey offers an accessible, high-fidelity
          digital living room for friends, communities, and Families across India.
        </p>
      </section>

      {/* 2. Our Mission & Vision */}
      <section className="space-y-4">
        <h2 className="text-xl font-bold text-white flex items-center gap-2">
          <HeartHandshake className="w-5 h-5 text-amber-400" /> 2. Our Mission &amp; Vision
        </h2>
        <p>
          Our mission is to build safe, vibrant, and authentic voice communities where individuals can express themselves freely,
          discover like-minded friends, and celebrate shared interests without the pressure of video cameras or unrealistic filters.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
          <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5 space-y-2">
            <h3 className="font-semibold text-white flex items-center gap-2">
              <Users className="w-4 h-4 text-purple-400" /> Genuine Connection
            </h3>
            <p className="text-xs text-zinc-400 leading-relaxed">
              We prioritize voice-first interaction where emotional nuance and spontaneous conversation create lasting friendships and community bonds.
            </p>
          </div>
          <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5 space-y-2">
            <h3 className="font-semibold text-white flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-emerald-400" /> Community Safety First
            </h3>
            <p className="text-xs text-zinc-400 leading-relaxed">
              An 18+ adult platform governed by strict community guidelines, automated and human moderation, and rapid reporting tools to keep interactions respectful.
            </p>
          </div>
        </div>
      </section>

      {/* 3. Core Features */}
      <section className="space-y-4">
        <h2 className="text-xl font-bold text-white flex items-center gap-2">
          <Gamepad2 className="w-5 h-5 text-amber-400" /> 3. What You Can Do on Gappey
        </h2>
        <ul className="space-y-2 text-sm">
          <li className="flex items-start gap-2">
            <span className="text-amber-400 font-bold">•</span>
            <span>
              <strong>Multi-Seat Voice Party Rooms:</strong> Create or join 1-to-16 seat live audio stages with crystal-clear spatial audio, custom room themes, and background music.
            </span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-amber-400 font-bold">•</span>
            <span>
              <strong>Virtual Gifting &amp; Expressive Effects:</strong> Show appreciation to friends and talented hosts with animated 3D gifts, luxury entrance rides, avatar frames, and chat bubbles.
            </span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-amber-400 font-bold">•</span>
            <span>
              <strong>Families &amp; Community Clans:</strong> Band together with fellow room members to form a Family clan, participate in clan activities, and climb weekly community leaderboards.
            </span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-amber-400 font-bold">•</span>
            <span>
              <strong>Casual Social Mini-Games:</strong> Play casual board and table games like Ludo and trivia with friends while voice chatting, using game-only virtual entertainment points with zero real-money wagering.
            </span>
          </li>
        </ul>
      </section>

      {/* 4. Commitment to Compliance */}
      <section className="space-y-4">
        <h2 className="text-xl font-bold text-white flex items-center gap-2">
          <Award className="w-5 h-5 text-amber-400" /> 4. Compliance &amp; Transparency
        </h2>
        <p>
          Gappey operates strictly within the framework of Indian digital and commercial laws, including the
          <em> Information Technology Act, 2000</em>, the <em>Digital Personal Data Protection Act, 2023 (DPDP)</em>,
          and applicable Reserve Bank of India (RBI) payment guidelines via authorized payment aggregators.
        </p>
        <p>
          Gappey is not a real-money gaming platform and does not offer cash prizes or guaranteed income schemes.
          All virtual economies are clearly documented, transparently priced, and subject to comprehensive consumer protection standards.
        </p>
      </section>
    </LegalPageLayout>
  );
}
