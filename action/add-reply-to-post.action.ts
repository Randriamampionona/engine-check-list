"use server";

import { admin_db } from "@/lib/firebaseAdmin";
import { Timestamp, FieldValue } from "firebase-admin/firestore";
import { auth, currentUser } from "@clerk/nextjs/server";

type AddReplyInput = {
  postId: string;
  content: string;
};

export async function addReplyToPost({ postId, content }: AddReplyInput) {
  if (!content.trim()) {
    throw new Error("Reply content is empty");
  }

  const { userId } = await auth();
  if (!userId) {
    throw new Error("Unauthorized");
  }

  const user = await currentUser();
  if (!user) {
    throw new Error("User not found");
  }

  const reply = {
    id: crypto.randomUUID(),
    content,
    createdAt: Timestamp.now(),
    owner: {
      id: user.id,
      name: user.fullName ?? user.username ?? "Anonymous",
      avatarUrl: user.imageUrl ?? "",
      likes: [],
    },
  };

  const postRef = admin_db.collection("COMMUNITY_POSTS").doc(postId);

  await postRef.update({
    reply: FieldValue.arrayUnion(reply),
  });

  return { success: true };
}
