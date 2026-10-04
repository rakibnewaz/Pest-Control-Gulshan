import React from 'react';
import {
  Phone,
  MessageSquare,
  ShieldCheck,
  CheckCircle,
  MapPin,
  CalendarCheck,
  Building,
} from 'lucide-react';
import { BUSINESS_INFO } from '../data/pestData';
import { trackEvent } from '../utils/analytics';

interface HeroProps {
  onOpenBookingModal: (initialPest?: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenBookingModal }) => {
  const handlePhoneClick = () => {
    trackEvent('phone_click', { location: 'hero_cta' });
  };

  const handleWhatsAppClick = () => {
    trackEvent('whatsapp_click', { location: 'hero_cta' });
  };

  const handleInspectionClick = () => {
    trackEvent('quote_request', { location: 'hero_primary_cta' });
    const formElement = document.getElementById('quote-form-section');
    if (formElement) {
      formElement.scrollIntoView({ behavior: 'smooth' });
    } else {
      onOpenBookingModal();
    }
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-slate-900 via-slate-900 to-slate-950 text-white pt-10 pb-16 lg:pt-16 lg:pb-24">
      {/* Background Subtle Grid & Ambient Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:24px_24px] opacity-25 pointer-events-none" />
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-emerald-600/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 -right-32 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Headlines, Paragraph, & CTAs */}
          <div className="lg:col-span-7 space-y-6 text-left">
            {/* Location Tag */}
            <div className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-2xl bg-slate-800/90 border border-emerald-500/40 text-emerald-300 text-xs sm:text-sm font-bold tracking-wide shadow-md backdrop-blur-md">
              <MapPin className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Dhaka City • Gulshan • Banani • Baridhara • Dhanmondi • Uttara</span>
            </div>

            {/* Main H1 Headline */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-[1.15]">
              Professional Pest Control Services in{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-emerald-200">
                Dhaka
              </span>
            </h1>

            {/* Supporting Headline */}
            <p className="text-xl sm:text-2xl font-semibold text-slate-200 tracking-tight leading-snug">
              Protect Your Home, Family & Business From Unwanted Pests
            </p>

            {/* Supporting Paragraph */}
            <p className="text-base sm:text-lg text-slate-300 font-normal leading-relaxed max-w-2xl">
              Reliable pest control solutions for homes, apartments, offices, restaurants and commercial
              properties across Dhaka. Our trained professionals identify the source of the problem and
              provide targeted treatment designed for long-lasting protection.
            </p>

            {/* Primary & Secondary Call to Actions */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
              {/* Primary CTA */}
              <button
                onClick={handleInspectionClick}
                className="inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-base shadow-lg shadow-amber-500/20 hover:shadow-xl hover:-translate-y-0.5 transition-all focus:outline-hidden"
              >
                <CalendarCheck className="w-5 h-5 text-slate-950" />
                <span>Get a Free Inspection</span>
              </button>

              {/* Secondary CTA: Call Now */}
              <a
                href={`tel:${BUSINESS_INFO.phoneCall}`}
                onClick={handlePhoneClick}
                className="inline-flex items-center justify-center gap-2.5 px-6 py-4 rounded-xl bg-slate-800 hover:bg-slate-700/90 text-white font-bold text-base border border-slate-700 hover:border-slate-600 transition-all focus:outline-hidden"
              >
                <Phone className="w-5 h-5 text-emerald-400" />
                <span>Call: {BUSINESS_INFO.phoneDisplay}</span>
              </a>

              {/* WhatsApp CTA */}
              <a
                href={`https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=Hello%20SafeGuard%20Pest%20Dhaka%2C%20I%20need%20a%20pest%20control%20inspection%20for%20my%20property.`}
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleWhatsAppClick}
                className="inline-flex items-center justify-center gap-2 px-5 py-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-base shadow-lg shadow-emerald-700/25 hover:-translate-y-0.5 transition-all focus:outline-hidden"
              >
                <MessageSquare className="w-5 h-5" />
                <span>Chat on WhatsApp</span>
              </a>
            </div>

            {/* Quick Neighborhood Pill Highlights */}
            <div className="pt-4 border-t border-slate-800/80 flex flex-wrap items-center gap-2 text-xs text-slate-400">
              <span className="font-semibold text-slate-300">Rapid Dispatch to:</span>
              {[
                'Gulshan',
                'Banani',
                'Baridhara',
                'Bashundhara',
                'Dhanmondi',
                'Uttara',
                'DOHS Areas',
                'All Dhaka',
              ].map((area) => (
                <span
                  key={area}
                  className="px-2.5 py-1 rounded-md bg-slate-800/60 border border-slate-700/50 text-slate-300"
                >
                  {area}
                </span>
              ))}
            </div>
          </div>

          {/* Right Column: High Quality Realistic Visual & Trust Badges */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Outer Card with Photo */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-slate-800 bg-slate-900 group">
                <img
                  src="https://images.unsplash.com/photo-1628177142898-93e36e4e3a50?auto=format&fit=crop&w=1000&q=80"
                  alt="Professional pest control technician conducting safe inspection in modern Dhaka apartment"
                  className="w-full h-[400px] sm:h-[460px] object-cover object-center group-hover:scale-102 transition-transform duration-700"
                  loading="eager"
                />

                {/* Gradient Overlays */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
                <div className="absolute inset-0 bg-emerald-950/10 mix-blend-overlay" />

                {/* Bottom Card Caption */}
                <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-slate-900/90 backdrop-blur-md border border-slate-700/70 text-left">
                  <div className="flex items-center justify-between">
                    <div>
                      <h2 className="text-sm font-bold text-white tracking-wide">
                        Modern Inspection & Targeted Treatment
                      </h2>
                      <p className="text-xs text-slate-300 mt-0.5">
                        Trained technicians equipped with professional applicator tools
                      </p>
                    </div>
                    <div className="w-9 h-9 rounded-lg bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400 shrink-0">
                      <ShieldCheck className="w-5 h-5" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Trust Badge 1: Top Left */}
              <div className="absolute -top-4 -left-4 sm:-left-6 bg-slate-900/95 backdrop-blur-md text-white border border-emerald-500/30 shadow-xl px-4 py-3 rounded-xl flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-400">
                  <CheckCircle className="w-5 h-5 stroke-[2.5]" />
                </div>
                <div className="text-left">
                  <div className="text-xs font-bold text-white">Safe & Professional Treatment</div>
                  <div className="text-[11px] text-emerald-300 font-medium">Targeted application</div>
                </div>
              </div>

              {/* Floating Trust Badge 2: Bottom Right */}
              <div className="absolute -bottom-5 -right-3 sm:-right-6 bg-slate-900/95 backdrop-blur-md text-white border border-slate-700 shadow-xl px-4 py-3 rounded-xl flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-teal-500/20 flex items-center justify-center text-teal-400">
                  <Building className="w-4 h-4" />
                </div>
                <div className="text-left">
                  <div className="text-xs font-bold text-white">Residential & Commercial</div>
                  <div className="text-[11px] text-slate-300">Flats, Villas & Offices</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
