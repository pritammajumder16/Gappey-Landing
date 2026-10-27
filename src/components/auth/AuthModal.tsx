"use client";

import React, { useState, useEffect, useRef } from "react";
import { X, Mail, Lock, User as UserIcon, Calendar, ArrowRight, CheckCircle2, AlertCircle, Loader2 } from "lucide-react";
import { useAuth } from "@/context/AuthContext";
import { sendRegisterOtp, sendForgotOtp, resetPasswordOtp } from "@/lib/api";

declare global {
  interface Window {
    google?: {
      accounts: {
        id: {
          initialize: (config: {
            client_id: string;
            callback: (res: { credential: string }) => void;
            auto_select?: boolean;
          }) => void;
          renderButton: (
            parent: HTMLElement,
            options: {
              theme?: "outline" | "filled_blue" | "filled_black";
              size?: "large" | "medium" | "small";
              type?: "standard" | "icon";
              text?: string;
              shape?: "pill" | "rectangular";
              width?: number;
            }
          ) => void;
        };
      };
    };
  }
}

export default function AuthModal() {
  const {
    isAuthModalOpen,
    authModalDefaultTab,
    closeAuthModal,
    loginWithEmail,
    loginWithGoogle,
    registerWithEmail,
  } = useAuth();

  const [activeTab, setActiveTab] = useState<"login" | "register" | "forgot">("login");
  const [error, setError] = useState<string | null>(null);
  const [successMsg, setSuccessMsg] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  // Form states - Login
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  // Form states - Register
  const [regEmail, setRegEmail] = useState("");
  const [regOtp, setRegOtp] = useState("");
  const [regOtpSent, setRegOtpSent] = useState(false);
  const [regUsername, setRegUsername] = useState("");
  const [regPassword, setRegPassword] = useState("");
  const [regDob, setRegDob] = useState("");
  const [regAcceptedTerms, setRegAcceptedTerms] = useState(true);

  // Form states - Forgot Password
  const [forgotEmail, setForgotEmail] = useState("");
  const [forgotOtp, setForgotOtp] = useState("");
  const [forgotOtpSent, setForgotOtpSent] = useState(false);
  const [forgotNewPassword, setForgotNewPassword] = useState("");

  const googleBtnRef = useRef<HTMLDivElement>(null);

  const [prevIsOpen, setPrevIsOpen] = useState(isAuthModalOpen);
  if (isAuthModalOpen !== prevIsOpen) {
    setPrevIsOpen(isAuthModalOpen);
    if (isAuthModalOpen) {
      setActiveTab(authModalDefaultTab);
      setError(null);
      setSuccessMsg(null);
    }
  }

  // Load Google GIS SDK
  useEffect(() => {
    if (!isAuthModalOpen) return;

    const clientId = process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID || "777095125985-to5ihtche0eg5qo925915kkp0du7ht7j.apps.googleusercontent.com";

    const loadGsi = () => {
      if (window.google?.accounts?.id && googleBtnRef.current) {
        try {
          window.google.accounts.id.initialize({
            client_id: clientId,
            callback: async (res) => {
              if (res.credential) {
                try {
                  setLoading(true);
                  setError(null);
                  await loginWithGoogle(res.credential);
                } catch (err: unknown) {
                  setError(err instanceof Error ? err.message : "Google sign-in failed");
                } finally {
                  setLoading(false);
                }
              }
            },
          });

          googleBtnRef.current.innerHTML = "";
          window.google.accounts.id.renderButton(googleBtnRef.current, {
            theme: "filled_black",
            size: "large",
            shape: "pill",
            text: "continue_with",
            width: 320,
          });
        } catch {}
      }
    };

    if (!window.google?.accounts?.id) {
      const script = document.createElement("script");
      script.src = "https://accounts.google.com/gsi/client";
      script.async = true;
      script.defer = true;
      script.onload = loadGsi;
      document.head.appendChild(script);
    } else {
      loadGsi();
    }
  }, [isAuthModalOpen, activeTab, loginWithGoogle]);

  if (!isAuthModalOpen) return null;

  /* Handle Login */
  const handleLoginSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!loginEmail || !loginPassword) {
      setError("Please fill in both email and password.");
      return;
    }
    setError(null);
    setLoading(true);
    try {
      await loginWithEmail(loginEmail, loginPassword);
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : "Failed to sign in. Please verify your credentials.");
    } finally {
      setLoading(false);
    }
  };

  /* Handle Send Register OTP */
  const handleSendRegOtp = async () => {
    if (!regEmail || !regEmail.includes("@")) {
      setError("Please enter a valid email address.");
      return;
    }
    setError(null);
    setLoading(true);
    try {
      const res = await sendRegisterOtp(regEmail);
      setRegOtpSent(true);
      setSuccessMsg(res.message || "Verification code sent to your email.");
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : "Could not send verification code.");
    } finally {
      setLoading(false);
    }
  };

  /* Handle Register Submit */
  const handleRegisterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!regEmail || !regOtp || !regUsername || !regPassword || !regDob) {
      setError("Please fill in all registration fields.");
      return;
    }
    if (!regAcceptedTerms) {
      setError("You must accept the Terms of Service and Privacy Policy.");
      return;
    }
    setError(null);
    setLoading(true);
    try {
      await registerWithEmail({
        email: regEmail,
        password: regPassword,
        username: regUsername.trim(),
        displayName: regUsername.trim(),
        dateOfBirth: regDob,
        acceptedTerms: true,
        otp: regOtp.trim(),
      });
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : "Registration failed.");
    } finally {
      setLoading(false);
    }
  };

  /* Handle Forgot Password OTP */
  const handleSendForgotOtp = async () => {
    if (!forgotEmail || !forgotEmail.includes("@")) {
      setError("Please enter your registered email address.");
      return;
    }
    setError(null);
    setLoading(true);
    try {
      const res = await sendForgotOtp(forgotEmail);
      setForgotOtpSent(true);
      setSuccessMsg(res.message || "If an account exists, a verification code was sent.");
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : "Failed to send reset code.");
    } finally {
      setLoading(false);
    }
  };

  /* Handle Reset Password Submit */
  const handleForgotSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!forgotEmail || !forgotOtp || !forgotNewPassword) {
      setError("Please provide your email, OTP code, and new password.");
      return;
    }
    setError(null);
    setLoading(true);
    try {
      await resetPasswordOtp(forgotEmail, forgotOtp, forgotNewPassword);
      setSuccessMsg("Password updated successfully! Logging you in...");
      await loginWithEmail(forgotEmail, forgotNewPassword);
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : "Password reset failed.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn">
      <div
        className="relative w-full max-w-md rounded-3xl bg-gradient-to-b from-[#18132b] via-[#120d20] to-[#0a0714] border border-purple-500/20 shadow-[0_20px_60px_rgba(138,43,226,0.25)] overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Glow Header Accent */}
        <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-purple-500 via-pink-500 to-amber-400" />

        {/* Close Button */}
        <button
          onClick={closeAuthModal}
          className="absolute top-4 right-4 p-2 rounded-full text-zinc-400 hover:text-white hover:bg-white/10 transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="p-6 sm:p-8">
          {/* Brand header */}
          <div className="text-center mb-6">
            <h2 className="text-2xl font-black text-white tracking-tight">
              {activeTab === "forgot" ? "Reset Password" : "Sign in to Gappey"}
            </h2>
            <p className="text-xs sm:text-sm text-zinc-400 mt-1">
              {activeTab === "forgot"
                ? "Enter the code sent to your email to set a new password"
                : "Top up coins, view live balance, and enjoy exclusive bonuses"}
            </p>
          </div>

          {/* Navigation Tabs (Login / Register) */}
          {activeTab !== "forgot" && (
            <div className="flex p-1 mb-6 rounded-2xl bg-zinc-900/80 border border-white/5">
              <button
                type="button"
                onClick={() => {
                  setActiveTab("login");
                  setError(null);
                  setSuccessMsg(null);
                }}
                className={`flex-1 py-2 text-xs sm:text-sm font-bold rounded-xl transition-all duration-200 ${
                  activeTab === "login"
                    ? "bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg shadow-purple-600/30"
                    : "text-zinc-400 hover:text-zinc-200"
                }`}
              >
                Sign In
              </button>
              <button
                type="button"
                onClick={() => {
                  setActiveTab("register");
                  setError(null);
                  setSuccessMsg(null);
                }}
                className={`flex-1 py-2 text-xs sm:text-sm font-bold rounded-xl transition-all duration-200 ${
                  activeTab === "register"
                    ? "bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg shadow-purple-600/30"
                    : "text-zinc-400 hover:text-zinc-200"
                }`}
              >
                Create Account
              </button>
            </div>
          )}

          {/* Error Message */}
          {error && (
            <div className="mb-4 p-3 rounded-xl bg-red-500/10 border border-red-500/30 flex items-start gap-2.5 text-xs text-red-300">
              <AlertCircle className="w-4 h-4 shrink-0 text-red-400 mt-0.5" />
              <span>{error}</span>
            </div>
          )}

          {/* Success Message */}
          {successMsg && (
            <div className="mb-4 p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-start gap-2.5 text-xs text-emerald-300">
              <CheckCircle2 className="w-4 h-4 shrink-0 text-emerald-400 mt-0.5" />
              <span>{successMsg}</span>
            </div>
          )}

          {/* LOGIN TAB */}
          {activeTab === "login" && (
            <form onSubmit={handleLoginSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-zinc-300 mb-1.5">Email Address</label>
                <div className="relative">
                  <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-400" />
                  <input
                    type="email"
                    value={loginEmail}
                    onChange={(e) => setLoginEmail(e.target.value)}
                    placeholder="you@example.com"
                    required
                    className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-black/40 border border-zinc-700/60 text-white placeholder-zinc-500 text-sm focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-colors"
                  />
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between mb-1.5">
                  <label className="text-xs font-semibold text-zinc-300">Password</label>
                  <button
                    type="button"
                    onClick={() => {
                      setActiveTab("forgot");
                      setForgotEmail(loginEmail);
                      setError(null);
                      setSuccessMsg(null);
                    }}
                    className="text-xs text-pink-400 hover:text-pink-300 transition-colors"
                  >
                    Forgot?
                  </button>
                </div>
                <div className="relative">
                  <Lock className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-400" />
                  <input
                    type="password"
                    value={loginPassword}
                    onChange={(e) => setLoginPassword(e.target.value)}
                    placeholder="••••••••"
                    required
                    className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-black/40 border border-zinc-700/60 text-white placeholder-zinc-500 text-sm focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-colors"
                  />
                </div>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full mt-2 py-3 rounded-xl bg-gradient-to-r from-purple-600 via-pink-600 to-amber-500 text-white font-bold text-sm shadow-lg shadow-purple-600/30 hover:scale-[1.01] active:scale-[0.99] disabled:opacity-50 disabled:pointer-events-none transition-all flex items-center justify-center gap-2"
              >
                {loading ? <Loader2 className="w-4 h-4 animate-spin" /> : "Sign In to Gappey"}
                {!loading && <ArrowRight className="w-4 h-4" />}
              </button>

              {/* Google GIS Container */}
              <div className="relative my-4 text-center">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-zinc-800" />
                </div>
                <span className="relative px-3 bg-[#120d20] text-[11px] uppercase tracking-wider text-zinc-400">
                  Or continue with
                </span>
              </div>

              <div className="flex justify-center" ref={googleBtnRef} />
            </form>
          )}

          {/* REGISTER TAB */}
          {activeTab === "register" && (
            <form onSubmit={handleRegisterSubmit} className="space-y-3.5">
              <div>
                <label className="block text-xs font-semibold text-zinc-300 mb-1">Email Address</label>
                <div className="flex gap-2">
                  <div className="relative flex-1">
                    <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-400" />
                    <input
                      type="email"
                      value={regEmail}
                      onChange={(e) => setRegEmail(e.target.value)}
                      placeholder="you@example.com"
                      required
                      className="w-full pl-10 pr-3 py-2 rounded-xl bg-black/40 border border-zinc-700/60 text-white placeholder-zinc-500 text-sm focus:outline-none focus:border-purple-500"
                    />
                  </div>
                  <button
                    type="button"
                    onClick={handleSendRegOtp}
                    disabled={loading || !regEmail}
                    className="px-3.5 py-2 rounded-xl bg-purple-600/80 hover:bg-purple-600 text-white text-xs font-bold disabled:opacity-50 transition-colors whitespace-nowrap"
                  >
                    {regOtpSent ? "Resend" : "Send Code"}
                  </button>
                </div>
              </div>

              {regOtpSent && (
                <div>
                  <label className="block text-xs font-semibold text-zinc-300 mb-1">Verification Code (6-Digit OTP)</label>
                  <input
                    type="text"
                    maxLength={6}
                    value={regOtp}
                    onChange={(e) => setRegOtp(e.target.value)}
                    placeholder="123456"
                    required
                    className="w-full px-3 py-2 rounded-xl bg-black/40 border border-zinc-700/60 text-white placeholder-zinc-500 text-sm tracking-widest text-center font-mono focus:outline-none focus:border-purple-500"
                  />
                </div>
              )}

              <div>
                <label className="block text-xs font-semibold text-zinc-300 mb-1">Username</label>
                <div className="relative">
                  <UserIcon className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-400" />
                  <input
                    type="text"
                    value={regUsername}
                    onChange={(e) => setRegUsername(e.target.value)}
                    placeholder="gappey_hero"
                    required
                    className="w-full pl-10 pr-3 py-2 rounded-xl bg-black/40 border border-zinc-700/60 text-white placeholder-zinc-500 text-sm focus:outline-none focus:border-purple-500"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-zinc-300 mb-1">Password</label>
                <div className="relative">
                  <Lock className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-400" />
                  <input
                    type="password"
                    value={regPassword}
                    onChange={(e) => setRegPassword(e.target.value)}
                    placeholder="At least 6 characters"
                    required
                    className="w-full pl-10 pr-3 py-2 rounded-xl bg-black/40 border border-zinc-700/60 text-white placeholder-zinc-500 text-sm focus:outline-none focus:border-purple-500"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-zinc-300 mb-1">Date of Birth (18+ only)</label>
                <div className="relative">
                  <Calendar className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-400" />
                  <input
                    type="date"
                    value={regDob}
                    onChange={(e) => setRegDob(e.target.value)}
                    required
                    className="w-full pl-10 pr-3 py-2 rounded-xl bg-black/40 border border-zinc-700/60 text-white text-sm focus:outline-none focus:border-purple-500 [color-scheme:dark]"
                  />
                </div>
              </div>

              <div className="flex items-start gap-2 pt-1">
                <input
                  type="checkbox"
                  id="terms"
                  checked={regAcceptedTerms}
                  onChange={(e) => setRegAcceptedTerms(e.target.checked)}
                  className="mt-0.5 rounded border-zinc-700 bg-black/40 text-pink-500 focus:ring-0"
                />
                <label htmlFor="terms" className="text-[11px] text-zinc-400 leading-tight">
                  I agree to the Terms of Service &amp; Privacy Policy, and confirm I am 18+ years of age.
                </label>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full py-2.5 rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold text-sm shadow-lg shadow-purple-600/30 hover:scale-[1.01] active:scale-[0.99] disabled:opacity-50 transition-all flex items-center justify-center gap-2"
              >
                {loading ? <Loader2 className="w-4 h-4 animate-spin" /> : "Complete Registration"}
              </button>
            </form>
          )}

          {/* FORGOT PASSWORD TAB */}
          {activeTab === "forgot" && (
            <form onSubmit={handleForgotSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-zinc-300 mb-1.5">Registered Email</label>
                <div className="flex gap-2">
                  <div className="relative flex-1">
                    <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-400" />
                    <input
                      type="email"
                      value={forgotEmail}
                      onChange={(e) => setForgotEmail(e.target.value)}
                      placeholder="you@example.com"
                      required
                      className="w-full pl-10 pr-3 py-2 rounded-xl bg-black/40 border border-zinc-700/60 text-white placeholder-zinc-500 text-sm focus:outline-none focus:border-purple-500"
                    />
                  </div>
                  <button
                    type="button"
                    onClick={handleSendForgotOtp}
                    disabled={loading || !forgotEmail}
                    className="px-3.5 py-2 rounded-xl bg-purple-600/80 hover:bg-purple-600 text-white text-xs font-bold disabled:opacity-50 transition-colors whitespace-nowrap"
                  >
                    {forgotOtpSent ? "Resend" : "Send OTP"}
                  </button>
                </div>
              </div>

              {forgotOtpSent && (
                <>
                  <div>
                    <label className="block text-xs font-semibold text-zinc-300 mb-1">6-Digit Verification Code</label>
                    <input
                      type="text"
                      maxLength={6}
                      value={forgotOtp}
                      onChange={(e) => setForgotOtp(e.target.value)}
                      placeholder="123456"
                      required
                      className="w-full px-3 py-2 rounded-xl bg-black/40 border border-zinc-700/60 text-white placeholder-zinc-500 text-sm tracking-widest text-center font-mono focus:outline-none focus:border-purple-500"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-zinc-300 mb-1">New Password</label>
                    <div className="relative">
                      <Lock className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-400" />
                      <input
                        type="password"
                        value={forgotNewPassword}
                        onChange={(e) => setForgotNewPassword(e.target.value)}
                        placeholder="At least 6 characters"
                        required
                        className="w-full pl-10 pr-3 py-2 rounded-xl bg-black/40 border border-zinc-700/60 text-white placeholder-zinc-500 text-sm focus:outline-none focus:border-purple-500"
                      />
                    </div>
                  </div>
                </>
              )}

              <button
                type="submit"
                disabled={loading || !forgotOtpSent}
                className="w-full py-2.5 rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold text-sm shadow-lg shadow-purple-600/30 hover:scale-[1.01] active:scale-[0.99] disabled:opacity-50 transition-all flex items-center justify-center gap-2"
              >
                {loading ? <Loader2 className="w-4 h-4 animate-spin" /> : "Reset & Sign In"}
              </button>

              <div className="text-center pt-2">
                <button
                  type="button"
                  onClick={() => {
                    setActiveTab("login");
                    setError(null);
                    setSuccessMsg(null);
                  }}
                  className="text-xs text-zinc-400 hover:text-white transition-colors"
                >
                  ← Back to Sign In
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
