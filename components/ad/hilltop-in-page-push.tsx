"use client";
import Script from "next/script";

export default function HilltopadsInPagePush() {
  // Your unique ID from the HilltopAds snippet
  const adId = "hilltop-inpage-push";

  return (
    <Script
      id={adId}
      /* Using the NEW source URL from your updated snippet */
      src="//excitedzone.com/bAXoVis.d/G/lf0/YqWScX/HeEmt9wuwZOUJllkiPsTNYn3rNHT/IM3pO/TCg_t/NwjKck1kM/j/cO5kOnQc"
      strategy="afterInteractive"
      referrerPolicy="no-referrer-when-downgrade"
      onReady={() => {
        /* HilltopAds in-page push scripts are self-executing. 
           onReady ensures that every time you navigate back to a page 
           with this component, Next.js checks if the script is active.
        */
        console.log("HilltopAds In-Page Push Ready");
      }}
    />
  );
}
