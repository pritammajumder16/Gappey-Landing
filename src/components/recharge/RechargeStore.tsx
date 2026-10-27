"use client";

import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import {
  Coins,
  Sparkles,
  ShieldCheck,
  Zap,
  Gift,
  Crown,
  AlertCircle,
  Loader2,
  LogIn,
  LogOut,
  ChevronDown,
  HelpCircle,
  CreditCard,
  QrCode,
  Flame,
  Star,
} from "lucide-react";
import { useAuth } from "@/context/AuthContext";
import {
  CashfreeTier,
  CashfreeVerifyResponse,
  fetchCashfreeTiers,
  createCashfreeOrder,
  verifyCashfreePayment,
} from "@/lib/api";
import { initiateCashfreeCheckout } from "@/lib/cashfree";
import PaymentCelebrationModal from "./PaymentCelebrationModal";

// Fallback tier catalog matching CASHFREE_RECHARGE_TIERS in backend & mobile version
const DEFAULT_TIERS: CashfreeTier[] = [
  {
    id: "tier_10",
    displayName: "Starter",
    inrPrice: 10,
    baseCoins: 100000,
    tierBonusCoins: 0,
    bonusPercent: 0,
    totalCoins: 100000,
    superCoins: 1000,
    firstRechargeBonusPercent: 25,
    firstRechargeBonusCoins: 25000,
    firstRechargeTotalCoins: 125000,
  },
  {
    id: "tier_25",
    displayName: "Mini",
    inrPrice: 25,
    baseCoins: 250000,
    tierBonusCoins: 0,
    bonusPercent: 0,
    totalCoins: 250000,
    superCoins: 2500,
    firstRechargeBonusPercent: 25,
    firstRechargeBonusCoins: 62500,
    firstRechargeTotalCoins: 312500,
  },
  {
    id: "tier_50",
    displayName: "Lite",
    inrPrice: 50,
    baseCoins: 500000,
    tierBonusCoins: 0,
    bonusPercent: 0,
    totalCoins: 500000,
    superCoins: 5000,
    firstRechargeBonusPercent: 25,
    firstRechargeBonusCoins: 125000,
    firstRechargeTotalCoins: 625000,
  },
  {
    id: "tier_100",
    displayName: "Popular",
    inrPrice: 100,
    baseCoins: 1000000,
    tierBonusCoins: 5000,
    bonusPercent: 0.5,
    totalCoins: 1005000,
    superCoins: 10000,
    isPopular: true,
    firstRechargeBonusPercent: 25,
    firstRechargeBonusCoins: 250000,
    firstRechargeTotalCoins: 1255000,
  },
  {
    id: "tier_200",
    displayName: "Plus",
    inrPrice: 200,
    baseCoins: 2000000,
    tierBonusCoins: 20000,
    bonusPercent: 1.0,
    totalCoins: 2020000,
    superCoins: 20000,
    firstRechargeBonusPercent: 25,
    firstRechargeBonusCoins: 500000,
    firstRechargeTotalCoins: 2520000,
  },
  {
    id: "tier_500",
    displayName: "Premium",
    inrPrice: 500,
    baseCoins: 5000000,
    tierBonusCoins: 62500,
    bonusPercent: 1.25,
    totalCoins: 5062500,
    superCoins: 50000,
    firstRechargeBonusPercent: 25,
    firstRechargeBonusCoins: 1250000,
    firstRechargeTotalCoins: 6312500,
  },
  {
    id: "tier_999",
    displayName: "Luxury",
    inrPrice: 999,
    baseCoins: 9990000,
    tierBonusCoins: 124875,
    bonusPercent: 1.25,
    totalCoins: 10114875,
    superCoins: 99900,
    isBestValue: true,
    firstRechargeBonusPercent: 25,
    firstRechargeBonusCoins: 2497500,
    firstRechargeTotalCoins: 12612375,
  },
  {
    id: "tier_1999",
    displayName: "Royal",
    inrPrice: 1999,
    baseCoins: 19990000,
    tierBonusCoins: 299850,
    bonusPercent: 1.5,
    totalCoins: 20289850,
    superCoins: 199900,
    firstRechargeBonusPercent: 25,
    firstRechargeBonusCoins: 4997500,
    firstRechargeTotalCoins: 25287350,
  },
];

