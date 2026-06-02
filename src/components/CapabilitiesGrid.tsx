import { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import {
  ArrowUpRight,
  BadgeCheck,
  BarChart3,
  BriefcaseBusiness,
  CircleDot,
  Code2,
  Facebook,
  Globe2,
  MailClock,
  Megaphone,
  Palette,
  Search,
  Share2,
  Workflow
} from "lucide-react";

const capabilityDetails = [
  {
    id: "01",
    title: "Business Automation",
    description:
      "Turn repetitive admin work into connected triggers, approvals, reminders, and cleaner operating flows.",
    icon: Workflow,
    tags: ["Rules", "Approvals", "Triggers", "Efficiency"]
  },
  {
    id: "02",
    title: "CRMs",
    description:
      "Build organized CRM structures for contacts, pipelines, communication history, lead tracking, and team visibility.",
    icon: BadgeCheck,
    tags: ["Pipelines", "Contacts", "Deals", "Visibility"]
  },
  {
    id: "03",
    title: "Digital Marketing",
    description:
      "Create sharper campaigns supported by better lead capture, follow-up automation, and conversion reporting.",
    icon: Megaphone,
    tags: ["Campaigns", "Funnels", "Leads", "Reports"]
  },
  {
    id: "04",
    title: "Web App Integrations",
    description:
      "Connect websites, forms, CRMs, calendars, payment tools, dashboards, and internal business systems.",
    icon: Code2,
    tags: ["APIs", "Forms", "Portals", "Sync"]
  },
  {
    id: "05",
    title: "Project Management",
    description:
      "Make projects easier to track with automated tasks, timelines, status updates, and handoff reminders.",
    icon: BriefcaseBusiness,
    tags: ["Tasks", "Teams", "Timeline", "Delivery"]
  },
  {
    id: "06",
    title: "Facebook Ads",
    description:
      "Support paid campaigns with clearer tracking, stronger lead routing, and better post-click workflows.",
    icon: Facebook,
    tags: ["Ads", "Leads", "Retargeting", "Follow-up"]
  },
  {
    id: "07",
    title: "Google Ads",
    description:
      "Improve campaign visibility by connecting ad traffic to CRM pipelines, forms, and conversion dashboards.",
    icon: BarChart3,
    tags: ["Search", "Tracking", "ROI", "Conversion"]
  },
  {
    id: "08",
    title: "Website Design & Development",
    description:
      "Design conversion-focused web experiences that connect directly to your business systems and lead flow.",
    icon: Globe2,
    tags: ["UX", "Pages", "Forms", "Speed"]
  },
  {
    id: "09",
    title: "Social Media",
    description:
      "Plan, schedule, and connect social activity to lead generation, follow-up reminders, and reporting.",
    icon: Share2,
    tags: ["Planning", "Scheduling", "Content", "Tracking"]
  },
  {
    id: "10",
    title: "Email & Scheduling",
    description:
      "Automate reminders, booking links, nurture emails, handoffs, and scheduled communication sequences.",
    icon: MailClock,
    tags: ["Sequences", "Bookings", "Nurture", "Reminders"]
  },
  {
    id: "11",
    title: "SEO",
    description:
      "Build search visibility with structured content, clean technical foundations, and performance reporting.",
    icon: Search,
    tags: ["Content", "Technical", "Ranking", "Reports"]
  },
  {
    id: "12",
    title: "Graphics",
    description:
      "Create clear branded visuals that support campaigns, websites, landing pages, and business communication.",
    icon: Palette,
    tags: ["Branding", "Creative", "Assets", "Campaigns"]
  }
];

const listVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.055,
      delayChildren: 0.08
    }
  }
};

const rowVariants = {
  hidden: { opacity: 0, y: 22, filter: "blur(8px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.78, ease: [0.16, 1, 0.3, 1] }
  }
};

