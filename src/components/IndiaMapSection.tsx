import { getIndiaStates } from "@/lib/data";
import { SectionHead } from "./SectionHead";
import { IndiaMap } from "./IndiaMap";

export async function IndiaMapSection() {
  const states = await getIndiaStates();
  if (!states.length) return null;

  return (
    <section id="map" className="border-t border-panel-line py-14">
      <SectionHead
        eyebrow="Reach"
        title="Where our enquiries come from."
        lede="Enquiries by state across India — click a bubble to filter the table."
      />
      <IndiaMap states={states} />
    </section>
  );
}
