"use client";

import Link from "next/link";

export default function CreatePostCTA() {
  return (
    <section className="border-b pb-4">
      <div className="flex items-center justify-between gap-4">
        <div>
          <h2 className="text-sm font-semibold text-foreground">
            Ask the community
          </h2>
          <p className="text-xs text-muted-foreground">
            Share a question, tip, or issue.
          </p>
        </div>

        <Link
          href="/community/new"
          className="inline-flex items-center rounded-full
            bg-teal-500/15 px-4 py-2
            text-sm font-medium text-teal-400
            hover:bg-teal-500/25
            transition"
        >
          Create post
        </Link>
      </div>
    </section>
  );
}
