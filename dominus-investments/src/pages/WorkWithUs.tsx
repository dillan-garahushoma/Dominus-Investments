import { useState, type FormEvent } from "react";
import Footer from "../components/Footer";
import { useInView } from "../hooks/useInView";

const GOLD = "#C6922A";
const CREAM = "#f9f6f1";
const INK = "#1a1a1a";
const WHATSAPP_NUMBER = "27699294459";

const industries = [
  "Logistics & Transport",
  "Construction & Trades",
  "Retail & E-commerce",
  "Professional Services",
  "Hospitality & Food",
  "Health & Wellness",
  "Manufacturing",
  "Technology",
  "Other",
];

const revenueRanges = [
  "Pre-revenue",
  "Under R50,000",
  "R50,000 - R100,000",
  "R100,000 - R250,000",
  "R250,000 - R500,000",
  "R500,000 - R1,000,000",
  "R1,000,000+",
];

const fitPoints = [
  "You have traction, but the business depends too heavily on you.",
  "Revenue is moving, but profit, pricing, or cash flow feels unclear.",
  "Your team needs stronger systems, accountability, and operating rhythm.",
  "You want growth that is structured rather than reactive.",
];

const trustSignals = [
  {
    title: "Reviewed",
    text: "Every submission is read personally, not filtered by a bot.",
  },
  {
    title: "Confidential",
    text: "Your business information is never shared or sold.",
  },
  {
    title: "48hr reply",
    text: "You'll hear back within two business days.",
  },
];

const nextSteps = [
  {
    title: "We review your submission",
    text: "Our team reads every application personally within 48 hours.",
  },
  {
    title: "We reach out if there's a fit",
    text: "If your business matches what we work with, we'll contact you to schedule a call.",
  },
  {
    title: "We start with an assessment",
    text: "No obligation at this stage, just a clear picture of where your business stands.",
  },
];

