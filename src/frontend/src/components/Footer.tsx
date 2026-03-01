const currentYear = new Date().getFullYear();
const hostname = typeof window !== "undefined" ? window.location.hostname : "";
const caffeineUrl = `https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(hostname)}`;

const quickLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  const handleNavClick = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <footer
      className="relative pt-16 pb-8"
      style={{
        background:
          "linear-gradient(160deg, oklch(0.14 0.1 248) 0%, oklch(0.18 0.12 240) 100%)",
      }}
    >
      {/* Top wave */}
      <div
        className="absolute top-0 left-0 w-full overflow-hidden"
        style={{ transform: "rotate(180deg)" }}
        aria-hidden="true"
      >
        <svg
          viewBox="0 0 1440 40"
          preserveAspectRatio="none"
          className="w-full h-10"
          role="presentation"
        >
          <path
            d="M0,20 C360,40 1080,0 1440,20 L1440,40 L0,40 Z"
            fill="oklch(0.96 0.02 220)"
          />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-6">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <img
              src="/assets/uploads/ChatGPT-Image-Mar-1-2026-05_15_46-PM-1.png"
              alt="Weight & Wash Laundry Services"
              className="h-14 w-auto mb-4"
            />
            <p className="text-sm leading-relaxed text-white/60 mb-6">
              Fresh. Fast. Professional.
              <br />
              Pimpri-Chinchwad's most trusted laundry service.
            </p>
            {/* Social icons */}
            <div className="flex gap-3">
              {/* Facebook */}
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full flex items-center justify-center text-white/70 hover:text-white transition-colors duration-200"
                style={{ background: "rgba(255,255,255,0.1)" }}
              >
                <span className="sr-only">Visit us on Facebook</span>
                <svg
                  width="16"
                  height="16"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
              </a>
              {/* Instagram */}
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full flex items-center justify-center text-white/70 hover:text-white transition-colors duration-200"
                style={{ background: "rgba(255,255,255,0.1)" }}
              >
                <span className="sr-only">Visit us on Instagram</span>
                <svg
                  width="16"
                  height="16"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
              </a>
              {/* WhatsApp */}
              <a
                href="https://wa.me/918080130795"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full flex items-center justify-center text-white/70 hover:text-white transition-colors duration-200"
                style={{ background: "rgba(255,255,255,0.1)" }}
              >
                <span className="sr-only">Chat on WhatsApp</span>
                <svg
                  width="16"
                  height="16"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="font-bold text-sm text-white mb-5 tracking-wider uppercase">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <button
                    type="button"
                    onClick={() => handleNavClick(link.href)}
                    className="text-sm text-white/60 hover:text-white transition-colors duration-200 text-left focus-visible:outline-none focus-visible:underline"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold text-sm text-white mb-5 tracking-wider uppercase">
              Our Services
            </h4>
            <ul className="space-y-3">
              {[
                "Wash & Fold",
                "Steam Ironing",
                "Dry Cleaning",
                "Bulk Laundry",
                "Express Service",
              ].map((s) => (
                <li key={s}>
                  <span className="text-sm text-white/60">{s}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-sm text-white mb-5 tracking-wider uppercase">
              Contact
            </h4>
            <div className="space-y-4">
              <div className="flex gap-2.5 items-start">
                <span className="text-base mt-0.5 flex-shrink-0">📍</span>
                <p className="text-sm text-white/60 leading-relaxed">
                  Ashok Nagar, Tathawade, Dattwadi,
                  <br />
                  Pimpri-Chinchwad, MH 411033
                </p>
              </div>
              <div className="flex gap-2.5 items-center">
                <span className="text-base flex-shrink-0">📞</span>
                <a
                  href="tel:+918080130795"
                  className="text-sm hover:underline transition-colors duration-200"
                  style={{ color: "var(--brand-aqua-light)" }}
                >
                  +91 8080130795
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 pt-7 flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="text-xs text-white/40 text-center sm:text-left">
            © {currentYear} Weight &amp; Wash Laundry Services. All rights
            reserved.
          </p>
          <p className="text-xs text-white/40 text-center sm:text-right">
            Built with ❤️ using{" "}
            <a
              href={caffeineUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white/70 underline transition-colors duration-200"
            >
              caffeine.ai
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
