import MobileBanner300 from "@/components/ad/mobile-banner-300";
import NativeBar from "@/components/ad/native-bar";
import CreatePostForm from "@/components/community/create-post-form";

export default function NewPage() {
  return (
    <main className="mx-auto w-full min-h-full max-w-3xl px-4 py-10 mt-16">
      <CreatePostForm />
      <NativeBar />
      <MobileBanner300 />
    </main>
  );
}
