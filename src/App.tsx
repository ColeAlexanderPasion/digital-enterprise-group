import { useEffect, useRef, useState } from "react";
import type { ReactNode } from "react";
import { motion, useInView, useMotionValue, useScroll, useTransform } from "motion/react";
import {
  ArrowUpRight,
  Award,
  BarChart3,
  BriefcaseBusiness,
  CheckCircle2,
  ChevronRight,
  Database,
  FileSignature,
  Filter,
  Globe2,
  Layers3,
  Mail,
  MapPin,
  Megaphone,
  Menu,
  MousePointer2,
  Phone,
  PlugZap,
  Rocket,
  SearchCheck,
  ShieldCheck,
  Sparkles,
  Users,
  Workflow,
  X,
  Zap,
} from "lucide-react";
import "./index.css";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "Automation", href: "#automation" },
  { label: "Projects", href: "#projects" },
  { label: "About", href: "#about" },
  { label: "Certificates", href: "#certificates" },
  { label: "Contact", href: "#contact" },
];

const headerNavItems = navItems.filter((item) => item.label !== "Projects");

const heroStats = [
  { value: "15+", label: "Years helping businesses grow digitally" },
  { value: "360°", label: "Automation, CRM, marketing, and integration support" },
  { value: "CRM", label: "Certified setup, migration, and workflow consulting" },
];

const services = [
  {
    id: "01",
    title: "Business Automation Solutions",
    description:
      "Replace repetitive manual work with connected systems, templates, approvals, reminders, and smart triggers built around your actual workflow.",
    icon: Zap,
  },
  {
    id: "02",
    title: "Workflows",
    description:
      "Create clear step-by-step processes so your team knows what happens next, who owns each task, and when action is required.",
    icon: Workflow,
  },
  {
    id: "03",
    title: "CRM Setup",
    description:
      "Organize leads, conversations, contacts, sales stages, client records, and follow-ups inside one clean CRM environment.",
    icon: Users,
  },
  {
    id: "04",
    title: "Sales Pipeline and Funnel",
    description:
      "Build visual pipelines for lead scoring, active deals, funnel tracking, reminders, and conversion-focused reporting.",
    icon: Filter,
  },
  {
    id: "05",
    title: "Digital Marketing Solutions",
    description:
      "Connect campaigns, forms, ads, email, social media, and tracking so your marketing works with your business system.",
    icon: Megaphone,
  },
  {
    id: "06",
    title: "Data Migration",
    description:
      "Move spreadsheets, customer files, old records, product lists, and business data into clean, secure, modern systems.",
    icon: Database,
  },
  {
    id: "07",
    title: "Certified Expertise & Consultation",
    description:
      "Get practical guidance from a certified team that understands automation tools, CRM platforms, and digital growth systems.",
    icon: Award,
  },
];

const automationItems = [
  "Employee Onboarding",
  "Operations Management",
  "Accounts Payable/Invoicing",
  "Sales Pipeline and Funnel",
  "Logistics",
  "Contract and Proposal Management",
  "Recruitment",
  "Payroll",
  "Load Management",
  "Customer Management",
  "Marketing Campaigns",
  "Request Management",
  "Follow up Reminders",
  "And many more",
];

const capabilityGroups = [
  {
    title: "Business Systems",
    icon: BriefcaseBusiness,
    items: ["BUSINESS AUTOMATION", "WEB APP INTEGRATIONS", "CRMs", "PROJECT MANAGEMENT"],
  },
  {
    title: "Digital Marketing",
    icon: Megaphone,
    items: ["DIGITAL MARKETING", "FACEBOOK ADS", "GOOGLE ADS", "SOCIAL MEDIA"],
  },
  {
    title: "Creative & Growth",
    icon: Layers3,
    items: ["WEBSITE DESIGN & DEVELOPMENT", "EMAIL & SCHEDULING", "SEO", "GRAPHICS"],
  },
];

