import { useRef, useEffect, useState } from "react";
import Navigation from "../components/Navigation";

const GOLD = "#C6922A";
const CREAM = "#f9f6f1";
const INK = "#1a1a1a";

// ── Scroll-reveal hook ────────────────────────────────────────────────────────
function useInView(threshold = 0.12) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setInView(true);
          obs.disconnect();
        }
      },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return { ref, inView };
}

// ── Global styles ─────────────────────────────────────────────────────────────
const globalStyles = `
  @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;1,300;1,400;1,500&family=Jost:wght@300;400;500;600&display=swap');

  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

  .reveal {
    opacity: 0;
    transform: translateY(28px);
    transition: opacity 0.9s cubic-bezier(0.22, 1, 0.36, 1),
                transform 0.9s cubic-bezier(0.22, 1, 0.36, 1);
  }
  .reveal.in { opacity: 1; transform: translateY(0); }

  .reveal-left {
    opacity: 0;
    transform: translateX(-36px);
    transition: opacity 0.95s cubic-bezier(0.22, 1, 0.36, 1),
                transform 0.95s cubic-bezier(0.22, 1, 0.36, 1);
  }
  .reveal-left.in { opacity: 1; transform: translateX(0); }

  .reveal-right {
    opacity: 0;
    transform: translateX(36px);
    transition: opacity 0.95s cubic-bezier(0.22, 1, 0.36, 1),
                transform 0.95s cubic-bezier(0.22, 1, 0.36, 1);
  }
  .reveal-right.in { opacity: 1; transform: translateX(0); }

  .d1 { transition-delay: 0.08s; }
  .d2 { transition-delay: 0.18s; }
  .d3 { transition-delay: 0.28s; }
  .d4 { transition-delay: 0.38s; }
  .d5 { transition-delay: 0.50s; }
`;

