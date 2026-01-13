"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { usePathname, useSearchParams, useRouter } from "next/navigation";
import { SignedIn, UserButton } from "@clerk/nextjs";

const LANGS = [
  {
    code: "en",
    label: "En",
    flag: String.fromCodePoint(0x1f1fa, 0x1f1f8),
  }, // 🇺🇸
  {
    code: "fr",
    label: "Fr",
    flag: String.fromCodePoint(0x1f1eb, 0x1f1f7),
  }, // 🇫🇷
];

export default function Navbar() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const router = useRouter();
  const isHome = pathname === "/";

  // Start with undefined to avoid SSR localStorage access
  const [currentLang, setCurrentLang] = useState<string | null>(null);

  const showNewBadge = (() => {
    const today = new Date();
    const expiry = new Date("2026-02-28T23:59:59"); // Feb 28 end of day
    return today <= expiry;
  })();

  useEffect(() => {
    const paramLang = searchParams.get("lang");
    if (paramLang) {
      setCurrentLang(paramLang);
      localStorage.setItem("lang", paramLang);
    } else {
      const storedLang = localStorage.getItem("lang") ?? "en";
      setCurrentLang(storedLang);
    }
  }, [searchParams]);

  const changeLang = (lang: string) => {
    setCurrentLang(lang);
    localStorage.setItem("lang", lang);

    const params = new URLSearchParams(searchParams.toString());
    params.set("lang", lang);
    router.push(`${pathname}?${params.toString()}`);
  };

  // Avoid rendering language buttons until client has set currentLang
  if (!currentLang) return null;

  return (
    <nav className="fixed top-0 w-full h-14 z-50 flex items-center justify-between px-4 bg-background">
      {/* Left */}
      <div>
        {!isHome && (
          <Link
            href="/"
            className="flex items-center gap-1 text-sm font-medium text-foreground hover:text-teal-400 transition-colors"
          >
            <ArrowLeft size={16} />
            <span>Back</span>
          </Link>
        )}
      </div>

      {/* Right – Community + Language */}
      <div className="flex items-center gap-3">
        <Link
          href="/community"
          className="relative inline-flex items-center gap-2 px-3 py-1.5 rounded-full
    text-sm font-semibold text-teal-400
    border border-teal-400/40
    hover:bg-teal-500/10 hover:border-teal-400
    transition-all duration-200"
        >
          <span className="relative z-10">Community</span>

          {/* Floating NEW badge */}
          {showNewBadge && (
            <span
              className="
        absolute -top-2 -right-2 z-20
        rounded-full
        bg-linear-to-r from-pink-500 to-orange-400
        px-2 py-0.5
        text-[9px] font-bold uppercase tracking-wider text-white
        shadow-md
        ring-2 ring-background
        animate-pulse
      "
            >
              New
            </span>
          )}

          <span className="absolute inset-0 rounded-full bg-teal-400/10 blur opacity-0 hover:opacity-100 transition-opacity" />
        </Link>

        {/* Language Select */}
        <div className="relative">
          <select
            value={currentLang}
            onChange={(e) => changeLang(e.target.value)}
            className="
        appearance-none cursor-pointer
        bg-background text-sm font-medium
        border border-border rounded-md
        px-3 py-1.5 pr-8
        hover:border-teal-400
        focus:outline-none focus:ring-1 focus:ring-teal-400
        transition
      "
          >
            {LANGS.map((lang) => (
              <option key={lang.code} value={lang.code}>
                {lang.flag} {lang.label}
              </option>
            ))}
          </select>

          {/* Custom arrow */}
          <span className="pointer-events-none absolute right-2 top-1/2 -translate-y-1/2 text-muted-foreground">
            ▾
          </span>
        </div>

        <SignedIn>
          <UserButton />
        </SignedIn>
      </div>
    </nav>
  );
}
