import { getIndiaStates, getMapPoints } from "@/lib/data";
import { Panel } from "./Panel";
import { IndiaMap } from "./IndiaMap";

export async function IndiaMapSection() {
  const [states, points] = await Promise.all([getIndiaStates(), getMapPoints()]);
  if (!states.length) return null;

  return (
    <Panel
      title="Serving customers across India"
      sub={`${states.length} states & union territories · tap a state to see its share`}
    >
      <IndiaMap states={states} points={points} />
    </Panel>
  );
}
