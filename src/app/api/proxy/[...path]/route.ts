import { NextRequest, NextResponse } from "next/server";

const BACKEND_BASE_URL = (process.env.BACKEND_API_URL || "https://api.gappey.in").replace(/\/+$/, "");

async function handleProxy(request: NextRequest, context: { params: Promise<{ path: string[] }> }) {
  try {
    const { path } = await context.params;
    const targetPath = "/" + (path || []).join("/");
    const search = request.nextUrl.search;
    const targetUrl = `${BACKEND_BASE_URL}${targetPath}${search}`;

    const headers = new Headers();
    const authHeader = request.headers.get("authorization");
    if (authHeader) headers.set("authorization", authHeader);
    const contentType = request.headers.get("content-type");
    if (contentType) headers.set("content-type", contentType);

    const init: RequestInit = {
      method: request.method,
      headers,
    };

    if (request.method !== "GET" && request.method !== "HEAD") {
      const body = await request.text();
      if (body) {
        init.body = body;
      }
    }

    const res = await fetch(targetUrl, init);
    const responseText = await res.text();
    const responseHeaders = new Headers();
    const resContentType = res.headers.get("content-type");
    if (resContentType) {
      responseHeaders.set("content-type", resContentType);
    }

    return new NextResponse(responseText, {
      status: res.status,
      headers: responseHeaders,
    });
  } catch (err: unknown) {
    const errorMessage = err instanceof Error ? err.message : "Failed to communicate with API server";
    return NextResponse.json(
      { code: "GATEWAY_ERROR", message: errorMessage },
      { status: 502 }
    );
  }
}

export const GET = handleProxy;
export const POST = handleProxy;
export const PUT = handleProxy;
export const PATCH = handleProxy;
export const DELETE = handleProxy;
