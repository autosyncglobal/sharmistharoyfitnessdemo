import React from 'react';
import { ArrowUpRight, MessageCircle, Phone } from 'lucide-react';
import aboutImg from '../assets/images/coach_sharmistha_about_1790342117948.jpg';
import { useCoachPhoto } from '../utils/photoManager';

export const AboutSection: React.FC = () => {
  const { photoUrl, savePhoto, resetPhoto, isCustom } = useCoachPhoto('about', aboutImg);
  const [isDragging, setIsDragging] = React.useState(false);
  const aboutFileInputRef = React.useRef<HTMLInputElement>(null);

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    const file = e.dataTransfer.files?.[0];
    if (file && file.type.startsWith('image/')) {
      savePhoto(file);
    }
  };

  const pillars = [
    {
      number: '01',
      title: 'Bespoke Program Architecture',
      description: 'Custom exercise routines curated exclusively for your biomechanics, energy cycles, lifestyle tempo, and personal goals.',
    },
    {
      number: '02',
      title: 'Progressive Strength & Posture',
      description: 'Intelligent resistance training that sculpts lean muscle, improves core vitality, and builds graceful posture.',
    },
    {
      number: '03',
      title: 'Nourishment Without Deprivation',
      description: 'Sustainable, joyful nutritional guidance that works harmoniously with family dinners, social dinners, and Indian staples.',
    },
    {
      number: '04',
      title: 'Direct 1-on-1 Daily Accountability',
      description: 'Continuous personal mentorship, form reviews, motivation, and adjustments via direct WhatsApp access to Sharmistha.',
    },
  ];

  return (
    <section id="about" className="py-24 lg:py-32 relative bg-[#F5F1EB] border-y border-[#EAE4DC]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 mb-4">
            <span className="w-6 h-[1px] bg-[#AF8B62]" />
            <p className="text-[11px] uppercase tracking-[0.25em] text-[#786F66] font-medium">
              The Coach & Philosophy
            </p>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-light text-[#1C1816] tracking-tight leading-[1.15]">
            Meet your fitness coach, <br />
            <span className="italic font-normal text-[#8F6C44]">Sharmistha Roy.</span>
          </h2>
        </div>

        {/* Coach Introduction & Profile Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-14 lg:gap-16 items-start">
          
          {/* Coach Portrait */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              <div
                onDragOver={handleDragOver}
                onDragLeave={handleDragLeave}
                onDrop={handleDrop}
                onClick={() => aboutFileInputRef.current?.click()}
                className={`relative rounded-2xl overflow-hidden bg-[#EDE7DE] aspect-[4/5] shadow-[0_15px_40px_rgba(28,24,22,0.06)] border border-[#E2DAD0] transition-all duration-300 cursor-pointer group ${
                  isDragging ? 'ring-4 ring-[#AF8B62] scale-[1.01]' : ''
                }`}
                title="Click to choose your original photo file"
              >
                <input
                  ref={aboutFileInputRef}
                  type="file"
                  accept="image/png,image/jpeg,image/jpg,image/webp"
                  className="hidden"
                  onChange={(e) => {
                    const file = e.target.files?.[0];
                    if (file) savePhoto(file);
                  }}
                />

                {isDragging && (
                  <div className="absolute inset-0 z-30 bg-[#1C1816]/75 backdrop-blur-xs flex flex-col items-center justify-center p-6 text-center text-[#FAF8F5]">
                    <div className="w-16 h-16 rounded-full bg-[#AF8B62] text-white flex items-center justify-center mb-3 shadow-lg animate-bounce">
                      <ArrowUpRight className="w-8 h-8 rotate-45" />
                    </div>
                    <p className="font-serif text-xl font-normal text-white">
                      Drop Original Photo Here
                    </p>
                    <p className="text-xs text-[#EAE4DC] mt-1">
                      Stored in 100% original quality
                    </p>
                  </div>
                )}

                <img
                  src={photoUrl}
                  alt="Coach Sharmistha Roy"
                  className="w-full h-full object-cover object-top transition-all duration-500 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />
                
                {/* Vignette */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#1C1816]/75 via-transparent to-transparent pointer-events-none" />
                
                <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6 text-[#FAF8F5]">
                  <p className="text-[10px] uppercase tracking-[0.2em] text-[#D8C2A7] font-semibold">
                    Personal Fitness & Wellness Mentor
                  </p>
                  <h3 className="font-serif text-2xl font-normal text-white mt-1">
                    Sharmistha Roy
                  </h3>
                  <p className="text-xs text-[#FAF8F5]/80 mt-1 font-light">
                    Guiding women to feel strong, energized, and confident in their skin.
                  </p>
                </div>
              </div>

              {/* Minimal quote ribbon */}
              <div className="mt-4 p-4 rounded-xl bg-white/70 border border-[#EAE4DC] flex items-center justify-between">
                <div>
                  <p className="text-[11px] text-[#786F66]">Direct Line</p>
                  <p className="text-xs font-medium text-[#1C1816]">+91 9123096061</p>
                </div>
                <a
                  href="https://wa.me/919123096061?text=Hello%20Sharmistha,%20I%20would%20like%20to%20consult%20with%20you."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-[#AF8B62] hover:text-[#1C1816] font-medium flex items-center gap-1 transition-colors"
                >
                  <span>Chat on WhatsApp</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>

            </div>
          </div>

          {/* Coach Story, Philosophy & Pillars */}
          <div className="lg:col-span-7 flex flex-col items-start pt-2">
            
            <blockquote className="border-l-2 border-[#AF8B62] pl-6 mb-8 py-1">
              <p className="font-serif italic text-2xl sm:text-3xl text-[#1C1816] font-light leading-relaxed">
                "Fitness is not about punishment or exhaustion. It is the art of feeling powerful, poised, and at home in your own body."
              </p>
              <footer className="mt-3 text-xs uppercase tracking-widest text-[#786F66] font-medium">
                — Sharmistha Roy, Personal Coach
              </footer>
            </blockquote>

            <div className="space-y-4 text-[#524B45] text-base font-light leading-relaxed mb-10">
              <p>
                Whether you are stepping into a fitness routine for the first time, navigating weight changes, or desiring lean muscle tone alongside a demanding career, you deserve an empathetic mentor who crafts a path around your real life.
              </p>
              <p>
                My methodology eliminates generic gym guesswork, starvation diets, and intimidating routines. Instead, we cultivate physical strength, hormonal balance, restful sleep, and sustainable habits you will cherish for life.
              </p>
            </div>

            {/* 4 Pillars - Luxury Editorial Layout */}
            <div className="w-full space-y-4 mb-10">
              {pillars.map((pillar) => (
                <div
                  key={pillar.number}
                  className="p-6 rounded-xl bg-[#FAF8F5] border border-[#EAE4DC] hover:border-[#AF8B62]/60 transition-all duration-300 group"
                >
                  <div className="flex items-start gap-4">
                    <span className="font-serif text-lg text-[#AF8B62] font-normal shrink-0">
                      {pillar.number}
                    </span>
                    <div>
                      <h4 className="font-serif text-xl text-[#1C1816] font-normal group-hover:text-[#8F6C44] transition-colors">
                        {pillar.title}
                      </h4>
                      <p className="text-xs sm:text-sm text-[#786F66] font-light leading-relaxed mt-1.5">
                        {pillar.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Actions */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto">
              <a
                href="https://wa.me/919123096061?text=Hello%20Sharmistha,%20I%20would%20like%20to%20discuss%20working%20with%20you%20as%20my%20fitness%20coach."
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 rounded-full bg-[#1C1816] hover:bg-[#AF8B62] text-[#FAF8F5] text-xs uppercase tracking-widest font-medium transition-all duration-300 shadow-sm hover:shadow flex items-center justify-center gap-2 active:scale-[0.98]"
              >
                <MessageCircle className="w-4 h-4 fill-current" />
                <span>Work with Sharmistha</span>
              </a>

              <a
                href="tel:+919123096061"
                className="px-6 py-4 rounded-full border border-[#D8D0C5] hover:border-[#1C1816] bg-white text-[#1C1816] text-xs uppercase tracking-widest font-medium transition-all duration-300 flex items-center justify-center gap-2"
              >
                <Phone className="w-3.5 h-3.5 text-[#AF8B62]" />
                <span>Call +91 9123096061</span>
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
