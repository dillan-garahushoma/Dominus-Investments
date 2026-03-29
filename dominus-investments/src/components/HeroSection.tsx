import { useEffect, useRef } from "react";

const AMBER_GOLD = "#C6922A";

export default function HeroSection() {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const elements = heroRef.current?.querySelectorAll("[data-animate]");
    if (!elements) return;

    elements.forEach((el, i) => {
      const elem = el as HTMLElement;
      elem.style.opacity = "0";
      elem.style.transform = "translateY(18px)";
      setTimeout(() => {
        elem.style.transition = "opacity 0.7s ease, transform 0.7s ease";
        elem.style.opacity = "1";
        elem.style.transform = "translateY(0)";
      }, 120 + i * 110);
    });
  }, []);

  return (
    <>
      <style>{`
        .hero-root {
          min-height: 100vh;
          background: #f9f6f1;
          display: flex;
          align-items: center;
          padding-top: 64px;
          font-family: 'Georgia', 'Times New Roman', serif;
          position: relative;
          overflow: hidden;
        }
        .hero-bg-line {
          position: absolute;
          top: 0; bottom: 0;
          width: 0.5px;
          background: #e8e0d4;
        }
        .hero-bg-circle {
          position: absolute;
          border-radius: 50%;
          border: 0.5px solid #e8e0d4;
          pointer-events: none;
        }
        .hero-inner {
          max-width: 1200px;
          margin: 0 auto;
          padding: 80px 32px 80px;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 80px;
          align-items: center;
          width: 100%;
        }
        .hero-eyebrow {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 24px;
        }
        .hero-eyebrow-line {
          width: 32px;
          height: 1px;
          background: ${AMBER_GOLD};
        }
        .hero-eyebrow-text {
          font-size: 11px;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: ${AMBER_GOLD};
          font-family: 'Georgia', 'Times New Roman', serif;
        }
        .hero-h1 {
          font-size: clamp(36px, 5vw, 56px);
          font-weight: 400;
          color: #1a1a1a;
          line-height: 1.15;
          margin: 0 0 8px;
          letter-spacing: -0.01em;
          font-family: 'Georgia', 'Times New Roman', serif;
        }
        .hero-h1-accent {
          color: ${AMBER_GOLD};
          font-style: italic;
        }
        .hero-divider {
          width: 48px;
          height: 2px;
          background: ${AMBER_GOLD};
          border-radius: 2px;
          margin: 24px 0;
        }
        .hero-sub {
          font-size: 16px;
          color: #666;
          line-height: 1.75;
          margin-bottom: 36px;
          max-width: 420px;
          font-family: 'Georgia', 'Times New Roman', serif;
          font-style: italic;
        }
        .hero-actions {
          display: flex;
          gap: 14px;
          flex-wrap: wrap;
        }
        .hero-btn-primary {
          background: ${AMBER_GOLD};
          color: white;
          border: none;
          padding: 14px 28px;
          border-radius: 4px;
          font-size: 12px;
          font-weight: 600;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          cursor: pointer;
          text-decoration: none;
          transition: background 0.2s, transform 0.15s;
          font-family: 'Georgia', 'Times New Roman', serif;
          display: inline-block;
        }
        .hero-btn-primary:hover {
          background: #b0811f;
          transform: translateY(-1px);
        }
        .hero-btn-ghost {
          background: transparent;
          color: ${AMBER_GOLD};
          border: 1px solid ${AMBER_GOLD};
          padding: 14px 28px;
          border-radius: 4px;
          font-size: 12px;
          font-weight: 600;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          cursor: pointer;
          text-decoration: none;
          transition: background 0.2s, color 0.2s;
          font-family: 'Georgia', 'Times New Roman', serif;
          display: inline-block;
        }
        .hero-btn-ghost:hover {
          background: ${AMBER_GOLD};
          color: white;
        }
        .hero-trust {
          display: flex;
          align-items: center;
          gap: 20px;
          margin-top: 40px;
          padding-top: 32px;
          border-top: 0.5px solid #e8e0d4;
        }
        .hero-trust-item {
          display: flex;
          flex-direction: column;
          gap: 2px;
        }
        .hero-trust-num {
          font-size: 20px;
          font-weight: 700;
          color: #1a1a1a;
          font-family: 'Georgia', 'Times New Roman', serif;
        }
        .hero-trust-num span { color: ${AMBER_GOLD}; }
        .hero-trust-label {
          font-size: 11px;
          color: #999;
          letter-spacing: 0.04em;
          text-transform: uppercase;
        }
        .hero-trust-sep {
          width: 0.5px;
          height: 36px;
          background: #e8e0d4;
        }
        .hero-right {
          position: relative;
        }
        .hero-card {
          background: white;
          border: 0.5px solid #e8e0d4;
          border-radius: 8px;
          padding: 28px;
          margin-bottom: 16px;
          position: relative;
        }
        .hero-card-accent {
          position: absolute;
          top: 0; left: 28px; right: 28px;
          height: 2px;
          background: ${AMBER_GOLD};
          border-radius: 0 0 2px 2px;
        }
        .hero-card-step {
          font-size: 10px;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: ${AMBER_GOLD};
          margin-bottom: 8px;
          font-family: 'Georgia', 'Times New Roman', serif;
        }
        .hero-card-title {
          font-size: 15px;
          font-weight: 700;
          color: #1a1a1a;
          margin-bottom: 6px;
          font-family: 'Georgia', 'Times New Roman', serif;
        }
        .hero-card-body {
          font-size: 13px;
          color: #888;
          line-height: 1.6;
          font-style: italic;
          font-family: 'Georgia', 'Times New Roman', serif;
        }
        .hero-cards-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 14px;
        }
        .hero-card-sm {
          background: white;
          border: 0.5px solid #e8e0d4;
          border-radius: 8px;
          padding: 18px 20px;
          position: relative;
          overflow: hidden;
        }
        .hero-card-sm::before {
          content: '';
          position: absolute;
          left: 0; top: 0; bottom: 0;
          width: 2px;
          background: ${AMBER_GOLD};
        }
        .hero-card-sm-step {
          font-size: 10px;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: ${AMBER_GOLD};
          margin-bottom: 6px;
          font-family: 'Georgia', 'Times New Roman', serif;
        }
        .hero-card-sm-title {
          font-size: 13px;
          font-weight: 700;
          color: #1a1a1a;
          margin-bottom: 3px;
          font-family: 'Georgia', 'Times New Roman', serif;
        }
        .hero-card-sm-body {
          font-size: 11px;
          color: #aaa;
          font-style: italic;
          font-family: 'Georgia', 'Times New Roman', serif;
        }
        .hero-quote {
          background: #1a1a1a;
          border-radius: 6px;
          padding: 16px 20px;
          margin-top: 14px;
          display: flex;
          align-items: center;
          gap: 14px;
        }
        .hero-quote-bar {
          width: 2px;
          height: 36px;
          background: ${AMBER_GOLD};
          border-radius: 2px;
          flex-shrink: 0;
        }
        .hero-quote-text {
          font-size: 13px;
          color: rgba(255,255,255,0.85);
          font-style: italic;
          line-height: 1.5;
          font-family: 'Georgia', 'Times New Roman', serif;
        }
        @media (max-width: 900px) {
          .hero-inner {
            grid-template-columns: 1fr;
            gap: 48px;
            padding: 60px 24px;
          }
          .hero-right { display: none; }
        }
        @media (max-width: 480px) {
          .hero-trust { flex-wrap: wrap; gap: 16px; }
        }
      `}</style>

      <section className="hero-root" ref={heroRef}>
        {/* Subtle background lines */}
        <div className="hero-bg-line" style={{ left: "20%" }} />
        <div className="hero-bg-line" style={{ right: "20%" }} />
        <div
          className="hero-bg-circle"
          style={{ width: 600, height: 600, right: -200, top: -200 }}
        />
        <div
          className="hero-bg-circle"
          style={{ width: 300, height: 300, left: -100, bottom: -100 }}
        />

        <div className="hero-inner">
          {/* Left — Copy */}
          <div>
            <div className="hero-eyebrow" data-animate>
              <div className="hero-eyebrow-line" />
              <span className="hero-eyebrow-text">
                Business growth · South Africa
              </span>
            </div>

            <h1 className="hero-h1" data-animate>
              We build businesses
              <br />
              that <span className="hero-h1-accent">last.</span>
            </h1>

            <div className="hero-divider" data-animate />

            <p className="hero-sub" data-animate>
              We find what's broken in your business, fix it with systems, and
              help you scale — without losing control of what you've built.
            </p>

            <div className="hero-actions" data-animate>
              <a href="/work-with-us" className="hero-btn-primary">
                About Us
              </a>
              <a href="/work-with-us#form" className="hero-btn-ghost">
                Submit Your Business
              </a>
            </div>

            <div className="hero-trust" data-animate>
              <div className="hero-trust-item">
                <div className="hero-trust-num">
                  4<span>-Step</span>
                </div>
                <div className="hero-trust-label">Proven model</div>
              </div>
              <div className="hero-trust-sep" />
              <div className="hero-trust-item">
                <div className="hero-trust-num">
                  SA<span>-Based</span>
                </div>
                <div className="hero-trust-label">Local expertise</div>
              </div>
              <div className="hero-trust-sep" />
              <div className="hero-trust-item">
                <div className="hero-trust-num">
                  SME<span>-First</span>
                </div>
                <div className="hero-trust-label">Built for you</div>
              </div>
            </div>
          </div>

          {/* Right — Visual cards */}
          <div className="hero-right" data-animate>
            <div className="hero-card">
              <div className="hero-card-accent" />
              <div className="hero-card-step">Step 01</div>
              <div className="hero-card-title">Business Assessment</div>
              <div className="hero-card-body">
                We get inside your business and find what's broken — including
                the things you can't see yourself.
              </div>
            </div>

            <div className="hero-cards-grid">
              <div className="hero-card-sm">
                <div className="hero-card-sm-step">Step 02</div>
                <div className="hero-card-sm-title">Stabilisation</div>
                <div className="hero-card-sm-body">Stop the bleeding first</div>
              </div>
              <div className="hero-card-sm">
                <div className="hero-card-sm-step">Step 03</div>
                <div className="hero-card-sm-title">Systems</div>
                <div className="hero-card-sm-body">Build real structure</div>
              </div>
              <div className="hero-card-sm" style={{ gridColumn: "1 / -1" }}>
                <div className="hero-card-sm-step">Step 04</div>
                <div className="hero-card-sm-title">Growth & Scaling</div>
                <div className="hero-card-sm-body">
                  Scale only once the foundation is solid
                </div>
              </div>
            </div>

            <div className="hero-quote">
              <div className="hero-quote-bar" />
              <div className="hero-quote-text">
                "Most consultants tell you what to fix. We stay until it's
                fixed."
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
