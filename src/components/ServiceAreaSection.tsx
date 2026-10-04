import React, { useState } from 'react';
import {
  MapPin,
  Search,
  CheckCircle2,
  Navigation,
  Sparkles,
  Info,
} from 'lucide-react';
import { DHAKA_NEIGHBORHOODS } from '../data/pestData';
import { DhakaNeighborhood } from '../types';

interface ServiceAreaSectionProps {
  onSelectAreaForQuote: (areaName: string) => void;
}

export const ServiceAreaSection: React.FC<ServiceAreaSectionProps> = ({
  onSelectAreaForQuote,
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedZone, setSelectedZone] = useState<string>('All');

  const zones = ['All', 'Diplomatic & Premium', 'North Dhaka', 'Central Dhaka', 'Cantonment / DOHS', 'South Dhaka'];

  const filteredAreas = DHAKA_NEIGHBORHOODS.filter((area) => {
    const matchesSearch =
      area.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      area.popularPropertyTypes.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesZone = selectedZone === 'All' || area.zone === selectedZone;
    return matchesSearch && matchesZone;
  });

  return (
    <section id="service-areas" className="py-20 bg-slate-50 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <div className="inline-flex items-center gap-2.5 px-6 py-2.5 rounded-2xl bg-emerald-100/90 border border-emerald-300 text-emerald-950 text-xs sm:text-sm font-extrabold uppercase tracking-widest shadow-xs">
            <Navigation className="w-4 h-4 text-emerald-700 shrink-0" />
            Greater Dhaka Coverage
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Pest Control Services Across Dhaka
          </h2>

          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Our mobile technician units operate throughout Dhaka, providing reliable residential and
            commercial pest management tailored to local building architectures and environmental factors.
          </p>
        </div>

        {/* Interactive Search & Zone Filter Bar */}
        <div className="max-w-4xl mx-auto mb-8 bg-white rounded-2xl p-4 sm:p-5 border border-slate-200 shadow-sm flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Search Box */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search your Dhaka neighborhood..."
              className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-hidden focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20"
            />
          </div>

          {/* Zone Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-1.5 w-full md:w-auto">
            {zones.map((zone) => (
              <button
                key={zone}
                onClick={() => setSelectedZone(zone)}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors ${
                  selectedZone === zone
                    ? 'bg-slate-900 text-white shadow-xs'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                {zone}
              </button>
            ))}
          </div>
        </div>

        {/* Map Visualization & Neighborhood Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Stylized Dhaka City Map Graphic & Hubs */}
          <div className="lg:col-span-5 bg-slate-900 text-white rounded-3xl p-6 sm:p-8 border border-slate-800 shadow-xl relative overflow-hidden text-left">
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-400 flex items-center gap-1.5">
                <MapPin className="w-4 h-4" />
                Dhaka Mobile Dispatch Fleet
              </span>
              <span className="text-[11px] bg-slate-800 text-slate-300 px-2.5 py-1 rounded-full">
                Active Service Units
              </span>
            </div>

            <h3 className="text-xl font-bold tracking-tight text-white mb-2">
              Fast Response Across Dhaka
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6">
              Our service coordinators schedule technician visits based on neighborhood routes to reduce wait times and ensure prompt arrival at your flat or office.
            </p>

            {/* Stylized Vector Map Illustration of Dhaka Grid */}
            <div className="relative h-64 sm:h-72 w-full rounded-2xl bg-slate-950/80 border border-slate-800 p-4 flex flex-col justify-between">
              {/* Background Map Grid Pattern */}
              <div className="absolute inset-0 bg-[radial-gradient(#334155_1px,transparent_1px)] [background-size:16px_16px] opacity-40" />

              {/* Waterway / Lake Curve Representation (Hatirjheel / Gulshan Lake) */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-20" xmlns="http://www.w3.org/2000/svg">
                <path d="M 40,20 Q 150,120 220,180 T 320,260" fill="none" stroke="#10b981" strokeWidth="4" />
                <path d="M 120,40 Q 180,80 260,100" fill="none" stroke="#0ea5e9" strokeWidth="3" />
              </svg>

              {/* Interactive City Hub Markers */}
              <div className="relative z-10 grid grid-cols-2 gap-3 text-left">
                <div className="p-2.5 rounded-xl bg-slate-800/90 border border-emerald-500/40 shadow-md">
                  <div className="flex items-center gap-1.5 text-emerald-400 text-xs font-bold">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                    Gulshan / Banani Hub
                  </div>
                  <p className="text-[11px] text-slate-300 mt-1">Priority dispatch to Baridhara & Niketan</p>
                </div>

                <div className="p-2.5 rounded-xl bg-slate-800/90 border border-emerald-500/40 shadow-md">
                  <div className="flex items-center gap-1.5 text-emerald-400 text-xs font-bold">
                    <span className="w-2 h-2 rounded-full bg-emerald-400" />
                    Uttara & Bashundhara
                  </div>
                  <p className="text-[11px] text-slate-300 mt-1">Sectors 1-18 & Residential Blocks</p>
                </div>

                <div className="p-2.5 rounded-xl bg-slate-800/90 border border-slate-700 shadow-md">
                  <div className="flex items-center gap-1.5 text-teal-400 text-xs font-bold">
                    <span className="w-2 h-2 rounded-full bg-teal-400" />
                    Dhanmondi & Central
                  </div>
                  <p className="text-[11px] text-slate-300 mt-1">Lalmatia, Baily Road & Farmgate</p>
                </div>

                <div className="p-2.5 rounded-xl bg-slate-800/90 border border-slate-700 shadow-md">
                  <div className="flex items-center gap-1.5 text-teal-400 text-xs font-bold">
                    <span className="w-2 h-2 rounded-full bg-teal-400" />
                    DOHS Enclaves
                  </div>
                  <p className="text-[11px] text-slate-300 mt-1">Mirpur, Baridhara & Mohakhali DOHS</p>
                </div>
              </div>

              {/* Fleet Notice */}
              <div className="relative z-10 pt-2 border-t border-slate-800 text-[11px] text-slate-400 flex items-center gap-1.5">
                <Info className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>Mobile units stationed strategically for rapid dispatch.</span>
              </div>
            </div>

            {/* Disclaimer */}
            <p className="text-[11px] text-slate-400 mt-4 leading-normal">
              *Note: Services are operated via central logistics and mobile field units throughout Dhaka;
              we do not maintain separate walk-in retail offices in every individual neighborhood.
            </p>
          </div>

          {/* Neighborhoods Interactive List */}
          <div className="lg:col-span-7 space-y-3">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              {filteredAreas.map((area: DhakaNeighborhood, idx: number) => (
                <div
                  key={idx}
                  onClick={() => onSelectAreaForQuote(area.name)}
                  className={`p-4 rounded-xl border text-left cursor-pointer transition-all duration-200 flex flex-col justify-between ${
                    area.highlight
                      ? 'bg-white border-emerald-300 hover:border-emerald-500 shadow-xs hover:shadow-md'
                      : 'bg-white border-slate-200 hover:border-slate-300'
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between gap-2">
                      <h4 className="text-sm font-bold text-slate-900 flex items-center gap-1.5">
                        <MapPin className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                        <span>{area.name}</span>
                      </h4>
                      {area.highlight && (
                        <span className="text-[10px] font-extrabold uppercase px-1.5 py-0.5 rounded bg-emerald-100 text-emerald-800">
                          Priority
                        </span>
                      )}
                    </div>

                    <p className="text-xs text-slate-500 mt-1.5 line-clamp-1">
                      {area.popularPropertyTypes}
                    </p>
                  </div>

                  <div className="mt-3 pt-2 border-t border-slate-100 flex items-center justify-between text-[11px]">
                    <span className="text-slate-400 font-medium">{area.zone}</span>
                    <span className="text-emerald-700 font-semibold hover:underline">
                      Book For {area.name} →
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {filteredAreas.length === 0 && (
              <div className="p-8 text-center bg-white rounded-2xl border border-slate-200 text-slate-500">
                <p className="text-sm font-medium">
                  Don&apos;t see your specific Dhaka neighborhood in this quick search?
                </p>
                <p className="text-xs mt-1 text-slate-400">
                  We service all locations across greater Dhaka. Contact our dispatch desk directly to confirm your booking.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
