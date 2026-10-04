import React from 'react';
import {
  Home,
  Building2,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  UtensilsCrossed,
} from 'lucide-react';
import { trackEvent } from '../utils/analytics';

interface ResidentialVsCommercialProps {
  onBookResidential: () => void;
  onRequestCommercial: () => void;
}

export const ResidentialVsCommercial: React.FC<ResidentialVsCommercialProps> = ({
  onBookResidential,
  onRequestCommercial,
}) => {
  const handleResidentialClick = () => {
    trackEvent('quote_request', { category: 'residential_card_cta' });
    onBookResidential();
  };

  const handleCommercialClick = () => {
    trackEvent('quote_request', { category: 'commercial_card_cta' });
    onRequestCommercial();
  };

  return (
    <section className="py-20 bg-slate-100/70 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-4">
          <div className="inline-flex items-center gap-2.5 px-6 py-2.5 rounded-2xl bg-white border border-slate-300 text-slate-900 text-xs sm:text-sm font-extrabold uppercase tracking-widest shadow-xs">
            Property Specialization
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Tailored Solutions for Every Property Scale
          </h2>

          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Whether securing a quiet apartment in Banani or protecting a high-traffic restaurant in Gulshan,
            our protocols match the operational requirements of your space.
          </p>
        </div>

        {/* Two Large Visual Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Card 1: Residential Pest Control */}
          <div className="group bg-white rounded-3xl overflow-hidden border border-slate-200/90 shadow-sm hover:shadow-2xl transition-all duration-300 flex flex-col justify-between text-left">
            <div>
              {/* Image Banner */}
              <div className="relative h-64 sm:h-72 w-full overflow-hidden bg-slate-900">
                <img
                  src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1000&q=80"
                  alt="Modern residential living room in Dhaka apartment"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent" />

                <div className="absolute top-4 left-4">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-600 text-white text-xs font-extrabold shadow-md">
                    <Home className="w-3.5 h-3.5" />
                    Residential Pest Control
                  </span>
                </div>

                <div className="absolute bottom-4 left-6 right-6">
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                    For Homes, Flats & Family Residences
                  </h3>
                </div>
              </div>

              {/* Body Content */}
              <div className="p-6 sm:p-8 space-y-6">
                <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                  Protecting your sanctuary from persistent roaches, bed bugs, termites, and mosquitoes.
                  We implement low-odor, targeted treatments that keep family members, children, and pets secure.
                </p>

                <div className="space-y-3 pt-2 border-t border-slate-100">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                    Properties We Treat:
                  </h4>
                  <div className="grid grid-cols-2 gap-2 text-xs sm:text-sm font-semibold text-slate-700">
                    <span className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" /> Apartments & Flats
                    </span>
                    <span className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" /> Houses & Villas
                    </span>
                    <span className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" /> Duplex Penthouses
                    </span>
                    <span className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" /> Rental Properties
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Card Action */}
            <div className="p-6 sm:p-8 pt-0">
              <button
                onClick={handleResidentialClick}
                className="w-full py-4 px-6 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2"
              >
                <span>Book Home Pest Control</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Card 2: Commercial Pest Control */}
          <div className="group bg-white rounded-3xl overflow-hidden border border-slate-200/90 shadow-sm hover:shadow-2xl transition-all duration-300 flex flex-col justify-between text-left">
            <div>
              {/* Image Banner */}
              <div className="relative h-64 sm:h-72 w-full overflow-hidden bg-slate-900">
                <img
                  src="https://images.unsplash.com/photo-1583394838336-acd977736f90?auto=format&fit=crop&w=1000&q=80"
                  alt="Modern commercial restaurant kitchen and dining in Dhaka"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent" />

                <div className="absolute top-4 left-4">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900 text-white text-xs font-extrabold shadow-md border border-slate-700">
                    <Building2 className="w-3.5 h-3.5 text-emerald-400" />
                    Commercial Pest Control
                  </span>
                </div>

                <div className="absolute bottom-4 left-6 right-6">
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                    For Businesses, Restaurants & Facilities
                  </h3>
                </div>
              </div>

              {/* Body Content */}
              <div className="p-6 sm:p-8 space-y-6">
                <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                  Protecting your brand reputation, customer trust, and food hygiene standards.
                  Scheduled after-hours service, formal digital documentation, and audit-ready service logs.
                </p>

                <div className="space-y-3 pt-2 border-t border-slate-100">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                    Properties We Treat:
                  </h4>
                  <div className="grid grid-cols-2 gap-2 text-xs sm:text-sm font-semibold text-slate-700">
                    <span className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" /> Restaurants & Cafes
                    </span>
                    <span className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" /> Corporate Offices
                    </span>
                    <span className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" /> Hotels & Guest Houses
                    </span>
                    <span className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" /> Clinics & Warehouses
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Card Action */}
            <div className="p-6 sm:p-8 pt-0">
              <button
                onClick={handleCommercialClick}
                className="w-full py-4 px-6 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-sm shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2"
              >
                <span>Request Commercial Quote</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
