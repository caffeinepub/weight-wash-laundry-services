import { useScrollReveal } from "../hooks/useScrollReveal";

const steps = [
  {
    step: "01",
    icon: "📅",
    title: "Schedule Pickup",
    desc: "Book online or call us at +91 8080130795. Pick your preferred time slot.",
  },
  {
    step: "02",
    icon: "🧺",
    title: "We Clean Professionally",
    desc: "Our expert team carefully washes, dries, and steam-presses your garments.",
  },
  {
    step: "03",
    icon: "📦",
    title: "Delivered Fresh & Folded",
    desc: "Your clean, neatly folded laundry arrives at your doorstep. Fresh every time.",
  },
];

export default function HowItWorks() {
  const sectionRef = useScrollReveal() as React.RefObject<HTMLElement>;

  return (
    <section
      id="how-it-works"
      ref={sectionRef}
      className="relative py-24 bg-[var(--brand-light-bg)]"
    >
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
            Simple Process
          </span>
          <h2
            className="reveal delay-100 text-4xl sm:text-5xl font-extrabold leading-tight"
            style={{ color: "var(--brand-navy)" }}
          >
            How It <span className="text-gradient-aqua">Works</span>
          </h2>
          <p
            className="reveal delay-200 mt-4 text-lg max-w-xl mx-auto"
            style={{ color: "var(--brand-text-muted)" }}
          >
            Three simple steps to fresh, clean clothes — no hassle, no fuss.
          </p>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Connecting line — desktop */}
          <div
            className="hidden lg:block absolute top-16 left-[calc(16.667%+2rem)] right-[calc(16.667%+2rem)] h-0.5 pointer-events-none"
            style={{
              background:
                "linear-gradient(90deg, var(--brand-aqua) 0%, oklch(0.6 0.16 200) 50%, var(--brand-aqua) 100%)",
            }}
            aria-hidden="true"
          />

          <div className="grid lg:grid-cols-3 gap-10 lg:gap-8">
            {steps.map((step, i) => (
              <div
                key={step.step}
                className={`reveal delay-${(i + 1) * 200} flex flex-col items-center text-center`}
              >
                {/* Icon circle */}
                <div className="relative mb-8">
                  <div
                    className="w-28 h-28 rounded-full flex items-center justify-center text-5xl shadow-btn-navy z-10 relative"
                    style={{
                      background:
                        "linear-gradient(135deg, var(--brand-navy) 0%, oklch(0.3 0.16 220) 100%)",
                    }}
                  >
                    {step.icon}
                  </div>
                  {/* Step number badge */}
                  <div
                    className="absolute -top-2 -right-2 w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold text-white z-20"
                    style={{ background: "var(--brand-aqua)" }}
                  >
                    {step.step}
                  </div>
                </div>

                {/* Content */}
                <h3
                  className="text-xl font-bold mb-3"
                  style={{ color: "var(--brand-navy)" }}
                >
                  {step.title}
                </h3>
                <p
                  className="text-sm leading-relaxed max-w-xs"
                  style={{ color: "var(--brand-text-muted)" }}
                >
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="reveal delay-700 mt-14 text-center">
          <button
            type="button"
            onClick={() => {
              const el = document.getElementById("contact");
              el?.scrollIntoView({ behavior: "smooth" });
            }}
            className="btn-glow inline-flex items-center gap-3 px-10 py-4 rounded-full font-bold text-lg text-white transition-all duration-200"
            style={{ background: "var(--brand-navy)" }}
          >
            🚀 Book Your Pickup Now
          </button>
        </div>
      </div>
    </section>
  );
}
