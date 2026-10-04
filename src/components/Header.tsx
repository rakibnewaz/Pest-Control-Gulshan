import React, { useState, useEffect } from 'react';
import {
  Phone,
  MessageSquare,
  Shield,
  Menu,
  X,
  MapPin,
  Clock,
  ChevronRight,
} from 'lucide-react';
import { BUSINESS_INFO } from '../data/pestData';
import { trackEvent } from '../utils/analytics';

interface HeaderProps {
  onOpenBookingModal: (initialPest?: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenBookingModal }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Track if page is scrolled past top threshold
      setIsScrolled(currentScrollY > 40);

      // Top of page: always keep visible
      if (currentScrollY <= 40) {
        setIsHeaderVisible(true);
      } else if (currentScrollY > lastScrollY && currentScrollY > 70) {
        // Scrolling DOWN -> hide the header menu
        setIsHeaderVisible(false);
        setMobileMenuOpen(false);
      } else if (currentScrollY < lastScrollY) {
        // Scrolling UP -> reveal the header menu
        setIsHeaderVisible(true);
      }

      lastScrollY = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handlePhoneClick = () => {
    trackEvent('phone_click', { location: 'header_top_bar' });
  };

  const handleWhatsAppClick = () => {
    trackEvent('whatsapp_click', { location: 'header_top_bar' });
  };

