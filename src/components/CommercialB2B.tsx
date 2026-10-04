import React from 'react';
import {
  Building2,
  UtensilsCrossed,
  Briefcase,
  Hotel,
  Package,
  Store,
  ArrowRight,
  FileText,
  Clock,
  ShieldCheck,
} from 'lucide-react';
import { trackEvent } from '../utils/analytics';

interface CommercialB2BProps {
  onRequestCommercial: () => void;
}

export const CommercialB2B: React.FC<CommercialB2BProps> = ({
  onRequestCommercial,
}) => {
  const industries = [
    {
      name: 'Restaurants & Kitchens',
      desc: 'Strict food-grade gel baiting, grease drain management & fly lights.',
      icon: UtensilsCrossed,
      img: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=600&q=80',
    },
    {
      name: 'Corporate Offices',
      desc: 'Discreet after-hours cockroach and ant defense for server rooms & pantries.',
      icon: Briefcase,
      img: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=600&q=80',
    },
    {
      name: 'Hotels & Hospitality',
      desc: 'Proactive bed bug surveillance and suite-by-suite inspection protocols.',
      icon: Hotel,
      img: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=600&q=80',
    },
    {
      name: 'Warehouses & Logistics',
      desc: 'Rodent perimeter bait stations and high-bay flying insect control.',
      icon: Package,
      img: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=600&q=80',
    },
    {
      name: 'Retail Stores & Malls',
      desc: 'Display preservation, fitting room sanitation, and pest barrier maintenance.',
      icon: Store,
      img: 'https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?auto=format&fit=crop&w=600&q=80',
    },
  ];

  const handleCtaClick = () => {
    trackEvent('quote_request', { location: 'b2b_commercial_section' });
    onRequestCommercial();
  };

  return (
    <section className="py-20 bg-white border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-4">
          <div className="inline-flex items-center gap-2.5 px-6 py-2.5 rounded-2xl bg-slate-900 border border-slate-800 text-emerald-400 text-xs sm:text-sm font-extrabold uppercase tracking-widest shadow-sm">
            <Building2 className="w-4 h-4 text-emerald-400 shrink-0" />
            Enterprise & Commercial Services
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Protect Your Business From Pest Problems
          </h2>

          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Pest problems can affect customer confidence, workplace hygiene and your property&apos;s
            reputation. We provide pest management solutions for restaurants, offices, retail spaces,
            hotels, warehouses and other commercial properties across Dhaka.
          </p>
        </div>

        {/* 5 Industry Focus Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
          {industries.map((ind, idx) => {
            const Icon = ind.icon;
            return (
              <div
                key={idx}
                className="group rounded-2xl overflow-hidden border border-slate-200 bg-white shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between text-left"
              >
                <div>
                  <div className="relative h-36 w-full overflow-hidden bg-slate-100">
                    <img
                      src={ind.img}
                      alt={ind.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-900/30 to-transparent" />
                    <div className="absolute bottom-2.5 left-3">
                      <div className="w-7 h-7 rounded-lg bg-emerald-600 text-white flex items-center justify-center">
                        <Icon className="w-4 h-4" />
                      </div>
                    </div>
                  </div>

                  <div className="p-4 space-y-2">
                    <h3 className="text-sm font-bold text-slate-900 group-hover:text-emerald-700 transition-colors">
                      {ind.name}
                    </h3>
                    <p className="text-xs text-slate-500 leading-relaxed">
                      {ind.desc}
                    </p>
                  </div>
                </div>

                <div className="p-4 pt-0">
                  <div className="text-[11px] font-semibold text-emerald-700 flex items-center gap-1">
                    <span>IPM Certified Protocols</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Commercial Features Bar */}
        <div className="mt-12 bg-slate-900 text-white rounded-3xl p-8 sm:p-10 flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="space-y-4 text-left max-w-2xl">
            <h3 className="text-2xl font-bold tracking-tight">
              Flexible Night & Weekend Servicing Available
            </h3>
            <p className="text-sm text-slate-300 leading-relaxed">
              We understand you cannot afford daytime operational interruptions. We offer structured
              recurring agreements, service record logs, and emergency callback support across all Dhaka sectors.
            </p>
            <div className="flex flex-wrap items-center gap-4 text-xs text-slate-300 pt-1">
              <span className="flex items-center gap-1.5">
                <Clock className="w-4 h-4 text-emerald-400" /> After-Hours Dispatch
              </span>
              <span className="flex items-center gap-1.5">
                <FileText className="w-4 h-4 text-emerald-400" /> Digital Service Documentation
              </span>
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-emerald-400" /> Health Inspection Preparedness
              </span>
            </div>
          </div>

          <div className="shrink-0 w-full sm:w-auto">
            <button
              onClick={handleCtaClick}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-sm shadow-xl transition-all"
            >
              <span>Request a Commercial Inspection</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
