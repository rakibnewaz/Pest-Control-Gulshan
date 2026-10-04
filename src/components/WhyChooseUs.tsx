import React from 'react';
import {
  Zap,
  Eye,
  Crosshair,
  Building,
  ShieldAlert,
  Compass,
} from 'lucide-react';
import { WHY_CHOOSE_US_POINTS } from '../data/pestData';

export const WhyChooseUs: React.FC = () => {
  const getPillarIcon = (iconName: string) => {
    switch (iconName) {
      case 'Zap':
        return <Zap className="w-6 h-6 text-emerald-600" />;
      case 'Eye':
        return <Eye className="w-6 h-6 text-emerald-600" />;
      case 'Crosshair':
        return <Crosshair className="w-6 h-6 text-emerald-600" />;
      case 'Building':
        return <Building className="w-6 h-6 text-emerald-600" />;
      case 'ShieldAlert':
        return <ShieldAlert className="w-6 h-6 text-emerald-600" />;
      case 'Compass':
      default:
        return <Compass className="w-6 h-6 text-emerald-600" />;
    }
  };

  return (
    <section id="why-us" className="py-20 bg-white border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2.5 px-6 py-2.5 rounded-2xl bg-slate-900 border border-slate-800 text-emerald-400 text-xs sm:text-sm font-extrabold uppercase tracking-widest shadow-sm">
            Our Commitment to Quality
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Why Dhaka Homeowners & Businesses Choose Professional Pest Control
          </h2>

          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Professional pest management requires more than random chemical spraying. We emphasize source
            detection, tailored formulations, and honest client communication.
          </p>
        </div>

        {/* 6 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {WHY_CHOOSE_US_POINTS.map((pillar, index) => (
            <div
              key={index}
              className="p-7 rounded-2xl bg-slate-50/70 border border-slate-200/80 hover:border-emerald-300 hover:bg-white hover:shadow-lg transition-all duration-300 text-left space-y-4"
            >
              <div className="w-12 h-12 rounded-xl bg-white border border-slate-200 shadow-xs flex items-center justify-center">
                {getPillarIcon(pillar.iconName)}
              </div>

              <div>
                <h3 className="text-lg font-bold text-slate-900 tracking-tight">
                  {pillar.title}
                </h3>
                <p className="text-sm text-slate-600 mt-2 leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Responsible Safety Notice Card */}
        <div className="mt-14 max-w-4xl mx-auto p-6 rounded-2xl bg-emerald-50 border border-emerald-200/80 text-left flex flex-col sm:flex-row items-center gap-5">
          <div className="w-12 h-12 rounded-full bg-emerald-600 text-white flex items-center justify-center shrink-0">
            <ShieldAlert className="w-6 h-6" />
          </div>
          <div className="space-y-1">
            <h4 className="text-sm font-bold text-emerald-950">
              Our Responsible Safety Philosophy
            </h4>
            <p className="text-xs sm:text-sm text-emerald-900/80 leading-relaxed">
              We believe in honest, evidence-based practices. We do not make unsubstantiated marketing promises
              like &quot;instant chemical-free magic&quot; or &quot;permanent eradication without upkeep.&quot; Instead, we provide
              transparent safety guidelines, targeted applications, and practical pest-proofing advice.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
