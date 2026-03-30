import { useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import degreeImg from "./degree.jpg";
import downloadImg from "./download (6).jpg";

const AMBER_GOLD = "#C6922A";

export default function HeroSection() {
  const heroRef = useRef<HTMLDivElement>(null);

  // Scroll-based parallax for the images
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const image1Y = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);
  const image2Y = useTransform(scrollYProgress, [0, 1], ["0%", "-15%"]);

  // Stagger-in animation for the left-side text elements
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
          transition: background 0.2s, transform 0.15s;
          font-family: 'Georgia', 'Times New Roman', serif;
          display: inline-block;
        }
        .hero-btn-primary:hover {
          background: #b0811f;
          Color: white;
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

        /* ── Right side image stack ── */
        .hero-right {
          position: relative;
          display: flex;
          flex-direction: column;
          gap: 20px;
          align-self: stretch;
        }
        .hero-img-primary {
          width: 100%;
          height: 42vh;
          overflow: hidden;
          border-radius: 4px;
        }
        .hero-img-secondary {
          width: 100%;
          height: 34vh;
          overflow: hidden;
          border-radius: 4px;
        }
        .hero-img-primary img,
        .hero-img-secondary img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
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
          {/* ── Left — Copy ─────────────────────────────── */}
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
                WHAT WE DO
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

          {/* ── Right — Image Stack ──────────────────────── */}
          <div className="hero-right" data-animate>
            {/* Primary image — add your image src here */}
            <motion.div
              className="hero-img-primary"
              style={{ y: image1Y }}
              initial={{ opacity: 0, scale: 1.08 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
            >
              <img
                src={degreeImg}
                alt="Business strategy session"
              />
            </motion.div>

            {/* Secondary image — add your image src here */}
            <motion.div
              className="hero-img-secondary"
              style={{ y: image2Y }}
              initial={{ opacity: 0, scale: 1.08 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
            >
              <img
                src={downloadImg}
                alt="Business growth consultation"
              />
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}