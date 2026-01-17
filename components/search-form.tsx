"use client";

import { useState } from "react";
import { Search, Loader2, ArrowRight } from "lucide-react";
import { useRouter } from "next/navigation";

export default function SearchForm() {
  const router = useRouter();
  const [searchTerm, setSearchTerm] = useState("");
  const [isSearching, setIsSearching] = useState(false);

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!searchTerm.trim()) return;

    setIsSearching(true);
    const lang = localStorage.getItem("lang") || "en";
    router.push(`/r/${encodeURIComponent(searchTerm.trim())}?lang=${lang}`);
  };

  return (
    <div className="max-w-md mx-auto my-6">
      <form onSubmit={onSubmit} className="relative">
        <label htmlFor="search" className="sr-only">
          Search engine checklist
        </label>

        <div className="relative group">
          {/* Left Icon */}
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Search className="w-5 h-5 text-muted-foreground" />
          </div>

          {/* Input */}
          <input
            id="search"
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search for engine checklist..."
            disabled={isSearching}
            className="
              block w-full pl-10 pr-12 py-3
              rounded-xl border border-border
              bg-background text-foreground
              shadow-sm
              focus:ring-2 focus:ring-teal-500/40 focus:border-teal-500
              transition-all
              hover:shadow-md
              disabled:opacity-70 disabled:cursor-not-allowed
            "
          />

          {/* Right CTA */}
          <button
            type="submit"
            disabled={!searchTerm.trim() || isSearching}
            className="
              absolute inset-y-1 right-1
              flex items-center justify-center
              rounded-lg
              bg-linear-to-br from-teal-500 to-emerald-500
              px-3
              text-white
              shadow-md shadow-teal-500/25
              transition-all
              hover:scale-[1.03] hover:shadow-lg hover:shadow-teal-500/30
              active:scale-95
              disabled:opacity-50 disabled:pointer-events-none
            "
            aria-label="Search"
          >
            {isSearching ? (
              <Loader2 className="w-4 h-4 animate-spin" />
            ) : (
              <ArrowRight className="w-4 h-4" />
            )}
          </button>
        </div>
      </form>
    </div>
  );
}
