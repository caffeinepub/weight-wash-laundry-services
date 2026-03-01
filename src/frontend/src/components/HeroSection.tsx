import { useEffect, useRef } from "react";

interface Bubble {
  left: string;
  size: string;
  duration: string;
  delay: string;
}

const bubbles: Bubble[] = [
  { left: "5%", size: "24px", duration: "7s", delay: "0s" },
  { left: "12%", size: "40px", duration: "10s", delay: "1.5s" },
  { left: "22%", size: "16px", duration: "8s", delay: "3s" },
  { left: "34%", size: "30px", duration: "11s", delay: "0.5s" },
  { left: "45%", size: "20px", duration: "9s", delay: "2s" },
  { left: "55%", size: "48px", duration: "12s", delay: "4s" },
  { left: "65%", size: "18px", duration: "7.5s", delay: "1s" },
  { left: "74%", size: "36px", duration: "9.5s", delay: "2.5s" },
  { left: "83%", size: "26px", duration: "8.5s", delay: "3.5s" },
  { left: "92%", size: "14px", duration: "6.5s", delay: "0.8s" },
  { left: "18%", size: "56px", duration: "14s", delay: "5s" },
  { left: "50%", size: "12px", duration: "7s", delay: "6s" },
  { left: "70%", size: "22px", duration: "10s", delay: "4.5s" },
  { left: "30%", size: "44px", duration: "13s", delay: "2.8s" },
];

export default function HeroSection() {
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const subRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const badgeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const items = [
      { el: badgeRef.current, delay: 200 },
      { el: headlineRef.current, delay: 400 },
      { el: subRef.current, delay: 600 },
      { el: ctaRef.current, delay: 800 },
    ];
    for (const { el, delay } of items) {
      if (!el) continue;
      el.style.opacity = "0";
      el.style.transform = "translateY(28px)";
      const capturedEl = el;
      setTimeout(() => {
        capturedEl.style.transition = "opacity 0.7s ease, transform 0.7s ease";
        capturedEl.style.opacity = "1";
        capturedEl.style.transform = "translateY(0)";
      }, delay);
    }
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/assets/generated/hero-bg.dim_1600x900.jpg')",
        }}
        aria-hidden="true"
      />

      {/* Gradient overlay */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(160deg, rgba(10,20,60,0.88) 0%, rgba(14,40,100,0.82) 40%, rgba(0,80,130,0.7) 100%)",
        }}
        aria-hidden="true"
      />

      {/* Animated bubbles */}
      <div
        className="absolute inset-0 overflow-hidden pointer-events-none"
        aria-hidden="true"
      >
        {bubbles.map((b) => (
          <span
            key={`${b.left}-${b.size}-${b.delay}`}
            className="bubble"
            style={
              {
                left: b.left,
                width: b.size,
                height: b.size,
                "--duration": b.duration,
                "--delay": b.delay,
              } as React.CSSProperties
            }
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 text-center py-32">
        {/* Google Rating Badge */}
        <div
          ref={badgeRef}
          className="inline-flex items-center gap-2 px-5 py-2 rounded-full mb-8 font-semibold text-sm"
          style={{
            background: "rgba(255, 200, 50, 0.15)",
            border: "1px solid rgba(255, 200, 50, 0.4)",
            color: "oklch(0.92 0.18 85)",
          }}
        >
          <span className="text-lg">⭐</span>
          <span>5.0 Google Rating</span>
          <span className="opacity-70">• Trusted by Pimpri-Chinchwad</span>
        </div>

        {/* Headline */}
        <h1
          ref={headlineRef}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white leading-tight tracking-tight mb-6"
        >
          Premium Laundry <span className="text-gradient-aqua">Service</span>
          <br />
          in Pimpri-Chinchwad
        </h1>

        {/* Subheading */}
        <p
          ref={subRef}
          className="text-xl sm:text-2xl font-medium text-white/80 mb-10 tracking-wide"
        >
          Fast &nbsp;•&nbsp; Affordable &nbsp;•&nbsp; Hygienic &nbsp;•&nbsp;
          5-Star Rated
        </p>

        {/* CTA Buttons */}
        <div
          ref={ctaRef}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <a
            href="tel:+918080130795"
            className="btn-glow inline-flex items-center gap-2.5 px-8 py-4 rounded-full font-bold text-lg text-white transition-all duration-200"
            style={{ background: "var(--brand-aqua)" }}
          >
            📞 Call Now
          </a>
          <button
            type="button"
            onClick={() => {
              const el = document.getElementById("contact");
              el?.scrollIntoView({ behavior: "smooth" });
            }}
            className="btn-navy-glow inline-flex items-center gap-2.5 px-8 py-4 rounded-full font-bold text-lg text-white border-2 border-white/30 hover:border-white/60 transition-all duration-200"
            style={{ background: "rgba(255,255,255,0.1)" }}
          >
            🚀 Book Pickup
          </button>
        </div>

        {/* Trust indicators */}
        <div className="mt-14 flex flex-wrap justify-center gap-6 sm:gap-10">
          {[
            { icon: "✅", text: "5-Star Rated" },
            { icon: "🚗", text: "Free Doorstep Pickup" },
            { icon: "⚡", text: "Express Service" },
          ].map((item) => (
            <div
              key={item.text}
              className="flex items-center gap-2 text-white/75 text-sm font-medium"
            >
              <span className="text-base">{item.icon}</span>
              <span>{item.text}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom wave */}
      <div className="wave-divider" aria-hidden="true">
        <svg
          viewBox="0 0 1440 60"
          preserveAspectRatio="none"
          className="w-full h-14"
          role="presentation"
        >
          <path
            d="M0,40 C360,0 1080,80 1440,40 L1440,60 L0,60 Z"
            fill="oklch(0.96 0.02 220)"
          />
        </svg>
      </div>
    </section>
  );
}
