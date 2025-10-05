import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

import { i18n } from "./i18n-config";

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;

  // ✨ Skip language redirect for sitemap, robots, and static files
  if (
    pathname === "/sitemap.xml" ||
    pathname === "/robots.txt" ||
    pathname.startsWith("/sitemap-") ||
    pathname.startsWith("/_next") ||
    pathname.startsWith("/api")
  ) {
    return NextResponse.next();
  }

  const { locales, defaultLocale } = i18n;

  const pathLocale = locales.find(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  if (pathLocale) {
    // Ako je već na ispravnoj lokalizovanoj ruti, samo nastavi BEZ redirecta
    return NextResponse.next();
  }

  // Samo redirect za root ili nevalidne putanje
  // Uvek koristi slovenački kao default jezik
  const locale = defaultLocale;
  let newPath = `/${locale}${pathname === '/' ? '' : pathname}`;
  if (request.nextUrl.search) newPath += request.nextUrl.search;

  return NextResponse.redirect(new URL(newPath, request.url));
}

export const config = {
  matcher: [
    '/',
    '/((?!api|_next/static|_next/image|favicon.ico|images/|optimized/|.*\\.svg$).*)'
  ],
};
