import { motion } from "motion/react";
import { servicesData } from "../data";
import LucideIcon from "./LucideIcon";

export default function ServicesGrid() {
  const handleScrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="services" className="relative py-32 lg:py-48 px-6 bg-[#020303] border-t border-white/5 z-20">
      {/* Visual background lines to match Framer agency styles */}
      <div className="absolute top-0 bottom-0 left-[8%] w-[1px] bg-gradient-to-b from-white/5 via-white/5 to-transparent pointer-events-none" />
      <div className="absolute top-0 bottom-0 right-[8%] w-[1px] bg-gradient-to-b from-white/5 via-white/5 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start relative">
        {/* Sticky Left Editorial Column */}
        <div className="lg:col-span-5 lg:sticky lg:top-32">
          <span className="text-[10px] font-mono tracking-widest text-[#c7795e] uppercase font-bold block mb-6">
            // Our Strategy • Solutions
          </span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tighter leading-[0.9] text-[#f7f3ef] mb-8 uppercase">
            Bespoke systems engineered for scale.
          </h2>
          <p className="text-base sm:text-lg text-[#bdb5b0] leading-relaxed mb-10 font-light">
            We architect fully synchronized operations. From HubSpot to custom CRM databases, our integrations remove organizational clutter, clean historical records, and build pristine enterprise intelligence models.
          </p>
          
          <div className="flex flex-col gap-6 border-l-2 border-[#c7795e]/40 pl-6 my-10">
            <div>
              <h4 className="text-xs font-bold uppercase tracking-widest text-[#f7f3ef] mb-1 font-mono">HubSpot & Zoho Architects</h4>
              <p className="text-xs text-[#bdb5b0] font-light">Certified integrations that eliminate double-data entry and lost pipelines.</p>
            </div>
            <div>
              <h4 className="text-xs font-bold uppercase tracking-widest text-[#f7f3ef] mb-1 font-mono">15+ Years Mastery</h4>
              <p className="text-xs text-[#bdb5b0] font-light">Deep operational flow charts mapped out prior to implementation.</p>
            </div>
          </div>

          <button
            onClick={() => handleScrollTo("contact")}
            className="inline-flex items-center gap-3 text-xs font-bold uppercase tracking-widest text-[#f2c0a7] hover:text-white transition-colors duration-300 group cursor-pointer border-b border-[#c7795e]/30 pb-1"
          >
            Request system architecture audit 
            <span className="group-hover:translate-x-2 transition-transform duration-300">→</span>
          </button>
        </div>

        {/* Right Stacking Cards Column */}
        <div className="lg:col-span-7 space-y-16 lg:space-y-24">
          {servicesData.map((service, idx) => {
            // Calculate stacking top offset for sticky scrolling
            const topOffset = 100 + idx * 30; 
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-120px" }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                style={{
                  position: "sticky",
                  top: topOffset,
                }}
                className="w-full bg-[#050606] border border-white/5 rounded-3xl p-8 sm:p-12 shadow-[0_30px_100px_rgba(0,0,0,0.8)] backdrop-blur-xl relative group hover:border-[#c7795e]/20 transition-all duration-500 overflow-hidden"
              >
                {/* Horizontal progress gradient overlay line */}
                <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#c7795e]/50 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-center" />

                {/* Left/Right layouts */}
                <div className="flex flex-col md:flex-row md:items-start justify-between gap-8 h-full">
                  <div className="space-y-6 flex-1">
                    <div className="flex items-center gap-3">
                      <span className="font-mono text-xs font-bold text-[#c7795e] tracking-widest uppercase">
                        [ Module {service.id} ]
                      </span>
                      <div className="h-1 w-1 rounded-full bg-white/20" />
                      <span className="text-[10px] font-mono tracking-wider text-white/40 uppercase">ACTIVE PROTOCOL</span>
                    </div>

                    <h3 className="text-3xl sm:text-4xl font-extrabold text-[#f7f3ef] tracking-tight group-hover:text-[#f2c0a7] transition-colors duration-300">
                      {service.title}
                    </h3>
                    
                    <p className="text-sm sm:text-base text-[#bdb5b0] leading-relaxed font-light">
                      {service.description}
                    </p>

                    {/* Interactive inline explore trigger */}
                    <div className="pt-2">
                      <span className="inline-flex items-center gap-1.5 text-[10px] font-mono uppercase tracking-widest text-white/50 group-hover:text-[#f2c0a7] transition-colors duration-300">
                        View integration specifications
                        <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
                      </span>
                    </div>
                  </div>

                  {/* High fidelity icon container */}
                  <div className="flex-shrink-0 self-start md:self-center">
                    <div className="h-16 w-16 rounded-2xl bg-white/3 border border-white/5 flex items-center justify-center text-[#c7795e] group-hover:text-[#f2c0a7] group-hover:bg-[#c7795e]/10 group-hover:scale-110 group-hover:border-[#c7795e]/30 transition-all duration-500 shadow-2xl relative">
                      <div className="absolute inset-0 rounded-2xl bg-[#c7795e]/3 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      <LucideIcon name={service.iconName} size={28} />
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