// ── Hero ──────────────────────────────────────────────────────────────────────
function AboutHero() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 100);
    return () => clearTimeout(t);
  }, []);

  return (
    <>
      <style>{`
        ${globalStyles}

        .ah-root {
          background: ${INK};
          min-height: 68vh;
          display: flex;
          align-items: center;
          position: relative;
          overflow: hidden;
          padding: 160px 48px 120px;
          font-family: 'Cormorant Garamond', Georgia, serif;
        }

        .ah-root::before {
          content: '';
          position: absolute;
          inset: 0;
          background: radial-gradient(ellipse 80% 70% at 50% 60%, rgba(198,146,42,0.06) 0%, transparent 70%);
          pointer-events: none;
        }

        .ah-accent-line {
          position: absolute;
          left: 0; right: 0; bottom: 0;
          height: 1px;
          background: linear-gradient(90deg, transparent, ${GOLD}55, transparent);
        }

        .ah-inner {
          position: relative;
          z-index: 2;
          max-width: 1160px;
          margin: 0 auto;
          width: 100%;
          text-align: center;
        }

        .ah-eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 14px;
          margin-bottom: 40px;
        }
        .ah-hero-logo {
          display: block;
          width: 58px;
          height: 58px;
          object-fit: contain;
          margin: 0 auto 22px;
        }
        .ah-line { width: 40px; height: 1px; background: ${GOLD}; opacity: 0.7; }
        .ah-eyebrow-text {
          font-family: 'Jost', sans-serif;
          font-size: 10.5px;
          font-weight: 500;
          letter-spacing: 0.22em;
          text-transform: uppercase;
          color: ${GOLD};
          opacity: 0.9;
        }

        .ah-h1 {
          font-size: clamp(52px, 8vw, 104px);
          font-weight: 300;
          color: ${CREAM};
          line-height: 0.97;
          letter-spacing: -0.025em;
          margin-bottom: 36px;
        }
        .ah-h1 em {
          color: ${GOLD};
          font-style: italic;
          font-weight: 300;
        }

        .ah-p {
          font-size: clamp(16px, 1.6vw, 20px);
          line-height: 1.85;
          color: rgba(249,246,241,0.55);
          font-style: italic;
          font-weight: 300;
          max-width: 600px;
          margin: 0 auto;
        }

        @media (max-width: 860px) {
          .ah-root { padding: 140px 28px 100px; }
        }
      `}</style>

      <section className="ah-root">
        <div className="ah-accent-line" />
        <div className="ah-inner">
          <div className={`reveal${mounted ? " in" : ""}`}>
            <img
              src="/dominus-logo.png"
              alt="Dominus Investments logo"
              className="ah-hero-logo"
            />
            <div className="ah-eyebrow">
              <div className="ah-line" />
              <span className="ah-eyebrow-text">Who We Are</span>
              <div className="ah-line" />
            </div>
          </div>

          <div className={`reveal d1${mounted ? " in" : ""}`}>
            <h1 className="ah-h1">
              We Don't Consult.<br />We <em>Build.</em>
            </h1>
          </div>

          <div className={`reveal d2${mounted ? " in" : ""}`}>
            <p className="ah-p">
              Dominus Investments was founded on a simple observation: most South African
              businesses don't fail because of a bad product or a bad market. They fail
              because the systems beneath them were never built properly.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

// ── Mission Section ───────────────────────────────────────────────────────────
function MissionSection() {
  const { ref, inView } = useInView(0.1);

  return (
    <>
      <style>{`
        .ms-root {
          background: ${CREAM};
          padding: 120px 48px;
          font-family: 'Cormorant Garamond', Georgia, serif;
          position: relative;
          overflow: hidden;
        }

        .ms-inner {
          max-width: 1160px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 100px;
          align-items: center;
        }

        .ms-left-eyebrow {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 28px;
        }
        .ms-eyebrow-tick { width: 24px; height: 1px; background: ${GOLD}; opacity: 0.7; }
        .ms-eyebrow-text {
          font-family: 'Jost', sans-serif;
          font-size: 10px;
          font-weight: 500;
          letter-spacing: 0.22em;
          text-transform: uppercase;
          color: ${GOLD};
        }

        .ms-h2 {
          font-size: clamp(38px, 4.5vw, 62px);
          font-weight: 400;
          color: ${INK};
          line-height: 1.05;
          letter-spacing: -0.015em;
          margin-bottom: 24px;
        }
        .ms-h2 em { color: ${GOLD}; font-style: italic; }

        .ms-body {
          font-size: clamp(15px, 1.4vw, 18px);
          font-style: italic;
          font-weight: 300;
          color: rgba(26,26,26,0.55);
          line-height: 1.85;
          margin-bottom: 20px;
        }

        .ms-right { display: flex; flex-direction: column; gap: 32px; }

        .ms-quote-block {
          border-left: 2px solid ${GOLD};
          padding: 24px 28px;
          background: rgba(198,146,42,0.04);
        }
        .ms-quote-text {
          font-size: clamp(18px, 2vw, 26px);
          font-style: italic;
          font-weight: 300;
          color: ${INK};
          line-height: 1.55;
          letter-spacing: -0.01em;
        }
        .ms-quote-attr {
          font-family: 'Jost', sans-serif;
          font-size: 10px;
          font-weight: 500;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: ${GOLD};
          margin-top: 16px;
          opacity: 0.8;
        }

        .ms-stat-row {
          display: flex;
          gap: 40px;
          padding-top: 24px;
          border-top: 1px solid rgba(26,26,26,0.1);
        }
        .ms-stat { display: flex; flex-direction: column; gap: 6px; }
        .ms-stat-num {
          font-size: clamp(28px, 3vw, 42px);
          font-weight: 300;
          color: ${INK};
          line-height: 1;
          letter-spacing: -0.02em;
        }
        .ms-stat-num span { color: ${GOLD}; }
        .ms-stat-label {
          font-family: 'Jost', sans-serif;
          font-size: 10px;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: rgba(26,26,26,0.4);
        }

        @media (max-width: 900px) {
          .ms-root { padding: 80px 28px; }
          .ms-inner { grid-template-columns: 1fr; gap: 52px; }
        }
      `}</style>

      <section className="ms-root" ref={ref}>
        <div className="ms-inner">
          <div className={`reveal-left${inView ? " in" : ""}`}>
            <div className="ms-left-eyebrow">
              <div className="ms-eyebrow-tick" />
              <span className="ms-eyebrow-text">Our Mission</span>
            </div>
            <h2 className="ms-h2">
              Built for the<br />South African <em>Reality.</em>
            </h2>
            <p className="ms-body">
              We entered this space because we saw too many ambitious owners stuck in the same
              cycle — working harder, earning inconsistently, and slowly burning out while their
              business stayed the same size.
            </p>
            <p className="ms-body">
              South African entrepreneurs operate in one of the most demanding business environments
              in the world — load shedding, regulatory complexity, skills shortages, limited access
              to capital. Dominus was built specifically for this environment.
            </p>
            <p className="ms-body">
              We don't import foreign consulting frameworks. We work in the reality our clients
              face every day.
            </p>
          </div>

          <div className={`reveal-right d1${inView ? " in" : ""}`}>
            <div className="ms-right">
              <div className="ms-quote-block">
                <div className="ms-quote-text">
                  "Most consultants tell you what to fix. We stay until it's fixed."
                </div>
                <div className="ms-quote-attr">— The Dominus Approach</div>
              </div>

              <div className="ms-stat-row">
                <div className="ms-stat">
                  <div className="ms-stat-num">4<span>-Step</span></div>
                  <div className="ms-stat-label">Proven Model</div>
                </div>
                <div className="ms-stat">
                  <div className="ms-stat-num">SA<span>-Based</span></div>
                  <div className="ms-stat-label">Local Expertise</div>
                </div>
                <div className="ms-stat">
                  <div className="ms-stat-num">SME<span>-First</span></div>
                  <div className="ms-stat-label">Built For You</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

// ── Values Section ────────────────────────────────────────────────────────────
const values = [
  {
    icon: "◎",
    title: "Clarity Over Complexity",
    desc: "We strip away noise and show you exactly what your business needs. No jargon. No 60-page reports that gather dust.",
  },
  {
    icon: "⟳",
    title: "Systems Over Guesswork",
    desc: "Intuition gets you started. Systems get you to scale. Everything we build is structured, documented, and repeatable.",
  },
  {
    icon: "⚡",
    title: "Execution Over Theory",
    desc: "We stay through implementation. Advice without execution is just conversation — and conversation doesn't pay salaries.",
  },
  {
    icon: "↑",
    title: "Sustainable Growth",
    desc: "We build foundations that hold. Fast growth on a weak foundation breaks businesses. We do this right, the first time.",
  },
];

function ValuesSection() {
  const { ref, inView } = useInView(0.08);

  return (
    <>
      <style>{`
        .vs-root {
          background: ${INK};
          padding: 120px 48px;
          font-family: 'Cormorant Garamond', Georgia, serif;
          position: relative;
          overflow: hidden;
        }

        .vs-root::before {
          content: '';
          position: absolute;
          inset: 0;
          background: radial-gradient(ellipse 60% 60% at 50% 50%, rgba(198,146,42,0.05), transparent 70%);
          pointer-events: none;
        }

        .vs-top-rule {
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 1px;
          background: linear-gradient(90deg, transparent, ${GOLD}44, transparent);
        }

        .vs-inner {
          position: relative;
          z-index: 2;
          max-width: 1160px;
          margin: 0 auto;
        }

        .vs-header {
          text-align: center;
          margin-bottom: 80px;
        }

        .vs-eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 14px;
          margin-bottom: 28px;
        }
        .vs-line { width: 36px; height: 1px; background: ${GOLD}; opacity: 0.7; }
        .vs-eyebrow-text {
          font-family: 'Jost', sans-serif;
          font-size: 10px;
          font-weight: 500;
          letter-spacing: 0.22em;
          text-transform: uppercase;
          color: ${GOLD};
        }

        .vs-h2 {
          font-size: clamp(40px, 5.5vw, 72px);
          font-weight: 300;
          color: ${CREAM};
          line-height: 1.05;
          letter-spacing: -0.02em;
        }
        .vs-h2 em { color: ${GOLD}; font-style: italic; }

        .vs-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 2px;
          border: 1px solid rgba(198,146,42,0.15);
        }

        .vs-card {
          padding: 52px 48px;
          border: 1px solid rgba(198,146,42,0.12);
          position: relative;
          overflow: hidden;
          transition: background 0.4s ease;
          cursor: default;
        }
        .vs-card:hover { background: rgba(198,146,42,0.04); }

        .vs-card-icon {
          font-size: 24px;
          color: ${GOLD};
          opacity: 0.7;
          margin-bottom: 28px;
          display: block;
          font-style: normal;
          transition: opacity 0.3s;
        }
        .vs-card:hover .vs-card-icon { opacity: 1; }

        .vs-card-title {
          font-size: clamp(20px, 2vw, 28px);
          font-weight: 400;
          color: ${CREAM};
          margin-bottom: 16px;
          line-height: 1.2;
          letter-spacing: -0.01em;
        }

        .vs-card-desc {
          font-family: 'Jost', sans-serif;
          font-size: 14px;
          font-weight: 300;
          line-height: 1.9;
          color: rgba(249,246,241,0.45);
        }

        .vs-card-num {
          position: absolute;
          bottom: 24px;
          right: 28px;
          font-size: 80px;
          font-weight: 300;
          color: rgba(198,146,42,0.06);
          line-height: 1;
          pointer-events: none;
          transition: color 0.4s;
        }
        .vs-card:hover .vs-card-num { color: rgba(198,146,42,0.1); }

        @media (max-width: 860px) {
          .vs-root { padding: 80px 28px; }
          .vs-grid { grid-template-columns: 1fr; }
          .vs-card { padding: 40px 32px; }
        }
      `}</style>

      <section className="vs-root" ref={ref}>
        <div className="vs-top-rule" />
        <div className="vs-inner">
          <div className={`vs-header reveal${inView ? " in" : ""}`}>
            <div className="vs-eyebrow">
              <div className="vs-line" />
              <span className="vs-eyebrow-text">What Drives Us</span>
              <div className="vs-line" />
            </div>
            <h2 className="vs-h2">
              Our <em>Values.</em>
            </h2>
          </div>

          <div className="vs-grid">
            {values.map((v, i) => (
              <div
                key={v.title}
                className={`vs-card reveal${inView ? " in" : ""} d${i + 1}`}
              >
                <span className="vs-card-icon">{v.icon}</span>
                <div className="vs-card-title">{v.title}</div>
                <div className="vs-card-desc">{v.desc}</div>
                <div className="vs-card-num">0{i + 1}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

// ── SA Context Section ────────────────────────────────────────────────────────
function SAContextSection() {
  const { ref, inView } = useInView(0.1);

  return (
    <>
      <style>{`
        .sa-root {
          background: ${CREAM};
          padding: 120px 48px;
          font-family: 'Cormorant Garamond', Georgia, serif;
          position: relative;
        }

        .sa-inner {
          max-width: 1160px;
          margin: 0 auto;
        }

        .sa-header {
          margin-bottom: 64px;
        }
        .sa-eyebrow {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 24px;
        }
        .sa-eyebrow-tick { width: 24px; height: 1px; background: ${GOLD}; }
        .sa-eyebrow-text {
          font-family: 'Jost', sans-serif;
          font-size: 10px;
          font-weight: 500;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: ${GOLD};
        }

        .sa-h2 {
          font-size: clamp(38px, 4.5vw, 62px);
          font-weight: 400;
          color: ${INK};
          line-height: 1.05;
          letter-spacing: -0.015em;
          max-width: 600px;
        }
        .sa-h2 em { color: ${GOLD}; font-style: italic; }

        .sa-cols {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 60px;
        }

        .sa-col p {
          font-size: clamp(15px, 1.4vw, 18px);
          font-style: italic;
          font-weight: 300;
          color: rgba(26,26,26,0.55);
          line-height: 1.85;
          margin-bottom: 18px;
        }

        .sa-stat-strip {
          margin-top: 56px;
          padding-top: 40px;
          border-top: 1px solid rgba(26,26,26,0.1);
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 0;
        }

        .sa-stat-item {
          padding: 28px 0;
          border-right: 1px solid rgba(26,26,26,0.1);
          padding-right: 40px;
        }
        .sa-stat-item:last-child { border-right: none; padding-left: 40px; padding-right: 0; }
        .sa-stat-item:nth-child(2) { padding-left: 40px; padding-right: 40px; }

        .sa-stat-val {
          font-size: clamp(28px, 3vw, 44px);
          font-weight: 300;
          color: ${INK};
          letter-spacing: -0.02em;
          line-height: 1;
          margin-bottom: 8px;
        }
        .sa-stat-val span { color: ${GOLD}; }
        .sa-stat-desc {
          font-family: 'Jost', sans-serif;
          font-size: 12px;
          font-weight: 300;
          line-height: 1.6;
          color: rgba(26,26,26,0.45);
          letter-spacing: 0.01em;
        }

        @media (max-width: 900px) {
          .sa-root { padding: 80px 28px; }
          .sa-cols { grid-template-columns: 1fr; gap: 32px; }
          .sa-stat-strip { grid-template-columns: 1fr; }
          .sa-stat-item { border-right: none; border-bottom: 1px solid rgba(26,26,26,0.1); padding-left: 0 !important; }
          .sa-stat-item:last-child { border-bottom: none; }
        }
      `}</style>

      <section className="sa-root" ref={ref}>
        <div className="sa-inner">
          <div className={`sa-header reveal${inView ? " in" : ""}`}>
            <div className="sa-eyebrow">
              <div className="sa-eyebrow-tick" />
              <span className="sa-eyebrow-text">Our Context</span>
            </div>
            <h2 className="sa-h2">
              Built for the South<br />African <em>Market.</em>
            </h2>
          </div>

          <div className="sa-cols">
            <div className={`sa-col reveal-left${inView ? " in" : ""}`}>
              <p>
                South African entrepreneurs operate in one of the most demanding business
                environments in the world — load shedding, regulatory complexity, skills
                shortages, limited access to capital.
              </p>
              <p>
                Only 12% of small businesses in South Africa access formal funding. Cash flow
                crises are the norm, not the exception. The informal economy absorbs talent
                that formal businesses can't retain.
              </p>
            </div>
            <div className={`sa-col reveal-right d1${inView ? " in" : ""}`}>
              <p>
                Dominus was built specifically for this environment. We don't import foreign
                consulting frameworks that assume stable electricity, deep capital markets, or
                predictable regulatory environments.
              </p>
              <p>
                We work in the reality our clients face every day — and our systems are
                designed to be resilient precisely because of that reality, not in spite of it.
              </p>
            </div>
          </div>

          <div className={`sa-stat-strip reveal d2${inView ? " in" : ""}`}>
            <div className="sa-stat-item">
              <div className="sa-stat-val">12<span>%</span></div>
              <div className="sa-stat-desc">of SA small businesses access formal funding</div>
            </div>
            <div className="sa-stat-item">
              <div className="sa-stat-val">70<span>%+</span></div>
              <div className="sa-stat-desc">of SA SMEs fail within the first 5 years</div>
            </div>
            <div className="sa-stat-item">
              <div className="sa-stat-val">KZN<span>-Based</span></div>
              <div className="sa-stat-desc">Durban-headquartered, operating nationally</div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

// ── CTA Section ───────────────────────────────────────────────────────────────
function AboutCTA() {
  const { ref, inView } = useInView(0.15);

  return (
    <>
      <style>{`
        .acta-root {
          background: ${INK};
          position: relative;
          overflow: hidden;
          padding: 130px 48px;
          font-family: 'Cormorant Garamond', Georgia, serif;
          text-align: center;
        }

        .acta-root::before {
          content: '';
          position: absolute;
          inset: 0;
          background: radial-gradient(ellipse 70% 80% at 50% 50%, rgba(198,146,42,0.08) 0%, transparent 70%);
          pointer-events: none;
        }

        .acta-top-rule {
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 1px;
          background: linear-gradient(90deg, transparent, ${GOLD}66, transparent);
        }

        .acta-inner {
          position: relative;
          z-index: 2;
          max-width: 640px;
          margin: 0 auto;
        }

        .acta-eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 14px;
          margin-bottom: 36px;
        }
        .acta-line { width: 36px; height: 1px; background: ${GOLD}; opacity: 0.7; }
        .acta-eyebrow-text {
          font-family: 'Jost', sans-serif;
          font-size: 10px;
          font-weight: 500;
          letter-spacing: 0.22em;
          text-transform: uppercase;
          color: ${GOLD};
        }

        .acta-h2 {
          font-size: clamp(40px, 6vw, 68px);
          font-weight: 300;
          color: ${CREAM};
          line-height: 1.05;
          letter-spacing: -0.02em;
          margin-bottom: 28px;
        }
        .acta-h2 em { color: ${GOLD}; font-style: italic; }

        .acta-p {
          font-size: clamp(15px, 1.4vw, 18px);
          font-weight: 300;
          font-style: italic;
          line-height: 1.85;
          color: rgba(249,246,241,0.52);
          margin-bottom: 52px;
        }

        .acta-actions {
          display: flex;
          gap: 16px;
          justify-content: center;
          flex-wrap: wrap;
        }

        .acta-btn-primary {
          font-family: 'Jost', sans-serif;
          font-size: 10.5px;
          font-weight: 600;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          background: ${GOLD};
          color: #fff;
          border: 1px solid ${GOLD};
          padding: 17px 44px;
          text-decoration: none;
          display: inline-block;
          border-radius: 3px;
          transition: background 0.25s ease, transform 0.2s ease, box-shadow 0.25s ease;
        }
        .acta-btn-primary:hover {
          background: #b0811f;
          transform: translateY(-2px);
          box-shadow: 0 10px 32px rgba(198,146,42,0.3);
        }

        .acta-btn-ghost {
          font-family: 'Jost', sans-serif;
          font-size: 10.5px;
          font-weight: 500;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          background: transparent;
          color: rgba(249,246,241,0.7);
          border: 1px solid rgba(249,246,241,0.2);
          padding: 17px 44px;
          text-decoration: none;
          display: inline-block;
          border-radius: 3px;
          transition: border-color 0.25s ease, color 0.25s ease, transform 0.2s ease;
        }
        .acta-btn-ghost:hover {
          border-color: rgba(249,246,241,0.55);
          color: ${CREAM};
          transform: translateY(-2px);
        }

        @media (max-width: 600px) {
          .acta-root { padding: 100px 28px; }
        }
      `}</style>

      <section className="acta-root" ref={ref}>
        <div className="acta-top-rule" />
        <div className="acta-inner">
          <div className={`reveal${inView ? " in" : ""}`}>
            <div className="acta-eyebrow">
              <div className="acta-line" />
              <span className="acta-eyebrow-text">Work With Us</span>
              <div className="acta-line" />
            </div>
          </div>

          <div className={`reveal d1${inView ? " in" : ""}`}>
            <h2 className="acta-h2">
              Ready to <em>Build?</em>
            </h2>
          </div>

          <div className={`reveal d2${inView ? " in" : ""}`}>
            <p className="acta-p">
              We work with a select number of businesses at a time. If you're serious about
              fixing your operations and scaling sustainably, we want to hear from you.
            </p>
          </div>

          <div className={`reveal d3${inView ? " in" : ""}`}>
            <div className="acta-actions">
              <a href="/work-with-us" className="acta-btn-primary">
                Submit Your Business
              </a>
              <a href="/themethod" className="acta-btn-ghost">
                The Dominus Method
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

// ── Footer ─────────────────────────────────────────────────────────────────────
function Footer() {
  const year = new Date().getFullYear();

  return (
    <>
      <style>{`
        .ft-root {
          background: #0f0f0f;
          font-family: 'Jost', sans-serif;
          padding: 64px 48px 36px;
          border-top: 1px solid rgba(198,146,42,0.18);
        }
        .ft-inner {
          max-width: 1160px;
          margin: 0 auto 52px;
          display: grid;
          grid-template-columns: 2.2fr 1fr 1fr;
          gap: 56px;
        }
        .ft-brand-name {
          font-family: 'Cormorant Garamond', serif;
          font-size: 18px;
          font-weight: 500;
          letter-spacing: 0.08em;
          color: ${CREAM};
          margin-bottom: 4px;
          text-transform: uppercase;
        }
        .ft-brand-name span { color: ${GOLD}; }
        .ft-tagline {
          font-size: 12px;
          font-style: italic;
          color: rgba(249,246,241,0.3);
          margin-bottom: 22px;
          font-family: 'Cormorant Garamond', serif;
        }
        .ft-desc {
          font-size: 13px;
          line-height: 1.8;
          color: rgba(249,246,241,0.35);
          max-width: 280px;
          font-style: italic;
          font-family: 'Cormorant Garamond', serif;
        }
        .ft-col-title {
          font-size: 9.5px;
          font-weight: 600;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: ${GOLD};
          margin-bottom: 22px;
        }
        .ft-links { list-style: none; padding: 0; }
        .ft-links li { margin-bottom: 11px; }
        .ft-links a {
          font-size: 13px;
          color: rgba(249,246,241,0.38);
          text-decoration: none;
          transition: color 0.25s;
        }
        .ft-links a:hover { color: ${GOLD}; }
        .ft-bottom {
          max-width: 1160px;
          margin: 0 auto;
          padding-top: 28px;
          border-top: 1px solid rgba(255,255,255,0.05);
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          gap: 12px;
        }
        .ft-copy { font-size: 11px; color: rgba(249,246,241,0.22); }
        .ft-copy span { color: ${GOLD}; opacity: 0.8; }
        .ft-legal { display: flex; gap: 24px; }
        .ft-legal a {
          font-size: 11px;
          color: rgba(249,246,241,0.22);
          text-decoration: none;
          transition: color 0.25s;
        }
        .ft-legal a:hover { color: rgba(249,246,241,0.5); }
        @media (max-width: 860px) {
          .ft-root { padding: 56px 28px 32px; }
          .ft-inner { grid-template-columns: 1fr 1fr; }
        }
        @media (max-width: 520px) {
          .ft-inner { grid-template-columns: 1fr; }
          .ft-bottom { flex-direction: column; align-items: flex-start; }
        }
      `}</style>

      <footer className="ft-root">
        <div className="ft-inner">
          <div>
            <div className="ft-brand-name">
              Dominus<span> Investments</span>
            </div>
            <div className="ft-tagline">We build businesses that last.</div>
            <p className="ft-desc">
              Helping South African SMEs diagnose, stabilise, and scale through proven
              operational systems. Based in Durban, KwaZulu-Natal.
            </p>
          </div>

          <div>
            <div className="ft-col-title">Navigate</div>
            <ul className="ft-links">
              {[
                { label: "Home", href: "/" },
                { label: "About", href: "/about" },
                { label: "Services", href: "/services" },
                { label: "The Method", href: "/themethod" },
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
            <div className="ft-col-title">Contact</div>
            <ul className="ft-links">
              <li>
                <a href="mailto:info@dominusinvestments.co.za">
                  info@dominusinvestments.co.za
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/27000000000"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  WhatsApp Us
                </a>
              </li>
              <li>
                <a href="/work-with-us#form">Submit Your Business</a>
              </li>
              <li
                style={{
                  marginTop: 18,
                  fontStyle: "italic",
                  fontSize: 12,
                  color: "rgba(249,246,241,0.2)",
                  fontFamily: "'Cormorant Garamond', serif",
                }}
              >
                Durban, KwaZulu-Natal
                <br />
                South Africa
              </li>
            </ul>
          </div>
        </div>

        <div className="ft-bottom">
          <div className="ft-copy">
            © {year} <span>Dominus Investments</span>. All rights reserved.
          </div>
          <div className="ft-legal">
            <a href="/privacy">Privacy Policy</a>
            <a href="/terms">Terms of Use</a>
          </div>
        </div>
      </footer>
    </>
  );
}

// ── Page ───────────────────────────────────────────────────────────────────────
export default function About() {
  return (
    <div style={{ minHeight: "100vh", background: INK }}>
      <Navigation />
      <AboutHero />
      <MissionSection />
      <ValuesSection />
      <SAContextSection />
      <AboutCTA />
      <Footer />
    </div>
  );
}
