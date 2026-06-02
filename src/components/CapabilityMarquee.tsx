import { motion } from "motion/react";

export default function CapabilityMarquee() {
  const capabilities = [
    "CRM Implementation",
    "Workflow Automations",
    "Web App Integration",
    "Data Migration",
    "Project Management",
    "Web Management",
    "Digital Marketing",
    "SEO"
  ];

  // Repeat the list to avoid visual breaks
  const repeatedList = [...capabilities, ...capabilities, ...capabilities];

  return (
    <div className="w-full bg-[#070808] border-y border-white/5 py-4 overflow-hidden relative z-20">
      <div className="max-w-7xl mx-auto px-6 mb-2 flex items-center justify-between text-[11px] font-mono tracking-widest text-[#c7795e] uppercase">
        <span>Strategic Focus</span>
        <span>•</span>
        <span>Enterprise Execution</span>
      </div>

      <div className="relative flex overflow-x-hidden">
        {/* Left and right fade gradients */}
        <div className="absolute top-0 bottom-0 left-0 w-16 bg-gradient-to-r from-[#020303] to-transparent z-10 pointer-events-none" />
        <div className="absolute top-0 bottom-0 right-0 w-16 bg-gradient-to-l from-[#020303] to-transparent z-10 pointer-events-none" />

        <motion.div
          animate={{ x: [0, -1200] }}
          transition={{
            repeat: Infinity,
            ease: "linear",
            duration: 25,
          }}
          className="flex gap-16 whitespace-nowrap py-2"
        >
          {repeatedList.map((item, idx) => (
            <div
              key={idx}
              className="flex items-center gap-3 text-sm sm:text-base font-bold text-[#f7f3ef] hover:text-[#f2c0a7] transition-colors duration-300 cursor-default select-none"
            >
              <div className="h-2 w-2 rounded-full bg-[#c7795e]" />
              {item}
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
