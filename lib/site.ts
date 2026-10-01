export const siteConfig = {
  name: "Alex Ayekha",
  fullName: "Alex Asciencio Ayekha",
  title: "Technology Executive | IT, Cybersecurity & Enterprise Architecture",
  description:
    "Technology executive and IT & information security leader focused on secure enterprise systems, digital platforms, operational resilience, and pragmatic technology strategy.",
  url: "https://alexayekha.tech",
  email: "alex@alexayekha.tech",
  location: "Kenya",
  currentRole: "IT & IS Manager",
  socials: {
    linkedin: "https://www.linkedin.com/in/alex-asciencio/",
    github: "https://github.com/AsciencioAlex",
    x: "https://x.com/codnetech",
  },
} as const;

export const navigation = [
  { href: "/writing", label: "Insights" },
  { href: "/case-studies", label: "Case Studies" },
  { href: "/research", label: "Research" },
  { href: "/about", label: "About" },
] as const;

export const executivePillars = [
  {
    title: "Technology Strategy & Governance",
    description:
      "Turning business priorities into technology roadmaps, investment choices, operating models, and accountable execution.",
  },
  {
    title: "Cybersecurity & Resilience",
    description:
      "Building security, risk management, continuity, recovery, audit readiness, and operational assurance into the environment.",
  },
  {
    title: "Enterprise Architecture",
    description:
      "Designing dependable infrastructure, integration patterns, platforms, and controls that can scale with the organisation.",
  },
  {
    title: "Digital Products & Engineering",
    description:
      "Leading product and engineering decisions across fintech, logistics, real-time systems, automation, and emerging technology.",
  },
] as const;

export const operatingPrinciples = [
  "Start with the business problem, risk, and operating model before selecting technology.",
  "Treat cybersecurity, observability, recovery, and governance as architecture - not afterthoughts.",
  "Prefer measurable outcomes and maintainable systems over novelty or unnecessary complexity.",
] as const;
