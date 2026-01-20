import type { Metadata, Viewport } from "next"; // Added Viewport type
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
import HilltopadsInPagePush from "@/components/ad/hilltop-in-page-push";
import AdsterraSocialBar from "@/components/ad/adsterra-social-bar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

// 1. Updated Metadata for PWA
export const metadata: Metadata = {
  title: "Check-eo",
  description: "Engine maintenance checklist for your scooter",
  appleWebApp: {
    capable: true,
    statusBarStyle: "black-translucent",
    title: "Check-eo",
  },
  formatDetection: {
    telephone: false,
  },
};

// 2. New Viewport export (Modern Next.js way)
export const viewport: Viewport = {
  themeColor: "#000000",
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en" suppressHydrationWarning>
        {/* hilltopads meta tags */}
        <head>
          <meta
            name="690c04c80ba48dc169be33e3f8c81b9a644bed39"
            content="690c04c80ba48dc169be33e3f8c81b9a644bed39"
          />
          <meta name="referrer" content="no-referrer-when-downgrade" />
        </head>
        {/* hilltopads meta tags */}

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

          <AdsterraSocialBar />
          <HilltopadsInPagePush />
        </body>
      </html>
    </ClerkProvider>
  );
}
