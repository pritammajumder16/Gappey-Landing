import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import LegalPageLayout from "@/components/legal/LegalPageLayout";
import { Zap, Clock, ShieldCheck, HelpCircle, CheckCircle } from "lucide-react";
import { SUPPORT_EMAIL } from "@/constants/compliance";

export const metadata: Metadata = {
  title: "Delivery Policy for Digital Goods | Gappey",
  description:
    "Instant electronic delivery terms for virtual currency and digital items purchased on Gappey.",
};

export default function DeliveryPolicyPage() {
  return (
    <LegalPageLayout
      badge="Fulfillment Policy"
      title="Delivery Policy for Digital Goods"
      description="Clear, instant fulfillment guidelines for virtual currency and cosmetic items purchased on Gappey."
    >
      {/* 1. Mode of Delivery */}
      <section className="space-y-4">
        <h2 className="text-xl font-bold text-white flex items-center gap-2">
          <Zap className="w-5 h-5 text-amber-400" /> 1. Mode of Delivery
        </h2>
        <p>
          All products and services sold on Gappey—including <strong>Gold Coins</strong>, <strong>Super Coins</strong>,
          avatar frames, entrance rides, chat bubbles, and room customization themes—are <strong>purely digital goods</strong>.
        </p>
        <p>
          No physical shipping, physical packaging, or postal courier dispatch is involved. Delivery is conducted
          entirely electronically through our automated backend servers.
        </p>
      </section>

      {/* 2. Delivery Timeline */}
      <section className="space-y-4">
        <h2 className="text-xl font-bold text-white flex items-center gap-2">
          <Clock className="w-5 h-5 text-amber-400" /> 2. Delivery Timeline
        </h2>
        <div className="p-4 rounded-xl bg-emerald-950/20 border border-emerald-500/20 space-y-2 text-sm">
          <p className="font-semibold text-emerald-300 flex items-center gap-2">
            <CheckCircle className="w-4 h-4" /> Credit Upon Payment Confirmation
          </p>
          <p className="text-xs text-zinc-300 leading-relaxed">
            Credit usually happens right after payment confirmation from our payment aggregator, <strong>Cashfree Payments</strong> (or Google Play Billing). Once payment authorization is confirmed, the purchased virtual coins and any applicable first-recharge perks are credited to your account wallet.
          </p>
        </div>
      </section>

      {/* 3. Non-Delivery Escalation */}
      <section className="space-y-4">
        <h2 className="text-xl font-bold text-white flex items-center gap-2">
          <HelpCircle className="w-5 h-5 text-amber-400" /> 3. Escalation if Not Credited Within 30 Minutes
        </h2>
        <p>
          If your payment was debited from your bank account or payment app but your balance is not updated within 30 minutes, please take the following steps:
        </p>
        <ol className="list-decimal list-inside space-y-1.5 text-xs text-zinc-300 pl-2">
          <li>
            Visit the web store at <Link href="/recharge" className="text-amber-400 underline font-semibold">gappey.in/recharge</Link> while logged in, which automatically runs a verification check for your latest order session.
          </li>
          <li>
            If still uncredited, contact support at{" "}
            <a href={`mailto:${SUPPORT_EMAIL}`} className="text-amber-400 underline font-semibold">{SUPPORT_EMAIL}</a> with your Cashfree Order ID, payment date, and transaction reference.
          </li>
        </ol>
        <p className="text-xs text-zinc-400 pt-1">
          Failed or duplicate payments are refunded as per our <Link href="/refund-policy" className="text-amber-400 underline">Refund and Cancellation Policy</Link>.
        </p>
      </section>

      {/* 4. Proof of Delivery */}
      <section className="space-y-4">
        <h2 className="text-xl font-bold text-white flex items-center gap-2">
          <ShieldCheck className="w-5 h-5 text-amber-400" /> 4. Proof of Delivery &amp; Ledger Audit
        </h2>
        <p>
          Every successful credit is recorded immutably in your account ledger (<code className="text-amber-300 font-mono">FinancialLog</code>) with
          a unique transaction reference ID, exact timestamp, and coin quantity. You can view your current coin balance
          at any time on the <Link href="/recharge" className="text-amber-400 underline">Recharge Store</Link> or inside the Gappey app wallet tab.
        </p>
      </section>
    </LegalPageLayout>
  );
}
