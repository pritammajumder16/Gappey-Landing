import React from "react";
import Link from "next/link";
import { ArrowLeft, Shield, Building2, FileText, Mail, MapPin } from "lucide-react";
import { BUSINESS_IDENTITY, SUPPORT_EMAIL, LAST_UPDATED_DATE } from "@/constants/compliance";

interface LegalPageLayoutProps {
  badge: string;
  title: string;
  description?: string;
  lastUpdated?: string;
  children: React.ReactNode;
}

export default function LegalPageLayout({
  badge,
  title,
  description,
  lastUpdated = LAST_UPDATED_DATE,
  children,
}: LegalPageLayoutProps) {
  return (
    <div className="min-h-screen bg-[#07070c] text-zinc-300 font-sans selection:bg-amber-500 selection:text-black">
      {/* Background Ambience */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-purple-700/10 blur-[140px] rounded-full pointer-events-none" />

      {/* Sticky Header */}
      <header className="border-b border-white/10 bg-[#090814]/80 backdrop-blur-xl sticky top-0 z-40">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm font-semibold text-zinc-300 hover:text-white transition-colors"
          >
            <ArrowLeft className="w-4 h-4" /> Back to Home
          </Link>
          <span className="text-xs uppercase font-mono tracking-wider text-amber-400 font-bold">
            Gappey Compliance &amp; Legal
          </span>
        </div>
      </header>

      {/* Main Container */}
      <main className="max-w-3xl mx-auto px-4 sm:px-6 py-12 sm:py-16 space-y-10">
        {/* Title Block */}
        <div className="space-y-3 border-b border-white/10 pb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-semibold">
            <Shield className="w-3.5 h-3.5 text-amber-400" /> {badge}
          </div>
          <h1 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
            {title}
          </h1>
          {description && (
            <p className="text-sm sm:text-base text-zinc-400 leading-relaxed">
              {description}
            </p>
          )}
          <p className="text-xs text-zinc-500 font-mono">
            Last Updated: {lastUpdated} · Governed by the Laws of India
          </p>
        </div>

        {/* Content Body */}
        <div className="space-y-8 leading-relaxed text-zinc-300">
          {children}
        </div>

        {/* Business Identity Card */}
        <section className="mt-12 p-6 rounded-2xl bg-white/[0.03] border border-white/10 space-y-4">
          <div className="flex items-center gap-2 text-white font-bold text-base">
            <Building2 className="w-5 h-5 text-amber-400 shrink-0" />
            <span>Registered Business Entity</span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm text-zinc-300">
            <div>
              <span className="text-zinc-500 block text-xs">Enterprise Name:</span>
              <strong className="text-white">{BUSINESS_IDENTITY.enterpriseName}</strong>
            </div>
            <div>
              <span className="text-zinc-500 block text-xs">Unit Name:</span>
              <strong className="text-white">{BUSINESS_IDENTITY.unitName}</strong>
            </div>
            <div>
              <span className="text-zinc-500 block text-xs">Udyam Registration Number:</span>
              <span className="font-mono text-amber-300">{BUSINESS_IDENTITY.registrationNumber}</span>
            </div>
            <div>
              <span className="text-zinc-500 block text-xs">Enterprise Category:</span>
              <span>{BUSINESS_IDENTITY.enterpriseType}</span>
            </div>
            <div>
              <span className="text-zinc-500 block text-xs">Jurisdiction &amp; Location:</span>
              <span className="flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-zinc-400" />
                {BUSINESS_IDENTITY.city}, {BUSINESS_IDENTITY.state}, India ({BUSINESS_IDENTITY.pinCode})
              </span>
            </div>
            <div>
              <span className="text-zinc-500 block text-xs">Compliance Inquiries:</span>
              <a href={`mailto:${SUPPORT_EMAIL}`} className="text-amber-400 underline flex items-center gap-1">
                <Mail className="w-3.5 h-3.5" />
                {SUPPORT_EMAIL}
              </a>
            </div>
          </div>
          <div className="pt-2 border-t border-white/5 flex items-center justify-between text-xs text-zinc-400">
            <span>Official Government Registration:</span>
            <Link
              href="/legal/udyam-registration-certificate.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-amber-400 hover:text-amber-300 font-medium underline"
            >
              <FileText className="w-3.5 h-3.5" /> View Udyam Certificate (PDF)
            </Link>
          </div>
        </section>

        {/* Footer Navigation */}
        <div className="pt-6 border-t border-white/10 text-xs text-zinc-500 flex flex-wrap justify-between items-center gap-4">
          <p>© 2026 {BUSINESS_IDENTITY.unitName} ({BUSINESS_IDENTITY.enterpriseName}). All rights reserved.</p>
          <div className="flex flex-wrap gap-4">
            <Link href="/terms" className="hover:text-zinc-300 underline">Terms</Link>
            <Link href="/privacy" className="hover:text-zinc-300 underline">Privacy</Link>
            <Link href="/refund-policy" className="hover:text-zinc-300 underline">Refund Policy</Link>
            <Link href="/delivery-policy" className="hover:text-zinc-300 underline">Delivery Policy</Link>
            <Link href="/contact" className="hover:text-zinc-300 underline">Contact Us</Link>
          </div>
        </div>
      </main>
    </div>
  );
}
