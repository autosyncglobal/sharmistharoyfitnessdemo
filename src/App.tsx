/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { ProgramsSection } from './components/ProgramsSection';
import { WhyWorkWithSection } from './components/WhyWorkWithSection';
import { JourneySection } from './components/JourneySection';
import { CoachingBenefitsSection } from './components/CoachingBenefitsSection';
import { BookingWidgetSection } from './components/BookingWidgetSection';
import { GallerySection } from './components/GallerySection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { FAQSection } from './components/FAQSection';
import { CTASection } from './components/CTASection';
import { ContactSection } from './components/ContactSection';
import { ChatbotSupport } from './components/ChatbotSupport';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { ScrollToTop } from './components/ScrollToTop';
import { Footer } from './components/Footer';

export default function App() {
  const [chatOpen, setChatOpen] = useState(false);

  // Guarantee that on restart / refresh / navigation back, the page always starts from 1st section (top)
  useEffect(() => {
    let userInteracted = false;

    const onUserInteraction = () => {
      userInteracted = true;
    };

    window.addEventListener('touchstart', onUserInteraction, { passive: true, once: true });
    window.addEventListener('wheel', onUserInteraction, { passive: true, once: true });
    window.addEventListener('pointerdown', onUserInteraction, { passive: true, once: true });
    window.addEventListener('keydown', onUserInteraction, { passive: true, once: true });

    const forceScrollToTop = () => {
      if (userInteracted) return;
      try {
        if ('scrollRestoration' in window.history) {
          window.history.scrollRestoration = 'manual';
        }
        if (window.location.hash) {
          window.history.replaceState(null, '', window.location.pathname + window.location.search);
        }
        window.scrollTo({ top: 0, left: 0, behavior: 'instant' as ScrollBehavior });
        if (document.documentElement) document.documentElement.scrollTop = 0;
        if (document.body) document.body.scrollTop = 0;
        if (document.scrollingElement) document.scrollingElement.scrollTop = 0;
      } catch (e) {}
    };

    // Immediate execution
    forceScrollToTop();

    // Check at multiple staggered hydration & image rendering intervals
    const timers = [10, 50, 120, 250, 500, 800, 1200].map((delay) =>
      setTimeout(forceScrollToTop, delay)
    );

    // Handle mobile 'pageshow' (fired on reload, tab restore, bfcache)
    const handlePageShow = () => {
      userInteracted = false;
      forceScrollToTop();
    };

    // Handle beforeunload to reset scroll position
    const handleBeforeUnload = () => {
      forceScrollToTop();
    };

    window.addEventListener('pageshow', handlePageShow);
    window.addEventListener('beforeunload', handleBeforeUnload);

    return () => {
      timers.forEach(clearTimeout);
      window.removeEventListener('touchstart', onUserInteraction);
      window.removeEventListener('wheel', onUserInteraction);
      window.removeEventListener('pointerdown', onUserInteraction);
      window.removeEventListener('keydown', onUserInteraction);
      window.removeEventListener('pageshow', handlePageShow);
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, []);

  const scrollToBooking = () => {
    const bookingElement = document.getElementById('booking');
    if (bookingElement) {
      bookingElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#FAF8F5] text-[#1C1816] flex flex-col font-sans selection:bg-[#E8DFD3] selection:text-[#1C1816]">
      {/* Navigation */}
      <Navbar
        onOpenBooking={scrollToBooking}
        onOpenChat={() => setChatOpen(true)}
      />

      {/* Main Content Sections */}
      <main className="flex-grow">
        {/* 1. Hero Section */}
        <Hero onStartJourney={scrollToBooking} />

        {/* 2. Meet Your Fitness Coach (About) */}
        <AboutSection />

        {/* 3. Choose Your Fitness Journey (Programs) */}
        <ProgramsSection />

        {/* 4. Why Work With Sharmistha (More Than Just Workouts) */}
        <WhyWorkWithSection />

        {/* 5. 4-Step Fitness Journey Pathway */}
        <JourneySection onStartToday={scrollToBooking} />

        {/* 6. Coaching Benefits (Core Foundations) */}
        <CoachingBenefitsSection />

        {/* 7. Integrated Booking Widget (Consultation Scheduler) */}
        <BookingWidgetSection />

        {/* 8. Responsive Gallery Section */}
        <GallerySection />

        {/* 9. Real People. Real Journeys. (Testimonials) */}
        <TestimonialsSection />

        {/* 10. Frequently Asked Questions (FAQ) */}
        <FAQSection />

        {/* 11. Call To Action (Ready To Start?) */}
        <CTASection />

        {/* 12. Let's Talk About Your Goals (Contact & Enquiry Form) */}
        <ContactSection />
      </main>

      {/* Floating Elements & Support */}
      <FloatingWhatsApp />
      <ScrollToTop />
      <ChatbotSupport
        isOpen={chatOpen}
        onOpen={() => setChatOpen(true)}
        onClose={() => setChatOpen(false)}
      />

      {/* Footer */}
      <Footer />
    </div>
  );
}
