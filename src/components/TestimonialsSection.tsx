import React from 'react';
import { Star, ShieldCheck, ExternalLink, MessageSquare } from 'lucide-react';
import { TESTIMONIALS_DATA, BUSINESS_INFO } from '../data/pestData';
import { trackEvent } from '../utils/analytics';

export const TestimonialsSection: React.FC = () => {
  const handleReviewCta = () => {
    trackEvent('contact_click', { action: 'google_reviews_placeholder_click' });
  };

  return (
    <section id="reviews" className="py-20 bg-slate-50 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-4">
          <div className="inline-flex items-center gap-2.5 px-6 py-2.5 rounded-2xl bg-white border border-slate-300 text-slate-900 text-xs sm:text-sm font-extrabold uppercase tracking-widest shadow-xs">
            <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
            Customer Feedback & Reviews
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            What Our Customers Say
          </h2>

          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Read direct feedback from residential and commercial clients across Dhaka who trust our
            structured pest management service.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {TESTIMONIALS_DATA.map((t) => (
            <div
              key={t.id}
              className="bg-white rounded-2xl p-6 border border-slate-200 shadow-xs hover:shadow-md transition-shadow flex flex-col justify-between text-left"
            >
              <div className="space-y-3">
                {/* 5 Star Rating */}
                <div className="flex items-center gap-1 text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400" />
                  ))}
                </div>

                {/* Review Text */}
                <p className="text-xs sm:text-sm text-slate-600 italic leading-relaxed">
                  &ldquo;{t.reviewText}&rdquo;
                </p>
              </div>

              {/* Reviewer Details */}
              <div className="pt-4 mt-4 border-t border-slate-100 space-y-1">
                <div className="text-sm font-bold text-slate-900">
                  {t.name}
                </div>
                <div className="text-xs text-slate-500 font-medium">
                  {t.clientRole} • {t.location}
                </div>
                <div className="inline-flex items-center gap-1 text-[11px] text-emerald-700 font-semibold pt-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-600" />
                  <span>Verified Customer Review</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Google Reviews CTA Bar */}
        <div className="mt-12 max-w-xl mx-auto p-4 rounded-2xl bg-white border border-slate-200 shadow-xs flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
              <Star className="w-5 h-5 fill-emerald-600 text-emerald-600" />
            </div>
            <div>
              <p className="text-xs font-bold text-slate-900">
                Are you a current or past client?
              </p>
              <p className="text-[11px] text-slate-500">
                We value your authentic feedback on our Dhaka service.
              </p>
            </div>
          </div>

          <a
            href={BUSINESS_INFO.googleReviewsLink}
            onClick={handleReviewCta}
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-bold transition-colors shrink-0"
          >
            <span>[GOOGLE REVIEW LINK]</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </section>
  );
};
