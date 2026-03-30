import { useRef, useEffect, useState } from "react";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

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
      ([e]) => { if (e.isIntersecting) { setInView(true); obs.disconnect(); } },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return { ref, inView };
}

// ── Stage data ─────────────────────────────────────────────────────────────────
const stages = [
  {
    number: "01",
    title: "Business Assessment",
    imageSrc: new URL("./(1) Instagram.jpg", import.meta.url).href,
    shortDescription: "Before anything changes, everything must be understood.",
    detailedDescription:
      "We conduct a deep diagnostic of your business — financial performance, operational workflows, team structure, and market positioning. Nothing is assumed. We interrogate the numbers, the processes, and the people to map exactly where your business stands and what's holding it back.",
    keyOutcomes:
      "A clear picture of your business's strengths, weaknesses, and the critical leverage points that will drive the most impactful change.",
  },
  {
    number: "02",
    title: "Stabilisation",
    imageSrc: new URL("./Restoration Success Stories_ Real Credit Turnarounds.jpg", import.meta.url).href,
    shortDescription: "Stop the bleeding before you build.",
    detailedDescription:
      "Most struggling businesses have urgent problems that compound daily. We identify and fix the critical issues first — cash flow leaks, accountability gaps, operational chaos — establishing the stable foundation your business needs before any growth strategy can take hold.",
    keyOutcomes:
      "A stabilised, functional operation with immediate problem areas resolved, cash flow under control, and a team that understands their roles and responsibilities.",
  },
  {
    number: "03",
    title: "Systems Implementation",
    imageSrc: new URL("./Descubre protección de datos y privacidad.jpg", import.meta.url).href,
    shortDescription: "Build the engine that runs without you.",
    detailedDescription:
      "This is where transformation happens. We design and deploy scalable internal systems — SOPs, accountability frameworks, reporting structures, and performance metrics — that create consistency and predictability. Your business stops depending on individual effort and starts operating as a system.",
    keyOutcomes:
      "Documented processes, clear accountability structures, and operational systems that allow your business to function at a higher level consistently — with or without your constant oversight.",
  },
  {
    number: "04",
    title: "Growth & Scaling",
    imageSrc: new URL("./Revealed_ Number of new homes GC needs in just 20 years.jpg", import.meta.url).href,
    shortDescription: "Accelerate with confidence, not chaos.",
    detailedDescription:
      "Only once the foundation is solid do we press on the accelerator. We identify the highest-leverage growth opportunities — new revenue streams, market expansion, team scaling — and execute against them with the systems already in place to support it.",
    keyOutcomes:
      "Sustainable, measurable revenue growth driven by proven systems, a capable team, and a clear strategic direction that compounds over time.",
  },
];

// ── Global styles (injected once) ─────────────────────────────────────────────
const globalStyles = `
  @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;1,300;1,400;1,500&family=Jost:wght@300;400;500;600&display=swap');

  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

  /* ── Shared reveal utility ── */
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

  /* ── Stagger delays ── */
  .d1 { transition-delay: 0.08s; }
  .d2 { transition-delay: 0.18s; }
  .d3 { transition-delay: 0.28s; }
  .d4 { transition-delay: 0.38s; }
  .d5 { transition-delay: 0.50s; }
`;

