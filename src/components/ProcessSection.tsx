import React from 'react';
import {
  PhoneCall,
  Search,
  Shield,
  CheckCircle2,
  ArrowRight,
} from 'lucide-react';
import { HOW_IT_WORKS_STEPS } from '../data/pestData';

interface ProcessSectionProps {
  onOpenBookingModal: () => void;
}

export const ProcessSection: React.FC<ProcessSectionProps> = ({
  onOpenBookingModal,
}) => {
  const getStepIcon = (iconName: string) => {
    switch (iconName) {
      case 'PhoneCall':
        return <PhoneCall className="w-6 h-6 text-emerald-600" />;
      case 'Search':
        return <Search className="w-6 h-6 text-emerald-600" />;
      case 'Shield':
        return <Shield className="w-6 h-6 text-emerald-600" />;
      case 'CheckCircle2':
      default:
        return <CheckCircle2 className="w-6 h-6 text-emerald-600" />;
    }
  };

  return (
    <section id="process" className="py-20 bg-slate-50 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2.5 px-6 py-2.5 rounded-2xl bg-emerald-100/90 border border-emerald-300 text-emerald-950 text-xs sm:text-sm font-extrabold uppercase tracking-widest shadow-xs">
            Clear, Systematic Approach
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Our Pest Control Process
          </h2>

          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            A structured four-step methodology ensuring thorough pest removal, transparent communication,
            and sustainable protection for your home or commercial premises.
          </p>
        </div>

        {/* 4 Steps with Connector Line */}
        <div className="relative">
          {/* Subtle Connecting Line for Desktop */}
          <div className="hidden lg:block absolute top-1/2 left-12 right-12 h-0.5 bg-slate-200 -translate-y-8 z-0" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
            {HOW_IT_WORKS_STEPS.map((step) => (
              <div
                key={step.stepNumber}
                className="bg-white rounded-2xl p-6 sm:p-7 border border-slate-200/90 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between text-left group"
              >
                <div>
                  {/* Step Header with Number & Icon */}
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-xl bg-emerald-50 border border-emerald-100 flex items-center justify-center group-hover:scale-110 transition-transform">
                      {getStepIcon(step.iconName)}
                    </div>
                    <span className="text-3xl font-extrabold text-slate-300 tracking-tighter">
                      {step.stepNumber}
                    </span>
                  </div>

                  {/* Title & Badge */}
                  <div className="space-y-1 mb-3">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-md">
                      {step.badge}
                    </span>
                    <h3 className="text-lg font-bold text-slate-900 pt-1">
                      {step.subtitle}
                    </h3>
                  </div>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-slate-100 flex items-center text-xs font-semibold text-slate-500">
                  <span>Standard Dhaka dispatch</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA trigger */}
        <div className="mt-12 text-center">
          <button
            onClick={onOpenBookingModal}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-slate-900 hover:bg-emerald-600 text-white text-sm font-bold shadow-md transition-all"
          >
            <span>Start Step 1: Contact Our Team</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};
