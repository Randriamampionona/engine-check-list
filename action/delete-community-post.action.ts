"use server";

import { admin_db } from "@/lib/firebaseAdmin";
import { currentUser } from "@clerk/nextjs/server";

type DeleteCommunityPostInput = {
  postId: string;
};

export async function deleteCommunityPost({
  postId,
}: DeleteCommunityPostInput) {
  // 1?? Get authenticated user
  const user = await currentUser();
  if (!user) {
    throw new Error("Unauthorized");
  }

  // 2?? Fetch post
  const postRef = admin_db.collection("/COMMUNITY_POSTS").doc(postId);
  const postSnap = await postRef.get();

  if (!postSnap.exists) {
    throw new Error("Post not found");
  }

  const postData = postSnap.data();

  // 3?? Ownership check
  if (postData?.owner?.id !== user.id) {
    throw new Error("Forbidden: You can only delete your own post");
  }

  // 4?? Delete post
  await postRef.delete();

  return {
    success: true,
    postId,
  };
}
