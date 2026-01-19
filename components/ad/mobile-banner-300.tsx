"use client";
import { useEffect, useRef } from "react";

export default function MobileBanner300() {
  const adBoxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // 1. Only run on mobile
    if (window.innerWidth >= 768) return;

    // 2. Clear previous ads to prevent stacking
    if (adBoxRef.current) {
      adBoxRef.current.innerHTML = "";
    }

    // 3. Create the script element
    const script = document.createElement("script");

    // We wrap your IIFE in a way that forces it to use the container
    script.text = `(function(wnryh){
      var d = document,
          s = d.createElement('script'),
          container = d.getElementById('hilltop-target');
      s.settings = wnryh || {};
      s.src = "//prickly-tradition.com/b/XsV.s/d/GDll0/YNW/cQ/benmF9/uBZ/UYlrkgPQTBYz3/NwT/EX1wMAzRggtXNwj/cO1RMQTeU/zyOBQD";
      s.async = true;
      s.referrerPolicy = 'no-referrer-when-downgrade';
      if(container) container.appendChild(s);
    })({})`;

    // 4. Inject it
    if (adBoxRef.current) {
      adBoxRef.current.appendChild(script);
    }
  }, []);

  return (
    <div className="md:hidden w-full flex flex-col items-center mb-4 border border-border/40 rounded overflow-hidden">
      <div
        id="hilltop-target"
        ref={adBoxRef}
        className="relative w-75 h-25 shadow-inner flex items-center justify-center"
      >
        {/* The ad will be forced into this box */}
      </div>
    </div>
  );
}
