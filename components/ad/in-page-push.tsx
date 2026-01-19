"use client";
import { useEffect } from "react";

export default function InPagePush() {
  useEffect(() => {
    const script = document.createElement("script");

    // This is the unique source URL from your snippet
    script.src =
      "//prickly-tradition.com/b.XRVYsEd/GOlc0nYDWtcd/FeTmx9AunZ/UClLk/PWTOYN3TNbTtE/1SM/TWI-tYNgjIcY1CMbTIUexPMvwz";
    script.async = true;
    script.referrerPolicy = "no-referrer-when-downgrade";

    // HilltopAds settings object (empty in your snippet)
    (script as any).settings = {};

    // Append to the body to ensure it doesn't block the initial render
    document.body.appendChild(script);

    return () => {
      // Cleanup: remove the script if the component unmounts
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  return null; // This component doesn't render anything visible
}
