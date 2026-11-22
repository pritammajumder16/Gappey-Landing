import { NextResponse } from "next/server";
import { APK_DOWNLOAD_URL } from "@/constants/links";

/**
 * Route handler to redirect APK download directly to the CDN / API endpoint (302).
 * Large downloads are never streamed through the web application server to save bandwidth and memory.
 */
export async function GET() {
  return NextResponse.redirect(APK_DOWNLOAD_URL, { status: 302 });
}
