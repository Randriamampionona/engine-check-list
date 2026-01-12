"use client";
import { useEffect, useRef } from "react";

export default function AdBanner() {
  // 1. Tell TypeScript this is a Div element
  const adContainer = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // 2. Add the check to ensure adContainer.current exists
    if (adContainer.current && !adContainer.current.firstChild) {
      const script = document.createElement("script");
      const config = document.createElement("script");

      const AD_KEY = "63d93ff8d9831bf8f803dfad9f1653bf";

      config.innerHTML = `
        atOptions = {
            'key' : '',
            'format' : 'iframe',
            'height' : 90,
            'width' : 728,
            'params' : {}
        };
      `;

      script.type = "text/javascript";
      script.src = `//www.highperformanceformat.com/${AD_KEY}/invoke.js`;

      // These will now work because TypeScript knows it's a div
      adContainer.current.append(config);
      adContainer.current.append(script);
    }
  }, []);

  return (
    <div
      ref={adContainer}
      className="flex justify-center my-4 min-h-12.5 w-full"
    />
  );
}
