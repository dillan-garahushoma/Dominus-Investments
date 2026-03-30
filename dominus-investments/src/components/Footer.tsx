import { Link } from 'react-router-dom';
import { MessageCircle, Mail, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="w-full bg-secondary py-16 lg:py-20">
      <div className="max-w-[100rem] mx-auto px-8 lg:px-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16 mb-12">
          {/* Company Info */}
          <div>
            <h3 className="font-heading text-3xl text-secondary-foreground mb-6">Dominus</h3>
            <p className="font-paragraph text-base text-secondary-foreground/80 leading-relaxed mb-6">
              We don't consult. We build.
            </p>
            <p className="font-paragraph text-sm text-secondary-foreground/70 leading-relaxed">
              Durban-based business growth firm specializing in operational transformation and systematic scaling.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading text-xl text-secondary-foreground mb-6">Quick Links</h4>
            <nav className="flex flex-col gap-3">
              <Link 
                to="/" 
                className="font-paragraph text-base text-secondary-foreground/80 hover:text-secondary-foreground transition-colors duration-300"
              >
                Home
              </Link>
              <Link 
                to="/themethod" 
                className="font-paragraph text-base text-secondary-foreground/80 hover:text-secondary-foreground transition-colors duration-300"
              >
                The Method
              </Link>
              <Link 
                to="/about" 
                className="font-paragraph text-base text-secondary-foreground/80 hover:text-secondary-foreground transition-colors duration-300"
              >
                About
              </Link>
              <Link 
                to="/work-with-us" 
                className="font-paragraph text-base text-secondary-foreground/80 hover:text-secondary-foreground transition-colors duration-300"
              >
                Work With Us
              </Link>
            </nav>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-heading text-xl text-secondary-foreground mb-6">Contact</h4>
            <div className="flex flex-col gap-4">
              <div className="flex items-start gap-3">
                <MapPin size={20} className="text-secondary-foreground/80 mt-1 flex-shrink-0" />
                <p className="font-paragraph text-base text-secondary-foreground/80">
                  Durban, South Africa
                </p>
              </div>
              <div className="flex items-start gap-3">
                <Mail size={20} className="text-secondary-foreground/80 mt-1 flex-shrink-0" />
                <a 
                  href="mailto:info@dominusinvestments.co.za"
                  className="font-paragraph text-base text-secondary-foreground/80 hover:text-secondary-foreground transition-colors duration-300"
                >
                  info@dominusinvestments.co.za
                </a>
              </div>
              <div className="flex items-start gap-3">
                <MessageCircle size={20} className="text-secondary-foreground/80 mt-1 flex-shrink-0" />
                <a 
                  href="https://wa.me/27123456789"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-paragraph text-base text-secondary-foreground/80 hover:text-secondary-foreground transition-colors duration-300"
                >
                  WhatsApp Us
                </a>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div>
            <h4 className="font-heading text-xl text-secondary-foreground mb-6">Get Started</h4>
            <p className="font-paragraph text-base text-secondary-foreground/80 leading-relaxed mb-6">
              Ready to transform your business? Complete our assessment today.
            </p>
            <Link 
              to="/work-with-us"
              className="inline-flex items-center justify-center px-6 py-3 border-2 border-secondary-foreground bg-transparent text-secondary-foreground font-paragraph text-sm hover:bg-secondary-foreground hover:text-secondary transition-colors duration-300"
            >
              Start Assessment
            </Link>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-secondary-foreground/20">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="font-paragraph text-sm text-secondary-foreground/60">
              © {new Date().getFullYear()} Dominus Investments. All rights reserved.
            </p>
            <p className="font-paragraph text-sm text-secondary-foreground/60">
              Building businesses that scale.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
