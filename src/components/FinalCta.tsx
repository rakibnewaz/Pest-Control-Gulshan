import React from 'react';
import {
  CalendarCheck,
  Phone,
  MessageSquare,
  ShieldCheck,
  MapPin,
} from 'lucide-react';
import { BUSINESS_INFO } from '../data/pestData';
import { trackEvent } from '../utils/analytics';

interface FinalCtaProps {
  onOpenBookingModal: () => void;
}

export const FinalCta: React.FC<FinalCtaProps> = ({ onOpenBookingModal }) => {
  const handleInspectionClick = () => {
    trackEvent('quote_request', { location: 'final_cta_section' });
    const formElement = document.getElementById('quote-form-section');
    if (formElement) {
      formElement.scrollIntoView({ behavior: 'smooth' });
    } else {
      onOpenBookingModal();
    }
  };

  const handlePhoneClick = () => {
    trackEvent('phone_click', { location: 'final_cta_section' });
  };

  const handleWhatsAppClick = () => {
    trackEvent('whatsapp_click', { location: 'final_cta_section' });
  };

  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 via-emerald-950 to-slate-900 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(#10b981_1px,transparent_1px)] [background-size:28px_28px] opacity-15 pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-8">
        {/* Badge */}
        <div className="inline-flex items-center gap-2.5 px-6 py-3 rounded-2xl bg-emerald-500/25 text-emerald-300 text-xs sm:text-sm font-extrabold uppercase tracking-widest border border-emerald-500/40 shadow-md backdrop-blur-xs">
          <ShieldCheck className="w-4.5 h-4.5 text-emerald-300 shrink-0" />
          Dhaka-Wide Dispatch & Pest Management
        </div>

        {/* Headline */}
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
          Don&apos;t Let Pests Take Over Your Property
        </h2>

        {/* Supporting Copy */}
        <p className="text-base sm:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
          Whether you have a current infestation or want to prevent future pest problems, our team is ready to help.
        </p>

        {/* 3 Action Buttons */}
        <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
          {/* Primary CTA */}
          <button
            onClick={handleInspectionClick}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-base shadow-xl hover:shadow-2xl hover:-translate-y-0.5 transition-all"
          >
            <CalendarCheck className="w-5 h-5 text-slate-950" />
            <span>Get a Free Inspection</span>
          </button>

          {/* Secondary CTA: Call Now */}
          <a
            href={`tel:${BUSINESS_INFO.phoneCall}`}
            onClick={handlePhoneClick}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-xl bg-slate-800/90 hover:bg-slate-700 text-white font-bold text-base border border-slate-700 transition-all"
          >
            <Phone className="w-5 h-5 text-emerald-400" />
            <span>Call Now: {BUSINESS_INFO.phoneDisplay}</span>
          </a>

          {/* Third CTA: WhatsApp Us */}
          <a
            href={`https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=Hello%20SafeGuard%20Pest%20Dhaka%2C%20I%20would%20like%20to%20inquire%20about%20a%20service%20booking.`}
            target="_blank"
            rel="noopener noreferrer"
            onClick={handleWhatsAppClick}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-base shadow-lg transition-all"
          >
            <MessageSquare className="w-5 h-5" />
            <span>WhatsApp Us</span>
          </a>
        </div>

        {/* Trust summary footer */}
        <div className="pt-6 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-400">
          <span className="flex items-center gap-1.5">
            <MapPin className="w-3.5 h-3.5 text-emerald-400" />
            Gulshan • Banani • Dhanmondi • Uttara • DOHS • All Dhaka
          </span>
          <span className="hidden sm:inline">•</span>
          <span>Operating 8:00 AM – 8:00 PM Daily</span>
        </div>
      </div>
    </section>
  );
};
