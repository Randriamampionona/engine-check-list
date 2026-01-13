"use client";

import { addReplyToPost } from "@/action/add-reply-to-post.action";
import { deleteCommunityPost } from "@/action/delete-community-post.action";
import { cn } from "@/lib/utils";
import { CommunityPost } from "@/typing";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useUser } from "@clerk/nextjs";
import { Trash2 } from "lucide-react";

type CommunityPostCardProps = {
  post: CommunityPost;
  isOnSinglePostPage?: boolean;
};

export default function CommunityPostCard({
  post,
  isOnSinglePostPage = false,
}: CommunityPostCardProps) {
  const { user } = useUser();
  const router = useRouter();

  const isOwner = user?.id === post.owner.id;

  const [showReplyForm, setShowReplyForm] = useState(false);
  const [replyContent, setReplyContent] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  const handleReplyToggle = () => setShowReplyForm((prev) => !prev);

  const handleReplySubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!replyContent.trim()) return;

    try {
      await addReplyToPost({
        postId: post.id,
        content: replyContent,
      });

      setReplyContent("");
      setShowReplyForm(false);
    } catch (error) {
      console.error("Failed to submit reply:", error);
    }
  };

  // 🗑️ Delete handler
  const handleDeletePost = async () => {
    const confirmed = window.confirm(
      "Are you sure you want to delete this post?\nThis action cannot be undone."
    );

    if (!confirmed) return;

    try {
      setIsDeleting(true);
      await deleteCommunityPost({ postId: post.id });

      // Redirect safely
      router.push("/community");
      router.refresh();
    } catch (error) {
      console.error("Failed to delete post:", error);
      alert("Failed to delete post. Please try again.");
    } finally {
      setIsDeleting(false);
    }
  };

  return (
    <article
      className={cn(
        "p-5 transition",
        isOnSinglePostPage ? "border-0 border-b" : "border rounded-xl"
      )}
    >
      {/* Header */}
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-3">
          <div className="relative h-8 w-8 overflow-hidden rounded-full bg-muted">
            {post.owner.avatarUrl && (
              <Image
                src={post.owner.avatarUrl}
                alt={post.owner.name}
                fill
                className="object-cover"
              />
            )}
          </div>

          <div className="flex flex-col">
            <span className="text-sm font-medium text-foreground">
              {post.owner.name}
            </span>
            <span className="text-xs text-muted-foreground">
              {post.createdAt?.toDate?.().toLocaleString() ?? "—"}
            </span>
          </div>
        </div>

        {/* 🟢 PRO delete button (owner only) */}
        {isOwner && (
          <button
            onClick={handleDeletePost}
            disabled={isDeleting}
            className="
              inline-flex items-center gap-1
              text-xs font-semibold
              px-3 py-1.5 rounded-full
              border border-red-500/30
              text-red-500
              hover:bg-red-500/10
              transition
            "
          >
            <Trash2 size={14} />
            {isDeleting ? "Deleting..." : "Delete"}
          </button>
        )}
      </div>

      {/* Content */}
      <div className="space-y-2">
        <h3 className="text-base font-semibold text-foreground">
          {post.title}
        </h3>

        <p className="text-sm text-muted-foreground line-clamp-3">
          {post.Details}
        </p>
      </div>

      {/* Footer */}
      <div className="mt-4 flex items-center justify-between text-xs text-muted-foreground">
        <span>{post.reply?.length ?? 0} replies</span>

        {isOnSinglePostPage ? (
          <button
            type="button"
            onClick={handleReplyToggle}
            className="inline-flex items-center gap-1 rounded-full bg-teal-500/10 px-4 py-1.5 text-sm font-semibold text-teal-500 hover:bg-teal-500/20 transition"
          >
            Reply
          </button>
        ) : (
          <Link href={`/community/post/${post.id}`}>
            <span className="hover:text-foreground cursor-pointer transition">
              View discussion →
            </span>
          </Link>
        )}
      </div>

      {/* Inline reply form */}
      {showReplyForm && (
        <form onSubmit={handleReplySubmit} className="mt-4 space-y-2">
          <textarea
            value={replyContent}
            onChange={(e) => setReplyContent(e.target.value)}
            rows={3}
            placeholder="Write your reply..."
            className="w-full rounded-lg border bg-background px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-teal-500/40 resize-none"
          />
          <div className="flex justify-end gap-2">
            <button
              type="button"
              onClick={handleReplyToggle}
              className="px-4 py-1.5 text-sm font-medium text-muted-foreground hover:text-foreground transition rounded-full"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-1.5 text-sm font-semibold text-white bg-teal-500 rounded-full hover:bg-teal-600 transition"
            >
              Post Reply
            </button>
          </div>
        </form>
      )}
    </article>
  );
}