export default function CapabilitiesGrid() {
  const [activeIndex, setActiveIndex] = useState(1);
  const [paused, setPaused] = useState(false);
  const active = capabilityDetails[activeIndex];

  useEffect(() => {
    if (paused) return;
    const timer = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % capabilityDetails.length);
    }, 3600);
    return () => window.clearInterval(timer);
  }, [paused]);

  const orbitDots = useMemo(() => Array.from({ length: 18 }), []);

  return (
    <section
      id="capabilities"
      className="relative overflow-hidden bg-[#050505] px-6 py-28 text-white sm:py-32 lg:py-44"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
        <div className="absolute inset-y-0 left-[12%] w-px bg-white/[0.04]" />
        <div className="absolute inset-y-0 right-[12%] w-px bg-white/[0.04]" />
        <div className="absolute -left-[18%] top-0 h-[120%] w-[56%] rotate-[38deg] bg-gradient-to-r from-transparent via-[#c9826b]/[0.08] to-transparent blur-[2px]" />
        <div className="absolute bottom-[-22%] right-[-12%] h-[520px] w-[520px] rounded-full bg-[#c9826b]/10 blur-[120px]" />
        <div className="absolute left-[42%] top-[16%] h-[360px] w-[360px] rounded-full border border-white/[0.04]" />
        <div className="absolute left-[47%] top-[21%] h-[240px] w-[240px] rounded-full border border-[#c9826b]/[0.06]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 28, filter: "blur(10px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
          className="mb-12 border-t border-white/10 pt-8 lg:mb-16"
        >
          <div className="grid gap-8 lg:grid-cols-[0.72fr_0.28fr] lg:items-end">
            <div className="max-w-4xl">
              <span className="mb-5 block font-mono text-[10px] font-bold uppercase tracking-[0.28em] text-[#c9826b]">
                // Digital Enterprise Group Services
              </span>
              <h2 className="max-w-4xl text-4xl font-extrabold uppercase leading-[0.95] tracking-[-0.052em] text-[#f7f3ef] sm:text-5xl lg:text-7xl">
                Core services for a complete growth system.
              </h2>
            </div>
            <div className="lg:pb-2">
              <div className="mb-5 h-px w-20 bg-gradient-to-r from-[#c9826b] to-transparent" />
              <p className="max-w-md text-sm leading-7 text-white/58 sm:text-base">
                Hover or tap a service to preview how each capability supports cleaner operations, connected tools, and smarter business growth.
              </p>
            </div>
          </div>
        </motion.div>

        <div className="grid overflow-hidden rounded-[2rem] border border-white/10 bg-[#080808]/95 shadow-[0_40px_160px_rgba(0,0,0,0.75)] backdrop-blur-2xl lg:grid-cols-[0.43fr_0.57fr]">
          <motion.aside
            initial={{ opacity: 0, x: -36, filter: "blur(12px)" }}
            whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
            viewport={{ once: true, margin: "-120px" }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="relative min-h-[520px] overflow-hidden border-b border-white/10 bg-[#0b0b0b] p-7 sm:p-10 lg:border-b-0 lg:border-r lg:border-white/10"
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_26%_22%,rgba(201,130,107,0.18),transparent_32%),linear-gradient(135deg,rgba(255,255,255,0.05),transparent_36%)]" />
            <motion.div
              key={`watermark-${active.id}`}
              initial={{ opacity: 0, scale: 0.92, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
              className="absolute -left-3 top-24 select-none text-[9rem] font-black leading-none tracking-[-0.08em] text-white/[0.075] sm:text-[12rem]"
            >
              {active.id}
            </motion.div>
            <div className="absolute inset-0 opacity-70">
              {orbitDots.map((_, index) => (
                <motion.span
                  key={index}
                  className="absolute h-1 w-1 rounded-full bg-[#c9826b]/40"
                  style={{
                    left: `${18 + ((index * 17) % 68)}%`,
                    top: `${16 + ((index * 23) % 70)}%`
                  }}
                  animate={{ y: [0, index % 2 ? 10 : -10, 0], opacity: [0.18, 0.55, 0.18] }}
                  transition={{ duration: 4 + (index % 4), repeat: Infinity, ease: "easeInOut" }}
                />
              ))}
            </div>

            <div className="relative z-10 flex h-full flex-col justify-between">
              <div className="flex items-start justify-between gap-6">
                <div className="space-y-2 font-mono text-[10px] font-bold uppercase tracking-[0.26em] text-white/40">
                  <p>// Module {active.id}</p>
                  <p className="text-[#c9826b]">// Active capability</p>
                </div>
                <motion.div
                  key={`signal-${active.id}`}
                  initial={{ opacity: 0, width: 24 }}
                  animate={{ opacity: 1, width: 88 }}
                  transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
                  className="mt-2 h-px bg-gradient-to-r from-[#c9826b] via-[#f2c0a7]/70 to-transparent"
                />
              </div>

              <AnimatePresence mode="wait">
                <motion.div
                  key={active.id}
                  initial={{ opacity: 0, y: 24, filter: "blur(10px)" }}
                  animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  exit={{ opacity: 0, y: -18, filter: "blur(10px)" }}
                  transition={{ duration: 0.48, ease: [0.16, 1, 0.3, 1] }}
                  className="mt-28 max-w-xl"
                >
                  <h3 className="text-4xl font-light leading-[0.98] tracking-[-0.045em] text-white sm:text-5xl">
                    {active.title}
                  </h3>
                  <p className="mt-6 text-base leading-8 text-white/62 sm:text-lg">
                    {active.description}
                  </p>
                  <div className="mt-8 flex flex-wrap items-center gap-x-4 gap-y-2 font-mono text-[10px] font-bold uppercase tracking-[0.18em] text-white/48">
                    {active.tags.map((tag, tagIndex) => (
                      <span key={tag} className="inline-flex items-center gap-4">
                        <span>{tag}</span>
                        {tagIndex < active.tags.length - 1 && <span className="h-px w-5 bg-white/18" />}
                      </span>
                    ))}
                  </div>
                </motion.div>
              </AnimatePresence>

              <div className="relative mt-12 h-1 overflow-hidden rounded-full bg-white/10">
                <motion.div
                  key={`progress-${active.id}`}
                  className="h-full rounded-full bg-gradient-to-r from-[#a86755] to-[#f2c0a7]"
                  initial={{ width: "0%" }}
                  animate={{ width: "100%" }}
                  transition={{ duration: paused ? 0.35 : 3.6, ease: "linear" }}
                />
              </div>
            </div>
          </motion.aside>

          <motion.div
            variants={listVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="divide-y divide-white/10"
          >
            <div className="hidden border-b border-white/10 px-7 py-5 font-mono text-[10px] font-bold uppercase tracking-[0.26em] text-white/38 sm:grid sm:grid-cols-[80px_1fr_110px] lg:px-9">
              <span>Index</span>
              <span>Capability</span>
              <span className="text-right">Status</span>
            </div>
            {capabilityDetails.map((item, index) => {
              const isActive = activeIndex === index;
              return (
                <motion.button
                  key={item.id}
                  type="button"
                  variants={rowVariants}
                  onMouseEnter={() => setActiveIndex(index)}
                  onFocus={() => setActiveIndex(index)}
                  onClick={() => setActiveIndex(index)}
                  className="group relative grid w-full grid-cols-[54px_1fr_38px] items-center gap-4 px-5 py-6 text-left transition-colors duration-500 hover:bg-white/[0.035] sm:grid-cols-[80px_1fr_110px] sm:px-7 lg:px-9"
                >
                  <motion.div
                    className="absolute inset-y-0 left-0 w-[3px] bg-[#c9826b]"
                    initial={false}
                    animate={{ opacity: isActive ? 1 : 0, scaleY: isActive ? 1 : 0.15 }}
                    transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                  />
                  <span className={`font-mono text-[11px] font-bold tracking-[0.18em] transition-colors duration-300 ${isActive ? "text-[#f2c0a7]" : "text-white/28 group-hover:text-white/50"}`}>
                    // {item.id}
                  </span>
                  <span className="min-w-0">
                    <span className={`block text-lg font-extrabold uppercase tracking-[0.06em] transition-colors duration-300 sm:text-xl ${isActive ? "text-white" : "text-white/62 group-hover:text-white"}`}>
                      {item.title}
                    </span>
                    <span className={`mt-1 hidden max-w-[44rem] text-sm leading-6 transition-all duration-300 md:block ${isActive ? "text-white/55" : "text-white/0 group-hover:text-white/38"}`}>
                      {item.description}
                    </span>
                  </span>
                  <span className="flex items-center justify-end gap-3">
                    <span className={`hidden font-mono text-[10px] font-bold uppercase tracking-[0.18em] transition-colors duration-300 sm:inline ${isActive ? "text-[#f2c0a7]" : "text-white/22 group-hover:text-white/44"}`}>
                      {isActive ? "Open" : "Preview"}
                    </span>
                    <span className={`transition-all duration-500 ${isActive ? "translate-x-0 text-[#f2c0a7] opacity-100" : "translate-x-[-6px] text-white/0 opacity-0 group-hover:translate-x-0 group-hover:text-white/35 group-hover:opacity-100"}`}>
                      <ArrowUpRight size={16} />
                    </span>
                  </span>
                </motion.button>
              );
            })}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="mt-8 flex flex-col gap-4 border-t border-white/10 pt-6 font-mono text-[10px] font-bold uppercase tracking-[0.22em] text-white/35 sm:flex-row sm:items-center sm:justify-between"
        >
          <span>Digital systems engineered for cleaner operations</span>
          <span className="inline-flex items-center gap-2 text-[#c9826b]">
            <CircleDot size={14} /> Hover a capability to explore
          </span>
        </motion.div>
      </div>
    </section>
  );
}
