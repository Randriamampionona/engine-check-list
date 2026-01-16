import CommunityFeed from "@/components/community/community-feed";
import CreatePostCTA from "@/components/community/create-post-CTA";
import NativeBanner from "@/components/native-banner";

export default function CommunityPage() {
  return (
    <main className="mx-auto w-full min-h-full max-w-3xl px-4 py-10 space-y-10 my-16">
      <CreatePostCTA />
      <CommunityFeed />
      {/* BEST PLACEMENT: Right after the tool ends */}
      <NativeBanner />
    </main>
  );
}
