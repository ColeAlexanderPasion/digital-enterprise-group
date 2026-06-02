import { useEffect, useState, useRef } from "react";
import { motion, useInView } from "motion/react";
import { statsData } from "../data";
import { StatItem } from "../types";

function SingleStat({ stat, idx }: { stat: StatItem; idx: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const end = stat.value;
      if (start === end) return;

      const duration = 1.8; // seconds
      const totalSteps = 80;
      const stepTime = (duration * 1000) / totalSteps;
      const increment = end / totalSteps;

      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, stepTime);

      return () => clearInterval(timer);
    }
  }, [isInView, stat.value]);

  return (
    <div
      ref={ref}
      className={`flex flex-col items-start py-10 lg:py-14 px-6 relative group transition-all duration-300 ${
        idx !== 3 ? "lg:border-r border-white/5" : ""
      }`}
    >
      {/* Background glow on hover */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#c7795e]/2 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

      {/* Numerical indicator in mono */}
      <span className="font-mono text-[9px] tracking-widest text-[#c7795e] mb-4">
        // STATS_NODE_0{idx + 1}
      </span>

      {/* Large beautiful number display */}
      <div className="text-5xl sm:text-6xl md:text-7xl font-black text-[#f7f3ef] tracking-tighter leading-none mb-3 group-hover:text-[#f2c0a7] transition-colors duration-500">
        {count}
        <span className="text-[#c7795e]">{stat.suffix}</span>
      </div>

      {/* Label with light weight */}
      <div className="text-xs uppercase tracking-widest text-[#bdb5b0] font-mono">
        {stat.label}
      </div>
    </div>
  );
}

export default function Stats() {
  return (
    <section className="relative bg-[#020303] border-t border-b border-white/5 z-20 overflow-hidden">
      {/* Editorial layout grids */}
      <div className="absolute top-0 bottom-0 left-[8%] w-[1px] bg-gradient-to-b from-white/5 to-white/5 pointer-events-none" />
      <div className="absolute top-0 bottom-0 right-[8%] w-[1px] bg-gradient-to-b from-white/5 to-white/5 pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full relative">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 divide-y divide-white/5 lg:divide-y-0">
          {statsData.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
            >
              <SingleStat stat={stat} idx={idx} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
