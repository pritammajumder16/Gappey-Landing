"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import {
  Session,
  UserProfile,
  WalletData,
  loginWithEmail as apiLoginWithEmail,
  loginWithGoogle as apiLoginWithGoogle,
  registerWithEmail as apiRegisterWithEmail,
  logoutUser,
  fetchMyProfile,
  fetchMyWallet,
} from "@/lib/api";

interface AuthContextType {
  session: Session | null;
  user: UserProfile | null;
  wallet: WalletData | null;
  isLoading: boolean;
  isAuthModalOpen: boolean;
  authModalDefaultTab: "login" | "register";
  openAuthModal: (tab?: "login" | "register") => void;
  closeAuthModal: () => void;
  loginWithEmail: (email: string, pass: string) => Promise<void>;
  loginWithGoogle: (idToken: string) => Promise<void>;
  registerWithEmail: (data: Parameters<typeof apiRegisterWithEmail>[0]) => Promise<void>;
  refreshWallet: () => Promise<void>;
  logout: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

const SESSION_STORAGE_KEY = "gappey_web_session";

function getInitialSession(): Session | null {
  if (typeof window === "undefined") return null;
  try {
    const stored = localStorage.getItem(SESSION_STORAGE_KEY);
    if (stored) {
      const parsed = JSON.parse(stored) as Session;
      if (parsed?.accessToken && parsed?.userId) return parsed;
    }
  } catch {}
  return null;
}

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [session, setSession] = useState<Session | null>(getInitialSession);
  const [user, setUser] = useState<UserProfile | null>(null);
  const [wallet, setWallet] = useState<WalletData | null>(null);
  const [isLoading] = useState(false);
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [authModalDefaultTab, setAuthModalDefaultTab] = useState<"login" | "register">("login");

  // Fetch profile and wallet when session changes
  useEffect(() => {
    if (!session?.accessToken || !session?.userId) return;

    let ignore = false;
    Promise.all([
      fetchMyProfile(session.userId, session.accessToken),
      fetchMyWallet(session.accessToken),
    ])
      .then(([profileData, walletData]) => {
        if (!ignore) {
          setUser(profileData);
          setWallet(walletData);
        }
      })
      .catch((err) => {
        console.warn("Failed to load user profile or wallet:", err);
      });

    return () => {
      ignore = true;
    };
  }, [session]);

  const handleSessionEstablished = (newSession: Session) => {
    setSession(newSession);
    try {
      localStorage.setItem(SESSION_STORAGE_KEY, JSON.stringify(newSession));
    } catch {}
    setIsAuthModalOpen(false);
  };

  const loginWithEmail = async (email: string, pass: string) => {
    const newSession = await apiLoginWithEmail(email, pass);
    handleSessionEstablished(newSession);
  };

  const loginWithGoogle = async (idToken: string) => {
    const newSession = await apiLoginWithGoogle(idToken);
    handleSessionEstablished(newSession);
  };

  const registerWithEmail = async (data: Parameters<typeof apiRegisterWithEmail>[0]) => {
    const newSession = await apiRegisterWithEmail(data);
    handleSessionEstablished(newSession);
  };

  const refreshWallet = async () => {
    if (!session?.accessToken) return;
    try {
      const w = await fetchMyWallet(session.accessToken);
      setWallet(w);
    } catch (err) {
      console.warn("Failed to refresh wallet:", err);
    }
  };

  const logout = async () => {
    if (session?.refreshToken) {
      void logoutUser(session.refreshToken);
    }
    setSession(null);
    setUser(null);
    setWallet(null);
    try {
      localStorage.removeItem(SESSION_STORAGE_KEY);
    } catch {}
  };

  const openAuthModal = (tab: "login" | "register" = "login") => {
    setAuthModalDefaultTab(tab);
    setIsAuthModalOpen(true);
  };

  const closeAuthModal = () => {
    setIsAuthModalOpen(false);
  };

  return (
    <AuthContext.Provider
      value={{
        session,
        user,
        wallet,
        isLoading,
        isAuthModalOpen,
        authModalDefaultTab,
        openAuthModal,
        closeAuthModal,
        loginWithEmail,
        loginWithGoogle,
        registerWithEmail,
        refreshWallet,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}
