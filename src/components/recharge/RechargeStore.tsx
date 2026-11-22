"use client";

import React, { useState, useEffect, useCallback, useRef } from "react";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import {
  Coins,
  Sparkles,
  ShieldCheck,
  Zap,
  Gift,
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
  Clock,
  RefreshCw,
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

// Reward card metadata for first-recharge tiers with static asset images
interface FirstRewardCard {
  name: string;
  duration: string;
  type: string;
  icon: string;
  imageUrl?: string;
  isPermanent?: boolean;
}

const FIRST_TIER_STATIC_REWARDS: Record<"A" | "B" | "C", {
  netInr: number;
  storePrice: number;
  packId: string;
  valueLabel: string;
  tag?: string;
  extraMessaging: string;
  bonusGold: number;
  rewards: FirstRewardCard[];
}> = {
  A: {
    netInr: 50,
    storePrice: 59,
    packId: "topup_59",
    valueLabel: "₹500 value",
    extraMessaging: "+500,000 Bonus Gold, Permanent Frame, 15-day Cruiser, and 7-day VIP 1 trial.",
    bonusGold: 500000,
    rewards: [
      { name: "Starter Avatar Frame", duration: "Permanent", type: "frame", icon: "👑", isPermanent: true },
      { name: "Starter Cruiser Ride", duration: "15 days", type: "ride", icon: "🚗" },
      { name: "Starter Chat Bubble", duration: "7 days", type: "bubble", icon: "💬" },
      { name: "6-Char Custom ID", duration: "15 days", type: "id", icon: "🆔" },
      { name: "Leader VIP 1 Trial", duration: "7 days", type: "voucher", icon: "⭐" },
    ],
  },
  B: {
    netInr: 500,
    storePrice: 579,
    packId: "topup_579",
    valueLabel: "₹3,500 value",
    tag: "Popular upgrade",
    extraMessaging: "+4,000,000 Bonus Gold, 60-day Gold Patron set, and Prince VIP 3 trial.",
    bonusGold: 4000000,
    rewards: [
      { name: "Gold Patron Frame", duration: "60 days", type: "frame", icon: "👑" },
      { name: "Gold Patron Ride", duration: "60 days", type: "ride", icon: "🏎️" },
      { name: "Gold Patron Bubble", duration: "60 days", type: "bubble", icon: "💬" },
      { name: "Room Theme & Mic Wave", duration: "30 days", type: "theme", icon: "✨" },
      { name: "Prince VIP 3 Trial", duration: "15 days", type: "voucher", icon: "⭐" },
      { name: "Noble SVIP 2 Trial", duration: "15 days", type: "voucher", icon: "🌟" },
    ],
  },
  C: {
    netInr: 5000,
    storePrice: 5799,
    packId: "topup_5799",
    valueLabel: "₹35,000 value",
    tag: "Most rewards",
    extraMessaging: "+50,000,000 Bonus Gold, Permanent 4-char ID, Sovereign set, and 30-day Daily Chest!",
    bonusGold: 50000000,
    rewards: [
      { name: "Permanent 4-Char ID", duration: "Permanent", type: "id", icon: "💎", isPermanent: true },
      { name: "Sovereign Avatar Frame", duration: "Permanent", type: "frame", icon: "👑", isPermanent: true },
      { name: "Sovereign Luxury Ride", duration: "Permanent", type: "ride", icon: "🚀", isPermanent: true },
      { name: "Sovereign Chat Bubble", duration: "Permanent", type: "bubble", icon: "💬", isPermanent: true },
      { name: "President VIP 6 Trial", duration: "30 days", type: "voucher", icon: "⭐" },
      { name: "30-Day Daily Chest (15M)", duration: "30 days", type: "chest", icon: "🎁" },
    ],
  },
};

export default function RechargeStore() {
  const searchParams = useSearchParams();
  const { session, user, wallet, openAuthModal, logout, refreshWallet } = useAuth();

  const [tiers, setTiers] = useState<CashfreeTier[]>([]);
  const [tiersLoading, setTiersLoading] = useState(true);
  const [selectedTierId, setSelectedTierId] = useState<string>("topup_119");
  const [loading, setLoading] = useState(false);
  const [actionError, setActionError] = useState<string | null>(null);
  const [pendingOrderId, setPendingOrderId] = useState<string | null>(null);
  const [isPollingPending, setIsPollingPending] = useState(false);
  const [celebrationReceipt, setCelebrationReceipt] = useState<CashfreeVerifyResponse | null>(null);
  const [faqOpenIndex, setFaqOpenIndex] = useState<number | null>(null);
  const [activeFirstTier, setActiveFirstTier] = useState<"A" | "B" | "C">("A");

  const pollIntervalRef = useRef<NodeJS.Timeout | null>(null);

  // Load tiers dynamically from backend extended tiers endpoint
  useEffect(() => {
    let alive = true;

    fetchCashfreeTiers()
      .then((data) => {
        if (!alive) return;
        if (data && data.length > 0) {
          // Sort by webPrice / netInr
          const sorted = [...data].sort((a, b) => (a.webPrice || a.netInr || a.inrPrice) - (b.webPrice || b.netInr || b.inrPrice));
          setTiers(sorted);
          if (sorted.some((t) => t.id === "topup_119")) {
            setSelectedTierId("topup_119");
          } else {
            setSelectedTierId(sorted[0].id);
          }
        }
      })
      .catch((err) => {
        console.warn("Failed to fetch backend packs:", err);
        setActionError("Unable to load latest coin catalog. Please check your connection and refresh.");
      })
      .finally(() => {
        if (alive) setTiersLoading(false);
      });

    return () => {
      alive = false;
    };
  }, []);

  // Cleanup polling on unmount
  useEffect(() => {
    return () => {
      if (pollIntervalRef.current) {
        clearInterval(pollIntervalRef.current);
      }
    };
  }, []);

  // Bounded polling for pending orders (up to 8 attempts, 2.5s apart = ~20 seconds max)
  const pollOrderVerification = useCallback(
    async (orderId: string, token: string) => {
      if (pollIntervalRef.current) {
        clearInterval(pollIntervalRef.current);
      }

      setIsPollingPending(true);
      setPendingOrderId(orderId);
      let attempts = 0;
      const MAX_ATTEMPTS = 8;

      const runCheck = async () => {
        attempts += 1;
        try {
          const res = await verifyCashfreePayment(orderId, token);
          if (res.success) {
            if (pollIntervalRef.current) clearInterval(pollIntervalRef.current);
            setIsPollingPending(false);
            setPendingOrderId(null);
            setCelebrationReceipt(res);
            await refreshWallet();
            return;
          }
        } catch {
          // keep polling until max attempts
        }

        if (attempts >= MAX_ATTEMPTS) {
          if (pollIntervalRef.current) clearInterval(pollIntervalRef.current);
          setIsPollingPending(false);
          // Leave pendingOrderId set so user can manually tap "Check Status"
        }
      };

      // Run immediate first attempt
      await runCheck();

      pollIntervalRef.current = setInterval(() => {
        void runCheck();
      }, 2500);
    },
    [refreshWallet]
  );

  // Single verify helper
  const handleVerifyOrder = useCallback(
    async (orderId: string, token: string) => {
      try {
        setLoading(true);
        setActionError(null);
        const res = await verifyCashfreePayment(orderId, token);
        if (res.success) {
          setCelebrationReceipt(res);
          await refreshWallet();
        } else {
          // If not confirmed right away, kick off bounded polling
          await pollOrderVerification(orderId, token);
        }
      } catch (err: unknown) {
        console.warn("Verify order error:", err);
        await pollOrderVerification(orderId, token);
      } finally {
        setLoading(false);
      }
    },
    [refreshWallet, pollOrderVerification]
  );

  // Check URL return query for completed payment redirect
  useEffect(() => {
    const orderIdParam = searchParams.get("order_id");
    if (!orderIdParam || !session?.accessToken) return;

    const timer = setTimeout(() => {
      void handleVerifyOrder(orderIdParam, session.accessToken);
    }, 0);
    return () => clearTimeout(timer);
  }, [searchParams, session, handleVerifyOrder]);

  const selectedTier = tiers.find((t) => t.id === selectedTierId) || tiers[0];
  const selectedWebPrice = selectedTier?.webPrice ?? selectedTier?.netInr ?? selectedTier?.inrPrice ?? 10;
  const selectedStorePrice = selectedTier?.storePrice ?? Math.round(selectedWebPrice * 1.15);

  // First recharge status: show section if any tier is unclaimed, or when not logged in
  const isTierClaimed = useCallback((tierKey: "A" | "B" | "C") => {
    if (!wallet?.firstRechargeClaimed) return false;
    if (Array.isArray(wallet.firstRechargeClaimed)) {
      return wallet.firstRechargeClaimed.includes(tierKey);
    }
    return !!wallet.firstRechargeClaimed[tierKey];
  }, [wallet]);

  const allFirstClaimed = isTierClaimed("A") && isTierClaimed("B") && isTierClaimed("C");
  const showFirstRechargeBanner = !allFirstClaimed;

  // Handle Pay via Cashfree
  const handleProceedToPayment = async () => {
    if (!session?.accessToken) {
      openAuthModal("login");
      return;
    }

    if (!selectedTier) {
      setActionError("Please select a top-up pack first.");
      return;
    }

    setActionError(null);
    setLoading(true);

    try {
      // 1. Create order on server with source: "web"
      const orderRes = await createCashfreeOrder(selectedTier.id, session.accessToken);

      // 2. Open Cashfree modal
      const checkoutRes = await initiateCashfreeCheckout(orderRes.paymentSessionId);

      if (checkoutRes.success) {
        // 3. User finished payment modal, verify and credit
        await handleVerifyOrder(orderRes.orderId, session.accessToken);
      } else if (checkoutRes.error) {
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

  const currentFirstTierConfig = FIRST_TIER_STATIC_REWARDS[activeFirstTier];

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
                  Sign in to Top Up Coins
                </h2>
                <p className="text-xs text-zinc-400">
                  Connect your account to deposit coins directly into your wallet with guaranteed zero store markup.
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

      {/* FIRST RECHARGE BONUS CARDS (Shown while unclaimed) */}
      {showFirstRechargeBanner && (
        <div className="relative mb-10 p-5 sm:p-7 rounded-3xl bg-gradient-to-r from-[#1b1435] via-[#150e2b] to-[#0e0a1f] border border-amber-400/30 shadow-[0_0_50px_rgba(255,215,0,0.12)] overflow-hidden">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-5">
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-400/20 border border-amber-400/40 text-amber-300 text-xs font-bold uppercase tracking-wider mb-2">
                <Gift className="w-3.5 h-3.5" />
                <span>First Recharge Rewards Available</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-black text-white">
                First Recharge Packages
              </h3>
              <p className="text-xs sm:text-sm text-zinc-300 mt-0.5">
                {currentFirstTierConfig.extraMessaging}
              </p>
            </div>

            {/* Amount-only Tabs (₹50, ₹500, ₹5,000) */}
            <div className="flex items-center gap-2 p-1.5 bg-black/40 rounded-2xl border border-white/10 self-start sm:self-auto">
              {(["A", "B", "C"] as const).map((tierKey) => {
                const conf = FIRST_TIER_STATIC_REWARDS[tierKey];
                const isSelected = activeFirstTier === tierKey;
                const isClaimed = isTierClaimed(tierKey);

                return (
                  <button
                    key={tierKey}
                    type="button"
                    onClick={() => {
                      setActiveFirstTier(tierKey);
                      setSelectedTierId(conf.packId);
                    }}
                    className={`px-3.5 py-1.5 rounded-xl text-xs sm:text-sm font-black transition-all flex items-center gap-1.5 ${
                      isSelected
                        ? "bg-gradient-to-r from-amber-400 to-yellow-400 text-zinc-950 shadow-md"
                        : "text-zinc-400 hover:text-white hover:bg-white/5"
                    }`}
                  >
                    <span>₹{conf.netInr.toLocaleString("en-IN")}</span>
                    {isClaimed ? (
                      <span className="text-[10px] px-1 py-0.2 rounded bg-zinc-800 text-zinc-400 font-normal">
                        Claimed
                      </span>
                    ) : (
                      <span className={`text-[10px] px-1.5 py-0.2 rounded font-bold ${
                        isSelected ? "bg-black/20 text-zinc-950" : "bg-amber-400/20 text-amber-300"
                      }`}>
                        {conf.valueLabel}
                      </span>
                    )}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Reward Items Cards for Selected Tab */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
            {currentFirstTierConfig.rewards.map((reward, idx) => (
              <div
                key={idx}
                className="p-3 rounded-2xl bg-black/30 border border-white/10 flex flex-col items-center text-center justify-between"
              >
                <div className="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-400/20 flex items-center justify-center text-lg mb-2">
                  {reward.icon}
                </div>
                <div>
                  <div className="text-xs font-bold text-white leading-tight">
                    {reward.name}
                  </div>
                  <div className="text-[10px] text-amber-300 font-semibold mt-1">
                    {reward.duration}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-4 pt-3 border-t border-white/10 flex flex-wrap items-center justify-between gap-3 text-xs text-zinc-400">
            <span>
              Claim by purchasing the <strong className="text-white">₹{currentFirstTierConfig.netInr} Pack</strong> below (app store price ₹{currentFirstTierConfig.storePrice}).
            </span>
            <button
              type="button"
              onClick={() => setSelectedTierId(currentFirstTierConfig.packId)}
              className="text-amber-400 hover:text-amber-300 font-semibold underline underline-offset-4"
            >
              Select this pack
            </button>
          </div>
        </div>
      )}

      {/* COIN TIERS CATALOG */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h3 className="text-lg sm:text-xl font-black text-white flex items-center gap-2">
              <Coins className="w-5 h-5 text-amber-400" />
              <span>Select Coin Package</span>
            </h3>
            <p className="text-xs text-zinc-400">
              Web price charges direct net INR (₹10 gives 200,000 Gold + 100,000 Super Coins).
            </p>
          </div>
          <span className="text-xs font-bold text-emerald-400 bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-400/30">
            Net INR Pricing
          </span>
        </div>

        {tiersLoading ? (
          <div className="py-16 flex flex-col items-center justify-center gap-3">
            <Loader2 className="w-8 h-8 text-amber-400 animate-spin" />
            <p className="text-xs text-zinc-400">Loading live top-up catalog from server...</p>
          </div>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3 sm:gap-4">
            {tiers.map((tier) => {
              const isSelected = tier.id === selectedTierId;
              const webPrice = tier.webPrice || tier.netInr || tier.inrPrice;
              const storePrice = tier.storePrice || Math.round(webPrice * 1.15);
              const totalGold = tier.totalGold || tier.totalCoins || tier.baseGold || tier.baseCoins;
              const superCoins = tier.superCoins || (tier.netInr ? tier.netInr * 10000 : webPrice * 10000);
              const isPopular = tier.isPopular || tier.id === "topup_119";
              const isBestValue = tier.isBestValue || tier.id === "topup_1199";

              return (
                <div
                  key={tier.id}
                  onClick={() => setSelectedTierId(tier.id)}
                  className={`group relative rounded-2xl p-4 cursor-pointer transition-all duration-200 flex flex-col justify-between ${
                    isSelected
                      ? "bg-gradient-to-b from-[#251a4a] to-[#140e2b] border-2 border-amber-400 shadow-[0_0_30px_rgba(255,215,0,0.25)] scale-[1.02]"
                      : "bg-[#100c1e]/80 border border-purple-900/30 hover:border-purple-500/40 hover:bg-[#16102b]"
                  }`}
                >
                  {/* Badges */}
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
                  ) : tier.firstRechargeTier && !isTierClaimed(tier.firstRechargeTier) ? (
                    <span className="absolute -top-2.5 left-1/2 -translate-x-1/2 px-2.5 py-0.5 rounded-full bg-amber-400/20 border border-amber-400 text-[10px] font-black uppercase tracking-wider text-amber-300 shadow-md z-10 whitespace-nowrap">
                      Tier {tier.firstRechargeTier} Pack
                    </span>
                  ) : tier.bonusPercent && tier.bonusPercent > 0 ? (
                    <span className="absolute -top-2.5 left-1/2 -translate-x-1/2 px-2.5 py-0.5 rounded-full bg-purple-500/20 border border-purple-400 text-[10px] font-black uppercase tracking-wider text-purple-300 shadow-md z-10 whitespace-nowrap">
                      +{tier.bonusPercent}% Gold
                    </span>
                  ) : null}

                  {/* Card Content */}
                  <div className="flex flex-col items-center text-center">
                    <span className="text-xs font-black text-white/90 tracking-wide uppercase mt-1 mb-2">
                      {tier.displayName || `₹${webPrice} Pack`}
                    </span>

                    <div className="w-10 h-10 rounded-2xl bg-amber-400/10 border border-amber-400/20 flex items-center justify-center mb-2">
                      <Coins className="w-5 h-5 text-amber-400" />
                    </div>

                    <div className="text-base font-black text-white tracking-tight">
                      {totalGold.toLocaleString("en-IN")}
                    </div>
                    <div className="text-[10px] uppercase font-bold text-amber-300/80 mb-2">
                      Gold Coins
                    </div>

                    {/* Super Coins Row */}
                    <div className="inline-flex items-center justify-center gap-1 px-2 py-0.5 rounded-lg bg-amber-400/10 border border-amber-400/20 text-[#fbbf24] text-[11px] font-black mb-2 shadow-sm">
                      <Sparkles className="w-3 h-3 text-amber-400 shrink-0" />
                      <span>+{superCoins.toLocaleString("en-IN")} SC</span>
                    </div>

                    {/* Price Comparison */}
                    <div className="text-[10px] text-zinc-400 mb-3 min-h-[16px] flex items-center gap-1.5 justify-center">
                      <span className="line-through text-zinc-500">₹{storePrice} app</span>
                      <span className="text-emerald-400 font-semibold">Web deal</span>
                    </div>
                  </div>

                  {/* Net INR Price tag */}
                  <div
                    className={`w-full py-1.5 rounded-xl font-black text-sm tracking-tight transition-colors text-center ${
                      isSelected
                        ? "bg-gradient-to-r from-amber-400 to-yellow-400 text-zinc-950 shadow-md"
                        : "bg-white/5 text-zinc-200 group-hover:bg-white/10 group-hover:text-white"
                    }`}
                  >
                    ₹{webPrice} Net
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>

      {/* ERROR NOTICE */}
      {actionError && (
        <div className="mb-6 p-4 rounded-2xl bg-red-500/10 border border-red-500/30 flex items-start gap-3 text-sm text-red-300">
          <AlertCircle className="w-5 h-5 shrink-0 text-red-400 mt-0.5" />
          <div className="flex-1">
            <span>{actionError}</span>
            <button
              onClick={() => setActionError(null)}
              className="block text-xs text-red-400 hover:text-white mt-1 underline"
            >
              Dismiss
            </button>
          </div>
        </div>
      )}

      {/* PENDING ORDER BANNER (Bounded Polling Result) */}
      {pendingOrderId && (
        <div className="mb-6 p-4 sm:p-5 rounded-2xl bg-amber-500/10 border border-amber-500/30 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-sm text-amber-200">
          <div className="flex items-start gap-3">
            {isPollingPending ? (
              <RefreshCw className="w-5 h-5 text-amber-400 shrink-0 animate-spin mt-0.5" />
            ) : (
              <Clock className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
            )}
            <div>
              <p className="font-bold text-white">Payment Processing</p>
              <p className="text-xs text-zinc-300 mt-0.5">
                Order <code className="font-mono text-amber-300">{pendingOrderId}</code> is being confirmed by Cashfree.
                Coins will be credited automatically upon confirmation.
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2 self-end sm:self-auto">
            <button
              type="button"
              disabled={isPollingPending}
              onClick={() => {
                if (session?.accessToken && pendingOrderId) {
                  void handleVerifyOrder(pendingOrderId, session.accessToken);
                }
              }}
              className="px-3 py-1.5 rounded-xl bg-amber-400/20 hover:bg-amber-400/30 text-amber-300 text-xs font-bold transition disabled:opacity-50"
            >
              {isPollingPending ? "Checking..." : "Check Status"}
            </button>
            <button
              type="button"
              onClick={() => setPendingOrderId(null)}
              className="text-xs text-zinc-400 hover:text-white px-2 py-1"
            >
              Close
            </button>
          </div>
        </div>
      )}

      {/* CHECKOUT ACTION BAR */}
      <div className="p-6 rounded-3xl bg-gradient-to-r from-[#17122b] via-[#110d21] to-[#0d0918] border border-purple-500/20 shadow-2xl flex flex-col sm:flex-row sm:items-center justify-between gap-6 mb-12">
        <div>
          {/* USER NAME AND ID SHOWN BEFORE PAYING */}
          {session && user ? (
            <div className="mb-2 pb-2 border-b border-white/5 flex items-center gap-2 text-xs text-zinc-300">
              <span className="text-zinc-400">Recharging account:</span>
              <strong className="text-white">{user.displayName || user.username}</strong>
              <span className="font-mono text-purple-300 bg-purple-500/10 px-1.5 py-0.2 rounded border border-purple-500/20">
                ID: {user.displayId || user.userId.slice(-6).toUpperCase()}
              </span>
            </div>
          ) : (
            <div className="mb-2 pb-2 border-b border-white/5 text-xs text-amber-300 font-medium">
              ⚠️ Please sign in to link this recharge to your Gappey account ID.
            </div>
          )}

          <div className="text-xs uppercase font-bold text-zinc-400">Total Recharge Amount</div>
          <div className="flex items-baseline gap-2 mt-0.5 flex-wrap">
            <span className="text-3xl font-black text-white">₹{selectedWebPrice}</span>
            <span className="text-xs text-zinc-400 font-mono">Net INR</span>
            <span className="text-xs text-zinc-500 line-through">₹{selectedStorePrice} App Store</span>
            {selectedTier && (
              <span className="text-xs text-amber-400 font-semibold ml-1">
                ({(selectedTier.totalGold || selectedTier.totalCoins || selectedTier.baseGold || 0).toLocaleString("en-IN")} Gold Coins + {(selectedTier.superCoins || selectedWebPrice * 10000).toLocaleString("en-IN")} Super Coins)
              </span>
            )}
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
          disabled={loading || tiersLoading}
          className="px-8 py-3.5 rounded-2xl bg-gradient-to-r from-amber-400 via-pink-500 to-purple-600 text-zinc-950 font-black text-sm sm:text-base shadow-[0_0_30px_rgba(255,215,0,0.3)] hover:scale-[1.02] active:scale-[0.98] disabled:opacity-50 disabled:pointer-events-none transition-all flex items-center justify-center gap-2"
        >
          {loading ? (
            <Loader2 className="w-5 h-5 animate-spin" />
          ) : session ? (
            <>
              <Coins className="w-5 h-5 text-zinc-950" />
              <span>Pay ₹{selectedWebPrice} via Cashfree</span>
            </>
          ) : (
            <>
              <LogIn className="w-5 h-5 text-zinc-950" />
              <span>Sign In to Recharge ₹{selectedWebPrice}</span>
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
              q: "Why are web prices lower than app store prices?",
              a: "Purchasing directly on the official Gappey website is charged at the net INR price (e.g. ₹10 gives 200,000 Gold + 100,000 Super Coins), without third-party app store markup. Coins and Super Coins credited are completely identical.",
            },
            {
              q: "How fast are coins added to my Gappey account?",
              a: "Coins are delivered instantly! The moment your UPI, Card, or NetBanking transaction succeeds on Cashfree, our server atomically credits your balance. You can immediately see the updated balance in your account.",
            },
            {
              q: "What payment methods are supported on Cashfree?",
              a: "We support all Indian payment methods including Google Pay, PhonePe, Paytm, BHIM UPI, QR code scanning, Debit/Credit Cards (Visa, Mastercard, RuPay), and NetBanking from over 50 Indian banks.",
            },
            {
              q: "How do the First Recharge Tiers (A, B, C) work?",
              a: "First-recharge packages are claimed by purchasing the ₹50 (Tier A), ₹500 (Tier B), or ₹5,000 (Tier C) net packs. Claims are shared across web and app, unlocking bonus Gold Coins, exclusive avatar frames, rides, bubbles, and custom ID trials.",
            },
            {
              q: "Can I use these coins in the Gappey Android app?",
              a: "Yes! Your account and wallet balance are synchronized in real-time across both the web portal and the Gappey Android app. Coins purchased here can be used right away for room games, broadcast gifts, and cosmetics in the app.",
            },
            {
              q: "What should I do if money was deducted but coins haven't arrived?",
              a: "Our backend automatically reconciles every order directly with Cashfree's server via webhook and verification callback. If a network delay occurs, simply click 'Check Status' or contact gappeyindia@gmail.com with your Cashfree Order ID.",
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
