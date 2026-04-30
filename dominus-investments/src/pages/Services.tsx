import Footer from "../components/Footer";
import SoftAurora from "../components/SoftAurora";
import { useInView } from "../hooks/useInView";

const GOLD = "#C6922A";
const CREAM = "#f9f6f1";
const INK = "#1a1a1a";

const services = [
  {
    title: "Start Your Business",
    intro: "We transform side hustles into registered, structured businesses ready to grow.",
    features: ["Company Registration", "Compliance Setup", "Business Structuring", "Launch Packages"],
    actions: ["Get Started", "Request Pricing"],
  },
  {
    title: "Stabilise Your Business",
    intro: "Already operating but struggling? We diagnose and fix operational leaks.",
    features: ["Business Audits", "Pricing Strategy", "Sales Systems", "Cash Flow Planning"],
    actions: ["Book Assessment"],
  },
  {
    title: "Grow Your Business",
    intro: "We help you scale with structure, systems, and strategy.",
    features: ["Growth Planning", "KPI Tracking", "Operations Optimisation", "Market Expansion"],
    actions: ["Grow My Business"],
  },
  {
    title: "Digital & Marketing",
    intro: "Your online presence should work like a salesperson.",
    features: ["Website Design", "Branding", "Google Business Setup", "Digital Strategy"],
    actions: ["Build My Presence"],
  },
];

function Hero() {
  return (
    <>
      <style>{`
        .svc-hero {
          min-height: 76vh;
          padding: 168px 48px 116px;
          background:
            radial-gradient(ellipse 70% 72% at 52% 58%, rgba(198,146,42,0.12), transparent 68%),
            linear-gradient(135deg, #111 0%, ${INK} 56%, #0d0d0d 100%);
          color: ${CREAM};
          font-family: 'Cormorant Garamond', Georgia, serif;
          position: relative;
          overflow: hidden;
        }
        .svc-hero::before {
          content: '';
          position: absolute;
          inset: 0;
          background-image:
            linear-gradient(rgba(198,146,42,0.055) 1px, transparent 1px),
            linear-gradient(90deg, rgba(198,146,42,0.055) 1px, transparent 1px);
          background-size: 88px 88px;
          mask-image: radial-gradient(circle at center, black, transparent 72%);
          pointer-events: none;
        }
        .svc-hero::after {
          content: '';
          position: absolute;
          left: 0;
          right: 0;
          bottom: 0;
          height: 1px;
          background: linear-gradient(90deg, transparent, rgba(198,146,42,0.7), transparent);
        }
        .svc-hero-inner {
          position: relative;
          z-index: 2;
          max-width: 1160px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 1.05fr 0.95fr;
          gap: 72px;
          align-items: end;
        }
        .svc-eyebrow {
          display: flex;
          align-items: center;
          gap: 14px;
          margin-bottom: 32px;
        }
        .svc-eyebrow-line {
          width: 42px;
          height: 1px;
          background: ${GOLD};
        }
        .svc-eyebrow-text {
          font-family: 'Jost', sans-serif;
          font-size: 10.5px;
          font-weight: 600;
          letter-spacing: 0.22em;
          text-transform: uppercase;
          color: ${GOLD};
        }
        .svc-hero-title {
          font-size: clamp(58px, 8vw, 112px);
          font-weight: 300;
          line-height: 0.96;
          letter-spacing: -0.035em;
          margin: 0;
        }
        .svc-hero-title em {
          color: ${GOLD};
          font-style: italic;
          font-weight: 300;
        }
        .svc-hero-copy {
          border-left: 1px solid rgba(198,146,42,0.45);
          padding-left: 34px;
        }
        .svc-lead {
          font-size: clamp(24px, 3vw, 40px);
          line-height: 1.2;
          color: ${CREAM};
          margin: 0 0 22px;
          font-weight: 400;
        }
        .svc-body {
          font-size: clamp(17px, 1.55vw, 21px);
          line-height: 1.82;
          font-style: italic;
          color: rgba(249,246,241,0.62);
          margin: 0 0 18px;
        }
        .svc-build-line {
          color: ${GOLD};
          font-size: clamp(21px, 2.2vw, 30px);
          font-style: italic;
          margin-top: 30px;
        }
        @media (max-width: 900px) {
          .svc-hero { padding: 142px 28px 88px; }
          .svc-hero-inner { grid-template-columns: 1fr; gap: 42px; }
          .svc-hero-copy { padding-left: 22px; }
        }
      `}</style>

      <section className="svc-hero">
        <div className="svc-hero-inner">
          <div className="transition-slide-up visible">
            <div className="svc-eyebrow">
              <div className="svc-eyebrow-line" />
              <span className="svc-eyebrow-text">Services</span>
            </div>
            <h1 className="svc-hero-title">
              Build.<br />Stabilise.<br /><em>Scale.</em>
            </h1>
          </div>

          <div className="svc-hero-copy transition-slide-up visible">
            <p className="svc-lead">Your business is not just a hustle. It is an asset.</p>
            <p className="svc-body">
              Dominus Investments partners with South African SMEs to turn ideas into structured, profitable businesses.
            </p>
            <p className="svc-build-line">We do not just consult. We build with you.</p>
          </div>
        </div>
      </section>
    </>
  );
}

