"use client";

import React, { useEffect } from "react";
import confetti from "canvas-confetti";
import { CheckCircle2, Coins, Sparkles, X, Gift } from "lucide-react";
import { CashfreeVerifyResponse } from "@/lib/api";

interface PaymentCelebrationModalProps {
  receipt: CashfreeVerifyResponse;
  onClose: () => void;
}

export default function PaymentCelebrationModal({ receipt, onClose }: PaymentCelebrationModalProps) {
  useEffect(() => {
    // Launch celebratory confetti burst
    const end = Date.now() + 2.5 * 1000;
    const colors = ["#ffd700", "#ff1493", "#8a2be2", "#00f0ff"];

    (function frame() {
      confetti({
        particleCount: 4,
        angle: 60,
        spread: 55,
        origin: { x: 0 },
        colors,
      });
      confetti({
        particleCount: 4,
        angle: 120,
        spread: 55,
        origin: { x: 1 },
        colors,
      });

      if (Date.now() < end) {
        requestAnimationFrame(frame);
      }
    })();
  }, []);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fadeIn">
      <div
        className="relative w-full max-w-md rounded-3xl bg-gradient-to-b from-[#1d1633] via-[#120d22] to-[#0a0714] border border-amber-400/40 shadow-[0_0_80px_rgba(255,215,0,0.3)] overflow-hidden text-center p-6 sm:p-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Glow Header Accent */}
        <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-amber-400 via-pink-500 to-purple-600" />

        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full text-zinc-400 hover:text-white hover:bg-white/10 transition-colors"
          aria-label="Close celebration modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Success Icon */}
        <div className="mx-auto w-16 h-16 rounded-full bg-gradient-to-tr from-amber-400 to-pink-500 p-0.5 shadow-lg shadow-amber-400/30 mb-4 flex items-center justify-center">
          <div className="w-full h-full rounded-full bg-zinc-950 flex items-center justify-center">
            <CheckCircle2 className="w-9 h-9 text-emerald-400 animate-bounce" />
          </div>
        </div>

        <h3 className="text-2xl font-black text-white tracking-tight flex items-center justify-center gap-2">
          <span>Recharge Successful!</span>
          <Sparkles className="w-5 h-5 text-amber-400" />
        </h3>

        <p className="text-xs sm:text-sm text-zinc-400 mt-1">
          Your payment of <strong className="text-white">₹{receipt.inrAmount}</strong> has been confirmed.
        </p>

        {/* Credited Amount Card */}
        <div className="my-6 p-4 rounded-2xl bg-gradient-to-r from-amber-500/10 via-purple-500/10 to-pink-500/10 border border-amber-400/30 shadow-inner">
          <div className="flex items-center justify-center gap-2 mb-1">
            <Coins className="w-6 h-6 text-amber-400 animate-pulse" />
            <span className="text-3xl font-black tracking-tight bg-gradient-to-r from-amber-300 via-yellow-200 to-amber-500 bg-clip-text text-transparent">
              +{(receipt.coinsCredited || receipt.goldCoinsCredited || 0).toLocaleString("en-IN")}
            </span>
          </div>
          <p className="text-xs uppercase tracking-wider font-bold text-amber-300">
            Gold Coins Credited Instantly
          </p>

          {/* Super Coins Credited */}
          <div className="mt-3 pt-3 border-t border-white/10 flex items-center justify-center gap-2">
            <Sparkles className="w-4 h-4 text-pink-400" />
            <span className="text-sm font-black text-white">
              +{(receipt.superCoinsCredited || Math.round(receipt.inrAmount * 100)).toLocaleString("en-IN")}
            </span>
            <span className="text-xs font-bold text-pink-300 uppercase tracking-wider">Super Coins Unlocked</span>
          </div>

          {/* First Recharge Bonus Callout */}
          {receipt.isFirstRecharge && (
            <div className="mt-3 pt-3 border-t border-white/10 flex items-center justify-center gap-2 text-xs font-semibold text-pink-300">
              <Gift className="w-4 h-4 text-pink-400" />
              <span>Includes +25% First-Recharge Bonus &amp; Exclusive Avatar Frame!</span>
            </div>
          )}
        </div>

        {/* Transaction Details */}
        <div className="text-left space-y-2 p-3.5 rounded-xl bg-black/40 border border-white/5 text-xs text-zinc-400 mb-6 font-mono">
          <div className="flex justify-between">
            <span>Order ID:</span>
            <span className="text-zinc-200 truncate max-w-[200px]">{receipt.orderId}</span>
          </div>
          <div className="flex justify-between">
            <span>Amount Paid:</span>
            <span className="text-emerald-400 font-bold">₹{receipt.inrAmount} INR</span>
          </div>
          <div className="flex justify-between">
            <span>Delivery:</span>
            <span className="text-emerald-400 font-bold">Instant to Gappey Wallet</span>
          </div>
        </div>

        {/* Done Button */}
        <button
          onClick={onClose}
          className="w-full py-3 rounded-xl bg-gradient-to-r from-amber-400 via-pink-500 to-purple-600 text-zinc-950 font-black text-sm shadow-lg shadow-amber-400/30 hover:scale-[1.01] active:scale-[0.99] transition-all"
        >
          Awesome, Let&apos;s Party!
        </button>
      </div>
    </div>
  );
}
