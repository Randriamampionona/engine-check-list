import CreatePostForm from "@/components/community/create-post-form";
import NativeBanner from "@/components/native-banner";

export default function NewPage() {
  return (
    <main className="mx-auto w-full min-h-full max-w-3xl px-4 py-10 mt-16">
      <CreatePostForm />
      {/* BEST PLACEMENT: Right after the tool ends */}
      <NativeBanner />
    </main>
  );
}
