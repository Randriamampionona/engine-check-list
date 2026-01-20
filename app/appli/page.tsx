import Link from "next/link";
import { Smartphone, Download } from "lucide-react";
import DownloadAppButton from "@/components/download-app-button";
import AdsterraNativeBar from "@/components/ad/adsterra-native-bar";
import HilltopadsMobileBanner300 from "@/components/ad/hilltop-mobile-banner-300";

export default function AppliPage() {
  return (
    <main className="max-w-5xl w-full min-h-full mx-auto px-6 py-20">
      <div className="space-y-20 mb-16">
        {/* Hero */}
        <section className="text-center space-y-5">
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight">
            Get the Check-eo App
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Faster access, offline checklists, smoother experience — built for
            riders who care about reliability and performance.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <DownloadAppButton />
          </div>
        </section>

        {/* Features */}
        <section className="grid md:grid-cols-2 gap-10 text-center">
          <div className="space-y-3">
            <h3 className="font-semibold">Faster workflow</h3>
            <p className="text-sm text-muted-foreground">
              Designed for speed and clarity on mobile.
            </p>
          </div>

          <div className="space-y-3">
            <h3 className="font-semibold">Built by heart ❤️</h3>
            <p className="text-sm text-muted-foreground">
              No VC funding, no tracking tricks — just a useful tool.
            </p>
          </div>
        </section>
      </div>

      <AdsterraNativeBar />
      <HilltopadsMobileBanner300 />
    </main>
  );
}
