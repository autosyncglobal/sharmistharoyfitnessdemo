import React from 'react';
import { Target, Calendar, ShieldCheck, Sparkles, Check } from 'lucide-react';

export const WhyWorkWithSection: React.FC = () => {
  const features = [
    {
      number: '01',
      title: 'Personalized approach',
      description: 'Your fitness journey is built around your individual goals, lifestyle, stress levels, and current baseline.',
      icon: Target,
      tag: 'Tailored for You',
      details: 'No cookie-cutter templates. Every movement and habit is calibrated to your body.',
    },
    {
      number: '02',
      title: 'Sustainable consistency',
      description: 'Build routines and rituals that seamlessly adapt to your work weeks, holidays, and family commitments.',
      icon: Calendar,
      tag: 'Pacing that Lasts',
      details: 'Frictionless micro-habits that survive busy schedules and prevent burnout.',
    },
    {
      number: '03',
      title: 'Direct accountability',
      description: 'Stay inspired with gentle, structured guidance, form checks, and daily personal WhatsApp communication.',
      icon: ShieldCheck,
      tag: 'Continuous Support',
      details: 'Immediate answers to workout questions and ongoing reassurance whenever you need it.',
    },
    {
      number: '04',
      title: 'Radiant confidence',
      description: 'Feel visibly stronger, poised, and at peace with your body, food, and long-term health trajectory.',
      icon: Sparkles,
      tag: 'True Transformation',
      details: 'Noticeable posture improvements, metabolic vigor, and genuine body pride.',
    },
  ];

  return (
    <section id="philosophy" className="py-24 lg:py-32 bg-[#F5F1EB] relative border-t border-[#EAE4DC]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 mb-4 justify-center">
            <span className="w-6 h-[1px] bg-[#AF8B62]" />
            <p className="text-[11px] uppercase tracking-[0.25em] text-[#786F66] font-medium">
              The Coaching Difference
            </p>
            <span className="w-6 h-[1px] bg-[#AF8B62]" />
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-light text-[#1C1816] tracking-tight text-balance leading-[1.15]">
            More than just workouts, <br />
            <span className="italic font-normal text-[#8F6C44]">a sustainable way of living.</span>
          </h2>
          <p className="text-[#786F66] text-sm sm:text-base font-light mt-4 max-w-xl mx-auto leading-relaxed">
            True transformation happens at the intersection of empathetic coaching, scientific programming, and realistic daily habits.
          </p>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {features.map((feat) => {
            const IconComp = feat.icon;
            return (
              <div
                key={feat.number}
                className="group relative p-8 sm:p-10 rounded-2xl bg-[#FAF8F5] border border-[#EAE4DC] hover:border-[#AF8B62]/60 transition-all duration-300 shadow-[0_4px_20px_rgba(28,24,22,0.02)] hover:shadow-[0_12px_32px_rgba(28,24,22,0.05)] flex flex-col justify-between"
              >
                <div>
                  {/* Top row: Number & Tag */}
                  <div className="flex items-center justify-between mb-8 pb-4 border-b border-[#F0EBE3]">
                    <span className="font-serif text-3xl text-[#AF8B62] font-normal">
                      {feat.number}
                    </span>
                    <span className="text-[11px] font-medium text-[#786F66] tracking-wider uppercase">
                      {feat.tag}
                    </span>
                  </div>

                  {/* Icon & Title */}
                  <div className="flex items-center gap-3.5 mb-4">
                    <div className="p-2.5 rounded-full bg-[#EDE7DE] text-[#1C1816] group-hover:bg-[#1C1816] group-hover:text-[#FAF8F5] transition-colors duration-300">
                      <IconComp className="w-4 h-4" />
                    </div>
                    <h3 className="font-serif text-2xl text-[#1C1816] font-normal group-hover:text-[#8F6C44] transition-colors">
                      {feat.title}
                    </h3>
                  </div>

                  {/* Description */}
                  <p className="text-[#524B45] text-sm sm:text-base font-light leading-relaxed">
                    {feat.description}
                  </p>
                </div>

                {/* Sub details */}
                <div className="mt-8 pt-5 border-t border-[#F0EBE3] flex items-center gap-2.5 text-xs text-[#786F66] font-light">
                  <Check className="w-3.5 h-3.5 text-[#AF8B62] shrink-0" />
                  <span>{feat.details}</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
