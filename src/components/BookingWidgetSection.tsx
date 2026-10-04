import React, { useState } from 'react';
import { Calendar, Clock, Check, MessageCircle, ArrowUpRight } from 'lucide-react';

export const BookingWidgetSection: React.FC = () => {
  const [sessionType, setSessionType] = useState('Discovery Consultation');
  const [selectedDate, setSelectedDate] = useState('Tomorrow');
  const [selectedTime, setSelectedTime] = useState('10:00 AM - 10:30 AM');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [goal, setGoal] = useState('Weight Management & Toning');
  const [isBooked, setIsBooked] = useState(false);

  const sessionOptions = [
    {
      id: 'Discovery Consultation',
      title: 'Discovery Consultation',
      duration: '15 Mins',
      desc: 'An intimate, friendly conversation to evaluate your routine, hurdles, and desired milestones.',
    },
    {
      id: 'Bespoke Fitness Assessment',
      title: 'Bespoke Fitness Assessment',
      duration: '30 Mins',
      desc: 'Deep-dive review into biomechanics, energy, nutrition history, and targeted transformation timeframe.',
    },
    {
      id: 'Executive 1-on-1 Planning',
      title: 'Executive 1-on-1 Planning',
      duration: '30 Mins',
      desc: 'Tailoring an agile training roadmap around intensive work schedules, travel, and lifestyle.',
    },
  ];

  const dateOptions = [
    { label: 'Today', value: 'Today' },
    { label: 'Tomorrow', value: 'Tomorrow' },
    { label: 'In 2 Days', value: 'In 2 Days' },
    { label: 'This Weekend', value: 'This Weekend' },
    { label: 'Next Monday', value: 'Next Monday' },
  ];

  const timeOptions = [
    '08:00 AM - 08:30 AM',
    '10:00 AM - 10:30 AM',
    '01:00 PM - 01:30 PM',
    '05:30 PM - 06:00 PM',
    '07:30 PM - 08:00 PM',
  ];

  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !phone.trim()) {
      return;
    }

    const bookingMessage = `Hello Sharmistha, I would like to schedule a ${sessionType}.

Date Preference: ${selectedDate}
Time Window: ${selectedTime}
Name: ${name.trim()}
Phone: ${phone.trim()}
Primary Goal: ${goal}`;

    const waUrl = `https://wa.me/919123096061?text=${encodeURIComponent(bookingMessage)}`;
    
    setIsBooked(true);
    window.open(waUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="booking" className="py-24 lg:py-32 relative bg-[#FAF8F5]">
      <div className="max-w-4xl mx-auto px-6 sm:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 mb-4 justify-center">
            <span className="w-6 h-[1px] bg-[#AF8B62]" />
            <p className="text-[11px] uppercase tracking-[0.25em] text-[#786F66] font-medium">
              Private Consultation
            </p>
            <span className="w-6 h-[1px] bg-[#AF8B62]" />
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-light text-[#1C1816] tracking-tight leading-[1.15]">
            Reserve your <br />
            <span className="italic font-normal text-[#8F6C44]">private consultation.</span>
          </h2>
          <p className="text-[#786F66] text-sm sm:text-base font-light mt-4 max-w-lg mx-auto leading-relaxed">
            Take the definitive first step toward your vitality. Select your preferred consultation format to connect directly with Sharmistha Roy.
          </p>
        </div>

        {/* Booking Card */}
        <div className="bg-white border border-[#EAE4DC] rounded-3xl p-8 sm:p-12 shadow-[0_8px_30px_rgba(28,24,22,0.03)] relative">
          
          {isBooked ? (
            <div className="text-center py-10">
              <div className="w-14 h-14 rounded-full bg-[#F5F1EB] text-[#AF8B62] flex items-center justify-center mx-auto mb-6">
                <Check className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-3xl font-light text-[#1C1816] mb-3">
                Consultation Request Prepared
              </h3>
              <p className="text-[#524B45] text-sm sm:text-base font-light max-w-md mx-auto mb-8 leading-relaxed">
                Your consultation request for <strong className="text-[#1C1816] font-medium">{sessionType}</strong> on{' '}
                <strong className="text-[#1C1816] font-medium">{selectedDate}</strong> ({selectedTime}) has been formatted for Sharmistha.
              </p>
              
              <div className="p-6 rounded-2xl bg-[#FAF8F5] border border-[#EAE4DC] max-w-md mx-auto text-left mb-8 text-xs text-[#524B45] space-y-2">
                <p><span className="text-[#786F66]">Client Name:</span> <strong className="text-[#1C1816] font-medium">{name}</strong></p>
                <p><span className="text-[#786F66]">Phone / WhatsApp:</span> <strong className="text-[#1C1816] font-medium">{phone}</strong></p>
                <p><span className="text-[#786F66]">Aspiration:</span> <strong className="text-[#1C1816] font-medium">{goal}</strong></p>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a
                  href={`https://wa.me/919123096061?text=${encodeURIComponent(
                    `Hello Sharmistha, following up on my booking request for ${sessionType}.`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-3.5 rounded-full bg-[#1C1816] hover:bg-[#AF8B62] text-[#FAF8F5] text-xs font-medium uppercase tracking-widest flex items-center gap-2 transition-colors duration-300 shadow-sm"
                >
                  <MessageCircle className="w-4 h-4 fill-current" />
                  <span>Open WhatsApp Direct</span>
                </a>
                <button
                  onClick={() => setIsBooked(false)}
                  className="px-6 py-3.5 rounded-full border border-[#D8D0C5] text-[#524B45] hover:text-[#1C1816] text-xs font-medium uppercase tracking-widest transition-colors"
                >
                  Edit Request
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleBookingSubmit} className="space-y-10">
              
              {/* Step 1: Select Session */}
              <div>
                <label className="text-[11px] uppercase tracking-[0.2em] text-[#AF8B62] font-semibold block mb-4">
                  01 · Select Consultation Type
                </label>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5">
                  {sessionOptions.map((opt) => (
                    <button
                      type="button"
                      key={opt.id}
                      onClick={() => setSessionType(opt.id)}
                      className={`p-5 rounded-2xl border text-left transition-all duration-300 ${
                        sessionType === opt.id
                          ? 'bg-[#FAF8F5] border-[#1C1816] text-[#1C1816]'
                          : 'bg-white border-[#EAE4DC] text-[#786F66] hover:border-[#AF8B62]/60'
                      }`}
                    >
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-serif text-lg text-[#1C1816] leading-snug">{opt.title}</span>
                      </div>
                      <span className="inline-block text-[10px] tracking-wider uppercase text-[#AF8B62] font-medium mb-2">
                        {opt.duration}
                      </span>
                      <p className="text-xs text-[#786F66] font-light leading-relaxed">
                        {opt.desc}
                      </p>
                    </button>
                  ))}
                </div>
              </div>

              {/* Step 2: Date & Time */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <label className="text-[11px] uppercase tracking-[0.2em] text-[#AF8B62] font-semibold flex items-center gap-1.5 mb-3.5">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>02 · Preferred Day</span>
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                    {dateOptions.map((d) => (
                      <button
                        type="button"
                        key={d.value}
                        onClick={() => setSelectedDate(d.value)}
                        className={`py-2.5 px-3 rounded-xl text-xs font-medium border text-center transition-all ${
                          selectedDate === d.value
                            ? 'bg-[#1C1816] text-[#FAF8F5] border-[#1C1816]'
                            : 'bg-white border-[#EAE4DC] text-[#524B45] hover:border-[#AF8B62]'
                        }`}
                      >
                        {d.label}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="text-[11px] uppercase tracking-[0.2em] text-[#AF8B62] font-semibold flex items-center gap-1.5 mb-3.5">
                    <Clock className="w-3.5 h-3.5" />
                    <span>03 · Preferred Window</span>
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {timeOptions.slice(0, 4).map((t) => (
                      <button
                        type="button"
                        key={t}
                        onClick={() => setSelectedTime(t)}
                        className={`py-2.5 px-3 rounded-xl text-xs font-medium border text-center transition-all ${
                          selectedTime === t
                            ? 'bg-[#1C1816] text-[#FAF8F5] border-[#1C1816]'
                            : 'bg-white border-[#EAE4DC] text-[#524B45] hover:border-[#AF8B62]'
                        }`}
                      >
                        {t}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Step 3: Your Information */}
              <div>
                <label className="text-[11px] uppercase tracking-[0.2em] text-[#AF8B62] font-semibold block mb-4">
                  04 · Your Details & Focus
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                  <div>
                    <label className="text-xs text-[#786F66] font-medium block mb-2">Full Name</label>
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="e.g. Priya Sharma"
                      className="w-full bg-[#FAF8F5] border border-[#EAE4DC] rounded-xl px-4 py-3 text-sm text-[#1C1816] placeholder-[#A69C92] focus:outline-none focus:border-[#1C1816] transition-colors"
                    />
                  </div>

                  <div>
                    <label className="text-xs text-[#786F66] font-medium block mb-2">Phone / WhatsApp</label>
                    <input
                      type="tel"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="+91 98765 43210"
                      className="w-full bg-[#FAF8F5] border border-[#EAE4DC] rounded-xl px-4 py-3 text-sm text-[#1C1816] placeholder-[#A69C92] focus:outline-none focus:border-[#1C1816] transition-colors"
                    />
                  </div>

                  <div>
                    <label className="text-xs text-[#786F66] font-medium block mb-2">Primary Aspiration</label>
                    <select
                      value={goal}
                      onChange={(e) => setGoal(e.target.value)}
                      className="w-full bg-[#FAF8F5] border border-[#EAE4DC] rounded-xl px-4 py-3 text-sm text-[#1C1816] focus:outline-none focus:border-[#1C1816] transition-colors"
                    >
                      <option value="Weight Management & Toning">Weight Management & Toning</option>
                      <option value="Sculpted Strength & Posture">Sculpted Strength & Posture</option>
                      <option value="Beginner-Friendly Foundation">Beginner-Friendly Foundation</option>
                      <option value="Executive 1-on-1 Coaching">Executive 1-on-1 Coaching</option>
                      <option value="Metabolic Energy & Vitality">Metabolic Energy & Vitality</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Submit CTA */}
              <div className="pt-6 border-t border-[#F0EBE3] flex flex-col sm:flex-row items-center justify-between gap-5">
                <p className="text-xs text-[#786F66] font-light">
                  Direct scheduling via WhatsApp (+91 9123096061) with Coach Sharmistha.
                </p>

                <button
                  type="submit"
                  className="w-full sm:w-auto px-8 py-4 rounded-full bg-[#1C1816] hover:bg-[#AF8B62] text-[#FAF8F5] text-xs uppercase tracking-widest font-medium transition-all duration-300 shadow-sm hover:shadow flex items-center justify-center gap-2.5 active:scale-[0.98] cursor-pointer"
                >
                  <MessageCircle className="w-4 h-4 fill-current text-[#25D366]" />
                  <span>Schedule Consultation</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              </div>

            </form>
          )}

        </div>

      </div>
    </section>
  );
};
