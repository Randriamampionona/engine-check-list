import HilltopadsMobileBanner300 from "@/components/ad/hilltop-mobile-banner-300";
import AdsterraNativeBar from "@/components/ad/adsterra-native-bar";
import CommunityFeed from "@/components/community/community-feed";
import CreatePostCTA from "@/components/community/create-post-CTA";
import AadsAdaptive from "@/components/ad/aads-adaptive";

export default function CommunityPage() {
  return (
    <>
      <main className="mx-auto w-full min-h-full max-w-3xl px-4 py-10 space-y-10 my-16">
        <CreatePostCTA />
        <CommunityFeed />
        <AdsterraNativeBar />
        <AadsAdaptive />
        <HilltopadsMobileBanner300 />
      </main>
    </>
  );
}
