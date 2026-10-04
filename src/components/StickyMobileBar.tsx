import React from 'react';
import { Phone, MessageSquare, ClipboardList } from 'lucide-react';
import { BUSINESS_INFO } from '../data/pestData';
import { trackEvent } from '../utils/analytics';

interface StickyMobileBarProps {
  onOpenBookingModal: () => void;
}

export const StickyMobileBar: React.FC<StickyMobileBarProps> = ({
  onOpenBookingModal,
}) => {
  const handlePhoneClick = () => {
    trackEvent('phone_click', { location: 'sticky_mobile_bottom_bar' });
  };

  const handleWhatsAppClick = () => {
    trackEvent('whatsapp_click', { location: 'sticky_mobile_bottom_bar' });
  };

  const handleQuoteClick = () => {
    trackEvent('quote_request', { location: 'sticky_mobile_bottom_bar' });
    onOpenBookingModal();
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 lg:hidden bg-slate-950/95 backdrop-blur-md border-t border-slate-800 px-3 py-2.5 shadow-2xl safe-area-bottom">
      <div className="max-w-md mx-auto grid grid-cols-3 gap-2">
        {/* Get Quote (Left) */}
        <button
          onClick={handleQuoteClick}
          className="flex flex-col items-center justify-center py-2 px-1 rounded-xl bg-amber-500 text-slate-950 hover:bg-amber-400 active:scale-95 transition-all text-center shadow-md focus:outline-hidden cursor-pointer"
        >
          <ClipboardList className="w-4 h-4 text-slate-950 mb-1" />
          <span className="text-[11px] font-bold tracking-tight">Get Quote</span>
        </button>

        {/* WhatsApp (Middle) */}
        <a
          href={`https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=Hello%20Pest%20Control%20Glshan%2C%20I%20would%20like%20to%20get%20a%20quote.`}
          target="_blank"
          rel="noopener noreferrer"
          onClick={handleWhatsAppClick}
          className="flex flex-col items-center justify-center py-2 px-1 rounded-xl bg-emerald-600 text-white hover:bg-emerald-500 active:scale-95 transition-all text-center shadow-md focus:outline-hidden"
        >
          <MessageSquare className="w-4 h-4 text-white mb-1" />
          <span className="text-[11px] font-bold tracking-tight">WhatsApp</span>
        </a>

        {/* Call Now (Opposite Side: Right) */}
        <a
          href={`tel:${BUSINESS_INFO.phoneCall}`}
          onClick={handlePhoneClick}
          className="flex flex-col items-center justify-center py-2 px-1 rounded-xl bg-slate-900 border border-slate-700/80 text-white hover:bg-slate-800 active:scale-95 transition-all text-center focus:outline-hidden"
        >
          <Phone className="w-4 h-4 text-emerald-400 mb-1" />
          <span className="text-[11px] font-bold tracking-tight">Call Now</span>
        </a>
      </div>
    </div>
  );
};
