import { useEffect, useRef } from "react";
import { useScrollReveal } from "../hooks/useScrollReveal";

const highlights = [
  {
    icon: "⭐",
    title: "5-Star Google Rated",
    desc: "Consistently rated 5 stars by our happy customers across Pimpri-Chinchwad.",
  },
  {
    icon: "🧺",
    title: "Professional Handling",
    desc: "Trained staff ensures each garment is treated with the utmost care and attention.",
  },
  {
    icon: "🌿",
    title: "Safe Detergents",
    desc: "We use skin-friendly, eco-conscious detergents that are tough on stains, gentle on fabrics.",
  },
  {
    icon: "⚡",
    title: "Quick Turnaround",
    desc: "Standard 24-48 hour service with same-day express options available on request.",
  },
];

export default function AboutSection() {
  const sectionRef = useScrollReveal() as React.RefObject<HTMLElement>;

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative py-24 bg-[var(--brand-light-bg)]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Text */}
          <div>
            <div className="reveal">
              <span
                className="inline-block px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase mb-4"
                style={{
                  background: "oklch(0.88 0.1 200 / 0.2)",
                  color: "var(--brand-navy)",
                }}
              >
                About Us
              </span>
              <h2
                className="text-4xl sm:text-5xl font-extrabold leading-tight mb-6"
                style={{ color: "var(--brand-navy)" }}
              >
                About{" "}
                <span className="text-gradient-aqua">Weight &amp; Wash</span>
              </h2>
            </div>
            <p
              className="reveal delay-200 text-lg leading-relaxed mb-6"
              style={{ color: "var(--brand-text-muted)" }}
            >
              Weight &amp; Wash provides professional laundry services with a
              focus on hygiene, care, and timely delivery. Serving
              Pimpri-Chinchwad and nearby areas with pride.
            </p>
            <p
              className="reveal delay-300 text-lg leading-relaxed mb-8"
              style={{ color: "var(--brand-text-muted)" }}
            >
              From the Ashok Nagar, Tathawade, and Dattwadi neighborhoods to the
              wider Pimpri-Chinchwad region — we bring the freshness of a 5-star
              laundry experience straight to your doorstep.
            </p>
            <div className="reveal delay-400">
              <a
                href="tel:+918080130795"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-bold text-white btn-glow"
                style={{ background: "var(--brand-aqua)" }}
              >
                📞 +91 8080130795
              </a>
            </div>
          </div>

          {/* Right: Highlight cards */}
          <div className="grid sm:grid-cols-2 gap-5">
            {highlights.map((item, i) => (
              <div
                key={item.title}
                className={`reveal delay-${(i + 1) * 100} bg-white rounded-2xl p-6 shadow-card border border-[oklch(0.9_0.03_220)] hover:shadow-card-hover transition-shadow duration-300`}
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl mb-4"
                  style={{ background: "oklch(0.88 0.1 200 / 0.18)" }}
                >
                  {item.icon}
                </div>
                <h3
                  className="font-bold text-base mb-2"
                  style={{ color: "var(--brand-navy)" }}
                >
                  {item.title}
                </h3>
                <p
                  className="text-sm leading-relaxed"
                  style={{ color: "var(--brand-text-muted)" }}
                >
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
