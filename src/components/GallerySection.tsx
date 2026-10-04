import React, { useState } from 'react';
import { X, ZoomIn, ArrowUpRight } from 'lucide-react';
import movementImg from '../assets/images/sharmistha_coaching_movement_1790255702524.jpg';
import detailsImg from '../assets/images/editorial_wellness_details_1790254884470.jpg';
import coachImg from '../assets/images/sharmistha_portrait_1790255755558.jpg';
import workoutEditorialImg from '../assets/images/editorial_lifestyle_workout_1790254873595.jpg';

interface GalleryItem {
  id: string;
  title: string;
  category: 'movement' | 'wellness' | 'mentorship';
  image: string;
  tag: string;
  description: string;
}

export const GallerySection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'all' | 'movement' | 'wellness' | 'mentorship'>('all');
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);

  const galleryItems: GalleryItem[] = [
    {
      id: 'item-1',
      title: 'Strength Training & Form Guidance',
      category: 'movement',
      image: movementImg,
      tag: 'Movement Architecture',
      description: 'Coach Sharmistha guiding progressive resistance, alignment, and core stability for sculpted tone.',
    },
    {
      id: 'item-2',
      title: 'Mindful Wellness & Nutrition Rituals',
      category: 'wellness',
      image: detailsImg,
      tag: 'Nourishment & Habits',
      description: 'Clean hydration, balanced nutrition without deprivation, and daily rituals that restore natural energy.',
    },
    {
      id: 'item-3',
      title: 'Sculpted Body Recomposition',
      category: 'movement',
      image: workoutEditorialImg,
      tag: 'Tone & Vitality',
      description: 'Targeted toning routines and metabolic conditioning tailored to women’s fitness goals.',
    },
    {
      id: 'item-4',
      title: 'Coach Sharmistha Roy Mentorship',
      category: 'mentorship',
      image: coachImg,
      tag: '1-on-1 Mentorship',
      description: 'Empathetic guidance, continuous feedback, and direct WhatsApp communication with Coach Sharmistha.',
    },
  ];

  const filteredItems = activeTab === 'all'
    ? galleryItems
    : galleryItems.filter((item) => item.category === activeTab);

  return (
    <section id="gallery" className="py-24 lg:py-32 relative bg-[#F5F1EB] border-y border-[#EAE4DC]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 mb-4 justify-center">
            <span className="w-6 h-[1px] bg-[#AF8B62]" />
            <p className="text-[11px] uppercase tracking-[0.25em] text-[#786F66] font-medium">
              Editorial Portfolio
            </p>
            <span className="w-6 h-[1px] bg-[#AF8B62]" />
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-light text-[#1C1816] tracking-tight leading-[1.15]">
            A glimpse into <br />
            <span className="italic font-normal text-[#8F6C44]">the coaching experience.</span>
          </h2>
          <p className="text-[#786F66] text-sm sm:text-base font-light mt-4 max-w-lg mx-auto leading-relaxed">
            Curated moments of intentional movement, nourishing daily habits, and private coaching mentorship.
          </p>
        </div>

        {/* Minimal Category Tabs */}
        <div className="flex items-center justify-center gap-3 mb-12 sm:mb-16 flex-wrap">
          {[
            { id: 'all', label: 'All Curations' },
            { id: 'movement', label: 'Movement & Form' },
            { id: 'wellness', label: 'Habits & Nutrition' },
            { id: 'mentorship', label: '1-on-1 Mentorship' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`px-5 py-2 text-xs uppercase tracking-wider font-medium rounded-full transition-all duration-300 ${
                activeTab === tab.id
                  ? 'bg-[#1C1816] text-[#FAF8F5]'
                  : 'bg-white/80 border border-[#EAE4DC] text-[#786F66] hover:text-[#1C1816]'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedItem(item)}
              className="group cursor-pointer rounded-2xl overflow-hidden bg-white border border-[#EAE4DC] hover:border-[#AF8B62]/60 transition-all duration-500 shadow-[0_4px_20px_rgba(28,24,22,0.02)] hover:shadow-[0_12px_32px_rgba(28,24,22,0.06)] hover:-translate-y-1"
            >
              <div className="relative aspect-[3/4] overflow-hidden bg-[#EDE7DE]">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1C1816]/70 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
                <div className="absolute top-3.5 right-3.5 p-2 rounded-full bg-white/90 backdrop-blur-md text-[#1C1816] opacity-0 group-hover:opacity-100 transition-opacity">
                  <ZoomIn className="w-3.5 h-3.5 text-[#AF8B62]" />
                </div>
                <div className="absolute bottom-4 left-4 right-4">
                  <span className="text-[10px] uppercase font-medium tracking-[0.2em] text-[#FAF8F5]/90 block mb-1">
                    {item.tag}
                  </span>
                  <h3 className="font-serif text-xl text-white font-normal">
                    {item.title}
                  </h3>
                </div>
              </div>

              <div className="p-5">
                <p className="text-xs text-[#786F66] font-light leading-relaxed line-clamp-2">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox Modal */}
        {selectedItem && (
          <div
            className="fixed inset-0 z-50 bg-[#1C1816]/85 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
            onClick={() => setSelectedItem(null)}
          >
            <div
              className="relative max-w-2xl w-full bg-[#FAF8F5] border border-[#EAE4DC] rounded-3xl overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedItem(null)}
                className="absolute top-4 right-4 z-10 p-2.5 rounded-full bg-white/90 text-[#1C1816] hover:text-[#AF8B62] transition-colors"
                aria-label="Close modal"
              >
                <X className="w-4 h-4" />
              </button>

              <div className="relative aspect-[4/3] bg-[#EDE7DE]">
                <img
                  src={selectedItem.image}
                  alt={selectedItem.title}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>

              <div className="p-8">
                <span className="text-[10px] uppercase tracking-[0.2em] text-[#AF8B62] font-semibold">
                  {selectedItem.tag}
                </span>
                <h3 className="font-serif text-3xl font-light text-[#1C1816] mt-1">
                  {selectedItem.title}
                </h3>
                <p className="text-sm text-[#524B45] font-light mt-3 leading-relaxed">
                  {selectedItem.description}
                </p>
                <div className="mt-6 pt-5 border-t border-[#EAE4DC] flex items-center justify-between">
                  <span className="text-xs text-[#786F66]">
                    Sharmistha Roy Fitness Coaching
                  </span>
                  <a
                    href="https://wa.me/919123096061?text=Hello%20Sharmistha,%20I%20am%20interested%20in%20your%20coaching%20programs."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-2.5 rounded-full bg-[#1C1816] hover:bg-[#AF8B62] text-[#FAF8F5] text-xs font-medium uppercase tracking-widest transition-colors flex items-center gap-1.5"
                  >
                    <span>Connect on WhatsApp</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
