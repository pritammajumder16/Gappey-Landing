import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import LegalPageLayout from "@/components/legal/LegalPageLayout";
import { Mail, MapPin, Building, Phone, Clock, ShieldCheck, HelpCircle } from "lucide-react";
import { BUSINESS_IDENTITY, SUPPORT_EMAIL, SUPPORT_PHONE, GRIEVANCE_EMAIL } from "@/constants/compliance";

export const metadata: Metadata = {
  title: "Contact Us | Gappey Customer Support & Grievance",
  description:
    "Get in touch with the Gappey support and compliance team. Official registered business address, support email, grievance desk, and assistance.",
};

export default function ContactUsPage() {
  return (
    <LegalPageLayout
      badge="Support &amp; Contact"
      title="Contact Us"
      description="We are here to assist with account inquiries, payment reconciliations, safety reports, and general feedback."
    >
      {/* Overview Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Customer Support */}
        <div className="p-6 rounded-2xl bg-white/[0.03] border border-white/10 space-y-3">
          <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400">
            <Mail className="w-5 h-5" />
          </div>
          <h2 className="text-lg font-bold text-white">General &amp; Payment Support</h2>
          <p className="text-xs text-zinc-400 leading-relaxed">
            For help with coin recharge orders, payment verification, account issues, or bug reports:
          </p>
          <div className="pt-2">
            <a
              href={`mailto:${SUPPORT_EMAIL}`}
              className="text-amber-400 hover:text-amber-300 font-semibold text-sm underline inline-flex items-center gap-1.5"
            >
              <Mail className="w-4 h-4" /> {SUPPORT_EMAIL}
            </a>
          </div>
          <p className="text-[11px] text-zinc-500">
            Average response time: 24–48 business hours.
          </p>
        </div>

        {/* Grievance & Compliance */}
        <div className="p-6 rounded-2xl bg-white/[0.03] border border-white/10 space-y-3">
          <div className="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/30 flex items-center justify-center text-purple-400">
            <ShieldCheck className="w-5 h-5" />
          </div>
          <h2 className="text-lg font-bold text-white">Grievance &amp; Legal Desk</h2>
          <p className="text-xs text-zinc-400 leading-relaxed">
            In accordance with the Information Technology (Intermediary Guidelines) Rules, 2021:
          </p>
          <div className="pt-2">
            <a
              href={`mailto:${GRIEVANCE_EMAIL}`}
              className="text-purple-400 hover:text-purple-300 font-semibold text-sm underline inline-flex items-center gap-1.5"
            >
              <Mail className="w-4 h-4" /> {GRIEVANCE_EMAIL}
            </a>
          </div>
          <p className="text-[11px] text-zinc-500">
            Designated Grievance Officer: Compliance Desk, Kolkata, WB.
          </p>
        </div>
      </div>

      {/* Registered Business Details */}
      <section className="p-6 rounded-2xl bg-white/[0.02] border border-white/10 space-y-4">
        <h2 className="text-lg font-bold text-white flex items-center gap-2">
          <Building className="w-5 h-5 text-amber-400" /> Registered Business Office
        </h2>
        <div className="space-y-3 text-sm text-zinc-300">
          <div className="flex items-start gap-3">
            <Building className="w-4 h-4 text-zinc-400 mt-1 shrink-0" />
            <div>
              <strong className="text-white block">{BUSINESS_IDENTITY.enterpriseName}</strong>
              <span className="text-xs text-zinc-400">Unit: {BUSINESS_IDENTITY.unitName} (MSME Micro Enterprise)</span>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <MapPin className="w-4 h-4 text-zinc-400 mt-1 shrink-0" />
            <div>
              <span className="block text-white font-medium">Registered Address:</span>
              <p className="text-xs text-zinc-400 leading-relaxed">
                {BUSINESS_IDENTITY.city}, {BUSINESS_IDENTITY.state}, Postal Code {BUSINESS_IDENTITY.pinCode}, India.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <Clock className="w-4 h-4 text-zinc-400 mt-1 shrink-0" />
            <div>
              <span className="block text-white font-medium">Support Operating Hours:</span>
              <span className="text-xs text-zinc-400">Monday to Friday, 10:00 AM – 6:00 PM IST (excluding national holidays).</span>
            </div>
          </div>

          {SUPPORT_PHONE && (
            <div className="flex items-start gap-3">
              <Phone className="w-4 h-4 text-zinc-400 mt-1 shrink-0" />
              <div>
                <span className="block text-white font-medium">Telephone / Helpline:</span>
                <span className="text-xs text-zinc-400">{SUPPORT_PHONE}</span>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Payment Escalations */}
      <section className="space-y-3">
        <h2 className="text-lg font-bold text-white flex items-center gap-2">
          <HelpCircle className="w-5 h-5 text-amber-400" /> Need Help with a Recharge Order?
        </h2>
        <p className="text-sm text-zinc-300 leading-relaxed">
          If your bank or UPI account was debited but your coins were not credited within 30 minutes, please email{" "}
          <a href={`mailto:${SUPPORT_EMAIL}`} className="text-amber-400 underline">{SUPPORT_EMAIL}</a> with:
        </p>
        <ul className="list-disc list-inside space-y-1.5 text-xs text-zinc-400 pl-2">
          <li>Your Gappey User ID and registered email</li>
          <li>Cashfree Order ID (starts with <code className="text-amber-300 font-mono">gappey_...</code>)</li>
          <li>Date and exact amount debited (₹)</li>
          <li>Payment screenshot or bank transaction reference (UTR / RRN)</li>
        </ul>
        <p className="text-xs text-zinc-400">
          Our automated reconciliation sweeper resolves most pending bank debits every few minutes. You can also view our{" "}
          <Link href="/refund-policy" className="text-amber-400 underline">Refund and Cancellation Policy</Link> and{" "}
          <Link href="/delivery-policy" className="text-amber-400 underline">Delivery Policy</Link>.
        </p>
      </section>
    </LegalPageLayout>
  );
}
