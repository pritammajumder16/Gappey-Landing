import { NextRequest, NextResponse } from "next/server";
import { APK_DOWNLOAD_URL, APK_FILENAME } from "@/constants/links";

/**
 * Route handler to proxy or redirect the APK download with a clean, branded filename:
 * e.g. Content-Disposition: attachment; filename="gappey_v1.1.0.apk"
 */
export async function GET(request: NextRequest) {
  try {
    const upstreamRes = await fetch(APK_DOWNLOAD_URL);
    if (!upstreamRes.ok) {
      return NextResponse.redirect(APK_DOWNLOAD_URL, { status: 302 });
    }

    const headers = new Headers();
    headers.set("Content-Type", "application/vnd.android.package-archive");
    headers.set("Content-Disposition", `attachment; filename="${APK_FILENAME}"`);

    const contentLength = upstreamRes.headers.get("content-length");
    if (contentLength) {
      headers.set("Content-Length", contentLength);
    }

    return new NextResponse(upstreamRes.body, {
      status: 200,
      headers,
    });
  } catch {
    return NextResponse.redirect(APK_DOWNLOAD_URL, { status: 302 });
  }
}
