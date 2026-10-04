import React from 'react';
import {
  Shield,
  Phone,
  MessageSquare,
  Mail,
  MapPin,
  Clock,
} from 'lucide-react';
import { BUSINESS_INFO, SERVICES_LIST, DHAKA_NEIGHBORHOODS } from '../data/pestData';
import { trackEvent } from '../utils/analytics';

export const Footer: React.FC = () => {
  const handlePhoneClick = () => {
    trackEvent('phone_click', { location: 'footer' });
  };

  const handleWhatsAppClick = () => {
    trackEvent('whatsapp_click', { location: 'footer' });
  };

  return (
    <footer className="bg-slate-950 text-slate-300 border-t border-slate-800 text-left">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          {/* Col 1: Brand & Bio (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-700 flex items-center justify-center text-white shadow-md">
                <Shield className="w-5 h-5 stroke-[2.2]" />
              </div>
              <div>
                <div className="text-xl font-black text-white tracking-tight leading-tight">
                  Pest Control <span className="text-emerald-500">Glshan</span>
                </div>
                <p className="text-[10px] tracking-wider uppercase font-semibold text-slate-400">
                  Dhaka & Gulshan Pest Management
                </p>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-sm">
              Professional, structured pest control services for homes, apartments, restaurants,
              corporate offices, and commercial properties across Dhaka, Bangladesh.
            </p>

            <div className="pt-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-emerald-950/80 border border-emerald-800/80 text-emerald-400 text-xs font-bold">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                Serving Dhaka, Bangladesh
              </span>
            </div>

            {/* Social Icons Placeholder */}
            <div className="pt-2 flex items-center gap-3 text-slate-400">
              <a
                href="#facebook"
                aria-label="Facebook Page"
                className="w-8 h-8 rounded-lg bg-slate-900 border border-slate-800 hover:border-emerald-500 hover:text-white flex items-center justify-center transition-colors text-xs font-bold"
              >
                f
              </a>
              <a
                href="#linkedin"
                aria-label="LinkedIn Profile"
                className="w-8 h-8 rounded-lg bg-slate-900 border border-slate-800 hover:border-emerald-500 hover:text-white flex items-center justify-center transition-colors text-xs font-bold"
              >
                in
              </a>
              <a
                href="#instagram"
                aria-label="Instagram Profile"
                className="w-8 h-8 rounded-lg bg-slate-900 border border-slate-800 hover:border-emerald-500 hover:text-white flex items-center justify-center transition-colors text-xs font-bold"
              >
                ig
              </a>
            </div>
          </div>

          {/* Col 2: Services (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Pest Control Services
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              {SERVICES_LIST.slice(0, 8).map((srv) => (
                <li key={srv.id}>
                  <a
                    href="#services"
                    className="hover:text-emerald-400 transition-colors"
                  >
                    {srv.name}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="#services"
                  className="text-emerald-400 font-semibold hover:underline"
                >
                  View All 12 Services →
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Service Areas (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Key Dhaka Areas
            </h4>
            <ul className="space-y-1.5 text-xs text-slate-400">
              {DHAKA_NEIGHBORHOODS.slice(0, 8).map((area) => (
                <li key={area.name}>
                  <a
                    href="#service-areas"
                    className="hover:text-emerald-400 transition-colors"
                  >
                    {area.name}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="#service-areas"
                  className="text-emerald-400 font-semibold hover:underline"
                >
                  All Dhaka Zones →
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4: Contact Info & Hours (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Contact & Dispatch
            </h4>
            <div className="space-y-2.5 text-xs text-slate-400">
              <a
                href={`tel:${BUSINESS_INFO.phoneCall}`}
                onClick={handlePhoneClick}
                className="flex items-center gap-2.5 hover:text-emerald-400 transition-colors text-white font-semibold"
              >
                <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Call: {BUSINESS_INFO.phoneDisplay}</span>
              </a>

              <a
                href={`https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=Hello%20SafeGuard%20Pest%20Dhaka`}
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleWhatsAppClick}
                className="flex items-center gap-2.5 hover:text-emerald-400 transition-colors text-white font-semibold"
              >
                <MessageSquare className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>WhatsApp: {BUSINESS_INFO.whatsappDisplay}</span>
              </a>

              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-emerald-400 shrink-0" />
                <span className="truncate">{BUSINESS_INFO.email}</span>
              </div>

              <div className="flex items-start gap-2.5 pt-1">
                <MapPin className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>{BUSINESS_INFO.address}</span>
              </div>

              <div className="flex items-start gap-2.5 pt-1 border-t border-slate-800 text-slate-300">
                <Clock className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>{BUSINESS_INFO.operatingHours}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Legal & Copyright Bar */}
        <div className="mt-14 pt-8 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            © {new Date().getFullYear()} Pest Control Glshan. All rights reserved.
          </div>

          <div className="flex items-center gap-6">
            <a href="#privacy" className="hover:text-slate-300 transition-colors">
              Privacy Policy
            </a>
            <span>•</span>
            <a href="#terms" className="hover:text-slate-300 transition-colors">
              Terms & Conditions
            </a>
            <span>•</span>
            <span className="text-slate-400 font-medium">Serving Dhaka, Bangladesh</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
