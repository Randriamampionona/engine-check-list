import { admin_db } from "@/lib/firebaseAdmin";
import { headers } from "next/headers";
import { Webhook } from "svix";

export async function POST(req: Request) {
  try {
    const payload = await req.text();
    const headerPayload = await headers();

    const svixHeaders = {
      "svix-id": headerPayload.get("svix-id")!,
      "svix-timestamp": headerPayload.get("svix-timestamp")!,
      "svix-signature": headerPayload.get("svix-signature")!,
    };

    const webhook = new Webhook(process.env.CLERK_WEBHOOK_SECRET!);

    let event: any;
    try {
      event = webhook.verify(payload, svixHeaders);
    } catch (err) {
      console.error("Webhook verification failed", err);
      return new Response("Invalid signature", { status: 400 });
    }

    const user = event.data;

    const getEmail = () =>
      user.email_addresses?.[0]?.email_address ??
      user.external_accounts?.[0]?.email_address ??
      null;

    const getImage = () =>
      user.image_url ?? user.external_accounts?.[0]?.picture ?? null;

    const userData = {
      clerkId: user.id,
      email: getEmail(),
      firstName:
        user.first_name ?? user.external_accounts?.[0]?.first_name ?? null,
      lastName:
        user.last_name ?? user.external_accounts?.[0]?.last_name ?? null,
      imageUrl: getImage(),
      createdAt: user.created_at ? new Date(user.created_at) : new Date(),
      lastSignInAt: user.last_sign_in_at
        ? new Date(user.last_sign_in_at)
        : null,
      provider: user.external_accounts?.[0]?.provider ?? "email",
    };

    // For both creation and updates, use merge to avoid Firestore errors
    await admin_db
      .collection("USERS")
      .doc(user.id)
      .set(userData, { merge: true });

    return new Response("OK", { status: 200 });
  } catch (err) {
    console.error("Webhook error:", err);
    return new Response("Webhook failed", { status: 500 });
  }
}