function WorkHero() {
  return (
    <>
      <style>{`
        .wwu-hero {
          min-height: 82vh;
          padding: 160px 48px 104px;
          background:
            radial-gradient(ellipse 80% 70% at 70% 34%, rgba(198,146,42,0.14), transparent 62%),
            radial-gradient(ellipse 52% 52% at 12% 82%, rgba(249,246,241,0.045), transparent 64%),
            linear-gradient(135deg, #0f0f0f 0%, ${INK} 54%, #0b0b0b 100%);
          color: ${CREAM};
          font-family: 'Cormorant Garamond', Georgia, serif;
          position: relative;
          overflow: hidden;
        }
        .wwu-hero::before {
          content: '';
          position: absolute;
          inset: 0;
          background-image:
            linear-gradient(rgba(198,146,42,0.05) 1px, transparent 1px),
            linear-gradient(90deg, rgba(198,146,42,0.05) 1px, transparent 1px);
          background-size: 96px 96px;
          mask-image: radial-gradient(circle at 54% 42%, black, transparent 72%);
          pointer-events: none;
        }
        .wwu-hero::after {
          content: '';
          position: absolute;
          left: 0;
          right: 0;
          bottom: 0;
          height: 1px;
          background: linear-gradient(90deg, transparent, rgba(198,146,42,0.7), transparent);
        }
        .wwu-hero-inner {
          position: relative;
          z-index: 2;
          max-width: 1160px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: minmax(0, 1.08fr) minmax(330px, 0.72fr);
          gap: 76px;
          align-items: center;
        }
        .wwu-hero-content {
          text-align: center;
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        .wwu-eyebrow {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 14px;
          margin-bottom: 30px;
        }
        .wwu-hero-logo {
          display: block;
          width: 58px;
          height: 58px;
          object-fit: contain;
          margin: 0 auto 22px;
        }
        .wwu-eyebrow::before {
          content: '';
          width: 42px;
          flex: 0 0 42px;
          height: 1px;
          background: ${GOLD};
          opacity: 0.78;
        }
        .wwu-eyebrow::after {
          content: '';
          width: 42px;
          flex: 0 0 42px;
          height: 1px;
          background: ${GOLD};
          opacity: 0.78;
        }
        .wwu-eyebrow span {
          font-family: 'Jost', sans-serif;
          font-size: 10.5px;
          font-weight: 700;
          letter-spacing: 0.22em;
          text-transform: uppercase;
          color: ${GOLD};
        }
        .wwu-hero-title {
          font-size: clamp(54px, 7.4vw, 104px);
          font-weight: 300;
          line-height: 0.98;
          letter-spacing: -0.036em;
          margin: 0 auto 30px;
          max-width: 780px;
        }
        .wwu-hero-title em {
          color: ${GOLD};
          font-style: italic;
          font-weight: 300;
        }
        .wwu-hero-lead {
          font-size: clamp(18px, 1.7vw, 22px);
          line-height: 1.78;
          color: rgba(249,246,241,0.66);
          font-style: italic;
          margin: 0 auto;
          max-width: 610px;
        }
        .wwu-hero-actions {
          display: flex;
          justify-content: center;
          gap: 14px;
          flex-wrap: wrap;
          margin-top: 42px;
        }
        .wwu-btn-primary,
        .wwu-btn-ghost {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          min-height: 52px;
          border-radius: 3px;
          padding: 15px 30px;
          font-family: 'Jost', sans-serif;
          font-size: 10.5px;
          font-weight: 700;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          text-decoration: none;
          transition: transform 0.22s ease, background 0.22s ease, border-color 0.22s ease, color 0.22s ease, box-shadow 0.22s ease;
        }
        .wwu-btn-primary {
          color: white;
          background: ${GOLD};
          border: 1px solid ${GOLD};
        }
        .wwu-btn-primary:hover {
          background: #b0811f;
          border-color: #b0811f;
          transform: translateY(-2px);
          box-shadow: 0 14px 38px rgba(198,146,42,0.24);
        }
        .wwu-btn-ghost {
          background: rgba(249,246,241,0.04);
          border: 1px solid rgba(249,246,241,0.22);
          color: rgba(249,246,241,0.78);
        }
        .wwu-btn-ghost:hover {
          border-color: rgba(249,246,241,0.54);
          color: ${CREAM};
          transform: translateY(-2px);
        }
        .wwu-hero-panel {
          border: 1px solid rgba(198,146,42,0.26);
          background: linear-gradient(145deg, rgba(249,246,241,0.08), rgba(249,246,241,0.025));
          box-shadow: 0 28px 80px rgba(0,0,0,0.22);
          padding: 34px;
          backdrop-filter: blur(8px);
        }
        .wwu-panel-label {
          font-family: 'Jost', sans-serif;
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: ${GOLD};
          margin-bottom: 26px;
        }
        .wwu-panel-list {
          list-style: none;
          padding: 0;
          margin: 0;
          display: grid;
          gap: 22px;
        }
        .wwu-panel-list li {
          border-top: 1px solid rgba(249,246,241,0.1);
          padding-top: 20px;
        }
        .wwu-panel-list li:first-child {
          border-top: none;
          padding-top: 0;
        }
        .wwu-panel-list strong {
          display: block;
          color: ${CREAM};
          font-size: 24px;
          font-weight: 400;
          line-height: 1.15;
          margin-bottom: 8px;
        }
        .wwu-panel-list span {
          display: block;
          font-family: 'Jost', sans-serif;
          font-size: 13px;
          line-height: 1.75;
          color: rgba(249,246,241,0.52);
        }
        @media (max-width: 900px) {
          .wwu-hero { padding: 138px 28px 88px; }
          .wwu-hero-inner { grid-template-columns: 1fr; gap: 46px; }
          .wwu-hero-title { font-size: 64px; }
          .wwu-hero-lead { font-size: 18px; }
          .wwu-hero-panel { max-width: 560px; justify-self: center; }
        }
        @media (max-width: 560px) {
          .wwu-hero { min-height: auto; padding: 122px 20px 74px; }
          .wwu-hero-logo { width: 50px; height: 50px; margin-bottom: 18px; }
          .wwu-eyebrow { gap: 11px; margin-bottom: 26px; }
          .wwu-eyebrow::before,
          .wwu-eyebrow::after { width: 24px; flex-basis: 24px; }
          .wwu-eyebrow span { font-size: 9.5px; letter-spacing: 0.18em; }
          .wwu-hero-title { font-size: 46px; line-height: 1; letter-spacing: -0.02em; margin-bottom: 24px; }
          .wwu-hero-lead { font-size: 16px; line-height: 1.72; }
          .wwu-hero-actions { flex-direction: column; }
          .wwu-btn-primary,
          .wwu-btn-ghost { width: 100%; }
          .wwu-hero-panel { width: 100%; padding: 28px 24px; }
          .wwu-panel-list strong { font-size: 22px; }
        }
      `}</style>

      <section className="wwu-hero">
        <div className="wwu-hero-inner">
          <div className="wwu-hero-content transition-slide-up visible">
            <img
              src="/dominus-logo.png"
              alt="Dominus Investments logo"
              className="wwu-hero-logo"
            />
            <div className="wwu-eyebrow"><span>Work with Dominus</span></div>
            <h1 className="wwu-hero-title">
              Is your business ready for what comes <em>next?</em>
            </h1>
            <p className="wwu-hero-lead">
              We only work with a small number of businesses at a time. Tell us about yours, and we'll tell you if we can help build the structure behind your next stage.
            </p>
            <div className="wwu-hero-actions">
              <a href="#form" className="wwu-btn-primary">Submit Application</a>
              <a href={`https://wa.me/${WHATSAPP_NUMBER}`} target="_blank" rel="noopener noreferrer" className="wwu-btn-ghost">Talk First</a>
            </div>
          </div>

          <aside className="wwu-hero-panel transition-slide-up visible" aria-label="How Dominus works">
            <div className="wwu-panel-label">How we decide fit</div>
            <ul className="wwu-panel-list">
              <li>
                <strong>Selective by design</strong>
                <span>We take on fewer businesses so implementation gets proper attention.</span>
              </li>
              <li>
                <strong>Diagnostic first</strong>
                <span>We begin by understanding the numbers, operations, people, and constraints.</span>
              </li>
              <li>
                <strong>Built with you</strong>
                <span>Our work is practical, hands-on, and focused on systems your team can actually use.</span>
              </li>
            </ul>
          </aside>
        </div>
      </section>
    </>
  );
}

