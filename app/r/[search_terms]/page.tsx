import { searchEngineFaults } from "@/action/get-search-engine-faults.action";
import Heading from "@/components/heading";

type PageProps = {
  params: Promise<{ search_terms: string }>;
  searchParams: Promise<Record<string, string | string[] | undefined>>;
};

export default async function ResultPage({ params, searchParams }: PageProps) {
  const { search_terms } = await params;
  const { lang = "fr" } = await searchParams;

  const results = await searchEngineFaults(search_terms, lang as Lang);
  const fault = results[0]; // only one result

  const priorityColor = (priority: number) => {
    switch (priority) {
      case 1:
        return "bg-red-600 text-white shadow-lg";
      case 2:
        return "bg-yellow-500 text-gray-900 shadow-md";
      case 3:
        return "bg-blue-600 text-white shadow";
      default:
        return "bg-gray-500 text-white";
    }
  };

  return (
    <main className="max-w-3xl mx-auto p-8 flex flex-col items-center h-full w-full">
      {/* Page Header */}
      <header className="mb-12 text-center">
        <Heading />
        <p className="mt-4 text-gray-400 text-lg">
          Results for blink code:{" "}
          <span className="text-teal-400 font-bold animate-pulse">
            {search_terms}
          </span>
        </p>
      </header>

      {!fault ? (
        <p className="text-gray-500 text-center py-20 text-xl">
          No engine fault found for this blink code.
        </p>
      ) : (
        <div className="relative w-full max-w-xl rounded-lg bg-linear-to-br from-gray-900/80 via-gray-800/70 to-black/60 backdrop-blur-xl border border-gray-700 shadow-2xl p-8 hover:scale-[1.03] transition-transform duration-300">
          {/* Priority Badge */}
          <span
            className={`absolute top-4 right-4 px-3 py-1 rounded-full font-semibold text-sm ${priorityColor(
              fault.Priority
            )}`}
          >
            Priority {fault.Priority}
          </span>

          {/* Header */}
          <h2 className="text-3xl font-extrabold text-white mb-6 text-center tracking-tight">
            {fault.FailureCode}
          </h2>

          {/* Cause Section */}
          <div className="mb-6">
            <h3 className="text-teal-400 font-semibold">Cause:</h3>
            <p className="text-gray-300 leading-relaxed">{fault.description}</p>
          </div>

          {/* Solution Section */}
          <div>
            <h3 className="text-blue-400 font-semibold">Solution:</h3>
            <ul className="space-y-2">
              {fault.management.map((step, i) => (
                <li
                  key={i}
                  className="text-gray-200 text-sm flex items-start gap-2"
                >
                  <span className="text-purple-400 font-bold">•</span> {step}
                </li>
              ))}
            </ul>
          </div>

          {/* Glow bottom accent */}
          <div className="absolute bottom-0 left-0 w-full h-1 rounded-full bg-linear-to-r from-teal-400 via-blue-500 to-purple-500 opacity-50"></div>

          {/* Subtle card shadow glow */}
          <div className="absolute inset-0 rounded-2xl shadow-[0_0_60px_#00fff3] opacity-10 pointer-events-none"></div>
        </div>
      )}
    </main>
  );
}
