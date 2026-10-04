import React, { useState } from 'react';
import { Plus, Minus, MessageCircle, Phone } from 'lucide-react';

export const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "Who is fitness coaching for?",
      answer: "Fitness coaching is suitable for beginners and people at all fitness levels. Your program is customized around your individual lifestyle, physical baseline, and personal health goals.",
    },
    {
      question: "Can beginners join?",
      answer: "Yes, absolutely. A significant portion of Sharmistha's clients are beginners. You will receive gentle, step-by-step guidance on exercise form, movement confidence, and positive habit formation.",
    },
    {
      question: "How do I get started?",
      answer: "Simply connect with Sharmistha Roy through WhatsApp or a phone call (+91 9123096061) to schedule an initial discovery conversation and discuss your goals.",
    },
    {
      question: "Is the coaching personalized?",
      answer: "Yes, 100%. Every workout plan, progression cycle, and lifestyle recommendation is designed specifically around your body, hormonal rhythm, home/gym preference, and schedule constraints.",
    },
    {
      question: "How can I contact Sharmistha?",
      answer: "You can call or WhatsApp directly at +91 9123096061. Sharmistha personally reviews and responds to client inquiries.",
    },
  ];

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-24 lg:py-32 relative bg-[#F5F1EB] border-t border-[#EAE4DC]">
      <div className="max-w-4xl mx-auto px-6 sm:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 mb-4 justify-center">
            <span className="w-6 h-[1px] bg-[#AF8B62]" />
            <p className="text-[11px] uppercase tracking-[0.25em] text-[#786F66] font-medium">
              Clarity & Inquiries
            </p>
            <span className="w-6 h-[1px] bg-[#AF8B62]" />
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-light text-[#1C1816] tracking-tight leading-[1.15]">
            Frequently asked <br />
            <span className="italic font-normal text-[#8F6C44]">questions.</span>
          </h2>
          <p className="text-[#786F66] text-sm sm:text-base font-light mt-4 max-w-md mx-auto leading-relaxed">
            Essential details on how personal fitness and wellness coaching works with Sharmistha Roy.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="rounded-2xl bg-[#FAF8F5] border border-[#EAE4DC] overflow-hidden transition-all duration-300"
              >
                <button
                  onClick={() => toggleAccordion(idx)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 cursor-pointer focus:outline-none hover:bg-white transition-colors"
                  aria-expanded={isOpen}
                >
                  <span className="font-serif text-xl sm:text-2xl text-[#1C1816] font-normal">
                    {faq.question}
                  </span>
                  <div className="w-8 h-8 rounded-full border border-[#D8D0C5] text-[#1C1816] flex items-center justify-center shrink-0">
                    {isOpen ? <Minus className="w-3.5 h-3.5" /> : <Plus className="w-3.5 h-3.5" />}
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 text-[#524B45] text-sm sm:text-base font-light leading-relaxed border-t border-[#F0EBE3] pt-4">
                    <p>{faq.answer}</p>
                    
                    {idx === 4 && (
                      <div className="mt-5 flex flex-wrap gap-3">
                        <a
                          href="https://wa.me/919123096061?text=Hello%20Sharmistha,%20I%20would%20like%20to%20learn%20more%20about%20your%20coaching."
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#1C1816] hover:bg-[#AF8B62] text-[#FAF8F5] text-xs font-medium uppercase tracking-widest transition-colors shadow-sm"
                        >
                          <MessageCircle className="w-3.5 h-3.5 text-[#25D366] fill-current" />
                          <span>WhatsApp: 9123096061</span>
                        </a>
                        <a
                          href="tel:+919123096061"
                          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-[#D8D0C5] bg-white text-[#1C1816] text-xs font-medium uppercase tracking-widest"
                        >
                          <Phone className="w-3.5 h-3.5 text-[#AF8B62]" />
                          <span>Call: 9123096061</span>
                        </a>
                      </div>
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Still have questions? */}
        <div className="mt-14 text-center">
          <p className="text-xs sm:text-sm text-[#786F66] font-light">
            Have a personal inquiry not answered here?{' '}
            <a
              href="https://wa.me/919123096061?text=Hello%20Sharmistha,%20I%20have%20a%20specific%20question%20regarding%20fitness%20coaching."
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#1C1816] hover:text-[#AF8B62] font-medium underline underline-offset-4 decoration-[#AF8B62] transition-colors"
            >
              Ask Coach Sharmistha directly on WhatsApp &rarr;
            </a>
          </p>
        </div>

      </div>
    </section>
  );
};
