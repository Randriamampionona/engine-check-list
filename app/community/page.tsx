import MobileBanner300 from "@/components/ad/mobile-banner-300";
import NativeBar from "@/components/ad/native-bar";
import CommunityFeed from "@/components/community/community-feed";
import CreatePostCTA from "@/components/community/create-post-CTA";

export default function CommunityPage() {
  return (
    <>
      <main className="mx-auto w-full min-h-full max-w-3xl px-4 py-10 space-y-10 my-16">
        <CreatePostCTA />
        <CommunityFeed />
        <NativeBar />
        <MobileBanner300 />
      </main>
    </>
  );
}
