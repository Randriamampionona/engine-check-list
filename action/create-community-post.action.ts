"use server";

import { admin_db } from "@/lib/firebaseAdmin";
import { CommunityPost } from "@/typing";
import { Timestamp } from "firebase-admin/firestore";

export async function createCommunityPost(
  data: Omit<CommunityPost, "id" | "createdAt" | "reply">
) {
  const ref = admin_db.collection("COMMUNITY_POSTS").doc();

  const post: CommunityPost = {
    id: ref.id,
    title: data.title,
    Details: data.Details,
    owner: data.owner,
    reply: [],
    createdAt: Timestamp.now(),
  };

  await ref.set(post);

  return { success: true, postId: ref.id };
}
