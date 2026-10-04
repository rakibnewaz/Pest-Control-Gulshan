import React, { useState, useEffect } from 'react';
import {
  X,
  CalendarCheck,
  Send,
  MessageSquare,
  CheckCircle2,
  Phone,
  Shield,
} from 'lucide-react';
import {
  PROPERTY_TYPES_OPTIONS,
  PEST_PROBLEM_OPTIONS,
  DHAKA_NEIGHBORHOODS,
  BUSINESS_INFO,
} from '../data/pestData';
import { PropertyType, PestType, BookingFormData } from '../types';
import { trackEvent } from '../utils/analytics';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialPest?: string;
  initialArea?: string;
}

export const BookingModal: React.FC<BookingModalProps> = ({
  isOpen,
  onClose,
  initialPest,
  initialArea,
}) => {
  const [formData, setFormData] = useState<BookingFormData>({
    fullName: '',
    phoneNumber: '',
    email: '',
    propertyType: 'Apartment / Flat',
    pestProblem: (initialPest as PestType) || 'Cockroaches',
    dhakaArea: initialArea || 'Gulshan',
    preferredDate: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    if (initialPest) {
      setFormData((prev) => ({
        ...prev,
        pestProblem: (initialPest as PestType) || prev.pestProblem,
      }));
    }
  }, [initialPest]);

  useEffect(() => {
    if (initialArea) {
      setFormData((prev) => ({
        ...prev,
        dhakaArea: initialArea,
      }));
    }
  }, [initialArea]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);

    trackEvent('form_submit', {
      source: 'booking_modal',
      property_type: formData.propertyType,
      pest_problem: formData.pestProblem,
      dhaka_area: formData.dhakaArea,
    });

    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
    }, 500);
  };

  const constructWhatsAppMessage = () => {
    const text = `Hello SafeGuard Pest Dhaka! I requested a booking:\n• Name: ${formData.fullName}\n• Phone: ${formData.phoneNumber}\n• Area: ${formData.dhakaArea}\n• Property: ${formData.propertyType}\n• Pest: ${formData.pestProblem}\n• Date: ${formData.preferredDate || 'Earliest'}`;
    return encodeURIComponent(text);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/75 backdrop-blur-xs overflow-y-auto animate-fade-in">
      <div className="relative w-full max-w-xl bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden my-8">
        {/* Modal Top Bar */}
        <div className="bg-slate-900 text-white p-5 sm:p-6 flex items-center justify-between text-left">
          <div className="space-y-1">
            <span className="text-xs font-bold text-emerald-400 uppercase tracking-wider flex items-center gap-1.5">
              <Shield className="w-3.5 h-3.5" />
              Pest Control Glshan
            </span>
            <h3 className="text-lg sm:text-xl font-extrabold text-white">
              Get a Free Inspection & Service Quote
            </h3>
          </div>
          <button
            onClick={onClose}
            className="w-9 h-9 rounded-full bg-slate-800 text-slate-300 hover:text-white hover:bg-slate-700 flex items-center justify-center transition-colors"
            aria-label="Close Modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Content */}
        <div className="p-6 sm:p-7 text-left">
          {submitted ? (
            <div className="text-center py-6 space-y-4">
              <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h4 className="text-xl font-bold text-slate-900">
                Inspection Request Submitted!
              </h4>
              <p className="text-xs sm:text-sm text-slate-600">
                Our Dhaka dispatch coordinator will review your request and call{' '}
                <span className="font-semibold text-slate-900">{formData.phoneNumber}</span> shortly.
              </p>

              <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
                <a
                  href={`https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=${constructWhatsAppMessage()}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs shadow-md"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Send to WhatsApp</span>
                </a>
                <button
                  onClick={onClose}
                  className="w-full sm:w-auto px-5 py-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-xs"
                >
                  Close Window
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.fullName}
                    onChange={(e) =>
                      setFormData({ ...formData, fullName: e.target.value })
                    }
                    placeholder="e.g. Mahbub Rahman"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs sm:text-sm focus:outline-hidden focus:border-emerald-600 focus:ring-2 focus:ring-emerald-500/20"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phoneNumber}
                    onChange={(e) =>
                      setFormData({ ...formData, phoneNumber: e.target.value })
                    }
                    placeholder="+880 1XXXXXXXXX"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs sm:text-sm focus:outline-hidden focus:border-emerald-600 focus:ring-2 focus:ring-emerald-500/20"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Dhaka Location / Area *
                  </label>
                  <select
                    value={formData.dhakaArea}
                    onChange={(e) =>
                      setFormData({ ...formData, dhakaArea: e.target.value })
                    }
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs sm:text-sm bg-white focus:outline-hidden focus:border-emerald-600"
                  >
                    {DHAKA_NEIGHBORHOODS.map((area) => (
                      <option key={area.name} value={area.name}>
                        {area.name}
                      </option>
                    ))}
                    <option value="Other Area">Other Dhaka Neighborhood</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Property Type *
                  </label>
                  <select
                    value={formData.propertyType}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        propertyType: e.target.value as PropertyType,
                      })
                    }
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs sm:text-sm bg-white focus:outline-hidden focus:border-emerald-600"
                  >
                    {PROPERTY_TYPES_OPTIONS.map((pt) => (
                      <option key={pt} value={pt}>
                        {pt}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Pest Problem *
                  </label>
                  <select
                    value={formData.pestProblem}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        pestProblem: e.target.value as PestType,
                      })
                    }
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs sm:text-sm bg-white focus:outline-hidden focus:border-emerald-600"
                  >
                    {PEST_PROBLEM_OPTIONS.map((p) => (
                      <option key={p} value={p}>
                        {p}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Preferred Date
                  </label>
                  <input
                    type="date"
                    value={formData.preferredDate}
                    onChange={(e) =>
                      setFormData({ ...formData, preferredDate: e.target.value })
                    }
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs sm:text-sm focus:outline-hidden focus:border-emerald-600"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Additional Details / Notes
                </label>
                <textarea
                  rows={2}
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  placeholder="e.g. Size of flat, specific rooms affected..."
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs sm:text-sm focus:outline-hidden focus:border-emerald-600"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full py-3.5 px-6 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  <span>Request Pest Control Service</span>
                </button>
              </div>

              <p className="text-[11px] text-slate-400 text-center">
                Need urgent booking right now? Call{' '}
                <a
                  href={`tel:${BUSINESS_INFO.phoneCall}`}
                  className="text-emerald-700 font-bold hover:underline"
                >
                  {BUSINESS_INFO.phoneDisplay}
                </a>
              </p>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
