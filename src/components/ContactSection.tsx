import React, { useState } from 'react';
import { Phone, MessageCircle, ArrowUpRight, Check, Clock } from 'lucide-react';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    goal: 'Weight Management & Toning',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name.trim() || !formData.phone.trim()) {
      return;
    }

    const prefilledText = `Hello Sharmistha, I would like to know more about your fitness coaching.

Name: ${formData.name.trim()}
Phone: ${formData.phone.trim()}
Aspiration: ${formData.goal}
Message: ${formData.message.trim() || 'I am ready to get started.'}`;

    const waUrl = `https://wa.me/919123096061?text=${encodeURIComponent(prefilledText)}`;

    setSubmitted(true);
    window.open(waUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="contact" className="py-24 lg:py-32 relative bg-[#F5F1EB] border-t border-[#EAE4DC]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 mb-4 justify-center">
            <span className="w-6 h-[1px] bg-[#AF8B62]" />
            <p className="text-[11px] uppercase tracking-[0.25em] text-[#786F66] font-medium">
              Direct Inquiries
            </p>
            <span className="w-6 h-[1px] bg-[#AF8B62]" />
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-light text-[#1C1816] tracking-tight leading-[1.15]">
            Let's talk about <br />
            <span className="italic font-normal text-[#8F6C44]">your personal goals.</span>
          </h2>
          <p className="text-[#786F66] text-sm sm:text-base font-light mt-4 max-w-lg mx-auto leading-relaxed">
            Ready to break plateaus or begin afresh? Submit your inquiry below or connect directly via phone or WhatsApp.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          
          {/* Left Column: Direct Coach Contact Info */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <div className="p-8 sm:p-10 rounded-3xl bg-[#FAF8F5] border border-[#EAE4DC] shadow-[0_8px_30px_rgba(28,24,22,0.03)] mb-6">
                <span className="text-[10px] uppercase tracking-[0.2em] text-[#AF8B62] font-semibold block">
                  Personal Fitness & Wellness Coach
                </span>
                <h3 className="font-serif text-3xl font-light text-[#1C1816] mt-1 mb-2">
                  Sharmistha Roy
                </h3>
                <p className="text-[#786F66] text-xs font-light mb-8">
                  Dedicated 1-on-1 Fitness Mentorship for Women
                </p>

                <div className="space-y-5 border-t border-[#F0EBE3] pt-6">
                  <div className="flex items-center gap-4">
                    <div className="p-2.5 rounded-full bg-[#EDE7DE] text-[#1C1816]">
                      <Phone className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-[11px] uppercase tracking-wider text-[#786F66]">Direct Telephone</p>
                      <a href="tel:+919123096061" className="text-sm font-medium text-[#1C1816] hover:text-[#AF8B62] transition-colors">
                        +91 9123096061
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="p-2.5 rounded-full bg-[#EDE7DE] text-[#25D366]">
                      <MessageCircle className="w-4 h-4 fill-current" />
                    </div>
                    <div>
                      <p className="text-[11px] uppercase tracking-wider text-[#786F66]">Direct WhatsApp</p>
                      <a
                        href="https://wa.me/919123096061"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm font-medium text-[#1C1816] hover:text-[#AF8B62] transition-colors"
                      >
                        +91 9123096061
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="p-2.5 rounded-full bg-[#EDE7DE] text-[#786F66]">
                      <Clock className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-[11px] uppercase tracking-wider text-[#786F66]">Response Window</p>
                      <p className="text-sm font-light text-[#524B45]">
                        Usually within 1–2 hours
                      </p>
                    </div>
                  </div>
                </div>

                {/* Direct Action Buttons */}
                <div className="grid grid-cols-2 gap-3 mt-8 pt-6 border-t border-[#F0EBE3]">
                  <a
                    href="tel:+919123096061"
                    className="py-3 px-4 rounded-full border border-[#D8D0C5] hover:border-[#1C1816] text-[#1C1816] font-medium text-xs uppercase tracking-widest text-center flex items-center justify-center gap-2 transition-colors"
                  >
                    <Phone className="w-3.5 h-3.5 text-[#AF8B62]" />
                    <span>Call Now</span>
                  </a>

                  <a
                    href="https://wa.me/919123096061"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="py-3 px-4 rounded-full bg-[#25D366] hover:bg-[#1EBE5D] text-white font-medium text-xs uppercase tracking-widest text-center flex items-center justify-center gap-2 transition-colors shadow-xs"
                  >
                    <MessageCircle className="w-3.5 h-3.5 fill-current" />
                    <span>WhatsApp</span>
                  </a>
                </div>
              </div>

              <div className="p-6 rounded-2xl bg-[#FAF8F5] border border-[#EAE4DC] text-xs text-[#786F66] font-light">
                <p className="text-[#1C1816] font-medium mb-1 font-serif text-sm">
                  Empathetic & Confidential Dialogue
                </p>
                <p className="leading-relaxed">
                  Every journey begins with a compassionate review of your background, previous hurdles, and desired milestones. No sales pressure.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Enquiry Form */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-12 rounded-3xl bg-[#FAF8F5] border border-[#EAE4DC] shadow-[0_8px_30px_rgba(28,24,22,0.03)] relative">
              
              {submitted ? (
                <div className="text-center py-12">
                  <div className="w-14 h-14 rounded-full bg-[#EDE7DE] text-[#AF8B62] flex items-center justify-center mx-auto mb-4">
                    <Check className="w-6 h-6" />
                  </div>
                  <h3 className="font-serif text-3xl font-light text-[#1C1816] mb-2">
                    Enquiry Form Prepared
                  </h3>
                  <p className="text-[#524B45] text-sm sm:text-base font-light max-w-md mx-auto mb-8 leading-relaxed">
                    WhatsApp has opened with your inquiry for Coach Sharmistha Roy. She looks forward to connecting with you.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({ name: '', phone: '', goal: 'Weight Management & Toning', message: '' });
                    }}
                    className="px-6 py-2.5 rounded-full border border-[#D8D0C5] text-[#1C1816] text-xs font-medium uppercase tracking-widest transition-colors"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <h3 className="font-serif text-2xl sm:text-3xl font-light text-[#1C1816] mb-1">
                      Send a coaching enquiry
                    </h3>
                    <p className="text-xs text-[#786F66] font-light">
                      Fill in your details below. On clicking "Get Started", WhatsApp will launch pre-formatted.
                    </p>
                  </div>

                  {/* Name */}
                  <div>
                    <label className="text-xs text-[#786F66] font-medium block mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Radhika Sen"
                      className="w-full bg-white border border-[#EAE4DC] rounded-xl px-4 py-3.5 text-sm text-[#1C1816] placeholder-[#A69C92] focus:outline-none focus:border-[#1C1816] transition-colors"
                    />
                  </div>

                  {/* Phone */}
                  <div>
                    <label className="text-xs text-[#786F66] font-medium block mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="e.g. 9123096061"
                      className="w-full bg-white border border-[#EAE4DC] rounded-xl px-4 py-3.5 text-sm text-[#1C1816] placeholder-[#A69C92] focus:outline-none focus:border-[#1C1816] transition-colors"
                    />
                  </div>

                  {/* Fitness Goal */}
                  <div>
                    <label className="text-xs text-[#786F66] font-medium block mb-2">
                      Primary Fitness Aspiration
                    </label>
                    <select
                      value={formData.goal}
                      onChange={(e) => setFormData({ ...formData, goal: e.target.value })}
                      className="w-full bg-white border border-[#EAE4DC] rounded-xl px-4 py-3.5 text-sm text-[#1C1816] focus:outline-none focus:border-[#1C1816] transition-colors"
                    >
                      <option value="Weight Management & Toning">Weight Management & Toning</option>
                      <option value="Strength & Fitness">Strength & Fitness</option>
                      <option value="Beginner Fitness Foundation">Beginner Fitness Foundation</option>
                      <option value="1-on-1 Personal Coaching">1-on-1 Personal Coaching</option>
                      <option value="Metabolic Energy & Posture">Metabolic Energy & Posture</option>
                    </select>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="text-xs text-[#786F66] font-medium block mb-2">
                      Personal Note or Schedule Notes
                    </label>
                    <textarea
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Share a little about your routine, questions, or goals..."
                      className="w-full bg-white border border-[#EAE4DC] rounded-xl px-4 py-3.5 text-sm text-[#1C1816] placeholder-[#A69C92] focus:outline-none focus:border-[#1C1816] transition-colors resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full py-4 rounded-full bg-[#1C1816] hover:bg-[#AF8B62] text-[#FAF8F5] font-medium text-xs tracking-widest uppercase transition-all duration-300 shadow-sm hover:shadow flex items-center justify-center gap-2 cursor-pointer active:scale-[0.98]"
                  >
                    <span>Get Started</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </button>

                  <p className="text-[11px] text-[#A69C92] text-center pt-1 font-light">
                    Submitting opens a direct conversation with Sharmistha Roy on WhatsApp (+91 9123096061).
                  </p>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
