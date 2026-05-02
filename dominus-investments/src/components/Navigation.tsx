import { useState, useEffect } from "react";

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Work With Us", href: "/work-with-us" },
  { label: "Contact", href: "/contact" },
];

const AMBER_GOLD = "#C6922A";

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("/");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    setActive(window.location.pathname);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <style>{`
        .nav-root {
          position: fixed;
          top: 0; left: 0; right: 0;
          z-index: 100;
          background: rgba(255,255,255,0.97);
          border-bottom: 0.5px solid #e8e0d4;
          transition: box-shadow 0.3s ease, background 0.3s ease;
          font-family: 'Georgia', 'Times New Roman', serif;
        }
        .nav-root.scrolled {
          box-shadow: 0 1px 24px rgba(198,146,42,0.08);
        }
        .nav-inner {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 32px;
          height: 64px;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }
        .nav-logo {
          display: flex;
          align-items: center;
          gap: 0;
          text-decoration: none;
          letter-spacing: 0.12em;
          font-size: 15px;
          font-weight: 700;
          color: #1a1a1a;
          text-transform: uppercase;
          font-family: 'Georgia', 'Times New Roman', serif;
        }
        .nav-logo-mark {
          width: 34px;
          height: 34px;
          object-fit: contain;
          margin-right: 12px;
          display: block;
        }
        .nav-logo-accent {
          color: ${AMBER_GOLD};
        }
        .nav-logo-divider {
          width: 1px;
          height: 14px;
          background: #e0d0b0;
          margin: 0 10px;
          align-self: center;
        }
        .nav-links {
          display: flex;
          align-items: center;
          gap: 32px;
          list-style: none;
          margin: 0;
          padding: 0;
        }
        .nav-link {
          font-size: 12px;
          letter-spacing: 0.06em;
          text-transform: uppercase;
          color: #666;
          text-decoration: none;
          position: relative;
          padding-bottom: 2px;
          transition: color 0.2s;
          font-family: 'Georgia', 'Times New Roman', serif;
        }
        .nav-link::after {
          content: '';
          position: absolute;
          bottom: -2px; left: 0; right: 0;
          height: 1.5px;
          background: ${AMBER_GOLD};
          transform: scaleX(0);
          transform-origin: left;
          transition: transform 0.25s ease;
        }
        .nav-link:hover { color: #1a1a1a; }
        .nav-link:hover::after,
        .nav-link.active::after { transform: scaleX(1); }
        .nav-link.active { color: ${AMBER_GOLD}; }
        .nav-cta {
          background: ${AMBER_GOLD};
          color: white;
          border: none;
          padding: 9px 20px;
          border-radius: 4px;
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          cursor: pointer;
          text-decoration: none;
          transition: background 0.2s, transform 0.15s;
          font-family: 'Georgia', 'Times New Roman', serif;
        }
        .nav-cta:hover {
          background: #b0811f;
          transform: translateY(-1px);
        }
        .nav-mobile-toggle {
          display: none;
          flex-direction: column;
          gap: 5px;
          cursor: pointer;
          padding: 4px;
          background: none;
          border: none;
        }
        .nav-mobile-toggle span {
          display: block;
          width: 22px;
          height: 1.5px;
          background: #1a1a1a;
          transition: all 0.25s ease;
          transform-origin: center;
        }
        .nav-mobile-toggle.open span:nth-child(1) { transform: translateY(6.5px) rotate(45deg); }
        .nav-mobile-toggle.open span:nth-child(2) { opacity: 0; }
        .nav-mobile-toggle.open span:nth-child(3) { transform: translateY(-6.5px) rotate(-45deg); }
        .nav-mobile-menu {
          display: none;
          flex-direction: column;
          background: white;
          border-top: 0.5px solid #e8e0d4;
          padding: 16px 32px 24px;
          gap: 0;
        }
        .nav-mobile-menu.open { display: flex; }
        .nav-mobile-link {
          font-size: 13px;
          letter-spacing: 0.06em;
          text-transform: uppercase;
          color: #555;
          text-decoration: none;
          padding: 13px 0;
          border-bottom: 0.5px solid #f0ebe3;
          transition: color 0.2s;
          font-family: 'Georgia', 'Times New Roman', serif;
        }
        .nav-mobile-link:last-of-type { border-bottom: none; }
        .nav-mobile-link.active { color: ${AMBER_GOLD}; }
        .nav-mobile-cta {
          margin-top: 16px;
          background: ${AMBER_GOLD};
          color: white;
          text-align: center;
          padding: 12px;
          border-radius: 4px;
          font-size: 12px;
          font-weight: 600;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          text-decoration: none;
          font-family: 'Georgia', 'Times New Roman', serif;
        }
        @media (max-width: 768px) {
          .nav-links, .nav-cta { display: none; }
          .nav-mobile-toggle { display: flex; }
        }
      `}</style>

      <nav className={`nav-root${scrolled ? " scrolled" : ""}`}>
        <div className="nav-inner">
          {/* Logo */}
          <a href="/" className="nav-logo">
            <img
              src="/dominus-logo.png"
              alt="Dominus Investments logo"
              className="nav-logo-mark"
            />
            <span>Dominus</span>
            <span className="nav-logo-divider" />
            <span className="nav-logo-accent">Investments</span>
          </a>

          {/* Desktop links */}
          <ul className="nav-links">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className={`nav-link${active === link.href ? " active" : ""}`}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Desktop CTA */}
          <a href="/work-with-us" className="nav-cta">
            Get Started
          </a>

          {/* Mobile toggle */}
          <button
            className={`nav-mobile-toggle${menuOpen ? " open" : ""}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span />
            <span />
            <span />
          </button>
        </div>

        {/* Mobile menu */}
        <div className={`nav-mobile-menu${menuOpen ? " open" : ""}`}>
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`nav-mobile-link${active === link.href ? " active" : ""}`}
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a href="/work-with-us" className="nav-mobile-cta">
            Get Started
          </a>
        </div>
      </nav>
    </>
  );
}
