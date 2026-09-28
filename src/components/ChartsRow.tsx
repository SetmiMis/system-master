import { SectionHead } from "./SectionHead";
import { OrderVolumeChart } from "./OrderVolumeChart";
import { CategoryBars } from "./CategoryBars";

export function ChartsRow() {
  return (
    <section className="border-t border-panel-line py-14">
      <SectionHead
        eyebrow="Trends"
        title="Volume and mix, at a glance."
        lede="The same two numbers the sales desk checks every morning: how much is moving, and what it's made of."
      />
      <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
        <OrderVolumeChart />
        <CategoryBars />
      </div>
    </section>
  );
}
