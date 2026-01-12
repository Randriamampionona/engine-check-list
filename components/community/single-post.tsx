// SinglePost.tsx
"use client";

import { useEffect, useState } from "react";
import { doc, onSnapshot } from "firebase/firestore";
import { db } from "@/lib/firebase";
import type { CommunityPost } from "@/typing";
import CommunityPostCard from "./community-postcard";
import DiscussionReplies from "./discussion-replies";

type TProps = { postId: string };

export default function SinglePost({ postId }: TProps) {
  const [post, setPost] = useState<CommunityPost | null>(null);

  useEffect(() => {
    if (!postId) return;

    const postRef = doc(db, "COMMUNITY_POSTS", postId);

    // Subscribe to live updates
    const unsubscribe = onSnapshot(postRef, (snapshot) => {
      if (snapshot.exists()) {
        const data = snapshot.data() as CommunityPost;
        setPost({ ...data, id: snapshot.id });
      }
    });

    return () => unsubscribe();
  }, [postId]);

  if (!post)
    return (
      <div className="rounded-xl border border-dashed p-6 text-center">
        <p className="text-sm text-muted-foreground">Loading post...</p>
      </div>
    );

  return (
    <div className="space-y-4">
      <CommunityPostCard post={post} isOnSinglePostPage />
      <DiscussionReplies postId={postId} replies={post.reply} />
    </div>
  );
}
