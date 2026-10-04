import React from 'react';
import { ArrowUpRight } from 'lucide-react';

interface JourneySectionProps {
  onStartToday: () => void;
}

export const JourneySection: React.FC<JourneySectionProps> = ({ onStartToday }) => {
  const steps = [
    {
      step: '01',
      title: 'Discover',
      description: 'We explore your daily rhythms, history, energy levels, and specific body aspirations during an in-depth conversation.',
      note: 'Foundational intake & baseline alignment',
    },
    {
      step: '02',
      title: 'Plan',
      description: 'Sharmistha develops your personalized workout sequence and joyful nutrition principles calibrated to your real schedule.',
      note: 'Custom exercise & nourishment architecture',
    },
    {
      step: '03',
      title: 'Train',
      description: 'Execute your workouts with ongoing guidance, posture refinements, and daily accountability directly on WhatsApp.',
      note: 'Form precision & daily habit mastery',
    },
    {
      step: '04',
      title: 'Transform',
      description: 'Witness physical strength, sculpted tone, metabolic vitality, and genuine body confidence take root for the long run.',
      note: 'Lasting health & personal empowerment',
    },
  ];

  return (
    <section id="methodology" className="py-24 lg:py-32 relative bg-[#FAF8F5]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 mb-4 justify-center">
            <span className="w-6 h-[1px] bg-[#AF8B62]" />
            <p className="text-[11px] uppercase tracking-[0.25em] text-[#786F66] font-medium">
              The 4-Step Pathway
            </p>
            <span className="w-6 h-[1px] bg-[#AF8B62]" />
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-light text-[#1C1816] tracking-tight leading-[1.15]">
            The journey to your <br />
            <span className="italic font-normal text-[#8F6C44]">highest vitality.</span>
          </h2>
          <p className="text-[#786F66] text-sm sm:text-base font-light mt-4 max-w-xl mx-auto leading-relaxed">
            An empowering, step-by-step roadmap that builds lasting strength, graceful poise, and sustainable habits without burnout.
          </p>
        </div>

        {/* Timeline Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {steps.map((st) => (
            <div
              key={st.step}
              className="relative p-8 rounded-2xl bg-white border border-[#EAE4DC] hover:border-[#AF8B62]/60 transition-all duration-300 flex flex-col justify-between shadow-[0_4px_20px_rgba(28,24,22,0.02)] hover:shadow-[0_12px_32px_rgba(28,24,22,0.05)] hover:-translate-y-1 group"
            >
              <div>
                {/* Step Number */}
                <div className="flex items-center justify-between mb-8 pb-4 border-b border-[#F0EBE3]">
                  <span className="font-mono text-xs text-[#AF8B62]">
                    Phase {st.step}
                  </span>
                  <span className="w-2 h-2 rounded-full bg-[#AF8B62]/30 group-hover:bg-[#AF8B62] transition-colors" />
                </div>

                {/* Title & Description */}
                <h3 className="font-serif text-2xl text-[#1C1816] mb-3 group-hover:text-[#8F6C44] transition-colors font-normal">
                  {st.title}
                </h3>
                <p className="text-[#524B45] text-xs sm:text-sm font-light leading-relaxed mb-6">
                  {st.description}
                </p>
              </div>

              {/* Sub-note */}
              <div className="pt-4 border-t border-[#F0EBE3] text-[11px] text-[#A69C92] font-serif italic">
                {st.note}
              </div>
            </div>
          ))}
        </div>

        {/* Action Button */}
        <div className="mt-16 text-center">
          <button
            onClick={onStartToday}
            className="inline-flex items-center gap-2.5 px-9 py-4 rounded-full bg-[#1C1816] hover:bg-[#AF8B62] text-[#FAF8F5] text-xs uppercase tracking-widest font-medium transition-all duration-300 shadow-sm hover:shadow active:scale-[0.98] cursor-pointer"
          >
            <span>Start Today</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
};