function ServicesList() {
  const { ref, inView } = useInView(0.08);

  return (
    <>
      <style>{`
        .svc-list-root {
          background: ${CREAM};
          padding: 116px 48px;
          font-family: 'Cormorant Garamond', Georgia, serif;
        }
        .svc-list-inner {
          max-width: 1160px;
          margin: 0 auto;
        }
        .svc-list-header {
          display: grid;
          grid-template-columns: 0.8fr 1.2fr;
          gap: 64px;
          align-items: end;
          margin-bottom: 68px;
        }
        .svc-section-label {
          font-family: 'Jost', sans-serif;
          font-size: 10.5px;
          font-weight: 700;
          letter-spacing: 0.24em;
          text-transform: uppercase;
          color: ${GOLD};
          margin-bottom: 22px;
        }
        .svc-list-title {
          font-size: clamp(42px, 5vw, 72px);
          line-height: 1.05;
          letter-spacing: -0.025em;
          font-weight: 300;
          color: ${INK};
          margin: 0;
        }
        .svc-list-title em {
          color: ${GOLD};
          font-style: italic;
        }
        .svc-list-copy {
          font-size: clamp(17px, 1.5vw, 20px);
          line-height: 1.85;
          color: rgba(26,26,26,0.58);
          font-style: italic;
          margin: 0;
        }
        .svc-card-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          border: 1px solid rgba(26,26,26,0.1);
        }
        .svc-card {
          min-height: 420px;
          padding: 46px;
          background: rgba(255,255,255,0.24);
          border-right: 1px solid rgba(26,26,26,0.1);
          border-bottom: 1px solid rgba(26,26,26,0.1);
          position: relative;
          overflow: hidden;
          opacity: 0;
          transform: translateY(24px);
          transition: opacity 0.75s ease, transform 0.75s ease, background 0.3s ease;
        }
        .svc-card.visible {
          opacity: 1;
          transform: translateY(0);
        }
        .svc-card:nth-child(2n) { border-right: none; }
        .svc-card:nth-last-child(-n+2) { border-bottom: none; }
        .svc-card::after {
          content: '';
          position: absolute;
          inset: auto 0 0 0;
          height: 3px;
          background: ${GOLD};
          transform: scaleX(0);
          transform-origin: left;
          transition: transform 0.35s ease;
        }
        .svc-card:hover {
          background: rgba(198,146,42,0.045);
        }
        .svc-card:hover::after {
          transform: scaleX(1);
        }
        .svc-card-number {
          font-size: 64px;
          line-height: 0.9;
          color: rgba(198,146,42,0.24);
          font-weight: 300;
          margin-bottom: 50px;
        }
        .svc-card-title {
          font-size: clamp(29px, 3vw, 42px);
          line-height: 1.05;
          font-weight: 400;
          letter-spacing: -0.015em;
          color: ${INK};
          margin: 0 0 18px;
        }
        .svc-card-intro {
          font-size: 17px;
          line-height: 1.75;
          color: rgba(26,26,26,0.58);
          font-style: italic;
          margin: 0 0 30px;
        }
        .svc-feature-list {
          list-style: none;
          padding: 0;
          margin: 0 0 34px;
          display: grid;
          gap: 12px;
        }
        .svc-feature-list li {
          display: flex;
          align-items: center;
          gap: 11px;
          font-family: 'Jost', sans-serif;
          font-size: 12px;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: rgba(26,26,26,0.58);
        }
        .svc-feature-list li::before {
          content: '';
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: ${GOLD};
          flex: 0 0 auto;
        }
        .svc-card-actions {
          display: flex;
          gap: 12px;
          flex-wrap: wrap;
        }
        .svc-action {
          font-family: 'Jost', sans-serif;
          font-size: 10.5px;
          font-weight: 700;
          letter-spacing: 0.16em;
          text-transform: uppercase;
          text-decoration: none;
          color: ${INK};
          border: 1px solid rgba(26,26,26,0.2);
          padding: 13px 18px;
          border-radius: 3px;
          transition: background 0.22s ease, color 0.22s ease, border-color 0.22s ease, transform 0.22s ease;
        }
        .svc-action:first-child {
          color: white;
          background: ${GOLD};
          border-color: ${GOLD};
        }
        .svc-action:hover {
          transform: translateY(-2px);
          border-color: ${GOLD};
        }
        .svc-action:first-child:hover {
          background: #b0811f;
          border-color: #b0811f;
        }
        @media (max-width: 900px) {
          .svc-list-root { padding: 86px 28px; }
          .svc-list-header { grid-template-columns: 1fr; gap: 26px; margin-bottom: 52px; }
          .svc-card-grid { grid-template-columns: 1fr; }
          .svc-card {
            min-height: auto;
            padding: 38px 30px;
            border-right: none;
            border-bottom: 1px solid rgba(26,26,26,0.1) !important;
          }
          .svc-card:last-child { border-bottom: none !important; }
          .svc-card-number { margin-bottom: 34px; }
        }
      `}</style>

      <section className="svc-list-root" ref={ref}>
        <div className="svc-list-inner">
          <div className="svc-list-header">
            <div className={`transition-slide-up${inView ? " visible" : ""}`}>
              <div className="svc-section-label">Our Services</div>
              <h2 className="svc-list-title">Choose the stage your business needs <em>now.</em></h2>
            </div>
            <p className={`svc-list-copy transition-slide-up${inView ? " visible" : ""}`}>
              Whether you are starting, stabilising, growing, or building a stronger digital presence, Dominus creates the structure around your ambition so the business can become profitable and scalable.
            </p>
          </div>

          <div className="svc-card-grid">
            {services.map((service, index) => (
              <article
                className={`svc-card${inView ? " visible" : ""}`}
                style={{ transitionDelay: inView ? `${index * 0.12}s` : "0s" }}
                key={service.title}
              >
                <div className="svc-card-number">0{index + 1}</div>
                <h3 className="svc-card-title">{service.title}</h3>
                <p className="svc-card-intro">{service.intro}</p>
                <ul className="svc-feature-list">
                  {service.features.map((feature) => <li key={feature}>{feature}</li>)}
                </ul>
                <div className="svc-card-actions">
                  {service.actions.map((action) => (
                    <a href="/work-with-us" className="svc-action" key={action}>{action}</a>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

function PartnerSection() {
  const { ref, inView } = useInView(0.15);

  return (
    <>
      <style>{`
        .partner-root {
          background:
            radial-gradient(ellipse 70% 80% at 50% 50%, rgba(198,146,42,0.12), transparent 70%),
            linear-gradient(135deg, #0d0d0d 0%, ${INK} 52%, #111 100%);
          color: ${CREAM};
          padding: 122px 48px;
          font-family: 'Cormorant Garamond', Georgia, serif;
          position: relative;
          overflow: hidden;
        }
        .partner-root::before {
          content: '';
          position: absolute;
          inset: 0;
          background:
            linear-gradient(180deg, rgba(13,13,13,0.34), rgba(13,13,13,0.8)),
            radial-gradient(ellipse at center, transparent 0%, rgba(13,13,13,0.28) 42%, rgba(13,13,13,0.88) 100%);
          pointer-events: none;
          z-index: 1;
        }
        .partner-aurora {
          position: absolute;
          inset: -18%;
          z-index: 0;
          opacity: 0.82;
          filter: saturate(1.08);
        }
        .partner-inner {
          position: relative;
          z-index: 2;
          max-width: 760px;
          margin: 0 auto;
          text-align: center;
        }
        .partner-label {
          display: inline-flex;
          align-items: center;
          gap: 14px;
          margin-bottom: 34px;
        }
        .partner-label::before,
        .partner-label::after {
          content: '';
          width: 38px;
          height: 1px;
          background: ${GOLD};
        }
        .partner-label span {
          font-family: 'Jost', sans-serif;
          font-size: 10.5px;
          font-weight: 700;
          letter-spacing: 0.22em;
          text-transform: uppercase;
          color: ${GOLD};
        }
        .partner-title {
          font-size: clamp(44px, 6vw, 78px);
          line-height: 1.02;
          letter-spacing: -0.03em;
          font-weight: 300;
          margin: 0 0 28px;
        }
        .partner-title em {
          color: ${GOLD};
          font-style: italic;
        }
        .partner-copy {
          font-size: clamp(18px, 1.6vw, 21px);
          line-height: 1.85;
          color: rgba(249,246,241,0.62);
          font-style: italic;
          margin: 0 auto 42px;
          max-width: 560px;
        }
        .partner-btn {
          display: inline-block;
          font-family: 'Jost', sans-serif;
          font-size: 10.5px;
          font-weight: 700;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          text-decoration: none;
          color: white;
          background: ${GOLD};
          border: 1px solid ${GOLD};
          border-radius: 3px;
          padding: 17px 42px;
          transition: background 0.22s ease, transform 0.22s ease, box-shadow 0.22s ease;
        }
        .partner-btn:hover {
          background: #b0811f;
          transform: translateY(-2px);
          box-shadow: 0 14px 38px rgba(198,146,42,0.28);
        }
        .partner-footnote {
          margin-top: 54px;
          font-family: 'Jost', sans-serif;
          font-size: 11px;
          letter-spacing: 0.16em;
          text-transform: uppercase;
          color: rgba(249,246,241,0.35);
        }
        @media (max-width: 700px) {
          .partner-root { padding: 92px 28px; }
          .partner-label::before,
          .partner-label::after { width: 24px; }
        }
      `}</style>

      <section className="partner-root" ref={ref}>
        <SoftAurora
          className="partner-aurora"
          speed={0.48}
          scale={1.35}
          brightness={0.72}
          color1="#C6922A"
          color2="#F9F6F1"
          noiseFrequency={2.2}
          noiseAmplitude={0.9}
          bandHeight={0.42}
          bandSpread={0.88}
          octaveDecay={0.18}
          layerOffset={0.56}
          colorSpeed={0.65}
          enableMouseInteraction
          mouseInfluence={0.16}
        />
        <div className="partner-inner">
          <div className={`transition-slide-up${inView ? " visible" : ""}`}>
            <div className="partner-label"><span>Partner With Dominus</span></div>
            <h2 className="partner-title">We walk the journey <em>with you.</em></h2>
            <p className="partner-copy">
              We do not just advise. Monthly partnership options are available for businesses serious about growth.
            </p>
            <a href="/work-with-us" className="partner-btn">Become a Partner</a>
            <div className="partner-footnote">
              Dominus Investments | Empowering South African SMEs | dominusinvestments.co.za
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default function Services() {
  return (
    <div style={{ minHeight: "100vh", background: INK }}>
      <Hero />
      <ServicesList />
      <PartnerSection />
      <Footer />
    </div>
  );
}
