import React from "react";
import Link from "next/link";
import { ArrowLeft, Scale, AlertTriangle, FileCheck } from "lucide-react";

export const metadata = {
  title: "Terms and Conditions | Gappey Live Voice Party",
  description: "Terms and Conditions of service for Gappey Voice Party platform.",
};

export default function TermsConditionsPage() {
  return (
    <div className="min-h-screen bg-[#07070c] text-zinc-300 font-sans selection:bg-purple-500 selection:text-white">
      {/* Ambient background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-pink-700/15 blur-[140px] rounded-full pointer-events-none" />

      <header className="border-b border-white/10 bg-[#090814]/80 backdrop-blur-xl sticky top-0 z-40">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm font-semibold text-zinc-300 hover:text-white transition-colors"
          >
            <ArrowLeft className="w-4 h-4" /> Back to Home
          </Link>
          <span className="text-xs uppercase font-mono tracking-wider text-pink-400 font-bold">
            Gappey Terms of Service
          </span>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 sm:px-6 py-12 sm:py-16 space-y-10">
        {/* Title Block */}
        <div className="space-y-3 border-b border-white/10 pb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-pink-900/40 border border-pink-500/30 text-pink-300 text-xs font-semibold">
            <Scale className="w-3.5 h-3.5 text-pink-400" /> User Agreement
          </div>
          <h1 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
            Terms &amp; Conditions
          </h1>
          <p className="text-xs sm:text-sm text-zinc-400">
            Last Updated: October 12, 2026 · Effective Date: October 12, 2026
          </p>
        </div>

        {/* Content sections */}
        <div className="space-y-8 text-sm sm:text-base leading-relaxed text-zinc-300">
          <section className="space-y-3">
            <h2 className="text-lg sm:text-xl font-bold text-white flex items-center gap-2">
              1. Acceptance of Terms
            </h2>
            <p>
              By downloading, installing, registering, or using the <strong>Gappey</strong> application or platform, you acknowledge that you have read, understood, and agreed to be bound by these Terms and Conditions (&quot;Terms&quot;) and our Privacy Policy. If you do not agree, do not use the application.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg sm:text-xl font-bold text-white flex items-center gap-2">
              2. Eligibility &amp; Age Restriction (18+)
            </h2>
            <div className="p-4 rounded-2xl bg-amber-950/30 border border-amber-500/30 text-amber-200 text-xs sm:text-sm space-y-2">
              <p>
                <strong>Age of Majority:</strong> You must be at least eighteen (18) years of age to create an account, enter voice rooms, purchase virtual goods, or participate in the virtual economy.
              </p>
              <p>
                Providing false age information constitutes a material breach of these Terms and will result in immediate termination of the account and forfeiture of any virtual balances.
              </p>
            </div>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg sm:text-xl font-bold text-white flex items-center gap-2">
              3. Virtual Currency &amp; Economic Model (Game-Money Separation)
            </h2>
            <p>
              Gappey operates a transparent, entertainment-first virtual economy governed by strict regulatory rules:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-zinc-300 text-sm">
              <li>
                <strong>Gold Coins:</strong> Purchased virtual tokens used strictly for social gifting, profile cosmetic items, and premium room benefits. Gold Coins do not yield interest and cannot be cashed out.
              </li>
              <li>
                <strong>Diamonds:</strong> Generated exclusively when users receive eligible virtual gifts from community members. Subject to verification, Diamonds may be cashed out under applicable income tax (TDS) and KYC requirements.
              </li>
              <li>
                <strong>Silver Coins (Game-Only Currency):</strong> Free entertainment currency obtained through daily logins, quests, and free activities. Silver has zero monetary value and cannot be purchased, gifted for diamonds, converted into gold, or cashed out.
              </li>
              <li>
                <strong>No Real-Money Gaming:</strong> Under our <em>game-money-separation</em> architecture and Indian gaming regulations, nothing won or earned in mini-games can ever be converted into real currency (₹), Gold, or Diamonds.
              </li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg sm:text-xl font-bold text-white flex items-center gap-2">
              4. Community Guidelines &amp; Code of Conduct
            </h2>
            <p>To ensure a safe, welcoming environment, you strictly agree NOT to:</p>
            <ul className="list-disc pl-5 space-y-1.5 text-zinc-300 text-sm">
              <li>Broadcast illegal, abusive, sexually explicit, defamatory, hateful, or harassing content in audio streams or chat.</li>
              <li>Impersonate any person, host, moderator, or Gappey official.</li>
              <li>Attempt fraud, money laundering, chargebacks, unauthorized account selling, or payment bypasses.</li>
              <li>Transmit malware, reverse-engineer, decompile, or tamper with the application or network sockets.</li>
              <li>Bully, stalk, or invade the privacy of other community members.</li>
            </ul>
            <p>
              Violations are subject to room kicks, temporary mutes, IP bans, permanent account deletion, and referral to law enforcement agencies where applicable.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg sm:text-xl font-bold text-white flex items-center gap-2">
              5. Intellectual Property Rights
            </h2>
            <p>
              All software, logos, trademarks, animations, virtual gifts, cosmetic designs, and visual branding are the exclusive intellectual property of Gappey and its licensors. You are granted a limited, personal, revocable license to use the app for personal, non-commercial entertainment.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg sm:text-xl font-bold text-white flex items-center gap-2">
              6. Limitation of Liability &amp; Disclaimers
            </h2>
            <p>
              The Gappey platform is provided on an &quot;AS IS&quot; and &quot;AS AVAILABLE&quot; basis without warranties of any kind. We do not guarantee uninterrupted or error-free voice transmission. In no event shall Gappey, its officers, or affiliates be liable for indirect, incidental, or punitive damages arising from your use or inability to use the platform.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg sm:text-xl font-bold text-white flex items-center gap-2">
              7. Governing Law &amp; Jurisdiction
            </h2>
            <p>
              These Terms are governed by and construed in accordance with the laws of the Republic of India. Any disputes arising out of or related to these Terms shall be subject to the exclusive jurisdiction of the competent courts in India.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg sm:text-xl font-bold text-white flex items-center gap-2">
              8. Contact &amp; Support
            </h2>
            <p>
              For legal inquiries, dispute resolution, or support assistance, please reach out to us at{" "}
              <a href="mailto:support@gappey.com" className="text-pink-400 hover:underline">
                support@gappey.com
              </a>.
            </p>
          </section>
        </div>
      </main>

      <footer className="border-t border-white/10 py-8 text-center text-xs text-zinc-400">
        <p>© {new Date().getFullYear()} Gappey. All rights reserved.</p>
      </footer>
    </div>
  );
}