export default function RechargeStore() {
  const searchParams = useSearchParams();
  const { session, user, wallet, openAuthModal, logout, refreshWallet } = useAuth();

  const [tiers, setTiers] = useState<CashfreeTier[]>(DEFAULT_TIERS);
  const [selectedTierId, setSelectedTierId] = useState<string>("tier_100");
  const [loading, setLoading] = useState(false);
  const [actionError, setActionError] = useState<string | null>(null);
  const [celebrationReceipt, setCelebrationReceipt] = useState<CashfreeVerifyResponse | null>(null);
  const [faqOpenIndex, setFaqOpenIndex] = useState<number | null>(null);

  // Load tiers from server and format consistently with mobile app
  useEffect(() => {
    fetchCashfreeTiers()
      .then((data) => {
        if (data && data.length > 0) {
          const formatted: CashfreeTier[] = data.map((st) => ({
            id: st.id,
            displayName: st.displayName || "Pack",
            inrPrice: st.inrPrice,
            baseCoins: st.baseCoins,
            tierBonusCoins: st.tierBonusCoins || 0,
            bonusPercent: st.bonusPercent || 0,
            totalCoins: st.totalCoins ?? (st.baseCoins + (st.tierBonusCoins || 0)),
            superCoins: st.superCoins ?? Math.round(st.inrPrice * 100),
            isPopular: st.isPopular ?? st.id === "tier_100",
            isBestValue: st.isBestValue ?? st.id === "tier_999",
            firstRechargeBonusPercent: st.firstRechargeBonusPercent ?? 25,
            firstRechargeBonusCoins: st.firstRechargeBonusCoins ?? Math.round(st.baseCoins * 0.25),
            firstRechargeTotalCoins:
              st.firstRechargeTotalCoins ??
              ((st.totalCoins ?? st.baseCoins) + Math.round(st.baseCoins * 0.25)),
          })).sort((a: CashfreeTier, b: CashfreeTier) => a.inrPrice - b.inrPrice);
          setTiers(formatted);
        }
      })
      .catch((err) => console.warn("Using fallback tiers:", err));
  }, []);

  const handleVerifyOrder = useCallback(async (orderId: string, token: string) => {
    try {
      setLoading(true);
      setActionError(null);
      const res = await verifyCashfreePayment(orderId, token);
      if (res.success) {
        setCelebrationReceipt(res);
        await refreshWallet();
      }
    } catch (err: unknown) {
      console.warn("Verify order error:", err);
      setActionError(err instanceof Error ? err.message : "Could not verify order status. If money was debited, your coins will be automatically credited.");
    } finally {
      setLoading(false);
    }
  }, [refreshWallet]);

  // Check URL return query for completed payment redirect
  useEffect(() => {
    const orderIdParam = searchParams.get("order_id");
    if (!orderIdParam || !session?.accessToken) return;

    let cancelled = false;
    verifyCashfreePayment(orderIdParam, session.accessToken)
      .then((res) => {
        if (!cancelled && res.success) {
          setCelebrationReceipt(res);
          void refreshWallet();
        }
      })
      .catch((err) => {
        if (!cancelled) {
          setActionError(err instanceof Error ? err.message : "Could not verify order status.");
        }
      });

    return () => {
      cancelled = true;
    };
  }, [searchParams, session, refreshWallet]);

  const selectedTier = tiers.find((t) => t.id === selectedTierId) || tiers[3] || tiers[0];
  const isFirstRechargeEligible = !wallet?.hasRecharged;

  // Handle Pay via Cashfree
  const handleProceedToPayment = async () => {
    if (!session?.accessToken) {
      openAuthModal("login");
      return;
    }

    setActionError(null);
    setLoading(true);

    try {
      // 1. Create order on server
      const orderRes = await createCashfreeOrder(selectedTier.id, session.accessToken);

      // 2. Open Cashfree modal
      const checkoutRes = await initiateCashfreeCheckout(orderRes.paymentSessionId);

      if (checkoutRes.success) {
        // 3. User finished payment, verify and credit coins
        await handleVerifyOrder(orderRes.orderId, session.accessToken);
      } else if (checkoutRes.error) {
        // Handled or cancelled
        if (!checkoutRes.error.toLowerCase().includes("cancel") && !checkoutRes.error.toLowerCase().includes("closed")) {
          setActionError(checkoutRes.error);
        }
      }
    } catch (err: unknown) {
      setActionError(err instanceof Error ? err.message : "Failed to initiate payment. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const getTierDisplayCoins = (tier: CashfreeTier) => {
    if (isFirstRechargeEligible) {
      return tier.firstRechargeTotalCoins || tier.totalCoins + Math.round(tier.baseCoins * 0.25);
    }
    return tier.totalCoins;
  };

  return (
    <div className="w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
      {/* Celebration Modal */}
      {celebrationReceipt && (
        <PaymentCelebrationModal
          receipt={celebrationReceipt}
          onClose={() => setCelebrationReceipt(null)}
        />
      )}

      {/* USER ACCOUNT BAR */}
      <div className="mb-8 p-4 sm:p-6 rounded-3xl bg-gradient-to-r from-[#171128] via-[#100b1d] to-[#0c0817] border border-purple-500/20 shadow-[0_10px_40px_rgba(0,0,0,0.6)] backdrop-blur-xl">
        {session && user ? (
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="flex items-center gap-3.5">
              <div className="relative w-12 h-12 rounded-2xl p-0.5 bg-gradient-to-tr from-purple-500 to-amber-400">
                <div className="w-full h-full rounded-[14px] overflow-hidden bg-black flex items-center justify-center font-bold text-lg text-amber-300">
                  {user.avatarUrl ? (
                    <Image
                      src={user.avatarUrl}
                      alt={user.displayName || user.username}
                      width={48}
                      height={48}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    (user.displayName || user.username || "U").charAt(0).toUpperCase()
                  )}
                </div>
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h2 className="text-base sm:text-lg font-bold text-white">
                    {user.displayName || user.username}
                  </h2>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-purple-500/20 border border-purple-400/30 text-purple-300">
                    ID: {user.displayId || user.userId.slice(-6).toUpperCase()}
                  </span>
                </div>
                <p className="text-xs text-zinc-400">@{user.username}</p>
              </div>
            </div>

            {/* Wallet balances */}
            <div className="flex items-center gap-3 sm:gap-4">
              <div className="px-3.5 py-1.5 rounded-xl bg-amber-500/10 border border-amber-400/30 flex items-center gap-2">
                <Coins className="w-4 h-4 text-amber-400" />
                <div>
                  <div className="text-[10px] uppercase font-bold text-amber-400/80 leading-none">
                    Gold Coins
                  </div>
                  <div className="text-sm font-black text-amber-300">
                    {(wallet?.goldCoins ?? 0).toLocaleString("en-IN")}
                  </div>
                </div>
              </div>

              <div className="px-3.5 py-1.5 rounded-xl bg-pink-500/10 border border-pink-400/30 flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-pink-400" />
                <div>
                  <div className="text-[10px] uppercase font-bold text-pink-400/80 leading-none">
                    Super Coins
                  </div>
                  <div className="text-sm font-black text-pink-300">
                    {(wallet?.superCoins ?? 0).toLocaleString("en-IN")}
                  </div>
                </div>
              </div>

              <button
                onClick={logout}
                title="Sign Out"
                className="p-2.5 rounded-xl text-zinc-400 hover:text-white hover:bg-white/10 transition-colors"
                aria-label="Logout"
              >
                <LogOut className="w-4 h-4" />
              </button>
            </div>
          </div>
        ) : (
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl bg-purple-600/20 border border-purple-500/40 flex items-center justify-center text-purple-300">
                <LogIn className="w-5 h-5" />
              </div>
              <div>
                <h2 className="text-sm sm:text-base font-bold text-white">
                  Sign in to Gappey to Top Up Coins
                </h2>
                <p className="text-xs text-zinc-400">
                  Connect your account to deposit coins directly into your wallet with instant delivery.
                </p>
              </div>
            </div>

            <button
              onClick={() => openAuthModal("login")}
              className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold text-xs sm:text-sm shadow-lg shadow-purple-600/30 hover:scale-[1.02] active:scale-[0.98] transition-all"
            >
              <LogIn className="w-4 h-4" />
              <span>Sign In / Register</span>
            </button>
          </div>
        )}
      </div>

      {/* FIRST RECHARGE BONUS HERO BANNER */}
      {isFirstRechargeEligible && (
        <div className="relative mb-8 p-5 sm:p-6 rounded-3xl bg-gradient-to-r from-amber-500/15 via-pink-500/15 to-purple-500/15 border border-amber-400/30 shadow-[0_0_50px_rgba(255,215,0,0.15)] overflow-hidden">
          <div className="absolute -top-12 -right-12 w-48 h-48 bg-amber-400/10 rounded-full blur-3xl pointer-events-none" />
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 relative z-10">
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-400/20 border border-amber-400/40 text-amber-300 text-xs font-bold uppercase tracking-wider mb-2">
                <Gift className="w-3.5 h-3.5" />
                <span>First Recharge Offer Active</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-black text-white">
                Get <span className="text-amber-400">+25% Extra Coins</span> &amp; Exclusive Perks!
              </h3>
              <p className="text-xs sm:text-sm text-zinc-300 mt-1 max-w-xl">
                Recharge any pack today to claim an additional 25% bonus Gold Coins, plus permanent avatar frames and luxury chat cosmetics.
              </p>
            </div>

            {/* Perks list */}
            <div className="grid grid-cols-3 gap-2 sm:gap-3 text-center">
              <div className="p-2.5 rounded-2xl bg-black/40 border border-white/10">
                <Crown className="w-5 h-5 text-amber-400 mx-auto mb-1" />
                <div className="text-[11px] font-bold text-white">Permanent</div>
                <div className="text-[9px] text-zinc-400">Avatar Frame</div>
              </div>
              <div className="p-2.5 rounded-2xl bg-black/40 border border-white/10">
                <Zap className="w-5 h-5 text-pink-400 mx-auto mb-1" />
                <div className="text-[11px] font-bold text-white">7-Day</div>
                <div className="text-[9px] text-zinc-400">Exclusive Ride</div>
              </div>
              <div className="p-2.5 rounded-2xl bg-black/40 border border-white/10">
                <Sparkles className="w-5 h-5 text-purple-400 mx-auto mb-1" />
                <div className="text-[11px] font-bold text-white">3-Day</div>
                <div className="text-[9px] text-zinc-400">Chat Bubble</div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* COIN TIERS GRID */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h3 className="text-lg sm:text-xl font-black text-white flex items-center gap-2">
              <Coins className="w-5 h-5 text-amber-400" />
              <span>Select Coin Package</span>
            </h3>
            <p className="text-xs text-zinc-400">
              Official real-time rates with guaranteed zero-markup pricing.
            </p>
          </div>
          {isFirstRechargeEligible && (
            <span className="text-xs font-bold text-amber-400 bg-amber-400/10 px-3 py-1 rounded-full border border-amber-400/30">
              +25% First Bonus Applied
            </span>
          )}
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 sm:gap-4">
          {tiers.map((tier) => {
            const isSelected = tier.id === selectedTierId;
            const displayCoins = getTierDisplayCoins(tier);
            const isPopular = tier.isPopular || tier.id === "tier_100";
            const isBestValue = tier.isBestValue || tier.id === "tier_999";
            const superCoins = tier.superCoins || Math.round(tier.inrPrice * 100);
            const firstRechargeBonusCoins = tier.firstRechargeBonusCoins ?? Math.round(tier.baseCoins * 0.25);

            return (
              <div
                key={tier.id}
                onClick={() => setSelectedTierId(tier.id)}
                className={`group relative rounded-2xl p-4 sm:p-5 cursor-pointer transition-all duration-300 flex flex-col justify-between ${
                  isSelected
                    ? "bg-gradient-to-b from-[#251a4a] to-[#140e2b] border-2 border-amber-400 shadow-[0_0_30px_rgba(255,215,0,0.25)] scale-[1.02]"
                    : "bg-[#100c1e]/80 border border-purple-900/30 hover:border-purple-500/40 hover:bg-[#16102b]"
                }`}
              >
                {/* Special badges matching mobile app */}
                {isPopular ? (
                  <span className="absolute -top-2.5 left-1/2 -translate-x-1/2 px-2.5 py-0.5 rounded-full bg-gradient-to-r from-pink-600 to-purple-600 text-[10px] font-black uppercase tracking-wider text-white shadow-md flex items-center gap-1 z-10 whitespace-nowrap">
                    <Flame className="w-3 h-3 text-white fill-white" />
                    <span>Popular</span>
                  </span>
                ) : isBestValue ? (
                  <span className="absolute -top-2.5 left-1/2 -translate-x-1/2 px-2.5 py-0.5 rounded-full bg-gradient-to-r from-amber-500 to-yellow-400 text-[10px] font-black uppercase tracking-wider text-zinc-950 shadow-md flex items-center gap-1 z-10 whitespace-nowrap">
                    <Star className="w-3 h-3 text-zinc-950 fill-zinc-950" />
                    <span>Best Value</span>
                  </span>
                ) : tier.bonusPercent > 0 && !isFirstRechargeEligible ? (
                  <span className="absolute -top-2.5 left-1/2 -translate-x-1/2 px-2.5 py-0.5 rounded-full bg-amber-400/20 border border-amber-400 text-[10px] font-black uppercase tracking-wider text-amber-300 shadow-md z-10 whitespace-nowrap">
                    +{tier.bonusPercent}% Bonus
                  </span>
                ) : null}

                {/* Card Content */}
                <div className="flex flex-col items-center text-center">
                  {/* Package Name matching mobile version */}
                  <span className="text-xs sm:text-sm font-black text-white/90 tracking-wide uppercase mt-1 mb-2">
                    {tier.displayName}
                  </span>

                  {/* Coin icon & Gold Coins amount */}
                  <div className="w-11 h-11 rounded-2xl bg-amber-400/10 border border-amber-400/20 flex items-center justify-center mb-2 group-hover:scale-110 transition-transform">
                    <Coins className="w-5 h-5 text-amber-400" />
                  </div>

                  <div className="text-base sm:text-lg font-black text-white tracking-tight">
                    {displayCoins.toLocaleString("en-IN")}
                  </div>
                  <div className="text-[10px] uppercase font-bold text-amber-300/80 mb-2">
                    Gold Coins
                  </div>

                  {/* Super Coins Row matching mobile version */}
                  <div className="inline-flex items-center justify-center gap-1.5 px-2.5 py-1 rounded-lg bg-amber-400/10 border border-amber-400/20 text-[#fbbf24] text-xs font-black mb-2 shadow-sm">
                    <Sparkles className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                    <span>+{superCoins.toLocaleString("en-IN")} SC</span>
                  </div>

                  {/* Bonus breakdown subtitle */}
                  <div className="text-[10px] text-zinc-400 mb-3 min-h-[16px]">
                    {isFirstRechargeEligible ? (
                      <span className="text-emerald-400 font-semibold">
                        +25% 1st Bonus (+{firstRechargeBonusCoins.toLocaleString("en-IN")}c)
                      </span>
                    ) : tier.tierBonusCoins > 0 ? (
                      <span className="text-purple-300 font-semibold">
                        +{tier.bonusPercent}% Extra (+{tier.tierBonusCoins.toLocaleString("en-IN")}c)
                      </span>
                    ) : (
                      <span className="text-zinc-500">Standard Rate</span>
                    )}
                  </div>
                </div>

                {/* INR Price tag */}
                <div
                  className={`w-full py-1.5 rounded-xl font-black text-sm tracking-tight transition-colors text-center ${
                    isSelected
                      ? "bg-gradient-to-r from-amber-400 to-yellow-400 text-zinc-950 shadow-md"
                      : "bg-white/5 text-zinc-200 group-hover:bg-white/10 group-hover:text-white"
                  }`}
                >
                  ₹{tier.inrPrice}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* ERROR NOTICE */}
      {actionError && (
        <div className="mb-6 p-4 rounded-2xl bg-red-500/10 border border-red-500/30 flex items-start gap-3 text-sm text-red-300">
          <AlertCircle className="w-5 h-5 shrink-0 text-red-400 mt-0.5" />
          <span>{actionError}</span>
        </div>
      )}

      {/* CHECKOUT ACTION BAR */}
      <div className="p-6 rounded-3xl bg-gradient-to-r from-[#17122b] via-[#110d21] to-[#0d0918] border border-purple-500/20 shadow-2xl flex flex-col sm:flex-row sm:items-center justify-between gap-6 mb-12">
        <div>
          <div className="text-xs uppercase font-bold text-zinc-400">Total Recharge Amount</div>
          <div className="flex items-baseline gap-2 mt-0.5 flex-wrap">
            <span className="text-3xl font-black text-white">₹{selectedTier.inrPrice}</span>
            <span className="text-xs text-zinc-400 font-mono">INR</span>
            <span className="text-xs text-amber-400 font-semibold ml-1">
              ({selectedTier.displayName} Pack: {getTierDisplayCoins(selectedTier).toLocaleString("en-IN")} Gold Coins + {(selectedTier.superCoins || Math.round(selectedTier.inrPrice * 100)).toLocaleString("en-IN")} Super Coins)
            </span>
          </div>
          <div className="flex items-center gap-3 text-xs text-zinc-400 mt-2">
            <span className="flex items-center gap-1 text-emerald-400">
              <ShieldCheck className="w-3.5 h-3.5" /> RBI Compliant
            </span>
            <span>•</span>
            <span className="flex items-center gap-1 text-purple-300">
              <Zap className="w-3.5 h-3.5" /> Instant Delivery
            </span>
          </div>
        </div>

        <button
          onClick={handleProceedToPayment}
          disabled={loading}
          className="px-8 py-3.5 rounded-2xl bg-gradient-to-r from-amber-400 via-pink-500 to-purple-600 text-zinc-950 font-black text-sm sm:text-base shadow-[0_0_30px_rgba(255,215,0,0.3)] hover:scale-[1.02] active:scale-[0.98] disabled:opacity-50 disabled:pointer-events-none transition-all flex items-center justify-center gap-2"
        >
          {loading ? (
            <Loader2 className="w-5 h-5 animate-spin" />
          ) : session ? (
            <>
              <Coins className="w-5 h-5 text-zinc-950" />
              <span>Pay ₹{selectedTier.inrPrice} via Cashfree</span>
            </>
          ) : (
            <>
              <LogIn className="w-5 h-5 text-zinc-950" />
              <span>Sign In to Recharge ₹{selectedTier.inrPrice}</span>
            </>
          )}
        </button>
      </div>

      {/* SUPPORTED PAYMENT METHODS SHOWCASE */}
      <div className="p-6 rounded-3xl bg-zinc-900/40 border border-white/5 text-center mb-12">
        <h4 className="text-xs uppercase tracking-widest font-bold text-zinc-400 mb-4">
          100% Secure Payment Powered by Cashfree
        </h4>
        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-6 text-xs text-zinc-300">
          <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/5 border border-white/5">
            <QrCode className="w-4 h-4 text-emerald-400" />
            <span>UPI (GPay / PhonePe / Paytm / BHIM)</span>
          </div>
          <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/5 border border-white/5">
            <CreditCard className="w-4 h-4 text-purple-400" />
            <span>Visa, Mastercard &amp; RuPay</span>
          </div>
          <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/5 border border-white/5">
            <ShieldCheck className="w-4 h-4 text-amber-400" />
            <span>NetBanking (50+ Banks)</span>
          </div>
        </div>
      </div>

      {/* RECHARGE FAQS ACCORDION */}
      <div className="mt-8">
        <h3 className="text-xl font-black text-white text-center mb-6 flex items-center justify-center gap-2">
          <HelpCircle className="w-5 h-5 text-purple-400" />
          <span>Frequently Asked Questions</span>
        </h3>

        <div className="space-y-3">
          {[
            {
              q: "How fast are coins added to my Gappey account?",
              a: "Coins are delivered instantly! The moment your UPI, Card, or NetBanking transaction succeeds on Cashfree, our server atomically credits your balance. You can immediately see the updated balance in your account.",
            },
            {
              q: "What payment methods are supported on Cashfree?",
              a: "We support all Indian payment methods including Google Pay, PhonePe, Paytm, BHIM UPI, QR code scanning, Debit/Credit Cards (Visa, Mastercard, RuPay), and NetBanking from over 50 Indian banks.",
            },
            {
              q: "How does the First Recharge Bonus work?",
              a: "If this is your first ever coin recharge on Gappey, you automatically receive +25% extra Gold Coins, a permanent First-Recharge Avatar Frame, an exclusive 7-day entry ride, and a 3-day custom chat bubble.",
            },
            {
              q: "Can I use these coins in the Gappey Android app?",
              a: "Yes! Your account and wallet balance are synchronized in real-time across both the web portal and the Gappey Android app. Coins purchased here can be used right away for broadcast gifts, room games, and VIP cosmetics in the app.",
            },
            {
              q: "What should I do if money was deducted but coins haven't arrived?",
              a: "Our backend automatically reconciles every order directly with Cashfree's server. If a network delay occurs, simply refresh your page or contact Gappey support with your Cashfree Order ID. Your transaction is 100% safe and verified.",
            },
          ].map((faq, idx) => {
            const isOpen = faqOpenIndex === idx;
            return (
              <div
                key={idx}
                className="rounded-2xl bg-[#120d22]/70 border border-white/5 overflow-hidden transition-colors"
              >
                <button
                  type="button"
                  onClick={() => setFaqOpenIndex(isOpen ? null : idx)}
                  className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 text-sm sm:text-base font-bold text-white hover:text-purple-300"
                >
                  <span>{faq.q}</span>
                  <ChevronDown
                    className={`w-4 h-4 shrink-0 text-zinc-400 transition-transform duration-200 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {isOpen && (
                  <div className="px-4 pb-4 sm:px-5 sm:pb-5 text-xs sm:text-sm text-zinc-400 leading-relaxed border-t border-white/5 pt-3">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
