import MobileBanner300 from "@/components/ad/mobile-banner-300";
import AdsterraNativeBar from "@/components/ad/adsterra-native-bar";

export default async function AdPage({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const lang = (await searchParams).lang as string | undefined;

  const isFr = lang === "fr";

  return (
    <main className="mx-auto flex min-h-full max-w-3xl flex-col items-center justify-center px-6 py-16 text-center">
      {/* Header */}
      <div className="mb-10 space-y-3">
        <h1 className="text-2xl font-semibold tracking-tight">
          {isFr ? "Soutenir Check-eo ❤️" : "Supporting Check-eo ❤️"}
        </h1>

        <p className="text-sm text-muted-foreground leading-relaxed max-w-xl mx-auto">
          {isFr
            ? "J'ai créé Check-eo avec passion pour aider les conducteurs de scooters à entretenir leur moteur facilement et en toute sécurité. L'application est entièrement gratuite, sans abonnement ni frais cachés."
            : "I built Check-eo with passion to help riders maintain their scooters safely and easily. The app is completely free with no subscriptions, paywalls, or hidden fees."}
        </p>

        <p className="text-sm text-muted-foreground leading-relaxed max-w-xl mx-auto">
          {isFr
            ? "Pour couvrir les frais dhébergement et de développement, cette page contient une publicité discrète. La consulter permet de soutenir le projet — merci énormément 🙏"
            : "To cover hosting and development costs, this page contains a single advertisement. Viewing it helps keep the project alive — thank you so much for your support 🙏"}
        </p>
      </div>

      {/* Ad container */}
      <div className="w-full max-w-xl">
        <AdsterraNativeBar />
        <MobileBanner300 />
      </div>

      {/* Footer note */}
      <p className="mt-6 text-xs text-muted-foreground">
        {isFr
          ? "Aucun tracking, aucun abonnement — juste un soutien honnête."
          : "No tracking, no subscriptions — just honest support."}
      </p>
    </main>
  );
}
