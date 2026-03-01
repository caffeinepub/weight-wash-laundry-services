import { useScrollReveal } from "../hooks/useScrollReveal";

const reasons = [
  {
    icon: "⭐",
    title: "5.0 Google Rating",
    desc: "Consistently rated 5 stars by hundreds of satisfied customers.",
    accent: "oklch(0.82 0.18 82)",
  },
  {
    icon: "💰",
    title: "Affordable Pricing",
    desc: "Premium quality service at prices that won't break the bank.",
    accent: "var(--brand-aqua)",
  },
  {
    icon: "🚗",
    title: "Doorstep Pickup & Delivery",
    desc: "We come to you — schedule a pickup and get fresh laundry delivered.",
    accent: "var(--brand-aqua)",
  },
  {
    icon: "🧼",
    title: "Hygienic Washing Process",
    desc: "Sanitized equipment, safe detergents, clean folding tables — always.",
    accent: "var(--brand-aqua)",
  },
  {
    icon: "⚡",
    title: "Quick Service",
    desc: "Standard 24-hour service with same-day express when you need it.",
    accent: "var(--brand-aqua)",
  },
];

export default function WhyUsSection() {
  const sectionRef = useScrollReveal() as React.RefObject<HTMLElement>;

  return (
    <section
      id="why-us"
      ref={sectionRef}
      className="relative py-24 overflow-hidden"
      style={{
        background:
          "linear-gradient(160deg, oklch(0.14 0.1 248) 0%, oklch(0.22 0.14 240) 50%, oklch(0.25 0.16 220) 100%)",
      }}
    >
      {/* Decorative blobs */}
      <div
        className="absolute top-0 right-0 w-80 h-80 rounded-full opacity-10 blur-3xl pointer-events-none"
        style={{
          background: "var(--brand-aqua)",
          transform: "translate(30%, -30%)",
        }}
        aria-hidden="true"
      />
      <div
        className="absolute bottom-0 left-0 w-64 h-64 rounded-full opacity-10 blur-3xl pointer-events-none"
        style={{
          background: "var(--brand-aqua-bright)",
          transform: "translate(-30%, 30%)",
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-14">
          <span
            className="reveal inline-block px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase mb-4"
            style={{
              background: "rgba(255,255,255,0.1)",
              color: "var(--brand-aqua-light)",
            }}
          >
            Our Edge
          </span>
          <h2 className="reveal delay-100 text-4xl sm:text-5xl font-extrabold leading-tight text-white">
            Why Choose <span className="text-gradient-aqua">Us?</span>
          </h2>
          <p className="reveal delay-200 mt-4 text-lg text-white/60 max-w-2xl mx-auto">
            We don't just wash clothes — we build trust, one fresh load at a
            time.
          </p>
        </div>

        {/* Reasons grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-14">
          {reasons.map((reason, i) => (
            <div
              key={reason.title}
              className={`reveal delay-${(i % 3) * 100 + 100} rounded-2xl p-6 border border-white/10 service-card`}
              style={{ background: "rgba(255,255,255,0.05)" }}
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl mb-4"
                style={{ background: "rgba(255,255,255,0.1)" }}
              >
                {reason.icon}
              </div>
              <h3 className="font-bold text-lg mb-2 text-white">
                {reason.title}
              </h3>
              <p className="text-sm leading-relaxed text-white/65">
                {reason.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Google Review Banner */}
        <div className="reveal delay-400 mx-auto max-w-2xl">
          <div
            className="rounded-3xl p-8 text-center border border-yellow-400/30"
            style={{ background: "rgba(255, 200, 50, 0.08)" }}
          >
            <div
              className="flex justify-center gap-1 mb-3"
              aria-label="5 out of 5 stars"
            >
              {[1, 2, 3, 4, 5].map((s) => (
                <svg
                  key={s}
                  className="w-8 h-8 star-filled fill-current"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                  role="presentation"
                >
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
              ))}
            </div>
            <p
              className="text-3xl font-extrabold mb-1"
              style={{ color: "oklch(0.92 0.18 85)" }}
            >
              5.0 / 5.0
            </p>
            <p className="text-white/70 text-sm font-medium">
              Based on Google Reviews — Pimpri-Chinchwad's Trusted Laundry
              Service
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
