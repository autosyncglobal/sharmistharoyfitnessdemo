import React from 'react';
import { UserCheck, CheckCircle2, ShieldCheck, HeartHandshake } from 'lucide-react';

export const CoachingBenefitsSection: React.FC = () => {
  const pillars = [
    {
      title: 'Personalized',
      subtitle: 'coaching',
      caption: 'Every workout and habit is calibrated to your current fitness level, hormonal rhythm, and daily schedule.',
      icon: UserCheck,
    },
    {
      title: 'Structured',
      subtitle: 'workouts',
      caption: 'A step-by-step progression roadmap that eliminates guesswork, avoids injuries, and builds genuine strength.',
      icon: CheckCircle2,
    },
    {
      title: 'Healthy',
      subtitle: 'habits',
      caption: 'Sustainable routines, balanced lifestyle rituals, and nourishment habits that fit seamlessly into real life.',
      icon: ShieldCheck,
    },
    {
      title: 'Ongoing',
      subtitle: 'support',
      caption: 'Continuous guidance, form feedback, and direct personal WhatsApp accountability with Coach Sharmistha.',
      icon: HeartHandshake,
    },
  ];

  return (
    <section id="benefits" className="py-24 lg:py-32 bg-[#F5F1EB] border-y border-[#EAE4DC] relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 mb-4 justify-center">
            <span className="w-6 h-[1px] bg-[#AF8B62]" />
            <p className="text-[11px] uppercase tracking-[0.25em] text-[#786F66] font-medium">
              Core Foundations
            </p>
            <span className="w-6 h-[1px] bg-[#AF8B62]" />
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-light text-[#1C1816] tracking-tight leading-[1.15]">
            Coaching benefits, <br />
            <span className="italic font-normal text-[#8F6C44]">built for lasting vitality.</span>
          </h2>
          <p className="text-[#786F66] text-sm sm:text-base font-light mt-4 max-w-xl mx-auto leading-relaxed">
            The four essential pillars of your personal training partnership with Sharmistha Roy.
          </p>
        </div>

        {/* 4 Pillars in Clean Luxury Editorial Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div
                key={idx}
                className="p-8 rounded-2xl bg-[#FAF8F5] border border-[#EAE4DC] hover:border-[#AF8B62]/60 transition-all duration-300 text-center flex flex-col items-center justify-between shadow-[0_4px_20px_rgba(28,24,22,0.02)] hover:shadow-[0_12px_32px_rgba(28,24,22,0.05)] hover:-translate-y-1"
              >
                <div className="p-3 rounded-full bg-[#EDE7DE] text-[#1C1816] mb-6">
                  <Icon className="w-5 h-5" />
                </div>
                
                <div className="mb-4">
                  <h3 className="font-serif text-2xl text-[#1C1816] font-normal leading-tight">
                    {pillar.title}
                  </h3>
                  <p className="font-serif italic text-xl text-[#8F6C44]">
                    {pillar.subtitle}
                  </p>
                </div>

                <p className="text-xs sm:text-sm text-[#786F66] font-light leading-relaxed max-w-xs">
                  {pillar.caption}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
