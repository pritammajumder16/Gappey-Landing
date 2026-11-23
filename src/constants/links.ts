export const APP_VERSION = "v2.3.7";

export const APK_FILENAME = `gappey_${APP_VERSION}.apk`;

// Direct download from assets CDN / API VM
export const APK_DOWNLOAD_URL = `https://api-v2.gappey.in/download/${APK_FILENAME}`;

export const APK_SIZE_BYTES = 116692520;

export const APK_DIRECT_DOWNLOAD = APK_DOWNLOAD_URL;

// Universal build (32-bit + 64-bit ARM) for older / low-tier Android devices
export const APK_ALL_DEVICES_FILENAME = `gappey_${APP_VERSION}_all-devices.apk`;
export const APK_ALL_DEVICES_URL = `https://api.gappey.in/download/${APK_ALL_DEVICES_FILENAME}`;

// Google Play Store listing URL
export const PLAY_STORE_URL = "https://play.google.com/store/apps/details?id=com.gappey.in";

// iOS build coming soon; keep null or placeholder until build is linked
export const IOS_DOWNLOAD_URL: string | null = null;

/**
 * Builds Google Play Install Referrer parameter string.
 * Format per spec `invite-and-earn-rebuild`: `gappey_invite=<code>` (URL-encoded once).
 * Returns null if code is missing, empty, or malformed to avoid broken links or parameter injection.
 */
export function buildPlayReferrer(code?: string | null): string | null {
  if (!code || typeof code !== "string") return null;
  const trimmed = code.trim();
  // Safe alphanumeric referral code check (1 to 32 chars, allowing letters, digits, underscores, hyphens)
  if (!/^[a-zA-Z0-9_-]{1,32}$/.test(trimmed)) return null;
  return encodeURIComponent(`gappey_invite=${trimmed}`);
}

/**
 * Returns the full Play Store URL, appending the verified referrer if a valid code is provided.
 */
export function getPlayStoreUrlWithReferrer(code?: string | null): string {
  const referrer = buildPlayReferrer(code);
  if (!referrer) return PLAY_STORE_URL;
  return `${PLAY_STORE_URL}&referrer=${referrer}`;
}
