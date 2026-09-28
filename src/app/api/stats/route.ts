import { NextResponse } from "next/server";
import { getOverviewStats } from "@/lib/data";

// Example connection point: point getOverviewStats() at your real system
// (database, ERP, internal API) and this endpoint — and every section that
// reads from it — starts showing live data automatically.
export async function GET() {
  const stats = await getOverviewStats();
  return NextResponse.json({ stats });
}
