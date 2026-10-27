export const APP_VERSION = "v2.0.1";

export const APK_FILENAME = `gappey_${APP_VERSION}.apk`;

// Direct download from assets CDN / API VM
export const APK_DOWNLOAD_URL = `https://api.gappey.in/download/${APK_FILENAME}`;

export const APK_DIRECT_DOWNLOAD = APK_DOWNLOAD_URL;

// iOS build coming soon; keep null or placeholder until build is linked
export const IOS_DOWNLOAD_URL: string | null = null;
