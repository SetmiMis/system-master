import { TopBar } from "@/components/TopBar";
import { DashboardFooter } from "@/components/DashboardFooter";
import { getLinkedSystems } from "@/lib/data";
import { Reveal } from "@/components/Reveal";
import { MotionLink } from "@/components/MotionLink";

export default async function AdminPage() {
  const systems = await getLinkedSystems();

  return (
    <>
      <div className="grid-field" />
      <TopBar links={[["Home", "/"]]} />
      <main className="mx-auto w-full max-w-[1180px] px-6">
        <section className="pb-6 pt-9">
          <div className="mb-2 flex items-center gap-2 font-data text-[0.72rem] uppercase tracking-[0.14em] text-accent-soft">
            <span className="h-1.5 w-1.5 rounded-full bg-ok shadow-[0_0_0_3px_rgba(4,124,0,0.18)]" />
            {systems.filter((s) => s.status === "operational").length} of {systems.length} systems deployed
          </div>
          <h1 className="text-[clamp(1.6rem,3vw,2.1rem)] font-extrabold">System Directory</h1>
          <p className="mt-1 max-w-[65ch] text-[0.95rem] text-ink-dim">
            Backend hub (open by direct URL only — not linked from the site). Every system the team has built, in one place. Each card links straight
            to that system&apos;s live deployment.
          </p>
        </section>

        <div className="grid grid-cols-1 gap-4 pb-14 sm:grid-cols-2 lg:grid-cols-3">
          {systems.map((s, i) => (
            <Reveal
              key={s.name}
              delay={i * 0.05}
              className="flex flex-col rounded-xl border border-panel-line bg-bg-elevated p-5"
            >
              <div className="flex items-start justify-between gap-2">
                <h3 className="text-[1rem] font-bold">{s.name}</h3>
                <span
                  className={`flex flex-none items-center gap-1.5 rounded-full px-2.5 py-1 text-[0.66rem] font-semibold uppercase tracking-[0.04em] ${
                    s.status === "operational"
                      ? "bg-[color-mix(in_srgb,var(--ok)_14%,transparent)] text-ok"
                      : "bg-[color-mix(in_srgb,var(--warn)_16%,transparent)] text-warn"
                  }`}
                >
                  <span
                    className={`h-1.5 w-1.5 rounded-full ${s.status === "operational" ? "bg-ok" : "bg-warn"}`}
                  />
                  {s.status === "operational" ? "Deployed" : "Not connected"}
                </span>
              </div>
              <p className="mt-2 flex-1 text-[0.86rem] leading-relaxed text-ink-dim">{s.description}</p>
              <MotionLink
                href={s.url}
                className="mt-4 inline-flex items-center gap-1.5 text-[0.86rem] font-semibold text-accent hover:text-accent-strong"
              >
                Open system →
              </MotionLink>
            </Reveal>
          ))}
        </div>

        <div className="mb-14 rounded-xl border border-panel-line bg-bg-elevated p-5">
          <h3 className="text-[0.95rem] font-bold">About these links</h3>
          <p className="mt-1.5 text-[0.85rem] leading-relaxed text-ink-dim">
            These are the team&apos;s real Vercel deployments. Each sits behind Vercel&apos;s own
            sign-in until a custom domain is attached, so &ldquo;Deployed&rdquo; means the system is
            built and live, not that it&apos;s publicly reachable yet. To pull real health/metrics
            per system instead of a static status, add a <code className="font-data text-[0.8em]">/api/health</code> route
            to each one and wire it into <code className="font-data text-[0.8em]">getLinkedSystems()</code> in{" "}
            <code className="font-data text-[0.8em]">src/lib/data.ts</code>.
          </p>
        </div>
      </main>
      <DashboardFooter />
    </>
  );
}
