import React from 'react';
import { X, CheckCircle2, Shield, ArrowRight, MessageSquare } from 'lucide-react';
import { ServiceItem } from '../types';
import { BUSINESS_INFO } from '../data/pestData';
import { trackEvent } from '../utils/analytics';

interface ServiceDetailModalProps {
  service: ServiceItem | null;
  onClose: () => void;
  onBookService: (service: ServiceItem) => void;
}

export const ServiceDetailModal: React.FC<ServiceDetailModalProps> = ({
  service,
  onClose,
  onBookService,
}) => {
  if (!service) return null;

  const handleBook = () => {
    onClose();
    onBookService(service);
  };

  const handleWhatsApp = () => {
    trackEvent('whatsapp_click', {
      service_id: service.id,
      service_name: service.name,
      location: 'service_detail_modal',
    });
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/75 backdrop-blur-xs overflow-y-auto animate-fade-in">
      <div className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden my-8 text-left">
        {/* Top Image Banner */}
        <div className="relative h-56 sm:h-64 w-full bg-slate-900">
          <img
            src={service.imageUrl}
            alt={service.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />

          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-9 h-9 rounded-full bg-slate-900/80 text-white hover:bg-slate-900 flex items-center justify-center transition-colors"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="absolute bottom-4 left-6 right-6">
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-400 bg-emerald-950/80 px-2.5 py-1 rounded-md border border-emerald-800">
              Service #{service.number} • Dhaka Pest Management
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white mt-1">
              {service.name}
            </h3>
          </div>
        </div>

        {/* Content Body */}
        <div className="p-6 sm:p-8 space-y-6">
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
              Overview & Approach
            </h4>
            <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
              {service.fullDesc}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2 border-t border-slate-100">
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                Target Pests
              </h4>
              <div className="flex flex-wrap gap-1.5">
                {service.targetPests.map((pest, i) => (
                  <span
                    key={i}
                    className="text-xs px-2.5 py-1 rounded-md bg-slate-100 text-slate-800 font-medium"
                  >
                    {pest}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                Recommended Properties
              </h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                {service.recommendedFor}
              </p>
            </div>
          </div>

          <div className="space-y-2 pt-2 border-t border-slate-100">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">
              Treatment Protocols
            </h4>
            <div className="space-y-1.5">
              {service.treatmentHighlights.map((hl, idx) => (
                <div key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>{hl}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Action CTAs */}
          <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-3">
            <a
              href={`https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=Hello%20Pest%20Control%20Glshan%2C%20I%20want%20to%20ask%20about%20${encodeURIComponent(service.name)}.`}
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleWhatsApp}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl border border-emerald-300 text-emerald-800 hover:bg-emerald-50 text-xs font-bold transition-colors"
            >
              <MessageSquare className="w-4 h-4 text-emerald-600" />
              <span>Ask on WhatsApp</span>
            </a>

            <button
              onClick={handleBook}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold shadow-md transition-all cursor-pointer"
            >
              <span>Get Quote for {service.name}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
