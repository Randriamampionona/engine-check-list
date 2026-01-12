"use client";

import { useState, useTransition } from "react";
import { useUser } from "@clerk/nextjs";
import { createCommunityPost } from "@/action/create-community-post.action";
import { useRouter } from "next/navigation";

export default function CreatePostForm() {
  const { user } = useUser();
  const router = useRouter();

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [isPending, startTransition] = useTransition();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!user) return;

    startTransition(async () => {
      try {
        await createCommunityPost({
          title,
          Details: content,
          owner: {
            id: user.id,
            name:
              user.fullName ??
              user.username ??
              user.emailAddresses[0]?.emailAddress ??
              "Anonymous",
            avatarUrl: user.imageUrl,
          },
        });

        // Reset form
        setTitle("");
        setContent("");

        // Redirect after success
        router.push("/community");
      } catch (error) {
        console.error("Failed to create community post:", error);
        // Optional: show toast / error state here
      }
    });
  };

  return (
    <section className="p-6">
      {/* Header */}
      <div className="mb-6 space-y-1">
        <h1 className="text-xl font-semibold text-foreground">
          Create a new post
        </h1>
        <p className="text-sm text-muted-foreground">
          Ask a question, share an idea, or request help from the community.
        </p>
      </div>

      {/* Form */}
      <form className="space-y-6" onSubmit={handleSubmit}>
        {/* Title */}
        <div className="space-y-1">
          <label className="text-sm font-medium text-foreground">Title</label>
          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Be specific and clear"
            className="w-full rounded border bg-background px-3 py-2
              text-sm outline-none
              focus:ring-2 focus:ring-teal-500/40"
          />
        </div>

        {/* Content */}
        <div className="space-y-1">
          <label className="text-sm font-medium text-foreground">Details</label>
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder="Explain your problem or idea in detail..."
            rows={6}
            className="w-full resize-none rounded border bg-background px-3 py-2
              text-sm outline-none
              focus:ring-2 focus:ring-teal-500/40"
          />
        </div>

        {/* Footer */}
        <div className="flex items-center justify-end gap-3 pt-4 border-t">
          <button
            type="button"
            className="text-sm text-muted-foreground hover:text-foreground transition"
            onClick={() => {
              setTitle("");
              setContent("");
            }}
          >
            Cancel
          </button>

          <button
            type="submit"
            className="inline-flex items-center rounded-full
              bg-teal-500 px-5 py-2
              text-sm font-semibold text-white
              hover:bg-teal-600
              transition disabled:opacity-50"
            disabled={!title || !content || isPending}
          >
            {isPending ? "Publishing..." : "Publish"}
          </button>
        </div>
      </form>
    </section>
  );
}
