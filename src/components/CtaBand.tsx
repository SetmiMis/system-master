export function CtaBand() {
  return (
    <section className="header-gradient mt-6 rounded-2xl px-6 py-8 text-white sm:px-10">
      <h2 className="text-[clamp(1.3rem,2.6vw,1.8rem)] font-extrabold">Let's build your next order.</h2>
      <p className="mt-1 max-w-[56ch] text-[0.95rem] text-white/80">
        Tell us the connector type and quantity — we reply with pricing and lead time.
      </p>
      <div className="mt-5 flex flex-wrap gap-3">
        <a href="/#quote" className="rounded-lg bg-white px-5 py-2.5 text-[0.9rem] font-bold text-accent-strong hover:bg-white/90">Request a quote</a>
        <a
          href="https://wa.me/918586878111?text=Hi%20Setmi%20India%2C%20I%20have%20an%20enquiry."
          target="_blank"
          rel="noopener"
          className="rounded-lg border border-white/40 px-5 py-2.5 text-[0.9rem] font-bold hover:bg-white/10"
        >
          WhatsApp us
        </a>
        <a href="tel:+918586878111" className="rounded-lg border border-white/40 px-5 py-2.5 text-[0.9rem] font-bold hover:bg-white/10">Call +91 85868 78111</a>
      </div>
    </section>
  );
}
