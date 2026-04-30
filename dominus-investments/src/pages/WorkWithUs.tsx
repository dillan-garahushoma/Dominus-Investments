import { useState, type FormEvent } from "react";
import Footer from "../components/Footer";
import { useInView } from "../hooks/useInView";

const GOLD = "#C6922A";
const CREAM = "#f9f6f1";
const INK = "#1a1a1a";

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
          min-height: 76vh;
          padding: 168px 48px 116px;
          background:
            radial-gradient(ellipse 72% 72% at 52% 58%, rgba(198,146,42,0.12), transparent 68%),
            linear-gradient(135deg, #101010 0%, ${INK} 58%, #0d0d0d 100%);
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
            linear-gradient(rgba(198,146,42,0.055) 1px, transparent 1px),
            linear-gradient(90deg, rgba(198,146,42,0.055) 1px, transparent 1px);
          background-size: 92px 92px;
          mask-image: radial-gradient(circle at center, black, transparent 72%);
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
          grid-template-columns: 1.08fr 0.92fr;
          gap: 76px;
          align-items: end;
        }
        .wwu-eyebrow {
          display: flex;
          align-items: center;
          gap: 14px;
          margin-bottom: 32px;
        }
        .wwu-eyebrow-line {
          width: 42px;
          height: 1px;
          background: ${GOLD};
        }
        .wwu-eyebrow-text {
          font-family: 'Jost', sans-serif;
          font-size: 10.5px;
          font-weight: 700;
          letter-spacing: 0.22em;
          text-transform: uppercase;
          color: ${GOLD};
        }
        .wwu-hero-title {
          font-size: clamp(56px, 7.8vw, 108px);
          font-weight: 300;
          line-height: 0.98;
          letter-spacing: -0.035em;
          margin: 0;
        }
        .wwu-hero-title em {
          color: ${GOLD};
          font-style: italic;
          font-weight: 300;
        }
        .wwu-hero-copy {
          border-left: 1px solid rgba(198,146,42,0.45);
          padding-left: 34px;
        }
        .wwu-hero-copy p {
          font-size: clamp(18px, 1.7vw, 22px);
          line-height: 1.82;
          color: rgba(249,246,241,0.64);
          font-style: italic;
          margin: 0 0 34px;
        }
        .wwu-hero-button {
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
          padding: 17px 36px;
          transition: transform 0.22s ease, background 0.22s ease, box-shadow 0.22s ease;
        }
        .wwu-hero-button:hover {
          background: #b0811f;
          transform: translateY(-2px);
          box-shadow: 0 14px 38px rgba(198,146,42,0.28);
        }
        @media (max-width: 900px) {
          .wwu-hero { padding: 142px 28px 88px; }
          .wwu-hero-inner { grid-template-columns: 1fr; gap: 42px; }
          .wwu-hero-copy { padding-left: 22px; }
        }
      `}</style>

      <section className="wwu-hero">
        <div className="wwu-hero-inner">
          <div className="transition-slide-up visible">
            <div className="wwu-eyebrow">
              <div className="wwu-eyebrow-line" />
              <span className="wwu-eyebrow-text">Work with Dominus</span>
            </div>
            <h1 className="wwu-hero-title">
              Is your business ready<br />for what comes <em>next?</em>
            </h1>
          </div>

          <div className="wwu-hero-copy transition-slide-up visible">
            <p>
              We only work with a small number of businesses at a time. Tell us about yours, and we'll tell you if we can help.
            </p>
            <a href="#form" className="wwu-hero-button">Submit Your Application</a>
          </div>
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
          grid-template-columns: 0.82fr 1.18fr;
          gap: 72px;
          align-items: start;
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
          margin: 0;
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
        }
        @media (max-width: 680px) {
          .wwu-form-card { padding: 30px 24px; }
          .wwu-form-grid { grid-template-columns: 1fr; }
          .wwu-submit-row { align-items: flex-start; flex-direction: column; }
          .wwu-submit { width: 100%; }
        }
      `}</style>

      <section className="wwu-form-root" id="form" ref={ref}>
        <div className="wwu-form-inner">
          <div className={`transition-slide-up${inView ? " visible" : ""}`}>
            <div className="wwu-form-kicker">Application</div>
            <h2 className="wwu-form-title">Tell us about your <em>business.</em></h2>
            <p className="wwu-form-intro">
              All submissions are reviewed personally. We respond within 2 business days.
            </p>
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
      `}</style>

      <section className="wwu-whatsapp-root" ref={ref}>
        <div className={`wwu-whatsapp-inner${inView ? " visible" : ""}`}>
          <div className="wwu-whatsapp-label"><span>Talk First</span></div>
          <h2 className="wwu-whatsapp-title">Prefer to talk <em>first?</em></h2>
          <p className="wwu-whatsapp-copy">
            Send us a message on WhatsApp. We respond the same day.
          </p>
          <a
            href="https://wa.me/+27699294459"
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
      <LeadCaptureForm />
      <TrustSignals />
      <NextSteps />
      <WhatsAppCTA />
      <Footer />
    </div>
  );
}
