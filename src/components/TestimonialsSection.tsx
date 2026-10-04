import React from 'react';
import { Quote, MessageCircle } from 'lucide-react';

export const TestimonialsSection: React.FC = () => {
  const stories = [
    {
      text: "Training with Sharmistha completely shifted my relationship with food and lifting weights. In 12 weeks, I regained muscle tone, lost stubborn waist inches, and feel energized through back-to-back workdays.",
      client: "Ritika M.",
      role: "Corporate Executive & Mother",
      category: "Bespoke Recomposition",
      metric: "-6kg & Sculpted Tone",
    },
    {
      text: "As someone who felt completely intimidated by commercial gyms, Sharmistha's patient 1-on-1 guidance gave me effortless form and confidence. I look forward to every single session now.",
      client: "Sneha P.",
      role: "Software Consultant",
      category: "Beginner Foundations",
      metric: "Zero Knee Pain & Core Strength",
    },
    {
      text: "The daily WhatsApp accountability made all the difference. Even when traveling across time zones, Sharmistha adjusted my workouts and hotel breakfast choices seamlessly without stress.",
      client: "Dr. Ananya K.",
      role: "Healthcare Professional",
      category: "Executive 1-on-1 Mentorship",
      metric: "Consistent Habit Mastery",
    },
  ];

  return (
    <section id="stories" className="py-24 lg:py-32 relative bg-[#FAF8F5]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 mb-4 justify-center">
            <span className="w-6 h-[1px] bg-[#AF8B62]" />
            <p className="text-[11px] uppercase tracking-[0.25em] text-[#786F66] font-medium">
              Client Experiences
            </p>
            <span className="w-6 h-[1px] bg-[#AF8B62]" />
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-light text-[#1C1816] tracking-tight leading-[1.15]">
            Real people, <br />
            <span className="italic font-normal text-[#8F6C44]">real transformations.</span>
          </h2>
          <p className="text-[#786F66] text-sm sm:text-base font-light mt-4 max-w-lg mx-auto leading-relaxed">
            Reflections from women who committed to bespoke coaching, balanced habits, and sustainable vitality.
          </p>
        </div>

        {/* Stories Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stories.map((item, idx) => (
            <div
              key={idx}
              className="p-8 sm:p-10 rounded-2xl bg-white border border-[#EAE4DC] hover:border-[#AF8B62]/60 transition-all duration-300 flex flex-col justify-between shadow-[0_4px_20px_rgba(28,24,22,0.02)] hover:shadow-[0_12px_32px_rgba(28,24,22,0.05)] hover:-translate-y-1 group"
            >
              <div>
                <div className="flex items-center justify-between mb-8 pb-4 border-b border-[#F0EBE3]">
                  <Quote className="w-5 h-5 text-[#AF8B62]" />
                  <span className="text-[10px] uppercase tracking-widest text-[#786F66] font-medium">
                    {item.category}
                  </span>
                </div>

                <p className="font-serif text-lg sm:text-xl text-[#1C1816] italic font-light leading-relaxed mb-8">
                  "{item.text}"
                </p>
              </div>

              <div className="pt-6 border-t border-[#F0EBE3] flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-[#1C1816]">
                    {item.client}
                  </p>
                  <p className="text-xs text-[#786F66] font-light">
                    {item.role}
                  </p>
                </div>
                <span className="text-[11px] font-mono text-[#AF8B62]">
                  {item.metric}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Invitation note */}
        <div className="mt-14 p-6 sm:p-8 rounded-2xl bg-[#F5F1EB] border border-[#EAE4DC] max-w-2xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-5 text-center sm:text-left">
          <div>
            <p className="text-xs uppercase tracking-widest text-[#AF8B62] font-semibold">
              Currently training with Sharmistha?
            </p>
            <p className="text-xs sm:text-sm text-[#524B45] font-light mt-1">
              Share your milestones and progress reflections directly with Coach Sharmistha.
            </p>
          </div>
          <a
            href="https://wa.me/919123096061?text=Hello%20Sharmistha,%20I%20would%20like%20to%20share%20my%20progress%20feedback."
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-2.5 rounded-full bg-[#1C1816] hover:bg-[#AF8B62] text-[#FAF8F5] text-xs font-medium uppercase tracking-widest transition-colors flex items-center gap-2 shrink-0"
          >
            <MessageCircle className="w-3.5 h-3.5 fill-current text-[#25D366]" />
            <span>Submit via WhatsApp</span>
          </a>
        </div>

      </div>
    </section>
  );
};
