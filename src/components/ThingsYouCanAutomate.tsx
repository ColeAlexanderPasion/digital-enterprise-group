import { motion } from "motion/react";
import { automateData } from "../data";
import { CheckCircle2, ChevronRight, Play } from "lucide-react";

export default function ThingsYouCanAutomate() {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.08
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
  };

  return (
    <section id="automation" className="relative py-32 lg:py-48 px-6 bg-[#030405] border-t border-white/5 z-20 overflow-hidden">
      {/* Editorial backdrop vectors */}
      <div className="absolute top-0 bottom-0 left-[8%] w-[1px] bg-gradient-to-b from-white/5 via-white/5 to-transparent pointer-events-none" />
      <div className="absolute top-0 bottom-0 right-[8%] w-[1px] bg-gradient-to-b from-white/5 via-white/5 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start relative">
        {/* Sticky Left Editorial Area */}
        <div className="lg:col-span-5 lg:sticky lg:top-32">
          <span className="text-[10px] font-mono tracking-widest text-[#c7795e] uppercase font-bold block mb-6">
            // Connected Operations
          </span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tighter leading-[0.9] text-[#f7f3ef] mb-8 uppercase">
            Everything you can automate.
          </h2>
          <p className="text-base sm:text-lg text-[#bdb5b0] mb-10 font-light leading-relaxed">
            Eliminate traditional spreadsheets and disconnected CRM nodes. Link client follow-ups, payment milestones, and operations into cohesive, auto-triggering workflows.
          </p>

          <div className="bg-white/2 border border-white/5 p-8 rounded-3xl space-y-5 backdrop-blur-md">
            <div className="flex items-start gap-3.5">
              <CheckCircle2 className="h-5 w-5 text-[#c7795e] mt-0.5" />
              <div>
                <span className="text-xs font-mono font-bold uppercase text-[#f7f3ef] tracking-wider block">Zero Manual Follow-ups</span>
                <span className="text-xs text-[#bdb5b0] font-light">Lead outreach fires instantly based on context inputs.</span>
              </div>
            </div>
            <div className="flex items-start gap-3.5">
              <CheckCircle2 className="h-5 w-5 text-[#c7795e] mt-0.5" />
              <div>
                <span className="text-xs font-mono font-bold uppercase text-[#f7f3ef] tracking-wider block">Unified Multi-Platform Sync</span>
                <span className="text-xs text-[#bdb5b0] font-light">Fields adapt across databases without human overlap.</span>
              </div>
            </div>
            <div className="flex items-start gap-3.5">
              <CheckCircle2 className="h-5 w-5 text-[#c7795e] mt-0.5" />
              <div>
                <span className="text-xs font-mono font-bold uppercase text-[#f7f3ef] tracking-wider block">SLA Protection</span>
                <span className="text-xs text-[#bdb5b0] font-light">System warnings flag bottlenecks prior to expiration.</span>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll-reveal Right List Area */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-120px" }}
          className="lg:col-span-7 divide-y divide-white/5"
        >
          {automateData.map((item) => (
            <motion.div
              key={item.id}
              variants={itemVariants}
              className="py-10 sm:py-12 flex gap-8 items-start group cursor-default transition-all duration-300 relative overflow-hidden"
            >
              {/* Subtle copper highlight box overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#c7795e]/3 to-transparent -translate-x-full group-hover:translate-x-0 transition-transform duration-500 pointer-events-none" />

              {/* Number/Icon */}
              <div className="flex flex-col items-center flex-shrink-0">
                <span className="font-mono text-xs font-bold text-[#c7795e] group-hover:text-[#f2c0a7] transition-colors duration-300">
                  {item.id}
                </span>
                <span className="h-2 w-2 rounded-full bg-[#c7795e] opacity-0 group-hover:opacity-100 group-hover:scale-150 transition-all duration-500 mt-3" />
              </div>

              {/* Text Area */}
              <div className="space-y-3 flex-1 relative z-10">
                <div className="flex items-center justify-between">
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-[#f7f3ef] group-hover:text-[#f2c0a7] transition-colors duration-300 tracking-tight">
                    {item.title}
                  </h3>
                  <ChevronRight className="h-4 w-4 text-white/10 group-hover:text-[#c7795e] group-hover:translate-x-1 transition-all duration-300" />
                </div>
                <p className="text-sm sm:text-base text-[#bdb5b0] leading-relaxed font-light group-hover:text-[#f7f3ef] transition-colors duration-350">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}

          {/* Bespoke footer text */}
          <motion.div
            variants={itemVariants}
            className="py-10 sm:py-12 text-center sm:text-left text-xs font-mono tracking-widest text-[#bdb5b0] italic uppercase flex items-center gap-3"
          >
            <Play className="h-3 w-3 text-[#c7795e] animate-ping" />
            Any custom business protocol can be formulated. Let our design studio engineer it.
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
