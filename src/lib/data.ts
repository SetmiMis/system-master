// Single seam for real data. Every section below reads from these functions —
// swap the mock return for a DB query / API call to your own system and the
// whole site updates. Nothing else needs to change.

export type Stat = { value: string; suffix?: string; label: string };
export type Chapter = {
  n: string;
  tag: string;
  title: string;
  body: string;
};
export type SystemCard = {
  title: string;
  body: string;
  spec: string;
};

export async function getOverviewStats(): Promise<Stat[]> {
  // ponytail: mock data, replace with a call to your order/inventory system
  return [
    { value: "43", suffix: "+", label: "Years in operation" },
    { value: "10", suffix: "+", label: "Connector & cable categories" },
    { value: "9001", label: "ISO 2015 certified quality system" },
    { value: "100", suffix: "%", label: "Orders quality-checked before dispatch" },
  ];
}

export async function getStoryChapters(): Promise<Chapter[]> {
  return [
    {
      n: "01",
      tag: "The Enquiry",
      title: "Every order starts as a question.",
      body: "A client shares the connector type, frequency and impedance needs, quantity, and sometimes a drawing. We log it the same day against a unique enquiry number — the first page of that order's file.",
    },
    {
      n: "02",
      tag: "The Vetting",
      title: "We read the spec before we quote it.",
      body: "Our team checks the requirement against catalogued parts — series, connector gender, cable type, frequency range — and flags anything that needs a custom build before a number is ever promised.",
    },
    {
      n: "03",
      tag: "The Promise",
      title: "A quote is a commitment, not a guess.",
      body: "Pricing and lead time are confirmed, the purchase order is raised, and both sides sign off on the final spec. Nothing moves until this page of the story is settled.",
    },
    {
      n: "04",
      tag: "The Build",
      title: "Pulled from stock, or built to order.",
      body: "Parts are allocated from inventory, or routed to production if the order needs volume beyond what's on the shelf — tracked against the same order number from here to delivery.",
    },
    {
      n: "05",
      tag: "The Proof",
      title: "Nothing ships until it's checked.",
      body: "Every order is inspected against ISO 9001:2015 procedure — continuity, fit, and finish — before it's cleared for packing. This is the chapter that can't be skipped.",
    },
    {
      n: "06",
      tag: "The Journey",
      title: "Packed, handed off, and visible.",
      body: "The order is packed, labelled, and handed to courier or freight with a tracking reference shared directly with the client — so the next chapter is one they can watch.",
    },
    {
      n: "07",
      tag: "The Arrival",
      title: "Delivered, but the record stays open.",
      body: "The order closes once delivery is confirmed, but the file doesn't disappear — specs and history stay on record, so a reorder or a warranty query never starts from page one.",
    },
  ];
}

export async function getSystems(): Promise<SystemCard[]> {
  return [
    {
      title: "Order Management",
      body: "Every enquiry, quote, PO, and dispatch note lives against one order ID, visible to sales and warehouse at once.",
      spec: "STATUS: LIVE · ALL ORDERS",
    },
    {
      title: "Inventory Ledger",
      body: "Stock counts per connector series update the moment parts are allocated, so quotes reflect what's actually on the shelf.",
      spec: "SYNC: REAL-TIME",
    },
    {
      title: "Quality Records",
      body: "Inspection results are logged per batch under our ISO 9001:2015 procedure, kept as an auditable record, not a checklist that gets thrown away.",
      spec: "STANDARD: ISO 9001:2015",
    },
    {
      title: "Client Records Vault",
      body: "Specs, drawings, and order history are stored per client account with role-based access — only the people handling your order can open it.",
      spec: "ACCESS: ROLE-BASED",
    },
    {
      title: "Dispatch & Tracking",
      body: "Courier handoff, tracking number, and delivery confirmation are logged against the order so status is a lookup, not a phone call.",
      spec: "COVERAGE: PAN-INDIA",
    },
    {
      title: "Client Communication Log",
      body: "Enquiry threads, confirmations, and support requests are tied to the order record, so any team member can pick up the conversation.",
      spec: "RESPONSE: SAME-DAY",
    },
  ];
}
