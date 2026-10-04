import React from 'react';
import { ArrowUpRight, Phone, MessageCircle } from 'lucide-react';
import heroImg from '../assets/images/coach_sharmistha_hero_1790342103843.jpg';
import { useCoachPhoto } from '../utils/photoManager';

interface HeroProps {
  onStartJourney: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onStartJourney }) => {
  const { photoUrl, savePhoto, resetPhoto, isCustom } = useCoachPhoto('hero', heroImg);
  const [isDragging, setIsDragging] = React.useState(false);
  const heroFileInputRef = React.useRef<HTMLInputElement>(null);

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
  return (
    <section id="home" className="relative min-h-[90vh] pt-28 pb-16 sm:pt-32 sm:pb-20 lg:pt-40 lg:pb-28 flex items-center bg-[#FAF8F5] overflow-hidden">
      {/* Subtle editorial backdrop element */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-[#F5F1EB]/50 pointer-events-none hidden lg:block" />
      <div className="absolute top-1/4 left-1/3 w-[500px] h-[500px] bg-[#EDE7DE]/40 blur-[130px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Column: Editorial Headline & Copy */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            
            {/* Elegant Brand Kicker */}
            <div className="inline-flex items-center gap-2.5 mb-7">
              <span className="w-8 h-[1px] bg-[#AF8B62]" />
              <span className="text-[11px] sm:text-xs uppercase tracking-[0.25em] text-[#786F66] font-medium">
                Bespoke Fitness & Wellness Mentorship
              </span>
            </div>

            {/* Main Headline - Cormorant Garamond with selective italic emphasis */}
            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl xl:text-[4.25rem] font-light text-[#1C1816] leading-[1.08] tracking-tight mb-7 max-w-2xl text-balance">
              Build a stronger, <br />
              <span className="italic font-normal text-[#8F6C44]">
                healthier you.
              </span>
            </h1>

            {/* Supporting Text - Refined Manrope */}
            <p className="text-base sm:text-lg text-[#524B45] font-light leading-relaxed mb-10 max-w-xl">
              Personalized fitness coaching designed to help you build healthy habits, improve your strength, and become the best version of yourself.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 w-full sm:w-auto mb-10">
              <button
                onClick={onStartJourney}
                className="group px-8 py-4 rounded-full bg-[#1C1816] hover:bg-[#AF8B62] text-[#FAF8F5] text-xs uppercase tracking-widest font-medium transition-all duration-300 shadow-sm hover:shadow-md flex items-center justify-center gap-2.5 active:scale-[0.98] cursor-pointer"
              >
                <span>Start Your Journey</span>
                <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </button>

              <a
                href="https://wa.me/919123096061?text=Hello%20Sharmistha,%20I%20would%20like%20to%20start%20my%20fitness%20journey%20with%20you."
                target="_blank"
                rel="noopener noreferrer"
                className="px-7 py-4 rounded-full bg-[#25D366] hover:bg-[#1EBE5D] text-white text-xs uppercase tracking-widest font-medium transition-all duration-300 shadow-sm hover:shadow flex items-center justify-center gap-2 active:scale-[0.98]"
              >
                <MessageCircle className="w-4 h-4 fill-current" />
                <span>WhatsApp Now</span>
              </a>

              <a
                href="tel:+919123096061"
                className="px-6 py-4 rounded-full border border-[#D8D0C5] hover:border-[#1C1816] bg-transparent text-[#1C1816] text-xs uppercase tracking-widest font-medium transition-all duration-300 flex items-center justify-center gap-2"
                aria-label="Direct Phone Call to 9123096061"
              >
                <Phone className="w-3.5 h-3.5 text-[#AF8B62]" />
                <span>+91 9123096061</span>
              </a>
            </div>

            {/* Trust Line */}
            <div className="pt-2 text-xs sm:text-sm text-[#786F66] flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-[#AF8B62]" />
              <p className="tracking-wide">
                Personalized Coaching <span className="mx-1.5 text-[#C4B9AD]">·</span> Expert Guidance <span className="mx-1.5 text-[#C4B9AD]">·</span> Real Results
              </p>
            </div>

            {/* Credibility Highlights */}
            <div className="grid grid-cols-3 gap-3 sm:gap-10 mt-8 sm:mt-10 pt-6 sm:pt-8 border-t border-[#EAE4DC] w-full max-w-xl">
              <div>
                <p className="font-serif text-2xl sm:text-3xl text-[#1C1816] font-normal">100%</p>
                <p className="text-[10px] sm:text-[11px] uppercase tracking-wider text-[#786F66] mt-1">Personalized</p>
              </div>
              <div>
                <p className="font-serif text-2xl sm:text-3xl text-[#1C1816] font-normal">1-on-1</p>
                <p className="text-[10px] sm:text-[11px] uppercase tracking-wider text-[#786F66] mt-1">Mentorship</p>
              </div>
              <div>
                <p className="font-serif text-2xl sm:text-3xl text-[#1C1816] font-normal">Daily</p>
                <p className="text-[10px] sm:text-[11px] uppercase tracking-wider text-[#786F66] mt-1">Accountability</p>
              </div>
            </div>

          </div>

          {/* Right Column: Editorial Hero Portrait */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Subtle architectural frame line */}
              <div className="absolute -inset-3 border border-[#E2DAD0] rounded-3xl -z-10 translate-x-2 translate-y-2 hidden sm:block" />
              
              <div
                onDragOver={handleDragOver}
                onDragLeave={handleDragLeave}
                onDrop={handleDrop}
                onClick={() => heroFileInputRef.current?.click()}
                className={`relative rounded-2xl overflow-hidden bg-[#EDE7DE] aspect-[3/4] shadow-[0_20px_50px_rgba(28,24,22,0.08)] transition-all duration-300 cursor-pointer group ${
                  isDragging ? 'ring-4 ring-[#AF8B62] scale-[1.01]' : ''
                }`}
                title="Click to choose your original photo file"
              >
                <input
                  ref={heroFileInputRef}
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
                  alt="Fitness Coach Sharmistha Roy"
                  className="w-full h-full object-cover object-top transition-transform duration-1000 ease-out group-hover:scale-105"
                  referrerPolicy="no-referrer"
                  loading="eager"
                />

                {/* Soft gradient bottom vignette */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#1C1816]/70 via-transparent to-transparent pointer-events-none" />

                {/* Floating caption card */}
                <div
                  onClick={(e) => e.stopPropagation()}
                  className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6 p-4 sm:p-5 rounded-xl bg-[#FAF8F5]/95 backdrop-blur-md border border-[#EAE4DC] shadow-lg flex items-center justify-between"
                >
                  <div>
                    <span className="text-[10px] uppercase tracking-[0.2em] text-[#AF8B62] font-semibold block">
                      Lead Fitness Coach
                    </span>
                    <p className="font-serif text-lg text-[#1C1816] mt-0.5 leading-snug">
                      Sharmistha Roy
                    </p>
                    <p className="text-xs text-[#786F66] mt-0.5">
                      Dedicated to women's strength & health
                    </p>
                  </div>
                  <a
                    href="https://wa.me/919123096061?text=Hello%20Sharmistha,%20I%20would%20like%20to%20consult%20with%20you."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-full bg-[#1C1816] hover:bg-[#AF8B62] text-[#FAF8F5] transition-all duration-300 shrink-0 ml-3"
                    title="Direct WhatsApp"
                  >
                    <MessageCircle className="w-4 h-4 fill-current" />
                  </a>
                </div>

              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
