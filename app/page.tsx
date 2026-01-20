import MobileBanner300 from "@/components/ad/mobile-banner-300";
import AdsterraNativeBar from "@/components/ad/adsterra-native-bar";
import Heading from "@/components/heading";
import SearchForm from "@/components/search-form";
import DownloadAppButton from "@/components/download-app-button";
import Link from "next/link";
import DownloadAppLink from "@/components/download-app-link";
import AadsAdaptive from "@/components/ad/aads-adaptive";

export default function Home() {
  return (
    <>
      <main className="flex md:items-center justify-center flex-col h-full w-full">
        <div className="max-w-3xl mx-auto p-6 mt-16 md:mt-0 text-center">
          <Heading />

          <p className="text-gray-700 text-lg max-w-xl mx-auto">
            Keep your scooter in top shape! Explore the full engine maintenance
            checklist for each model to ensure peak performance and reliability.
          </p>

          {/* 🔥 Modern App CTA */}
          <DownloadAppLink />

          <SearchForm />
        </div>
      </main>

      <AdsterraNativeBar />
      <AadsAdaptive />
      <MobileBanner300 />
    </>
  );
}
