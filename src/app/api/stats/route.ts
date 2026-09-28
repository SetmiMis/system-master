import { NextResponse } from "next/server";
import { getKpis } from "@/lib/data";

// Example connection point: point getKpis() at your real system (database,
// ERP, internal API) and this endpoint — and the dashboard's KPI row — start
// showing live data automatically.
export async function GET() {
  const kpis = await getKpis();
  return NextResponse.json({ kpis });
}
