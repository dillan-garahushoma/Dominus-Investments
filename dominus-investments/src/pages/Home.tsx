import { useRef, useEffect, useState } from "react";
import HeroSection from "../components/HeroSection";
import Navigation from "../components/Navigation";

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

// ── What We Do ───────────────────────────────────────────────────────────────
function WhatWeDo() {
  const { ref, inView } = useInView(0.1);

  const items = [
    {
      num: "01",
      title: "Diagnose",
      desc: "Identify operational bottlenecks and inefficiencies preventing your business from scaling. We get inside the numbers and the day-to-day before we say a word.",
    },
    {
      num: "02",
      title: "Implement",
      desc: "Deploy proven internal systems that create structure, accountability, and predictable outcomes — built for the South African SME landscape.",
    },
    {
      num: "03",
      title: "Scale",
      desc: "Drive sustainable growth through systematic processes that work without constant oversight. You lead; the systems do the heavy lifting.",
    },
  ];

  return (
    <>
      <style>{`
        .wwd-root {
          background: #1a1a1a;
          color: #f9f6f1;
          padding: 120px 32px;
          font-family: 'Georgia', 'Times New Roman', serif;
        }
        .wwd-inner {
          max-width: 1200px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 80px;
        }
        .wwd-left {
          position: sticky;
          top: 100px;
          align-self: start;
        }
        .wwd-eyebrow {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 28px;
        }
        .wwd-eyebrow-line { width: 32px; height: 1px; background: ${AMBER_GOLD}; }
        .wwd-eyebrow-text {
          font-size: 23px;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: ${AMBER_GOLD};
        }
        .wwd-h2 {
          font-size: clamp(50px, 5vw, 77px);
          font-weight: 400;
          line-height: 1.1;
          letter-spacing: -0.01em;
          color: #f9f6f1;
          margin: 0 0 28px;
        }
        .wwd-h2 em { color: ${AMBER_GOLD}; font-style: italic; }
        .wwd-body {
          font-size: 19px;
          line-height: 1.75;
          color: rgba(249,246,241,0.6);
          font-style: italic;
          max-width: 380px;
        }
        .wwd-right { display: flex; flex-direction: column; }
        .wwd-item {
          padding: 40px 0;
          border-top: 0.5px solid rgba(255,255,255,0.1);
          display: grid;
          grid-template-columns: 48px 1fr;
          gap: 24px;
          opacity: 0;
          transform: translateY(24px);
          transition: opacity 0.7s ease, transform 0.7s ease;
        }
        .wwd-item.visible {
          opacity: 1;
          transform: translateY(0);
        }
        .wwd-item:last-child { border-bottom: 0.5px solid rgba(255,255,255,0.1); }
        .wwd-num {
          font-size: 43px;
          letter-spacing: 0.1em;
          color: ${AMBER_GOLD};
          padding-top: 6px;
        }
        .wwd-item-title {
          font-size: 34px;
          font-weight: 400;
          color: #f9f6f1;
          margin-bottom: 12px;
        }
        .wwd-item-desc {
          font-size: 18px;
          line-height: 1.7;
          color: rgba(249,246,241,0.55);
          font-style: italic;
        }
        @media (max-width: 900px) {
          .wwd-inner { grid-template-columns: 1fr; gap: 48px; }
          .wwd-left { position: static; }
        }
      `}</style>

      <section className={`wwd-root transition-slide-up${inView ? " visible" : ""}`}>
        <div className="wwd-inner" ref={ref}>
          <div className="wwd-left">
            <div className="wwd-eyebrow">
              <div className="wwd-eyebrow-line" />
              <span className="wwd-eyebrow-text">Our Approach</span>
            </div>
            <h2 className="wwd-h2">
              What<br />We <em>Do.</em>
            </h2>
            <p className="wwd-body">
              Dominus Investments specialises in transforming struggling businesses
              into profitable, scalable operations. We work exclusively with small
              to medium businesses in Durban and beyond — hands-on, results-driven,
              no fluff.
            </p>
          </div>

          <div className="wwd-right">
            {items.map((item, i) => (
              <div
                key={item.num}
                className={`wwd-item${inView ? " visible" : ""}`}
                style={{ transitionDelay: inView ? `${i * 0.15}s` : "0s" }}
              >
                <span className="wwd-num">{item.num}</span>
                <div>
                  <div className="wwd-item-title">{item.title}</div>
                  <div className="wwd-item-desc">{item.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

// ── The Method ───────────────────────────────────────────────────────────────
function TheMethod() {
  const { ref, inView } = useInView(0.05);

  const stages = [
    { number: "01", title: "Business Assessment", desc: "Deep diagnostic of your current operations — financial, operational, and structural." },
    { number: "02", title: "Stabilisation", desc: "Fix critical issues and establish the foundations your business needs to stop bleeding." },
    { number: "03", title: "Systems Implementation", desc: "Deploy scalable processes, accountability frameworks, and internal structures." },
    { number: "04", title: "Growth & Scaling", desc: "Accelerate revenue with proven systems — only once the foundation is solid." },
  ];

  return (
    <>
      <style>{`
        .method-root {
          background: #f9f6f1;
          padding: 120px 32px;
          font-family: 'Georgia', 'Times New Roman', serif;
        }
        .method-inner { max-width: 1200px; margin: 0 auto; }
        .method-header {
          text-align: center;
          margin-bottom: 80px;
          opacity: 0;
          transform: translateY(20px);
          transition: opacity 0.8s ease, transform 0.8s ease;
        }
        .method-header.visible { opacity: 1; transform: translateY(0); }
        .method-eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 24px;
        }
        .method-eyebrow-line { width: 32px; height: 1px; background: ${AMBER_GOLD}; }
        .method-eyebrow-text {
          font-size: 13px;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: ${AMBER_GOLD};
        }
        .method-h2 {
          font-size: clamp(43px, 5vw, 72px);
          font-weight: 400;
          color: #1a1a1a;
          line-height: 1.1;
          margin: 0 0 20px;
          letter-spacing: -0.01em;
        }
        .method-h2 em { color: ${AMBER_GOLD}; font-style: italic; }
        .method-subtitle {
          font-size: 19px;
          line-height: 1.75;
          color: #888;
          font-style: italic;
          max-width: 520px;
          margin: 0 auto;
        }
        .method-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          border-top: 0.5px solid #e8e0d4;
          border-bottom: 0.5px solid #e8e0d4;
        }
        .method-card {
          padding: 48px 32px;
          border-right: 0.5px solid #e8e0d4;
          position: relative;
          opacity: 0;
          transform: translateY(20px);
          transition: opacity 0.7s ease, transform 0.7s ease;
          cursor: default;
        }
        .method-card:last-child { border-right: none; }
        .method-card.visible { opacity: 1; transform: translateY(0); }
        .method-card::after {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 2px;
          background: ${AMBER_GOLD};
          transform: scaleX(0);
          transform-origin: left;
          transition: transform 0.4s ease;
        }
        .method-card:hover::after { transform: scaleX(1); }
        .method-card-num {
          font-size: 67px;
          font-weight: 400;
          color: #e8e0d4;
          line-height: 1;
          margin-bottom: 48px;
          transition: color 0.3s ease;
        }
        .method-card:hover .method-card-num { color: ${AMBER_GOLD}; }
        .method-card-title {
          font-size: 24px;
          font-weight: 700;
          color: #1a1a1a;
          margin-bottom: 12px;
          line-height: 1.3;
        }
        .method-card-desc {
          font-size: 16px;
          color: #999;
          line-height: 1.7;
          font-style: italic;
        }
        .method-cta {
          display: flex;
          justify-content: center;
          margin-top: 56px;
        }
        .method-cta-btn {
          background: transparent;
          color: #1a1a1a;
          border: 1px solid #1a1a1a;
          padding: 16px 40px;
          font-size: 13px;
          font-weight: 600;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          text-decoration: none;
          font-family: 'Georgia', 'Times New Roman', serif;
          position: relative;
          overflow: hidden;
          display: inline-block;
          transition: color 0.4s ease;
        }
        .method-cta-btn::before {
          content: '';
          position: absolute;
          inset: 0;
          background: #1a1a1a;
          transform: scaleY(0);
          transform-origin: bottom;
          transition: transform 0.4s cubic-bezier(0.16,1,0.3,1);
        }
        .method-cta-btn:hover { color: #f9f6f1; }
        .method-cta-btn:hover::before { transform: scaleY(1); }
        .method-cta-btn span { position: relative; z-index: 1; }
        @media (max-width: 900px) {
          .method-grid { grid-template-columns: 1fr 1fr; }
          .method-card { border-bottom: 0.5px solid #e8e0d4; }
          .method-card:nth-child(2n) { border-right: none; }
          .method-card:nth-last-child(-n+2) { border-bottom: none; }
        }
        @media (max-width: 540px) {
          .method-grid { grid-template-columns: 1fr; }
          .method-card { border-right: none; border-bottom: 0.5px solid #e8e0d4; }
          .method-card:last-child { border-bottom: none; }
        }
      `}</style>

      <section className="method-root" ref={ref}>
        <div className="method-inner">
          <div className={`method-header${inView ? " visible" : ""}`}>
            <div className="method-eyebrow">
              <div className="method-eyebrow-line" />
              <span className="method-eyebrow-text">Four-Stage Framework</span>
            </div>
            <h2 className="method-h2">
              The Dominus <em>Method</em>
            </h2>
            <p className="method-subtitle">
              A proven four-stage framework that takes your business from
              operational chaos to systematic, sustainable growth.
            </p>
          </div>

          <div className="method-grid">
            {stages.map((stage, i) => (
              <div
                key={stage.number}
                className={`method-card${inView ? " visible" : ""}`}
                style={{ transitionDelay: inView ? `${0.1 + i * 0.12}s` : "0s" }}
              >
                <div className="method-card-num">{stage.number}</div>
                <div className="method-card-title">{stage.title}</div>
                <div className="method-card-desc">{stage.desc}</div>
              </div>
            ))}
          </div>

          <div className="method-cta">
            <a href="/themethod" className="method-cta-btn">
              <span>Explore The Method</span>
            </a>
          </div>
        </div>
      </section>
    </>
  );
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
          background: ${AMBER_GOLD};
          color: white;
          border: 1px solid ${AMBER_GOLD};
          padding: 16px 36px;
          font-size: 13px;
          font-weight: 600;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          text-decoration: none;
          font-family: 'Georgia', 'Times New Roman', serif;
          display: inline-block;
          transition: background 0.2s, transform 0.15s;
          border-radius: 4px;
        }
        .cta-btn-primary:hover { background: #b0811f; transform: translateY(-1px); }
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
            <a href="/work-with-us" className="cta-btn-primary">
              Work With Us
            </a>
            <a href="/work-with-us#form" className="cta-btn-ghost">
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
              <span className="cta-wa-dot" />
              Or contact us directly via WhatsApp
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
      <Navigation />
      <HeroSection />
      <WhatWeDo />
      <TheMethod />
      <CTASection />
      <Footer />
    </>
  );
}