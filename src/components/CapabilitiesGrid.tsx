import { motion } from "motion/react";
import { capabilitiesData } from "../data";
import { CircleSlash, Hammer } from "lucide-react";

export default function CapabilitiesGrid() {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.05
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
  };

  return (
    <section className="relative py-32 lg:py-48 px-6 bg-[#030405] border-t border-white/5 z-20 tech-grid">
      {/* Editorial backdrop vectors */}
      <div className="absolute top-0 bottom-0 left-[8%] w-[1px] bg-gradient-to-b from-white/5 via-white/5 to-transparent pointer-events-none" />
      <div className="absolute top-0 bottom-0 right-[8%] w-[1px] bg-gradient-to-b from-white/5 via-white/5 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col items-start max-w-3xl mb-20 lg:mb-28">
          <span className="text-[10px] font-mono tracking-widest text-[#c7795e] uppercase font-bold block mb-4">
            // Core Engineering Expertise
          </span>
          <h2 className="text-4xl sm:text-5xl lg:text-md font-extrabold tracking-tighter leading-[0.9] text-[#f7f3ef] mb-6 uppercase">
            Multi-platform technical masteries.
          </h2>
          <p className="text-base sm:text-lg text-[#bdb5b0] leading-relaxed font-light">
            We operate at the convergence of advertising strategy, frontend visual engineering, systems automation, and complex database administration.
          </p>
        </div>

        {/* Elegant unboxed grid layout */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-12 gap-x-8"
        >
          {capabilitiesData.map((item, idx) => (
            <motion.div
              key={item.id}
              variants={itemVariants}
              className="group relative pt-6 flex flex-col justify-between cursor-default"
            >
              {/* Very fine top line indicating section limits */}
              <div className="h-[1px] w-full bg-white/10 group-hover:bg-[#c7795e]/50 transition-colors duration-500 mb-6" />

              <div>
                <div className="flex justify-between items-center mb-6">
                  <span className="font-mono text-[10px] text-white/30 group-hover:text-[#c7795e] font-semibold transition-colors duration-300">
                    // PROTOCOL: {(idx + 1).toString().padStart(2, "0")}
                  </span>
                  <CircleSlash className="h-4.5 w-4.5 text-white/10 group-hover:text-[#c7795e]/40 group-hover:rotate-90 transition-all duration-500" />
                </div>

                <h3 className="text-lg font-bold tracking-wider text-[#f7f3ef] group-hover:text-[#f2c0a7] transition-colors duration-300 uppercase font-mono">
                  {item.title}
                </h3>
              </div>

              {/* Dynamic bottom underline expansion */}
              <div className="mt-8 h-[2px] w-8 bg-white/10 group-hover:bg-[#c7795e] group-hover:w-full transition-all duration-500" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