const protocolServices = [
  "BUSINESS AUTOMATION",
  "DIGITAL MARKETING",
  "WEB APP INTEGRATIONS",
  "CRMS",
  "PROJECT MANAGEMENT",
  "FACEBOOK ADS",
  "GOOGLE ADS",
  "WEBSITE DESIGN & DEVELOPMENT",
  "SOCIAL MEDIA",
  "EMAIL & SCHEDULING",
  "SEO",
  "GRAPHICS",
];

const systemProjects = [
  {
    id: "01",
    type: "CRM System",
    title: "CRM Growth Command",
    description: "A centralized customer database blueprint for lead capture, pipeline movement, follow-up reminders, and sales visibility.",
    stat: "92%",
    statLabel: "lead routing clarity",
    tags: ["CRM Setup", "Pipeline", "Follow-ups"],
  },
  {
    id: "02",
    type: "Automation Flow",
    title: "Operations Automation Hub",
    description: "A workflow automation model for onboarding, requests, invoices, approvals, logistics updates, and internal notifications.",
    stat: "68%",
    statLabel: "manual work reduced",
    tags: ["Workflows", "Requests", "Approvals"],
  },
  {
    id: "03",
    type: "Marketing Engine",
    title: "Digital Campaign System",
    description: "A connected marketing setup for ads, email scheduling, SEO touchpoints, campaign tracking, and conversion-focused reports.",
    stat: "2x+",
    statLabel: "cleaner funnel potential",
    tags: ["Ads", "SEO", "Reporting"],
  },
];

const reasons = [
  {
    title: "Centralized Customer Data",
    description: "Bring scattered lead forms, chat logs, email lists, and contact records into one organized business system.",
    icon: Database,
  },
  {
    title: "Automated Workflows for Efficiency",
    description: "Reduce repeated manual work, prevent missed tasks, and keep operations moving even when your team is busy.",
    icon: Workflow,
  },
  {
    title: "Seamless Integration with Your Tools",
    description: "Connect calendars, forms, emails, CRMs, ads, notifications, and project tools into a smoother ecosystem.",
    icon: PlugZap,
  },
  {
    title: "Actionable Insights & Reporting",
    description: "Track sales performance, workflow progress, campaign activity, and bottlenecks with clearer dashboards.",
    icon: BarChart3,
  },
  {
    title: "Scalable Solutions",
    description: "Build systems that can grow with new leads, users, branches, teams, campaigns, and operational complexity.",
    icon: Rocket,
  },
];

const certificates = [
  { title: "ClickUp Expert Certificate of Completion", image: "/assets/certificates/certificate-01.jpg" },
  { title: "Certificate of Completion - Online Business Expert", image: "/assets/certificates/certificate-02.jpg" },
  { title: "Certificate of Completion - Social Media Expert", image: "/assets/certificates/certificate-03.jpg" },
  { title: "Digital Marketing Strategist Certified badge", image: "/assets/certificates/certificate-04.png" },
  { title: "Facebook Blueprint Certification badge", image: "/assets/certificates/certificate-05.png" },
  { title: "Google Project Management Certificate", image: "/assets/certificates/certificate-06.png" },
  { title: "Google Ads Certified badge", image: "/assets/certificates/certificate-07.png" },
  { title: "Inbound Marketing Certified badge", image: "/assets/certificates/certificate-08.png" },
  { title: "Keap Automation Champion Certified badge", image: "/assets/certificates/certificate-09.png" },
  { title: "Keap Lifecycle Automation Certified badge", image: "/assets/certificates/certificate-10.png" },
  { title: "Make certification for Digital Enterprise Group", image: "/assets/certificates/certificate-11.jpg" },
  { title: "Monday CRM Certified certificate", image: "/assets/certificates/certificate-12.png" },
  { title: "Pipedrive Leadbooster certificate for Digital Enterprise Group LLC", image: "/assets/certificates/certificate-13.jpg" },
  { title: "Social Media Specialist Certified badge", image: "/assets/certificates/certificate-14.png" },
];

