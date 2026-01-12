"use client";

import { useEffect, useState } from "react";
import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import { db } from "@/lib/firebase";
import CommunityPostCard from "./community-postcard";
import { CommunityPost } from "@/typing";

export default function CommunityFeed() {
  const [posts, setPosts] = useState<CommunityPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const q = query(
      collection(db, "COMMUNITY_POSTS"),
      orderBy("createdAt", "desc")
    );

    const unsubscribe = onSnapshot(q, (snapshot) => {
      const data = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...(doc.data() as Omit<CommunityPost, "id">),
      }));

      setPosts(data);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  if (loading) {
    return <p className="text-sm text-muted-foreground">Loading posts…</p>;
  }

  if (posts.length === 0) {
    return (
      <div className="rounded-xl border border-dashed p-6 text-center">
        <p className="text-sm text-muted-foreground">No posts yet.</p>
      </div>
    );
  }

  return (
    <section className="space-y-4">
      {posts.map((post) => (
        <CommunityPostCard key={post.id} post={post} />
      ))}
    </section>
  );
}
