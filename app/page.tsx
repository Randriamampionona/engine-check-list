import Heading from "@/components/heading";
import SearchForm from "@/components/search-form";

export default function Home() {
  return (
    <main className="flex items-center justify-center h-full w-full">
      <div className="max-w-3xl mx-auto p-6 text-center">
        <Heading />

        <p className="text-gray-700 text-lg max-w-xl mx-auto">
          Keep your scooter in top shape! Explore the full engine maintenance
          checklist for each model to ensure peak performance and reliability.
        </p>

        <SearchForm />
      </div>
    </main>
  );
}
