import { motion } from "motion/react";
import { Shield, Sparkles, Lightbulb, Compass, Award } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="relative py-32 lg:py-48 px-6 bg-[#020303] overflow-hidden border-t border-white/5 z-20">
      {/* Visual background lines */}
      <div className="absolute top-0 bottom-0 left-[8%] w-[1px] bg-gradient-to-b from-white/5 via-white/5 to-transparent pointer-events-none" />
      <div className="absolute top-0 bottom-0 right-[8%] w-[1px] bg-gradient-to-b from-white/5 via-white/5 to-transparent pointer-events-none" />

      {/* Decorative ambient gradients */}
      <div className="absolute top-[20%] left-[-15%] w-[500px] h-[500px] bg-[#c7795e]/3 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center relative">
        {/* Left Side: Editorial Abstract Node Network */}
        <div className="lg:col-span-5 order-2 lg:order-1 flex justify-center relative">
          <div className="relative w-full max-w-[460px] aspect-square rounded-3xl border border-white/5 bg-[#050606]/40 overflow-hidden shadow-[0_30px_100px_rgba(0,0,0,0.8)] backdrop-blur-md flex items-center justify-center p-8 tech-grid">
            
            {/* Soft inner core glow */}
            <div className="absolute h-56 w-56 rounded-full bg-gradient-to-br from-[#c7795e]/15 to-[#f2c0a7]/5 blur-3xl top-[25%] left-[25%] pointer-events-none" />

            {/* Custom high-end agency orbital path 1 */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
              className="absolute h-72 w-72 rounded-full border border-dashed border-[#c7795e]/20 flex items-center justify-center"
            >
              <div className="absolute top-1/2 left-0 h-2.5 w-2.5 rounded-full bg-[#c7795e] -translate-x-1.5 -translate-y-1/2" />
              <div className="absolute top-1/2 right-0 h-2 w-2 rounded-full bg-white/20 translate-x-1 -translate-y-1/2" />
            </motion.div>

            {/* Custom high-end agency orbital path 2 */}
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ repeat: Infinity, duration: 35, ease: "linear" }}
              className="absolute h-52 w-52 rounded-full border border-dashed border-[#f2c0a7]/15 flex items-center justify-center"
            >
              <div className="absolute top-0 left-1/2 h-2.5 w-2.5 rounded-full bg-[#e8a489] -translate-x-1/2 -translate-y-1" />
              <div className="absolute bottom-0 left-1/2 h-1.5 w-1.5 bg-white/40 rounded-full" />
            </motion.div>

            {/* Core Brand Badge */}
            <div className="relative h-32 w-32 rounded-full border border-white/5 bg-[#030405] flex items-center justify-center shadow-2xl group hover:border-[#c7795e]/30 transition-colors duration-500">
              <div className="text-center">
                <span className="font-mono text-[9px] uppercase tracking-[0.2em] block text-[#c7795e] mb-1">FOUNDED 2011</span>
                <span className="font-sans font-black text-xs text-[#f7f3ef] uppercase tracking-wider block">
                  DIGITAL
                  <span className="block text-[#e8a489] text-[10px]">ENTERPRISE</span>
                </span>
              </div>
            </div>
            
            {/* Status tags */}
            <div className="absolute bottom-6 left-6 flex items-center gap-2 bg-white/3 border border-white/5 px-4 py-1.5 rounded-full text-[9px] uppercase font-mono tracking-widest text-[#bdb5b0]">
              <div className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
              Integrations Certified
            </div>

            <div className="absolute top-6 right-6 flex items-center gap-2 bg-white/3 border border-white/5 px-4 py-1.5 rounded-full text-[9px] uppercase font-mono tracking-widest text-[#f2c0a7]">
              <span>Active Pipelines Linked</span>
            </div>
          </div>
        </div>

        {/* Right Side: Editorial Narrative */}
        <div className="lg:col-span-7 order-1 lg:order-2 flex flex-col items-start">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/3 border border-white/10 text-[9px] font-mono tracking-widest text-[#f2c0a7] uppercase font-bold mb-8"
          >
            <Shield className="h-3.5 w-3.5 text-[#c7795e]" />
            Enterprise Provenance
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tighter leading-[0.9] text-[#f7f3ef] mb-8 uppercase"
          >
            For over 15 years, Digital Enterprise Group has established custom system architectures...
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-base sm:text-lg text-[#bdb5b0] leading-relaxed mb-6 font-light"
          >
            Our core commitment lies in helping corporate ecosystems achieve seamless, frictionless operational autonomy. Through pristine database structuring, robust connected lead channels, and optimized automated reporting, we help brands run faster without human limitations slowing their progress down.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-base sm:text-lg text-[#bdb5b0] leading-relaxed mb-12 font-light"
          >
            By bridging foremost enterprise packages (Zoho, HubSpot, HighLevel) with modern data logic, we design custom systems that transform traditional procedures into live competitive advantages.
          </motion.p>

          {/* Minimal detailed cards with beautiful spacing and fine borders */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 w-full pt-8 border-t border-white/5">
            <div className="flex gap-4">
              <div className="h-10 w-10 flex-shrink-0 rounded-xl bg-white/3 border border-white/10 flex items-center justify-center text-[#c7795e]">
                <Compass className="h-5 w-5" />
              </div>
              <div className="space-y-1">
                <h4 className="text-[#f7f3ef] font-bold text-sm tracking-tight">Structured Mapping</h4>
                <p className="text-[#bdb5b0] text-xs font-light">Comprehensive blueprint designs before any code is deployed to avoid database corruption.</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="h-10 w-10 flex-shrink-0 rounded-xl bg-white/3 border border-white/10 flex items-center justify-center text-[#c7795e]">
                <Award className="h-5 w-5" />
              </div>
              <div className="space-y-1">
                <h4 className="text-[#f7f3ef] font-bold text-sm tracking-tight">Enterprise Compliance</h4>
                <p className="text-[#bdb5b0] text-xs font-light">Rigorous security guidelines and strict field encryption mapped during imports.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
