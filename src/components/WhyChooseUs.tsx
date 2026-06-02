import { motion } from "motion/react";
import { whyChooseUsData } from "../data";
import LucideIcon from "./LucideIcon";

export default function WhyChooseUs() {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
  };

  return (
    <section className="relative py-32 lg:py-48 px-6 bg-[#020303] border-t border-white/5 z-20">
      {/* Visual background lines */}
      <div className="absolute top-0 bottom-0 left-[8%] w-[1px] bg-gradient-to-b from-white/5 via-white/5 to-transparent pointer-events-none" />
      <div className="absolute top-0 bottom-0 right-[8%] w-[1px] bg-gradient-to-b from-white/5 via-white/5 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        {/* Large Editorial Headline */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 mb-20 lg:mb-28">
          <div className="lg:col-span-5">
            <span className="text-[10px] font-mono tracking-widest text-[#c7795e] uppercase font-bold block mb-4">
              // Premium Integration Advantages
            </span>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tighter leading-[0.9] text-[#f7f3ef] uppercase">
              Operational Clarity is non-negotiable.
            </h2>
          </div>
          <div className="lg:col-span-7 flex flex-col justify-end">
            <p className="text-base sm:text-lg text-[#bdb5b0] leading-relaxed font-light">
              Disconnected databases split workflows, causing lead leakage and platform fatigue. By unifying contact histories, automating critical pipelines, and engineering clean analytical dashboards, you unlock unmatched visibility over actual growth performance.
            </p>
          </div>
        </div>

        {/* Custom Unboxed Layout List */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16 lg:gap-x-16"
        >
          {whyChooseUsData.map((item, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              className="group relative flex flex-col justify-between"
            >
              {/* Very fine top line indicating section limits */}
              <div className="h-[1px] w-full bg-white/10 group-hover:bg-[#c7795e]/50 transition-colors duration-500 mb-8" />

              <div>
                <div className="flex items-center justify-between mb-6">
                  {/* Icon Container with subtle glass back */}
                  <div className="h-12 w-12 rounded-xl bg-white/3 border border-white/10 flex items-center justify-center text-[#c7795e] group-hover:text-[#f2c0a7] group-hover:scale-110 group-hover:border-[#c7795e]/20 transition-all duration-300">
                    <LucideIcon name={item.iconName} size={22} />
                  </div>

                  {/* Micro index */}
                  <span className="font-mono text-xs text-white/20 group-hover:text-white/40 transition-colors duration-300">
                    /0{idx + 1}
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl font-extrabold text-[#f7f3ef] tracking-tight group-hover:text-[#f2c0a7] transition-colors duration-300 mb-3">
                  {item.title}
                </h3>
                
                <p className="text-sm text-[#bdb5b0] leading-relaxed font-light">
                  {item.description}
                </p>
              </div>

              {/* Spacing alignment */}
              <div className="mt-8" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
