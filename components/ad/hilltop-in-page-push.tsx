"use client";
import { useEffect } from "react";

export default function HilltopadsHilltopadsInPagePush() {
  useEffect(() => {
    const script = document.createElement("script");

    // Updated URL from your new MultiTag In-page Push code
    script.src =
      "//excitedzone.com/bnXIV.szdMGil/0cYWWFco/Keum/9GuaZ/U/lJk/PiT/YA3cNWT/I/3/OWTYg_tNNCj/cx1GMkjGc_5WOMQn";
    script.async = true;
    script.referrerPolicy = "no-referrer-when-downgrade";

    // HilltopAds settings object
    (script as any).settings = {};

    // Append to the body to ensure it doesn't block the initial render
    document.body.appendChild(script);

    return () => {
      // Cleanup: remove the script if the component unmounts to prevent memory leaks
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  return null; // This component handles the background script and renders no UI
}
