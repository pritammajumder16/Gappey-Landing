# Gappey APK Release Directory
Place your latest Android APK file named `gappey.apk` in this folder (`public/app/gappey.apk`).

When you build a new version using Expo/EAS:
`eas build --platform android --profile preview` or `npx react-native build-android`
Copy the resulting `.apk` to this folder:
`cp <path-to-built-apk>.apk public/app/gappey.apk`

Whenever you `git push` or deploy to Vercel, visitors can immediately download the APK from:
`https://your-domain.vercel.app/app/gappey.apk`
or directly clicking the **"Download APK"** button on the website!
