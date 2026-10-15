import React from "react";
import Link from "next/link";
import { ArrowLeft, Shield, Lock, FileText, AlertCircle, Mail } from "lucide-react";

export const metadata = {
  title: "Privacy Policy | Gappey Live Voice Party",
  description:
    "Privacy Policy and data protection practices for Gappey in accordance with the Digital Personal Data Protection Act, 2023.",
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
            <Shield className="w-3.5 h-3.5 text-purple-400" /> DPDP Act 2023 &amp; IT Rules 2021 Compliant
          </div>
          <h1 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
            Privacy Policy
          </h1>
          <p className="text-xs sm:text-sm text-zinc-400">
            Last Updated: October 15, 2026 · Effective Date: October 15, 2026
          </p>
        </div>

        {/* Legal Disclaimer Box */}
        <div className="p-4 rounded-2xl bg-amber-950/30 border border-amber-500/30 text-amber-200/90 text-xs sm:text-sm flex items-start gap-3">
          <AlertCircle className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
          <div>
            <strong>Legal Notice:</strong> This privacy policy reflects the technical architecture and data processing routines of the Gappey platform under the Digital Personal Data Protection Act, 2023 and the Information Technology Act, 2000. It is recommended that this policy be formally reviewed by qualified legal counsel.
          </div>
        </div>

        {/* Content sections */}
        <div className="space-y-8 text-sm sm:text-base leading-relaxed text-zinc-300">
          <section className="space-y-3">
            <h2 className="text-lg sm:text-xl font-bold text-white flex items-center gap-2">
              1. Introduction &amp; Data Fiduciary Details
            </h2>
            <p>
              Welcome to <strong>Gappey</strong> (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;), an interactive real-time voice party room and entertainment platform. Operating as a Data Fiduciary under the <strong>Digital Personal Data Protection Act, 2023 (DPDP Act)</strong>, we are committed to safeguarding personal data entrusted to us by our users.
            </p>
            <p>
              This Privacy Policy explains the specific categories of data we collect, lawful purposes for processing, data retention schedules, third-party service processors, and your statutory rights to access, correction, erasure, and grievance redressal.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg sm:text-xl font-bold text-white flex items-center gap-2">
              2. Strict 18+ Age Policy &amp; Minor Protection
            </h2>
            <p className="p-4 rounded-2xl bg-purple-950/40 border border-purple-500/30 text-purple-200 text-xs sm:text-sm">
              <strong>Age Requirement:</strong> Gappey is exclusively intended for adults aged eighteen (18) years or older. We collect date of birth upon sign-up strictly for age gate verification. Date of birth is never broadcast or shared publicly. We do not knowingly process personal data of minors. Any account identified as belonging to an individual under 18 will be permanently closed and its associated data erased.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg sm:text-xl font-bold text-white flex items-center gap-2">
              3. Information We Collect &amp; Processing Scope
            </h2>
            <ul className="list-disc pl-5 space-y-2.5 text-zinc-300 text-sm">
              <li>
                <strong>Account &amp; Authentication:</strong> Email address, Google OAuth profile identifiers (name, email, avatar), display name, username, bio, gender, and date of birth.
              </li>
              <li>
                <strong>Real-Time Voice Audio:</strong> Audio transmitted during voice party rooms is routed ephemerally through WebRTC / Zego RTC infrastructure for live communication. <strong>We do NOT record, intercept, or permanently store user audio streams.</strong> Audio streams vanish in real time once transmitted.
              </li>
              <li>
                <strong>Chat &amp; Ephemeral Media:</strong> Text messages in 1v1 direct chats and room chat channels. Photos and voice snippets sent within private messages are held in private encrypted cloud storage with an automated <strong>7-day expiration policy</strong>, after which they are automatically and permanently purged.
              </li>
              <li>
                <strong>Public Moments:</strong> User-initiated public posts, photos, and status updates published to the Moments feed are hosted securely (via imgbb / cloud media endpoints) and displayed until deleted by the user.
              </li>
              <li>
                <strong>Payment &amp; Financial Information:</strong> All payments for Gold Coins and virtual goods are processed exclusively via RBI-authorized payment aggregators (Cashfree Payments India Pvt. Ltd.). <strong>Gappey does NOT collect, receive, or store raw credit/debit card numbers, CVVs, expiration dates, or UPI PINs.</strong> We retain only transactional ledger IDs, timestamps, payment statuses, and diamond cashout history for statutory tax and reconciliation compliance.
              </li>
              <li>
                <strong>Diagnostics &amp; Device Telemetry:</strong> IP address, device brand/model, OS version, app version, network latency telemetry, crash logs reported to our client diagnostics endpoint (<code className="text-purple-300">/client-errors</code>), and Expo push notification tokens.
              </li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg sm:text-xl font-bold text-white flex items-center gap-2">
              4. Third-Party Service Processors
            </h2>
            <p>
              To maintain high-availability voice streaming, database persistence, and secure payments, we partner with specialized, vetted third-party infrastructure providers under strict confidentiality agreements:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              <div className="p-3 rounded-xl bg-zinc-900 border border-white/5 space-y-1">
                <span className="font-bold text-white">Zego Cloud / WebRTC</span>
                <p className="text-zinc-400">Ultra-low latency real-time audio routing (no audio recording).</p>
              </div>
              <div className="p-3 rounded-xl bg-zinc-900 border border-white/5 space-y-1">
                <span className="font-bold text-white">Cashfree Payments</span>
                <p className="text-zinc-400">PCI-DSS compliant payment processing for UPI, netbanking &amp; cards.</p>
              </div>
              <div className="p-3 rounded-xl bg-zinc-900 border border-white/5 space-y-1">
                <span className="font-bold text-white">Turso (libSQL) &amp; Aiven</span>
                <p className="text-zinc-400">Encrypted relational and cache storage for account states and ledgers.</p>
              </div>
              <div className="p-3 rounded-xl bg-zinc-900 border border-white/5 space-y-1">
                <span className="font-bold text-white">Tigris &amp; ImgBB</span>
                <p className="text-zinc-400">S3-compatible private storage (7-day lifecycle) and public CDN assets.</p>
              </div>
              <div className="p-3 rounded-xl bg-zinc-900 border border-white/5 space-y-1">
                <span className="font-bold text-white">Cloudflare</span>
                <p className="text-zinc-400">DDoS mitigation, TLS 1.3 encryption in transit, and DNS security.</p>
              </div>
              <div className="p-3 rounded-xl bg-zinc-900 border border-white/5 space-y-1">
                <span className="font-bold text-white">Google Identity &amp; Expo</span>
                <p className="text-zinc-400">Federated Google OAuth login and push notification delivery.</p>
              </div>
            </div>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg sm:text-xl font-bold text-white flex items-center gap-2">
              5. Data Protection Rights under DPDP Act 2023
            </h2>
            <p>As a Data Principal, you are entitled to exercise the following rights:</p>
            <ul className="list-disc pl-5 space-y-1.5 text-zinc-300 text-sm">
              <li><strong>Right to Access:</strong> Request a summary of personal data processed by us and the processing activities undertaken.</li>
              <li><strong>Right to Correction &amp; Erasure:</strong> Correct outdated or inaccurate information, or request complete deletion of your account and personal data.</li>
              <li><strong>Right to Withdraw Consent:</strong> Revoke consent previously granted for optional processing activities.</li>
              <li><strong>Right of Grievance Redressal:</strong> Submit grievances regarding data handling directly to our designated Grievance Officer.</li>
              <li><strong>Right to Nominate:</strong> Designate an individual who shall, in the event of death or incapacity, exercise your data rights.</li>
            </ul>
            <p className="text-xs sm:text-sm text-zinc-400">
              To exercise any of your statutory rights, please submit a written request from your registered email address to{" "}
              <a href="mailto:gappeyindia@gmail.com" className="text-purple-400 hover:underline font-semibold">
                gappeyindia@gmail.com
              </a>. Requests are authenticated and processed within thirty (30) business days.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg sm:text-xl font-bold text-white flex items-center gap-2">
              6. Data Retention, Security &amp; Breach Protocol
            </h2>
            <p>
              We enforce strict encryption standards (TLS 1.3 in transit, AES-256 at rest) across all API endpoints and database clusters. In the unlikely event of a personal data breach impacting your privacy, we will notify the Data Protection Board of India and affected users without undue delay, outlining the nature of the breach and mitigating measures taken.
            </p>
            <p>
              <strong>We do NOT sell, lease, or monetize your personal information to third-party advertisers or data brokers.</strong>
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg sm:text-xl font-bold text-white flex items-center gap-2">
              7. Grievance Officer (IT Rules, 2021)
            </h2>
            <p>
              In accordance with Rule 3(2) of the Information Technology (Intermediary Guidelines and Digital Media Ethics Code) Rules, 2021, the contact details for our Grievance Officer are set forth below:
            </p>
            <div className="p-5 rounded-2xl bg-zinc-900/90 border border-purple-500/30 text-xs sm:text-sm space-y-2">
              <p>
                <strong>Grievance Officer:</strong>{" "}
                <span className="text-white font-medium">Paramita Majumder Das</span>
              </p>
              <p>
                <strong>Designation:</strong> Head of Trust, Safety &amp; Legal Compliance
              </p>
              <p>
                <strong>Email Address:</strong>{" "}
                <a href="mailto:gappeyindia@gmail.com" className="text-purple-400 font-semibold underline">
                  gappeyindia@gmail.com
                </a>
              </p>
              <p>
                <strong>Address:</strong> Kolkata, West Bengal, India
              </p>
              <p className="text-zinc-400 text-xs pt-1 border-t border-white/5">
                <strong>Statutory Timelines:</strong> Written acknowledgement within twenty-four (24) hours; substantive resolution within fifteen (15) days of complaint receipt.
              </p>
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
