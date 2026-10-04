import React, { useState } from 'react';
import {
  CalendarCheck,
  Send,
  MessageSquare,
  CheckCircle2,
  Clock,
  Shield,
  Phone,
} from 'lucide-react';
import {
  PROPERTY_TYPES_OPTIONS,
  PEST_PROBLEM_OPTIONS,
  DHAKA_NEIGHBORHOODS,
  BUSINESS_INFO,
} from '../data/pestData';
import { PropertyType, PestType, BookingFormData } from '../types';
import { trackEvent } from '../utils/analytics';

interface LeadFormProps {
  initialPest?: string;
  initialArea?: string;
}

export const LeadForm: React.FC<LeadFormProps> = ({
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

  // Sync if initialPest or initialArea changes
  React.useEffect(() => {
    if (initialPest) {
      setFormData((prev) => ({
        ...prev,
        pestProblem: (initialPest as PestType) || prev.pestProblem,
      }));
    }
  }, [initialPest]);

  React.useEffect(() => {
    if (initialArea) {
      setFormData((prev) => ({
        ...prev,
        dhakaArea: initialArea,
      }));
    }
  }, [initialArea]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);

    // Track conversion event
    trackEvent('form_submit', {
      property_type: formData.propertyType,
      pest_problem: formData.pestProblem,
      dhaka_area: formData.dhakaArea,
      has_email: Boolean(formData.email),
    });

    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
    }, 600);
  };

  const constructWhatsAppMessage = () => {
    const text = `Hello Pest Control Glshan! I have submitted a service request:\n• Name: ${formData.fullName}\n• Phone: ${formData.phoneNumber}\n• Area: ${formData.dhakaArea}\n• Property: ${formData.propertyType}\n• Pest: ${formData.pestProblem}\n• Preferred Date: ${formData.preferredDate || 'Earliest Available'}\n${formData.message ? `• Note: ${formData.message}` : ''}`;
    return encodeURIComponent(text);
  };

  return (
    <section id="quote-form-section" className="py-20 bg-slate-900 text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Form Intro & Trust Anchors */}
          <div className="lg:col-span-5 space-y-6 text-left">
            <div className="inline-flex items-center gap-2.5 px-6 py-2.5 rounded-2xl bg-emerald-500/20 text-emerald-300 text-xs sm:text-sm font-extrabold uppercase tracking-widest border border-emerald-500/40 shadow-md backdrop-blur-xs">
              <CalendarCheck className="w-4 h-4 text-emerald-400 shrink-0" />
              Fast Booking & Quotation
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Request Your Pest Control Service or Free Inspection
            </h2>

            <p className="text-base text-slate-300 leading-relaxed">
              Fill out this quick form with your property details and pest issue. Our Dhaka operations desk
              reviews your request and responds promptly with availability and treatment options.
            </p>

            <div className="space-y-4 pt-4 border-t border-slate-800">
              <div className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-xl bg-slate-800 border border-slate-700 flex items-center justify-center shrink-0 text-emerald-400">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">Prompt Scheduling</h4>
                  <p className="text-xs text-slate-400">
                    Same-day and next-day inspection slots frequently available across Gulshan, Banani, Dhanmondi, and Uttara.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-xl bg-slate-800 border border-slate-700 flex items-center justify-center shrink-0 text-emerald-400">
                  <Shield className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">No Hidden Obligations</h4>
                  <p className="text-xs text-slate-400">
                    Transparent pricing shared before any work begins on your flat, villa, or commercial venue.
                  </p>
                </div>
              </div>
            </div>

            {/* Direct Call / WhatsApp alternative */}
            <div className="pt-2 p-5 rounded-2xl bg-slate-950/70 border border-slate-800">
              <p className="text-xs text-slate-400 mb-2 font-medium">Need immediate assistance right now?</p>
              <div className="flex flex-wrap items-center gap-3">
                <a
                  href={`tel:${BUSINESS_INFO.phoneCall}`}
                  onClick={() => trackEvent('phone_click', { location: 'form_side_box' })}
                  className="inline-flex items-center gap-2 text-xs font-bold text-emerald-400 hover:text-emerald-300"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>Call: {BUSINESS_INFO.phoneDisplay}</span>
                </a>
                <span className="text-slate-600">•</span>
                <a
                  href={`https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=Hello%20SafeGuard%20Pest%20Dhaka%2C%20I%20need%20quick%20booking.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => trackEvent('whatsapp_click', { location: 'form_side_box' })}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-400 hover:text-emerald-300"
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span>WhatsApp Direct</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Lead Form */}
          <div className="lg:col-span-7">
            <div className="bg-white text-slate-900 rounded-3xl p-6 sm:p-9 shadow-2xl border border-slate-200 text-left">
              {submitted ? (
                <div className="py-8 text-center space-y-5">
                  <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-2xl font-bold text-slate-900">
                      Request Received Successfully!
                    </h3>
                    <p className="text-sm text-slate-600 max-w-md mx-auto">
                      Thank you, <span className="font-semibold">{formData.fullName}</span>. Our Dhaka team will contact you shortly at <span className="font-semibold">{formData.phoneNumber}</span> to confirm your inspection.
                    </p>
                  </div>

                  <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-center gap-3">
                    <a
                      href={`https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=${constructWhatsAppMessage()}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm shadow-md transition-all"
                    >
                      <MessageSquare className="w-4 h-4" />
                      <span>Send to WhatsApp Instantly</span>
                    </a>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="w-full sm:w-auto px-5 py-3 rounded-xl border border-slate-300 text-slate-700 font-semibold text-sm hover:bg-slate-50 transition-colors"
                    >
                      Submit Another Request
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="border-b border-slate-100 pb-3 mb-2">
                    <h3 className="text-xl font-extrabold text-slate-900">
                      Request Pest Control Service
                    </h3>
                    <p className="text-xs text-slate-500">
                      Fast booking for apartments, villas, and commercial properties in Dhaka.
                    </p>
                  </div>

                  {/* Name & Phone */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.fullName}
                        onChange={(e) =>
                          setFormData({ ...formData, fullName: e.target.value })
                        }
                        placeholder="e.g. Tanvir Ahmed"
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-hidden focus:border-emerald-600 focus:ring-2 focus:ring-emerald-500/20"
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
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-hidden focus:border-emerald-600 focus:ring-2 focus:ring-emerald-500/20"
                      />
                    </div>
                  </div>

                  {/* Email & Location Area */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        Email Address
                      </label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        placeholder="e.g. tanvir@example.com"
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-hidden focus:border-emerald-600 focus:ring-2 focus:ring-emerald-500/20"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        Location / Dhaka Area *
                      </label>
                      <select
                        value={formData.dhakaArea}
                        onChange={(e) =>
                          setFormData({ ...formData, dhakaArea: e.target.value })
                        }
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm bg-white focus:outline-hidden focus:border-emerald-600 focus:ring-2 focus:ring-emerald-500/20"
                      >
                        {DHAKA_NEIGHBORHOODS.map((area) => (
                          <option key={area.name} value={area.name}>
                            {area.name} ({area.zone})
                          </option>
                        ))}
                        <option value="Other Dhaka Area">Other Dhaka Neighborhood</option>
                      </select>
                    </div>
                  </div>

                  {/* Property Type & Pest Problem */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
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
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm bg-white focus:outline-hidden focus:border-emerald-600 focus:ring-2 focus:ring-emerald-500/20"
                      >
                        {PROPERTY_TYPES_OPTIONS.map((pt) => (
                          <option key={pt} value={pt}>
                            {pt}
                          </option>
                        ))}
                      </select>
                    </div>

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
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm bg-white focus:outline-hidden focus:border-emerald-600 focus:ring-2 focus:ring-emerald-500/20"
                      >
                        {PEST_PROBLEM_OPTIONS.map((pest) => (
                          <option key={pest} value={pest}>
                            {pest}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Preferred Date */}
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Preferred Date for Inspection / Service
                    </label>
                    <input
                      type="date"
                      value={formData.preferredDate}
                      onChange={(e) =>
                        setFormData({ ...formData, preferredDate: e.target.value })
                      }
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-hidden focus:border-emerald-600 focus:ring-2 focus:ring-emerald-500/20"
                    />
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Message / Special Details
                    </label>
                    <textarea
                      rows={2}
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      placeholder="e.g. Infestation noticed under kitchen sink cabinets and around bedroom baseboards..."
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-hidden focus:border-emerald-600 focus:ring-2 focus:ring-emerald-500/20"
                    />
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={submitting}
                      className="w-full py-4 px-6 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-base shadow-lg shadow-emerald-700/20 hover:shadow-xl transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-75"
                    >
                      {submitting ? (
                        <span>Processing Request...</span>
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          <span>Request Pest Control Service</span>
                        </>
                      )}
                    </button>
                  </div>

                  <p className="text-[11px] text-slate-400 text-center pt-1">
                    🔒 Your contact details are kept strictly confidential. No spam guaranteed.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
