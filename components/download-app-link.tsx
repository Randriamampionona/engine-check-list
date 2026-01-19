"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function DownloadAppLink() {
  const pathname = usePathname();
  const [hide, setHide] = useState(true);

  useEffect(() => {
    const isStandalone =
      window.matchMedia("(display-mode: standalone)").matches ||
      // iOS PWA
      (window.navigator as any).standalone === true;

    const isWebView = /wv|WebView|Instagram|FBAN|FBAV/i.test(
      navigator.userAgent,
    );

    if (isStandalone || isWebView) {
      setHide(true);
    } else {
      setHide(false);
    }
  }, []);

  if (hide || pathname.startsWith("/appli")) return null;

  return (
    <div className="mt-5 flex justify-center">
      <Link
        href="/appli"
        className="
          group text-sm font-semibold text-teal-600
          hover:text-teal-700 transition
          underline underline-offset-4 decoration-teal-300/40
          hover:decoration-teal-500
        "
      >
        Get the mobile app →
      </Link>
    </div>
  );
}
