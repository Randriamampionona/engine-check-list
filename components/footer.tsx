export default function Footer() {
  return (
    <footer className="absolute bottom-0 w-full py-2 text-gray-400 text-sm flex items-center justify-center gap-2">
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
  );
}
