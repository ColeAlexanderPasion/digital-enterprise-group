import { ServiceItem, StatItem, AutomateItem, ReasonItem, CertificationItem, CapabilityItem } from "./types";

export const servicesData: ServiceItem[] = [
  {
    id: "01",
    title: "Business Automation Solutions",
    description: "Replace repetitive manual work with streamlined digital templates and triggers custom-made for your workflow.",
    iconName: "Cpu"
  },
  {
    id: "02",
    title: "Workflows",
    description: "Connect multi-step operations to ensure everyone knows what to do, when to do it, and what comes next.",
    iconName: "GitMerge"
  },
  {
    id: "03",
    title: "CRM Setup",
    description: "Track interactions, organize conversations, and turn relationship data into structured client histories.",
    iconName: "Users"
  },
  {
    id: "04",
    title: "Sales Pipeline and Funnel",
    description: "Create visual dashboards to manage lead scoring, active deals, follow-ups, and conversion metrics.",
    iconName: "Filter"
  },
  {
    id: "05",
    title: "Digital Marketing Solutions",
    description: "Develop automated campaigns, capture active interest, and follow up instantly using smart communication channels.",
    iconName: "Megaphone"
  },
  {
    id: "06",
    title: "Data Migration",
    description: "Cleanly transition your historic customer records, spreadsheets, and operational files into secure modern systems.",
    iconName: "DatabaseBackup"
  },
  {
    id: "07",
    title: "Certified Expertise & Consultation",
    description: "Leverage decades of technical experience to analyze bottlenecks and select the most cost-effective software.",
    iconName: "Award"
  }
];

export const statsData: StatItem[] = [
  {
    value: 15,
    suffix: "+",
    label: "Years of Experience"
  },
  {
    value: 100,
    suffix: "%",
    label: "Client Satisfaction"
  },
  {
    value: 500,
    suffix: "+",
    label: "Businesses Empowered"
  },
  {
    value: 2,
    suffix: "x+",
    label: "Average Conversion Rate"
  }
];

export const automateData: AutomateItem[] = [
  {
    id: "01",
    title: "Employee Onboarding",
    description: "Trigger welcome emails, system access, training portals, and team introductions automatically when a contract is signed."
  },
  {
    id: "02",
    title: "Operations Management",
    description: "Coordinate team schedules, project tracking, progress reports, and notification alerts from a single central console."
  },
  {
    id: "03",
    title: "Accounts Payable & Invoicing",
    description: "Generate bills, record payment receipt, scan receipts, match purchase orders, and nudge late payers automatically."
  },
  {
    id: "04",
    title: "Sales Pipeline and Funnel",
    description: "Assign prospective leads to representatives instantly, schedule prompt reminder messages, and log negotiation status."
  },
  {
    id: "05",
    title: "Logistics",
    description: "Automate driver communications, delivery dispatch logs, routing confirmations, and delay alert reporting."
  },
  {
    id: "06",
    title: "Contract and Proposal Management",
    description: "Create customer-specific quotes, issue e-signature requests, follow up before expiration, and store agreements."
  },
  {
    id: "07",
    title: "Recruitment",
    description: "Review applicant questionnaires, send scheduling links to top talents, and send updates to candidates."
  },
  {
    id: "08",
    title: "Payroll",
    description: "Compile tracked employee hours, calculate local tax deductions, request secondary approvals, and queue processing."
  },
  {
    id: "09",
    title: "Load Management",
    description: "Track shipment payloads, configure backhaul alerts, match capacities, and send automated arrival time notices."
  },
  {
    id: "10",
    title: "Customer Management",
    description: "Organize complete profiles, handle intake forms, log conversation histories, and build unified help desks."
  },
  {
    id: "11",
    title: "Marketing Campaigns",
    description: "Publish promotional updates, monitor clicks across networks, segment subscribers, and trigger nurture sequences."
  },
  {
    id: "12",
    title: "Request Management",
    description: "Structure fresh business inquiries, route support tickets to appropriate departments, and satisfy service level commitments."
  },
  {
    id: "13",
    title: "Follow up Reminders",
    description: "Schedule automatic friendly prompts for unpaid balances, pending inputs, survey feedback, or meeting calls."
  }
];

export const capabilitiesData: CapabilityItem[] = [
  { id: "CAP-01", title: "BUSINESS AUTOMATION" },
  { id: "CAP-02", title: "DIGITAL MARKETING" },
  { id: "CAP-03", title: "WEB APP INTEGRATIONS" },
  { id: "CAP-04", title: "CRMs" },
  { id: "CAP-05", title: "PROJECT MANAGEMENT" },
  { id: "CAP-06", title: "FACEBOOK ADS" },
  { id: "CAP-07", title: "GOOGLE ADS" },
  { id: "CAP-08", title: "WEBSITE DESIGN & DEVELOPMENT" },
  { id: "CAP-09", title: "SOCIAL MEDIA" },
  { id: "CAP-10", title: "EMAIL & SCHEDULING" },
  { id: "CAP-11", title: "SEO" },
  { id: "CAP-12", title: "GRAPHICS" }
];

export const whyChooseUsData: ReasonItem[] = [
  {
    title: "Centralized Customer Data",
    description: "Bring scattered lead forms, chat logs, email lists, and business contacts into an organized database.",
    iconName: "FolderHeart"
  },
  {
    title: "Automated Workflows for Efficiency",
    description: "Reduce human error and prevent critical tasks from falling through the cracks using rules-based routines.",
    iconName: "Workflow"
  },
  {
    title: "Seamless Integration with Your Tools",
    description: "Unify calendars, online forms, messaging services, files, and notification hubs under a single automated ecosystem.",
    iconName: "PlugZap"
  },
  {
    title: "Actionable Insights & Reporting",
    description: "Understand team efficiency, track sales performance, detect bottlenecks, and make choices backed by numbers.",
    iconName: "TrendingUp"
  },
  {
    title: "Scalable Solutions",
    description: "Expand software capacity, append databases, and handle surge workloads without needing to hire overhead staff.",
    iconName: "Maximize2"
  }
];

export const certificationsData: CertificationItem[] = [
  { name: "HubSpot", role: "Solutions Partner" },
  { name: "Zoho", role: "Authorized Partner" },
  { name: "Google", role: "Partner" },
  { name: "Meta", subdivision: "Business", role: "Business Partner" } as any,
  { name: "Microsoft", role: "Solutions Partner" },
  { name: "HighLevel", role: "Certified Partner" }
];
