import React from "react";
import Link from "next/link";
import { ArrowLeft, Shield, AlertTriangle, CheckCircle2, Mail, Lock } from "lucide-react";

export const metadata = {
  title: "Child Safety Standards & CSAE Policy | Gappey",
  description:
    "Gappey's published standards, zero-tolerance policy against Child Sexual Abuse and Exploitation (CSAE), and reporting mechanisms.",
};

export default function ChildSafetyPage() {
  return (
    <div className="min-h-screen bg-[#07070c] text-zinc-300 font-sans selection:bg-purple-500 selection:text-white">
      {/* Ambient background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-red-700/10 blur-[140px] rounded-full pointer-events-none" />

      <header className="border-b border-white/10 bg-[#090814]/80 backdrop-blur-xl sticky top-0 z-40">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm font-semibold text-zinc-300 hover:text-white transition-colors"
          >
            <ArrowLeft className="w-4 h-4" /> Back to Home
          </Link>
          <span className="text-xs uppercase font-mono tracking-wider text-purple-400 font-bold">
            Gappey Safety &amp; Trust
          </span>
        </div>
      </header>

      <main className="max-w-3xl mx-auto px-4 sm:px-6 py-12 sm:py-16 space-y-10">
        {/* Title Block */}
        <div className="space-y-3 border-b border-white/10 pb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-950/40 border border-red-500/30 text-red-300 text-xs font-semibold">
            <Shield className="w-3.5 h-3.5 text-red-400" /> Child Safety Standards
          </div>
          <h1 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
            Child Sexual Exploitation &amp; Abuse (CSAE) Policy
          </h1>
          <p className="text-xs sm:text-sm text-zinc-400">
            Last Updated: October 30, 2026 · Mandatory standards in accordance with Google Play Developer Policy and Global Child Protection Laws.
          </p>
        </div>

        {/* Zero Tolerance Statement */}
        <div className="p-5 rounded-2xl bg-red-950/30 border border-red-500/30 text-red-200 text-sm flex items-start gap-3 leading-relaxed">
          <AlertTriangle className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
          <div>
            <strong>Strict Zero-Tolerance Policy:</strong> Gappey strictly prohibits any form of Child Sexual Abuse Material (CSAM), Child Sexual Exploitation and Abuse (CSAE), grooming, sexualized communication involving minors, or child endangerment. Any violation results in immediate, permanent account termination and referral to law enforcement agencies.
          </div>
        </div>

        {/* 1. Strict 18+ Age Requirement */}
        <section className="space-y-3">
          <h2 className="text-xl font-bold text-white flex items-center gap-2">
            1. Age Eligibility &amp; Age Verification
          </h2>
          <p className="text-sm leading-relaxed text-zinc-300">
            Gappey is an interactive entertainment platform designed and restricted exclusively for individuals aged <strong>18 years or older</strong>. During registration and onboarding, all users must complete a mandatory Date of Birth verification confirming they are at least 18 years of age. Accounts found to be created by or representing minors under 18 will be terminated immediately.
          </p>
        </section>

        {/* 2. Prohibited Content and Conduct */}
        <section className="space-y-3">
          <h2 className="text-xl font-bold text-white flex items-center gap-2">
            2. Prohibited Content and Conduct
          </h2>
          <p className="text-sm leading-relaxed text-zinc-300">
            The following behaviors and content are unconditionally banned across all voice rooms, direct messages, user profiles, Moments posts, and chat features:
          </p>
          <ul className="list-disc list-inside space-y-1.5 text-sm text-zinc-300 pl-2">
            <li>Creating, uploading, sharing, or soliciting Child Sexual Abuse Material (CSAM) or any sexualized depictions of minors.</li>
            <li>Grooming, sexually suggestive behavior, or inappropriate contact directed toward or involving minors.</li>
            <li>Facilitating or promoting child trafficking, sexual solicitation, or harm to children.</li>
            <li>Sharing links, external handles, or invitations to third-party services hosting illegal material.</li>
          </ul>
        </section>

        {/* 3. In-App Reporting & Moderation */}
        <section className="space-y-3">
          <h2 className="text-xl font-bold text-white flex items-center gap-2">
            3. In-App Reporting &amp; Action Mechanisms
          </h2>
          <p className="text-sm leading-relaxed text-zinc-300">
            Gappey empowers users to immediately flag and report any suspicious or harmful content:
          </p>
          <div className="p-4 rounded-xl bg-white/[0.03] border border-white/10 space-y-2 text-sm">
            <p><strong>• In-App User Report:</strong> Tap any user profile → select the Report icon → choose Child Safety / Harassment.</p>
            <p><strong>• In-App Room Report:</strong> Tap the Room menu → Report Room → provide details.</p>
            <p><strong>• Immediate Block:</strong> Users can block abusive accounts instantly to prevent any further interaction or messaging.</p>
          </div>
        </section>

        {/* 4. Cooperation with Law Enforcement */}
        <section className="space-y-3">
          <h2 className="text-xl font-bold text-white flex items-center gap-2">
            4. Cooperation with Law Enforcement &amp; Authorities
          </h2>
          <p className="text-sm leading-relaxed text-zinc-300">
            Gappey complies with all applicable local, national, and international child protection laws, including the <em>Protection of Children from Sexual Offences (POCSO) Act</em>, the <em>Information Technology Act, 2000</em>, and global reporting frameworks. We proactively report identified CSAM/CSAE incidents, associated user identifiers, and IP records to the <strong>National Center for Missing &amp; Exploited Children (NCMEC)</strong> and local law enforcement authorities.
          </p>
        </section>

        {/* 5. Contact & Designated Safety Officer */}
        <section className="p-6 rounded-2xl bg-purple-950/20 border border-purple-500/20 space-y-3">
          <h2 className="text-lg font-bold text-white flex items-center gap-2">
            <Mail className="w-5 h-5 text-purple-400" /> Designated Point of Contact
          </h2>
          <p className="text-sm text-zinc-300">
            If you encounter or suspect any child safety concern, please contact our dedicated safety team immediately:
          </p>
          <div className="text-sm text-purple-200 font-mono space-y-1">
            <p><strong>Email:</strong> <a href="mailto:gappeyindia@gmail.com" className="underline text-purple-300">gappeyindia@gmail.com</a></p>
            <p><strong>Alternate / Developer Contact:</strong> <a href="mailto:pritammajumder416@gmail.com" className="underline text-purple-300">pritammajumder416@gmail.com</a></p>
          </div>
          <p className="text-xs text-zinc-400 pt-1">
            Safety reports are monitored 24/7 and escalated with top priority.
          </p>
        </section>

        {/* Footer */}
        <div className="pt-6 border-t border-white/10 text-xs text-zinc-500 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p>© 2026 Gappey Team. All rights reserved.</p>
          <div className="flex gap-4">
            <Link href="/privacy" className="hover:text-zinc-300 underline">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-zinc-300 underline">Terms of Service</Link>
            <Link href="/delete-account" className="hover:text-zinc-300 underline">Delete Account</Link>
          </div>
        </div>
      </main>
    </div>
  );
}
