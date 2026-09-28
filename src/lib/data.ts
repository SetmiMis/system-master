// Single seam for real data. Every dashboard panel reads from these functions —
// swap the mock return for a DB query / API call to your own system and the
// whole dashboard updates. Nothing else needs to change.

export type Kpi = {
  label: string;
  value: number;
  suffix?: string;
  deltaPct: number;
  spark: number[];
};

export type PipelineStage = { stage: string; count: number };
export type WeekVolume = { week: string; orders: number };
export type CategorySlice = { name: string; value: number };
export type SystemStatus = {
  title: string;
  body: string;
  status: "operational" | "degraded";
  lastSync: string;
};
export type ActivityEvent = { id: number; text: string; minsAgo: number };

export async function getKpis(): Promise<Kpi[]> {
  // ponytail: mock data, replace with a call to your order/inventory system
  return [
    { label: "Open orders", value: 47, deltaPct: 8.2, spark: [30, 34, 33, 38, 41, 39, 44, 47] },
    { label: "Dispatched this week", value: 112, deltaPct: 4.1, spark: [80, 88, 95, 90, 101, 98, 108, 112] },
    { label: "Quality pass rate", value: 99.2, suffix: "%", deltaPct: 0.3, spark: [98.6, 98.8, 98.9, 99.0, 99.1, 99.0, 99.2, 99.2] },
    { label: "Avg. dispatch time", value: 2.4, suffix: "d", deltaPct: -6.5, spark: [3.1, 3.0, 2.9, 2.8, 2.6, 2.5, 2.5, 2.4] },
  ];
}

export async function getPipelineStages(): Promise<PipelineStage[]> {
  return [
    { stage: "Enquiry", count: 18 },
    { stage: "Vetting", count: 14 },
    { stage: "Quotation", count: 11 },
    { stage: "Production", count: 22 },
    { stage: "Quality Check", count: 9 },
    { stage: "Dispatch", count: 15 },
    { stage: "Delivered", count: 340 },
  ];
}

export async function getOrderVolume(): Promise<WeekVolume[]> {
  return [
    { week: "W1", orders: 72 },
    { week: "W2", orders: 81 },
    { week: "W3", orders: 76 },
    { week: "W4", orders: 89 },
    { week: "W5", orders: 94 },
    { week: "W6", orders: 88 },
    { week: "W7", orders: 101 },
    { week: "W8", orders: 112 },
  ];
}

export async function getCategoryBreakdown(): Promise<CategorySlice[]> {
  return [
    { name: "GX Series", value: 32 },
    { name: "UHF Series", value: 24 },
    { name: "SMA Series", value: 19 },
    { name: "BNC Series", value: 15 },
    { name: "MC4 & Circular", value: 7 },
    { name: "Other", value: 3 },
  ];
}

export async function getSystems(): Promise<SystemStatus[]> {
  return [
    {
      title: "Order Management",
      body: "Every enquiry, quote, PO, and dispatch note lives against one order ID.",
      status: "operational",
      lastSync: "12s ago",
    },
    {
      title: "Inventory Ledger",
      body: "Stock counts per connector series update the moment parts are allocated.",
      status: "operational",
      lastSync: "12s ago",
    },
    {
      title: "Quality Records",
      body: "Inspection results logged per batch under ISO 9001:2015 procedure.",
      status: "operational",
      lastSync: "1m ago",
    },
    {
      title: "Client Records Vault",
      body: "Specs, drawings, and order history stored with role-based access.",
      status: "operational",
      lastSync: "3m ago",
    },
    {
      title: "Dispatch & Tracking",
      body: "Courier handoff and delivery confirmation logged against the order.",
      status: "operational",
      lastSync: "45s ago",
    },
    {
      title: "Client Communication Log",
      body: "Enquiry threads and support requests tied to the order record.",
      status: "operational",
      lastSync: "2m ago",
    },
  ];
}

export async function getActivityFeed(): Promise<ActivityEvent[]> {
  return [
    { id: 1, text: "Order #4821 dispatched — BNC Series, 200 units", minsAgo: 2 },
    { id: 2, text: "Quality check passed on batch #Q-1187", minsAgo: 9 },
    { id: 3, text: "New enquiry logged — SMA connectors, custom spec", minsAgo: 14 },
    { id: 4, text: "Order #4819 quote confirmed and PO raised", minsAgo: 22 },
    { id: 5, text: "Inventory synced — GX Series stock updated", minsAgo: 31 },
    { id: 6, text: "Order #4815 delivery confirmed by client", minsAgo: 46 },
  ];
}

// --- Homepage content (source: setmiindia.com, About Us) ---

export type CompanyStat = { label: string; value: number; suffix?: string };
export type ProductCategory = { name: string; bestFor: string[]; image: string };
export type ProcessStep = { n: string; title: string; body: string };
export type FaqItem = { q: string; a: string };
export type LinkedSystem = {
  name: string;
  description: string;
  url: string;
  status: "operational" | "unreachable" | "not connected";
};

export async function getCompanyStory() {
  return {
    heading: "Your trusted electronics partner, powering innovation since 1983.",
    body: "Setmi India began its journey in 1983 with a simple goal: to make connections stronger and more reliable. Over the decades, we have grown from a small venture into a leader in audio-video cables, connectors, and multimedia solutions. Our commitment to quality, backed by innovative design and precise engineering, drives us to provide cutting-edge products that meet the evolving needs of homes and industries across India.",
  };
}