const awards = [
  { title: "Best of 2025", image: "/assets/certificates/award-15.png" },
  { title: "Best of 2026", image: "/assets/certificates/award-16.png" },
];

function scrollToId(id: string) {
  const target = document.querySelector(id);
  if (target) target.scrollIntoView({ behavior: "smooth", block: "start" });
}

function fadeUp(delay = 0) {
  return {
    initial: { opacity: 0, y: 34, filter: "blur(12px)" },
    whileInView: { opacity: 1, y: 0, filter: "blur(0px)" },
    viewport: { once: true, margin: "-90px" },
    transition: { duration: 0.75, delay, ease: [0.16, 1, 0.3, 1] },
  } as const;
}

function AnimatedNumber({ value, delay = 0, duration = 1500 }: { value: number; delay?: number; duration?: number }) {
  const ref = useRef<HTMLSpanElement | null>(null);
  const inView = useInView(ref, { once: true, amount: 0.45 });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView) return;

    let frame = 0;
    let raf = 0;
    const start = performance.now() + delay * 1000;
    const easeOut = (t: number) => 1 - Math.pow(1 - t, 3);

    const tick = (now: number) => {
      if (now < start) {
        raf = requestAnimationFrame(tick);
        return;
      }

      const progress = Math.min((now - start) / duration, 1);
      const nextValue = Math.round(easeOut(progress) * value);
      if (nextValue !== frame) {
        frame = nextValue;
        setDisplay(nextValue);
      }

      if (progress < 1) raf = requestAnimationFrame(tick);
    };

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, value, delay, duration]);

  return <span ref={ref}>{display}</span>;
}

function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="site-header original-site-header">
      <nav className="nav-shell original-nav-shell" aria-label="Primary navigation">
        <a className="brand-mark original-brand-mark" href="#home" aria-label="Digital Enterprise Group home">
          <img src="/assets/deg-logo.png" alt="Digital Enterprise Group" />
        </a>

        <div className="desktop-nav original-desktop-nav">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className={item.label === "Home" ? "is-active" : undefined}>{item.label}</a>
          ))}
        </div>

        <button className="nav-button desktop-only original-nav-button" type="button" onClick={() => scrollToId("#contact")}>
          Get in Touch <ArrowUpRight size={15} />
        </button>

        <button className="mobile-toggle original-mobile-toggle" onClick={() => setOpen((v) => !v)} aria-label="Toggle menu">
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {open && (
        <motion.div
          className="mobile-menu original-mobile-menu"
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -12 }}
        >
          {navItems.map((item) => (
            <a key={item.href} href={item.href} onClick={() => setOpen(false)}>{item.label}</a>
          ))}
          <button type="button" onClick={() => { setOpen(false); scrollToId("#contact"); }}>
            Get in Touch <ArrowUpRight size={16} />
          </button>
        </motion.div>
      )}
    </header>
  );
}

function MagneticButton({ children, variant = "primary", onClick }: { children: ReactNode; variant?: "primary" | "secondary"; onClick?: () => void }) {
  return (
    <button type="button" className={`magnetic-btn ${variant}`} onClick={onClick}>
      {children}
    </button>
  );
}

function SectionIntro({ eyebrow, title, text }: { eyebrow: string; title: string; text: string }) {
  return (
    <div className="section-intro">
      <motion.div {...fadeUp(0)}>
        <span className="eyebrow">{eyebrow}</span>
        <h2>{title}</h2>
      </motion.div>
      <motion.p {...fadeUp(0.08)}>{text}</motion.p>
    </div>
  );
}

