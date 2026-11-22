import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import LegalPageLayout from "@/components/legal/LegalPageLayout";
import { Scale, AlertTriangle, ShieldCheck, Coins, Diamond, Sparkles, Building } from "lucide-react";
import { BUSINESS_IDENTITY } from "@/constants/compliance";

export const metadata: Metadata = {
  title: "Terms and Conditions | Gappey Live Voice Party",
  description:
    "Official Terms of Service, Virtual Currency Rules, and Compliance Agreement for the Gappey Voice Party platform.",
};

export default function TermsConditionsPage() {
  return (
    <LegalPageLayout
      badge="Statutory Terms &amp; Compliance"
      title="Terms and Conditions"
      description="These Terms of Service govern your access to and use of the Gappey live audio entertainment application, website, and digital services."
    >
      {/* Legal Advisory Notice */}
      <div className="p-4 rounded-2xl bg-amber-950/30 border border-amber-500/30 text-amber-200/90 text-xs sm:text-sm flex items-start gap-3">
        <AlertTriangle className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
        <div>
          <strong>Statutory Agreement:</strong> By creating an account, browsing live voice rooms, purchasing digital coins, or accessing Gappey, you enter into a legally binding contract with <strong>{BUSINESS_IDENTITY.enterpriseName}</strong> (Unit: <strong>{BUSINESS_IDENTITY.unitName}</strong>) governed by the laws of India.
        </div>
      </div>

      {/* 1. Agreement to Terms */}
      <section className="space-y-3">
        <h2 className="text-lg sm:text-xl font-bold text-white flex items-center gap-2">
          <Scale className="w-5 h-5 text-amber-400" /> 1. Agreement to Terms
        </h2>
        <p>
          By installing, accessing, or using the Gappey mobile application, web portal (<Link href="/" className="text-amber-400 underline">gappey.in</Link>), or associated digital services, you agree to be unconditionally bound by these Terms and Conditions (&quot;Terms&quot;), our <Link href="/privacy" className="text-amber-400 underline">Privacy Policy</Link>, and our <Link href="/refund-policy" className="text-amber-400 underline">Refund and Cancellation Policy</Link>. If you do not accept these Terms, you must discontinue using Gappey and uninstall the application immediately.
        </p>
      </section>

      {/* 2. Age Restriction (Strictly 18+) */}
      <section className="space-y-3">
        <h2 className="text-lg sm:text-xl font-bold text-white flex items-center gap-2">
          <ShieldCheck className="w-5 h-5 text-amber-400" /> 2. Eligibility &amp; Age Restriction (Strictly 18+)
        </h2>
        <div className="p-4 rounded-xl bg-purple-950/20 border border-purple-500/20 text-xs sm:text-sm text-zinc-300 space-y-2">
          <p>
            <strong>Strict 18+ Requirement:</strong> Gappey is exclusively intended and designed for individuals who are at least eighteen (18) years of age. Minors under the age of 18 are strictly prohibited from creating accounts, entering rooms, participating in voice chat, or making digital purchases.
          </p>
          <p>
            During registration, all users confirm their age. Any account found to belong to, or represent, an individual under 18 years of age will be permanently terminated immediately without right of reinstatement.
          </p>
        </div>
      </section>

      {/* 3. Casual Entertainment Games */}
      <section className="space-y-3">
        <h2 className="text-lg sm:text-xl font-bold text-white flex items-center gap-2">
          <ShieldCheck className="w-5 h-5 text-amber-400" /> 3. Casual Entertainment Games
        </h2>
        <div className="p-4 rounded-xl bg-emerald-950/20 border border-emerald-500/20 text-xs sm:text-sm text-zinc-300 space-y-2">
          <p>
            <strong>Casual Entertainment Declaration:</strong> All casual social games (such as Ludo and trivia) available on Gappey are recreational activities created solely for casual enjoyment among friends while voice chatting.
          </p>
          <ul className="list-disc pl-5 space-y-1 text-xs">
            <li>Gappey is not a real-money gaming platform.</li>
            <li>Games use free-to-spend virtual Gold that has no cash value and cannot be redeemed.</li>
            <li>Game odds are shown inside the game before play.</li>
            <li><strong>Zero Path from Games to Real Money:</strong> Under our strict game-money separation architecture, coins won in mini-games can never be converted into Super Diamonds, cash, or bank payouts.</li>
          </ul>
        </div>
      </section>

      {/* 4. Four-Currency Architecture */}
      <section className="space-y-3">
        <h2 className="text-lg sm:text-xl font-bold text-white flex items-center gap-2">
          <Coins className="w-5 h-5 text-amber-400" /> 4. Virtual Currencies &amp; Digital Assets
        </h2>
        <p className="text-sm">
          Gappey operates a strictly defined four-currency economy as set forth in our product specifications:
        </p>
        <div className="space-y-3 text-xs sm:text-sm">
          <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/5 space-y-1">
            <strong className="text-amber-300 flex items-center gap-1.5 font-semibold">
              <Coins className="w-4 h-4" /> 1. Gold Coins (Entertainment Currency)
            </strong>
            <p className="text-zinc-400 text-xs leading-relaxed">
              Used for casual room gifting, cosmetic items, and mini-games. Distributed through daily logins, quests, or recharge packs. <strong>Gold Coins have zero cash value</strong>, do not accrue interest, and can never be cashed out, redeemed, or transferred off-platform.
            </p>
          </div>

          <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/5 space-y-1">
            <strong className="text-purple-300 flex items-center gap-1.5 font-semibold">
              <Sparkles className="w-4 h-4" /> 2. Super Coins (Premium Recharge Currency)
            </strong>
            <p className="text-zinc-400 text-xs leading-relaxed">
              Obtained exclusively by purchasing official recharge packs at the rate of ₹1 = 10,000 Super Coins. Super Coins are used to purchase Noble SVIP status tiers and send luxury animated broadcast gifts. Super Coins cannot be earned through mini-games.
            </p>
          </div>

          <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/5 space-y-1">
            <strong className="text-blue-300 flex items-center gap-1.5 font-semibold">
              <Diamond className="w-4 h-4" /> 3. Diamonds (Host Appreciation Points)
            </strong>
            <p className="text-zinc-400 text-xs leading-relaxed">
              Received automatically by voice room hosts when listeners send standard Gold gifts. <strong>Diamonds have no cash value and cannot be withdrawn.</strong> Hosts may convert Diamonds into Gold Coins inside the app at the rate of 0.4 Gold Coins per Diamond (e.g., 1,000 Diamonds convert to 400 Gold Coins; minimum conversion 100 Diamonds).
            </p>
          </div>

          <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/5 space-y-1">
            <strong className="text-emerald-300 flex items-center gap-1.5 font-semibold">
              <Diamond className="w-4 h-4" /> 4. Super Diamonds (Withdrawable Creator Settlement)
            </strong>
            <p className="text-zinc-400 text-xs leading-relaxed">
              Received by verified hosts exclusively when listeners send premium Super gifts. Super Diamonds are withdrawable in accordance with Section 6 below at the rate of 100,000 SD = ₹4.50, subject to mandatory KYC verification and Indian tax deduction laws.
            </p>
          </div>
        </div>
      </section>

      {/* 5. Payments & Fulfillment */}
      <section className="space-y-3">
        <h2 className="text-lg sm:text-xl font-bold text-white flex items-center gap-2">
          <Building className="w-5 h-5 text-amber-400" /> 5. Payments, Gateway &amp; Fulfillment
        </h2>
        <p className="text-sm">
          All digital recharge transactions on the web are processed via authorized payment aggregators, including{" "}
          <strong>Cashfree Payments India Pvt. Ltd.</strong> (and Google Play Billing for in-app mobile transactions).
        </p>
        <ul className="list-disc pl-5 space-y-1 text-xs text-zinc-400">
          <li><strong>Instant Delivery:</strong> Purchased coins and perks are credited automatically within seconds of payment confirmation.</li>
          <li><strong>Pricing:</strong> Web prices reflect direct net pricing free of store commissions. The prices displayed on <Link href="/pricing" className="text-amber-400 underline">gappey.in/pricing</Link> and checkout are final with no hidden charges.</li>
          <li><strong>Refunds:</strong> Per our <Link href="/refund-policy" className="text-amber-400 underline">Refund Policy</Link>, completed and credited purchases are non-refundable once delivered or partially consumed. Failed or duplicate debits are refunded automatically within 5 to 7 business days.</li>
        </ul>
      </section>

      {/* 6. Super Diamond Withdrawals */}
      <section className="space-y-3">
        <h2 className="text-lg sm:text-xl font-bold text-white flex items-center gap-2">
          <Diamond className="w-5 h-5 text-amber-400" /> 6. Super Diamond Withdrawals &amp; Creator Settlement
        </h2>
        <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5 text-xs sm:text-sm text-zinc-300 space-y-2">
          <p>
            Only <strong>Super Diamonds</strong> are eligible for monetary withdrawal, subject to the following statutory conditions:
          </p>
          <ul className="list-disc pl-5 space-y-1 text-xs text-zinc-400">
            <li>
              <strong>Minimum Cash-Out Threshold:</strong> Minimum 10,000,000 Super Diamonds (equivalent to ₹450 INR) at the rate of 100,000 SD = ₹4.50. Payout packages include 10M, 50M, 100M, and 250M SD.
            </li>
            <li>
              <strong>Mandatory KYC Verification:</strong> The host must provide valid government-issued identification (Permanent Account Number - PAN) and a bank account or UPI ID registered in the host&apos;s own legal name.
            </li>
            <li>
              <strong>Tax Deduction at Source (TDS):</strong> All creator payouts are subject to mandatory statutory tax deduction under applicable provisions of the Indian Income Tax Act, 1961. TDS certificates are issued per statutory timelines.
            </li>
            <li>
              <strong>No Income Promises:</strong> Gappey does not guarantee any minimum income, fixed earnings, or creator compensation. Payouts depend strictly on voluntary community gifting.
            </li>
          </ul>
        </div>
      </section>

      {/* 7. Prohibited Conduct */}
      <section className="space-y-3">
        <h2 className="text-lg sm:text-xl font-bold text-white flex items-center gap-2">
          <ShieldCheck className="w-5 h-5 text-amber-400" /> 7. Community Standards &amp; Prohibited Conduct
        </h2>
        <p className="text-sm">Users must not engage in any of the following activities on Gappey:</p>
        <ul className="list-disc pl-5 space-y-1 text-xs text-zinc-400">
          <li>Child sexual exploitation or abuse material (CSAM/CSAE), grooming, or minor endangerment (refer to our <Link href="/safety" className="text-amber-400 underline">Child Safety Policy</Link>).</li>
          <li>Hate speech, obscenity, defamation, verbal harassment, or unlawful threats.</li>
          <li>Unauthorized commercial coin resale, off-platform trades, or predatory financial arrangements.</li>
          <li>Using automated scripts, bots, modified APKs, or exploiting platform vulnerabilities.</li>
          <li>Impersonating Gappey administrators, moderators, or another individual.</li>
        </ul>
        <p className="text-xs text-zinc-400">
          Violations will result in immediate suspension, permanent account termination, forfeiture of virtual assets, and referral to law enforcement where applicable.
        </p>
      </section>

      {/* 8. Account Deletion */}
      <section className="space-y-3">
        <h2 className="text-lg sm:text-xl font-bold text-white flex items-center gap-2">
          <Scale className="w-5 h-5 text-amber-400" /> 8. Account Deletion &amp; Termination
        </h2>
        <p className="text-sm">
          You may delete your account at any time via the in-app path (Profile → Settings → Delete Account) or by submitting a request to our support team as described in our <Link href="/delete-account" className="text-amber-400 underline">Account Deletion Policy</Link>. Upon deletion, all profile data and active sessions are permanently erased, while financial transaction ledgers are retained for legal audit compliance.
        </p>
      </section>

      {/* 9. Governing Law & Jurisdiction */}
      <section className="space-y-3">
        <h2 className="text-lg sm:text-xl font-bold text-white flex items-center gap-2">
          <Scale className="w-5 h-5 text-amber-400" /> 9. Governing Law &amp; Dispute Resolution
        </h2>
        <p className="text-sm">
          These Terms and any dispute or claim arising out of or related to your use of Gappey shall be governed by and construed in accordance with the <strong>laws of the Republic of India</strong>.
        </p>
        <p className="text-sm">
          The competent courts located in <strong>{BUSINESS_IDENTITY.city}, {BUSINESS_IDENTITY.state}, India</strong> shall have exclusive jurisdiction over all claims, suits, or proceedings arising out of or relating to these Terms.
        </p>
      </section>
    </LegalPageLayout>
  );
}
