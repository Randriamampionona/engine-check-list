"use client";
import { useEffect, useRef } from "react";

export default function HilltopadsMobileBanner300() {
  const adBoxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // 1. Only run on mobile (screens smaller than 768px)
    if (window.innerWidth >= 768) return;

    // 2. Clear previous ads to prevent stacking/errors on navigation
    if (adBoxRef.current) {
      adBoxRef.current.innerHTML = "";
    }

    // 3. Create the script element
    const script = document.createElement("script");

    // FIX: We use your NEWEST excitedzone.com URL from the latest snippet
    script.text = `(function(yutas){
      var d = document,
          s = d.createElement('script'),
          container = d.getElementById('hilltop-banner-300');
      s.settings = yutas || {};
      s.src = "//excitedzone.com/beXAV.sRdYG/lo0kY/Wgcx/Texm/9PuuZXUnlHkiPLT/Y/3sNqTzIM4LM/Dqg/ttNMjvcy1rMcjPgmw/O/Ql";
      s.async = true;
      s.referrerPolicy = 'no-referrer-when-downgrade';
      
      // Instead of l.parentNode.insertBefore, we force it into our container
      if(container) container.appendChild(s);
    })({})`;

    // 4. Inject the script into the specific container
    if (adBoxRef.current) {
      adBoxRef.current.appendChild(script);
    }
  }, []);

  return (
    /* Keeping your exact UI design and styling */
    <div className="md:hidden w-full flex flex-col items-center bg-secondary/5 border border-border/40 rounded shadow-sm overflow-hidden mb-4 py-4">
      <div
        id="hilltop-banner-300"
        ref={adBoxRef}
        /* Fixed width/height to match the ad and prevent layout shifts */
        className="relative w-75 h-25 flex items-center justify-center"
      >
        {/* Adsterra will inject here */}
      </div>
    </div>
  );
}
