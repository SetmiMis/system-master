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
