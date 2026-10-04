import React from 'react';
import {
  UserCheck,
  ShieldCheck,
  Building2,
  MapPin,
  Clock,
} from 'lucide-react';
import { TRUST_POINTS } from '../data/pestData';

export const TrustBar: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'UserCheck':
        return <UserCheck className="w-5 h-5 text-emerald-600" />;
      case 'ShieldCheck':
        return <ShieldCheck className="w-5 h-5 text-emerald-600" />;
      case 'Building2':
        return <Building2 className="w-5 h-5 text-emerald-600" />;
      case 'MapPin':
        return <MapPin className="w-5 h-5 text-emerald-600" />;
      case 'Clock':
      default:
        return <Clock className="w-5 h-5 text-emerald-600" />;
    }
  };

  return (
    <section className="relative z-10 -mt-6 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="bg-white rounded-2xl shadow-xl border border-slate-200/80 p-6 lg:p-7">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 lg:gap-4 divide-y sm:divide-y-0 sm:divide-x divide-slate-100">
          {TRUST_POINTS.map((item, index) => (
            <div
              key={item.id}
              className={`flex items-start gap-3.5 text-left ${
                index !== 0 ? 'pt-4 sm:pt-0 sm:pl-4 lg:pl-4' : ''
              }`}
            >
              <div className="w-10 h-10 rounded-xl bg-emerald-50 border border-emerald-100 flex items-center justify-center shrink-0">
                {getIcon(item.iconName)}
              </div>
              <div>
                <div className="text-sm font-bold text-slate-900 flex items-center gap-1.5">
                  <span className="text-emerald-600 text-xs">✓</span>
                  <span>{item.title}</span>
                </div>
                <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
