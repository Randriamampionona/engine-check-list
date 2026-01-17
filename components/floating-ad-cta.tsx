"use client";

import Link from "next/link";
import { Sparkles } from "lucide-react";
import { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";

export default function FloatingAdCTA() {
  const pathname = usePathname();
  const router = useRouter();
  if (pathname === "/ad") return null;

  const URLS = [
    "https://www.effectivegatecpm.com/ggeh3sa5?key=163056f5f663a5f45431a95f611c1bf4",
    "/ad",
  ];

  const [href, setHref] = useState<string | null>(null);

  useEffect(() => {
    const clicked = sessionStorage.getItem("floating-ad-clicked");
    setHref(clicked ? URLS[1] : URLS[0]);
  }, []);

  const handleClick = () => {
    sessionStorage.setItem("floating-ad-clicked", "true");
    setTimeout(() => router.push("/ad"), 100);
  };

  if (!href) return null;

  const isExternal = href.startsWith("http");

  return (
    <Link
      href={href}
      onClick={handleClick}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noopener noreferrer" : undefined}
      className="
        fixed bottom-5 right-5 z-50
        group flex items-center gap-2
        rounded-full
        bg-linear-to-br from-teal-500 to-emerald-500
        px-4 py-2.5
        text-sm font-semibold text-white
        shadow-lg shadow-teal-500/25
        transition-all
        hover:-translate-y-0.5 hover:shadow-xl hover:shadow-teal-500/30
        active:scale-95
        animate-bounce
      "
    >
      <Sparkles className="h-4 w-4 opacity-90 group-hover:rotate-6 transition" />
      Support the app
    </Link>
  );
}
