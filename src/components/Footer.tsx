import React from 'react';
import { Phone, MessageCircle, ArrowUpRight } from 'lucide-react';

export const Footer: React.FC = () => {
  const quickLinks = [
    { name: 'About', href: '#about' },
    { name: 'Programs', href: '#programs' },
    { name: 'Philosophy', href: '#philosophy' },
    { name: 'Methodology', href: '#methodology' },
    { name: 'Benefits', href: '#benefits' },
    { name: 'Private Consultation', href: '#booking' },
    { name: 'Editorial Portfolio', href: '#gallery' },
    { name: 'Client Stories', href: '#stories' },
    { name: 'FAQ', href: '#faq' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    if (href === '#home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    const targetElement = document.querySelector(href);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-[#141211] text-[#A69C92] pt-20 pb-12 border-t border-[#2A2421]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-16 border-b border-[#2A2421]">
          
          {/* Brand Col */}
          <div className="md:col-span-5">
            <a
              href="#home"
              onClick={(e) => handleNavClick(e, '#home')}
              className="inline-block mb-4 focus:outline-none"
            >
              <span className="font-serif text-3xl font-light text-[#FAF8F5] tracking-tight block">
                Sharmistha Roy
              </span>
              <span className="text-[10px] uppercase tracking-[0.25em] text-[#AF8B62] font-medium mt-1 block">
                Fitness & Wellness Coach
              </span>
            </a>
            
            <p className="font-serif text-lg text-[#EDE7DE] italic font-light mt-3 max-w-sm leading-relaxed">
              "Build strength. Build confidence. Build a healthier life."
            </p>

            <p className="text-xs text-[#786F66] font-light mt-4 leading-relaxed max-w-sm">
              Personalized fitness guidance, progressive resistance programming, and sustainable daily habits tailored specifically for women and busy professionals.
            </p>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3">
            <h4 className="text-[11px] uppercase tracking-[0.2em] text-[#FAF8F5] font-medium mb-6">
              Navigation
            </h4>
            <ul className="space-y-3 text-xs">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="hover:text-[#FAF8F5] text-[#A69C92] transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Direct Contact */}
          <div className="md:col-span-4">
            <h4 className="text-[11px] uppercase tracking-[0.2em] text-[#FAF8F5] font-medium mb-6">
              Private Inquiries
            </h4>
            <div className="space-y-4 text-xs font-light">
              <div>
                <span className="text-[10px] uppercase tracking-wider text-[#786F66] block">Direct Telephone</span>
                <a
                  href="tel:+919123096061"
                  className="text-[#FAF8F5] hover:text-[#AF8B62] font-medium inline-flex items-center gap-2 mt-1 transition-colors text-sm"
                >
                  <Phone className="w-3.5 h-3.5 text-[#AF8B62]" />
                  +91 9123096061
                </a>
              </div>

              <div>
                <span className="text-[10px] uppercase tracking-wider text-[#786F66] block">WhatsApp Concierge</span>
                <a
                  href="https://wa.me/919123096061"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#FAF8F5] hover:text-[#25D366] font-medium inline-flex items-center gap-2 mt-1 transition-colors text-sm"
                >
                  <MessageCircle className="w-3.5 h-3.5 text-[#25D366]" />
                  +91 9123096061
                </a>
              </div>

              <div className="pt-4">
                <a
                  href="https://wa.me/919123096061?text=Hello%20Sharmistha,%20I%20would%20like%20to%20start%20my%20fitness%20journey."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#FAF8F5] hover:bg-[#AF8B62] text-[#141211] hover:text-[#FAF8F5] font-medium text-xs uppercase tracking-widest transition-all duration-300"
                >
                  <span>Start Your Journey</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-[#786F66] gap-4 font-light">
          <p>
            © 2026 Sharmistha Roy Fitness. All Rights Reserved.
          </p>
          <div className="flex items-center gap-3">
            <span>Bespoke Mentorship</span>
            <span>·</span>
            <span>Progressive Strength</span>
            <span>·</span>
            <span>Empowering Women</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
