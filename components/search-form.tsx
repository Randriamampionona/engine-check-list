"use client";

import { useState } from "react";
import { Search, Loader2 } from "lucide-react";
import { useRouter } from "next/navigation";

export default function SearchForm() {
  const router = useRouter();
  const [searchTerm, setSearchTerm] = useState("");
  const [isSearching, setIsSearching] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!searchTerm.trim()) return;

    setIsSearching(true);

    const lang = localStorage.getItem("lang") || "en";

    router.push(`/r/${encodeURIComponent(searchTerm.trim())}?lang=${lang}`);
  };

  return (
    <div className="max-w-md mx-auto my-6">
      <form onSubmit={onSubmit}>
        <label htmlFor="search" className="sr-only">
          Search engine checklist
        </label>

        <div className="relative">
          {/* Left Icon */}
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Search className="w-5 h-5 text-gray-400" />
          </div>

          {/* Input */}
          <input
            type="text"
            id="search"
            value={searchTerm}
            onChange={handleInputChange}
            placeholder="Search for engine checklist..."
            disabled={isSearching}
            className={`block w-full pl-10 pr-10 py-3 rounded-lg border
              border-gray-300 focus:ring-2 focus:ring-teal-400 focus:border-teal-400
              text-foreground placeholder-gray-400 shadow-sm
              transition-all duration-200 hover:shadow-md
              ${isSearching ? "opacity-70 cursor-not-allowed" : ""}`}
          />

          {/* Right Spinner */}
          {isSearching && (
            <div className="absolute inset-y-0 right-0 pr-3 flex items-center">
              <Loader2 className="w-5 h-5 text-teal-500 animate-spin" />
            </div>
          )}
        </div>

        <button type="submit" hidden />
      </form>
    </div>
  );
}
