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
    "https://www.effectivegatecpm.com/ggeh3sa5?key=163056f5f663a5f45431a95f611c1bf4", // first click
    "/ad", // subsequent clicks
  ];

  const RESET_AFTER_MS = 10 * 1000; // 10 seconds
  const SESSION_KEY = "floating-ad-clicked";
  const TIMESTAMP_KEY = "floating-ad-clicked-time";

  const [href, setHref] = useState<string | null>(null);

  // Function to check session and update href
  const updateHref = () => {
    const timestamp = sessionStorage.getItem(TIMESTAMP_KEY);
    const clicked = sessionStorage.getItem(SESSION_KEY);

    // Reset session if timestamp is too old
    if (timestamp) {
      const age = Date.now() - parseInt(timestamp, 10);
      if (age > RESET_AFTER_MS) {
        sessionStorage.removeItem(SESSION_KEY);
        sessionStorage.removeItem(TIMESTAMP_KEY);
        setHref(URLS[0]); // re-enable first URL
        return;
      }
    }

    // Default logic
    setHref(clicked ? URLS[1] : URLS[0]);
  };

  useEffect(() => {
    updateHref(); // initial check

    // Check every second if the first URL should come back
    const interval = setInterval(updateHref, 1000);

    return () => clearInterval(interval);
  }, []);

  const handleClick = () => {
    // Mark clicked and store timestamp
    sessionStorage.setItem(SESSION_KEY, "true");
    sessionStorage.setItem(TIMESTAMP_KEY, Date.now().toString());

    // Navigate to /ad after opening external ad
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
