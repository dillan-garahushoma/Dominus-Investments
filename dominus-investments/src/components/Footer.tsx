import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="w-full bg-dark-background border-t border-foreground/10">
      <div className="max-w-[100rem] mx-auto px-6 lg:px-12 py-16 lg:py-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16">
          {/* Brand */}
          <div>
            <h3 className="font-heading text-3xl text-foreground mb-4">Dominus</h3>
            <p className="font-paragraph text-base text-foreground/70">
              We don't consult. We build businesses that last.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-heading text-xl text-foreground mb-4">Navigation</h4>
            <nav className="flex flex-col gap-3">
              <Link to="/" className="font-paragraph text-base text-foreground/70 hover:text-primary transition-colors">
                Home
              </Link>
              <Link to="/about" className="font-paragraph text-base text-foreground/70 hover:text-primary transition-colors">
                About
              </Link>
              <Link to="/services" className="font-paragraph text-base text-foreground/70 hover:text-primary transition-colors">
                Services
              </Link>
              <Link to="/work-with-us" className="font-paragraph text-base text-foreground/70 hover:text-primary transition-colors">
                Work With Us
              </Link>
              <Link to="/contact" className="font-paragraph text-base text-foreground/70 hover:text-primary transition-colors">
                Contact
              </Link>
            </nav>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-heading text-xl text-foreground mb-4">Contact</h4>
            <div className="flex flex-col gap-3">
              <a
                href="mailto:info@dominus.co.za"
                className="flex items-center gap-2 font-paragraph text-base text-foreground/70 hover:text-primary transition-colors"
              >
                <Mail className="w-4 h-4" />
                info@dominus.co.za
              </a>
              <a
                href="tel:+27312345678"
                className="flex items-center gap-2 font-paragraph text-base text-foreground/70 hover:text-primary transition-colors"
              >
                <Phone className="w-4 h-4" />
                +27 31 234 5678
              </a>
              <div className="flex items-start gap-2 font-paragraph text-base text-foreground/70">
                <MapPin className="w-4 h-4 mt-1 flex-shrink-0" />
                <span>Durban, KwaZulu-Natal, South Africa</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading text-xl text-foreground mb-4">Quick Links</h4>
            <nav className="flex flex-col gap-3">
              <a
                href="#about"
                className="font-paragraph text-base text-foreground/70 hover:text-primary transition-colors"
              >
                Our Values
              </a>
              <a
                href="#services"
                className="font-paragraph text-base text-foreground/70 hover:text-primary transition-colors"
              >
                Dominus Method
              </a>
              <a
                href="https://wa.me/27312345678?text=Hi%20Dominus%2C%20I%20would%20like%20to%20discuss%20my%20business."
                target="_blank"
                rel="noopener noreferrer"
                className="font-paragraph text-base text-foreground/70 hover:text-primary transition-colors"
              >
                WhatsApp Us
              </a>
            </nav>
          </div>
        </div>

        <div className="border-t border-foreground/10 mt-12 pt-8">
          <p className="font-paragraph text-sm text-foreground/60 text-center">
            © {new Date().getFullYear()} Dominus. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
