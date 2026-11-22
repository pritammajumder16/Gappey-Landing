import React from "react";
import type { Metadata } from "next";
import LegalPageLayout from "@/components/legal/LegalPageLayout";
import { CheckCircle2, Mail, Clock } from "lucide-react";
import { SUPPORT_EMAIL } from "@/constants/compliance";

export const metadata: Metadata = {
  title: "Delete Account & Data | Gappey Live Voice Party",
  description:
    "Official instructions and web request procedure for deleting your Gappey account and personal data.",
};

export default function DeleteAccountPage() {
  return (
    <LegalPageLayout
      badge="Data Rights &amp; Privacy"
      title="Account and Data Deletion"
      description="Learn how to delete your Gappey account and personal data in accordance with Google Play Developer Policy and the DPDP Act 2023."
    >
      {/* Option 1: In-App Deletion (Instant) */}
      <section className="p-6 rounded-2xl bg-white/[0.03] border border-white/10 space-y-4">
        <h2 className="text-xl font-bold text-white flex items-center gap-2">
          <CheckCircle2 className="w-5 h-5 text-emerald-400" /> Option 1: Delete Directly Inside the App (Instant)
        </h2>
        <p className="text-sm leading-relaxed text-zinc-300">
          You can initiate immediate and permanent deletion of your account and personal data directly from inside the Gappey Android application:
        </p>
        <ol className="text-sm space-y-2 list-decimal list-inside text-zinc-300 font-medium">
          <li>Open the <strong>Gappey</strong> app and sign in to your account.</li>
          <li>Tap on your <strong>Profile</strong> tab in the bottom navigation bar.</li>
          <li>Tap the <strong>Settings</strong> icon (gear wheel) in the top right corner.</li>
          <li>Scroll to the bottom of the Settings screen and tap <strong>Delete Account</strong>.</li>
          <li>Review the warning dialog and tap <strong>Delete My Account</strong> to confirm.</li>
        </ol>
        <p className="text-xs text-zinc-400 pt-2 border-t border-white/5">
          Your profile, active authentication tokens, avatars, and private chats will be deleted immediately upon confirmation, and your app session will be terminated.
        </p>
      </section>

      {/* Option 2: Web / Email Request */}
      <section className="p-6 rounded-2xl bg-white/[0.03] border border-white/10 space-y-4">
        <h2 className="text-xl font-bold text-white flex items-center gap-2">
          <Mail className="w-5 h-5 text-amber-400" /> Option 2: Request Deletion via Email (Web Request)
        </h2>
        <p className="text-sm leading-relaxed text-zinc-300">
          If you no longer have the app installed or cannot access your device, you can submit a manual deletion request to our compliance team without logging in:
        </p>
        <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5 space-y-2 text-xs sm:text-sm">
          <p>
            <strong>Support Email:</strong>{" "}
            <a href={`mailto:${SUPPORT_EMAIL}?subject=Account%20Deletion%20Request`} className="text-amber-400 underline font-semibold">
              {SUPPORT_EMAIL}
            </a>
          </p>
          <p><strong>Subject Line:</strong> Account Deletion Request</p>
          <p><strong>Information to Include:</strong> Your registered email address, username, and Gappey User ID (if known).</p>
        </div>
        <p className="text-xs text-zinc-400">
          Email deletion requests are verified and processed by our compliance team within 7 business days of identity verification.
        </p>
      </section>

      {/* Data Types Deleted vs Retained */}
      <section className="space-y-4 pt-2">
        <h2 className="text-lg sm:text-xl font-bold text-white flex items-center gap-2">
          <Clock className="w-5 h-5 text-amber-400" /> Types of Data Deleted vs. Retained
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
          <div className="p-4 rounded-xl bg-emerald-950/15 border border-emerald-500/20 space-y-2">
            <h3 className="font-semibold text-emerald-300 text-sm">Permanently Deleted:</h3>
            <ul className="list-disc list-inside space-y-1 text-zinc-300 leading-relaxed">
              <li>Profile data (Display Name, Username, Gender, Date of Birth, Bio)</li>
              <li>Authentication credentials and linked refresh tokens</li>
              <li>Profile avatars, photos, and voice greetings</li>
              <li>Private direct messages and chat attachments</li>
              <li>Friend CP bonds, room visitor history, and followers</li>
            </ul>
          </div>

          <div className="p-4 rounded-xl bg-amber-950/15 border border-amber-500/20 space-y-2">
            <h3 className="font-semibold text-amber-300 text-sm">Retained for Legal Compliance:</h3>
            <ul className="list-disc list-inside space-y-1 text-zinc-300 leading-relaxed">
              <li>
                <strong>Financial Ledgers:</strong> Transaction records, coin recharge orders, and withdrawal logs are retained immutably as mandated by Indian taxation, prevention of money laundering, and statutory commercial record-keeping laws.
              </li>
              <li>
                <strong>Fraud &amp; Ban Records:</strong> Anonymized identifier hashes for banned devices and accounts to prevent fraud and enforce child safety bans.
              </li>
            </ul>
          </div>
        </div>
      </section>
    </LegalPageLayout>
  );
}
