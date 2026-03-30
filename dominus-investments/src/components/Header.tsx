import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, MessageCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/method', label: 'The Method' },
    { path: '/about', label: 'About' },
    { path: '/work-with-us', label: 'Work With Us' }
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="w-full bg-background border-b border-primary/10 sticky top-0 z-50">
      <div className="max-w-[120rem] mx-auto px-8 lg:px-16 py-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <span className="font-heading text-3xl lg:text-4xl text-primary">Dominus</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-12">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`font-paragraph text-base transition-colors duration-300 ${
                  isActive(link.path) 
                    ? 'text-primary font-semibold' 
                    : 'text-primary/70 hover:text-primary'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* WhatsApp Button - Desktop */}
          <a
            href="https://wa.me/27123456789"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden lg:inline-flex items-center gap-2 px-6 py-3 border-2 border-buttonborder bg-buttonbackground text-primary font-paragraph text-sm hover:bg-primary hover:text-primary-foreground transition-colors duration-300"
          >
            <MessageCircle size={18} />
            WhatsApp
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 text-primary"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.nav
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden overflow-hidden"
            >
              <div className="flex flex-col gap-6 pt-8 pb-6">
                {navLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    onClick={() => setIsMenuOpen(false)}
                    className={`font-paragraph text-lg transition-colors duration-300 ${
                      isActive(link.path) 
                        ? 'text-primary font-semibold' 
                        : 'text-primary/70'
                    }`}
                  >
                    {link.label}
                  </Link>
                ))}
                <a
                  href="https://wa.me/27123456789"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 border-2 border-buttonborder bg-buttonbackground text-primary font-paragraph text-sm hover:bg-primary hover:text-primary-foreground transition-colors duration-300 w-fit"
                >
                  <MessageCircle size={18} />
                  WhatsApp
                </a>
              </div>
            </motion.nav>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
