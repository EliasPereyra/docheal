import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  let cookie = request.cookies.get("authjs.session-token");

  if (!cookie) {
    return NextResponse.redirect(new URL("/onboarding", request.url));
  }
}

export const config = {
  matcher: "/patients/:path*",
};
