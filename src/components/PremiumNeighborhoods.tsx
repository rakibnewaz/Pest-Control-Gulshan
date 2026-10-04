import React from 'react';
import {
  Sparkles,
  ShieldCheck,
  Check,
  Building,
  KeyRound,
  ArrowRight,
} from 'lucide-react';

interface PremiumNeighborhoodsProps {
  onOpenBookingModal: (pest?: string) => void;
}

export const PremiumNeighborhoods: React.FC<PremiumNeighborhoodsProps> = ({
  onOpenBookingModal,
}) => {
  return (
    <section className="py-20 bg-gradient-to-b from-slate-900 to-slate-950 text-white relative overflow-hidden">
      {/* Decorative accent lines */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-emerald-500/5 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Text Column */}
          <div className="lg:col-span-6 space-y-6 text-left">
            <div className="inline-flex items-center gap-2.5 px-6 py-2.5 rounded-2xl bg-emerald-500/20 text-emerald-300 text-xs sm:text-sm font-extrabold uppercase tracking-widest border border-emerald-500/40 shadow-md backdrop-blur-xs">
              <Sparkles className="w-4 h-4 text-emerald-300 shrink-0" />
              Tailored For Discerning Residents
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
              Premium Pest Protection for Dhaka Homes & Properties
            </h2>

            <p className="text-base sm:text-lg text-slate-300 font-normal leading-relaxed">
              Your home deserves more than a quick spray. Our professional pest management approach is
              designed for homeowners, apartment residents, landlords and property managers who want a
              cleaner, more comfortable and better-protected property.
            </p>

            {/* Neighborhood Spotlight Pills */}
            <div className="p-4 rounded-xl bg-slate-800/80 border border-slate-700 space-y-2">
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-400">
                Priority Dispatch Available In:
              </span>
              <p className="text-sm font-semibold text-slate-200">
                Gulshan • Banani • Baridhara • Bashundhara • Dhanmondi • Uttara • DOHS & More
              </p>
            </div>

            {/* Key Value Checklist */}
            <div className="space-y-3 pt-2">
              <div className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="w-3.5 h-3.5 stroke-[3]" />
                </div>
                <p className="text-sm text-slate-300">
                  <strong className="text-white">Low-Odor Formulations:</strong> No disruptive harsh fumes
                  in modern climate-controlled apartments.
                </p>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="w-3.5 h-3.5 stroke-[3]" />
                </div>
                <p className="text-sm text-slate-300">
                  <strong className="text-white">Interior Woodwork Safety:</strong> Non-staining termite
                  interception safeguarding imported choukats and customized parquet.
                </p>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="w-3.5 h-3.5 stroke-[3]" />
                </div>
                <p className="text-sm text-slate-300">
                  <strong className="text-white">Strict Punctuality & Discretion:</strong> Respectful,
                  uniformed professionals honoring building security regulations.
                </p>
              </div>
            </div>

            {/* CTA Button */}
            <div className="pt-2">
              <button
                onClick={() => onOpenBookingModal()}
                className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-sm shadow-lg transition-all"
              >
                <span>Request Premium Property Inspection</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Right Image Column */}
          <div className="lg:col-span-6">
            <div className="relative rounded-3xl overflow-hidden border border-slate-700/80 shadow-2xl bg-slate-800">
              <img
                src="https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=1000&q=80"
                alt="Luxury modern apartment in Dhaka with clean contemporary interior"
                className="w-full h-[420px] sm:h-[480px] object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />

              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-slate-900/90 backdrop-blur-md border border-slate-700 text-left">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white">
                      Pristine Living Space Preservation
                    </h4>
                    <p className="text-xs text-slate-300">
                      Targeted micro-treatments without disrupting interior finishes or fabrics.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
