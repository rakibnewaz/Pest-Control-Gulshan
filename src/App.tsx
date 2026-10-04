import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { TrustBar } from './components/TrustBar';
import { PestSelector } from './components/PestSelector';
import { ServicesSection } from './components/ServicesSection';
import { BeforeAfterSlider } from './components/BeforeAfterSlider';
import { ProcessSection } from './components/ProcessSection';
import { WhyChooseUs } from './components/WhyChooseUs';
import { ResidentialVsCommercial } from './components/ResidentialVsCommercial';
import { PremiumNeighborhoods } from './components/PremiumNeighborhoods';
import { CommercialB2B } from './components/CommercialB2B';
import { ServiceAreaSection } from './components/ServiceAreaSection';
import { LeadForm } from './components/LeadForm';
import { TestimonialsSection } from './components/TestimonialsSection';
import { FaqSection } from './components/FaqSection';
import { FinalCta } from './components/FinalCta';
import { Footer } from './components/Footer';
import { StickyMobileBar } from './components/StickyMobileBar';
import { BookingModal } from './components/BookingModal';
import { ServiceDetailModal } from './components/ServiceDetailModal';
import { ServiceItem } from './types';
import { initScrollTracking } from './utils/analytics';

export default function App() {
  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const [initialPest, setInitialPest] = useState<string | undefined>(undefined);
  const [initialArea, setInitialArea] = useState<string | undefined>(undefined);
  const [selectedServiceDetail, setSelectedServiceDetail] = useState<ServiceItem | null>(null);

  // Initialize conversion tracking for 90% scroll depth
  useEffect(() => {
    const cleanup = initScrollTracking();
    return () => cleanup();
  }, []);

  const handleOpenBookingModal = (pestName?: string, areaName?: string) => {
    if (pestName) setInitialPest(pestName);
    if (areaName) setInitialArea(areaName);
    setBookingModalOpen(true);
  };

  const handleSelectPestForBooking = (pestName: string) => {
    setInitialPest(pestName);
    // Smooth scroll down to the main lead form section, with pre-fill
    const formElement = document.getElementById('quote-form-section');
    if (formElement) {
      formElement.scrollIntoView({ behavior: 'smooth' });
    } else {
      setBookingModalOpen(true);
    }
  };

  const handleSelectAreaForQuote = (areaName: string) => {
    setInitialArea(areaName);
    const formElement = document.getElementById('quote-form-section');
    if (formElement) {
      formElement.scrollIntoView({ behavior: 'smooth' });
    } else {
      setBookingModalOpen(true);
    }
  };

  const handleGetQuoteForService = (service: ServiceItem) => {
    // Map service to a pest if possible
    const pestMap: Record<string, string> = {
      'cockroach-control': 'Cockroaches',
      'bed-bug-control': 'Bed Bugs',
      'termite-control': 'Termites',
      'mosquito-control': 'Mosquitoes',
      'ant-control': 'Ants',
      'rodent-control': 'Rats / Mice',
      'fly-control': 'Flies',
      'spider-insect-control': 'Spiders',
      'wasp-bee-management': 'Wasps',
      'commercial-pest-control': 'Other',
      'restaurant-pest-control': 'Cockroaches',
      'apartment-residential-pest-control': 'Cockroaches',
    };
    const pest = pestMap[service.id] || 'Other';
    handleOpenBookingModal(pest);
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans text-slate-900 pb-16 lg:pb-0">
      {/* Header & Sticky Top Bar */}
      <Header onOpenBookingModal={() => handleOpenBookingModal()} />

      {/* Main Content Sections */}
      <main className="grow">
        {/* 1. Hero Section with H1 and Dhaka CTAs */}
        <Hero onOpenBookingModal={() => handleOpenBookingModal()} />

        {/* 2. Trust Bar Immediately Below Hero */}
        <TrustBar />

        {/* 3. Pests We Control Grid */}
        <PestSelector onSelectPestForBooking={handleSelectPestForBooking} />

        {/* 4. Complete Services Section (12 Services) */}
        <ServicesSection
          onSelectService={(service) => setSelectedServiceDetail(service)}
          onGetQuoteForService={handleGetQuoteForService}
        />

        {/* 5. Real Visual Proof & Before/After Slider */}
        <BeforeAfterSlider />

        {/* 6. How It Works (4-Step Process) */}
        <ProcessSection onOpenBookingModal={() => handleOpenBookingModal()} />

        {/* 7. Why Choose Us */}
        <WhyChooseUs />

        {/* 8. Residential vs Commercial Visual Cards */}
        <ResidentialVsCommercial
          onBookResidential={() => handleOpenBookingModal('Cockroaches')}
          onRequestCommercial={() => handleOpenBookingModal('Other')}
        />

        {/* 9. Premium Customer Section (Gulshan, Banani, Dhanmondi, Uttara, DOHS) */}
        <PremiumNeighborhoods onOpenBookingModal={() => handleOpenBookingModal()} />

        {/* 10. Commercial B2B Section */}
        <CommercialB2B onRequestCommercial={() => handleOpenBookingModal('Other')} />

        {/* 11. Service Areas Section (Dhaka Map & Neighborhoods) */}
        <ServiceAreaSection onSelectAreaForQuote={handleSelectAreaForQuote} />

        {/* 12. Lead Booking Form */}
        <LeadForm initialPest={initialPest} initialArea={initialArea} />

        {/* 13. Testimonials Section */}
        <TestimonialsSection />

        {/* 14. SEO-Friendly FAQs (15 Questions Accordion) */}
        <FaqSection />

        {/* 15. Final CTA Banner */}
        <FinalCta onOpenBookingModal={() => handleOpenBookingModal()} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Sticky Mobile CTA Bar */}
      <StickyMobileBar onOpenBookingModal={() => handleOpenBookingModal()} />

      {/* Interactive Quick Booking Modal */}
      <BookingModal
        isOpen={bookingModalOpen}
        onClose={() => setBookingModalOpen(false)}
        initialPest={initialPest}
        initialArea={initialArea}
      />

      {/* Interactive Service Detail Modal */}
      <ServiceDetailModal
        service={selectedServiceDetail}
        onClose={() => setSelectedServiceDetail(null)}
        onBookService={handleGetQuoteForService}
      />
    </div>
  );
}
