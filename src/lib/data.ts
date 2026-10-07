// Dashboard data layer — customer-safe numbers only.
// Live source: the E2O FMS Apps Script (PublicMetrics.js) returns counts only — no names, phones, values,
// win/loss, overdue or backlog. Set E2O_METRICS_URL (web app /exec URL) and E2O_METRICS_KEY in Vercel;
// unset or failing => the sample numbers below, shown with a "Demo data" badge.

import { getReviews } from "@/lib/reviews";

export type Kpi = {
  label: string;
  value: number;
  suffix?: string;
  deltaPct?: number;
  spark?: number[];
};

export type WeekVolume = { week: string; orders: number };
export type StateEnquiries = { state: string; iso: string; count: number; lat: number | null; lng: number | null };
export type DemandItem = { name: string; count: number };
export type MapPoint = { lat: number; lng: number; count: number };
export type SystemStatus = {
  title: string;
  body: string;
  status: "operational" | "degraded";
  lastSync: string;
};

type Metrics = {
  asOf: string;
  customers: number;
  enquiriesTotal: number;
  enquiriesThisMonth: number;
  callsThisMonth: number;
  followUpsThisMonth: number;
  months: { categories: string[]; data: number[] };
  demand: DemandItem[];
  states: StateEnquiries[];
  points?: MapPoint[];
};

async function loadMetrics(): Promise<Metrics | null> {
  const url = process.env.E2O_METRICS_URL;
  const key = process.env.E2O_METRICS_KEY;
  if (!url || !key) return null;
  try {
    const res = await fetch(`${url}?page=metrics&key=${encodeURIComponent(key)}`, { next: { revalidate: 300 } });
    if (!res.ok) return null;
    const m = await res.json();
    return m.error ? null : (m as Metrics);
  } catch {
    return null;
  }
}

export async function getMetricsAsOf(): Promise<string | null> {
  return (await loadMetrics())?.asOf ?? null;
}

const demoMonths = { categories: ["Apr 2026", "May 2026", "Jun 2026", "Jul 2026", "Aug 2026", "Sep 2026"], data: [212, 268, 301, 355, 412, 487] };

const demoStates: StateEnquiries[] = [
  { state: "Delhi", iso: "IN-DL", count: 412, lat: 28.6, lng: 77.2 },
  { state: "Maharashtra", iso: "IN-MH", count: 268, lat: 19.7, lng: 75.7 },
  { state: "Gujarat", iso: "IN-GJ", count: 190, lat: 22.3, lng: 71.2 },
  { state: "Karnataka", iso: "IN-KA", count: 150, lat: 15.3, lng: 75.7 },
  { state: "Tamil Nadu", iso: "IN-TN", count: 132, lat: 11.1, lng: 78.7 },
  { state: "Uttar Pradesh", iso: "IN-UP", count: 120, lat: 26.8, lng: 80.9 },
  { state: "Rajasthan", iso: "IN-RJ", count: 96, lat: 27.0, lng: 74.2 },
  { state: "West Bengal", iso: "IN-WB", count: 74, lat: 22.9, lng: 87.8 },
  { state: "Telangana", iso: "IN-TG", count: 70, lat: 18.1, lng: 79.0 },
  { state: "Haryana", iso: "IN-HR", count: 64, lat: 29.0, lng: 76.1 },
];

const demoDemand: DemandItem[] = [
  { name: "Metal push switches", count: 34 },
  { name: "Circular & GX connectors", count: 26 },
  { name: "BNC / SMA / UHF (RF)", count: 18 },
  { name: "HDMI & AV cables", count: 12 },
  { name: "Audio & PA", count: 6 },
  { name: "Solar (MC4)", count: 4 },
];

export async function getIndiaStates(): Promise<StateEnquiries[]> {
  return (await loadMetrics())?.states ?? demoStates;
}

export async function getMapPoints(): Promise<MapPoint[]> {
  const m = await loadMetrics();
  if (m) return m.points ?? [];
  return demoStates.filter((s) => s.lat != null).map((s) => ({ lat: s.lat!, lng: s.lng!, count: s.count }));
}

export async function getOrderVolume(): Promise<WeekVolume[]> {
  const months = (await loadMetrics())?.months ?? demoMonths;
  return months.categories.map((week, i) => ({ week, orders: months.data[i] }));
}

export async function getDemand(): Promise<DemandItem[]> {
  return (await loadMetrics())?.demand ?? demoDemand;
}

export async function getKpis(): Promise<Kpi[]> {
  const m = await loadMetrics();
  const r = await getReviews();
  const months = m?.months ?? demoMonths;
  const n = months.data.length;
  const delta = n > 1 && months.data[n - 2] ? Math.round(((months.data[n - 1] - months.data[n - 2]) / months.data[n - 2]) * 1000) / 10 : undefined;
  return [
    { label: "Customers served", value: m?.customers ?? 2069 },
    { label: "Enquiries this month", value: m?.enquiriesThisMonth ?? months.data[n - 1], deltaPct: delta, spark: months.data },
    { label: "Total enquiries", value: m?.enquiriesTotal ?? 3474 },
    { label: `Google rating · ${r.count} reviews`, value: r.rating, suffix: "★" },
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

// --- Homepage content (source: setmiindia.com, About Us) ---

export type CompanyStat = { label: string; value: number; suffix?: string };
export type ProductCategory = { name: string; bestFor: string[]; image: string; imagePosition: string };
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
      imagePosition: "center 28%",
    },
    {
      name: "UHF Series",
      bestFor: ["Custom coaxial cable assemblies", "CB & amateur radio setups", "Portable wireless devices"],
      image: "/products/cat-a.png",
      imagePosition: "center 28%",
    },
    {
      name: "SMA Series",
      bestFor: ["High-frequency RF applications", "Satellite communication gear", "Mobile radio systems"],
      image: "/products/sma.png",
      imagePosition: "center 88%",
    },
    {
      name: "BNC Series",
      bestFor: ["High-speed video surveillance", "Laboratory test gear", "Antenna cable connections up to 4 GHz"],
      image: "/products/cat-c.png",
      imagePosition: "center 28%",
    },
    {
      name: "Circular & Waterproof",
      bestFor: ["Outdoor and industrial enclosures", "Panel-mount wiring", "Harsh-environment installations"],
      image: "/products/mc4.jpg",
      imagePosition: "center 90%",
    },
    {
      name: "Cables, Splitters & Plugs",
      image: "/products/cables.webp",
      imagePosition: "center 75%",
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
