import { getActivityFeed } from "@/lib/data";
import { SectionHead } from "./SectionHead";
import { ComplianceCard } from "./ComplianceCard";
import { ActivityFeed } from "./ActivityFeed";

export async function OpsRow() {
  const activity = await getActivityFeed();

  return (
    <section id="security" className="border-t border-panel-line py-14">
      <SectionHead
        eyebrow="Desk View"
        title="What the order desk sees, minute to minute."
        lede="The same two panels the team keeps open — what's moving, and what's protected."
      />
      <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
        <ActivityFeed initial={activity} />
        <ComplianceCard />
      </div>
    </section>
  );
}
