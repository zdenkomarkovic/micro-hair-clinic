import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

import { match } from "@formatjs/intl-localematcher";
import Negotiator from "negotiator";

import { i18n } from "./i18n-config";
import type { I18nConfig } from "./i18n-config";

function getLocale(request: NextRequest, i18nConfig: I18nConfig): string {
  const { locales, defaultLocale } = i18nConfig;

  const negotiatorHeaders: Record<string, string> = {};
  request.headers.forEach((value, key) => (negotiatorHeaders[key] = value));

  const languages = new Negotiator({ headers: negotiatorHeaders }).languages(
    locales.slice()
  );

  return match(languages, locales, defaultLocale);
}

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
  // Za crawlere i botove uvek koristi defaultLocale
  const userAgent = request.headers.get('user-agent') || '';
  const isBot = /bot|crawler|spider|crawling|google|bing|yandex|baidu|duckduck/i.test(userAgent);

  const locale = isBot ? defaultLocale : getLocale(request, i18n);
  let newPath = `/${locale}${pathname === '/' ? '' : pathname}`;
  if (request.nextUrl.search) newPath += request.nextUrl.search;

  const redirectResponse = NextResponse.redirect(new URL(newPath, request.url));
  if (!isBot) {
    redirectResponse.cookies.set("NEXT_LOCALE", locale);
  }

  return redirectResponse;
}

export const config = {
  matcher: [
    '/',
    '/((?!api|_next/static|_next/image|favicon.ico|images/|optimized/|.*\\.svg$).*)'
  ],
};
