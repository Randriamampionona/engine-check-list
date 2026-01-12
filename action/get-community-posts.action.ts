"use server";

import { admin_db } from "@/lib/firebaseAdmin";

const PAGE_SIZE = 15;

export type GetCommunityPostsResult = {
  posts: any[];
  nextCursor: string | null;
};

export async function getCommunityPosts(
  cursor?: string
): Promise<GetCommunityPostsResult> {
  let query = admin_db
    .collection("COMMUNITY_POSTS")
    .orderBy("createdAt", "desc")
    .limit(PAGE_SIZE);

  // Pagination
  if (cursor) {
    const cursorDoc = await admin_db
      .collection("COMMUNITY_POSTS")
      .doc(cursor)
      .get();

    if (cursorDoc.exists) {
      query = query.startAfter(cursorDoc);
    }
  }

  const snapshot = await query.get();

  const posts = snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));

  const lastDoc = snapshot.docs[snapshot.docs.length - 1];

  return {
    posts,
    nextCursor: lastDoc ? lastDoc.id : null,
  };
}
