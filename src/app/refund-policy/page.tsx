import React from "react";
import type { Metadata } from "next";
import LegalPageLayout from "@/components/legal/LegalPageLayout";
import { AlertCircle, CheckCircle, RefreshCcw, ShieldCheck, Mail } from "lucide-react";
import { SUPPORT_EMAIL } from "@/constants/compliance";

export const metadata: Metadata = {
  title: "Refund & Cancellation Policy | Gappey",
  description:
    "Refund and cancellation terms for virtual currencies, digital goods, and payments on Gappey.",
};

export default function RefundPolicyPage() {
  return (
    <LegalPageLayout
      badge="Consumer Policy"
      title="Refund and Cancellation Policy"
      description="Clear, transparent terms regarding digital purchases, payment reversals, and failed transactions on Gappey."
    >
      {/* 1. Nature of Digital Goods */}
      <section className="space-y-4">
        <h2 className="text-xl font-bold text-white flex items-center gap-2">
          <ShieldCheck className="w-5 h-5 text-amber-400" /> 1. Nature of Digital Goods &amp; Services
        </h2>
        <p>
          Gappey provides digital entertainment services. All purchases made on the Gappey platform—including virtual currencies
          (<strong>Gold Coins</strong> and <strong>Super Coins</strong>) and virtual cosmetic items (avatar frames, entry rides,
          chat bubbles, badges, and room themes)—are <strong>intangible digital goods</strong> delivered electronically and credited
          immediately to your account upon transaction confirmation.
        </p>
      </section>

      {/* 2. Cancellation Policy */}
      <section className="space-y-4">
        <h2 className="text-xl font-bold text-white flex items-center gap-2">
          <RefreshCcw className="w-5 h-5 text-amber-400" /> 2. Order Cancellation
        </h2>
        <p>
          Because digital goods are delivered instantaneously upon authorization, an order <strong>cannot be cancelled</strong> once
          the payment has been processed and credited to the user&apos;s account. Please review your selected recharge pack,
          pricing, and recipient account details carefully before confirming payment on the Cashfree gateway or Google Play Billing.
        </p>
      </section>

      {/* 3. Refund Policy */}
      <section className="space-y-4">
        <h2 className="text-xl font-bold text-white flex items-center gap-2">
          <AlertCircle className="w-5 h-5 text-amber-400" /> 3. Refund Terms
        </h2>
        <div className="space-y-3 text-sm">
          <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5 space-y-2">
            <h3 className="font-semibold text-emerald-400 flex items-center gap-2">
              <CheckCircle className="w-4 h-4" /> Eligible Scenarios for Refunds:
            </h3>
            <ul className="list-disc list-inside space-y-1.5 text-zinc-300 text-xs pl-2">
              <li>
                <strong>Failed Transaction:</strong> Money was deducted from your bank account / UPI / card, but Cashfree or Google Play
                reported the transaction as failed and coins were never credited to your Gappey account.
              </li>
              <li>
                <strong>Duplicate Deduction:</strong> A technical glitch resulted in multiple debits for a single recharge pack attempt,
                and the additional payment did not correspond to credited items.
              </li>
              <li>
                <strong>Unauthorized / Fraudulent Transaction:</strong> Transactions proven to have been executed through verified payment instrument theft or fraud, subject to banking investigation and statutory norms.
              </li>
            </ul>
          </div>

          <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5 space-y-2">
            <h3 className="font-semibold text-rose-400 flex items-center gap-2">
              <AlertCircle className="w-4 h-4" /> Non-Refundable Scenarios:
            </h3>
            <ul className="list-disc list-inside space-y-1.5 text-zinc-300 text-xs pl-2">
              <li>Virtual coins or items that have already been credited and partially or fully spent, gifted, or transferred.</li>
              <li>User dissatisfaction with room banter, community interactions, or social outcomes.</li>
              <li>Account termination or suspension resulting from violations of Gappey Terms of Service or Child Safety policies.</li>
              <li>Inadvertent purchases where virtual items were successfully credited to the verified account.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* 4. Refund Processing Timeline */}
      <section className="space-y-4">
        <h2 className="text-xl font-bold text-white flex items-center gap-2">
          <RefreshCcw className="w-5 h-5 text-amber-400" /> 4. Refund Processing Timeline &amp; Method
        </h2>
        <p>
          Approved refunds for failed, duplicate, or uncredited debits are processed automatically through Cashfree Payments
          or Google Play Billing back to the <strong>original source of payment</strong> (e.g., original UPI ID, debit/credit card,
          or bank account).
        </p>
        <p>
          Standard turnaround times for bank settlement:
        </p>
        <ul className="list-disc list-inside space-y-1 text-sm text-zinc-300 pl-2">
          <li><strong>UPI &amp; NetBanking:</strong> 3 to 5 business days.</li>
          <li><strong>Debit &amp; Credit Cards:</strong> 5 to 7 business days, depending on your issuing bank.</li>
        </ul>
      </section>

      {/* 5. How to Request Assistance */}
      <section className="space-y-4">
        <h2 className="text-xl font-bold text-white flex items-center gap-2">
          <Mail className="w-5 h-5 text-amber-400" /> 5. How to Request Support
        </h2>
        <p>
          To inquire about an uncredited transaction or initiate a refund inquiry, please email our billing desk at{" "}
          <a href={`mailto:${SUPPORT_EMAIL}`} className="text-amber-400 underline font-semibold">{SUPPORT_EMAIL}</a> with:
        </p>
        <ol className="list-decimal list-inside space-y-1 text-xs text-zinc-300 pl-2">
          <li>Your registered User ID / Username</li>
          <li>Cashfree Order ID (e.g. <code className="text-amber-300 font-mono">gappey_...</code>) or Google Play Order Number</li>
          <li>Date, time, and exact amount debited</li>
          <li>Bank SMS confirmation or screenshot of payment receipt</li>
        </ol>
      </section>
    </LegalPageLayout>
  );
}
