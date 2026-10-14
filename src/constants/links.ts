export const APP_VERSION = "v1.2.0";

export const APK_FILENAME = `gappey_${APP_VERSION}.apk`;

// Served straight from our server (nginx /download/ on the API VM): a real direct link with no
// Drive virus-scan page and no streaming through a Vercel function. Upload each new build there.
export const APK_DOWNLOAD_URL = `https://gappey.duckdns.org/download/${APK_FILENAME}`;

export const APK_DIRECT_DOWNLOAD = APK_DOWNLOAD_URL;

// iOS build coming soon; keep null or placeholder until build is linked
export const IOS_DOWNLOAD_URL: string | null = null;
