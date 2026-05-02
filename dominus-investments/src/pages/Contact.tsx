import { useState, type FormEvent } from "react";
import Footer from "../components/Footer";
import { useInView } from "../hooks/useInView";

const GOLD = "#C6922A";
const CREAM = "#f9f6f1";
const INK = "#1a1a1a";
const WHATSAPP_NUMBER = "27699294459";

const contactMethods = [
  {
    label: "Email",
    title: "info@dominusinvestments.co.za",
    text: "For business enquiries, applications, partnerships, and general communication.",
    href: "mailto:info@dominusinvestments.co.za",
  },
  {
    label: "WhatsApp",
    title: "+27 69 929 4459",
    text: "Prefer a faster first touch? Send a short message and we will respond as soon as possible.",
    href: `https://wa.me/${WHATSAPP_NUMBER}`,
  },
  {
    label: "Location",
    title: "Durban, KwaZulu-Natal",
    text: "South African SME-focused, Durban-based, and able to work with businesses nationally.",
    href: "/work-with-us",
  },
];

function ContactHero() {
  return (
    <>
      <style>{`
        .contact-hero {
          min-height: 72vh;
          display: flex;
          align-items: center;
          padding: 164px 48px 112px;
          background:
            radial-gradient(ellipse 74% 72% at 50% 54%, rgba(198,146,42,0.16), transparent 66%),
            radial-gradient(ellipse 44% 48% at 18% 82%, rgba(249,246,241,0.05), transparent 66%),
            linear-gradient(135deg, #101010 0%, ${INK} 58%, #0c0c0c 100%);
          color: ${CREAM};
          font-family: 'Cormorant Garamond', Georgia, serif;
          position: relative;
          overflow: hidden;
        }
        .contact-hero::before {
          content: '';
          position: absolute;
          inset: 0;
          background-image:
            linear-gradient(rgba(198,146,42,0.045) 1px, transparent 1px),
            linear-gradient(90deg, rgba(198,146,42,0.045) 1px, transparent 1px);
          background-size: 96px 96px;
          mask-image: radial-gradient(circle at 50% 52%, black, transparent 72%);
          pointer-events: none;
        }
        .contact-hero::after {
          content: '';
          position: absolute;
          left: 0;
          right: 0;
          bottom: 0;
          height: 1px;
          background: linear-gradient(90deg, transparent, rgba(198,146,42,0.72), transparent);
        }
        .contact-hero-inner {
          position: relative;
          z-index: 2;
          max-width: 850px;
          margin: 0 auto;
          width: 100%;
          text-align: center;
        }
        .contact-eyebrow {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 14px;
          margin-bottom: 30px;
        }
        .contact-hero-logo {
          display: block;
          width: 58px;
          height: 58px;
          object-fit: contain;
          margin: 0 auto 22px;
        }
        .contact-eyebrow::before {
          content: '';
          width: 42px;
          flex: 0 0 42px;
          height: 1px;
          background: ${GOLD};
          opacity: 0.78;
        }
        .contact-eyebrow::after {
          content: '';
          width: 42px;
          flex: 0 0 42px;
          height: 1px;
          background: ${GOLD};
          opacity: 0.78;
        }
        .contact-eyebrow span {
          font-family: 'Jost', sans-serif;
          font-size: 10.5px;
          font-weight: 700;
          letter-spacing: 0.22em;
          text-transform: uppercase;
          color: ${GOLD};
        }
        .contact-title {
          font-size: clamp(56px, 7.5vw, 104px);
          font-weight: 300;
          line-height: 0.98;
          letter-spacing: -0.036em;
          margin: 0 auto;
          max-width: 820px;
        }
        .contact-title em {
          color: ${GOLD};
          font-style: italic;
        }
        .contact-copy {
          max-width: 650px;
          font-size: clamp(18px, 1.7vw, 22px);
          line-height: 1.78;
          color: rgba(249,246,241,0.66);
          font-style: italic;
          margin: 32px auto 0;
        }
        .contact-hero-actions {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 14px;
          flex-wrap: wrap;
          margin-top: 38px;
        }
        .contact-hero-button {
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
        .contact-hero-button-primary {
          color: white;
          background: ${GOLD};
          border: 1px solid ${GOLD};
        }
        .contact-hero-button-primary:hover {
          background: #b0811f;
          border-color: #b0811f;
          transform: translateY(-2px);
          box-shadow: 0 14px 38px rgba(198,146,42,0.24);
        }
        .contact-hero-button-ghost {
          background: rgba(249,246,241,0.04);
          border: 1px solid rgba(249,246,241,0.22);
          color: rgba(249,246,241,0.78);
        }
        .contact-hero-button-ghost:hover {
          border-color: rgba(249,246,241,0.54);
          color: ${CREAM};
          transform: translateY(-2px);
        }
        @media (max-width: 900px) {
          .contact-hero { min-height: auto; padding: 138px 28px 88px; }
          .contact-title { font-size: 68px; }
          .contact-copy { font-size: 18px; }
        }
        @media (max-width: 560px) {
          .contact-hero { padding: 122px 20px 74px; }
          .contact-hero-logo { width: 50px; height: 50px; margin-bottom: 18px; }
          .contact-eyebrow { gap: 11px; margin-bottom: 26px; }
          .contact-eyebrow::before,
          .contact-eyebrow::after { width: 24px; flex-basis: 24px; }
          .contact-eyebrow span { font-size: 9.5px; letter-spacing: 0.18em; }
          .contact-title { font-size: 50px; line-height: 1; letter-spacing: -0.02em; }
          .contact-copy { font-size: 16px; line-height: 1.72; margin-top: 26px; }
          .contact-hero-actions { flex-direction: column; align-items: stretch; margin-top: 30px; }
          .contact-hero-button { width: 100%; }
        }
      `}</style>

      <section className="contact-hero">
        <div className="contact-hero-inner">
          <div className="transition-slide-up visible">
            <img
              src="/dominus-logo.png"
              alt="Dominus Investments logo"
              className="contact-hero-logo"
            />
            <div className="contact-eyebrow"><span>Contact Dominus</span></div>
            <h1 className="contact-title">Let's start the right <em>conversation.</em></h1>
            <p className="contact-copy transition-slide-up visible">
              Reach out for general enquiries, partnership conversations, or to clarify whether Dominus is the right fit for your business.
            </p>
            <div className="contact-hero-actions transition-slide-up visible">
              <a className="contact-hero-button contact-hero-button-primary" href="mailto:info@dominusinvestments.co.za">
                Email Us
              </a>
              <a
                className="contact-hero-button contact-hero-button-ghost"
                href={`https://wa.me/${WHATSAPP_NUMBER}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function ContactMethods() {
  const { ref, inView } = useInView(0.12);

  return (
    <>
      <style>{`
        .contact-methods {
          background: ${CREAM};
          padding: 104px 48px 0;
          font-family: 'Cormorant Garamond', Georgia, serif;
        }
        .contact-methods-grid {
          max-width: 1160px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          border: 1px solid rgba(26,26,26,0.1);
        }
        .contact-method-card {
          padding: 40px 34px;
          border-right: 1px solid rgba(26,26,26,0.1);
          background: rgba(255,255,255,0.24);
          opacity: 0;
          transform: translateY(18px);
          transition: opacity 0.65s ease, transform 0.65s ease, background 0.25s ease;
        }
        .contact-method-card.visible {
          opacity: 1;
          transform: translateY(0);
        }
        .contact-method-card:last-child { border-right: none; }
        .contact-method-card:hover { background: rgba(198,146,42,0.045); }
        .contact-method-label {
          font-family: 'Jost', sans-serif;
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: ${GOLD};
          margin-bottom: 18px;
        }
        .contact-method-title {
          display: block;
          color: ${INK};
          font-size: clamp(24px, 2.5vw, 34px);
          line-height: 1.15;
          font-weight: 400;
          text-decoration: none;
          margin-bottom: 14px;
        }
        .contact-method-text {
          font-family: 'Jost', sans-serif;
          font-size: 13px;
          line-height: 1.8;
          color: rgba(26,26,26,0.54);
        }
        @media (max-width: 860px) {
          .contact-methods { padding: 82px 28px 0; }
          .contact-methods-grid { grid-template-columns: 1fr; }
          .contact-method-card { border-right: none; border-bottom: 1px solid rgba(26,26,26,0.1); }
          .contact-method-card:last-child { border-bottom: none; }
        }
        @media (max-width: 560px) {
          .contact-methods { padding: 72px 20px 0; }
          .contact-method-card { padding: 28px 22px; }
          .contact-method-label { font-size: 9.5px; letter-spacing: 0.18em; }
          .contact-method-title { font-size: 25px; overflow-wrap: anywhere; }
          .contact-method-text { font-size: 13px; line-height: 1.7; }
        }
      `}</style>

      <section className="contact-methods" ref={ref}>
        <div className="contact-methods-grid">
          {contactMethods.map((method, index) => (
            <article
              className={`contact-method-card${inView ? " visible" : ""}`}
              style={{ transitionDelay: inView ? `${index * 0.1}s` : "0s" }}
              key={method.label}
            >
              <div className="contact-method-label">{method.label}</div>
              <a className="contact-method-title" href={method.href}>
                {method.title}
              </a>
              <div className="contact-method-text">{method.text}</div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}

function ContactForm() {
  const { ref, inView } = useInView(0.08);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);
    const encodedData = new URLSearchParams();

    formData.append("form-name", "contact");
    formData.forEach((value, key) => encodedData.append(key, value.toString()));

    setSubmitStatus("submitting");

    try {
      const response = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encodedData.toString(),
      });

      if (!response.ok) throw new Error("Contact form submission failed");
      form.reset();
      setSubmitStatus("success");
    } catch {
      setSubmitStatus("error");
    }
  }

  return (
    <>
      <style>{`
        .contact-form-root {
          background: ${CREAM};
          padding: 104px 48px 118px;
          font-family: 'Cormorant Garamond', Georgia, serif;
        }
        .contact-form-inner {
          max-width: 1160px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 0.82fr 1.18fr;
          gap: 72px;
          align-items: start;
        }
        .contact-form-label {
          font-family: 'Jost', sans-serif;
          font-size: 10.5px;
          font-weight: 700;
          letter-spacing: 0.22em;
          text-transform: uppercase;
          color: ${GOLD};
          margin-bottom: 24px;
        }
        .contact-form-title {
          font-size: clamp(42px, 5vw, 72px);
          line-height: 1.04;
          letter-spacing: -0.03em;
          font-weight: 300;
          color: ${INK};
          margin: 0 0 24px;
        }
        .contact-form-title em { color: ${GOLD}; font-style: italic; }
        .contact-form-copy {
          font-size: clamp(17px, 1.55vw, 20px);
          line-height: 1.85;
          color: rgba(26,26,26,0.58);
          font-style: italic;
          margin: 0;
        }
        .contact-form-card {
          background: #fffaf2;
          border: 1px solid rgba(198,146,42,0.24);
          box-shadow: 0 26px 80px rgba(26,26,26,0.08);
          padding: 44px;
          opacity: 0;
          transform: translateY(24px);
          transition: opacity 0.75s ease, transform 0.75s ease;
        }
        .contact-form-card.visible { opacity: 1; transform: translateY(0); }
        .contact-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 24px;
        }
        .contact-field {
          display: flex;
          flex-direction: column;
          gap: 9px;
        }
        .contact-field-full { grid-column: 1 / -1; }
        .contact-label {
          font-family: 'Jost', sans-serif;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: rgba(26,26,26,0.62);
        }
        .contact-input,
        .contact-textarea {
          width: 100%;
          border: 1px solid rgba(26,26,26,0.13);
          background: rgba(255,255,255,0.76);
          color: ${INK};
          border-radius: 3px;
          padding: 15px 16px;
          font-family: 'Jost', sans-serif;
          font-size: 14px;
          outline: none;
          transition: border-color 0.2s ease, box-shadow 0.2s ease, background 0.2s ease;
        }
        .contact-textarea {
          min-height: 160px;
          resize: vertical;
          line-height: 1.65;
        }
        .contact-input:focus,
        .contact-textarea:focus {
          border-color: ${GOLD};
          background: white;
          box-shadow: 0 0 0 4px rgba(198,146,42,0.09);
        }
        .contact-submit-row {
          grid-column: 1 / -1;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 22px;
          border-top: 1px solid rgba(26,26,26,0.08);
          padding-top: 28px;
        }
        .contact-submit {
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
        .contact-submit:disabled { cursor: wait; opacity: 0.72; transform: none; }
        .contact-submit:hover:not(:disabled) {
          background: #b0811f;
          transform: translateY(-2px);
          box-shadow: 0 12px 32px rgba(198,146,42,0.25);
        }
        .contact-privacy {
          font-size: 13px;
          line-height: 1.65;
          color: rgba(26,26,26,0.48);
          font-style: italic;
          max-width: 290px;
        }
        .contact-status {
          grid-column: 1 / -1;
          border: 1px solid rgba(198,146,42,0.34);
          background: rgba(198,146,42,0.08);
          color: ${INK};
          padding: 16px 18px;
          font-size: 15px;
          line-height: 1.6;
          font-style: italic;
        }
        .contact-status-error {
          border-color: rgba(140,40,40,0.32);
          background: rgba(140,40,40,0.08);
        }
        @media (max-width: 960px) {
          .contact-form-root { padding: 82px 28px 96px; }
          .contact-form-inner { grid-template-columns: 1fr; gap: 42px; }
        }
        @media (max-width: 680px) {
          .contact-form-card { padding: 30px 24px; }
          .contact-grid { grid-template-columns: 1fr; }
          .contact-submit-row { align-items: flex-start; flex-direction: column; }
          .contact-submit { width: 100%; }
        }
        @media (max-width: 560px) {
          .contact-form-root { padding: 72px 20px 86px; }
          .contact-form-inner { gap: 34px; }
          .contact-form-label { font-size: 9.5px; letter-spacing: 0.18em; margin-bottom: 18px; }
          .contact-form-title { font-size: 40px; line-height: 1.08; letter-spacing: -0.02em; }
          .contact-form-copy { font-size: 16px; line-height: 1.72; }
          .contact-form-card { padding: 24px 18px; }
          .contact-grid { gap: 20px; }
          .contact-input,
          .contact-textarea { font-size: 16px; }
          .contact-submit-row { gap: 18px; padding-top: 24px; }
          .contact-privacy { max-width: none; }
        }
      `}</style>

      <section className="contact-form-root" ref={ref}>
        <div className="contact-form-inner">
          <div className={`transition-slide-up${inView ? " visible" : ""}`}>
            <div className="contact-form-label">Send a message</div>
            <h2 className="contact-form-title">Tell us what you need <em>clarity on.</em></h2>
            <p className="contact-form-copy">
              Use this form for general enquiries. If you want to apply to work with Dominus, use the Work With Us page so we can review your business properly.
            </p>
          </div>

          <form
            className={`contact-form-card${inView ? " visible" : ""}`}
            name="contact"
            method="POST"
            data-netlify="true"
            onSubmit={handleSubmit}
          >
            <div className="contact-grid">
              <input type="hidden" name="form-name" value="contact" />

              <label className="contact-field">
                <span className="contact-label">Your name</span>
                <input className="contact-input" name="name" placeholder="John Dlamini" autoComplete="name" required />
              </label>

              <label className="contact-field">
                <span className="contact-label">Email address</span>
                <input className="contact-input" name="email" type="email" placeholder="your@email.com" autoComplete="email" required />
              </label>

              <label className="contact-field">
                <span className="contact-label">Phone number</span>
                <input className="contact-input" name="phone" type="tel" placeholder="+27 __ ___ ____" autoComplete="tel" />
              </label>

              <label className="contact-field">
                <span className="contact-label">Subject</span>
                <input className="contact-input" name="subject" placeholder="How can we help?" required />
              </label>

              <label className="contact-field contact-field-full">
                <span className="contact-label">Message</span>
                <textarea className="contact-textarea" name="message" placeholder="Write your message here." required />
              </label>

              {submitStatus === "success" && (
                <div className="contact-status" role="status">
                  Thank you. Your message has been sent. We will respond as soon as possible.
                </div>
              )}

              {submitStatus === "error" && (
                <div className="contact-status contact-status-error" role="alert">
                  Something went wrong while sending your message. Please try again, email us, or message us on WhatsApp.
                </div>
              )}

              <div className="contact-submit-row">
                <button className="contact-submit" type="submit" disabled={submitStatus === "submitting"}>
                  {submitStatus === "submitting" ? "Sending..." : "Send message"}
                </button>
                <div className="contact-privacy">
                  Your information is handled confidentially and only used to respond to your enquiry.
                </div>
              </div>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}

export default function Contact() {
  return (
    <div style={{ minHeight: "100vh", background: INK }}>
      <ContactHero />
      <ContactMethods />
      <ContactForm />
      <Footer />
    </div>
  );
}
