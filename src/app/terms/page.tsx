import React from "react";
import Link from "next/link";
import { ArrowLeft, Scale, AlertTriangle, ShieldCheck, Mail } from "lucide-react";

export const metadata = {
  title: "Terms and Conditions | Gappey Live Voice Party",
  description:
    "Terms of Service, Virtual Currency Rules, and Compliance Agreement for the Gappey Voice Party platform.",
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
            <Scale className="w-3.5 h-3.5 text-pink-400" /> Statutory Terms &amp; Compliance Agreement
          </div>
          <h1 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
            Terms &amp; Conditions
          </h1>
          <p className="text-xs sm:text-sm text-zinc-400">
            Last Updated: October 15, 2026 · Effective Date: October 15, 2026
          </p>
        </div>

        {/* Legal Advisory Notice */}
        <div className="p-4 rounded-2xl bg-amber-950/30 border border-amber-500/30 text-amber-200/90 text-xs sm:text-sm flex items-start gap-3">
          <AlertTriangle className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
          <div>
            <strong>Legal Notice:</strong> This document sets forth the legally binding terms governing your use of Gappey under Indian law, including the Information Technology Act, 2000 and the Promotion and Regulation of Online Gaming Act, 2025. It should be reviewed by qualified legal counsel prior to formal reliance.
          </div>
        </div>

        {/* Content sections */}
        <div className="space-y-8 text-sm sm:text-base leading-relaxed text-zinc-300">
          <section className="space-y-3">
            <h2 className="text-lg sm:text-xl font-bold text-white flex items-center gap-2">
              1. Agreement to Terms
            </h2>
            <p>
              By installing, accessing, or using the <strong>Gappey</strong> mobile application or website, you agree to be bound by these Terms and Conditions (&quot;Terms&quot;) and our Privacy Policy. If you do not accept these Terms in their entirety, you must refrain from using the platform and delete the application from your device.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg sm:text-xl font-bold text-white flex items-center gap-2">
              2. Eligibility &amp; Age Restriction (Strictly 18+)
            </h2>
            <div className="p-4 rounded-2xl bg-purple-950/30 border border-purple-500/30 text-purple-200 text-xs sm:text-sm space-y-2">
              <p>
                <strong>Age Requirement:</strong> You must be at least eighteen (18) years of age to register an account, enter voice rooms, purchase virtual coins, or access any part of the service.
              </p>
              <p>
                By registering, you represent and warrant that all age verification details provided are accurate. Misrepresenting your age constitutes fraud and will result in immediate termination of the account and forfeiture of any accrued virtual balances.
              </p>
            </div>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg sm:text-xl font-bold text-white flex items-center gap-2">
              3. Entertainment-Only Gaming (Online Gaming Act, 2025 Compliance)
            </h2>
            <div className="p-4 rounded-2xl bg-emerald-950/30 border border-emerald-500/30 text-emerald-200 text-xs sm:text-sm space-y-2">
              <p>
                <strong>Strict Non-Gambling Declaration:</strong> All mini-games, table features, and interactive activities within Gappey are designed solely for recreational entertainment. Gappey is <strong>NOT a Real-Money Gaming (RMG) platform</strong>, gambling service, or betting platform.
              </p>
              <p>
                In compliance with the <strong>Promotion and Regulation of Online Gaming Act, 2025</strong> and applicable Indian state gaming laws:
              </p>
              <ul className="list-disc pl-5 space-y-1">
                <li>No real money (₹ INR) can ever be wagered, staked, or won in any mini-game.</li>
                <li>Mini-games use free virtual <strong>Silver Tokens</strong> only.</li>
                <li>Tokens won in games have zero real-world value and cannot be redeemed, cashed out, or converted into Gold Coins, Diamonds, or Indian Rupees.</li>
              </ul>
            </div>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg sm:text-xl font-bold text-white flex items-center gap-2">
              4. Virtual Currencies &amp; Game-Money Separation
            </h2>
            <p>
              Gappey strictly enforces architectural game-money separation across three distinct virtual tokens:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-zinc-300 text-sm">
              <li>
                <strong>Gold Coins:</strong> Purchased virtual tokens used strictly for social gifting, avatar frames, entry rides, and room privileges. Gold Coins have no cash value, do not yield interest, and cannot be refunded or exchanged for real currency once consumed.
              </li>
              <li>
                <strong>Diamonds:</strong> Virtual appreciation points credited to hosts when they receive eligible gifts from community members. Subject to identity verification, tax deduction (TDS), and minimum payout thresholds, Diamonds may be redeemed pursuant to our Host Settlement Policy.
              </li>
              <li>
                <strong>Silver Tokens (Free Game Currency):</strong> Distributed free through daily check-ins, tasks, and entertainment activities. <strong>Silver is strictly game-only. Silver cannot be purchased with real money, cannot be gifted for diamonds, cannot be converted to Gold Coins, and can never be cashed out.</strong>
              </li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg sm:text-xl font-bold text-white flex items-center gap-2">
              5. Payments, Refunds &amp; Cancellations
            </h2>
            <p>
              All purchases of Gold Coins are processed via authorized payment aggregators, including <strong>Cashfree Payments</strong>. By initiating a purchase, you agree to the following financial terms:
            </p>
            <ul className="list-disc pl-5 space-y-1.5 text-zinc-300 text-sm">
              <li>
                <strong>Immediate Delivery:</strong> Virtual items and coins are digital goods delivered immediately upon successful payment confirmation.
              </li>
              <li>
                <strong>No Refunds on Consumed Items:</strong> Once coins have been delivered or spent on gifts/cosmetics, the transaction is final and non-refundable.
              </li>
              <li>
                <strong>Failed Transactions:</strong> If your bank account or UPI handle is debited but coins fail to credit within thirty (30) minutes, the transaction will automatically be reconciled or refunded by the payment gateway within 5 to 7 business days. For transaction inquiries, contact{" "}
                <a href="mailto:gappeyindia@gmail.com" className="text-pink-400 underline">
                  gappeyindia@gmail.com
                </a>{" "}
                with your Cashfree Order ID.
              </li>
              <li>
                <strong>Chargebacks &amp; Fraud:</strong> Initiating fraudulent chargebacks or dispute claims will result in immediate suspension of the account and forfeiture of all virtual items.
              </li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg sm:text-xl font-bold text-white flex items-center gap-2">
              6. Diamond Withdrawals &amp; Host Settlements
            </h2>
            <p>
              Eligible hosts may redeem accumulated Diamonds under the following strict conditions enforced by our automated settlement engine:
            </p>
            <ul className="list-disc pl-5 space-y-1.5 text-zinc-300 text-sm">
              <li>
                <strong>Minimum Withdrawal Threshold:</strong> Payout requests must meet the platform minimum threshold as configured in the app wallet settings.
              </li>
              <li>
                <strong>KYC &amp; Verification:</strong> Valid PAN and bank account / UPI details must be provided prior to withdrawal approval.
              </li>
              <li>
                <strong>Tax Deduction at Source (TDS):</strong> Settlements are subject to applicable statutory tax deductions under the Indian Income Tax Act, 1961 (including Sections 194B/194J/194BA as applicable). TDS certificates will be issued in accordance with statutory timelines.
              </li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg sm:text-xl font-bold text-white flex items-center gap-2">
              7. Talent Agencies &amp; Authorized Coin Sellers
            </h2>
            <p>
              Talent agencies and authorized coin sellers operate under separate administrative agreements. Resellers and agencies are prohibited from making unauthorized representations, engaging in predatory lending, or attempting off-platform currency trades. Violation results in immediate agency revocation and account freeze.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg sm:text-xl font-bold text-white flex items-center gap-2">
              8. Community Rules &amp; Room Moderation
            </h2>
            <p>You agree not to engage in any prohibited activities on the platform, including:</p>
            <ul className="list-disc pl-5 space-y-1.5 text-zinc-300 text-sm">
              <li>Hate speech, obscenity, nudity, harassment, or verbal abuse in audio rooms or chats.</li>
              <li>Impersonation of platform staff, moderators, or community members.</li>
              <li>Attempts to bypass room kicks, bans, or audio moderation systems.</li>
              <li>Reverse-engineering, decompiling, or exploiting platform APIs or WebSocket protocols.</li>
            </ul>
            <p className="text-xs text-zinc-400">
              Room owners and moderators have full autonomy to mute or kick users from their rooms. Gappey administration reserves the right to issue temporary or permanent account suspensions for violations.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg sm:text-xl font-bold text-white flex items-center gap-2">
              9. Governing Law, Jurisdiction &amp; Legal Inquiries
            </h2>
            <p>
              These Terms shall be governed by and construed in accordance with the laws of the Republic of India. Any disputes arising out of or in connection with these Terms shall be subject to the exclusive jurisdiction of the competent courts in India.
            </p>
            <div className="p-4 rounded-xl bg-zinc-900 border border-white/10 text-xs sm:text-sm space-y-1">
              <p><strong>Official Legal &amp; Support Contact:</strong></p>
              <p className="flex items-center gap-2 text-zinc-300">
                <Mail className="w-4 h-4 text-pink-400" />
                <a href="mailto:gappeyindia@gmail.com" className="text-pink-400 hover:underline">
                  gappeyindia@gmail.com
                </a>
              </p>
              <p className="text-zinc-500 text-xs">
                Inquiries regarding billing, terms, moderation appeals, or law enforcement requests.
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
