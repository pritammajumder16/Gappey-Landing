import React from "react";
import type { Metadata } from "next";
import LegalPageLayout from "@/components/legal/LegalPageLayout";
import { Shield, AlertTriangle, Mail, Lock, Flag, UserX } from "lucide-react";
import { SUPPORT_EMAIL } from "@/constants/compliance";

export const metadata: Metadata = {
  title: "Child Safety Standards & CSAE Policy | Gappey",
  description:
    "Gappey's published standards, zero-tolerance policy against Child Sexual Abuse and Exploitation (CSAE), and reporting mechanisms.",
};

export default function ChildSafetyPage() {
  return (
    <LegalPageLayout
      badge="Safety &amp; Protection"
      title="Child Sexual Exploitation &amp; Abuse (CSAE) Policy"
      description="Mandatory standards, zero-tolerance principles, and in-app reporting mechanisms in accordance with Google Play Developer Policy and global child protection laws."
    >
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
          <Lock className="w-5 h-5 text-amber-400" /> 1. Age Eligibility &amp; Age Verification
        </h2>
        <p className="text-sm leading-relaxed text-zinc-300">
          Gappey is an interactive entertainment platform designed and restricted exclusively for individuals aged <strong>18 years or older</strong>. During registration, all users confirm that they are at least 18 years of age. Accounts found to be created by or representing minors under 18 will be terminated immediately.
        </p>
      </section>

      {/* 2. Prohibited Content and Conduct */}
      <section className="space-y-3">
        <h2 className="text-xl font-bold text-white flex items-center gap-2">
          <AlertTriangle className="w-5 h-5 text-amber-400" /> 2. Prohibited Content and Conduct
        </h2>
        <p className="text-sm leading-relaxed text-zinc-300">
          The following behaviors and content are unconditionally banned across all voice rooms, direct messages, user profiles, Moments posts, and chat features:
        </p>
        <ul className="list-disc list-inside space-y-1.5 text-xs sm:text-sm text-zinc-300 pl-2">
          <li>Creating, uploading, sharing, or soliciting Child Sexual Abuse Material (CSAM) or any sexualized depictions of minors.</li>
          <li>Grooming, sexually suggestive behavior, or inappropriate contact directed toward or involving minors.</li>
          <li>Facilitating or promoting child trafficking, sexual solicitation, or harm to children.</li>
          <li>Sharing links, external handles, or invitations to third-party services hosting illegal material.</li>
        </ul>
      </section>

      {/* 3. In-App Reporting & Moderation */}
      <section className="space-y-3">
        <h2 className="text-xl font-bold text-white flex items-center gap-2">
          <Flag className="w-5 h-5 text-amber-400" /> 3. In-App Reporting &amp; Action Mechanisms
        </h2>
        <p className="text-sm leading-relaxed text-zinc-300">
          Gappey provides users with direct, in-app tools to flag and report suspicious or abusive content immediately:
        </p>
        <div className="p-4 rounded-xl bg-white/[0.03] border border-white/10 space-y-3 text-xs sm:text-sm">
          <div>
            <strong className="text-white flex items-center gap-1.5">
              <Flag className="w-4 h-4 text-amber-400" /> In-App Direct Message &amp; Chat Reporting:
            </strong>
            <p className="text-zinc-400 text-xs mt-0.5">
              In any 1v1 conversation or group chat, tap the top menu or long-press a message → select <strong>Report Abuse</strong> → choose the violation category and submit.
            </p>
          </div>
          <div>
            <strong className="text-white flex items-center gap-1.5">
              <Flag className="w-4 h-4 text-amber-400" /> In-App Voice Bio Reporting:
            </strong>
            <p className="text-zinc-400 text-xs mt-0.5">
              On any user profile, tap the report flag on their voice greeting player to submit a direct moderation report.
            </p>
          </div>
          <div>
            <strong className="text-white flex items-center gap-1.5">
              <UserX className="w-4 h-4 text-rose-400" /> Immediate User Blocking:
            </strong>
            <p className="text-zinc-400 text-xs mt-0.5">
              Users can block any individual account instantly, cutting off all direct messages and voice interactions.
            </p>
          </div>
        </div>
      </section>

      {/* 4. Cooperation with Law Enforcement */}
      <section className="space-y-3">
        <h2 className="text-xl font-bold text-white flex items-center gap-2">
          <Shield className="w-5 h-5 text-amber-400" /> 4. Cooperation with Law Enforcement &amp; Authorities
        </h2>
        <p className="text-sm leading-relaxed text-zinc-300">
          Gappey complies with all applicable local, national, and international child protection laws, including the{" "}
          <em>Protection of Children from Sexual Offences (POCSO) Act</em>, the <em>Information Technology Act, 2000</em>,
          and global child safety reporting frameworks.
        </p>
        <p className="text-xs text-zinc-400">
          We proactively report verified CSAM/CSAE incidents, associated user identifiers, and IP records to the{" "}
          <strong>National Center for Missing &amp; Exploited Children (NCMEC)</strong> and Indian law enforcement authorities.
        </p>
      </section>

      {/* 5. Contact & Designated Safety Officer */}
      <section className="p-5 rounded-2xl bg-white/[0.03] border border-white/10 space-y-3">
        <h2 className="text-base font-bold text-white flex items-center gap-2">
          <Mail className="w-5 h-5 text-amber-400" /> Dedicated Child Safety Point of Contact
        </h2>
        <p className="text-xs sm:text-sm text-zinc-300">
          If you encounter or suspect any child safety concern, please contact our dedicated safety desk:
        </p>
        <div className="text-sm">
          <a
            href={`mailto:${SUPPORT_EMAIL}?subject=URGENT%20Child%20Safety%20Concern`}
            className="text-amber-400 underline font-semibold flex items-center gap-1.5"
          >
            <Mail className="w-4 h-4" /> {SUPPORT_EMAIL}
          </a>
        </div>
        <p className="text-xs text-zinc-400 pt-1">
          Safety reports are reviewed promptly with highest priority by our Trust &amp; Safety team.
        </p>
      </section>
    </LegalPageLayout>
  );
}