  const handleNavClick = (sectionId: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleGetInspectionClick = () => {
    trackEvent('quote_request', { location: 'header_cta_button' });
    onOpenBookingModal();
  };

  return (
    <header
      className={`sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200/80 shadow-xs transition-transform duration-300 ease-in-out ${
        isHeaderVisible ? 'translate-y-0' : '-translate-y-full'
      }`}
    >
      {/* Top Notification / Trust Strip (Collapses on scroll to save space) */}
      <div
        className={`bg-slate-900 text-slate-200 text-xs px-4 sm:px-8 border-b border-slate-800 transition-all duration-300 overflow-hidden ${
          isScrolled
            ? 'max-h-0 py-0 opacity-0 border-b-0'
            : 'max-h-16 py-2 opacity-100'
        }`}
      >
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
          <div className="flex items-center gap-4 text-xs font-medium">
            <span className="inline-flex items-center gap-1.5 text-emerald-400">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              Serving All Dhaka City Neighborhoods
            </span>
            <span className="hidden md:inline text-slate-500">•</span>
            <span className="hidden md:flex items-center gap-1 text-slate-300">
              <MapPin className="w-3.5 h-3.5 text-emerald-400" />
              Gulshan • Banani • Dhanmondi • Uttara • DOHS Areas
            </span>
          </div>

          <div className="flex items-center gap-4 text-xs">
            <span className="hidden lg:flex items-center gap-1 text-slate-300">
              <Clock className="w-3.5 h-3.5 text-emerald-400" />
              8:00 AM – 8:00 PM Daily
            </span>
            <a
              href={`tel:${BUSINESS_INFO.phoneCall}`}
              onClick={handlePhoneClick}
              className="font-semibold text-white hover:text-emerald-300 transition-all flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-slate-800/90 border border-slate-700/80 hover:border-emerald-500/50 shadow-xs"
            >
              <Phone className="w-3.5 h-3.5 text-emerald-400 animate-pulse" />
              <span className="font-bold tracking-wide text-emerald-400 hover:text-emerald-300">
                Call: {BUSINESS_INFO.phoneDisplay}
              </span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo / Brand Name */}
          <a
            href="#"
            className="flex items-center gap-3 group text-left focus:outline-hidden"
          >
            <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-emerald-600 to-teal-800 flex items-center justify-center text-white shadow-md shadow-emerald-900/20 group-hover:scale-105 transition-transform">
              <Shield className="w-6 h-6 stroke-[2.2]" />
            </div>
            <div>
              <div className="text-xl sm:text-2xl font-black tracking-tight text-slate-900 leading-tight group-hover:text-emerald-950 transition-colors">
                Pest Control <span className="text-emerald-600 font-black">Glshan</span>
              </div>
              <p className="text-[11px] font-semibold tracking-wide uppercase text-slate-500">
                Dhaka & Gulshan Pest Management
              </p>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-7 text-sm font-semibold text-slate-700">
            <button
              onClick={() => handleNavClick('services')}
              className="hover:text-emerald-600 transition-colors py-2"
            >
              Services
            </button>
            <button
              onClick={() => handleNavClick('pests')}
              className="hover:text-emerald-600 transition-colors py-2"
            >
              Pests We Control
            </button>
            <button
              onClick={() => handleNavClick('process')}
              className="hover:text-emerald-600 transition-colors py-2"
            >
              How It Works
            </button>
            <button
              onClick={() => handleNavClick('why-us')}
              className="hover:text-emerald-600 transition-colors py-2"
            >
              Why Choose Us
            </button>
            <button
              onClick={() => handleNavClick('results')}
              className="hover:text-emerald-600 transition-colors py-2"
            >
              Visual Proof
            </button>
            <button
              onClick={() => handleNavClick('service-areas')}
              className="hover:text-emerald-600 transition-colors py-2"
            >
              Dhaka Areas
            </button>
            <button
              onClick={() => handleNavClick('faqs')}
              className="hover:text-emerald-600 transition-colors py-2"
            >
              FAQs
            </button>
          </nav>

          {/* Action CTAs */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href={`https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=Hello%20Pest%20Control%20Glshan%2C%20I%20would%20like%20to%20inquire%20about%20pest%20control%20service.`}
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleWhatsAppClick}
              className="inline-flex items-center gap-2 px-3.5 py-2.5 rounded-lg text-emerald-800 bg-emerald-50 hover:bg-emerald-100/80 border border-emerald-200/80 text-xs font-bold transition-all"
              title="Chat with us on WhatsApp"
            >
              <MessageSquare className="w-4 h-4 text-emerald-600" />
              <span>WhatsApp</span>
            </a>

            <button
              onClick={handleGetInspectionClick}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold shadow-md shadow-emerald-600/25 hover:shadow-lg transition-all"
            >
              <span>Get Free Inspection</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center lg:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-700 hover:bg-slate-100 focus:outline-hidden"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-slate-200 bg-white px-4 pt-4 pb-6 space-y-3 shadow-xl">
          <div className="flex flex-col space-y-2 text-base font-semibold text-slate-800">
            <button
              onClick={() => handleNavClick('services')}
              className="text-left py-2 px-3 rounded-md hover:bg-slate-50"
            >
              Our Services (12 Categories)
            </button>
            <button
              onClick={() => handleNavClick('pests')}
              className="text-left py-2 px-3 rounded-md hover:bg-slate-50"
            >
              Pests We Control
            </button>
            <button
              onClick={() => handleNavClick('process')}
              className="text-left py-2 px-3 rounded-md hover:bg-slate-50"
            >
              Our Pest Control Process
            </button>
            <button
              onClick={() => handleNavClick('why-us')}
              className="text-left py-2 px-3 rounded-md hover:bg-slate-50"
            >
              Why Choose Us
            </button>
            <button
              onClick={() => handleNavClick('results')}
              className="text-left py-2 px-3 rounded-md hover:bg-slate-50"
            >
              Real Results & Proof
            </button>
            <button
              onClick={() => handleNavClick('service-areas')}
              className="text-left py-2 px-3 rounded-md hover:bg-slate-50"
            >
              Service Areas in Dhaka
            </button>
            <button
              onClick={() => handleNavClick('faqs')}
              className="text-left py-2 px-3 rounded-md hover:bg-slate-50"
            >
              Questions & Answers
            </button>
          </div>

          <div className="pt-3 border-t border-slate-100 flex flex-col gap-2.5">
            <a
              href={`tel:${BUSINESS_INFO.phoneCall}`}
              onClick={handlePhoneClick}
              className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-slate-900 text-white font-bold text-sm"
            >
              <Phone className="w-4 h-4 text-emerald-400" />
              Call Now: {BUSINESS_INFO.phoneDisplay}
            </a>

            <a
              href={`https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=Hello%20Pest%20Control%20Glshan`}
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleWhatsAppClick}
              className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-emerald-600 text-white font-bold text-sm shadow-md"
            >
              <MessageSquare className="w-4 h-4" />
              Chat on WhatsApp
            </a>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                handleGetInspectionClick();
              }}
              className="w-full py-3 px-4 rounded-xl bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold text-sm"
            >
              Book a Free Inspection
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
