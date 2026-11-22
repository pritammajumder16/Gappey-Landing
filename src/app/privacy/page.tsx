import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import LegalPageLayout from "@/components/legal/LegalPageLayout";
import { Shield, Lock, FileText, Mail, Server, Database, Key } from "lucide-react";
import { BUSINESS_IDENTITY, SUPPORT_EMAIL, GRIEVANCE_EMAIL, GRIEVANCE_OFFICER_NAME } from "@/constants/compliance";

export const metadata: Metadata = {
  title: "Privacy Policy | Gappey Live Voice Party",
  description:
    "Official Privacy Policy and data protection practices for Gappey in accordance with the Digital Personal Data Protection Act, 2023.",
};

export default function PrivacyPolicyPage() {
  return (
    <LegalPageLayout
      badge="DPDP Act 2023 &amp; IT Rules 2021"
      title="Privacy Policy"
      description="This Privacy Policy sets forth how Gappey collects, processes, stores, and protects your personal data as a Data Fiduciary under Indian law."
    >
      {/* 1. Introduction & Data Fiduciary Details */}
      <section className="space-y-3">
        <h2 className="text-lg sm:text-xl font-bold text-white flex items-center gap-2">
          <Shield className="w-5 h-5 text-amber-400" /> 1. Data Fiduciary &amp; Scope
        </h2>
        <p>
          Welcome to <strong>Gappey</strong>, a live social audio entertainment platform operated by{" "}
          <strong>{BUSINESS_IDENTITY.enterpriseName}</strong> (Unit: <strong>{BUSINESS_IDENTITY.unitName}</strong>),
          a registered micro-enterprise under the Ministry of MSME, Government of India (Registration Number:{" "}
          <span className="font-mono text-amber-300">{BUSINESS_IDENTITY.registrationNumber}</span>), located in{" "}
          {BUSINESS_IDENTITY.city}, {BUSINESS_IDENTITY.state}, India.
        </p>
        <p>
          As a Data Fiduciary under the <strong>Digital Personal Data Protection Act, 2023 (DPDP Act)</strong> and the{" "}
          <em>Information Technology Act, 2000</em>, we are committed to safeguarding personal information entrusted to us by our users.
        </p>
      </section>

      {/* 2. Strict 18+ Age Policy */}
      <section className="space-y-3">
        <h2 className="text-lg sm:text-xl font-bold text-white flex items-center gap-2">
          <Lock className="w-5 h-5 text-amber-400" /> 2. Strict 18+ Age Policy &amp; Minor Protection
        </h2>
        <div className="p-4 rounded-xl bg-purple-950/20 border border-purple-500/20 text-xs sm:text-sm text-zinc-300 space-y-2">
          <p>
            <strong>Adults Only:</strong> Gappey is strictly restricted to individuals aged 18 years or older. We collect date of birth upon registration solely to verify that the user meets this mandatory age gate.
          </p>
          <p>
            Date of birth is strictly confidential; it is <strong>never broadcast, displayed publicly, or shared with other users</strong>. We do not knowingly collect or process personal data of minors. Any account identified as created by or representing a minor will be terminated immediately and its data permanently purged.
          </p>
        </div>
      </section>

      {/* 3. Information We Collect */}
      <section className="space-y-3">
        <h2 className="text-lg sm:text-xl font-bold text-white flex items-center gap-2">
          <FileText className="w-5 h-5 text-amber-400" /> 3. Categories of Data Collected
        </h2>
        <ul className="list-disc pl-5 space-y-2 text-xs sm:text-sm text-zinc-300">
          <li>
            <strong>Account Credentials:</strong> Email address, Google OAuth profile identifiers (username, email, avatar image), public display name, custom ID, user bio, and gender.
          </li>
          <li>
            <strong>Real-Time Audio Streams:</strong> Real-time voice data transmitted during live voice party rooms is routed ephemerally through our low-latency media servers. <strong>We do NOT record, intercept, or permanently store private voice streams.</strong> Audio packets are processed dynamically and vanish upon transmission.
          </li>
          <li>
            <strong>Direct Messages &amp; Ephemeral Media:</strong> Text messages in 1v1 direct chats. Photos and voice notes transmitted in private chats are stored in encrypted cloud storage with an automated <strong>7-day expiration policy</strong>, after which they are permanently and irreversibly purged from our servers.
          </li>
          <li>
            <strong>Payment &amp; Transaction Ledgers:</strong> All payments are processed through RBI-authorized payment aggregators (<strong>Cashfree Payments India Pvt. Ltd.</strong> and Google Play Billing). <strong>Gappey does NOT store raw credit/debit card numbers, CVVs, card expiry dates, or UPI PINs.</strong> We retain only transaction reference numbers, order IDs, payment status, and timestamp logs for statutory tax and audit compliance.
          </li>
          <li>
            <strong>No Facebook Profile Photo Access:</strong> For users who sign in via third-party providers, we strictly request only basic authentication credentials and do not access, scrape, or store external social media photos or contact lists.
          </li>
          <li>
            <strong>Device &amp; Telemetry Data:</strong> IP address, device brand and model, operating system version, app version, error telemetry, and push notification tokens (Expo/Firebase) necessary for service delivery and fraud prevention.
          </li>
        </ul>
      </section>

      {/* 4. Third-Party Service Processors */}
      <section className="space-y-3">
        <h2 className="text-lg sm:text-xl font-bold text-white flex items-center gap-2">
          <Server className="w-5 h-5 text-amber-400" /> 4. Third-Party Processors
        </h2>
        <p className="text-sm">
          We engage reputable infrastructure and technology processors operating under strict confidentiality and data protection agreements:
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
          <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5 space-y-1">
            <span className="font-bold text-amber-300">Cashfree Payments India Pvt. Ltd.</span>
            <p className="text-zinc-400">PCI-DSS Level 1 certified payment gateway processing UPI, cards, netbanking, and digital wallets.</p>
          </div>
          <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5 space-y-1">
            <span className="font-bold text-white">Google Play Billing &amp; Google Sign-In</span>
            <p className="text-zinc-400">In-app purchases on Android devices and federated Google OAuth authentication.</p>
          </div>
          <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5 space-y-1">
            <span className="font-bold text-white">Dedicated LiveKit Media Infrastructure</span>
            <p className="text-zinc-400">Self-hosted, ultra-low latency real-time audio routing (ephemeral, no persistent audio storage).</p>
          </div>
          <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5 space-y-1">
            <span className="font-bold text-white">Tigris S3 Storage</span>
            <p className="text-zinc-400">Encrypted private object storage for ephemeral chat media with strict 7-day automated deletion.</p>
          </div>
          <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5 space-y-1">
            <span className="font-bold text-white">Turso (libSQL) &amp; Redis</span>
            <p className="text-zinc-400">Secure encrypted database storage for account states, balances, and financial ledgers.</p>
          </div>
          <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5 space-y-1">
            <span className="font-bold text-white">Expo &amp; Firebase</span>
            <p className="text-zinc-400">Push notification token management for room invites and message alerts.</p>
          </div>
        </div>
      </section>

      {/* 5. User Rights under DPDP Act 2023 */}
      <section className="space-y-3">
        <h2 className="text-lg sm:text-xl font-bold text-white flex items-center gap-2">
          <Key className="w-5 h-5 text-amber-400" /> 5. Data Principal Rights under DPDP Act 2023
        </h2>
        <p className="text-sm">Under the Digital Personal Data Protection Act, 2023, you have the right to:</p>
        <ul className="list-disc pl-5 space-y-1.5 text-xs sm:text-sm text-zinc-300">
          <li><strong>Right to Access:</strong> Request a summary of your personal data and processing activities.</li>
          <li><strong>Right to Correction &amp; Erasure:</strong> Correct inaccurate information or delete your account completely via our <Link href="/delete-account" className="text-amber-400 underline">Account Deletion Tool</Link>.</li>
          <li><strong>Right to Withdraw Consent:</strong> Revoke consent for processing at any time.</li>
          <li><strong>Right of Grievance Redressal:</strong> Submit data protection grievances to our Grievance Officer.</li>
          <li><strong>Right to Nominate:</strong> Nominate another individual to exercise your rights in the event of death or incapacity.</li>
        </ul>
      </section>

      {/* 6. Data Security & Storage */}
      <section className="space-y-3">
        <h2 className="text-lg sm:text-xl font-bold text-white flex items-center gap-2">
          <Database className="w-5 h-5 text-amber-400" /> 6. Data Security &amp; Retention
        </h2>
        <p className="text-sm">
          We implement industry-standard cryptographic protocols (TLS 1.3 in transit and AES-256 at rest).
          <strong> We never sell, rent, or monetize your personal data to third-party advertisers or data brokers.</strong>
        </p>
        <p className="text-xs text-zinc-400">
          When an account is deleted, personal profile information, avatars, and chat sessions are permanently erased. Statutory financial transaction records and ledger logs are retained solely as required under Indian taxation and anti-fraud regulations.
        </p>
      </section>

      {/* 7. Grievance Officer */}
      <section className="space-y-3">
        <h2 className="text-lg sm:text-xl font-bold text-white flex items-center gap-2">
          <Mail className="w-5 h-5 text-amber-400" /> 7. Grievance Redressal Mechanism
        </h2>
        <p className="text-sm">
          In accordance with the Information Technology (Intermediary Guidelines and Digital Media Ethics Code) Rules, 2021
          and the DPDP Act 2023, the details of our Grievance Officer are:
        </p>
        <div className="p-4 rounded-xl bg-white/[0.03] border border-white/10 text-xs sm:text-sm space-y-1.5">
          {GRIEVANCE_OFFICER_NAME && (
            <p><strong>Name:</strong> {GRIEVANCE_OFFICER_NAME}</p>
          )}
          <p><strong>Designation:</strong> Grievance Officer &amp; Compliance Lead</p>
          <p>
            <strong>Email:</strong>{" "}
            <a href={`mailto:${GRIEVANCE_EMAIL}`} className="text-amber-400 underline font-semibold">
              {GRIEVANCE_EMAIL}
            </a>
            {SUPPORT_EMAIL !== GRIEVANCE_EMAIL && (
              <>
                {" "}(or <a href={`mailto:${SUPPORT_EMAIL}`} className="text-amber-400 underline">{SUPPORT_EMAIL}</a>)
              </>
            )}
          </p>
          <p>
            <strong>Jurisdiction / Location:</strong> {BUSINESS_IDENTITY.city}, {BUSINESS_IDENTITY.state}, India.
          </p>
          <p className="text-zinc-500 text-xs pt-1 border-t border-white/5">
            Grievances are acknowledged within 24 hours and addressed substantively within 15 business days.
          </p>
        </div>
      </section>
    </LegalPageLayout>
  );
}
