import React, { useState } from 'react';
import {
  SERVICES_LIST,
} from '../data/pestData';
import { ServiceItem } from '../types';
import {
  ChevronRight,
  ShieldAlert,
  ArrowUpRight,
  Sparkles,
  Building,
  Home,
  CheckCircle2,
} from 'lucide-react';
import { trackEvent } from '../utils/analytics';

interface ServicesSectionProps {
  onSelectService: (service: ServiceItem) => void;
  onGetQuoteForService: (service: ServiceItem) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({
  onSelectService,
  onGetQuoteForService,
}) => {
  const [activeFilter, setActiveFilter] = useState<'all' | 'residential' | 'commercial' | 'specialized'>('all');

  const filteredServices = SERVICES_LIST.filter((s) => {
    if (activeFilter === 'all') return true;
    if (activeFilter === 'residential') return s.category === 'residential' || s.category === 'both';
    if (activeFilter === 'commercial') return s.category === 'commercial' || s.category === 'both';
    if (activeFilter === 'specialized') return s.category === 'specialized';
    return true;
  });

  const handleLearnMore = (service: ServiceItem) => {
    trackEvent('service_click', {
      service_id: service.id,
      service_name: service.name,
      action: 'learn_more',
    });
    onSelectService(service);
  };

  const handleGetQuote = (service: ServiceItem) => {
    trackEvent('quote_request', {
      service_id: service.id,
      service_name: service.name,
      action: 'card_quote_cta',
    });
    onGetQuoteForService(service);
  };

  return (
    <section id="services" className="py-20 bg-slate-50 border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <div className="inline-flex items-center gap-2.5 px-6 py-2.5 rounded-2xl bg-emerald-100/90 border border-emerald-300 text-emerald-950 text-xs sm:text-sm font-extrabold tracking-widest uppercase shadow-xs">
            <Sparkles className="w-4 h-4 text-emerald-700 shrink-0" />
            Targeted Treatments
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Complete Pest Control Solutions for Homes & Businesses
          </h2>

          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            From common household pests to recurring commercial infestations, we provide targeted pest
            management solutions designed around your property and pest problem.
          </p>

          {/* Filter Tabs */}
          <div className="pt-4 flex flex-wrap items-center justify-center gap-2">
            {[
              { id: 'all', label: 'All Services (12)' },
              { id: 'residential', label: 'Residential & Apartments' },
              { id: 'commercial', label: 'Commercial & F&B' },
              { id: 'specialized', label: 'Specialized Treatments' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveFilter(tab.id as typeof activeFilter)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                  activeFilter === tab.id
                    ? 'bg-slate-900 text-white shadow-md'
                    : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-100'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Services Grid (12 services) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          {filteredServices.map((service) => (
            <div
              key={service.id}
              className="group bg-white rounded-2xl border border-slate-200/90 overflow-hidden shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Image Banner with Badge */}
                <div className="relative h-48 sm:h-52 w-full overflow-hidden bg-slate-100">
                  <img
                    src={service.imageUrl}
                    alt={service.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-900/20 to-transparent" />

                  {/* Category Pill */}
                  <div className="absolute top-3.5 left-3.5">
                    <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md text-[11px] font-bold bg-white/95 text-slate-900 backdrop-blur-xs shadow-xs">
                      {service.category === 'commercial' ? (
                        <>
                          <Building className="w-3 h-3 text-emerald-600" /> Commercial
                        </>
                      ) : service.category === 'residential' ? (
                        <>
                          <Home className="w-3 h-3 text-emerald-600" /> Residential
                        </>
                      ) : (
                        <>
                          <CheckCircle2 className="w-3 h-3 text-emerald-600" /> Comprehensive
                        </>
                      )}
                    </span>
                  </div>

                  {/* Number Badge */}
                  <div className="absolute top-3.5 right-3.5 w-7 h-7 rounded-full bg-slate-900/80 text-white text-xs font-extrabold flex items-center justify-center border border-white/20">
                    {service.number}
                  </div>

                  {/* Title on Image bottom */}
                  <div className="absolute bottom-3 left-4 right-4">
                    <h3 className="text-xl font-bold text-white tracking-tight drop-shadow-xs">
                      {service.name}
                    </h3>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-5 sm:p-6 space-y-4 text-left">
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {service.shortDesc}
                  </p>

                  {/* Key Highlights */}
                  <div className="space-y-1.5 pt-1 border-t border-slate-100">
                    {service.treatmentHighlights.slice(0, 2).map((highlight, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-slate-600">
                        <span className="text-emerald-600 font-bold text-xs mt-0.5">•</span>
                        <span>{highlight}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Card Footer CTAs */}
              <div className="px-5 pb-5 sm:px-6 sm:pb-6 pt-2 border-t border-slate-100/80 flex items-center justify-between gap-3">
                <button
                  onClick={() => handleLearnMore(service)}
                  className="text-xs font-bold text-slate-700 hover:text-emerald-700 flex items-center gap-1 transition-colors"
                >
                  <span>Learn More</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>

                <button
                  onClick={() => handleGetQuote(service)}
                  className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-emerald-50 hover:bg-emerald-600 text-emerald-800 hover:text-white border border-emerald-200 text-xs font-bold transition-all"
                >
                  <span>Get Quote</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
