import { useScrollReveal } from "../hooks/useScrollReveal";

const testimonials = [
  {
    name: "Priya Sharma",
    location: "Tathawade, Pimpri-Chinchwad",
    avatar: "PS",
    rating: 5,
    text: "Absolutely love the service! My clothes come back perfectly clean and neatly folded every time. The detergents smell amazing and are gentle on my kids' clothes. Highly recommend to everyone!",
  },
  {
    name: "Rahul Patil",
    location: "Ashok Nagar, Pimpri-Chinchwad",
    avatar: "RP",
    rating: 5,
    text: "Super fast delivery and very affordable. I use the express service for my office shirts — always on time, crisp, and professional. The staff is friendly and handles everything with care. 10/10 service!",
  },
  {
    name: "Sneha Joshi",
    location: "Dattwadi, Pimpri-Chinchwad",
    avatar: "SJ",
    rating: 5,
    text: "Best laundry service in Pimpri-Chinchwad! Safe detergents, fresh smell, and always on time. The pickup and delivery is so convenient — saves me so much time. Won't go anywhere else.",
  },
];

const STAR_KEYS = [0, 1, 2, 3, 4] as const;

function StarRating({ count }: { count: number }) {
  return (
    <div className="flex gap-1" aria-label={`${count} out of 5 stars`}>
      {STAR_KEYS.slice(0, count).map((idx) => (
        <svg
          key={idx}
          className="w-4 h-4 star-filled fill-current"
          viewBox="0 0 24 24"
          aria-hidden="true"
          role="presentation"
        >
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      ))}
    </div>
  );
}

export default function Testimonials() {
  const sectionRef = useScrollReveal() as React.RefObject<HTMLElement>;

  return (
    <section
      id="testimonials"
      ref={sectionRef}
      className="relative py-24 bg-white"
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
            Customer Love
          </span>
          <h2
            className="reveal delay-100 text-4xl sm:text-5xl font-extrabold leading-tight"
            style={{ color: "var(--brand-navy)" }}
          >
            What Our Customers <span className="text-gradient-aqua">Say</span>
          </h2>
          <p
            className="reveal delay-200 mt-4 text-lg max-w-xl mx-auto"
            style={{ color: "var(--brand-text-muted)" }}
          >
            Real words from real customers who trust Weight &amp; Wash.
          </p>
        </div>

        {/* Testimonial cards */}
        <div className="grid md:grid-cols-3 gap-7">
          {testimonials.map((t, i) => (
            <article
              key={t.name}
              className={`reveal delay-${(i + 1) * 150} service-card bg-white rounded-2xl p-7 shadow-card border border-[oklch(0.9_0.03_220)] flex flex-col`}
            >
              {/* Quote mark */}
              <div
                className="text-5xl font-serif leading-none mb-3 -mt-1"
                style={{ color: "var(--brand-aqua-light)" }}
                aria-hidden="true"
              >
                &ldquo;
              </div>

              <p
                className="flex-1 text-sm leading-relaxed mb-6"
                style={{ color: "var(--brand-text-muted)" }}
              >
                {t.text}
              </p>

              {/* Footer */}
              <div className="flex items-center gap-4">
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center font-bold text-sm text-white flex-shrink-0"
                  style={{
                    background:
                      "linear-gradient(135deg, var(--brand-navy) 0%, var(--brand-aqua) 100%)",
                  }}
                >
                  {t.avatar}
                </div>
                <div>
                  <p
                    className="font-bold text-sm"
                    style={{ color: "var(--brand-navy)" }}
                  >
                    {t.name}
                  </p>
                  <p
                    className="text-xs mb-1"
                    style={{ color: "var(--brand-text-muted)" }}
                  >
                    {t.location}
                  </p>
                  <StarRating count={t.rating} />
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Google Rating CTA */}
        <div className="reveal delay-500 mt-12 text-center">
          <div
            className="inline-flex items-center gap-3 px-7 py-4 rounded-2xl border"
            style={{
              borderColor: "oklch(0.82 0.18 82 / 0.35)",
              background: "oklch(0.82 0.18 82 / 0.06)",
            }}
          >
            <span className="text-2xl">⭐</span>
            <div className="text-left">
              <p
                className="font-bold text-sm"
                style={{ color: "var(--brand-navy)" }}
              >
                Rated 5.0 on Google
              </p>
              <p
                className="text-xs"
                style={{ color: "var(--brand-text-muted)" }}
              >
                Based on Google Reviews · Pimpri-Chinchwad
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
