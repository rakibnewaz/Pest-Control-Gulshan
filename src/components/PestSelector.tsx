import React, { useState } from 'react';
import { PESTS_WE_CONTROL } from '../data/pestData';
import { PestItem } from '../types';
import {
  AlertTriangle,
  ArrowRight,
  Shield,
  Check,
} from 'lucide-react';
import { trackEvent } from '../utils/analytics';

interface PestSelectorProps {
  onSelectPestForBooking: (pestName: string) => void;
}

export const PestSelector: React.FC<PestSelectorProps> = ({
  onSelectPestForBooking,
}) => {
  const [selectedPestId, setSelectedPestId] = useState<string | null>(null);

  const handleCardClick = (pest: PestItem) => {
    setSelectedPestId(pest.id);
    trackEvent('service_click', {
      pest_id: pest.id,
      pest_name: pest.name,
      action: 'pest_card_selected',
    });
  };

  const handleBookPest = (pest: PestItem, e: React.MouseEvent) => {
    e.stopPropagation();
    trackEvent('quote_request', {
      pest_id: pest.id,
      pest_name: pest.name,
      action: 'pest_quick_book',
    });
    onSelectPestForBooking(pest.name);
  };

  return (
    <section id="pests" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-4">
          <div className="inline-flex items-center gap-2.5 px-6 py-2.5 rounded-2xl bg-slate-900 border border-slate-800 text-emerald-400 text-xs sm:text-sm font-extrabold uppercase tracking-widest shadow-sm">
            <Shield className="w-4 h-4 text-emerald-400 shrink-0" />
            Identification & Eradication
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            What Pests Are You Dealing With?
          </h2>

          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Different pests require distinct treatment methods. Select your active pest concern below to
            see specific recommendations and request a targeted treatment plan for your Dhaka property.
          </p>
        </div>

        {/* 12 Pests Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {PESTS_WE_CONTROL.map((pest) => {
            const isSelected = selectedPestId === pest.id;
            return (
              <div
                key={pest.id}
                onClick={() => handleCardClick(pest)}
                className={`cursor-pointer rounded-2xl border transition-all duration-200 overflow-hidden flex flex-col justify-between text-left ${
                  isSelected
                    ? 'border-emerald-600 ring-2 ring-emerald-500/20 shadow-lg bg-emerald-50/20'
                    : 'border-slate-200 hover:border-emerald-300 hover:shadow-md bg-white'
                }`}
              >
                <div>
                  {/* Photo with Overlay */}
                  <div className="relative h-32 sm:h-36 w-full overflow-hidden bg-slate-100">
                    <img
                      src={pest.imageUrl}
                      alt={pest.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-900/30 to-transparent" />

                    {/* Risk Tag */}
                    <div className="absolute top-2.5 right-2.5">
                      <span
                        className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-md text-[10px] font-bold ${
                          pest.riskLevel === 'Severe'
                            ? 'bg-rose-500/90 text-white'
                            : pest.riskLevel === 'High'
                            ? 'bg-amber-500/90 text-slate-950'
                            : 'bg-emerald-500/90 text-white'
                        }`}
                      >
                        <AlertTriangle className="w-2.5 h-2.5" />
                        {pest.riskLevel}
                      </span>
                    </div>

                    {/* Pest Title */}
                    <div className="absolute bottom-2.5 left-3 right-3">
                      <div className="flex items-baseline gap-1.5">
                        <h3 className="text-base sm:text-lg font-bold text-white tracking-tight leading-snug">
                          {pest.name}
                        </h3>
                        {pest.bengaliName && (
                          <span className="text-[11px] text-emerald-300 font-medium hidden sm:inline">
                            ({pest.bengaliName})
                          </span>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Body description */}
                  <div className="p-3.5 sm:p-4 space-y-2">
                    <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed">
                      {pest.shortDesc}
                    </p>

                    <div className="text-[11px] text-slate-500 flex items-start gap-1">
                      <span className="font-semibold text-slate-700 shrink-0">Common In:</span>
                      <span className="truncate">{pest.commonAreas}</span>
                    </div>
                  </div>
                </div>

                {/* Footer Action */}
                <div className="p-3 sm:p-4 pt-0">
                  <button
                    onClick={(e) => handleBookPest(pest, e)}
                    className="w-full py-2 px-3 rounded-lg bg-slate-900 hover:bg-emerald-600 text-white text-xs font-bold transition-colors flex items-center justify-center gap-1.5"
                  >
                    <span>Request Treatment</span>
                    <ArrowRight className="w-3 h-3" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Quick Helper Banner */}
        <div className="mt-12 bg-slate-50 rounded-2xl p-6 border border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4 text-left">
          <div className="space-y-1">
            <h4 className="text-sm font-bold text-slate-900">
              Not sure which pest is causing damage to your property?
            </h4>
            <p className="text-xs sm:text-sm text-slate-600">
              Our technicians perform an on-site property assessment in Dhaka to identify the exact species and entry source.
            </p>
          </div>
          <button
            onClick={() => onSelectPestForBooking('Other')}
            className="shrink-0 px-4 py-2.5 rounded-xl bg-white hover:bg-slate-100 border border-slate-300 text-slate-800 text-xs font-bold shadow-xs transition-colors flex items-center gap-1.5"
          >
            <span>Book Pest Assessment</span>
            <ArrowRight className="w-3.5 h-3.5 text-emerald-600" />
          </button>
        </div>
      </div>
    </section>
  );
};
