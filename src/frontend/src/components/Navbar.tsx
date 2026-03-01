import { useEffect, useState } from "react";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "navbar-glass py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between">
        {/* Brand Name */}
        <button
          type="button"
          onClick={() => handleNavClick("#home")}
          className="flex items-center gap-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40 rounded"
          aria-label="Weight & Wash Home"
        >
          <span className="text-white font-bold text-lg tracking-wide">
            Weight &amp; Wash
          </span>
        </button>

        {/* Desktop nav */}
        <nav
          className="hidden md:flex items-center gap-8"
          aria-label="Main navigation"
        >
          {navLinks.map((link) => (
            <button
              type="button"
              key={link.href}
              onClick={() => handleNavClick(link.href)}
              className="text-white/90 hover:text-white font-medium text-sm tracking-wide transition-colors duration-200 relative group focus-visible:outline-none"
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[var(--brand-aqua)] transition-all duration-300 group-hover:w-full" />
            </button>
          ))}
          <a
            href="tel:+918080130795"
            className="btn-glow ml-2 px-5 py-2.5 rounded-full text-sm font-semibold text-white bg-[var(--brand-aqua)] hover:bg-[var(--brand-aqua-bright)] transition-all duration-200"
          >
            📞 Call Now
          </a>
        </nav>

        {/* Mobile hamburger */}
        <button
          type="button"
          className="md:hidden flex flex-col gap-1.5 p-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40 rounded"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-expanded={mobileOpen}
          aria-label="Toggle menu"
        >
          <span
            className={`block h-0.5 w-6 bg-white transition-all duration-300 ${
              mobileOpen ? "rotate-45 translate-y-2" : ""
            }`}
          />
          <span
            className={`block h-0.5 w-6 bg-white transition-all duration-300 ${
              mobileOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block h-0.5 w-6 bg-white transition-all duration-300 ${
              mobileOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
          />
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          mobileOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
        style={{ background: "rgba(10, 20, 60, 0.97)" }}
      >
        <nav
          className="flex flex-col px-6 pb-6 pt-2 gap-1"
          aria-label="Mobile navigation"
        >
          {navLinks.map((link) => (
            <button
              type="button"
              key={link.href}
              onClick={() => handleNavClick(link.href)}
              className="text-left text-white/90 hover:text-white py-3 font-medium border-b border-white/10 last:border-0 focus-visible:outline-none"
            >
              {link.label}
            </button>
          ))}
          <a
            href="tel:+918080130795"
            className="mt-3 text-center px-5 py-3 rounded-full font-semibold text-white bg-[var(--brand-aqua)] btn-glow"
          >
            📞 Call Now
          </a>
        </nav>
      </div>
    </header>
  );
}
