import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Navbar from "@/components/navbar";
import { Suspense } from "react";
import Footer from "@/components/footer";
import { Loader2 } from "lucide-react";
import {
  ClerkProvider,
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";
import Script from "next/script";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Check-eo",
  description: "Engiene maintenance checklist for your scooter",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased h-screen`}
        >
          <Script
            src="https://pl28463199.effectivegatecpm.com/73/ff/35/73ff3588738e1da2e46ad52af0594211.js"
            strategy="afterInteractive"
          />
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
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
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
