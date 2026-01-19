"use client";

import { Download, Smartphone } from "lucide-react";
import Link from "next/link";

type Props = {
  href?: string;
  label?: string;
};

export default function DownloadAppButton({
  href = "https://github.com/Randriamampionona/engine-check-list/releases/download/v1.0.0/CheckEO.apk",
  label = "Download for Android",
}: Props) {
  return (
    <Link
      href={href}
      className="
        group relative inline-flex items-center gap-3
        overflow-hidden rounded-2xl
        bg-white px-8 py-4
        text-sm font-bold tracking-tight text-black
        transition-all duration-300 ease-out
        hover:scale-[1.02] hover:bg-zinc-50
        active:scale-95
        dark:bg-white dark:text-black
      "
    >
      {/* Moving Shimmer Effect */}
      <div className="absolute inset-0 -translate-x-full bg-linear-to-r from-transparent via-black/5 to-transparent transition-transform duration-1000 group-hover:translate-x-full" />

      {/* Subtle Border */}
      <div className="absolute inset-0 rounded-2xl border border-black/10 transition-colors group-hover:border-black/20" />

      <div className="relative flex items-center gap-3">
        <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-black text-white shadow-md">
          <Smartphone className="h-4 w-4" />
        </div>

        <div className="flex flex-col items-start leading-none">
          <span className="text-[10px] uppercase opacity-50 tracking-widest">
            Available Now
          </span>
          <span className="text-base">{label}</span>
        </div>

        <Download className="ml-2 h-5 w-5 opacity-30 transition-all group-hover:translate-y-0.5 group-hover:opacity-100" />
      </div>
    </Link>
  );
}
