"use client";

import { useState, useTransition, useRef } from "react";
import { useUser } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import { Paperclip, X } from "lucide-react";
import { createCommunityPost } from "@/action/create-community-post.action";
import { uploadImageAction } from "@/action/upload-image.action";

const MAX_FILE_SIZE = 50 * 1024 * 1024; // 50MB

export default function CreatePostForm() {
  const { user } = useUser();
  const router = useRouter();
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [file, setFile] = useState<File | null>(null);
  const [fileError, setFileError] = useState<string | null>(null);
  const [isPending, startTransition] = useTransition();
  const [isUploading, setIsUploading] = useState(false);

  const handleFilePick = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selected = e.target.files?.[0];
    if (!selected) return;

    if (selected.size > MAX_FILE_SIZE) {
      setFile(null);
      setFileError("File must be smaller than 50 MB.");
      return;
    }

    setFile(selected);
    setFileError(null);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!user) return;

    startTransition(async () => {
      try {
        let attachmentUrl: string | undefined;

        // 1?? Upload image first if exists
        if (file && file.type.startsWith("image/")) {
          setIsUploading(true);

          const uploadedUrl = await uploadImageAction(file);

          setIsUploading(false);

          if (!uploadedUrl) {
            throw new Error("Image upload failed");
          }

          attachmentUrl = uploadedUrl;
        }

        // 2?? Create Firestore post
        await createCommunityPost({
          title,
          Details: content,
          Attachment: attachmentUrl,
          owner: {
            id: user.id,
            name:
              user.fullName ??
              user.username ??
              user.emailAddresses[0]?.emailAddress ??
              "Anonymous",
            avatarUrl: user.imageUrl,
          },
        });

        // 3?? Reset + redirect
        setTitle("");
        setContent("");
        setFile(null);

        router.push("/community");
      } catch (error) {
        console.error("Failed to create community post:", error);
        setIsUploading(false);
      }
    });
  };

  return (
    <section className="p-6">
      {/* Header */}
      <div className="mb-6 space-y-1">
        <h1 className="text-xl font-semibold">Create a new post</h1>
        <p className="text-sm text-muted-foreground">
          Ask a question, share an idea, or request help from the community.
        </p>
      </div>

      <form className="space-y-6" onSubmit={handleSubmit}>
        {/* Title */}
        <div className="space-y-1">
          <label className="text-sm font-medium">Title</label>
          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full rounded border bg-background px-3 py-2 text-sm
              focus:ring-2 focus:ring-teal-500/40 outline-none"
            placeholder="Be specific and clear"
          />
        </div>

        {/* Details */}
        <div className="space-y-1">
          <label className="text-sm font-medium">Details</label>
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            rows={6}
            className="w-full resize-none rounded border bg-background px-3 py-2 text-sm
              focus:ring-2 focus:ring-teal-500/40 outline-none"
            placeholder="Explain your problem or idea..."
          />
        </div>

        {/* Attachment */}
        <div className="flex flex-col space-y-2">
          <label className="text-sm font-medium">Attachment (optional)</label>

          {/* IMAGE PREVIEW */}
          {file && file.type.startsWith("image/") ? (
            <div className="relative group w-full max-w-xl">
              <img
                src={URL.createObjectURL(file)}
                alt="Attachment preview"
                className="h-64 w-full rounded-xl border object-cover
          bg-muted shadow-sm"
              />

              {/* Overlay */}
              <div
                className="absolute inset-0 rounded-xl bg-black/40 opacity-0
          group-hover:opacity-100 transition flex items-center justify-center gap-3"
              >
                <button
                  type="button"
                  onClick={() => fileInputRef.current?.click()}
                  className="text-background rounded-full bg-white/90 px-4 py-2 text-sm font-medium
            hover:bg-white transition"
                >
                  Replace
                </button>

                <button
                  type="button"
                  onClick={() => setFile(null)}
                  className="rounded-full bg-red-500 px-4 py-2 text-sm font-medium
            text-white hover:bg-red-600 transition"
                >
                  Remove
                </button>
              </div>
            </div>
          ) : (
            <>
              {/* FILE CTA */}
              {!file && (
                <button
                  type="button"
                  onClick={() => fileInputRef.current?.click()}
                  className="inline-flex items-center gap-2 rounded-xl border
            px-4 py-3 text-sm text-muted-foreground
            hover:border-teal-500 hover:text-foreground
            transition w-fit"
                >
                  <Paperclip className="h-4 w-4" />
                  Attach an image or file (max 50MB)
                </button>
              )}

              {/* NON-IMAGE FILE PREVIEW */}
              {file && (
                <div className="flex items-center justify-between rounded-xl border px-4 py-3">
                  <span className="text-sm truncate">
                    {file.name}
                    <span className="text-muted-foreground ml-1">
                      ({Math.round(file.size / 1024 / 1024)} MB)
                    </span>
                  </span>

                  <button
                    type="button"
                    onClick={() => setFile(null)}
                    className="text-muted-foreground hover:text-red-500 transition"
                  >
                    <X className="h-4 w-4" />
                  </button>
                </div>
              )}
            </>
          )}

          {fileError && <p className="text-xs text-red-500">{fileError}</p>}

          <input
            ref={fileInputRef}
            type="file"
            hidden
            accept="image/*"
            onChange={handleFilePick}
          />
        </div>

        {/* Footer */}
        <div className="flex items-center justify-end gap-3 pt-4 border-t">
          <button
            type="button"
            onClick={() => {
              setTitle("");
              setContent("");
              setFile(null);
            }}
            className="text-sm text-muted-foreground hover:text-foreground"
          >
            Cancel
          </button>

          <button
            type="submit"
            disabled={!title || !content || isPending || isUploading}
            className="rounded-full bg-teal-500 px-5 py-2 text-sm font-semibold
    text-white hover:bg-teal-600 transition disabled:opacity-50"
          >
            {isUploading
              ? "Uploading image..."
              : isPending
              ? "Publishing..."
              : "Publish"}
          </button>
        </div>
      </form>
    </section>
  );
}
