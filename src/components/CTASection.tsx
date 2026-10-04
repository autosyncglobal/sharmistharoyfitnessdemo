import React from 'react';
import { MessageCircle, Phone, ArrowUpRight } from 'lucide-react';

export const CTASection: React.FC = () => {
  return (
    <section className="py-24 lg:py-32 relative overflow-hidden bg-[#FAF8F5]">
      <div className="max-w-5xl mx-auto px-6 sm:px-8 relative z-10">
        <div className="rounded-3xl p-10 sm:p-16 lg:p-20 bg-[#1C1816] text-[#FAF8F5] text-center relative overflow-hidden shadow-[0_20px_50px_rgba(28,24,22,0.12)]">
          
          {/* Subtle gold line accent */}
          <div className="absolute top-0 left-1/4 right-1/4 h-[1px] bg-gradient-to-r from-transparent via-[#AF8B62] to-transparent opacity-60" />

          <div className="inline-flex items-center gap-2 mb-6 justify-center">
            <span className="w-6 h-[1px] bg-[#AF8B62]" />
            <span className="text-[11px] uppercase tracking-[0.25em] text-[#AF8B62] font-medium">
              Begin Your Transformation
            </span>
            <span className="w-6 h-[1px] bg-[#AF8B62]" />
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-white tracking-tight mb-6 max-w-3xl mx-auto leading-[1.12]">
            Ready to start your <br />
            <span className="italic font-normal text-[#D8C2A7]">
              fitness journey?
            </span>
          </h2>

          <p className="text-sm sm:text-base md:text-lg text-[#EDE7DE]/80 font-light leading-relaxed mb-10 max-w-xl mx-auto">
            Take the first step toward becoming stronger, healthier and more confident with personalized guidance from Sharmistha Roy.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto">
            <a
              href="https://wa.me/919123096061?text=Hello%20Sharmistha,%20I%20am%20ready%20to%20start%20my%20fitness%20journey!"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 py-4 rounded-full bg-[#25D366] hover:bg-[#1EBE5D] text-white font-medium text-xs tracking-widest uppercase transition-all duration-300 shadow-sm hover:shadow flex items-center justify-center gap-2 group cursor-pointer active:scale-[0.98]"
            >
              <MessageCircle className="w-4 h-4 fill-current" />
              <span>Chat on WhatsApp</span>
              <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>

            <a
              href="tel:+919123096061"
              className="w-full sm:w-auto px-8 py-4 rounded-full border border-[#786F66] hover:border-white text-white font-medium text-xs tracking-widest uppercase transition-colors flex items-center justify-center gap-2"
            >
              <Phone className="w-3.5 h-3.5 text-[#AF8B62]" />
              <span>Call Now</span>
            </a>
          </div>

          <p className="text-xs text-[#A69C92] mt-10 font-light">
            Direct Line / WhatsApp: <span className="text-white font-medium">+91 9123096061</span>
          </p>

        </div>
      </div>
    </section>
  );
};
