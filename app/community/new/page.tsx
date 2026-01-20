import HilltopadsMobileBanner300 from "@/components/ad/hilltop-mobile-banner-300";
import AdsterraNativeBar from "@/components/ad/adsterra-native-bar";
import CreatePostForm from "@/components/community/create-post-form";
import AadsAdaptive from "@/components/ad/aads-adaptive";

export default function NewPage() {
  return (
    <main className="mx-auto w-full min-h-full max-w-3xl px-4 py-10 mt-16">
      <CreatePostForm />
      <AdsterraNativeBar />
      <AadsAdaptive />
      <HilltopadsMobileBanner300 />
    </main>
  );
}
