import React, { useState } from 'react';
import { MessageCircle } from 'lucide-react';

export const FloatingWhatsApp: React.FC = () => {
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <div className="fixed bottom-7 right-7 z-40 flex items-center gap-3">
      {/* Tooltip */}
      <div
        className={`hidden sm:block px-4 py-2 rounded-full bg-[#FAF8F5] border border-[#EAE4DC] text-[#1C1816] text-xs font-medium shadow-[0_4px_20px_rgba(28,24,22,0.08)] transition-all duration-300 pointer-events-none ${
          showTooltip ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-2'
        }`}
      >
        <span className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#25D366] animate-pulse" />
          Chat with Coach Sharmistha
        </span>
      </div>

      {/* Floating Button */}
      <a
        href="https://wa.me/919123096061?text=Hello%20Sharmistha,%20I%20would%20like%20to%20know%20more%20about%20your%20fitness%20coaching."
        target="_blank"
        rel="noopener noreferrer"
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
        className="relative group p-4 rounded-full bg-[#25D366] hover:bg-[#1EBE5D] text-white shadow-[0_8px_30px_rgba(37,211,102,0.35)] transition-all duration-300 hover:scale-105 active:scale-95 flex items-center justify-center cursor-pointer"
        aria-label="Chat with Sharmistha on WhatsApp at +91 9123096061"
      >
        <span className="absolute -inset-1 rounded-full bg-[#25D366] opacity-30 group-hover:opacity-50 animate-ping pointer-events-none" />
        <MessageCircle className="w-6 h-6 relative z-10 fill-current" />
      </a>
    </div>
  );
};
