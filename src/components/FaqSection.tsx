import React, { useState } from 'react';
import {
  HelpCircle,
  ChevronDown,
  Search,
  MessageSquare,
  Phone,
} from 'lucide-react';
import { FAQS_LIST, BUSINESS_INFO } from '../data/pestData';
import { FaqItem } from '../types';
import { trackEvent } from '../utils/analytics';

export const FaqSection: React.FC = () => {
  const [openId, setOpenId] = useState<number | null>(1); // first item open by default
  const [search, setSearch] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', 'General', 'Pricing & Inspection', 'Safety', 'Dhaka Areas'];

  const filteredFaqs = FAQS_LIST.filter((faq: FaqItem) => {
    const matchesSearch =
      faq.question.toLowerCase().includes(search.toLowerCase()) ||
      faq.answer.toLowerCase().includes(search.toLowerCase());
    const matchesCat = selectedCategory === 'All' || faq.category === selectedCategory;
    return matchesSearch && matchesCat;
  });

  const toggleAccordion = (id: number) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section id="faqs" className="py-20 bg-white border-t border-slate-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center space-y-4 mb-12">
          <div className="inline-flex items-center gap-2.5 px-6 py-2.5 rounded-2xl bg-slate-900 border border-slate-800 text-emerald-400 text-xs sm:text-sm font-extrabold uppercase tracking-widest shadow-sm">
            <HelpCircle className="w-4 h-4 text-emerald-400 shrink-0" />
            Frequently Asked Questions
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Common Inquiries About Dhaka Pest Control
          </h2>

          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Everything you need to know about pricing, duration, family safety, and preparation
            before scheduling a treatment for your Dhaka property.
          </p>

          {/* Search & Category Filter */}
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-3">
            <div className="relative w-full sm:w-72">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search questions (e.g. cost, cockroach)..."
                className="w-full pl-10 pr-4 py-2 rounded-xl border border-slate-200 text-xs sm:text-sm focus:outline-hidden focus:border-emerald-600"
              />
            </div>

            <div className="flex flex-wrap items-center justify-center gap-1.5 w-full sm:w-auto">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors ${
                    selectedCategory === cat
                      ? 'bg-emerald-600 text-white shadow-xs'
                      : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Accordions List (All 15 Questions) */}
        <div className="space-y-3.5 text-left">
          {filteredFaqs.map((faq: FaqItem) => {
            const isOpen = openId === faq.id;
            return (
              <div
                key={faq.id}
                className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                  isOpen
                    ? 'border-emerald-300 bg-emerald-50/15 shadow-sm'
                    : 'border-slate-200 hover:border-slate-300 bg-white'
                }`}
              >
                <button
                  onClick={() => toggleAccordion(faq.id)}
                  aria-expanded={isOpen}
                  className="w-full px-5 py-4 sm:p-5 flex items-center justify-between gap-4 text-left font-bold text-slate-900 focus:outline-hidden"
                >
                  <span className="text-sm sm:text-base leading-snug">
                    {faq.question}
                  </span>
                  <div
                    className={`w-7 h-7 rounded-full bg-slate-100 flex items-center justify-center shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 bg-emerald-100 text-emerald-700' : 'text-slate-600'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 sm:px-6 sm:pb-6 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-3">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Bottom Help Prompt */}
        <div className="mt-12 text-center p-6 rounded-2xl bg-slate-50 border border-slate-200 text-slate-600 text-xs sm:text-sm">
          <span>Have an unanswered question regarding your specific pest problem? </span>
          <a
            href={`tel:${BUSINESS_INFO.phoneCall}`}
            onClick={() => trackEvent('phone_click', { location: 'faq_footer' })}
            className="text-emerald-700 font-bold hover:underline ml-1"
          >
            Speak directly with our team at {BUSINESS_INFO.phoneDisplay}
          </a>
        </div>
      </div>
    </section>
  );
};
