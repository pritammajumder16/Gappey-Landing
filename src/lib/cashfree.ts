declare global {
  interface Window {
    Cashfree?: (config: { mode: "production" | "sandbox" }) => {
      checkout: (options: {
        paymentSessionId: string;
        redirectTarget?: "_modal" | "_self" | "_blank";
      }) => Promise<{
        error?: { message: string; code?: string };
        redirect?: boolean;
        paymentDetails?: unknown;
      }>;
    };
  }
}

let cashfreeSdkPromise: Promise<boolean> | null = null;

export function loadCashfreeSdk(): Promise<boolean> {
  if (typeof window === "undefined") return Promise.resolve(false);
  if (window.Cashfree) return Promise.resolve(true);

  if (!cashfreeSdkPromise) {
    cashfreeSdkPromise = new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = "https://sdk.cashfree.com/js/v3/cashfree.js";
      script.async = true;
      script.onload = () => resolve(Boolean(window.Cashfree));
      script.onerror = () => {
        console.error("Failed to load Cashfree JS SDK v3");
        resolve(false);
      };
      document.head.appendChild(script);
    });
  }

  return cashfreeSdkPromise;
}

export async function initiateCashfreeCheckout(paymentSessionId: string): Promise<{
  success: boolean;
  error?: string;
}> {
  const loaded = await loadCashfreeSdk();
  if (!loaded || !window.Cashfree) {
    return { success: false, error: "Payment gateway could not be loaded. Please check your internet connection or ad-blocker." };
  }

  const mode = process.env.NEXT_PUBLIC_CASHFREE_MODE === "sandbox" ? "sandbox" : "production";
  const cashfree = window.Cashfree({ mode });

  try {
    const result = await cashfree.checkout({
      paymentSessionId,
      redirectTarget: "_modal",
    });

    if (result?.error) {
      return { success: false, error: result.error.message || "Payment cancelled or failed" };
    }

    return { success: true };
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : "Error initiating checkout modal";
    return { success: false, error: message };
  }
}
