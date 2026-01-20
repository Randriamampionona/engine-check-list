import MobileBanner300 from "@/components/ad/mobile-banner-300";
import AdsterraNativeBar from "@/components/ad/adsterra-native-bar";
import SinglePost from "@/components/community/single-post";

type Props = {
  params: Promise<{ id: string }>;
};

export default async function PostPage({ params }: Props) {
  const { id: postId } = await params;

  return (
    <main className="mx-auto w-full min-h-full max-w-3xl px-4 py-10 space-y-8 mt-16">
      {/* Individual post */}
      <SinglePost postId={postId} />
      <AdsterraNativeBar />
      <MobileBanner300 />
    </main>
  );
}
