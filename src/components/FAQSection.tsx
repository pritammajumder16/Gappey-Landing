"use client";

import React, { useState } from "react";
import { ChevronDown, HelpCircle, Sparkles } from "lucide-react";
import { FAQS } from "@/constants/faqs";

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="relative py-20 sm:py-28 overflow-hidden bg-[#06060c]">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-pink-900/10 blur-[150px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center space-y-4 mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-pink-500/10 border border-pink-500/30 text-pink-300 text-xs font-bold tracking-wider uppercase">
            <HelpCircle className="w-3.5 h-3.5" />
            Frequently Asked Questions
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
            Everything You Need to Know <br />
            <span className="bg-gradient-to-r from-pink-400 via-purple-400 to-amber-300 bg-clip-text text-transparent">
              About Gappey &amp; Live Voice Rooms
            </span>
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base max-w-2xl mx-auto">
            Find answers to common questions about live audio party rooms, creator monetization, animated broadcast gifts, and downloading the Android APK.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {FAQS.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className={`rounded-2xl transition-all duration-200 border ${
                  isOpen
                    ? "bg-zinc-900/90 border-purple-500/40 shadow-lg shadow-purple-950/40"
                    : "bg-zinc-900/40 border-white/5 hover:border-white/10 hover:bg-zinc-900/60"
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex items-center justify-between text-left p-5 sm:p-6 gap-4"
                  aria-expanded={isOpen}
                >
                  <span className="text-base sm:text-lg font-bold text-white leading-snug">
                    {faq.question}
                  </span>
                  <div
                    className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-transform duration-300 ${
                      isOpen
                        ? "bg-purple-600/30 text-purple-300 rotate-180"
                        : "bg-white/5 text-zinc-400"
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 sm:px-6 sm:pb-6 text-sm sm:text-base text-zinc-300 leading-relaxed border-t border-white/5 pt-4">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
