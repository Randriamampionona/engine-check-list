"use client";

import { useEffect, useRef, useState } from "react";
import { useUser } from "@clerk/nextjs";
import { toggleReplyLike } from "@/action/toggle-reply-like.action";
import type { CommunityReply } from "@/typing";
import Image from "next/image";

type DiscussionRepliesProps = {
  replies?: CommunityReply[];
  postId: string;
};

export default function DiscussionReplies({
  replies,
  postId,
}: DiscussionRepliesProps) {
  const { user } = useUser(); // get the authenticated user
  const currentUserId = user?.id;

  const [localReplies, setLocalReplies] = useState(replies || []);
  const bottomRef = useRef<HTMLDivElement>(null);
  const orderedReplyIdsRef = useRef<string[] | null>(null);

  // Keep track of initial load to prevent scrolling on reload
  const initialLengthRef = useRef(localReplies.length);

  // Sync local state whenever prop changes
  useEffect(() => {
    setLocalReplies(replies || []);
  }, [replies]);

  // Scroll to bottom only when new reply is added
  useEffect(() => {
    if (localReplies.length > initialLengthRef.current) {
      bottomRef.current?.scrollIntoView({ behavior: "smooth" });
    }
    initialLengthRef.current = localReplies.length;
  }, [localReplies]);

  if (!localReplies || localReplies.length === 0)
    return (
      <div className="rounded-xl border border-dashed p-6 text-center">
        <p className="text-sm text-muted-foreground">No replies yet.</p>
      </div>
    );

  // Sort by number of likes descending, then by newest first
  // Freeze initial order (only once, after reload)
  const sortedReplies = (() => {
    if (!orderedReplyIdsRef.current) {
      orderedReplyIdsRef.current = [...localReplies]
        .sort((a, b) => {
          const likesDiff =
            (b.owner.likes?.length || 0) - (a.owner.likes?.length || 0);
          if (likesDiff !== 0) return likesDiff;
          return b.createdAt.seconds - a.createdAt.seconds;
        })
        .map((r) => r.id);
    }

    return orderedReplyIdsRef.current
      .map((id) => localReplies.find((r) => r.id === id))
      .filter(Boolean) as CommunityReply[];
  })();

  const handleLikeToggle = async (reply: CommunityReply) => {
    try {
      const result = await toggleReplyLike({ postId, replyId: reply.id });

      // Use the real updated likes array from the server
      setLocalReplies((prev) =>
        prev.map((r) =>
          r.id === reply.id
            ? { ...r, owner: { ...r.owner, likes: result.updatedLikes } }
            : r
        )
      );
    } catch (err) {
      console.error("Error toggling like:", err);
    }
  };

  return (
    <div className="space-y-4">
      {sortedReplies.map((reply) => {
        // Check if current user liked this reply
        const hasLiked = currentUserId
          ? reply.owner.likes.some((l) => l.likerId === currentUserId)
          : false;

        return (
          <div
            key={reply.id}
            className="flex flex-col gap-2 rounded-lg border p-4 transition hover:shadow-sm"
          >
            <div className="flex gap-3">
              <div className="relative h-8 w-8 overflow-hidden rounded-full bg-muted">
                {reply.owner.avatarUrl && (
                  <Image
                    src={reply.owner.avatarUrl}
                    alt={reply.owner.name}
                    fill
                    className="object-cover"
                  />
                )}
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-foreground">
                    {reply.owner.name}
                  </span>
                  <span className="text-xs text-muted-foreground">
                    {reply.createdAt?.toDate?.().toLocaleString() ?? "—"}
                  </span>
                </div>
                <p className="text-sm text-muted-foreground mt-1">
                  {reply.content}
                </p>
              </div>
            </div>

            <div className="flex justify-end">
              <button
                type="button"
                onClick={() => handleLikeToggle(reply)}
                className={`inline-flex items-center gap-1 text-xs font-semibold px-2 py-1 rounded-full transition ${
                  hasLiked
                    ? "bg-teal-500 text-white hover:bg-teal-600"
                    : "bg-muted text-muted-foreground hover:bg-gray-200"
                }`}
              >
                ❤️ {reply.owner.likes.length}
              </button>
            </div>
          </div>
        );
      })}
      {/* Dummy div to scroll into view */}
      <div ref={bottomRef} />
    </div>
  );
}
