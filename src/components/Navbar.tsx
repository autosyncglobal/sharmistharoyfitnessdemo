import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, MessageCircle } from 'lucide-react';

interface NavbarProps {
  onOpenBooking: () => void;
  onOpenChat: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenBooking }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Programs', href: '#programs' },
    { name: 'Philosophy', href: '#philosophy' },
    { name: 'Methodology', href: '#methodology' },
    { name: 'Stories', href: '#stories' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'FAQ', href: '#faq' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    if (href === '#home') {
      window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
      if (document.documentElement) document.documentElement.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
      if (document.body) document.body.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
      return;
    }
    const targetElement = document.querySelector(href);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#FAF8F5]/95 backdrop-blur-md border-b border-[#EAE4DC] shadow-[0_4px_30px_rgba(28,24,22,0.04)] py-3 sm:py-4'
          : 'bg-[#FAF8F5]/90 sm:bg-transparent backdrop-blur-md sm:backdrop-blur-none border-b sm:border-b-0 border-[#EAE4DC]/60 py-3.5 sm:py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex items-center justify-between">
          
          {/* Brand Wordmark */}
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, '#home')}
            className="flex flex-col text-left group focus:outline-none"
            aria-label="Sharmistha Roy Fitness Coach"
          >
            <span className="font-display text-2xl sm:text-3xl font-medium tracking-tight text-[#1C1816] group-hover:text-[#AF8B62] transition-colors duration-300">
              Sharmistha Roy
            </span>
            <span className="text-[10px] sm:text-[11px] uppercase tracking-[0.25em] text-[#786F66] font-medium mt-0.5">
              Fitness & Wellness Coach
            </span>
          </a>

          {/* Editorial Nav Links */}
          <nav className="hidden lg:flex items-center gap-8 text-[13px] tracking-wide font-medium text-[#524B45]" aria-label="Main Navigation">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="hover:text-[#1C1816] relative py-1 transition-colors duration-200 group focus:outline-none"
              >
                <span>{link.name}</span>
                <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-[#AF8B62] transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* Right Side CTAs */}
          <div className="hidden sm:flex items-center gap-3.5">
            <a
              href="tel:+919123096061"
              className="p-2.5 rounded-full border border-[#E2DAD0] hover:border-[#1C1816] text-[#524B45] hover:text-[#1C1816] bg-white/80 transition-all duration-300"
              title="Call Sharmistha Roy"
              aria-label="Call Sharmistha Roy at +91 9123096061"
            >
              <Phone className="w-3.5 h-3.5" />
            </a>

            <a
              href="https://wa.me/919123096061?text=Hello%20Sharmistha,%20I%20would%20like%20to%20learn%20more%20about%20your%20personal%20fitness%20coaching."
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-full border border-[#E2DAD0] hover:border-[#25D366] text-[#524B45] hover:text-[#128C7E] bg-white/80 transition-all duration-300"
              title="WhatsApp Sharmistha Roy"
              aria-label="WhatsApp Sharmistha Roy"
            >
              <MessageCircle className="w-3.5 h-3.5 text-[#25D366]" />
            </a>

            <button
              onClick={onOpenBooking}
              className="px-6 py-2.5 rounded-full bg-[#1C1816] hover:bg-[#AF8B62] text-[#FAF8F5] text-xs font-medium tracking-wider uppercase transition-all duration-300 shadow-sm hover:shadow active:scale-[0.98] cursor-pointer"
            >
              Start Your Fitness Journey
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <a
              href="https://wa.me/919123096061?text=Hello%20Sharmistha,%20I%20would%20like%20to%20know%20more%20about%20your%20coaching."
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full border border-[#E2DAD0] bg-white/80 text-[#25D366]"
              aria-label="WhatsApp"
            >
              <MessageCircle className="w-4 h-4" />
            </a>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-[#1C1816] hover:text-[#AF8B62] transition-colors focus:outline-none"
              aria-label="Toggle Navigation Menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Luxury Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#FAF8F5]/98 border-b border-[#EAE4DC] px-6 pt-5 pb-8 backdrop-blur-xl shadow-xl transition-all">
          <nav className="flex flex-col gap-3.5">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`text-lg font-serif py-2 border-b border-[#F0EBE3] transition-colors flex items-center justify-between ${
                  link.name === 'Home'
                    ? 'text-[#AF8B62] font-medium'
                    : 'text-[#1C1816] hover:text-[#AF8B62]'
                }`}
              >
                <span>{link.name}</span>
                {link.name === 'Home' && (
                  <span className="text-[10px] uppercase font-sans tracking-widest px-2.5 py-0.5 rounded-full bg-[#AF8B62]/10 text-[#AF8B62] font-semibold">
                    1st · Top
                  </span>
                )}
              </a>
            ))}
            <div className="pt-4 flex flex-col gap-3">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenBooking();
                }}
                className="w-full py-3.5 rounded-full bg-[#1C1816] text-[#FAF8F5] font-medium text-xs uppercase tracking-widest text-center shadow-md active:scale-[0.98]"
              >
                Start Your Fitness Journey
              </button>
              <div className="grid grid-cols-2 gap-2.5 pt-1">
                <a
                  href="https://wa.me/919123096061?text=Hello%20Sharmistha,%20I%20would%20like%20to%20enquire%20about%20personal%20fitness%20coaching."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-2.5 px-3 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200/60 text-xs font-medium text-center flex items-center justify-center gap-1.5"
                >
                  <MessageCircle className="w-3.5 h-3.5 text-emerald-600" />
                  WhatsApp
                </a>
                <a
                  href="tel:+919123096061"
                  className="py-2.5 px-3 rounded-full bg-[#F5F1EB] text-[#1C1816] border border-[#E2DAD0] text-xs font-medium text-center flex items-center justify-center gap-1.5"
                >
                  <Phone className="w-3.5 h-3.5 text-[#AF8B62]" />
                  Call Now
                </a>
              </div>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
