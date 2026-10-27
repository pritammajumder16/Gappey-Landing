# Gappey APK Release Directory

The landing page downloads the latest APK from the API VM (`https://api.gappey.in/download/gappey_v<version>.apk`, served from `/var/www/gappey-download/`).

Update `APP_VERSION` in `src/constants/links.ts` when a new APK is uploaded. The `/download-android` page shows the active release from `/system-config/active-android-release` and falls back to these constants.

