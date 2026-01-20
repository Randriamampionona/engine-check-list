"use client";
import { useEffect, useRef } from "react";

export default function HilltopadsMobileBanner300() {
  const adBoxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // 1. Only run on mobile (screens smaller than 768px)
    if (window.innerWidth >= 768) return;

    // 2. Clear previous ads to prevent stacking during re-renders
    if (adBoxRef.current) {
      adBoxRef.current.innerHTML = "";
    }

    // 3. Create the script element
    const script = document.createElement("script");

    // We use your new excitedzone.com URL here
    script.text = `(function(gsduk){
      var d = document,
          s = d.createElement('script'),
          container = d.getElementById('hilltop-banner-300');
      s.settings = gsduk || {};
      s.src = "//excitedzone.com/b.XBVYsWdDGjlI0FYNWlcX/xeRmo9Zu/ZzUtlXk/P/TWYo3_NXTqIc4UM/DAgDtDNBj/cB1IMQjvgOwoO_QE";
      s.async = true;
      s.referrerPolicy = 'no-referrer-when-downgrade';
      if(container) container.appendChild(s);
    })({})`;

    // 4. Inject the script into the specific container
    if (adBoxRef.current) {
      adBoxRef.current.appendChild(script);
    }
  }, []);

  return (
    /* md:hidden ensures this whole block is removed on desktop */
    <div className="md:hidden w-full flex flex-col items-center bg-secondary/5 border border-border/40 rounded shadow-sm overflow-hidden">
      <div
        id="hilltop-banner-300"
        ref={adBoxRef}
        /* w-[300px] h-[100px] ensures the box is exactly the ad size to prevent layout shifts */
        className="relative w-75 h-25 flex items-center justify-center"
      >
        {/* The ad will be injected here by the script */}
      </div>
    </div>
  );
}
