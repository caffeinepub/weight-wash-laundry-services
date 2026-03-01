import { useScrollReveal } from "../hooks/useScrollReveal";

const services = [
  {
    icon: "🧺",
    name: "Wash & Fold",
    desc: "Fresh, clean clothes neatly folded and ready to wear. Perfect for everyday laundry needs.",
    color: "oklch(0.88 0.1 200 / 0.15)",
  },
  {
    icon: "👔",
    name: "Steam Ironing",
    desc: "Crisp, wrinkle-free clothes with professional steam press. Look sharp every day.",
    color: "oklch(0.88 0.14 250 / 0.15)",
  },
  {
    icon: "🧴",
    name: "Dry Cleaning",
    desc: "Gentle care for delicate and premium fabrics. Safe chemical-free process.",
    color: "oklch(0.92 0.1 180 / 0.15)",
  },
  {
    icon: "📦",
    name: "Bulk Laundry",
    desc: "Cost-effective solutions for hotels, hostels, and businesses. Volume discounts available.",
    color: "oklch(0.88 0.1 200 / 0.15)",
  },
  {
    icon: "⚡",
    name: "Express Service",
    desc: "Same-day turnaround when you need it fast. Emergency laundry sorted within hours.",
    color: "oklch(0.9 0.14 80 / 0.15)",
  },
];

export default function ServicesSection() {
  const sectionRef = useScrollReveal() as React.RefObject<HTMLElement>;

  return (
    <section id="services" ref={sectionRef} className="relative py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <span
            className="reveal inline-block px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase mb-4"
            style={{
              background: "oklch(0.88 0.1 200 / 0.2)",
              color: "var(--brand-navy)",
            }}
          >
            What We Offer
          </span>
          <h2
            className="reveal delay-100 text-4xl sm:text-5xl font-extrabold leading-tight"
            style={{ color: "var(--brand-navy)" }}
          >
            Our <span className="text-gradient-aqua">Services</span>
          </h2>
          <p
            className="reveal delay-200 mt-4 text-lg max-w-2xl mx-auto"
            style={{ color: "var(--brand-text-muted)" }}
          >
            Professional laundry solutions tailored to fit your lifestyle and
            budget.
          </p>
        </div>

        {/* Service cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-7">
          {services.map((service, i) => (
            <div
              key={service.name}
              className={`reveal delay-${(i % 3) * 100 + 100} service-card bg-white rounded-2xl p-7 shadow-card border border-[oklch(0.9_0.03_220)] cursor-default`}
            >
              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center text-3xl mb-5"
                style={{ background: service.color }}
              >
                {service.icon}
              </div>
              <h3
                className="font-bold text-xl mb-3"
                style={{ color: "var(--brand-navy)" }}
              >
                {service.name}
              </h3>
              <p
                className="text-sm leading-relaxed"
                style={{ color: "var(--brand-text-muted)" }}
              >
                {service.desc}
              </p>
            </div>
          ))}

          {/* CTA card */}
          <div
            className="reveal delay-600 service-card rounded-2xl p-7 flex flex-col justify-between"
            style={{
              background:
                "linear-gradient(135deg, var(--brand-navy) 0%, oklch(0.3 0.16 220) 100%)",
            }}
          >
            <div>
              <span className="text-4xl">✨</span>
              <h3 className="font-bold text-xl mt-4 mb-3 text-white">
                Need a custom service?
              </h3>
              <p className="text-sm leading-relaxed text-white/70">
                We cater to special requirements. Contact us and we'll work out
                a solution.
              </p>
            </div>
            <a
              href="tel:+918080130795"
              className="mt-6 inline-flex items-center gap-2 px-6 py-3 rounded-full font-bold text-sm text-white btn-glow self-start"
              style={{ background: "var(--brand-aqua)" }}
            >
              📞 Call Now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
