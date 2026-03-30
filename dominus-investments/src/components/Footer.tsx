import { useRef, useEffect, useState } from "react";
const AMBER_GOLD = "#C6922A";

// ── Reusable animation hook ──────────────────────────────────────────────────
function useInView(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setInView(true); obs.disconnect(); } },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return { ref, inView };
}

// ── CTA Section ──────────────────────────────────────────────────────────────
function CTASection() {
  const { ref, inView } = useInView(0.2);

  return (
    <>
      <style>{`
        .cta-root {
          position: relative;
          min-height: 80vh;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
          font-family: 'Georgia', 'Times New Roman', serif;
          background: #1a1a1a;
        }
        .cta-bg-pattern {
          position: absolute;
          inset: 0;
          background-image:
            linear-gradient(rgba(198,146,42,0.06) 1px, transparent 1px),
            linear-gradient(90deg, rgba(198,146,42,0.06) 1px, transparent 1px);
          background-size: 80px 80px;
        }
        .cta-bg-glow {
          position: absolute;
          width: 600px;
          height: 600px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(198,146,42,0.12) 0%, transparent 70%);
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          pointer-events: none;
        }
        .cta-inner {
          position: relative;
          z-index: 2;
          text-align: center;
          padding: 80px 32px;
          max-width: 800px;
          margin: 0 auto;
        }
        .cta-eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 32px;
          opacity: 0;
          transform: translateY(16px);
          transition: opacity 0.7s ease, transform 0.7s ease;
        }
        .cta-eyebrow.visible { opacity: 1; transform: translateY(0); }
        .cta-eyebrow-line { width: 32px; height: 1px; background: ${AMBER_GOLD}; }
        .cta-eyebrow-text {
          font-size: 13px;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: ${AMBER_GOLD};
        }
        .cta-h2 {
          font-size: clamp(43px, 5.5vw, 77px);
          font-weight: 400;
          color: #f9f6f1;
          line-height: 1.1;
          letter-spacing: -0.01em;
          margin: 0 0 24px;
          opacity: 0;
          transform: translateY(20px);
          transition: opacity 0.8s ease 0.1s, transform 0.8s ease 0.1s;
        }
        .cta-h2.visible { opacity: 1; transform: translateY(0); }
        .cta-h2 em { color: ${AMBER_GOLD}; font-style: italic; }
        .cta-p {
          font-size: 19px;
          line-height: 1.75;
          color: rgba(249,246,241,0.6);
          font-style: italic;
          max-width: 480px;
          margin: 0 auto 48px;
          opacity: 0;
          transform: translateY(16px);
          transition: opacity 0.7s ease 0.2s, transform 0.7s ease 0.2s;
        }
        .cta-p.visible { opacity: 1; transform: translateY(0); }
        .cta-actions {
          display: flex;
          gap: 16px;
          justify-content: center;
          flex-wrap: wrap;
          opacity: 0;
          transform: translateY(16px);
          transition: opacity 0.7s ease 0.3s, transform 0.7s ease 0.3s;
        }
        .cta-actions.visible { opacity: 1; transform: translateY(0); }
        .cta-btn-primary {
          background: transparent;
          color: ${AMBER_GOLD};
          border: 1px solid ${AMBER_GOLD};
          padding: 16px 36px;
          font-size: 13px;
          font-weight: 600;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          text-decoration: none;
          font-family: 'Georgia', 'Times New Roman', serif;
          display: inline-block;
          transition: background 0.2s, color 0.2s, transform 0.15s;
          border-radius: 4px;
        }
        .cta-btn-primary:hover { background: rgba(198,146,42,0.15); color: white; transform: translateY(-1px); }
        .cta-btn-ghost {
          background: transparent;
          color: rgba(249,246,241,0.8);
          border: 1px solid rgba(249,246,241,0.25);
          padding: 16px 36px;
          font-size: 13px;
          font-weight: 600;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          text-decoration: none;
          font-family: 'Georgia', 'Times New Roman', serif;
          display: inline-block;
          transition: border-color 0.2s, color 0.2s;
          border-radius: 4px;
        }
        .cta-btn-ghost:hover {
          border-color: rgba(249,246,241,0.6);
          color: #f9f6f1;
        }
        .cta-divider {
          width: 48px;
          height: 1px;
          background: rgba(198,146,42,0.4);
          margin: 56px auto 0;
          opacity: 0;
          transition: opacity 0.7s ease 0.4s;
        }
        .cta-divider.visible { opacity: 1; }
        .cta-wa {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          color: rgba(249,246,241,0.45);
          font-size: 14px;
          letter-spacing: 0.06em;
          text-decoration: none;
          margin-top: 20px;
          font-style: italic;
          transition: color 0.2s;
        }
        .cta-wa:hover { color: ${AMBER_GOLD}; }
        .cta-wa-dot {
          width: 6px; height: 6px;
          border-radius: 50%;
          background: #25D366;
          flex-shrink: 0;
        }
      `}</style>

      <section className="cta-root" ref={ref}>
        <div className="cta-bg-pattern" />
        <div className="cta-bg-glow" />

        <div className="cta-inner">
          <div className={`cta-eyebrow${inView ? " visible" : ""}`}>
            <div className="cta-eyebrow-line" />
            <span className="cta-eyebrow-text">Take The First Step</span>
          </div>

          <h2 className={`cta-h2${inView ? " visible" : ""}`}>
            Ready to Transform<br />Your <em>Business?</em>
          </h2>

          <p className={`cta-p${inView ? " visible" : ""}`}>
            Complete our pre-qualification assessment and discover if the
            Dominus Method is the right fit for where your business is today.
          </p>

          <div className={`cta-actions${inView ? " visible" : ""}`}>
            <a href="/work-with-us#form" className="cta-btn-primary">
              Submit Your Business
            </a>
          </div>

          <div className={`cta-divider${inView ? " visible" : ""}`} />
          <div style={{ textAlign: "center" }}>
            <a
              href="https://wa.me/27000000000"
              target="_blank"
              rel="noopener noreferrer"
              className="cta-wa"
            >
              
              
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

// ── Footer ───────────────────────────────────────────────────────────────────
function Footer() {
  const year = new Date().getFullYear();

  return (
    <>
      <style>{`
        .footer-root {
          background: #111;
          color: rgba(249,246,241,0.5);
          font-family: 'Georgia', 'Times New Roman', serif;
          padding: 56px 32px 32px;
          border-top: 0.5px solid rgba(198,146,42,0.2);
        }
        .footer-inner {
          max-width: 1200px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 2fr 1fr 1fr;
          gap: 48px;
          margin-bottom: 48px;
        }
        .footer-brand-name {
          font-size: 17px;
          font-weight: 700;
          color: #f9f6f1;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          margin-bottom: 4px;
        }
        .footer-brand-name span { color: ${AMBER_GOLD}; }
        .footer-brand-tagline {
          font-size: 14px;
          color: rgba(249,246,241,0.35);
          font-style: italic;
          margin-bottom: 20px;
        }
        .footer-brand-desc {
          font-size: 16px;
          line-height: 1.7;
          color: rgba(249,246,241,0.4);
          font-style: italic;
          max-width: 280px;
        }
        .footer-col-title {
          font-size: 12px;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: ${AMBER_GOLD};
          margin-bottom: 20px;
        }
        .footer-links { list-style: none; margin: 0; padding: 0; }
        .footer-links li { margin-bottom: 10px; }
        .footer-links a {
          font-size: 16px;
          color: rgba(249,246,241,0.45);
          text-decoration: none;
          transition: color 0.2s;
          font-style: italic;
        }
        .footer-links a:hover { color: ${AMBER_GOLD}; }
        .footer-bottom {
          max-width: 1200px;
          margin: 0 auto;
          padding-top: 24px;
          border-top: 0.5px solid rgba(255,255,255,0.06);
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          gap: 12px;
        }
        .footer-copy { font-size: 13px; color: rgba(249,246,241,0.25); }
        .footer-copy span { color: ${AMBER_GOLD}; }
        .footer-legal { display: flex; gap: 24px; }
        .footer-legal a {
          font-size: 13px;
          color: rgba(249,246,241,0.25);
          text-decoration: none;
          transition: color 0.2s;
        }
        .footer-legal a:hover { color: rgba(249,246,241,0.5); }
        @media (max-width: 768px) {
          .footer-inner { grid-template-columns: 1fr 1fr; }
          .footer-bottom { flex-direction: column; align-items: flex-start; }
        }
        @media (max-width: 480px) {
          .footer-inner { grid-template-columns: 1fr; }
        }
      `}</style>

      <footer className="footer-root">
        <div className="footer-inner">
          <div>
            <div className="footer-brand-name">
              Dominus<span> Investments</span>
            </div>
            <div className="footer-brand-tagline">We build businesses that last.</div>
            <p className="footer-brand-desc">
              Helping South African SMEs diagnose, stabilise, and scale through
              proven operational systems. Based in Durban, KwaZulu-Natal.
            </p>
          </div>

          <div>
            <div className="footer-col-title">Navigate</div>
            <ul className="footer-links">
              {[
                { label: "Home", href: "/" },
                { label: "About", href: "/about" },
                { label: "Services", href: "/services" },
                { label: "Work With Us", href: "/work-with-us" },
                { label: "Contact", href: "/contact" },
              ].map((l) => (
                <li key={l.href}>
                  <a href={l.href}>{l.label}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className="footer-col-title">Contact</div>
            <ul className="footer-links">
              <li><a href="mailto:info@dominusinvestments.co.za">info@dominusinvestments.co.za</a></li>
              <li><a href="https://wa.me/27000000000" target="_blank" rel="noopener noreferrer">WhatsApp Us</a></li>
              <li><a href="/work-with-us#form">Submit Your Business</a></li>
              <li style={{ marginTop: 16, fontStyle: "italic", fontSize: 14, color: "rgba(249,246,241,0.25)" }}>
                Durban, KwaZulu-Natal<br />South Africa
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-copy">
            © {year} <span>Dominus Investments</span>. All rights reserved.
          </div>
          <div className="footer-legal">
            <a href="/privacy">Privacy Policy</a>
            <a href="/terms">Terms of Use</a>
          </div>
        </div>
      </footer>
    </>
  );
}

// ── Home Page ────────────────────────────────────────────────────────────────
export default function Home() {
  return (
    <>
      <CTASection />
      <Footer />
    </>
  );
}