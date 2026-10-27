export interface Session {
  userId: string;
  accessToken: string;
  refreshToken: string;
  language?: string;
}

export interface UserProfile {
  userId: string;
  username: string;
  displayName?: string | null;
  displayId?: string;
  customId?: string | null;
  avatarUrl?: string | null;
  avatarFrame?: string | null;
  vipTier?: number;
  svipTier?: number;
}

export interface WalletData {
  goldCoins: number;
  superCoins: number;
  diamonds: number;
  superDiamonds: number;
  hasRecharged: boolean;
  canWithdraw: boolean;
}

export interface CashfreeTier {
  id: string;
  displayName: string;
  inrPrice: number;
  baseCoins: number;
  tierBonusCoins: number;
  bonusPercent: number;
  totalCoins: number;
  superCoins: number;
  firstRechargeBonusPercent: number;
  firstRechargeBonusCoins: number;
  firstRechargeTotalCoins: number;
}

export interface CashfreeOrderResponse {
  orderId: string;
  paymentSessionId: string;
  paymentUrl: string;
  inrAmount: number;
  baseCoins: number;
  bonusPercent: number;
  tierBonusCoins: number;
  totalCoins: number;
  superCoins: number;
  currency: string;
  tierId: string;
}

export interface CashfreeVerifyResponse {
  success: boolean;
  orderId: string;
  inrAmount: number;
  coinsCredited: number;
  goldCoinsCredited?: number;
  superCoinsCredited?: number;
  baseCoins?: number;
  tierBonusCoins?: number;
  bonusCoins?: number;
  firstRechargeBonus?: number;
  isFirstRecharge: boolean;
  hasRecharged: boolean;
  balance: number;
}

const BASE_URL = "/api/proxy";

export async function apiRequest<T>(
  endpoint: string,
  options: {
    method?: string;
    token?: string | null;
    body?: unknown;
  } = {}
): Promise<T> {
  const headers: Record<string, string> = {
    "Content-Type": "application/json",
  };

  if (options.token) {
    headers["Authorization"] = `Bearer ${options.token}`;
  }

  const res = await fetch(`${BASE_URL}${endpoint}`, {
    method: options.method || "GET",
    headers,
    body: options.body ? JSON.stringify(options.body) : undefined,
  });

  const data = await res.json().catch(() => null);

  if (!res.ok) {
    const errorMsg = data?.message || data?.error || `Request failed with status ${res.status}`;
    const err = new Error(errorMsg) as Error & { code?: string; status?: number };
    err.code = data?.code;
    err.status = res.status;
    throw err;
  }

  return data as T;
}

/* Authentication */
export async function loginWithEmail(email: string, password: string): Promise<Session> {
  return apiRequest<Session>("/auth/login", {
    method: "POST",
    body: { email: email.trim().toLowerCase(), password },
  });
}

export async function loginWithGoogle(idToken: string): Promise<Session> {
  return apiRequest<Session>("/auth/google", {
    method: "POST",
    body: { idToken },
  });
}

export async function sendRegisterOtp(email: string): Promise<{ success: boolean; message: string }> {
  return apiRequest<{ success: boolean; message: string }>("/auth/send-register-otp", {
    method: "POST",
    body: { email: email.trim().toLowerCase() },
  });
}

export async function registerWithEmail(input: {
  email: string;
  password: string;
  username: string;
  displayName?: string;
  acceptedTerms: boolean;
  dateOfBirth: string;
  otp: string;
}): Promise<Session> {
  return apiRequest<Session>("/auth/register", {
    method: "POST",
    body: {
      ...input,
      email: input.email.trim().toLowerCase(),
    },
  });
}

export async function sendForgotOtp(email: string): Promise<{ success: boolean; message: string }> {
  return apiRequest<{ success: boolean; message: string }>("/auth/send-forgot-otp", {
    method: "POST",
    body: { email: email.trim().toLowerCase() },
  });
}

export async function resetPasswordOtp(
  email: string,
  otp: string,
  newPassword: string
): Promise<{ success: boolean; message: string; session: Session }> {
  return apiRequest<{ success: boolean; message: string; session: Session }>("/auth/reset-password-otp", {
    method: "POST",
    body: { email: email.trim().toLowerCase(), otp: otp.trim(), newPassword },
  });
}

export async function logoutUser(refreshToken?: string | null): Promise<void> {
  try {
    await apiRequest("/auth/logout", {
      method: "POST",
      body: { refreshToken },
    });
  } catch {}
}

/* User & Wallet */
export async function fetchMyProfile(userId: string, token: string): Promise<UserProfile | null> {
  const users = await apiRequest<UserProfile[]>("/users/batch", {
    method: "POST",
    token,
    body: { ids: [userId] },
  });
  return users && users.length > 0 ? users[0] : null;
}

export async function fetchMyWallet(token: string): Promise<WalletData> {
  return apiRequest<WalletData>("/me/wallet", {
    method: "GET",
    token,
  });
}

/* Cashfree Payments */
export async function fetchCashfreeTiers(): Promise<CashfreeTier[]> {
  return apiRequest<CashfreeTier[]>("/payments/cashfree/tiers", {
    method: "GET",
  });
}

export async function createCashfreeOrder(
  tierId: string,
  token: string
): Promise<CashfreeOrderResponse> {
  return apiRequest<CashfreeOrderResponse>("/payments/cashfree/create-order", {
    method: "POST",
    token,
    body: { tierId, source: "web" },
  });
}

export async function verifyCashfreePayment(
  orderId: string,
  token: string
): Promise<CashfreeVerifyResponse> {
  return apiRequest<CashfreeVerifyResponse>("/payments/cashfree/verify", {
    method: "POST",
    token,
    body: { orderId },
  });
}
