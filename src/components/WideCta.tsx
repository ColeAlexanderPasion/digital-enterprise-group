import { motion } from "motion/react";
import { ArrowUpRight, Sparkles } from "lucide-react";

export default function WideCta() {
  const handleScrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative py-40 lg:py-56 px-6 bg-[#020303] overflow-hidden border-t border-white/5 z-20">
      {/* Visual vertical margin columns */}
      <div className="absolute top-0 bottom-0 left-[8%] w-[1px] bg-gradient-to-b from-white/5 via-white/5 to-transparent pointer-events-none" />
      <div className="absolute top-0 bottom-0 right-[8%] w-[1px] bg-gradient-to-b from-white/5 via-white/5 to-transparent pointer-events-none" />

      {/* Cosmic background radial alignments and particles */}
      <div className="absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-[900px] h-[400px] rounded-full bg-[radial-gradient(circle_at_center,rgba(199,121,94,0.08)_0%,transparent_65%)] pointer-events-none blur-3xl animate-pulse" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(199,121,94,0.04),transparent_65%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto text-center relative z-10 flex flex-col items-center px-4">
        <motion.div
          initial={{ opacity: 0, y: -15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/3 border border-white/10 text-[9px] font-mono tracking-[0.2em] text-[#f2c0a7] uppercase mb-10"
        >
          <Sparkles className="h-3 w-3 text-[#c7795e]" />
          Let us redesign your operations
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
          className="text-5xl sm:text-7xl md:text-8xl xl:text-9xl font-black tracking-tighter leading-[0.82] text-[#f7f3ef] uppercase max-w-5xl mb-12"
        >
          Automate. Optimize.<br/>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#c7795e] via-[#e8a489] to-[#f2c0a7]">Start Growing.</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-base sm:text-lg md:text-xl text-[#bdb5b0] max-w-2xl mb-14 font-light leading-relaxed"
        >
          Find out how we bridge disconnected platform streams, eliminate pipeline latency, and establish growth clarity today.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <button
            onClick={() => handleScrollTo("contact")}
            className="inline-flex items-center gap-3 px-12 py-6 rounded-full text-xs font-bold uppercase tracking-widest text-black bg-gradient-to-r from-[#c7795e] via-[#e8a489] to-[#f2c0a7] hover:scale-[1.03] transition-all duration-350 shadow-[0_20px_50px_rgba(199,121,94,0.25)] cursor-pointer glow-btn"
          >
            Get In Touch Now
            <ArrowUpRight className="h-4.5 w-4.5 stroke-[2.5]" />
          </button>
        </motion.div>
      </div>
    </section>
  );
}
