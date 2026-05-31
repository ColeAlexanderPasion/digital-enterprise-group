import { useState, useRef, MouseEvent, useEffect } from "react";
import { motion, useMotionValue, useTransform, useSpring } from "motion/react";
import { Sparkles, TrendingUp, ShieldCheck, Activity, Terminal, ArrowUpRight } from "lucide-react";

export default function Hero() {
  const cardRef = useRef<HTMLDivElement>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Motion values for the 3D tilt effect on mouse movement
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Soft spring animation for smooth tilt transition
  const springConfig = { damping: 30, stiffness: 120 };
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [15, -15]), springConfig);
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-20, 20]), springConfig);

  const handleMouseMove = (event: MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = event.clientX - rect.left - width / 2;
    const mouseY = event.clientY - rect.top - height / 2;
    
    // Set motion values relative to card dimensions [-0.5, 0.5]
    x.set(mouseX / width);
    y.set(mouseY / height);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  const handleScrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-[110vh] pt-36 pb-24 px-6 overflow-hidden tech-grid flex flex-col justify-center border-b border-white/5">
      {/* Absolute Ambient Background Lights & Vector Lines */}
      <div className="absolute top-[10%] right-[-15%] w-[600px] h-[600px] rounded-full bg-[#c7795e]/10 blur-[130px] pointer-events-none" />
      <div className="absolute bottom-[5%] left-[-15%] w-[500px] h-[500px] rounded-full bg-[#f2c0a7]/5 blur-[120px] pointer-events-none" />
      
      {/* Decorative vertical editorial rules */}
      <div className="absolute top-0 bottom-0 left-[8%] w-[1px] bg-gradient-to-b from-white/10 via-white/3 to-transparent pointer-events-none" />
      <div className="absolute top-0 bottom-0 right-[8%] w-[1px] bg-gradient-to-b from-white/10 via-white/3 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8 items-center relative z-10">
        {/* Left Editorial Copy */}
        <div className="lg:col-span-7 flex flex-col items-start lg:pr-8">
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/3 border border-white/10 text-[10px] font-mono tracking-widest text-[#f2c0a7] uppercase font-bold mb-8"
          >
            <Sparkles className="h-3.5 w-3.5 text-[#c7795e] animate-pulse" />
            Strategic Digital Studio
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, cubicBezier: [0.16, 1, 0.3, 1], delay: 0.1 }}
            className="text-6xl sm:text-7xl md:text-8xl xl:text-9xl font-extrabold tracking-tighter leading-[0.82] text-[#f7f3ef] mb-8 uppercase"
          >
            Digital<br/>Enterprise<br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#c7795e] via-[#e8a489] to-[#f2c0a7]">Group</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg sm:text-xl font-bold text-[#e8a489] tracking-widest uppercase font-mono mb-4"
          >
            Your Partner in Digital Growth
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-base sm:text-lg text-[#bdb5b0] max-w-xl leading-relaxed mb-10 font-light"
          >
            We eliminate business friction. By engineering bespoke CRM workflows, migrating complex operational data, and integrating automated funnels, we empower businesses to scale dynamically.
          </motion.p>

          {/* Call to Actions with Magnetic Effect simulation */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-wrap items-center gap-5 w-full sm:w-auto"
          >
            <button
              onClick={() => handleScrollTo("contact")}
              className="px-8 py-4 rounded-full text-xs font-bold uppercase tracking-widest text-[#020303] bg-gradient-to-r from-[#c7795e] via-[#e8a489] to-[#f2c0a7] hover:scale-[1.03] transition-all duration-300 w-full sm:w-auto text-center cursor-pointer glow-btn"
            >
              Start Growth Now
            </button>
            <button
              onClick={() => handleScrollTo("services")}
              className="px-8 py-4 rounded-full text-xs font-bold uppercase tracking-widest text-white border border-white/10 bg-white/2 hover:bg-white/5 hover:border-white/15 transition-all duration-300 w-full sm:w-auto text-center cursor-pointer"
            >
              Explore Solutions
            </button>
          </motion.div>

          {/* Hero Metrics */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="grid grid-cols-3 gap-6 sm:gap-10 border-t border-white/5 pt-8 mt-14 w-full"
          >
            <div className="flex flex-col gap-1">
              <span className="text-2xl sm:text-3xl font-extrabold text-[#f7f3ef] tracking-tight">15+ Years</span>
              <span className="text-[10px] text-[#bdb5b0] uppercase tracking-widest font-mono font-semibold">Of Optimization</span>
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-2xl sm:text-3xl font-extrabold text-[#f7f3ef] tracking-tight">CRM 360°</span>
              <span className="text-[10px] text-[#bdb5b0] uppercase tracking-widest font-mono font-semibold">Active Integration</span>
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-2xl sm:text-3xl font-extrabold text-[#f7f3ef] tracking-tight">100%</span>
              <span className="text-[10px] text-[#bdb5b0] uppercase tracking-widest font-mono font-semibold">Bespoke Flows</span>
            </div>
          </motion.div>
        </div>

        {/* Right Dashboard Visual Container */}
        <div className="lg:col-span-5 flex justify-center items-center relative">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
            className="w-full max-w-[480px] relative pointer-events-auto"
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            ref={cardRef}
            style={{
              rotateX,
              rotateY,
              transformStyle: "preserve-3d",
            }}
          >
            {/* Ambient copper backing glow behind the card */}
            <div className="absolute inset-x-8 -inset-y-6 bg-[#c7795e]/15 blur-3xl pointer-events-none rounded-3xl" />

            {/* Dashboard Card Shell */}
            <div className="w-full glass-panel-heavy rounded-3xl p-6 sm:p-8 relative z-10 shadow-2xl overflow-hidden border border-white/10 select-none">
              <div className="flex items-center justify-between border-b border-white/10 pb-5 mb-6">
                <div className="flex items-center gap-2">
                  <Terminal className="h-4 w-4 text-[#c7795e]" />
                  <span className="text-[10px] font-mono tracking-widest text-[#f2c0a7] uppercase">System Orchestrator</span>
                </div>
                <div className="flex gap-1.5">
                  <div className="h-1.5 w-1.5 rounded-full bg-[#c7795e]" />
                  <div className="h-1.5 w-1.5 rounded-full bg-[#e8a489]" />
                  <div className="h-1.5 w-1.5 rounded-full bg-white/20" />
                </div>
              </div>

              {/* Grid Contents */}
              <div className="space-y-6" style={{ transform: "translateZ(30px)" }}>
                {/* Metric/Goal Panel */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white/3 rounded-2xl border border-white/5 p-4 flex flex-col justify-between">
                    <span className="text-[9px] font-mono tracking-wider text-[#bdb5b0] uppercase mb-4 flex items-center gap-1.5">
                      <Activity className="h-3 w-3 text-[#c7795e]" />
                      Pipeline Pace
                    </span>
                    <div>
                      <div className="text-3xl font-extrabold text-[#f7f3ef] tracking-tight leading-none mb-1">
                        +218%
                      </div>
                      <span className="text-[10px] text-[#e8a489] font-mono">
                        Active Stream
                      </span>
                    </div>
                  </div>

                  <div className="bg-white/3 rounded-2xl border border-white/5 p-4 flex flex-col justify-between">
                    <span className="text-[9px] font-mono tracking-wider text-[#bdb5b0] uppercase mb-4 flex items-center gap-1.5">
                      <ShieldCheck className="h-3 w-3 text-[#e8a489]" />
                      Operational Friction
                    </span>
                    <div>
                      <div className="text-3xl font-extrabold text-[#f7f3ef] tracking-tight leading-none mb-1">
                        0.0%
                      </div>
                      <span className="text-[10px] text-[#f2c0a7] font-mono">
                        Secured Operations
                      </span>
                    </div>
                  </div>
                </div>

                {/* Automation Progress Bar List */}
                <div className="bg-white/3 rounded-2xl border border-white/5 p-4 space-y-4">
                  <span className="text-[9px] font-mono tracking-wider text-[#bdb5b0] uppercase block">Synchronization Status</span>
                  <div className="space-y-3">
                    <div className="space-y-1">
                      <div className="flex justify-between text-xs text-[#f7f3ef]">
                        <span className="font-medium text-[#bdb5b0]">CRM Field Mapping</span>
                        <span className="font-mono text-[#f2c0a7]">100%</span>
                      </div>
                      <div className="h-1 bg-white/5 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: "100%" }}
                          transition={{ duration: 1.2, delay: 0.6 }}
                          className="h-full bg-gradient-to-r from-[#c7795e] to-[#f2c0a7] rounded-full"
                        />
                      </div>
                    </div>

                    <div className="space-y-1">
                      <div className="flex justify-between text-xs text-[#f7f3ef]">
                        <span className="font-medium text-[#bdb5b0]">Automatic Invoices</span>
                        <span className="font-mono text-[#f2c0a7]">100%</span>
                      </div>
                      <div className="h-1 bg-white/5 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: "100%" }}
                          transition={{ duration: 1.2, delay: 0.8 }}
                          className="h-full bg-gradient-to-r from-[#c7795e] to-[#f2c0a7] rounded-full"
                        />
                      </div>
                    </div>

                    <div className="space-y-1">
                      <div className="flex justify-between text-xs text-[#f7f3ef]">
                        <span className="font-medium text-[#bdb5b0]">Integrated Leads Flow</span>
                        <span className="font-mono text-[#f2c0a7]">100%</span>
                      </div>
                      <div className="h-1 bg-white/5 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: "100%" }}
                          transition={{ duration: 1.2, delay: 1 }}
                          className="h-full bg-gradient-to-r from-[#c7795e] to-[#f2c0a7] rounded-full"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-between text-[10px] text-[#bdb5b0] font-mono border-t border-white/5 pt-4">
                  <span>HUB SYNC ACTIVE</span>
                  <span className="text-[#e8a489] animate-pulse">ZOHO • HUBSPOT • HIGHLEVEL</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Sophisticated Dark Theme Start Growth Badge */}
          {mounted && (
            <motion.div
              initial={{ opacity: 0, scale: 0.5, rotate: -20 }}
              animate={{ opacity: 1, scale: 1, rotate: 360 }}
              transition={{ rotate: { repeat: Infinity, duration: 15, ease: "linear" }, scale: { duration: 0.6, delay: 0.5 }, opacity: { duration: 0.6, delay: 0.5 } }}
              className="absolute -bottom-8 -right-4 w-24 h-24 border border-white/10 rounded-full hidden sm:flex items-center justify-center z-20 bg-[#020303] shadow-xl"
            >
              <div className="text-[9px] uppercase tracking-tighter text-center font-bold leading-none text-[#c7795e]">
                Start<br />Growth<br />Now
              </div>
              <div className="absolute inset-0 border border-[#c7795e]/30 rounded-full scale-110 animate-pulse" />
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
}
