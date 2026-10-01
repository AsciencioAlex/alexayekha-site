export type CaseStudyMetric = {
  value: string;
  label: string;
};

export type CaseStudy = {
  slug: string;
  title: string;
  sector: string;
  role: string;
  summary: string;
  challenge: string;
  mandate: string[];
  approach: string[];
  outcomes: string[];
  capabilities: string[];
  metrics?: CaseStudyMetric[];
  confidentiality?: string;
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "enterprise-security-resilience",
    title: "Enterprise Security, Governance & Operational Resilience",
    sector: "High-security enterprise operations",
    role: "IT & IS leadership",
    summary:
      "A leadership programme spanning security governance, audit readiness, infrastructure resilience, continuity planning, vendor assurance, and remediation prioritisation.",
    challenge:
      "A high-trust operating environment requires security controls to work as an integrated management system rather than as isolated technical tasks.",
    mandate: [
      "Strengthen information security governance and evidence quality.",
      "Improve infrastructure resilience and recovery readiness.",
      "Translate technical findings into prioritised management actions.",
      "Align technology operations with business continuity and assurance requirements.",
    ],
    approach: [
      "Established clearer ownership across risk, infrastructure, backup, recovery, and security evidence.",
      "Connected vulnerability findings to remediation priorities, control owners, and operational risk.",
      "Improved continuity and recovery documentation around business requirements and recovery objectives.",
      "Used standards and audit expectations as operating disciplines rather than documentation exercises.",
    ],
    outcomes: [
      "More structured audit and assurance readiness.",
      "Clearer remediation priorities and management visibility.",
      "Stronger linkage between IT recovery, business continuity, and operational risk.",
      "A more repeatable governance model for security and infrastructure decisions.",
    ],
    capabilities: [
      "Cybersecurity governance",
      "Risk management",
      "Business continuity",
      "Disaster recovery",
      "Audit readiness",
      "Vendor assurance",
      "Enterprise infrastructure",
    ],
    confidentiality:
      "Operational details are intentionally generalised. Client-specific architecture, vulnerabilities, controls, and evidence are not disclosed.",
  },
  {
    slug: "realtime-logistics-platform",
    title: "Real-Time Logistics & Driver Dispatch Platform",
    sector: "Logistics & mobility",
    role: "CTO / systems architecture",
    summary:
      "A real-time dispatch and tracking architecture combining API services, event-driven processing, spatial data, WebSockets, and operational decision logic.",
    challenge:
      "The platform needed to reduce assignment latency, improve live tracking quality, and use operational data to make dispatch decisions more efficient.",
    mandate: [
      "Improve driver assignment speed and operational visibility.",
      "Reduce redundant polling and user-perceived tracking latency.",
      "Create a scalable foundation for intelligent dispatch.",
      "Turn live operational data into measurable service improvements.",
    ],
    approach: [
      "Separated transactional API responsibilities from real-time event workloads.",
      "Introduced queue-backed processing, WebSocket broadcasting, and cached state.",
      "Applied driver scoring using proximity, acceptance behaviour, cancellation history, and demand density.",
      "Used movement interpolation and ETA recalculation to improve the customer experience.",
    ],
    outcomes: [
      "Faster trip assignment and lower driver idle time.",
      "Improved on-time arrival performance.",
      "Reduced API overhead by replacing redundant polling with event-driven updates.",
      "Created a stronger data foundation for predictive dispatch and demand analysis.",
    ],
    metrics: [
      { value: "23%", label: "faster average assignment" },
      { value: "18%", label: "reduction in driver idle time" },
      { value: "14%", label: "improvement in on-time arrival" },
    ],
    capabilities: [
      "Technology leadership",
      "Distributed systems",
      "Real-time architecture",
      "Operational analytics",
      "Laravel",
      "Node.js",
      "Redis",
      "WebSockets",
    ],
  },
  {
    slug: "digital-wallet-architecture",
    title: "Digital Wallet & Banking Integration Architecture",
    sector: "Fintech & financial infrastructure",
    role: "Technical architecture / engineering leadership",
    summary:
      "A bank-connected wallet architecture designed around account validation, transaction orchestration, reconciliation, virtual-account flows, and controlled integration with external financial rails.",
    challenge:
      "Financial integrations fail when transaction state, reconciliation, customer identity, external responses, and operational support are treated as separate concerns.",
    mandate: [
      "Design reliable transaction and top-up flows across external banking services.",
      "Keep wallet balances and external transaction state reconcilable.",
      "Reduce coupling between mobile experiences and banking integration logic.",
      "Create operational visibility for failed, delayed, or partially completed transactions.",
    ],
    approach: [
      "Centralised integration logic in the existing backend rather than duplicating banking behaviour in client applications.",
      "Modelled transaction state explicitly from validation through settlement and wallet update.",
      "Separated customer-facing account identifiers from internal orchestration and reconciliation controls.",
      "Designed failure handling and support visibility as first-class parts of the transaction lifecycle.",
    ],
    outcomes: [
      "A clearer integration boundary between banking rails, backend services, and mobile clients.",
      "Better traceability for transaction validation, posting, and wallet updates.",
      "A reusable foundation for additional channels and agent-facing experiences.",
      "Reduced risk of embedding financial integration complexity in multiple front ends.",
    ],
    capabilities: [
      "Fintech architecture",
      "Banking integrations",
      "Transaction orchestration",
      "Reconciliation",
      "API design",
      "Mobile platform integration",
    ],
    confidentiality:
      "The case study describes architecture patterns and leadership decisions only; proprietary integration details and customer data are excluded.",
  },
];

export function getCaseStudy(slug: string): CaseStudy | undefined {
  return caseStudies.find((study) => study.slug === slug);
}
