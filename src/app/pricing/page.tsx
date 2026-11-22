import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import LegalPageLayout from "@/components/legal/LegalPageLayout";
import { Coins, Sparkles, Diamond, ArrowRight, ShieldCheck } from "lucide-react";
import PACKS from "@/constants/topup-packs.json";

export const metadata: Metadata = {
  title: "Pricing & Coin Recharge Packs | Gappey",
  description:
    "Official transparent pricing chart for Gappey Gold Coins, Super Coins, and First Recharge bonus packs.",
};

export default function PricingPage() {
  return (
    <LegalPageLayout
      badge="Transparent Pricing"
      title="Pricing &amp; Recharge Packs"
      description="Official web pricing for Gappey virtual currencies. Zero store commissions on the web means you pay the direct net price for every pack."
    >
      {/* CTA to Recharge */}
      <div className="p-5 rounded-2xl bg-gradient-to-r from-amber-500/10 via-amber-500/5 to-transparent border border-amber-500/30 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div>
          <h3 className="font-bold text-white text-base">Ready to top up your account?</h3>
          <p className="text-xs text-zinc-400">
            Recharge securely via UPI, Cards, or NetBanking on Cashfree.
          </p>
        </div>
        <Link
          href="/recharge"
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-amber-400 hover:bg-amber-300 text-black font-bold text-sm transition shadow-lg active:scale-95 shrink-0"
        >
          Go to Web Recharge <ArrowRight className="w-4 h-4" />
        </Link>
      </div>

      {/* Pricing Table */}
      <section className="space-y-4">
        <h2 className="text-xl font-bold text-white flex items-center gap-2">
          <Coins className="w-5 h-5 text-amber-400" /> Official Pack Chart
        </h2>
        <div className="overflow-x-auto rounded-xl border border-white/10 bg-white/[0.02]">
          <table className="w-full text-left text-sm">
            <thead className="bg-white/[0.04] text-xs uppercase font-semibold text-zinc-400 border-b border-white/10">
              <tr>
                <th className="py-3 px-4">Web Price</th>
                <th className="py-3 px-4">Gold Coins</th>
                <th className="py-3 px-4">Super Coins</th>
                <th className="py-3 px-4">SVIP EXP</th>
                <th className="py-3 px-4">Offer / Tag</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5 text-xs sm:text-sm">
              {PACKS.map((p) => (
                <tr
                  key={p.price}
                  className={`hover:bg-white/[0.03] transition ${p.highlight ? "bg-amber-400/[0.04]" : ""}`}
                >
                  <td className="py-3 px-4 font-bold text-amber-300">
                    ₹{p.price.toLocaleString("en-IN")}
                  </td>
                  <td className="py-3 px-4 font-semibold text-white">
                    {p.gold}
                    {p.bonus && (
                      <span className="block text-[10px] text-amber-400 font-normal">
                        incl. {p.bonus}
                      </span>
                    )}
                  </td>
                  <td className="py-3 px-4 text-purple-300 font-mono">
                    {p.superCoins} SC
                  </td>
                  <td className="py-3 px-4 text-zinc-400">
                    +{p.exp.toLocaleString("en-IN")}
                  </td>
                  <td className="py-3 px-4">
                    <span
                      className={`inline-block px-2 py-0.5 rounded-md text-[10px] font-semibold ${
                        p.tag.includes("Tier")
                          ? "bg-purple-950 border border-purple-500/30 text-purple-300"
                          : p.highlight
                          ? "bg-amber-950 border border-amber-500/30 text-amber-300"
                          : "bg-zinc-800 text-zinc-300"
                      }`}
                    >
                      {p.tag}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* The Four Currencies Explained */}
      <section className="space-y-4 pt-2">
        <h2 className="text-xl font-bold text-white flex items-center gap-2">
          <ShieldCheck className="w-5 h-5 text-amber-400" /> Understanding Gappey Currencies
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
          <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5 space-y-2">
            <h3 className="font-bold text-amber-300 flex items-center gap-1.5 text-sm">
              <Coins className="w-4 h-4" /> 1. Gold Coins (Entertainment)
            </h3>
            <p className="text-zinc-300 leading-relaxed">
              Used for room banter, mini-games (e.g. Ludo), and casual voice room broadcast gifts.
              <strong> Zero monetary cash value</strong>. Gold Coins cannot be redeemed, sold, exchanged, or withdrawn for cash.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5 space-y-2">
            <h3 className="font-bold text-purple-300 flex items-center gap-1.5 text-sm">
              <Sparkles className="w-4 h-4" /> 2. Super Coins (Premium)
            </h3>
            <p className="text-zinc-300 leading-relaxed">
              Obtained strictly by purchasing recharge packs (rate: ₹1 = 10,000 SC).
              Used to activate SVIP noble statuses and send luxury Super gifts.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5 space-y-2">
            <h3 className="font-bold text-blue-300 flex items-center gap-1.5 text-sm">
              <Diamond className="w-4 h-4" /> 3. Diamonds (Host Prestige)
            </h3>
            <p className="text-zinc-300 leading-relaxed">
              Received automatically by voice room hosts when listeners send standard Gold gifts.
              Non-cashable. Can be converted into Gold Coins inside the app at the rate of 0.4 Gold Coins per Diamond (e.g., 1,000 Diamonds convert to 400 Gold Coins; minimum conversion 100 Diamonds).
            </p>
          </div>

          <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5 space-y-2">
            <h3 className="font-bold text-emerald-300 flex items-center gap-1.5 text-sm">
              <Diamond className="w-4 h-4" /> 4. Super Diamonds (Withdrawable)
            </h3>
            <p className="text-zinc-300 leading-relaxed">
              Received by hosts exclusively from premium Super gifts.
              Subject to mandatory PAN verification, minimum cash-out threshold of 10,000,000 SD (₹450), and applicable statutory TDS deductions.
            </p>
          </div>
        </div>
      </section>

      {/* Fair Gaming Separation */}
      <section className="p-5 rounded-2xl bg-white/[0.02] border border-white/10 space-y-2 text-xs">
        <h3 className="font-semibold text-white text-sm">
          Strict Separation Between Mini-Games and Real-Money Payouts
        </h3>
        <p className="text-zinc-400 leading-relaxed">
          Mini-games on Gappey run strictly using Gold Coins for social entertainment.
          There is no mechanism, conversion path, or feature enabling mini-game outcomes to convert to Super Diamonds or Indian Rupees (₹).
          Gappey adheres strictly to Indian gaming and consumer standards.
        </p>
      </section>
    </LegalPageLayout>
  );
}
