export function DashboardFooter() {
  return (
    <footer className="border-t border-panel-line py-8">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div className="text-[0.82rem] text-ink-dim">
          © Setmi India · ISO 9001:2015 Certified
        </div>
        <div className="flex flex-wrap gap-5 font-data text-[0.82rem]">
          <span>+91 85868 78111</span>
          <a href="mailto:info@setmiindia.com">info@setmiindia.com</a>
          <a href="https://setmiindia.com" target="_blank" rel="noopener">setmiindia.com</a>
          <span>Serving since 1983</span>
          <a href="/admin" className="opacity-60 hover:opacity-100">Team login</a>
        </div>
      </div>
    </footer>
  );
}
