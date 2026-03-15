import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || "change-this-now";

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  const isProtectedRoute = pathname.startsWith("/admin");

  if (!isProtectedRoute) {
    return NextResponse.next();
  }

  const authHeader = request.headers.get("authorization");

  if (authHeader) {
    const [type, value] = authHeader.split(" ");

    if (type === "Basic" && value) {
      const decoded = atob(value);
      const [username, password] = decoded.split(":");

      if (username === "founder" && password === ADMIN_PASSWORD) {
        return NextResponse.next();
      }
    }
  }

  return new NextResponse("Authentication required.", {
    status: 401,
    headers: {
      "WWW-Authenticate": 'Basic realm="Founder Admin Area"',
    },
  });
}

export const config = {
  matcher: ["/admin/:path*"],
};