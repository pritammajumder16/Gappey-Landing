import React, { Suspense } from "react";
import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import RechargeStore from "@/components/recharge/RechargeStore";
import { Loader2, Sparkles } from "lucide-react";

export const metadata: Metadata = {
  title: "Recharge Gappey Coins Online — Official Top-Up Store | UPI & Cards",
  description:
    "Safely recharge Gappey Gold Coins & Super Coins online via Cashfree. Instant delivery to your account with UPI, Google Pay, PhonePe, Paytm, and Cards. Get +25% extra coins on your first recharge!",
  keywords: [
    "recharge Gappey coins",
    "Gappey coin top up",
    "buy Gappey gold coins",
    "Gappey recharge online",
    "Gappey Cashfree recharge",
    "Gappey audio room coins",
    "Gappey wallet top up",
    "Gappey coins UPI",
    "Gappey coins Google Pay",
    "Gappey PhonePe recharge",
    "Indian voice party coin top up",
  ],
  alternates: {
    canonical: "https://gappey.in/recharge",
  },
  openGraph: {
    title: "Recharge Gappey Coins Online — Official Top-Up Store",
    description:
      "Instant coin delivery to your Gappey wallet via UPI, Cards, and NetBanking. Claim +25% bonus coins and exclusive perks on your first recharge!",
    url: "https://gappey.in/recharge",
    siteName: "Gappey",
    images: [
      {
        url: "/mockup/d7cec7bb-fafd-4c06-bc7f-ef2bb58cac7a.png",
        width: 1200,
        height: 630,
        alt: "Gappey Coin Top-Up Center",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Recharge Gappey Coins Online — Official Top-Up Store",
    description:
      "Instant coin delivery via Cashfree UPI and cards. Get +25% bonus coins on your first recharge!",
    images: ["/mockup/d7cec7bb-fafd-4c06-bc7f-ef2bb58cac7a.png"],
  },
};

export default function RechargePage() {
  const jsonLdData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://gappey.in"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Recharge Coins",
            "item": "https://gappey.in/recharge"
          }
        ]
      },
      {
        "@type": "Product",
        "name": "Gappey Gold Coins Top-Up",
        "image": "https://gappey.in/icon-512.png",
        "description": "Official virtual coins for Gappey live audio party rooms, broadcast gifts, and cosmetic items.",
        "brand": {
          "@type": "Brand",
          "name": "Gappey"
        },
        "offers": {
          "@type": "AggregateOffer",
          "priceCurrency": "INR",
          "lowPrice": "10",
          "highPrice": "10000",
          "offerCount": "8"
        }
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "How fast are coins added to my Gappey account?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Coins are credited instantly to your Gappey account as soon as the Cashfree payment is confirmed."
            }
          },
          {
            "@type": "Question",
            "name": "What payment methods are supported for recharging Gappey coins?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Cashfree supports all Indian payment methods including Google Pay, PhonePe, Paytm, BHIM, UPI QR, Debit/Credit Cards, and NetBanking."
            }
          },
          {
            "@type": "Question",
            "name": "Is there a bonus on the first coin recharge?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, new rechargers receive +25% bonus Gold Coins, a permanent avatar frame, a 7-day exclusive ride, and a 3-day chat bubble."
            }
          }
        ]
      }
    ]
  };

  return (
    <main className="min-h-screen bg-[#06060c] text-white selection:bg-pink-600 selection:text-white flex flex-col justify-between">
      {/* Schema.org Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdData) }}
      />

      {/* Navigation */}
      <Navbar />

      {/* Hero Header */}
      <div className="pt-28 sm:pt-36 pb-6 text-center px-4 relative overflow-hidden">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-96 h-96 bg-purple-600/15 rounded-full blur-[120px] pointer-events-none" />
        <div className="relative z-10 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 text-purple-300 text-xs font-bold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span>Official Gappey Top-Up Center</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            Recharge Gappey Coins{" "}
            <span className="bg-gradient-to-r from-amber-400 via-pink-500 to-purple-500 bg-clip-text text-transparent">
              Online
            </span>
          </h1>

          <p className="text-xs sm:text-base text-zinc-400 mt-2 max-w-xl mx-auto">
            Top up your Gappey account seamlessly via Cashfree UPI, Cards, and NetBanking with guaranteed instant delivery.
          </p>
        </div>
      </div>

      {/* Interactive Store wrapped in Suspense for searchParams */}
      <Suspense
        fallback={
          <div className="flex items-center justify-center py-24 text-zinc-400 gap-2">
            <Loader2 className="w-6 h-6 animate-spin text-purple-500" />
            <span className="text-sm">Loading Coin Store...</span>
          </div>
        }
      >
        <RechargeStore />
      </Suspense>

      {/* Footer */}
      <Footer />
    </main>
  );
}
