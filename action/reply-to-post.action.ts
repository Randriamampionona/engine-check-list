import { admin_db } from "@/lib/firebaseAdmin";
import { CommunityReply } from "@/typing";
import { FieldValue, Timestamp } from "firebase-admin/firestore";

export async function addReplyToPost(postId: string, reply: CommunityReply) {
  const ref = admin_db.collection("COMMUNITY_POSTS").doc(postId);

  await ref.update({
    reply: FieldValue.arrayUnion({
      ...reply,
      createdAt: Timestamp.now(),
    }),
  });
}
