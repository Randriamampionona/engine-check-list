"use client";
import Script from "next/script";

export default function AdsterraSocialBar() {
  return (
    <Script
      id="adsterra-social-bar-js"
      src="https://superioroptionaleveryone.com/e9/d9/f5/e9d9f506204242b51018227e5c85ffb1.js"
      strategy="afterInteractive"
      data-cfasync="false"
      onError={(e) => {
        console.error("Adsterra Social Bar failed to load", e);
      }}
    />
  );
}
