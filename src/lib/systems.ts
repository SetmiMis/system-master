// ─────────────────────────────────────────────────────────────────────────────
// HOW TO ADD A NEW SYSTEM (shown on /systems for customers, and on /admin)
//
//   1. Copy one block below, paste it at the end of the list, change the 4 fields.
//   2. Save, commit and push — the card appears on the site after Vercel redeploys.
//
//   name         card title
//   description  1–2 line bio shown on the card (write it for a customer)
//   url          where the card opens (always in a new tab)
//   group        section it sits under on /systems — reuse an existing group name,
//                or type a new one to create a new section
//   public       optional. false = hide from /systems, still listed on /admin
// ─────────────────────────────────────────────────────────────────────────────

export type System = {
  name: string;
  description: string;
  url: string;
  group: string;
  public?: boolean;
};

export const systems: System[] = [
  {
    name: "Sales FMS",
    description: "Sales order and client billing.",
    url: "https://sales-fms.vercel.app",
    group: "Sales & Orders",
  },
  {
    name: "Setmi OMS",
    description: "Order management system — the desk this dashboard reflects.",
    url: "https://setmi-oms.vercel.app",
    group: "Sales & Orders",
    public: false,
  },
  {
    name: "Purchase FMS",
    description: "Purchase order and vendor management.",
    url: "https://setmi-purchase-fms.vercel.app",
    group: "Purchase & Production",
  },
  {
    name: "ERP Manufacturing",
    description: "Production planning and shop-floor tracking.",
    url: "https://erp-manufacturing-frontend.vercel.app",
    group: "Purchase & Production",
    public: false,
  },
  {
    name: "Staff Attendance",
    description: "Attendance and shift tracking for floor staff.",
    url: "https://staff-attendance-ten.vercel.app",
    group: "People & Tasks",
    public: false,
  },
  {
    name: "Work Checklist",
    description: "Daily task and checklist tracking.",
    url: "https://work-checklist-xi.vercel.app",
    group: "People & Tasks",
  },
  {
    name: "Budget vs Actual",
    description: "Monthly budget tracking against actual spend.",
    url: "https://budget-vs-actual-three.vercel.app",
    group: "Finance & Reporting",
  },
  {
    name: "MIS Control Center",
    description: "Cross-system reporting and MIS dashboards.",
    url: "https://mis-control-center.vercel.app",
    group: "Finance & Reporting",
  },
];
