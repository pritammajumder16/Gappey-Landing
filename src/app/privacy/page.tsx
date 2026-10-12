import React from "react";
import Link from "next/link";
import { ArrowLeft, Shield, Lock, FileText } from "lucide-react";

export const metadata = {
  title: "Privacy Policy | Gappey Live Voice Party",
  description: "Privacy Policy and user data protection details for Gappey Voice Party platform.",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-[#07070c] text-zinc-300 font-sans selection:bg-purple-500 selection:text-white">
      {/* Ambient background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-purple-700/15 blur-[140px] rounded-full pointer-events-none" />

      <header className="border-b border-white/10 bg-[#090814]/80 backdrop-blur-xl sticky top-0 z-40">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm font-semibold text-zinc-300 hover:text-white transition-colors"
          >
            <ArrowLeft className="w-4 h-4" /> Back to Home
          </Link>
          <span className="text-xs uppercase font-mono tracking-wider text-purple-400 font-bold">
            Gappey Legal &amp; Compliance
          </span>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 sm:px-6 py-12 sm:py-16 space-y-10">
        {/* Title Block */}
        <div className="space-y-3 border-b border-white/10 pb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-900/40 border border-purple-500/30 text-purple-300 text-xs font-semibold">
            <Shield className="w-3.5 h-3.5 text-purple-400" /> DPDP Act 2023 Compliant
          </div>
          <h1 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
            Privacy Policy
          </h1>
          <p className="text-xs sm:text-sm text-zinc-400">
            Last Updated: October 12, 2026 · Effective Date: October 12, 2026
          </p>
        </div>

        {/* Content sections */}
        <div className="space-y-8 text-sm sm:text-base leading-relaxed text-zinc-300">
          <section className="space-y-3">
            <h2 className="text-lg sm:text-xl font-bold text-white flex items-center gap-2">
              1. Introduction &amp; Scope
            </h2>
            <p>
              Welcome to <strong>Gappey</strong> (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;), a real-time voice party room and social platform. We value your privacy and are committed to safeguarding your personal information in strict accordance with the <strong>Digital Personal Data Protection Act, 2023 (DPDP Act)</strong>, the <strong>Information Technology Act, 2000</strong>, and applicable international data protection standards.
            </p>
            <p>
              This Privacy Policy applies to all users accessing or using the Gappey mobile applications (Android/iOS) and our official websites. By registering or using the platform, you consent to the data practices described in this document.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg sm:text-xl font-bold text-white flex items-center gap-2">
              2. Age Requirement &amp; Protection of Minors (18+ Policy)
            </h2>
            <p className="p-4 rounded-2xl bg-amber-950/30 border border-amber-500/30 text-amber-200 text-xs sm:text-sm">
              <strong>Strict 18+ Rule:</strong> Gappey is exclusively intended for users who are eighteen (18) years of age or older. We enforce strict age verification upon registration. We do not knowingly collect, broadcast, or process data belonging to children or minors under 18. If we identify an account belonging to a minor, it will be immediately terminated.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg sm:text-xl font-bold text-white flex items-center gap-2">
              3. Information We Collect
            </h2>
            <ul className="list-disc pl-5 space-y-2 text-zinc-300 text-sm">
              <li>
                <strong>Account Information:</strong> Phone number or email address, hashed password, username, profile display name, avatar, gender, and date of birth (used strictly for 18+ verification and never broadcast publicly).
              </li>
              <li>
                <strong>Voice &amp; Audio Streams:</strong> Real-time audio transmitted through live voice rooms. Audio streams are routed in real time for communication and are not permanently archived unless flagged for trust, safety, or moderation violations.
              </li>
              <li>
                <strong>Transactional &amp; Financial Information:</strong> Ledger entries for Coin top-ups, Diamonds received, and payout withdrawal details (such as UPI ID or bank beneficiary details for KYC compliance). We do not store raw credit card numbers or UPI PINs; all payments are processed through RBI-authorized payment gateways.
              </li>
              <li>
                <strong>Chat &amp; Media Content:</strong> Direct and group chat messages. Private media shared in chats is encrypted in transit and automatically expires from media storage after seven (7) days.
              </li>
              <li>
                <strong>Device &amp; Telemetry Data:</strong> IP address, device model, operating system version, app version, network quality telemetry, crash diagnostics, and push notification tokens.
              </li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg sm:text-xl font-bold text-white flex items-center gap-2">
              4. How We Use Your Data
            </h2>
            <p>We process your personal information exclusively for lawful purposes:</p>
            <ul className="list-disc pl-5 space-y-1.5 text-zinc-300 text-sm">
              <li>To provide voice party rooms, seat interactions, virtual gifting, and social features.</li>
              <li>To manage your virtual wallet balances, transactions, and legitimate diamond cashouts.</li>
              <li>To enforce room moderation, kick/ban controls, and protect users against harassment or fraud.</li>
              <li>To fulfill tax (TDS) and legal compliance obligations under Indian financial regulations.</li>
              <li>To provide customer support and notify you of critical security or version updates.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg sm:text-xl font-bold text-white flex items-center gap-2">
              5. Data Storage, Security &amp; Retention
            </h2>
            <p>
              Your personal data is hosted in secure, encrypted cloud data centers with strict access controls. Private chat media is stored in dedicated private object storage with automated 7-day lifecycles. We employ industry-standard encryption protocols (TLS 1.3, AES-256) to safeguard data in transit and at rest.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg sm:text-xl font-bold text-white flex items-center gap-2">
              6. Your Data Protection Rights
            </h2>
            <p>Under the DPDP Act and applicable laws, you retain the right to:</p>
            <ul className="list-disc pl-5 space-y-1.5 text-zinc-300 text-sm">
              <li>Access and review personal information we hold about you.</li>
              <li>Request correction or updating of inaccurate data.</li>
              <li>Request deletion of your account and personal data (&quot;Right to be Forgotten&quot;).</li>
              <li>Nominate a representative in case of incapacity.</li>
            </ul>
            <p>
              To exercise any of these rights, please contact our Data Protection Officer at{" "}
              <a href="mailto:privacy@gappey.com" className="text-purple-400 hover:underline">
                privacy@gappey.com
              </a>.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg sm:text-xl font-bold text-white flex items-center gap-2">
              7. Grievance Officer &amp; Inquiries
            </h2>
            <p>
              In accordance with the Information Technology (Intermediary Guidelines and Digital Media Ethics Code) Rules, 2021, the contact details for our Grievance Officer are:
            </p>
            <div className="p-4 rounded-xl bg-zinc-900 border border-white/10 text-xs sm:text-sm space-y-1">
              <p><strong>Grievance Officer:</strong> Legal &amp; Compliance Cell, Gappey Platform</p>
              <p><strong>Email:</strong> <a href="mailto:legal@gappey.com" className="text-purple-400">legal@gappey.com</a></p>
              <p><strong>Address:</strong> Mumbai / Bengaluru, India</p>
              <p><strong>Response Timeline:</strong> Acknowledgement within 24 hours; resolution within 15 days.</p>
            </div>
          </section>
        </div>
      </main>

      <footer className="border-t border-white/10 py-8 text-center text-xs text-zinc-400">
        <p>© {new Date().getFullYear()} Gappey. All rights reserved.</p>
      </footer>
    </div>
  );
}
