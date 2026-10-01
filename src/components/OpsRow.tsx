import { SectionHead } from "./SectionHead";
import { ComplianceCard } from "./ComplianceCard";
import { FocusPanel } from "./FocusPanel";

export async function OpsRow() {
  return (
    <section id="security" className="border-t border-panel-line py-14">
      <SectionHead
        eyebrow="Desk View"
        title="What the sales desk is working on."
        lede="The same two panels the team keeps open — what needs attention, and what's protected."
      />
      <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
        <FocusPanel />
        <ComplianceCard />
      </div>
    </section>
  );
}