// ── Hero ──────────────────────────────────────────────────────────────────────
function MethodHero() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 100);
    return () => clearTimeout(t);
  }, []);

  return (
    <>
      <style>{`
        ${globalStyles}

        .mh-root {
          background: ${INK};
          min-height: 68vh;
          display: flex;
          align-items: center;
          position: relative;
          overflow: hidden;
          padding: 160px 48px 120px;
          font-family: 'Cormorant Garamond', Georgia, serif;
        }

        /* Subtle warm vignette — no grid */
        .mh-root::before {
          content: '';
          position: absolute;
          inset: 0;
          background: radial-gradient(ellipse 80% 70% at 50% 60%, rgba(198,146,42,0.06) 0%, transparent 70%);
          pointer-events: none;
        }

        /* Thin gold line — decorative, not a grid */
        .mh-accent-line {
          position: absolute;
          left: 0; right: 0;
          bottom: 0;
          height: 1px;
          background: linear-gradient(90deg, transparent, ${GOLD}55, transparent);
        }

        .mh-inner {
          position: relative;
          z-index: 2;
          max-width: 1160px;
          margin: 0 auto;
          width: 100%;
          text-align: center;
        }

        .mh-eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 14px;
          margin-bottom: 40px;
        }
        .mh-line { width: 40px; height: 1px; background: ${GOLD}; opacity: 0.7; }
        .mh-eyebrow-text {
          font-family: 'Georgia', 'Times New Roman', serif;
          font-size: 10.5px;
          font-weight: 700;
          letter-spacing: 0.22em;
          text-transform: uppercase;
          color: ${GOLD};
          opacity: 0.9;
        }

        .mh-h1 {
          font-family: 'Georgia', 'Times New Roman', serif;
          font-size: clamp(46px, 8.5vw, 85px);
          font-weight: 700;
          color: ${CREAM};
          line-height: 0.95;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          margin-bottom: 36px;
        }
        .mh-h1 em {
          color: ${GOLD};
          font-style: normal;
          font-weight: 600;
          text-transform: none;
          letter-spacing: -0.02em;
        }

        .mh-p {
          font-size: clamp(16px, 1.6vw, 20px);
          line-height: 1.85;
          color: rgba(249,246,241,0.55);
          font-style: italic;
          font-weight: 300;
          max-width: 580px;
          margin: 0 auto 56px;
        }

        .mh-pips {
          display: inline-flex;
          gap: 0;
          border: 1px solid rgba(249,246,241,0.1);
          border-radius: 2px;
          overflow: hidden;
        }
        .mh-pip {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 12px 28px;
          border-right: 1px solid rgba(249,246,241,0.1);
          font-family: 'Jost', sans-serif;
          font-size: 10px;
          font-weight: 400;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: rgba(249,246,241,0.3);
          transition: color 0.35s ease, background 0.35s ease;
          cursor: default;
        }
        .mh-pip:last-child { border-right: none; }
        .mh-pip:hover { color: ${GOLD}; background: rgba(198,146,42,0.06); }
        .mh-pip-num {
          font-size: 9px;
          color: ${GOLD};
          opacity: 0.55;
          transition: opacity 0.35s;
        }
        .mh-pip:hover .mh-pip-num { opacity: 1; }

        @media (max-width: 860px) {
          .mh-root { padding: 140px 28px 100px; }
          .mh-pips { flex-wrap: wrap; border: none; }
          .mh-pip { border: 1px solid rgba(249,246,241,0.1); border-radius: 2px; }
        }
      `}</style>

      <section className="mh-root">
        <div className="mh-accent-line" />
        <div className="mh-inner">

          <div className={`reveal${mounted ? " in" : ""}`}>
            <div className="mh-eyebrow">
              <div className="mh-line" />
              <span className="mh-eyebrow-text">A Four-Stage Framework</span>
              <div className="mh-line" />
            </div>
          </div>

          <div className={`reveal d1${mounted ? " in" : ""}`}>
            <h1 className="mh-h1">
              The Dominus<br /><em>Method.</em>
            </h1>
          </div>

          <div className={`reveal d2${mounted ? " in" : ""}`}>
            <p className="mh-p">
              A systematic framework that transforms struggling businesses into
              profitable, scalable operations. Each stage builds upon the last,
              creating sustainable growth through proven process.
            </p>
          </div>

          <div className={`reveal d3${mounted ? " in" : ""}`}>
            <div className="mh-pips">
              {stages.map((s) => (
                <div key={s.number} className="mh-pip">
                  <span className="mh-pip-num">{s.number}</span>
                  {s.title}
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>
    </>
  );
}

// ── Stage Card (all light background, alternating layout) ─────────────────────
function StageCard({ stage, index }: { stage: typeof stages[0]; index: number }) {
  const { ref, inView } = useInView(0.08);
  const isEven = index % 2 === 0;

  return (
    <>
      <style>{`
        .sc-wrap {
          background: ${CREAM};
          padding: 110px 48px;
          font-family: 'Cormorant Garamond', Georgia, serif;
          position: relative;
          overflow: hidden;
        }

        /* Soft divider between cards */
        .sc-wrap + .sc-wrap::before {
          content: '';
          position: absolute;
          top: 0; left: 48px; right: 48px;
          height: 1px;
          background: linear-gradient(90deg, transparent, rgba(26,26,26,0.1), transparent);
        }

        .sc-grid {
          max-width: 1160px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 100px;
          align-items: center;
        }

        /* Subtle background number for atmosphere */
        .sc-bg-num {
          position: absolute;
          font-family: 'Cormorant Garamond', serif;
          font-size: clamp(200px, 26vw, 360px);
          font-weight: 300;
          color: rgba(198,146,42,0.045);
          line-height: 1;
          letter-spacing: -0.05em;
          pointer-events: none;
          top: 50%; right: -2%;
          transform: translateY(-50%);
          user-select: none;
        }

        /* ── Content side ── */
        .sc-content { position: relative; z-index: 2; }

        .sc-stage-label {
          display: inline-flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 28px;
        }
        .sc-stage-num {
          font-family: 'Jost', sans-serif;
          font-size: 15px;
          font-weight: 500;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: ${GOLD};
        }
        .sc-stage-tick {
          width: 24px;
          height: 1px;
          background: ${GOLD};
          opacity: 0.5;
        }
        .sc-stage-word {
          font-family: 'Jost', sans-serif;
          font-size: 10px;
          letter-spacing: 0.16em;
          text-transform: uppercase;
          color: rgba(26,26,26,0.35);
        }

        .sc-title {
          font-size: clamp(36px, 4.2vw, 58px);
          font-weight: 400;
          color: ${INK};
          line-height: 1.05;
          letter-spacing: -0.015em;
          margin-bottom: 22px;
        }

        .sc-short {
          font-size: clamp(17px, 1.5vw, 20px);
          font-style: italic;
          font-weight: 300;
          color: rgba(26,26,26,0.55);
          line-height: 1.65;
          margin-bottom: 24px;
        }

        .sc-detail {
          font-family: 'Jost', sans-serif;
          font-size: 18.5px;
          font-weight: 300;
          line-height: 1.9;
          color: rgba(26,26,26,0.5);
          margin-bottom: 36px;
        }

        .sc-outcomes {
          border-left: 2px solid ${GOLD};
          padding-left: 22px;
        }
        .sc-outcomes-label {
          font-family: 'Jost', sans-serif;
          font-size: 9.5px;
          font-weight: 600;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: ${GOLD};
          margin-bottom: 10px;
        }
        .sc-outcomes-text {
          font-family: 'Cormorant Garamond', serif;
          font-size: 15.5px;
          font-style: italic;
          font-weight: 300;
          line-height: 1.75;
          color: rgba(26,26,26,0.5);
        }

        /* ── Visual panel ── */
        .sc-visual {
          position: relative;
          z-index: 2;
        }

        .sc-visual-box {
          aspect-ratio: 4 / 3.2;
          background: #ede8df;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
          position: relative;
          transition: box-shadow 0.5s ease;
        }
        .sc-visual-box:hover {
          box-shadow: 0 24px 64px rgba(198,146,42,0.12);
        }

        /* Inner glow on hover */
        .sc-visual-box::after {
          content: '';
          position: absolute;
          inset: 0;
          background: radial-gradient(ellipse 60% 60% at 50% 50%, rgba(198,146,42,0.08), transparent);
          opacity: 0;
          transition: opacity 0.5s ease;
        }
        .sc-visual-box:hover::after { opacity: 1; }

        .sc-visual-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }
        .sc-visual-num { display: none; }

        .sc-visual-label {
          position: absolute;
          bottom: 24px;
          left: 24px;
          right: 24px;
          display: flex;
          align-items: center;
          gap: 12px;
        }
        .sc-vl-line { flex: 1; height: 0.5px; background: ${GOLD}; opacity: 0.3; }
        .sc-vl-text {
          font-family: 'Jost', sans-serif;
          font-size: 9px;
          font-weight: 500;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: ${GOLD};
          opacity: 0.6;
          white-space: nowrap;
        }

        @media (max-width: 900px) {
          .sc-wrap { padding: 80px 28px; }
          .sc-grid { grid-template-columns: 1fr; gap: 52px; }
          .sc-visual { order: -1; }
          .sc-bg-num { display: none; }
        }
      `}</style>

      <section className="sc-wrap" ref={ref}>
        <div className="sc-bg-num">{stage.number}</div>
        <div className="sc-grid" style={{ direction: isEven ? "ltr" : "rtl" }}>

          {/* Content */}
          <div
            className={`sc-content ${isEven ? "reveal-left" : "reveal-right"}${inView ? " in" : ""}`}
            style={{ direction: "ltr" }}
          >
            <div className="sc-stage-label">
              <span className="sc-stage-num">{stage.number}</span>
              <div className="sc-stage-tick" />
              <span className="sc-stage-word">Stage</span>
            </div>

            <h2 className="sc-title">{stage.title}</h2>
            <p className="sc-short">{stage.shortDescription}</p>
            <p className="sc-detail">{stage.detailedDescription}</p>

            <div className="sc-outcomes">
              <div className="sc-outcomes-label">Key Outcomes</div>
              <p className="sc-outcomes-text">{stage.keyOutcomes}</p>
            </div>
          </div>

          {/* Visual */}
          <div
            className={`sc-visual ${isEven ? "reveal-right" : "reveal-left"}${inView ? " in" : ""} d2`}
            style={{ direction: "ltr" }}
          >
            <div className="sc-visual-box">
              <img className="sc-visual-img" src={stage.imageSrc} alt={`${stage.title} visual`} />
              <div className="sc-visual-label">
                <div className="sc-vl-line" />
                <span className="sc-vl-text">{stage.title}</span>
                <div className="sc-vl-line" />
              </div>
            </div>
          </div>

        </div>
      </section>
    </>
  );
}


// ── Page ───────────────────────────────────────────────────────────────────────
export default function TheMethodPage() {
  return (
    <div style={{ minHeight: "100vh", background: CREAM }}>
      <Navigation />
      <MethodHero />
      {stages.map((stage, index) => (
        <StageCard key={stage.number} stage={stage} index={index} />
      ))}
      <Footer />
    </div>
  );
}