function FitSection() {
  const { ref, inView } = useInView(0.12);

  return (
    <>
      <style>{`
        .wwu-fit-root {
          background: #fffaf2;
          padding: 100px 48px 0;
          font-family: 'Cormorant Garamond', Georgia, serif;
        }
        .wwu-fit-inner {
          max-width: 1160px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 0.9fr 1.1fr;
          gap: 70px;
          align-items: start;
          border-bottom: 1px solid rgba(26,26,26,0.1);
          padding-bottom: 92px;
        }
        .wwu-fit-label {
          font-family: 'Jost', sans-serif;
          font-size: 10.5px;
          font-weight: 700;
          letter-spacing: 0.22em;
          text-transform: uppercase;
          color: ${GOLD};
          margin-bottom: 24px;
        }
        .wwu-fit-title {
          font-size: clamp(40px, 4.8vw, 68px);
          font-weight: 300;
          line-height: 1.04;
          letter-spacing: -0.028em;
          color: ${INK};
          margin: 0;
        }
        .wwu-fit-title em { color: ${GOLD}; font-style: italic; }
        .wwu-fit-list {
          list-style: none;
          padding: 0;
          margin: 0;
          display: grid;
          gap: 0;
          border-top: 1px solid rgba(26,26,26,0.1);
        }
        .wwu-fit-list li {
          display: grid;
          grid-template-columns: 46px 1fr;
          gap: 18px;
          padding: 24px 0;
          border-bottom: 1px solid rgba(26,26,26,0.1);
          font-size: clamp(19px, 2vw, 27px);
          line-height: 1.28;
          color: rgba(26,26,26,0.78);
          opacity: 0;
          transform: translateY(18px);
          transition: opacity 0.65s ease, transform 0.65s ease;
        }
        .wwu-fit-list li.visible { opacity: 1; transform: translateY(0); }
        .wwu-fit-list li::before {
          content: '';
          width: 10px;
          height: 10px;
          border-radius: 50%;
          background: ${GOLD};
          margin-top: 11px;
          justify-self: center;
        }
        @media (max-width: 900px) {
          .wwu-fit-root { padding: 78px 28px 0; }
          .wwu-fit-inner { grid-template-columns: 1fr; gap: 42px; padding-bottom: 74px; }
        }
        @media (max-width: 560px) {
          .wwu-fit-root { padding: 72px 20px 0; }
          .wwu-fit-inner { gap: 32px; padding-bottom: 64px; }
          .wwu-fit-label { font-size: 9.5px; letter-spacing: 0.18em; margin-bottom: 18px; }
          .wwu-fit-title { font-size: 38px; line-height: 1.08; letter-spacing: -0.02em; }
          .wwu-fit-list li {
            grid-template-columns: 28px 1fr;
            gap: 12px;
            padding: 20px 0;
            font-size: 18px;
            line-height: 1.38;
          }
          .wwu-fit-list li::before { justify-self: start; margin-top: 8px; }
        }
      `}</style>

      <section className="wwu-fit-root" ref={ref}>
        <div className="wwu-fit-inner">
          <div className={`transition-slide-up${inView ? " visible" : ""}`}>
            <div className="wwu-fit-label">Best-fit businesses</div>
            <h2 className="wwu-fit-title">We are useful when ambition needs <em>structure.</em></h2>
          </div>

          <ul className="wwu-fit-list">
            {fitPoints.map((point, index) => (
              <li
                className={inView ? "visible" : ""}
                style={{ transitionDelay: inView ? `${index * 0.1}s` : "0s" }}
                key={point}
              >
                {point}
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}

function LeadCaptureForm() {
  const { ref, inView } = useInView(0.08);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);
    const encodedData = new URLSearchParams();

    formData.append("form-name", "work-with-us");
    formData.forEach((value, key) => {
      encodedData.append(key, value.toString());
    });

    setSubmitStatus("submitting");

    try {
      const response = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encodedData.toString(),
      });

      if (!response.ok) {
        throw new Error("Form submission failed");
      }

      form.reset();
      setSubmitStatus("success");
    } catch {
      setSubmitStatus("error");
    }
  }

  return (
    <>
      <style>{`
        .wwu-form-root {
          background: ${CREAM};
          padding: 116px 48px;
          font-family: 'Cormorant Garamond', Georgia, serif;
        }
        .wwu-form-inner {
          max-width: 1160px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 0.78fr 1.22fr;
          gap: 72px;
          align-items: start;
        }
        .wwu-form-side {
          position: sticky;
          top: 96px;
        }
        .wwu-form-kicker {
          font-family: 'Jost', sans-serif;
          font-size: 10.5px;
          font-weight: 700;
          letter-spacing: 0.22em;
          text-transform: uppercase;
          color: ${GOLD};
          margin-bottom: 24px;
        }
        .wwu-form-title {
          font-size: clamp(42px, 5vw, 72px);
          line-height: 1.04;
          letter-spacing: -0.03em;
          font-weight: 300;
          color: ${INK};
          margin: 0 0 24px;
        }
        .wwu-form-title em {
          color: ${GOLD};
          font-style: italic;
        }
        .wwu-form-intro {
          font-size: clamp(17px, 1.55vw, 20px);
          line-height: 1.85;
          color: rgba(26,26,26,0.58);
          font-style: italic;
          margin: 0 0 34px;
        }
        .wwu-review-note {
          border-left: 2px solid ${GOLD};
          padding: 18px 0 18px 22px;
          font-family: 'Jost', sans-serif;
          font-size: 13px;
          line-height: 1.8;
          color: rgba(26,26,26,0.58);
        }
        .wwu-form-card {
          background: #fffaf2;
          border: 1px solid rgba(198,146,42,0.22);
          box-shadow: 0 26px 80px rgba(26,26,26,0.08);
          padding: 44px;
          opacity: 0;
          transform: translateY(24px);
          transition: opacity 0.75s ease, transform 0.75s ease;
        }
        .wwu-form-card.visible {
          opacity: 1;
          transform: translateY(0);
        }
        .wwu-form-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 24px;
        }
        .wwu-field {
          display: flex;
          flex-direction: column;
          gap: 9px;
        }
        .wwu-field-full {
          grid-column: 1 / -1;
        }
        .wwu-label {
          font-family: 'Jost', sans-serif;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: rgba(26,26,26,0.62);
        }
        .wwu-input,
        .wwu-select,
        .wwu-textarea {
          width: 100%;
          border: 1px solid rgba(26,26,26,0.12);
          background: rgba(255,255,255,0.72);
          color: ${INK};
          border-radius: 3px;
          padding: 15px 16px;
          font-family: 'Jost', sans-serif;
          font-size: 14px;
          outline: none;
          transition: border-color 0.2s ease, box-shadow 0.2s ease, background 0.2s ease;
        }
        .wwu-textarea {
          min-height: 142px;
          resize: vertical;
          line-height: 1.65;
        }
        .wwu-input:focus,
        .wwu-select:focus,
        .wwu-textarea:focus {
          border-color: ${GOLD};
          background: white;
          box-shadow: 0 0 0 4px rgba(198,146,42,0.09);
        }
        .wwu-help-text {
          font-size: 13px;
          line-height: 1.6;
          color: rgba(26,26,26,0.48);
          font-style: italic;
          margin-top: -2px;
        }
        .wwu-submit-row {
          grid-column: 1 / -1;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 22px;
          border-top: 1px solid rgba(26,26,26,0.08);
          padding-top: 28px;
          margin-top: 6px;
        }
        .wwu-submit {
          border: 1px solid ${GOLD};
          background: ${GOLD};
          color: white;
          border-radius: 3px;
          padding: 17px 34px;
          font-family: 'Jost', sans-serif;
          font-size: 10.5px;
          font-weight: 700;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          cursor: pointer;
          transition: background 0.22s ease, transform 0.22s ease, box-shadow 0.22s ease;
        }
        .wwu-submit:disabled {
          cursor: wait;
          opacity: 0.72;
          transform: none;
        }
        .wwu-submit:hover {
          background: #b0811f;
          transform: translateY(-2px);
          box-shadow: 0 12px 32px rgba(198,146,42,0.25);
        }
        .wwu-confidential {
          font-size: 13px;
          line-height: 1.65;
          color: rgba(26,26,26,0.48);
          font-style: italic;
          max-width: 290px;
        }
        .wwu-status {
          grid-column: 1 / -1;
          border: 1px solid rgba(198,146,42,0.34);
          background: rgba(198,146,42,0.08);
          color: ${INK};
          padding: 16px 18px;
          font-size: 15px;
          line-height: 1.6;
          font-style: italic;
        }
        .wwu-status-error {
          border-color: rgba(140,40,40,0.32);
          background: rgba(140,40,40,0.08);
        }
        @media (max-width: 960px) {
          .wwu-form-root { padding: 86px 28px; }
          .wwu-form-inner { grid-template-columns: 1fr; gap: 44px; }
          .wwu-form-side { position: static; }
        }
        @media (max-width: 680px) {
          .wwu-form-card { padding: 30px 24px; }
          .wwu-form-grid { grid-template-columns: 1fr; }
          .wwu-submit-row { align-items: flex-start; flex-direction: column; }
          .wwu-submit { width: 100%; }
        }
        @media (max-width: 560px) {
          .wwu-form-root { padding: 76px 20px; }
          .wwu-form-inner { gap: 34px; }
          .wwu-form-kicker { font-size: 9.5px; letter-spacing: 0.18em; margin-bottom: 18px; }
          .wwu-form-title { font-size: 40px; line-height: 1.08; letter-spacing: -0.02em; }
          .wwu-form-intro { font-size: 16px; line-height: 1.72; margin-bottom: 26px; }
          .wwu-review-note { padding: 16px 0 16px 18px; }
          .wwu-form-card { padding: 24px 18px; }
          .wwu-form-grid { gap: 20px; }
          .wwu-input,
          .wwu-select,
          .wwu-textarea { font-size: 16px; }
          .wwu-submit-row { gap: 18px; padding-top: 24px; }
          .wwu-confidential { max-width: none; }
        }
      `}</style>

      <section className="wwu-form-root" id="form" ref={ref}>
        <div className="wwu-form-inner">
          <div className={`wwu-form-side transition-slide-up${inView ? " visible" : ""}`}>
            <div className="wwu-form-kicker">Application</div>
            <h2 className="wwu-form-title">Tell us about your <em>business.</em></h2>
            <p className="wwu-form-intro">
              All submissions are reviewed personally. We respond within 2 business days.
            </p>
            <div className="wwu-review-note">
              The more specific you are, the better we can understand whether Dominus is the right partner for your current stage.
            </div>
          </div>

          <form
            className={`wwu-form-card${inView ? " visible" : ""}`}
            name="work-with-us"
            method="POST"
            data-netlify="true"
            onSubmit={handleSubmit}
          >
            <div className="wwu-form-grid">
              <input type="hidden" name="form-name" value="work-with-us" />

              <label className="wwu-field">
                <span className="wwu-label">Your name</span>
                <input className="wwu-input" name="name" placeholder="John Dlamini" autoComplete="name" required />
              </label>

              <label className="wwu-field">
                <span className="wwu-label">Business name</span>
                <input className="wwu-input" name="businessName" placeholder="e.g. Dlamini Logistics" autoComplete="organization" required />
              </label>

              <label className="wwu-field">
                <span className="wwu-label">Industry</span>
                <select className="wwu-select" name="industry" defaultValue="" required>
                  <option value="" disabled>Select your industry</option>
                  {industries.map((industry) => <option key={industry} value={industry}>{industry}</option>)}
                </select>
              </label>

              <label className="wwu-field">
                <span className="wwu-label">Monthly revenue range</span>
                <select className="wwu-select" name="monthlyRevenue" defaultValue="" required>
                  <option value="" disabled>Select a range</option>
                  {revenueRanges.map((range) => <option key={range} value={range}>{range}</option>)}
                </select>
                <span className="wwu-help-text">This helps us understand where your business is right now.</span>
              </label>

              <label className="wwu-field wwu-field-full">
                <span className="wwu-label">Main challenge</span>
                <textarea className="wwu-textarea" name="mainChallenge" placeholder="Describe what isn't working - the more specific, the better." required />
              </label>

              <label className="wwu-field">
                <span className="wwu-label">Phone number</span>
                <input className="wwu-input" name="phone" type="tel" placeholder="+27 __ ___ ____" autoComplete="tel" required />
              </label>

              <label className="wwu-field">
                <span className="wwu-label">Email address</span>
                <input className="wwu-input" name="email" type="email" placeholder="your@email.com" autoComplete="email" required />
              </label>

              {submitStatus === "success" && (
                <div className="wwu-status" role="status">
                  Thank you. Your application has been submitted. We review every submission personally and respond within 2 business days.
                </div>
              )}

              {submitStatus === "error" && (
                <div className="wwu-status wwu-status-error" role="alert">
                  Something went wrong while submitting. Please try again, or message us directly on WhatsApp.
                </div>
              )}

              <div className="wwu-submit-row">
                <button className="wwu-submit" type="submit" disabled={submitStatus === "submitting"}>
                  {submitStatus === "submitting" ? "Submitting..." : "Submit your application"}
                </button>
                <div className="wwu-confidential">
                  We review every submission. Your information is kept confidential.
                </div>
              </div>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}

function TrustSignals() {
  const { ref, inView } = useInView(0.16);

  return (
    <>
      <style>{`
        .wwu-trust-root {
          background: #fffaf2;
          padding: 0 48px 106px;
          font-family: 'Cormorant Garamond', Georgia, serif;
        }
        .wwu-trust-grid {
          max-width: 1160px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          border: 1px solid rgba(26,26,26,0.1);
        }
        .wwu-trust-card {
          padding: 36px 34px;
          border-right: 1px solid rgba(26,26,26,0.1);
          opacity: 0;
          transform: translateY(18px);
          transition: opacity 0.65s ease, transform 0.65s ease, background 0.25s ease;
        }
        .wwu-trust-card.visible {
          opacity: 1;
          transform: translateY(0);
        }
        .wwu-trust-card:last-child { border-right: none; }
        .wwu-trust-card:hover { background: rgba(198,146,42,0.045); }
        .wwu-trust-title {
          font-size: clamp(28px, 3vw, 40px);
          line-height: 1;
          font-weight: 400;
          color: ${INK};
          margin-bottom: 14px;
        }
        .wwu-trust-text {
          font-family: 'Jost', sans-serif;
          font-size: 13px;
          line-height: 1.75;
          color: rgba(26,26,26,0.55);
        }
        @media (max-width: 820px) {
          .wwu-trust-root { padding: 0 28px 82px; }
          .wwu-trust-grid { grid-template-columns: 1fr; }
          .wwu-trust-card { border-right: none; border-bottom: 1px solid rgba(26,26,26,0.1); }
          .wwu-trust-card:last-child { border-bottom: none; }
        }
        @media (max-width: 560px) {
          .wwu-trust-root { padding: 0 20px 72px; }
          .wwu-trust-card { padding: 28px 22px; }
          .wwu-trust-title { font-size: 28px; }
          .wwu-trust-text { line-height: 1.7; }
        }
      `}</style>

      <section className="wwu-trust-root" ref={ref}>
        <div className="wwu-trust-grid">
          {trustSignals.map((signal, index) => (
            <article
              className={`wwu-trust-card${inView ? " visible" : ""}`}
              style={{ transitionDelay: inView ? `${index * 0.12}s` : "0s" }}
              key={signal.title}
            >
              <div className="wwu-trust-title">{signal.title}</div>
              <div className="wwu-trust-text">{signal.text}</div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}

function NextSteps() {
  const { ref, inView } = useInView(0.1);

  return (
    <>
      <style>{`
        .wwu-next-root {
          background: ${INK};
          color: ${CREAM};
          padding: 118px 48px;
          font-family: 'Cormorant Garamond', Georgia, serif;
          position: relative;
          overflow: hidden;
        }
        .wwu-next-root::before {
          content: '';
          position: absolute;
          width: 560px;
          height: 560px;
          right: -180px;
          top: 80px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(198,146,42,0.12), transparent 68%);
          pointer-events: none;
        }
        .wwu-next-inner {
          position: relative;
          z-index: 2;
          max-width: 1160px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 0.88fr 1.12fr;
          gap: 86px;
          align-items: start;
        }
        .wwu-next-label {
          font-family: 'Jost', sans-serif;
          font-size: 10.5px;
          font-weight: 700;
          letter-spacing: 0.22em;
          text-transform: uppercase;
          color: ${GOLD};
          margin-bottom: 26px;
        }
        .wwu-next-title {
          font-size: clamp(42px, 5vw, 72px);
          font-weight: 300;
          line-height: 1.04;
          letter-spacing: -0.025em;
          margin: 0;
        }
        .wwu-next-title em {
          color: ${GOLD};
          font-style: italic;
        }
        .wwu-next-list {
          counter-reset: nextSteps;
          display: grid;
          gap: 0;
          border-top: 1px solid rgba(249,246,241,0.12);
        }
        .wwu-next-step {
          counter-increment: nextSteps;
          display: grid;
          grid-template-columns: 74px 1fr;
          gap: 24px;
          padding: 34px 0;
          border-bottom: 1px solid rgba(249,246,241,0.12);
          opacity: 0;
          transform: translateX(24px);
          transition: opacity 0.7s ease, transform 0.7s ease;
        }
        .wwu-next-step.visible {
          opacity: 1;
          transform: translateX(0);
        }
        .wwu-next-step::before {
          content: counter(nextSteps);
          width: 42px;
          height: 42px;
          border: 1px solid rgba(198,146,42,0.55);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: ${GOLD};
          font-size: 22px;
          line-height: 1;
        }
        .wwu-next-step h3 {
          font-size: clamp(24px, 2.6vw, 34px);
          line-height: 1.15;
          font-weight: 400;
          color: ${CREAM};
          margin: 0 0 10px;
        }
        .wwu-next-step p {
          font-family: 'Jost', sans-serif;
          font-size: 14px;
          line-height: 1.85;
          color: rgba(249,246,241,0.48);
          margin: 0;
        }
        @media (max-width: 900px) {
          .wwu-next-root { padding: 86px 28px; }
          .wwu-next-inner { grid-template-columns: 1fr; gap: 50px; }
          .wwu-next-step { grid-template-columns: 56px 1fr; gap: 16px; }
        }
        @media (max-width: 560px) {
          .wwu-next-root { padding: 76px 20px; }
          .wwu-next-inner { gap: 36px; }
          .wwu-next-label { font-size: 9.5px; letter-spacing: 0.18em; margin-bottom: 18px; }
          .wwu-next-title { font-size: 40px; line-height: 1.08; letter-spacing: -0.02em; }
          .wwu-next-step {
            grid-template-columns: 44px 1fr;
            gap: 14px;
            padding: 26px 0;
          }
          .wwu-next-step::before { width: 30px; height: 30px; margin-top: 2px; }
          .wwu-next-step h3 { font-size: 24px; }
          .wwu-next-step p { line-height: 1.7; }
        }
      `}</style>

      <section className="wwu-next-root" ref={ref}>
        <div className="wwu-next-inner">
          <div className={`transition-slide-up${inView ? " visible" : ""}`}>
            <div className="wwu-next-label">What happens next</div>
            <h2 className="wwu-next-title">What happens after <em>you submit.</em></h2>
          </div>

          <div className="wwu-next-list">
            {nextSteps.map((step, index) => (
              <article
                className={`wwu-next-step${inView ? " visible" : ""}`}
                style={{ transitionDelay: inView ? `${0.1 + index * 0.13}s` : "0s" }}
                key={step.title}
              >
                <div>
                  <h3>{step.title}</h3>
                  <p>{step.text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

function WhatsAppCTA() {
  const { ref, inView } = useInView(0.18);

  return (
    <>
      <style>{`
        .wwu-whatsapp-root {
          background: #fffaf2;
          padding: 110px 48px;
          font-family: 'Cormorant Garamond', Georgia, serif;
          text-align: center;
        }
        .wwu-whatsapp-inner {
          max-width: 720px;
          margin: 0 auto;
          opacity: 0;
          transform: translateY(22px);
          transition: opacity 0.75s ease, transform 0.75s ease;
        }
        .wwu-whatsapp-inner.visible {
          opacity: 1;
          transform: translateY(0);
        }
        .wwu-whatsapp-label {
          display: inline-flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 30px;
        }
        .wwu-whatsapp-label::before,
        .wwu-whatsapp-label::after {
          content: '';
          width: 34px;
          height: 1px;
          background: ${GOLD};
        }
        .wwu-whatsapp-label span {
          font-family: 'Jost', sans-serif;
          font-size: 10.5px;
          font-weight: 700;
          letter-spacing: 0.22em;
          text-transform: uppercase;
          color: ${GOLD};
        }
        .wwu-whatsapp-title {
          font-size: clamp(42px, 5.5vw, 76px);
          font-weight: 300;
          line-height: 1.04;
          letter-spacing: -0.03em;
          color: ${INK};
          margin: 0 0 22px;
        }
        .wwu-whatsapp-title em {
          color: ${GOLD};
          font-style: italic;
        }
        .wwu-whatsapp-copy {
          font-size: clamp(17px, 1.55vw, 20px);
          line-height: 1.8;
          color: rgba(26,26,26,0.58);
          font-style: italic;
          margin: 0 auto 40px;
          max-width: 500px;
        }
        .wwu-whatsapp-button {
          display: inline-block;
          font-family: 'Jost', sans-serif;
          font-size: 10.5px;
          font-weight: 700;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          text-decoration: none;
          color: white;
          background: #1f9f58;
          border: 1px solid #1f9f58;
          border-radius: 3px;
          padding: 17px 42px;
          transition: background 0.22s ease, transform 0.22s ease, box-shadow 0.22s ease;
        }
        .wwu-whatsapp-button:hover {
          background: #17864a;
          transform: translateY(-2px);
          box-shadow: 0 14px 34px rgba(31,159,88,0.22);
        }
        @media (max-width: 700px) {
          .wwu-whatsapp-root { padding: 84px 28px; }
          .wwu-whatsapp-label::before,
          .wwu-whatsapp-label::after { width: 22px; }
        }
        @media (max-width: 560px) {
          .wwu-whatsapp-root { padding: 78px 20px; }
          .wwu-whatsapp-label { gap: 10px; margin-bottom: 24px; }
          .wwu-whatsapp-label span { font-size: 9.5px; letter-spacing: 0.18em; }
          .wwu-whatsapp-title { font-size: 40px; line-height: 1.08; }
          .wwu-whatsapp-copy { font-size: 16px; line-height: 1.72; margin-bottom: 30px; }
          .wwu-whatsapp-button { width: 100%; padding: 16px 22px; }
        }
      `}</style>

      <section className="wwu-whatsapp-root" ref={ref}>
        <div className={`wwu-whatsapp-inner${inView ? " visible" : ""}`}>
          <div className="wwu-whatsapp-label"><span>Talk First</span></div>
          <h2 className="wwu-whatsapp-title">Prefer to talk <em>first?</em></h2>
          <p className="wwu-whatsapp-copy">
            Send us a message on WhatsApp. We respond the same day.
          </p>
          <a
            href={`https://wa.me/${WHATSAPP_NUMBER}`}
            target="_blank"
            rel="noopener noreferrer"
            className="wwu-whatsapp-button"
          >
            Message Us On WhatsApp
          </a>
        </div>
      </section>
    </>
  );
}

export default function WorkWithUs() {
  return (
    <div style={{ minHeight: "100vh", background: INK }}>
      <WorkHero />
      <FitSection />
      <LeadCaptureForm />
      <TrustSignals />
      <NextSteps />
      <WhatsAppCTA />
      <Footer />
    </div>
  );
}