function HeroDashboard() {
  const ref = useRef<HTMLDivElement | null>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-80, 80], [6, -6]);
  const rotateY = useTransform(x, [-80, 80], [-7, 7]);

  const handleMove = (event: React.PointerEvent<HTMLDivElement>) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    x.set(event.clientX - rect.left - rect.width / 2);
    y.set(event.clientY - rect.top - rect.height / 2);
  };

  return (
    <motion.div
      ref={ref}
      className="dashboard-shell"
      onPointerMove={handleMove}
      onPointerLeave={() => { x.set(0); y.set(0); }}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      initial={{ opacity: 0, y: 40, scale: 0.96 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 1, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="dashboard-top">
        <div className="window-dots"><i /><i /><i /></div>
        <span>DEG Growth System</span>
      </div>
      <div className="dashboard-grid">
        <div className="dash-panel chart-panel">
          <span>Automation Impact</span>
          <svg viewBox="0 0 360 180" className="chart-line" aria-hidden="true">
            <defs>
              <linearGradient id="chartStroke" x1="0" x2="1">
                <stop offset="0%" stopColor="#C9826B" />
                <stop offset="60%" stopColor="#E8C8BB" />
                <stop offset="100%" stopColor="#A86755" />
              </linearGradient>
            </defs>
            <path className="grid-line" d="M20 145H340M20 100H340M20 55H340" />
            <motion.path
              d="M24 138 C68 118, 80 132, 116 92 C158 48, 176 72, 214 62 C254 50, 270 30, 336 24"
              fill="none"
              stroke="url(#chartStroke)"
              strokeWidth="5"
              strokeLinecap="round"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 1.8, delay: 0.7, ease: "easeInOut" }}
            />
            {[24, 116, 214, 336].map((cx, index) => (
              <motion.circle
                key={cx}
                cx={cx}
                cy={[138, 92, 62, 24][index]}
                r="5"
                fill="#C9826B"
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 1 + index * 0.18 }}
              />
            ))}
          </svg>
        </div>
        <div className="dash-panel kpi-panel">
          <span>Manual Work Reduced</span>
          <strong>68%</strong>
          <p>Automated follow-ups, pipeline movement, and client reminders.</p>
        </div>
        <div className="dash-panel pipeline-panel">
          <span>Connected Pipeline</span>
          {[
            ["Lead Capture", "92%"],
            ["CRM Routing", "78%"],
            ["Follow-up", "86%"],
          ].map(([label, width]) => (
            <div className="pipeline-row" key={label}>
              <small>{label}</small>
              <div><motion.i initial={{ width: 0 }} animate={{ width }} transition={{ duration: 1.2, delay: 0.8 }} /></div>
              <b>{width}</b>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

function Hero() {
  const words = ["Smarter Systems.", "Stronger Business."];

  return (
    <section id="home" className="deg-editorial-hero">
      <div className="hero-hairlines" aria-hidden="true" />
      <div className="deg-hero-inner">
        <motion.div
          className="hero-kicker-row"
          initial={{ opacity: 0, y: -18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
        >
          <span>Digital Enterprise Group</span>
          <span>Business automation · CRM · Digital marketing</span>
        </motion.div>

        <div className="hero-bottom-layout">
          <motion.p
            className="hero-micro-copy"
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.58, ease: [0.22, 1, 0.36, 1] }}
          >
            Your Partner in Digital Growth<br />
            automation, CRM, marketing, and scalable digital systems.
          </motion.p>

          <motion.p
            className="hero-description-copy"
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.68, ease: [0.22, 1, 0.36, 1] }}
          >
            We help businesses streamline operations, automate workflows, improve lead management, and build scalable systems that drive measurable growth.
          </motion.p>

          <h1 className="hero-slide-heading" aria-label="Smarter Systems. Stronger Business.">
            {words.map((word, index) => (
              <span className="hero-word-clip" key={word}>
                <motion.span
                  initial={{ y: "112%" }}
                  animate={{ y: 0 }}
                  transition={{ duration: 0.76, delay: 0.42 + index * 0.14, ease: [0.22, 1, 0.36, 1] }}
                >
                  {word}
                </motion.span>
              </span>
            ))}
          </h1>
        </div>
      </div>
    </section>
  );
}

function MarqueeBand() {
  const labels = [
    "SEO Integration",
    "Web App Integrations",
    "Lead Generation",
    "Email Scheduling",
    "Ads Integration",
    "CRM Setup",
    "Workflow Automation",
    "Data Migration",
    "Sales Pipeline",
  ];
  return (
    <section className="focus-marquee-band" aria-label="Strategic focus marquee">
      <div className="focus-marquee-labels">
        <span>Strategic Focus</span>
        <span>Enterprise Execution</span>
      </div>
      <div className="focus-marquee-window">
        <div className="focus-marquee-track">
          {[...labels, ...labels, ...labels].map((label, index) => (
            <span key={`${label}-${index}`}><i />{label}</span>
          ))}
        </div>
      </div>
    </section>
  );
}

function Stats() {
  const stats = [
    { value: 15, suffix: "+", label: "Years of Experience" },
    { value: 100, suffix: "%", label: "Client Satisfaction" },
    { value: 500, suffix: "+", label: "Businesses Empowered" },
    { value: 2, suffix: "x+", label: "Average Conversion Rate" },
  ];
  return (
    <section className="protocol-stats-section">
      <div className="protocol-stats-grid">
        {stats.map((stat, index) => (
          <motion.div key={stat.label} className="protocol-stat-card" {...fadeUp(index * 0.08)}>
            <span>{String(index + 1).padStart(2, "0")}</span>
            <strong><AnimatedNumber value={stat.value} delay={index * 0.08} /><em>{stat.suffix}</em></strong>
            <p>{stat.label}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

function Services() {
  return (
    <section id="services" className="interactive-service-section">
      <div className="service-orb service-orb-one" />
      <div className="service-orb service-orb-two" />
      <div className="interactive-service-wrap">
        <motion.div className="interactive-service-copy" {...fadeUp()}>
          <span className="eyebrow dark-eyebrow">Services</span>
          <h2>High-touch systems for automation, CRM, and digital growth.</h2>
          <p>
            Strategic automation, CRM setup, campaign systems, and integrations built to make daily operations clearer, faster, and easier to manage.
          </p>
          <MagneticButton onClick={() => scrollToId("#contact")}>Request system audit <ArrowUpRight size={18} /></MagneticButton>
        </motion.div>

        <div className="interactive-service-list">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.article
                key={service.id}
                className="interactive-service-card"
                initial={{ opacity: 0, y: 42, scale: 0.97 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: "-110px" }}
                transition={{ duration: 0.75, delay: index * 0.045, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ y: -8 }}
                style={{ top: 96 + index * 14 }}
              >
                <div className="service-card-line" />
                <div className="service-card-meta">
                  <span>// MODULE {service.id}</span>
                  <i>ACTIVE SYSTEM</i>
                </div>
                <div className="service-card-main">
                  <span className="service-card-number">{service.id}</span>
                  <div>
                    <h3>{service.title}</h3>
                    <p>{service.description}</p>
                  </div>
                  <div className="service-card-icon"><Icon size={26} /></div>
                </div>
                <div className="service-card-footer">
                  <span>View integration specifications</span>
                  <ArrowUpRight size={16} />
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function ProjectVisual({ index }: { index: number }) {
  const bars = index === 0 ? [86, 64, 92] : index === 1 ? [74, 88, 57] : [68, 82, 96];
  return (
    <div className="project-visual" aria-hidden="true">
      <div className="project-browser-head"><i /><i /><i /><span>system-preview.0{index + 1}</span></div>
      <div className="project-screen-grid">
        <div className="project-mini-panel tall">
          <span />
          <strong>{index === 0 ? "CRM" : index === 1 ? "FLOW" : "ADS"}</strong>
          <small>Live dashboard</small>
        </div>
        <div className="project-mini-panel bars">
          {bars.map((bar, i) => <em key={i} style={{ width: `${bar}%` }} />)}
        </div>
        <div className="project-mini-panel chart">
          <svg viewBox="0 0 240 120">
            <motion.path
              d="M12 98 C48 70, 70 86, 102 48 C132 18, 156 54, 184 32 C206 16, 216 20, 228 14"
              fill="none"
              stroke="currentColor"
              strokeWidth="7"
              strokeLinecap="round"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.4, delay: 0.2 }}
            />
          </svg>
        </div>
      </div>
    </div>
  );
}

function ProjectCard({ project, index, total }: { project: typeof systemProjects[number]; index: number; total: number }) {
  const ref = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const targetScale = 1 - (total - 1 - index) * 0.035;
  const scale = useTransform(scrollYProgress, [0.15, 0.85], [1, targetScale]);

  return (
    <div ref={ref} className="project-sticky-shell">
      <motion.article className="project-card" style={{ scale, top: 92 + index * 30 }}>
        <div className="project-card-head">
          <span className="project-number">{project.id}</span>
          <div>
            <small>{project.type}</small>
            <h3>{project.title}</h3>
          </div>
          <button type="button">View system <ArrowUpRight size={16} /></button>
        </div>
        <div className="project-card-body">
          <div className="project-copy">
            <p>{project.description}</p>
            <strong>{project.stat}</strong>
            <span>{project.statLabel}</span>
            <div className="project-tags">
              {project.tags.map((tag) => <i key={tag}>{tag}</i>)}
            </div>
          </div>
          <ProjectVisual index={index} />
        </div>
      </motion.article>
    </div>
  );
}

function Projects() {
  return (
    <section id="projects" className="projects-section">
      <div className="projects-wrap">
        <motion.div className="projects-head" {...fadeUp()}>
          <span className="eyebrow dark-eyebrow">Projects</span>
          <h2>Interactive system previews for CRM, automation, and marketing growth.</h2>
          <p>
            Explore how Digital Enterprise Group structures CRM, automation, and marketing systems into clear operating dashboards that support faster decisions and measurable growth.
          </p>
        </motion.div>
        <div className="project-stack">
          {systemProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} total={systemProjects.length} />
          ))}
        </div>
      </div>
    </section>
  );
}


function Automation() {
  return (
    <section id="automation" className="content-section white-bg">
      <div className="automation-layout">
        <motion.div className="sticky-copy" {...fadeUp()}>
          <span className="eyebrow">Things you can automate</span>
          <h2>Save money by removing repeated manual work.</h2>
          <p>
            Automations are not only for large companies. They help small teams move faster by handling reminders, routing, records, requests, reporting, and customer communication in the background.
          </p>
          <MagneticButton onClick={() => scrollToId("#contact")}>Find out how <ArrowUpRight size={18} /></MagneticButton>
        </motion.div>
        <div className="automation-grid">
          {automationItems.map((item, index) => (
            <motion.div className="automation-item" key={item} {...fadeUp(index * 0.035)}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <strong>{item}</strong>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function WideCta() {
  return (
    <section className="wide-cta-section" aria-label="Find out how Digital Enterprise Group can help">
      <motion.div className="wide-cta" {...fadeUp()}>
        <div className="wide-cta-side">
          <span className="wide-cta-rule" />
          <span className="eyebrow">Find out how</span>
          <p>
            Let us review your current process, identify manual bottlenecks, and map the simplest automation path for your business.
          </p>
        </div>

        <div className="wide-cta-main">
          <h2>SAVE MONEY AND AUTOMATE YOUR BUSINESS NOW!</h2>
          <MagneticButton onClick={() => scrollToId("#contact")}>
            Get in touch <ArrowUpRight size={18} />
          </MagneticButton>
        </div>
      </motion.div>
    </section>
  );
}

function Capabilities() {
  return (
    <section className="protocol-section">
      <div className="protocol-wrap">
        <motion.div className="protocol-head" {...fadeUp()}>
          <span className="eyebrow dark-eyebrow">Digital Enterprise Group Services</span>
          <h2>Core services for a complete growth system.</h2>
          <p>
            A focused service ecosystem covering automation, marketing, integrations, CRM, project management, advertising, web development, scheduling, SEO, and creative support.
          </p>
        </motion.div>

        <motion.div
          className="protocol-grid"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-120px" }}
          variants={{ hidden: {}, show: { transition: { staggerChildren: 0.045 } } }}
        >
          {protocolServices.map((item, index) => (
            <motion.article
              className="protocol-card"
              key={item}
              variants={{ hidden: { opacity: 0, y: 24, filter: "blur(10px)" }, show: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.65, ease: [0.16, 1, 0.3, 1] } } }}
            >
              <div className="protocol-topline" />
              <div className="protocol-meta">
                <span>// {String(index + 1).padStart(2, "0")}</span>
                <i aria-hidden="true" />
              </div>
              <h3>{item}</h3>
              <div className="protocol-bottomline" />
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="content-section white-bg about-section">
      <div className="about-grid">
        <motion.div {...fadeUp()}>
          <span className="eyebrow">About us</span>
          <h2>For over 15 years, Digital Enterprise Group specializes in helping businesses grow through smarter systems.</h2>
          <p>
            Digital Enterprise Group helps businesses organize operations, build CRM systems, connect tools, automate repetitive work, and improve digital marketing performance. We focus on practical systems that are easy to understand, useful for daily work, and built to support long-term digital growth.
          </p>
          <p>
            Our work combines business automation, workflow planning, CRM setup, digital marketing, data migration, certified consultation, and web app integrations so small businesses can save time, reduce missed follow-ups, and create clearer processes.
          </p>
        </motion.div>
        <motion.div className="about-visual" {...fadeUp(0.12)}>
          <div className="orbit orbit-one" />
          <div className="orbit orbit-two" />
          <div className="core-badge">
            <img src="/assets/deg-logo.png" alt="Digital Enterprise Group" />
            <span>Certified digital systems partner</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function WhyChooseUs() {
  return (
    <section className="content-section soft-bg">
      <div className="wrap">
        <SectionIntro
          eyebrow="Why choose us"
          title="Clear systems, better visibility, and less operational friction."
          text="Disconnected tools create missed leads and slow teams down. DEG builds connected systems that make your information easier to manage and your follow-ups easier to track."
        />
        <div className="reasons-grid">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;
            return (
              <motion.article className="reason-card" key={reason.title} {...fadeUp(index * 0.06)}>
                <Icon className="line-icon" />
                <span>/0{index + 1}</span>
                <h3>{reason.title}</h3>
                <p>{reason.description}</p>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function Certificates() {
  const sliderItems = certificates;

  return (
    <section id="certificates" className="content-section white-bg certificates-section">
      <div className="wrap">
        <SectionIntro
          eyebrow="Certifications"
          title="Certified across the platforms businesses use every day."
          text="CRM, automation, ads, analytics, project management, and digital marketing certifications support the systems DEG builds for clients."
        />
      </div>

      <div className="certificate-stream" aria-label="Continuous certificate slider">
        <div className="certificate-lane">
          <div className="certificate-track certificate-track-slow">
            {[...sliderItems, ...sliderItems, ...sliderItems].map((cert, index) => (
              <img className="certificate-image" key={`cert-${cert.title}-${index}`} src={cert.image} alt={cert.title} loading="lazy" />
            ))}
          </div>
        </div>
      </div>

      <motion.div className="awards-block restored-awards" {...fadeUp(0.12)}>
        <div>
          <span className="eyebrow">Recognition</span>
          <h3>Recognized for digital growth systems and client-focused execution.</h3>
          <p>Additional recognition that supports the certified automation, CRM, and digital marketing work behind Digital Enterprise Group.</p>
        </div>
        <div className="award-grid">
          {awards.map((award) => (
            <figure className="award-card" key={award.title}>
              <img src={award.image} alt={award.title} loading="lazy" />
              <figcaption>{award.title}</figcaption>
            </figure>
          ))}
        </div>
      </motion.div>
    </section>
  );
}


function Contact() {
  return (
    <section id="contact" className="content-section charcoal-bg contact-section modern-contact-section">
      <div className="contact-grid modern-contact-grid">
        <motion.div className="contact-copy-modern" {...fadeUp()}>
          <span className="eyebrow">Contact</span>
          <h2>Build a smarter system around your business.</h2>
          <p>
            Share what feels repetitive, messy, or hard to track. DEG can review your tools, map the workflow, and suggest a clear automation path that fits your current operations.
          </p>
          <div className="contact-proof-row">
            <span><CheckCircle2 size={16} /> CRM review</span>
            <span><CheckCircle2 size={16} /> Workflow audit</span>
            <span><CheckCircle2 size={16} /> Integration plan</span>
          </div>
          <div className="contact-list modern-contact-list">
            <a href="mailto:info@digitalenterprisegroup.com"><Mail size={18} /> info@digitalenterprisegroup.com</a>
            <a href="tel:+0000000000"><Phone size={18} /> Contact number</a>
            <a href="https://maps.app.goo.gl/JmRFtkG8xcEsjy6v7" target="_blank" rel="noreferrer"><MapPin size={18} /> View location on Google Maps</a>
          </div>
        </motion.div>
        <motion.form
          className="contact-panel contact-form modern-contact-form"
          {...fadeUp(0.12)}
          onSubmit={(event) => {
            event.preventDefault();
            window.location.href = "mailto:info@digitalenterprisegroup.com?subject=Digital Enterprise Group Website Inquiry";
          }}
        >
          <div className="form-topbar">
            <div className="window-dots"><i /><i /><i /></div>
            <span>System request</span>
          </div>
          <div className="form-heading-wrap">
            <span className="eyebrow">Send a message</span>
            <h3>Tell us what you want to automate.</h3>
            <p>Answer a few details and we will turn your process into a practical system direction.</p>
          </div>
          <div className="form-grid">
            <label>
              <span>Name</span>
              <input type="text" name="name" placeholder="Your name" required />
            </label>
            <label>
              <span>Email</span>
              <input type="email" name="email" placeholder="you@email.com" required />
            </label>
            <label>
              <span>Company</span>
              <input type="text" name="company" placeholder="Company name" />
            </label>
            <label>
              <span>Service</span>
              <select name="service" defaultValue="">
                <option value="" disabled>Select service</option>
                <option>Business Automation</option>
                <option>CRM Setup</option>
                <option>Digital Marketing</option>
                <option>Web App Integrations</option>
              </select>
            </label>
          </div>
          <label className="message-field">
            <span>Message</span>
            <textarea name="message" rows={5} placeholder="Example: We need help automating leads, follow-ups, CRM updates, reports, or approvals." required />
          </label>
          <div className="form-footer-row">
            <small>No pressure — just a clear first look at your workflow.</small>
            <button type="submit" className="form-submit">Send inquiry <ArrowUpRight size={17} /></button>
          </div>
        </motion.form>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <div>
        <img src="/assets/deg-logo.png" alt="Digital Enterprise Group" />
        <span>© 2026 Digital Enterprise Group. All rights reserved.</span>
      </div>
      <div>
        {navItems.slice(1).map((item) => <a key={item.href} href={item.href}>{item.label}</a>)}
      </div>
    </footer>
  );
}

export default function App() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(max > 0 ? (window.scrollY / max) * 100 : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="app-shell">
      <div className="scroll-progress" style={{ width: `${progress}%` }} />
      <Header />
      <main>
        <Hero />
        <MarqueeBand />
        <Stats />
        <Services />
        <Projects />
        <Automation />
        <WideCta />
        <Capabilities />
        <About />
        <WhyChooseUs />
        <Certificates />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
