"use client";
import Script from "next/script";

export default function AdsterraNativeBar() {
  const adId = "da7ee0516817cc741279dfbfc0a6800e";

  return (
    <div className="w-full flex flex-col items-center justify-center py-6">
      <div className="w-full max-w-250 flex items-center gap-2 mb-2 opacity-60">
        <span className="text-[10px] font-semibold uppercase tracking-widest text-muted-foreground whitespace-nowrap">
          Advertisement
        </span>
        <div className="h-px w-full bg-border" />
      </div>

      <div
        id={`container-${adId}`}
        className="w-full max-w-250 min-h-50 bg-secondary/5 rounded-lg border border-border/50 overflow-hidden"
      >
        {/* Adsterra will inject here */}
      </div>

      <Script
        id={`adsterra-native-${adId}`}
        src={`https://superioroptionaleveryone.com/${adId}/invoke.js`}
        strategy="afterInteractive"
        data-cfasync="false"
      />
    </div>
  );
}
