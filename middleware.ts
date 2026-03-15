import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  const protectedPaths = ["/admin", "/admin/ssdi"];
  const isProtected = protectedPaths.some(
    (path) => pathname === path || pathname.startsWith(path + "/")
  );

  if (!isProtected) {
    return NextResponse.next();
  }

  const adminKey = request.cookies.get("ssgpt6_admin_key")?.value;
  const expectedKey = process.env.ADMIN_ACCESS_KEY;

  if (!expectedKey) {
    return NextResponse.redirect(new URL("/admin-login", request.url));
  }

  if (adminKey !== expectedKey) {
    return NextResponse.redirect(new URL("/admin-login", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/admin/:path*"],
};