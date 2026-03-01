export default function MobileCallBar() {
  return (
    <a
      href="tel:+918080130795"
      className="mobile-sticky-bar fixed bottom-0 left-0 right-0 z-50 flex items-center justify-center gap-3 py-4 font-bold text-white text-base"
      style={{
        background:
          "linear-gradient(90deg, var(--brand-navy) 0%, oklch(0.28 0.16 230) 100%)",
        boxShadow: "0 -4px 20px rgba(0,0,0,0.25)",
      }}
      aria-label="Call Weight & Wash now"
    >
      <span className="text-lg">📞</span>
      <span>Call Now — 8080130795</span>
    </a>
  );
}
