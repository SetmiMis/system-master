import { getOrderVolume } from "@/lib/data";
import { Panel } from "./Panel";
import { VolumeChart } from "./VolumeChart";

export async function OrderVolumeChart() {
  const vol = await getOrderVolume();
  const data = vol.map((v) => ({ label: v.week, value: v.orders }));
  const growth = data.length > 1 && data[data.length - 2].value
    ? Math.round(((data[data.length - 1].value - data[data.length - 2].value) / data[data.length - 2].value) * 100)
    : null;

  return (
    <Panel
      title="Enquiry volume"
      sub="Enquiries received per month"
      right={
        growth !== null && (
          <span className={`rounded-full px-2.5 py-1 font-data text-[0.72rem] font-semibold ${growth >= 0 ? "bg-ok/10 text-ok" : "bg-critical/10 text-critical"}`}>
            {growth >= 0 ? "▲" : "▼"} {Math.abs(growth)}% vs last month
          </span>
        )
      }
    >
      <VolumeChart data={data} />
    </Panel>
  );
}
