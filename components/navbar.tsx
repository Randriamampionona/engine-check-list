"use client";

import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { usePathname, useSearchParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const LANGS = [
  {
    code: "en",
    label: "English",
    flag: String.fromCodePoint(0x1f1fa, 0x1f1f8),
  }, // 🇺🇸
  {
    code: "fr",
    label: "Français",
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

      {/* Right – Language */}
      <div className="flex items-center gap-2">
        {LANGS.map((lang) => (
          <button
            key={lang.code}
            onClick={() => changeLang(lang.code)}
            className={`flex items-center gap-1 px-2 pb-1 rounded-md text-sm transition ${
              currentLang === lang.code
                ? "bg-teal-500/20 ring-1 ring-teal-400"
                : "hover:bg-muted"
            }`}
          >
            <span className="text-lg emoji">{lang.flag}</span>
          </button>
        ))}
      </div>
    </nav>
  );
}
