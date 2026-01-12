"use server";

import { admin_db } from "@/lib/firebaseAdmin";
import { currentUser } from "@clerk/nextjs/server";

type ToggleReplyLikeInput = {
  postId: string;
  replyId: string;
};

export async function toggleReplyLike({
  postId,
  replyId,
}: ToggleReplyLikeInput) {
  // Get the authenticated user from Clerk
  const user = await currentUser();
  if (!user) {
    throw new Error("User not authenticated");
  }

  const postRef = admin_db.collection("COMMUNITY_POSTS").doc(postId);
  const postSnap = await postRef.get();
  if (!postSnap.exists) {
    throw new Error("Post not found");
  }

  const postData = postSnap.data()!;
  const replies = postData.reply || [];

  // Find the reply to update
  const replyIndex = replies.findIndex((r: any) => r.id === replyId);
  if (replyIndex === -1) {
    throw new Error("Reply not found");
  }

  const reply = replies[replyIndex];
  const hasLiked = reply.owner.likes?.some((l: any) => l.likerId === user.id);

  let updatedLikes;
  if (hasLiked) {
    // Remove like
    updatedLikes = reply.owner.likes.filter((l: any) => l.likerId !== user.id);
  } else {
    // Add like
    updatedLikes = [...(reply.owner.likes || []), { likerId: user.id }];
  }

  // Update the reply's likes
  replies[replyIndex].owner.likes = updatedLikes;

  // Update the post in Firestore
  await postRef.update({
    reply: replies,
  });

  return {
    success: true,
    liked: !hasLiked,
    replyId,
    likeCount: updatedLikes.length,
    updatedLikes,
  };
}
