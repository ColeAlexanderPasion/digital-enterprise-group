import { motion } from "motion/react";
import { certificationsData } from "../data";
import { Award, CheckCircle } from "lucide-react";

export default function Certifications() {
  return (
    <section id="certifications" className="relative py-32 lg:py-48 px-6 bg-[#020303] border-t border-white/5 z-20 tech-grid">
      {/* Background vertical/horizontal editorial lines */}
      <div className="absolute top-0 bottom-0 left-[8%] w-[1px] bg-gradient-to-b from-white/5 via-white/5 to-transparent pointer-events-none" />
      <div className="absolute top-0 bottom-0 right-[8%] w-[1px] bg-gradient-to-b from-white/5 via-white/5 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col items-start max-w-3xl mb-20 lg:mb-28">
          <span className="text-[10px] font-mono tracking-widest text-[#c7795e] uppercase font-bold block mb-4">
            // Technical Validation • Credentials
          </span>
          <h2 className="text-4xl sm:text-5xl lg:text-md font-extrabold tracking-tighter leading-[0.9] text-[#f7f3ef] mb-6 uppercase">
            Certified System Architects
          </h2>
          <p className="text-base sm:text-lg text-[#bdb5b0] leading-relaxed font-light">
            We hold accredited certifications and consulting alignments across elite global CRM databases, advertising networks, and data stream services.
          </p>
        </div>

        {/* Modular border split row grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-y-12 gap-x-8">
          {certificationsData.map((cert, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: idx * 0.05, ease: [0.16, 1, 0.3, 1] }}
              className="group relative pt-6 flex flex-col items-start cursor-default"
            >
              {/* Very fine top line representing row markers */}
              <div className="h-[1px] w-full bg-white/10 group-hover:bg-[#c7795e]/50 transition-colors duration-500 mb-6" />

              <div className="h-10 w-10 rounded-xl bg-white/3 border border-white/10 flex items-center justify-center text-[#c7795e] mb-5 group-hover:scale-110 group-hover:bg-[#c7795e]/10 group-hover:border-[#c7795e]/20 transition-all duration-300">
                <Award className="h-5 w-5" />
              </div>

              <div className="space-y-1 bg-transparent">
                <div className="text-lg font-extrabold text-[#f7f3ef] group-hover:text-[#f2c0a7] transition-colors duration-300 leading-snug">
                  {cert.name}
                </div>
                <div className="text-[9px] font-mono tracking-widest text-[#bdb5b0] uppercase font-semibold">
                  {cert.role}
                </div>
              </div>

              {/* Minimalist lower indicator element */}
              <div className="mt-8 flex items-center gap-1.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <CheckCircle className="h-3 w-3 text-[#bdb5b0]" />
                <span className="text-[8px] font-mono tracking-wider text-[#bdb5b0] uppercase">VERIFIED ACTIVE</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
