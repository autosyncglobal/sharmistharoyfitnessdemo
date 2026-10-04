import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

export const ScrollToTop: React.FC = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 400);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
    if (document.documentElement) document.documentElement.scrollTo({ top: 0, behavior: 'smooth' });
    if (document.body) document.body.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (!visible) return null;

  return (
    <button
      onClick={scrollToTop}
      className="fixed bottom-7 right-20 sm:right-24 z-30 p-3 rounded-full bg-[#FAF8F5] hover:bg-[#1C1816] hover:text-[#FAF8F5] text-[#1C1816] border border-[#EAE4DC] shadow-[0_4px_20px_rgba(28,24,22,0.06)] transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer backdrop-blur-md"
      aria-label="Scroll to top of page"
      title="Scroll to Top"
    >
      <ArrowUp className="w-4 h-4" />
    </button>
  );
};
