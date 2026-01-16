export default function Footer() {
  return (
    <>
      <footer className="w-full h-auto py-4 bg-background text-gray-400 text-sm flex items-center justify-center gap-2 border-t border-gray-800">
        <p>
          &copy; {new Date().getFullYear()}{" "}
          <span className="font-semibold text-foreground">Check-eo</span>
        </p>
        <span className="hidden md:inline">|</span>
        <a
          href="https://tooj-rtn.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-teal-400 font-medium hover:text-teal-300 transition-colors"
        >
          @Toojrtn
        </a>
      </footer>
    </>
  );
}
