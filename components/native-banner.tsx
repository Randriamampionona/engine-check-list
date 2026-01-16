"use client";
import { useEffect, useRef } from "react";

export default function NativeBanner() {
  const nativeContainer = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Prevents the script from loading multiple times during Fast Refresh
    if (nativeContainer.current && !nativeContainer.current.firstChild) {
      const script = document.createElement("script");

      // Replace this with YOUR actual Native Banner Key from Adsterra
      const NATIVE_KEY = "7032b1177c66d6cec15a27b4924bd91a";

      script.async = true;
      script.dataset.cfasync = "false";
      script.src = `https://pl28489403.effectivegatecpm.com/${NATIVE_KEY}/invoke.js`;

      nativeContainer.current.append(script);
    }
  }, []);

  return (
    <div className="w-full my-8 flex flex-col items-center px-4">
      {/* Small label makes it look like a "feature" instead of a "spammy ad" */}
      <div
        className="w-full }
 flex items-center justify-between mb-2"
      >
        <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">
          Recommended for you
        </span>
        <div className="h-px grow ml-3 bg-border opacity-50" />
      </div>

      <div
        ref={nativeContainer}
        id="container-7032b1177c66d6cec15a27b4924bd91a"
        className="w-full }
 min-h-[250px] rounded-xl overflow-hidden shadow-sm border border-border"
      />
    </div>
  );
}