export async function getCompanyStats(): Promise<CompanyStat[]> {
  return [
    { label: "Orders fulfilled", value: 10000, suffix: "+" },
    { label: "Customers served", value: 600, suffix: "+" },
    { label: "Support staff", value: 50 },
    { label: "Years in business", value: 43, suffix: "+" },
  ];
}

export async function getProductCategories(): Promise<ProductCategory[]> {
  return [
    {
      name: "GX Series",
      bestFor: ["Automation systems & CNC machines", "LED lighting & robotics", "Aviation electronics"],
      image: "/products/hero.png",
    },
    {
      name: "UHF Series",
      bestFor: ["Custom coaxial cable assemblies", "CB & amateur radio setups", "Portable wireless devices"],
      image: "/products/cat-a.png",
    },
    {
      name: "SMA Series",
      bestFor: ["High-frequency RF applications", "Satellite communication gear", "Mobile radio systems"],
      image: "/products/sma.png",
    },
    {
      name: "BNC Series",
      bestFor: ["High-speed video surveillance", "Laboratory test gear", "Antenna cable connections up to 4 GHz"],
      image: "/products/cat-c.png",
    },
    {
      name: "Circular & Waterproof",
      bestFor: ["Outdoor and industrial enclosures", "Panel-mount wiring", "Harsh-environment installations"],
      image: "/products/mc4.jpg",
    },
    {
      name: "Cables, Splitters & Plugs",
      image: "/products/cables.webp",
      bestFor: ["AV cable assemblies", "HDMI splitting & distribution", "Sockets, plugs & couplers"],
    },
  ];
}

export async function getProcessSteps(): Promise<ProcessStep[]> {
  return [
    { n: "01", title: "Enquiry", body: "Client shares the connector type, specs, and quantity needed." },
    { n: "02", title: "Technical vetting", body: "Our team checks the spec against catalogued parts and flags custom needs." },
    { n: "03", title: "Quotation", body: "Pricing and lead time confirmed, PO raised." },
    { n: "04", title: "Stock or production", body: "Parts allocated from inventory, or routed to production." },
    { n: "05", title: "Quality check", body: "Every order inspected under ISO 9001:2015 procedure." },
    { n: "06", title: "Dispatch", body: "Packed, labelled, and handed off with a tracking reference." },
    { n: "07", title: "Delivery", body: "Order closed once delivery is confirmed with the client." },
  ];
}

export async function getAfterSales() {
  return [
    {
      title: "Warranty support",
      body: "Manufacturing defects reported within the warranty window are replaced or repaired at no cost.",
    },
    {
      title: "Replacement window",
      body: "Wrong or damaged items can be flagged within 7 days of delivery for a straight replacement.",
    },
    {
      title: "Technical support",
      body: "Our team helps with spec matching, compatibility questions, and installation queries after the sale.",
    },
    {
      title: "Reorder history",
      body: "Past orders and specs stay on file, so a reorder never starts from a blank enquiry.",
    },
  ];
}

export async function getFaqs(): Promise<FaqItem[]> {
  return [
    {
      q: "What's the minimum order quantity?",
      a: "Most connector series are available from single-piece orders; bulk pricing applies above standard slab quantities.",
    },
    {
      q: "Can you build to a custom spec?",
      a: "Yes — share a drawing or spec sheet during enquiry and our team will confirm feasibility before quoting.",
    },
    {
      q: "How long does dispatch take?",
      a: "In-stock orders typically dispatch within 2–3 business days; custom or bulk orders depend on production load.",
    },
    {
      q: "Do you ship across India?",
      a: "Yes, we dispatch pan-India through courier and freight partners with tracking shared on handoff.",
    },
    {
      q: "What if a part arrives damaged?",
      a: "Report it within 7 days of delivery with photos, and we'll arrange a replacement.",
    },
  ];
}

export async function getLinkedSystems(): Promise<LinkedSystem[]> {
  // ponytail: real deployment URLs, pulled from the team's Vercel projects.
  // All sit behind Vercel's own sign-in (SSO protection) until a custom
  // domain is attached — that's why "operational" here means "deployed and
  // building successfully," not "publicly reachable."
  return [
    {
      name: "Purchase FMS",
      description: "Purchase order and vendor management.",
      url: "https://setmi-purchase-fms.vercel.app",
      status: "operational",
    },
    {
      name: "Sales FMS",
      description: "Sales order and client billing.",
      url: "https://sales-fms.vercel.app",
      status: "operational",
    },
    {
      name: "Setmi OMS",
      description: "Order management system — the desk this dashboard reflects.",
      url: "https://setmi-oms.vercel.app",
      status: "operational",
    },
    {
      name: "ERP Manufacturing",
      description: "Production planning and shop-floor tracking.",
      url: "https://erp-manufacturing-frontend.vercel.app",
      status: "operational",
    },
    {
      name: "Staff Attendance",
      description: "Attendance and shift tracking for floor staff.",
      url: "https://staff-attendance-ten.vercel.app",
      status: "operational",
    },
    {
      name: "Budget vs Actual",
      description: "Monthly budget tracking against actual spend.",
      url: "https://budget-vs-actual-three.vercel.app",
      status: "operational",
    },
    {
      name: "Work Checklist",
      description: "Daily task and checklist tracking.",
      url: "https://work-checklist-xi.vercel.app",
      status: "operational",
    },
    {
      name: "MIS Control Center",
      description: "Cross-system reporting and MIS dashboards.",
      url: "https://mis-control-center.vercel.app",
      status: "operational",
    },
  ];
}
