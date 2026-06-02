import { MouseEvent } from "react";
import { ChevronUp } from "lucide-react";

export default function Footer() {
  const handleScrollToHome = (e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const el = document.getElementById("home");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="relative py-16 px-6 bg-[#030405] border-t border-white/5 z-20">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-6">
        {/* Brand identity side */}
        <div className="flex items-center gap-3">
          <div className="h-6 w-6 rounded-sm bg-[#c7795e] flex items-center justify-center rotate-45 transform">
            <div className="w-3 h-3 border border-[#020303] rotate-45" />
          </div>
          <span className="font-sans font-bold text-sm tracking-tighter uppercase text-[#f7f3ef]">
            Digital Enterprise <span className="text-[#c7795e]">Group</span>
          </span>
        </div>

        {/* Copy side */}
        <div className="text-xs text-[#bdb5b0] text-center sm:text-left font-mono">
          © {new Date().getFullYear()} Digital Enterprise Group. All Rights Reserved. Las Vegas, NV.
        </div>

        {/* Floating Top Arrow */}
        <a
          href="#home"
          onClick={handleScrollToHome}
          className="h-10 w-10 rounded-full bg-white/2 border border-white/5 flex items-center justify-center text-[#bdb5b0] hover:text-[#f2c0a7] hover:bg-white/5 hover:border-[#c7795e]/30 transition-all duration-300"
          aria-label="Scroll back to top"
        >
          <ChevronUp className="h-5 w-5" />
        </a>
      </div>
    </footer>
  );
}
