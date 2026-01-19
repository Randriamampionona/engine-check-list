import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Navbar from "@/components/navbar";
import { Suspense } from "react";
import Footer from "@/components/footer";
import { Loader2 } from "lucide-react";
import Script from "next/script";
import { ClerkProvider } from "@clerk/nextjs";
import FloatingAdCTA from "@/components/floating-ad-cta";
import InPagePush from "@/components/ad/in-page-push";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Check-eo",
  description: "Engine maintenance checklist for your scooter",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <head>
          <meta
            name="17d67f7b11184bf7b75fbc46af746693b82f75bb"
            content="17d67f7b11184bf7b75fbc46af746693b82f75bb"
          />
          <meta name="referrer" content="no-referrer-when-downgrade" />
        </head>
        <body
          className={`${geistSans.variable} ${geistMono.variable} ok antialiased h-screen`}
        >
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            <Suspense
              fallback={
                <div className="flex items-center justify-start space-x-1">
                  <Loader2 size={16} className="animate-spin" />
                  <p>Loading...</p>
                </div>
              }
            >
              <Navbar />
            </Suspense>
            {children}
            <Footer />
            <FloatingAdCTA />
          </ThemeProvider>
          <Script
            src="https://pl28463302.effectivegatecpm.com/7c/54/98/7c5498b040473b02235b36a5e30dd1ad.js"
            strategy="afterInteractive"
          />
          <InPagePush />
        </body>
      </html>
    </ClerkProvider>
  );
}
