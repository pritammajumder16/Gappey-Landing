"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUp, ExternalLink, Mail, ShieldCheck, FileText } from "lucide-react";
import { BUSINESS_IDENTITY, SUPPORT_EMAIL, GRIEVANCE_EMAIL } from "@/constants/compliance";
import GetTheApp from "./GetTheApp";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const socialHandles = [
    {
      name: "Instagram",
      handle: "@gappey.india",
      href: "https://instagram.gappey.in",
      color: "hover:text-pink-400 hover:border-pink-500/50 hover:bg-pink-500/10",
      icon: (
        <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.13-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
        </svg>
      ),
    },
    {
      name: "YouTube",
      handle: "@GappeyIndia",
      href: "https://www.youtube.com/@GappeyIndia",
      color: "hover:text-red-400 hover:border-red-500/50 hover:bg-red-500/10",
      icon: (
        <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
          <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
        </svg>
      ),
    },
    {
      name: "Facebook",
      handle: "Gappey Official",
      href: "https://www.facebook.com/profile.php?id=61594831059345",
      color: "hover:text-blue-400 hover:border-blue-500/50 hover:bg-blue-500/10",
      icon: (
        <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
        </svg>
      ),
    },
  ];

  return (
    <footer className="relative bg-[#040408] border-t border-white/10 pt-16 pb-12 overflow-hidden text-zinc-400 text-xs sm:text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-12 gap-x-6 gap-y-9 pb-10 sm:pb-12 border-b border-white/10">
          {/* Brand Col */}
          <div className="col-span-2 md:col-span-3 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl overflow-hidden bg-black p-0.5 border border-purple-500/50 shadow-md shadow-purple-900/50">
                <Image
                  src="/assets/logo.jpeg"
                  alt="Gappey"
                  width={40}
                  height={40}
                  className="w-full h-full object-cover rounded-[14px]"
                />
              </div>
              <span className="text-xl font-black text-white tracking-tight">
                Gappey
              </span>
            </div>

            <p className="text-zinc-400 text-xs leading-relaxed">
              India&apos;s real-time voice party room platform. Low-latency multi-seat audio conversations, animated virtual gifting, social games with no real-money stakes, and Families.
            </p>

            <div className="space-y-1 pt-1 text-xs">
              <a
                href={`mailto:${SUPPORT_EMAIL}`}
                className="inline-flex items-center gap-2 text-purple-300 hover:text-white transition-colors"
              >
                <Mail className="w-3.5 h-3.5 text-purple-400" />
                <span>{SUPPORT_EMAIL}</span>
              </a>
            </div>

            {/* Social Handles */}
            <div className="flex items-center gap-2 pt-2">
              {socialHandles.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={item.name}
                  className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-zinc-400 hover:text-white transition-colors"
                >
                  {item.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Group 1: Company */}
          <div className="col-span-1 md:col-span-2 space-y-3 min-w-0">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              Company
            </h4>
            <ul className="space-y-0.5 text-[13px] md:text-xs [&_a:not([data-inline])]:block [&_a]:py-1.5 md:[&_a]:py-1 [&_a]:break-words">
              <li>
                <Link href="/about" className="hover:text-purple-300 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="hover:text-purple-300 transition-colors">
                  Pricing &amp; Economy
                </Link>
              </li>
              <li>
                <Link href="/recharge" className="text-amber-300 hover:text-amber-200 font-semibold transition-colors flex items-center gap-1.5">
                  <span>Recharge Store</span>
                  <span className="text-[10px] bg-amber-400/20 px-1.5 py-0.2 rounded border border-amber-400/30">Net INR</span>
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-purple-300 transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/invite" className="hover:text-purple-300 transition-colors">
                  Invite Friends
                </Link>
              </li>
            </ul>
          </div>

          {/* Group 2: Legal & Compliance */}
          <div className="col-span-1 md:col-span-3 space-y-3 min-w-0">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              Legal &amp; Policy
            </h4>
            <ul className="space-y-0.5 text-[13px] md:text-xs [&_a:not([data-inline])]:block [&_a]:py-1.5 md:[&_a]:py-1 [&_a]:break-words">
              <li>
                <Link href="/terms" className="hover:text-purple-300 transition-colors">
                  Terms &amp; Conditions
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="hover:text-purple-300 transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/refund-policy" className="hover:text-purple-300 transition-colors">
                  Refund &amp; Cancellation Policy
                </Link>
              </li>
              <li>
                <Link href="/delivery-policy" className="hover:text-purple-300 transition-colors">
                  Delivery &amp; Shipping Policy
                </Link>
              </li>
              <li>
                <Link href="/safety" className="hover:text-purple-300 transition-colors">
                  Child Safety &amp; Reporting
                </Link>
              </li>
              <li>
                <Link href="/delete-account" className="hover:text-purple-300 transition-colors">
                  Account Deletion
                </Link>
              </li>
              <li>
                <a
                  href="/legal/udyam-registration-certificate.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  data-inline
                  className="inline-flex items-center gap-1.5 text-purple-300 hover:text-white transition-colors"
                >
                  <FileText className="w-3 h-3 shrink-0" />
                  <span>Udyam MSME Certificate</span>
                  <ExternalLink className="w-2.5 h-2.5 opacity-60" />
                </a>
              </li>
            </ul>
          </div>

          {/* Group 3: Support */}
          <div className="col-span-1 md:col-span-2 space-y-3 min-w-0">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              Support
            </h4>
            <ul className="space-y-0.5 text-[13px] md:text-xs [&_a:not([data-inline])]:block [&_a]:py-1.5 md:[&_a]:py-1 [&_a]:break-words">
              <li>
                <Link href="/contact" className="hover:text-purple-300 transition-colors">
                  Help Desk &amp; Inquiries
                </Link>
              </li>
              <li>
                <a href={`mailto:${SUPPORT_EMAIL}`} className="hover:text-purple-300 transition-colors">
                  Customer Support
                </a>
              </li>
              <li>
                <a href={`mailto:${GRIEVANCE_EMAIL}`} className="hover:text-purple-300 transition-colors">
                  Grievance Officer
                </a>
              </li>
              <li>
                <Link href="/safety" className="hover:text-purple-300 transition-colors">
                  Report Abuse
                </Link>
              </li>
            </ul>
          </div>

          {/* Group 4: Get the App */}
          <div className="col-span-2 md:col-span-2 space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              Get the App
            </h4>
            <div className="space-y-2.5">
              <GetTheApp size="sm" />
              <div className="pt-1">
                <Link
                  href="/download-android"
                  className="inline-flex items-center gap-1.5 text-xs text-amber-300 hover:text-amber-200 transition-colors font-medium"
                >
                  <span>Android Download Options</span>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Business Identity Box */}
        <div className="mt-8 p-4 rounded-2xl bg-white/[0.02] border border-white/5 flex flex-col md:flex-row md:items-center justify-between gap-3 text-xs text-zinc-400">
          <div className="flex items-start gap-2.5 min-w-0">
            <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
            <div className="space-y-1 min-w-0 break-words">
              <p>
                <span className="font-semibold text-zinc-200">{BUSINESS_IDENTITY.enterpriseName}</span>
                <span className="text-zinc-500"> (Unit: {BUSINESS_IDENTITY.unitName})</span>
              </p>
              <p>Registration: <strong className="font-mono text-zinc-300 break-all">{BUSINESS_IDENTITY.registrationNumber}</strong></p>
              <p>{BUSINESS_IDENTITY.registeredAddress}</p>
            </div>
          </div>
          <a
            href="/legal/udyam-registration-certificate.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 inline-flex items-center justify-center gap-1.5 rounded-xl border border-purple-400/30 bg-purple-500/10 px-3 py-2.5 text-[12px] font-semibold text-purple-200 hover:text-white hover:bg-purple-500/20 transition-colors"
          >
            <FileText className="w-3.5 h-3.5" /> View Official MSME Certificate
          </a>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-500 text-center sm:text-left">
          <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-6 text-center sm:text-left">
            <p>© {new Date().getFullYear()} {BUSINESS_IDENTITY.enterpriseName} (Unit: {BUSINESS_IDENTITY.unitName}). All rights reserved.</p>
            <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1 text-[12px] text-zinc-400">
              <Link href="/privacy" className="hover:text-purple-300 underline underline-offset-4 transition-colors">
                Privacy
              </Link>
              <span className="text-zinc-600">·</span>
              <Link href="/terms" className="hover:text-pink-300 underline underline-offset-4 transition-colors">
                Terms
              </Link>
              <span className="text-zinc-600">·</span>
              <Link href="/refund-policy" className="hover:text-purple-300 underline underline-offset-4 transition-colors">
                Refunds
              </Link>
              <span className="text-zinc-600">·</span>
              <Link href="/delivery-policy" className="hover:text-purple-300 underline underline-offset-4 transition-colors">
                Delivery
              </Link>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={scrollToTop}
              className="p-2 rounded-xl bg-zinc-900 hover:bg-zinc-800 text-zinc-300 hover:text-white border border-white/10 transition-colors flex items-center gap-1.5 text-[11px]"
              aria-label="Scroll to top"
            >
              <ArrowUp className="w-3.5 h-3.5" /> Back to top
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
