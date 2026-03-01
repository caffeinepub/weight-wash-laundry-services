import { useState } from "react";
import { toast } from "sonner";
import { useSubmitBooking } from "../hooks/useQueries";
import { useScrollReveal } from "../hooks/useScrollReveal";

const serviceOptions = [
  "Wash & Fold",
  "Steam Ironing",
  "Dry Cleaning",
  "Bulk Laundry",
  "Express Service",
];

export default function ContactSection() {
  const sectionRef = useScrollReveal() as React.RefObject<HTMLElement>;
  const { mutateAsync, isPending } = useSubmitBooking();

  const [form, setForm] = useState({ name: "", phone: "", service: "" });
  const [errors, setErrors] = useState<{
    name?: string;
    phone?: string;
    service?: string;
  }>({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const errs: typeof errors = {};
    if (!form.name.trim()) errs.name = "Name is required.";
    if (!/^\d{10}$/.test(form.phone.trim()))
      errs.phone = "Please enter a valid 10-digit phone number.";
    if (!form.service) errs.service = "Please select a service.";
    return errs;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof typeof errors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      // Focus first error field
      const firstKey = Object.keys(errs)[0] as keyof typeof errs;
      const el = document.querySelector<HTMLElement>(`[name="${firstKey}"]`);
      el?.focus();
      return;
    }

    try {
      await mutateAsync({
        name: form.name.trim(),
        phone: form.phone.trim(),
        service: form.service,
      });
      setSubmitted(true);
      setForm({ name: "", phone: "", service: "" });
      toast.success("Booking submitted! We'll contact you shortly.", {
        duration: 5000,
        description: "Weight & Wash will reach out to confirm your pickup.",
      });
    } catch {
      toast.error("Submission failed. Please try again or call us directly.", {
        duration: 5000,
      });
    }
  };

  return (
    <section
      id="contact"
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
            Reach Out
          </span>
          <h2
            className="reveal delay-100 text-4xl sm:text-5xl font-extrabold leading-tight"
            style={{ color: "var(--brand-navy)" }}
          >
            Get In <span className="text-gradient-aqua">Touch</span>
          </h2>
          <p
            className="reveal delay-200 mt-4 text-lg max-w-xl mx-auto"
            style={{ color: "var(--brand-text-muted)" }}
          >
            Book a pickup or send us a message. We'll get back to you fast.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10 items-start">
          {/* Left: Info + Form */}
          <div className="reveal-left">
            {/* Contact info */}
            <div
              className="rounded-2xl p-7 mb-7 border border-[oklch(0.9_0.03_220)]"
              style={{ background: "white" }}
            >
              <h3
                className="font-bold text-lg mb-5"
                style={{ color: "var(--brand-navy)" }}
              >
                Contact Information
              </h3>
              <div className="space-y-4">
                <div className="flex gap-3 items-start">
                  <span className="text-xl mt-0.5">📍</span>
                  <div>
                    <p
                      className="font-semibold text-sm"
                      style={{ color: "var(--brand-navy)" }}
                    >
                      Address
                    </p>
                    <p
                      className="text-sm"
                      style={{ color: "var(--brand-text-muted)" }}
                    >
                      Ashok Nagar, Tathawade, Dattwadi,
                      <br />
                      Pimpri-Chinchwad, Maharashtra 411033
                    </p>
                  </div>
                </div>
                <div className="flex gap-3 items-center">
                  <span className="text-xl">📞</span>
                  <div>
                    <p
                      className="font-semibold text-sm"
                      style={{ color: "var(--brand-navy)" }}
                    >
                      Phone
                    </p>
                    <a
                      href="tel:+918080130795"
                      className="text-sm font-medium hover:underline"
                      style={{ color: "var(--brand-aqua)" }}
                    >
                      +91 8080130795
                    </a>
                  </div>
                </div>
                <div className="flex gap-3 items-center">
                  <span className="text-xl">🕐</span>
                  <div>
                    <p
                      className="font-semibold text-sm"
                      style={{ color: "var(--brand-navy)" }}
                    >
                      Service Hours
                    </p>
                    <p
                      className="text-sm"
                      style={{ color: "var(--brand-text-muted)" }}
                    >
                      Mon – Sun: 7:00 AM – 9:00 PM
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Booking Form */}
            <div
              className="rounded-2xl p-7 border border-[oklch(0.9_0.03_220)]"
              style={{ background: "white" }}
            >
              <h3
                className="font-bold text-lg mb-5"
                style={{ color: "var(--brand-navy)" }}
              >
                Book a Pickup
              </h3>

              {submitted ? (
                <div
                  className="rounded-xl p-6 text-center"
                  style={{
                    background: "oklch(0.62 0.17 145 / 0.08)",
                    border: "1px solid oklch(0.62 0.17 145 / 0.3)",
                  }}
                >
                  <div className="text-4xl mb-3">✅</div>
                  <p
                    className="font-bold text-lg mb-1"
                    style={{ color: "var(--brand-navy)" }}
                  >
                    Booking Submitted!
                  </p>
                  <p
                    className="text-sm"
                    style={{ color: "var(--brand-text-muted)" }}
                  >
                    We'll call you shortly to confirm your pickup.
                  </p>
                  <button
                    type="button"
                    onClick={() => setSubmitted(false)}
                    className="mt-4 text-sm font-medium hover:underline"
                    style={{ color: "var(--brand-aqua)" }}
                  >
                    Submit another booking
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="space-y-5">
                  {/* Name */}
                  <div>
                    <label
                      htmlFor="contact-name"
                      className="block text-sm font-semibold mb-1.5"
                      style={{ color: "var(--brand-navy)" }}
                    >
                      Your Name *
                    </label>
                    <input
                      id="contact-name"
                      name="name"
                      type="text"
                      autoComplete="name"
                      value={form.name}
                      onChange={handleChange}
                      placeholder="e.g. Priya Sharma"
                      className="w-full px-4 py-3 rounded-xl border text-sm transition-colors duration-200 outline-none"
                      style={{
                        borderColor: errors.name
                          ? "oklch(0.577 0.245 27.325)"
                          : "oklch(0.88 0.03 220)",
                        color: "var(--brand-text)",
                        background: "oklch(0.98 0.005 220)",
                      }}
                      aria-describedby={errors.name ? "name-error" : undefined}
                      aria-invalid={!!errors.name}
                    />
                    {errors.name && (
                      <p
                        id="name-error"
                        role="alert"
                        className="mt-1 text-xs"
                        style={{ color: "oklch(0.577 0.245 27.325)" }}
                      >
                        {errors.name}
                      </p>
                    )}
                  </div>

                  {/* Phone */}
                  <div>
                    <label
                      htmlFor="contact-phone"
                      className="block text-sm font-semibold mb-1.5"
                      style={{ color: "var(--brand-navy)" }}
                    >
                      Phone Number *
                    </label>
                    <input
                      id="contact-phone"
                      name="phone"
                      type="tel"
                      autoComplete="tel"
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="10-digit mobile number"
                      maxLength={10}
                      className="w-full px-4 py-3 rounded-xl border text-sm transition-colors duration-200 outline-none"
                      style={{
                        borderColor: errors.phone
                          ? "oklch(0.577 0.245 27.325)"
                          : "oklch(0.88 0.03 220)",
                        color: "var(--brand-text)",
                        background: "oklch(0.98 0.005 220)",
                      }}
                      aria-describedby={
                        errors.phone ? "phone-error" : undefined
                      }
                      aria-invalid={!!errors.phone}
                    />
                    {errors.phone && (
                      <p
                        id="phone-error"
                        role="alert"
                        className="mt-1 text-xs"
                        style={{ color: "oklch(0.577 0.245 27.325)" }}
                      >
                        {errors.phone}
                      </p>
                    )}
                  </div>

                  {/* Service */}
                  <div>
                    <label
                      htmlFor="contact-service"
                      className="block text-sm font-semibold mb-1.5"
                      style={{ color: "var(--brand-navy)" }}
                    >
                      Service Required *
                    </label>
                    <select
                      id="contact-service"
                      name="service"
                      value={form.service}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border text-sm transition-colors duration-200 outline-none appearance-none"
                      style={{
                        borderColor: errors.service
                          ? "oklch(0.577 0.245 27.325)"
                          : "oklch(0.88 0.03 220)",
                        color: form.service
                          ? "var(--brand-text)"
                          : "var(--brand-text-muted)",
                        background: "oklch(0.98 0.005 220)",
                      }}
                      aria-describedby={
                        errors.service ? "service-error" : undefined
                      }
                      aria-invalid={!!errors.service}
                    >
                      <option value="">Select a service</option>
                      {serviceOptions.map((opt) => (
                        <option key={opt} value={opt}>
                          {opt}
                        </option>
                      ))}
                    </select>
                    {errors.service && (
                      <p
                        id="service-error"
                        role="alert"
                        className="mt-1 text-xs"
                        style={{ color: "oklch(0.577 0.245 27.325)" }}
                      >
                        {errors.service}
                      </p>
                    )}
                  </div>

                  <button
                    type="submit"
                    disabled={isPending}
                    className="w-full py-4 rounded-xl font-bold text-base text-white btn-glow transition-all duration-200 disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                    style={{ background: "var(--brand-aqua)" }}
                  >
                    {isPending ? (
                      <>
                        <svg
                          className="animate-spin w-5 h-5"
                          fill="none"
                          viewBox="0 0 24 24"
                          aria-hidden="true"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          />
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                          />
                        </svg>
                        Submitting…
                      </>
                    ) : (
                      "🚀 Book Pickup"
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* Right: Map */}
          <div className="reveal-right">
            <div className="rounded-2xl overflow-hidden shadow-card border border-[oklch(0.9_0.03_220)] h-full min-h-[480px]">
              <iframe
                title="Weight & Wash Location — Tathawade, Pimpri-Chinchwad"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3779.8!2d73.76117!3d18.63014!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2b9e5aea6c7a5%3A0x8c9b3f4d2e1a7f60!2sWeight%20%26%20Wash%20Laundry%20Services!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: "480px", display: "block" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
