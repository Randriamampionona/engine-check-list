"use client";
import { useEffect, useRef } from "react";
import Script from "next/script";

export default function TopBanner() {
  const bannerRef = useRef<HTMLDivElement>(null);

  return (
    <div className="flex justify-center my-4 min-h-22.5 w-full">
      {/* 1. Define the config variable */}
      <Script id="adsterra-banner-config" strategy="afterInteractive">
        {`
          window.atOptions = {
            'key' : '63d93ff8d9831bf8f803dfad9f1653bf',
            'format' : 'iframe',
            'height' : 90,
            'width' : 728,
            'params' : {}
          };
        `}
      </Script>

      {/* 2. Load the actual ad script */}
      <Script
        id="adsterra-banner-invoke"
        src="https://www.highperformanceformat.com/63d93ff8d9831bf8f803dfad9f1653bf/invoke.js"
        strategy="afterInteractive"
      />
    </div>
  );
}
