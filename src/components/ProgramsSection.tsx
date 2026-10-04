import React from 'react';
import { ArrowUpRight, MessageCircle } from 'lucide-react';
import { ProgramItem } from '../types';

export const ProgramsSection: React.FC = () => {
  const programs: ProgramItem[] = [
    {
      id: 'weight-management',
      title: 'Weight Management',
      subtitle: 'Metabolic Balance & Longevity',
      description: 'A hormone-conscious, sustainable body composition protocol focused on mindful nourishment and energetic freedom.',
      highlights: [
        'Balanced, joyful meals without restrictive starvation',
        'Metabolism-boosting resistance conditioning',
        'Body composition & energy optimization',
      ],
      icon: 'Scale',
      targetAudience: 'Ideal for sustainable fat loss & vibrant daily energy',
    },
    {
      id: 'strength-fitness',
      title: 'Strength & Fitness',
      subtitle: 'Sculpted Tone & Core Power',
      description: 'Intelligent progressive strength routines designed to build sculpted, lean muscle, graceful posture, and everyday vitality.',
      highlights: [
        'Targeted muscle toning & functional movement',
        'Core stability, posture & pelvic alignment',
        'Elevated stamina & joint longevity',
      ],
      icon: 'Zap',
      targetAudience: 'Ideal for building lean definition & athletic grace',
    },
    {
      id: 'beginner-fitness',
      title: 'Beginner Fitness',
      subtitle: 'Gentle, Confident Foundations',
      description: 'A comforting, zero-intimidation introduction to fitness that builds biomechanical confidence, form mastery, and positive consistency.',
      highlights: [
        'Step-by-step guided movement execution',
        'Gentle pacing adapted to your comfort level',
        'Home-friendly or boutique gym entry plan',
      ],
      icon: 'Compass',
      targetAudience: 'Ideal for beginners & women restarting their journey',
    },
    {
      id: 'personal-coaching',
      title: 'Personal Coaching',
      subtitle: 'Bespoke 1-on-1 Mentorship',
      description: 'The highest touch coaching tier. Comprehensive daily synchronization between your work schedule, travel, stress, and workouts.',
      highlights: [
        'Direct daily WhatsApp access & regular check-ins',
        'Agile schedule adjustments for travel & busy weeks',
        'Holistic sleep, stress & lifestyle habit integration',
      ],
      icon: 'UserCheck',
      targetAudience: 'Ideal for busy professionals seeking dedicated mentorship',
    },
  ];

  return (
    <section id="programs" className="py-24 lg:py-32 relative bg-[#FAF8F5]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 sm:mb-20 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 mb-4">
              <span className="w-6 h-[1px] bg-[#AF8B62]" />
              <p className="text-[11px] uppercase tracking-[0.25em] text-[#786F66] font-medium">
                Tailored Offerings
              </p>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-light text-[#1C1816] tracking-tight leading-[1.15]">
              Curated programs for <br />
              <span className="italic font-normal text-[#8F6C44]">lasting transformation.</span>
            </h2>
          </div>
          <p className="text-[#786F66] text-sm sm:text-base font-light max-w-md">
            Each program is personalized to your individual routine, biomechanics, and wellness milestones under Sharmistha's direct supervision.
          </p>
        </div>

        {/* 4 Program Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {programs.map((prog, index) => {
            const encodedMsg = encodeURIComponent(
              `Hello Sharmistha, I would like to enquire about your ${prog.title} program.`
            );
            const waLink = `https://wa.me/919123096061?text=${encodedMsg}`;

            return (
              <div
                key={prog.id}
                className="group relative rounded-2xl bg-white border border-[#EAE4DC] hover:border-[#AF8B62]/60 p-7 flex flex-col justify-between transition-all duration-300 shadow-[0_4px_20px_rgba(28,24,22,0.02)] hover:shadow-[0_12px_32px_rgba(28,24,22,0.06)] hover:-translate-y-1"
              >
                <div>
                  {/* Top Index & Tag */}
                  <div className="flex items-center justify-between mb-6 pb-4 border-b border-[#F0EBE3]">
                    <span className="text-[11px] font-mono text-[#AF8B62]">
                      0{index + 1}
                    </span>
                    <span className="text-[10px] uppercase tracking-widest text-[#786F66] font-medium">
                      Bespoke Plan
                    </span>
                  </div>

                  {/* Card Title & Subtitle */}
                  <h3 className="font-serif text-2xl text-[#1C1816] font-normal group-hover:text-[#8F6C44] transition-colors">
                    {prog.title}
                  </h3>
                  <p className="text-xs text-[#AF8B62] font-medium mt-1 mb-3">
                    {prog.subtitle}
                  </p>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-[#524B45] font-light leading-relaxed mb-6">
                    {prog.description}
                  </p>

                  {/* Key Highlights */}
                  <ul className="space-y-2 mb-6 border-t border-[#F0EBE3] pt-4">
                    {prog.highlights.map((h, i) => (
                      <li key={i} className="text-xs text-[#786F66] flex items-start gap-2 font-light">
                        <span className="text-[#AF8B62] mt-0.5">•</span>
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Bottom Target & CTA */}
                <div className="pt-4 border-t border-[#F0EBE3]">
                  <p className="text-[11px] text-[#A69C92] italic mb-4 font-serif">
                    {prog.targetAudience}
                  </p>
                  <a
                    href={waLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-3 px-4 rounded-full border border-[#D8D0C5] group-hover:border-[#1C1816] group-hover:bg-[#1C1816] group-hover:text-[#FAF8F5] text-[#1C1816] text-xs font-medium uppercase tracking-wider transition-all duration-300 flex items-center justify-center gap-2"
                  >
                    <MessageCircle className="w-3.5 h-3.5 text-[#25D366] group-hover:text-white" />
                    <span>Enquire on WhatsApp</span>
                    <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* Note below programs */}
        <div className="mt-14 p-6 rounded-2xl bg-[#F5F1EB] border border-[#EAE4DC] flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs sm:text-sm text-[#524B45] font-light text-center sm:text-left">
            Unsure which pathway fits your routine best? Chat directly with Sharmistha for personalized guidance.
          </p>
          <a
            href="https://wa.me/919123096061?text=Hello%20Sharmistha,%20I%20am%20unsure%20which%20program%20fits%20me%20best.%20Could%20we%20discuss?"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-2.5 rounded-full bg-[#1C1816] hover:bg-[#AF8B62] text-[#FAF8F5] text-xs uppercase tracking-widest font-medium transition-colors shrink-0 whitespace-nowrap"
          >
            Direct WhatsApp Consult
          </a>
        </div>

      </div>
    </section>
  );
};
