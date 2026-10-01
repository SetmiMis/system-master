import { getIndiaStates } from "@/lib/data";
import { Panel } from "./Panel";
import { IndiaMap } from "./IndiaMap";

export async function IndiaMapSection() {
  const states = await getIndiaStates();
  if (!states.length) return null;

  return (
    <Panel title="Where our customers are" sub="By state — click a bubble to filter the table">
      <IndiaMap states={states} />
    </Panel>
  );
}
