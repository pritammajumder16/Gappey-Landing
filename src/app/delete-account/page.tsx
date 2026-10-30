import React from "react";
import Link from "next/link";
import { ArrowLeft, Trash2, ShieldAlert, CheckCircle2, Mail, Clock } from "lucide-react";

export const metadata = {
  title: "Delete Account & Data | Gappey Live Voice Party",
  description:
    "Instructions and options for deleting your Gappey account and associated personal data.",
};

export default function DeleteAccountPage() {
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
            Gappey User Rights
          </span>
        </div>
      </header>

      <main className="max-w-3xl mx-auto px-4 sm:px-6 py-12 sm:py-16 space-y-10">
        {/* Title Block */}
        <div className="space-y-3 border-b border-white/10 pb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-950/40 border border-red-500/30 text-red-300 text-xs font-semibold">
            <Trash2 className="w-3.5 h-3.5 text-red-400" /> Data Safety &amp; User Privacy
          </div>
          <h1 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
            Account &amp; Data Deletion
          </h1>
          <p className="text-xs sm:text-sm text-zinc-400">
            Learn how to delete your Gappey account and manage your stored data in accordance with Google Play Developer Policy and the DPDP Act 2023.
          </p>
        </div>

        {/* Option 1: In-App Deletion */}
        <section className="p-6 rounded-2xl bg-white/[0.03] border border-white/10 space-y-4">
          <h2 className="text-xl font-bold text-white flex items-center gap-2">
            <CheckCircle2 className="w-5 h-5 text-emerald-400" /> Option 1: Delete Directly Inside the App (Instant)
          </h2>
          <p className="text-sm leading-relaxed text-zinc-300">
            You can request immediate deletion of your account and personal data from within the Gappey Android application:
          </p>
          <ol className="text-sm space-y-2 list-decimal list-inside text-zinc-300 font-medium">
            <li>Open the <strong>Gappey</strong> app and sign in to your account.</li>
            <li>Tap on your <strong>Profile</strong> tab (bottom right navigation).</li>
            <li>Tap the <strong>Settings</strong> icon (cogwheel).</li>
            <li>Scroll to the bottom and select <strong>Delete Account</strong>.</li>
            <li>Read the confirmation notice and tap <strong>Confirm Deletion</strong>.</li>
          </ol>
          <p className="text-xs text-zinc-400 pt-2">
            Your login credentials, active sessions, and profile data will be immediately revoked.
          </p>
        </section>

        {/* Option 2: Web / Email Request */}
        <section className="p-6 rounded-2xl bg-white/[0.03] border border-white/10 space-y-4">
          <h2 className="text-xl font-bold text-white flex items-center gap-2">
            <Mail className="w-5 h-5 text-purple-400" /> Option 2: Request Deletion via Email (Web Request)
          </h2>
          <p className="text-sm leading-relaxed text-zinc-300">
            If you no longer have access to the app or cannot install it, you can submit a manual deletion request to our support team:
          </p>
          <div className="p-4 rounded-xl bg-purple-950/20 border border-purple-500/20 space-y-2 text-sm">
            <p><strong>Email:</strong> <a href="mailto:gappeyindia@gmail.com" className="text-purple-300 underline">gappeyindia@gmail.com</a></p>
            <p><strong>Subject:</strong> Account Deletion Request</p>
            <p><strong>Information to Include:</strong> Your registered email address, username, and Gappey User ID (if known).</p>
          </div>
          <p className="text-xs text-zinc-400">
            Manual requests are processed by our compliance team within 7 business days of verification.
          </p>
        </section>

        {/* Data Types Deleted & Retained */}
        <section className="space-y-4 pt-2">
          <h2 className="text-lg sm:text-xl font-bold text-white flex items-center gap-2">
            <Clock className="w-5 h-5 text-amber-400" /> Types of Data Deleted vs. Retained
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
            <div className="p-4 rounded-xl bg-emerald-950/15 border border-emerald-500/20 space-y-2">
              <h3 className="font-semibold text-emerald-300">Permanently Deleted:</h3>
              <ul className="list-disc list-inside space-y-1 text-zinc-300 text-xs leading-relaxed">
                <li>Account profile (Name, Username, Gender, DOB)</li>
                <li>Authentication credentials &amp; linked passwords</li>
                <li>Profile avatars, photos, and uploaded media</li>
                <li>Direct chat messages &amp; Moments feed posts</li>
                <li>Friend lists, follows, and room visitor history</li>
              </ul>
            </div>
            <div className="p-4 rounded-xl bg-amber-950/15 border border-amber-500/20 space-y-2">
              <h3 className="font-semibold text-amber-300">Retained for Legal Compliance:</h3>
              <ul className="list-disc list-inside space-y-1 text-zinc-300 text-xs leading-relaxed">
                <li>Payment transaction IDs, invoice logs, and GST audit ledgers (retained strictly for statutory compliance under Indian tax and PMLA laws for required legal periods)</li>
                <li>Abuse and ban logs associated with severe platform violations</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Contact Footer */}
        <div className="pt-6 border-t border-white/10 text-xs text-zinc-500 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p>© 2026 Gappey Team. All rights reserved.</p>
          <div className="flex gap-4">
            <Link href="/privacy" className="hover:text-zinc-300 underline">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-zinc-300 underline">Terms of Service</Link>
          </div>
        </div>
      </main>
    </div>
  );
}
